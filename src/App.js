import React from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={MainPage} path="/" />
    </>
  );
}

export default App;
