import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import AppNavbar from 'components/UI/AppNavbar';
import { MainPage } from 'Pages/MainPage';
import { AboutPage } from 'Pages/AboutPage';
import { AppRouter } from './providers/router';

export default function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}
