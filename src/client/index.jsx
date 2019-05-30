import Loadable from 'react-loadable';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './component/app';

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(<App />, document.getElementById('app'));
});
