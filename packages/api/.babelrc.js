const rootBabelrc = require('../../.babelrc.js');

module.exports = {
  ...rootBabelrc,
  ignore: [/node_modules/],
  plugins: [...rootBabelrc.plugins, 'dynamic-import-node'],
  sourceMaps: true
};
