import React from 'react';
import { renderToString } from 'react-dom/server';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import { App } from '../../client/component/app';

export const univeralMiddleware = ({ statsPath, manifestPath }) => (_, res) => {
  const modules = [];
  const stats = require(statsPath);
  const manifest = require(manifestPath);

  // Main app bundle is part of component chunks and not included here.
  const scriptPaths = ['vendor.app.js', 'styles.js'].map(name => manifest[name]).filter(Boolean);
  const linkPaths = ['styles.css'].map(name => manifest[name]).filter(Boolean);

  const html = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App />
    </Loadable.Capture>
  );

  const bundles = getBundles(stats, modules);

  res.set('Content-Type', 'text/html');
  res.send(`
  <!doctype html>
  <html lang="en">
    <head>
      ${linkPaths
        .map(path => `<link href="/${path}" rel="stylesheet" type="text/css" />`)
        .join('\n')}
      ${scriptPaths.map(path => `<script src="/${path}"></script>`).join('\n')}
      <title>hola world</title>
    </head>
    <body>
      <div id="app">${html}</div>
      ${bundles.map(bundle => `<script src="/${bundle.file}"></script>`).join('\n')}
    </body>
  </html>
`);
};
