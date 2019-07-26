import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
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
 * @property {string} logoutURL Logout route.
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
 * Init authorization.
 *
 * @param {AuthMiddlewareProps & { app: Express }} props Props.
 */
export const initAuthorization = ({ app, clientID, clientSecret, callbackURL }) => {
  app.use(cookieParser());
  app.use(bodyParser.json());
  // tbd @ateiri everybody know until you will not specify secret in envs...
  app.use(session({ secret: 'nobody know my secrets', resave: false, saveUninitialized: false }));
  app.use(authMiddleware({ clientID, clientSecret, callbackURL }));
  app.use(passport.session());
};

/**
 * Set auth routes for express app.
 *
 * @param {SetAuthRoutesProps} props Props.
 */
export const setAuthRoutes = ({ app, authURL, logoutURL, callbackURL, failureCallbackURL }) => {
  app.get(
    authURL,
    passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/drive.file'
      ]
    })
  );

  app.get(logoutURL, (req, res) => {
    req.logout();
    // tbd @ateiri no hard-code.
    res.redirect('/');
  });

  app.get(
    callbackURL,
    passport.authenticate('google', {
      failureRedirect: failureCallbackURL
    }),
    (req, res) => {
      // tbd @ateiri no hard-code.
      res.redirect('/dashboard');
    }
  );
};
