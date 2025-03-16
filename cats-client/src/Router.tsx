import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AddCat } from "./Pages/Manage";

const Router = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-cat" element={<AddCat />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
