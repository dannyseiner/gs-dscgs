import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Artist from "../screens/Artist";
import Home from "../screens/Home";
import Release from "../screens/Release";
import NavMenu from "./NavMenu";
function Router() {
  return (
    <BrowserRouter>
      <NavMenu />
      <div className="body-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/release/:id" element={<Release />} />
          <Route path="/artist/:id" element={<Artist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
