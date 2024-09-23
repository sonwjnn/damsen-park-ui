import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./routes";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <Router />
  </StrictMode>
);
