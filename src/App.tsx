import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NoMatch from "./NoMatch";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
