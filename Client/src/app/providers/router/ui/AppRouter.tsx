import AboutPage from 'Pages/AboutPage/ui/AboutPage';
import MainPage from 'Pages/MainPage/ui/MainPage';
import AppNavbar from 'components/UI/AppNavbar';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppNavbar />
      <Routes>
        {Object.values(routeConfig.main).map(({ element, path }) => {
          <Route key={path} element={element} path={path} />;
        })}
      </Routes>
    </Suspense>
  );
}
