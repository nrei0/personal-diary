const babelrc = require('./.babelrc.js');

module.exports = api => {
  api.cache(false);

  return {
    babelrcRoots: ['.', './packages/*'],
    ...babelrc
  };
};
