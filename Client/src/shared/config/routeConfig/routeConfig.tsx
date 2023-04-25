import { AboutPage } from 'Pages/AboutPage';
import { MainPage } from 'Pages/MainPage';
import SignIn from 'components/UI/Auth/SignIn/SignIn';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  SIGNIN = 'signin',
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.SIGNIN]: '/signin',
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.SIGNIN]: {
    path: RoutePath.signin,
    element: <SignIn />,
  },
};
