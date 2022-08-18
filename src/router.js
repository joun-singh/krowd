import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

const ScrollToTop = lazy(()=> import("./ScrollToTop"))
const Welcome = lazy(()=> import("./pages/Welcome"))
const Signup = lazy(()=> import("./pages/Signup"))

const Router = () => {

  return (
    <Suspense fallback={<LinearProgress />}>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/create-account" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
