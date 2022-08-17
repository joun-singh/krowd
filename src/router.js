import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
const ScrollToTop = lazy(()=> import("./ScrollToTop"))
const Welcome = lazy(()=> import("./pages/Welcome"))

const Router = () => {

  return (
    <Suspense fallback={<LinearProgress />}>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
