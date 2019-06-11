const rootBabelrc = require('../../.babelrc.js');

module.exports = {
  ...rootBabelrc,
  presets: [...rootBabelrc.presets, '@babel/preset-react'],
  plugins: [...rootBabelrc.plugins, '@babel/plugin-syntax-dynamic-import'],
  sourceMaps: true,
  ignore: [/node_modules/]
};
