import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/custom.css";
import { Router } from "./routes";
import { JotaiProvider } from "./components/jotai-provider";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <JotaiProvider>
      <Router />
    </JotaiProvider>
  </StrictMode>
);
