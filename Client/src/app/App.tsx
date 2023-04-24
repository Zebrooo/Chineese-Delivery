// import '../index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import AppNavbar from '../components/UI/AppNavbar';
import { MainPageAsync } from '../components/Pages/MainPage/MainPage.async';
import { AboutPageAsync } from '../components/Pages/AboutPage/AboutPage.async';

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
