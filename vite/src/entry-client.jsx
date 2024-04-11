import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Routes";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
