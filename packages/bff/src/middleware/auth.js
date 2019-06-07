import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

/**
 * @typedef {import('express').Express} Express
 * @typedef {import('express').RequestHandler} RequestHandler
 */

/**
 * @typedef {Object} AuthMiddlewareProps
 * @property {string} clientID Google client id.
 * @property {string} clientSecret Google client secret.
 * @property {string} callbackURL Google callback URL.
 */

/**
 * @typedef {Object} SetAuthRoutesProps
 * @property {Express} app Express app.
 * @property {string} authURL Google auth route.
 * @property {string} callbackURL Google callback url.
 * @property {string} failureCallbackURL Google failure callback URL.
 */

/**
 * Auth express middleware.
 *
 * @param {AuthMiddlewareProps} props Props.
 * @returns {RequestHandler}
 */
export const authMiddleware = ({ clientID, clientSecret, callbackURL }) => {
  passport.serializeUser((user, done) => {
    done(undefined, user);
  });

  passport.deserializeUser((user, done) => {
    done(undefined, user);
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID,
        clientSecret,
        callbackURL
      },
      (token, refreshToken, profile, done) => done(undefined, profile)
    )
  );

  return passport.initialize();
};

/**
 * Set auth routes for express app.
 *
 * @param {SetAuthRoutesProps} props Props.
 */
export const setAuthRoutes = ({ app, authURL, callbackURL, failureCallbackURL }) => {
  app.get(
    authURL,
    passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/drive.file'
      ]
    })
  );

  app.get(
    callbackURL,
    passport.authenticate('google', {
      failureRedirect: failureCallbackURL
    }),
    (req, res) => {
      res.redirect('/');
    }
  );
};
