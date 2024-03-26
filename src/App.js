import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";

const App = () => {
  return <Router>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/singleproduct" element={<SingleProduct/>}></Route>
        <Route path="/about" element={<About/>}></Route>
    </Routes>
  </Router>


};

export default App;
