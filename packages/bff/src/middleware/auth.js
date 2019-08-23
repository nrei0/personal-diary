import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
import session from "express-session";
import { google } from "googleapis";
import { OAuth2Client } from 'google-auth-library';

/**
 * @typedef {import('express').Express} Express
 * @typedef {import('express').RequestHandler} RequestHandler
 * @typedef {import('google-auth-library').OAuth2Client} OAuth2Client
 */

/**
 * @typedef {Object} RegisterOAuthClientProps
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
 * @typedef {Object} OAuthRegistration
 * @property {string} oAuthUrl Authorization URI.
 * @property {OAuth2Client} oAuthClient Authorization client.
 */

/**
 * Auth express middleware.
 *
 * @param {RegisterOAuthClientProps} props Props.
 * @returns {OAuthRegistration}
 */
export const registerOAuthClient = ({
  clientID,
  clientSecret,
  callbackURL
}) => {
  // tbd @ateiri remove hardcoded domain.
  const oAuthClient = new OAuth2Client(clientID, clientSecret, "http://localhost:8080" + callbackURL);

  const oAuthUrl = oAuthClient.generateAuthUrl({
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/drive.file"
    ]
  });

  return { oAuthClient, oAuthUrl };
};

/**
 * OAuth Express middleware.
 *
 * Initialize session for a new customer.
 */
export const initOAuth = (app, oAuthClient) => {
  app.get(authUrl, (_, res) => { res.redirect(oAuthClient.generateAuthUrl({
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/drive.file"
    ]
  })); })
}

/**
 * Init authorization.
 *
 * @param {AuthMiddlewareProps & { app: Express }} props Props.
 */
//export const initAuthorization = ({
//  app,
//  clientID,
//  clientSecret,
//  callbackURL
//}) => {
//  app.use(cookieParser());
//  app.use(bodyParser.json());
//  // tbd @ateiri everybody know until you will not specify secret in envs...
//  app.use(
//    session({
//      secret: "nobody know my secrets",
//      resave: false,
//      saveUninitialized: false
//    })
//  );
//  app.use(authMiddleware({ clientID, clientSecret, callbackURL }));
//
//  // tbd @ateiri should initialize session for user.
//};

/**
 * Set auth routes for express app.
 *
 * @param {SetAuthRoutesProps} props Props.
 */
//export const setAuthRoutes = ({
//  app,
//  authURL,
//  logoutURL,
//  callbackURL,
//  failureCallbackURL
//}) => {
//  app.get(
//    authURL,
//    passport.authenticate("google", {
//      scope: [
//        "https://www.googleapis.com/auth/userinfo.profile",
//        "https://www.googleapis.com/auth/drive.file"
//      ]
//    })
//  );
//
//  app.get(logoutURL, (req, res) => {
//    req.logout();
//    // tbd @ateiri no hard-code.
//    res.redirect("/");
//  });
//
//  app.get(
//    callbackURL,
//    passport.authenticate("google", {
//      failureRedirect: failureCallbackURL
//    }),
//    (req, res) => {
//      // tbd @ateiri no hard-code.
//      res.redirect("/dashboard");
//    }
//  );
//};
