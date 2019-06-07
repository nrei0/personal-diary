module.exports = api => {
  api.cache(false);

  return {
    ignore: [/node_modules/],
    babelrcRoots: ['.', './src/*'],
    presets: ['@babel/preset-env'],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: true,
          useESModules: false
        }
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: false
        }
      ],
      '@babel/plugin-syntax-dynamic-import'
    ]
  };
};
