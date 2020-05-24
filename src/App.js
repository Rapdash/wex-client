import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import { Header } from "./shared/Header";
import { ListingsPage } from "./pages/Listings";

export const App = () => (
  <BrowserRouter>
    <Redirect from="/" to="/listings" exact />
    <Header />
    <Route path="/listings" component={ListingsPage} />
  </BrowserRouter>
);
