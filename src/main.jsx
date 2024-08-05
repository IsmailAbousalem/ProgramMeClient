import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { PostProviderWrapper } from "./context/PostContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Router>
    <PostProviderWrapper>
      <App />
    </PostProviderWrapper>
  </Router>
  // </React.StrictMode>
);
