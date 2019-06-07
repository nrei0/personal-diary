const babelrc = require('./.babelrc.js');

require('@babel/register')({
  rootMode: 'upward',
  ...babelrc
});
