// React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Global styles
import "./index.css";

// Font
import "@fontsource-variable/onest";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
