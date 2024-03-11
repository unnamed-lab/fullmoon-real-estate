import { hydrateRoot, createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "../styles/css/root.css";

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
