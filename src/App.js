import React from "react";
import "./App.css";

import Card from "./Components/Card";
import Table from "./Components/Table";
import FetchApi from "./Components/FetchApi";
import Timer from "./Components/Timer";
import Nav from "./Components/Nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./Components/Product";
import Electronic from "./Components/Electronic";
// import Jewellery from "./Components/Jewellery";
// import Menscloth from "./Components/Menscloth";

function App() {
  return (
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/card" element={<Card />} />
          <Route path="/table" element={<Table />} />
          <Route path="/api" element={<FetchApi />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/Product" element={<Product />} > 
          <Route path="electronic" element={<Electronic />} />
          {/* <Route path="jewellery" element={<Jewellery />} /> */}
          {/* <Route path="menscloth" element={<Menscloth />} /> */}
          
          </Route>
        </Routes>
      </div>
  );
}

export default App;
