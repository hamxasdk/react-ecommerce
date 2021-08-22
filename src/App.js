import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";
import {
  Home,
  SingleProduct, // product Image Page and Single Product image logics are important Remember
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from "./pages";
import ErrorPage from "./pages/ErrorPage";
// `` tag template literals
// ctrl +shift + L for multiple cursor
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />}></Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
