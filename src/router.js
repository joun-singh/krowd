import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

const ScrollToTop = lazy(() => import("./ScrollToTop"));
const Welcome = lazy(() => import("./pages/Welcome"));
const Signup = lazy(() => import("./pages/Signup"));
const OtpCode = lazy(() => import("./pages/OtpCode"));
const Rewards = lazy(() => import("./pages/Rewards"));
const HowCardWork = lazy(() => import("./pages/HowCardWork"));
const LinkCard = lazy(() => import("./pages/LinkCard"));
const Cards = lazy(() => import("./pages/Cards"));
const Home = lazy(() => import("./pages/Home"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Search = lazy(() => import("./pages/Search"));

const Router = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/create-account" element={<Signup />} />
          <Route path="/activation" element={<OtpCode />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/how-works" element={<HowCardWork />} />
          <Route path="/link-card" element={<LinkCard />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/find" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
