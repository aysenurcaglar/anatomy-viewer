import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModelsProvider } from "./contexts/ModelsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModelsProvider>
      <App />
    </ModelsProvider>
  </StrictMode>
);
