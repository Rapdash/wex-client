import React from "react";
import { auth } from "firebase/app";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { Header } from "./shared/Header";

import { ListingsPage } from "./pages/Listings";
import { LoginPage } from "./pages/Login";

export const App = () => {
  const [user, loading] = useAuthState(auth());
  return (
    <BrowserRouter>
      {!user && !loading && <Redirect to="/login" />}
      {user && <Redirect from="/" to="/listings" exact />}
      <Header />
      <Route path="/login" component={LoginPage} />
      <Route path="/listings" component={ListingsPage} />
    </BrowserRouter>
  );
};
