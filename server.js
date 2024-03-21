import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p) => path.resolve(__dirname, p);

// Cached production assets
const templateHtml = isProduction
  ? fs.readFileSync(resolve("dist/client/index.html"), "utf-8")
  : "";

const ssrManifest = isProduction
  ? await fs.readFileSync(
      resolve("./dist/client/.vite/ssr-manifest.json"),
      "utf-8"
    )
  : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  app.use((await import("compression")).default());
  app.use(
    (await import("serve-static")).default(resolve("dist/client"), {
      index: false,
    })
  );

  // const sirv = (await import("sirv")).default;
  // app.use(base, sirv("./dist/client", { extensions: [] }));
}

// Serve HTML
app.use("*", async (req, res) => {
  try {
    // const url = req.originalUrl.replace(base, "");
    const url = "/";

    let template;
    let render;
    if (!isProduction) {
      // Always read fresh template in development
      // template = await fs.readFile("./index.html", "utf-8");
      template = fs.readFileSync(resolve("./index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);

      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const rendered = await render(url, ssrManifest);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
