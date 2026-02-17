import React from "react";
import "./App.css";

import Card from "./Components/Card";
import Table from "./Components/Table";
import FetchApi from "./Components/FetchApi";
import Timer from "./Components/Timer";
import Nav from "./Components/Nav";
import SimpleTodo, { Form } from "./Components/Form";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./Components/Product";
import Electronic from "./Components/Electronic";
import Jewellery from "./Components/Jewellery";
import Menscloth from "./Components/Menscloth";
import Homepage from "./Components/Homepage";
import ProductDetails from "./Components/ProductDetails";
import ProductData from "./Components/ProductData";
import Props from "./Components/Props";
import Input from "./Components/redux/Input";
import Display from "./Components/redux/Display";
import Database from "./Components/Database";
import FirebaseDb from "./Components/FirebaseDb"
import AddUser from "./Components/AddUser";
import FirebaseAuth from "./Components/FirebaseAuth";

function App() {
  return (
    <div className="App">
      {/* <SimpleTodo /> */}
      {/* <Form /> */}
      {/* <CommentReview/> */}
      {/* <FetchApi /> */}
      {/* <Nav /> */}
      {/* <Homepage /> */}
      {/* <Props /> */}
      {/* <ProductData /> */}

      {/* <Input /> */}
      {/* <Display /> */}
      {/* <Database /> */}
      {/* <FirebaseDb /> */}
      {/* <AddUser /> */}
      <FirebaseAuth />

      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/table" element={<Table />} />
        <Route path="/api" element={<FetchApi />} />
        <Route path="/timer" element={<Timer />} />

        <Route path="/product" element={<Product />}>
          <Route path="electronic" element={<Electronic />} />
          <Route path="jewellery" element={<Jewellery />} />
          <Route path="menscloth" element={<Menscloth />} />
        </Route>

        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
