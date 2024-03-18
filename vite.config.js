import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  root: "./",
  build: {
    minify: false,
    outDir: "dist",
  },
  publicDir: ["public", "public/static"],
});
