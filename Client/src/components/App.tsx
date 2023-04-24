import "../index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { MainPageAsync } from "../Pages/MainPage/MainPage.async";
import { AboutPageAsync } from "../Pages/AboutPage/AboutPage.async";

import { Suspense } from "react";
import MainPage from "../Pages/MainPage/MainPage";
import AboutPage from "../Pages/AboutPage/AboutPage";

export default function App() {
  return (
    <div className="app">
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
