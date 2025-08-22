import React from "react";
import ReactDOM from "react-dom/client"; // Ensure you’re using the correct ReactDOM package
import App from "./App";
import "./index.css"; // Adjust the path if necessary
import "./i18n"; // Import i18n configuration

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
