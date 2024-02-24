// import ReactDOM from "react-dom/client";
// import { hydrateRoot, createRoot } from "react-dom/client";
import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App.jsx";
import "../styles/css/root.css";


const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<StrictApp />, rootElement);
} else {
  render(<StrictApp />, rootElement);
}

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
