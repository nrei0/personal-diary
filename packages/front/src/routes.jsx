import { App } from './component/app';
import { MainPage } from './component/main_page';
import { DashboardPage } from './component/dashboard_page';
import { ErrorPage } from './component/error_page';
import { AuthPage } from './component/auth_page';

/** @type {import('react-router-config').RouteConfig[]} */
export const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: MainPage
      },
      {
        path: '/dashboard',
        exact: true,
        component: DashboardPage
      },
      {
        path: '/auth',
        exact: true,
        component: AuthPage
      },
      {
        path: '*',
        component: ErrorPage
      }
    ]
  }
];
