import Header from "./Header";
import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    // its using BEM(__shahzad) Naming convencention
    <BrowserRouter>
      <Header />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
