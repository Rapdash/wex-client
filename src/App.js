import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import { Header } from "./shared/Header";

import { ListingsPage } from "./pages/Listings";
import { LoginPage } from "./pages/Login";

export const App = () => (
  <BrowserRouter>
    <Redirect from="/" to="/listings" exact />
    <Header />
    <Route path="/login" component={LoginPage} />
    <Route path="/listings" component={ListingsPage} />
  </BrowserRouter>
);
