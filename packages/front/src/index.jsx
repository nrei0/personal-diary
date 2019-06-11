import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './component/app';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.hydrate(<App />, document.getElementById('app'));
});
