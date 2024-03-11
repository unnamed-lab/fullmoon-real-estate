import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./components/App";
import { StaticRouter } from "react-router-dom/server";
import { Router } from "./routes/Routes";

export function render({path}) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Router />
    </StaticRouter>
  );
  return { html };
}
