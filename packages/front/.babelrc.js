const rootBabelrc = require('../../.babelrc.js');

module.exports = {
  ...rootBabelrc,
  presets: [...rootBabelrc.presets, '@babel/preset-react'],
  sourceMaps: true,
  ignore: [/node_modules/]
};
