require('@babel/register')({
  rootMode: 'upward',
  ignore: [/node_modules/],
  presets: ['@babel/preset-react'],
  plugins: [
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
});
