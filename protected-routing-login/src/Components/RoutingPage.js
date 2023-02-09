import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";
function RoutingPage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} exact path="/login" />
          <Route element={<PrivateRoute />}>
            <Route element={<HomePage />} path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutingPage;
