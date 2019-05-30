import Loadable from 'react-loadable';
import React from 'react';

import { AppShell } from '../app_shell';

const AuthPage = Loadable({
  loader: () => import('../auth_page').then(({ AuthPage }) => AuthPage),
  loading: () => <div>Loading</div>
});

export const App = () => (
  <AppShell>
    <AuthPage />
  </AppShell>
);
