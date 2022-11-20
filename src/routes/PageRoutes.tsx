import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Products from "../pages/Products";
import Authentication from "../pages/Authentication/Authentication";
import Function from "../pages/Function";

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Authentication />} />
        <Route path="/function" element={<Function />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
