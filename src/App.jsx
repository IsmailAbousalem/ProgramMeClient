import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
