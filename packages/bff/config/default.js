const googleAuthURL = '/auth/g';
const googleLogoutURL = '/auth/g/logout';

module.exports = {
  bff: {
    port: 8081,
    manifestPath: '@pd/front/.dist/manifest.json',
    auth: {
      google: {
        authURL: googleAuthURL,
        logoutURL: googleLogoutURL,
        callbackURL: '/auth/g/cb',
        failureCallbackURL: '/auth/g/err'
      }
    },
    frontConfig: {
      googleAuthURL,
      googleLogoutURL,
      isLogged: false
    }
  }
};
