import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {homePath, addCatPath} from './config.json'
import { Home } from "../pages/home";
import { AddCat } from "../pages/addCat";

const Router = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homePath} element={<Home />}></Route>
        <Route path={addCatPath} element={<AddCat />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
