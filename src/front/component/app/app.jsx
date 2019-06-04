import Loadable from 'react-loadable';
import React from 'react';

import { AppShell } from '../app_shell';

const AuthPage = Loadable({
  loader: () => import('../auth_page'),
  loading: () => <div>Loading</div>,
  render: ({ AuthPage }, props) => <AuthPage {...props} />
});

export const App = () => (
  <AppShell>
    <AuthPage>
  </AppShell>
);
