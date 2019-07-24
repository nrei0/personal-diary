import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';

import { routes } from './routes';

export const renderApp = () => renderRoutes(routes);

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.hydrate(<BrowserRouter>{renderApp()}</BrowserRouter>, document.getElementById('app'));
  });
}
