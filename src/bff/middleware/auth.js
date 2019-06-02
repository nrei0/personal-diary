import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const _ = undefined;

export const authMiddleware = ({ clientID, clientSecret, callbackURL }) => {
  passport.serializeUser((user, done) => {
    done(_, user);
  });

  passport.deserializeUser((user, done) => {
    done(_, user);
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID,
        clientSecret,
        callbackURL
      },
      (token, refreshToken, profile, done) => done(_, profile)
    )
  );

  return passport.initialize();
};

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
