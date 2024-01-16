import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary";
import Fallback from "./Components/Fallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Fallback />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
