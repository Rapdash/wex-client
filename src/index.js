import React from "react";
import ReactDOM from "react-dom";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

import "./tailwind.generated.css";

initializeApp({
  apiKey: "AIzaSyAwdLyBI_1-6j9at_RdSlHXxi60Nqp0kvA",
  authDomain: "waterexchange-d71a2.firebaseapp.com",
  databaseURL: "https://waterexchange-d71a2.firebaseio.com",
  projectId: "waterexchange-d71a2",
  storageBucket: "waterexchange-d71a2.appspot.com",
  messagingSenderId: "818773423873",
  appId: "1:818773423873:web:85b542c567d0354c810d00",
  measurementId: "G-W76QCTCRKT",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
