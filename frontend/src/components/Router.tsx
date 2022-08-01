import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../screens/Home";
import NavMenu from "./NavMenu";
function Router() {
  return (
    <BrowserRouter>
      <NavMenu />
      <div className="body-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
