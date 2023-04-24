import '../index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { MainPageAsync } from './Pages/MainPage/MainPage.async';
import { AboutPageAsync } from './Pages/AboutPage/AboutPage.async';

import { Suspense } from 'react';
import AppNavbar from './UI/AppNavbar';

export default function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
