import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./Screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
