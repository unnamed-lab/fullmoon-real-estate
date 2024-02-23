import React from "react";
// import ReactDOM from "react-dom/client";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../styles/css/root.css";


const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app);
}

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
