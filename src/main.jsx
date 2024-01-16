import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback="Unfortunately that is an invalid combination. Please refresh the page and try again. This is an error message.">
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
