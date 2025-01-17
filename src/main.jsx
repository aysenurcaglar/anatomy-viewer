import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModelsProvider } from "./contexts/ModelsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModelsProvider>
      <App />
    </ModelsProvider>
  </StrictMode>
);
