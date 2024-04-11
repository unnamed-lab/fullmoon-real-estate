import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./components/App";
import { StaticRouter } from "react-router-dom/server";
import { Router, helmetContext } from "./routes/Routes";
import { Helmet } from "react-helmet-async";

export function render({ path }) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Router />
    </StaticRouter>
  );

  const { helmet } = helmetContext;
  const head = `
  ${helmet.title.toString()} 
  ${helmet.priority.toString()} 
  ${helmet.meta.toString()} 
  ${helmet.link.toString()} 
  ${helmet.script.toString()}
  `;
  return { html, head };
}
