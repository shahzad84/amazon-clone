import Header from "./Header";
import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    // its using BEM(__shahzad) Naming convencention
    <BrowserRouter>
      <Header />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
