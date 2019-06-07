const path = require('path');
const rootBabelrc = require('../../.babelrc.js');

module.exports = {
  ...rootBabelrc,
  ignore: [/node_modules/],
  presets: [...rootBabelrc.presets, '@babel/preset-react'],
  plugins: [
    ...rootBabelrc.plugins,
    'dynamic-import-node',
    [
      'css-modules-transform',
      {
        devMode: false,
        extensions: ['.scss'],
        generateScopedName: '[local]__[hash:base64:8]',
        rootDir: path.resolve(__dirname, '../front')
      }
    ]
  ],
  sourceMaps: true
};
