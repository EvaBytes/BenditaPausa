import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {GlobalStyles} from "./styles/GlobalStyles";
import App from "./App";
import "./styles/main.scss";

const root = document.getElementById("root");

if (!root) throw new Error("No se encontró el elemento con id 'root'");

createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
