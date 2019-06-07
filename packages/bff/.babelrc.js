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
        devMode: true,
        extensions: ['.scss'],
        generateScopedName: '[local]__[hash:base64:8]'
      }
    ]
  ],
  sourceMaps: true
};
