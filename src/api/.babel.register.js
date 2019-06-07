require('@babel/register')({
  rootMode: 'upward',
  ignore: [/node_modules/],
  plugins: ['dynamic-import-node'],
  sourceMaps: true
});
