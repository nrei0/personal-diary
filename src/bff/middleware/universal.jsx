import React from 'react';
import { renderToString } from 'react-dom/server';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import { App } from '../../client/component/app';

export const univeralMiddleware = ({ statsPath, manifestPath }) => (_, res) => {
  let modules = [];
  const stats = require(statsPath);
  const manifest = require(manifestPath);

  // Main app bundle is part of component chunks and not included here.
  let scriptPaths = ['vendor.app.js'].map(name => manifest[name]);

  let html = renderToString(
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
      ${scriptPaths.map(path => `<script src="/${path}"></script>`).join('\n')}
      <title>hola world</title>
    </head>
    <body>
      <div id="app">${html}</div>
      ${bundles
        .map(bundle => {
          return `<script src="/${bundle.file}"></script>`;
        })
        .join('\n')}
    </body>
  </html>
`);
};
