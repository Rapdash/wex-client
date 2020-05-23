import React from "react";
import { Header } from "./shared/Header";
import { BrowserRouter, Redirect } from "react-router-dom";

export const App = () => (
  <BrowserRouter>
    <Redirect from="/" to="/listings" exact />
    <Header />
    <div />
  </BrowserRouter>
);
