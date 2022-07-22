import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
//No React 18 utilizamos createRoot ao invés de ReactDOM.
const root = createRoot(container!); 

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
