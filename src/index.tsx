import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // optional if you have CSS
import App from "./App"; // your App component

// Mount React app into the HTML
ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
