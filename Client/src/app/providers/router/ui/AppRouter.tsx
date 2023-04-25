import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import AppNavbar from 'widgets/AppNavBar/AppNavbar';

export default function AppRouter() {
  console.log(routeConfig);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppNavbar />
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
}
