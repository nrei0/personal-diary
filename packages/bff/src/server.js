import express from 'express';
import config from 'config';

import { createLogger } from './logger';
import { univeralMiddleware, authMiddleware, setAuthRoutes } from './middleware';

/** @typedef { import('http').Server } http.Server */
/** @typedef { import('winston').Logger } Logger */

// Settings.
const {
  port,
  statsPath,
  manifestPath,
  auth: {
    google: { clientID, authURL, callbackURL, failureCallbackURL, clientSecret }
  }
} = config.get('bff');

/**
 * Stop server.
 *
 * @param {{ server: http.Server, logger: Logger }} props Props.
 * @returns {NodeJS.SignalsListener}
 */
export const stopServer = ({ server, logger }) => () => {
  server.close(() => {
    logger.info('BFF server successfully terminated');
  });
};

/**
 * Start server.
 *
 * @param {{ process: NodeJS.Process }} props Props.
 * @returns {function}
 */
export const startServer = ({ process }) => () => {
  const app = express();
  const logger = createLogger({ process });

  app.use(authMiddleware({ clientID, clientSecret, callbackURL }));
  setAuthRoutes({ app, authURL, callbackURL, failureCallbackURL });
  app.get('*', univeralMiddleware({ statsPath, manifestPath }));

  const server = app.listen(port, () => logger.info(`BFF listening on :${port}`));

  process.on('SIGINT', stopServer({ server, logger }));
  process.on('SIGTERM', stopServer({ server, logger }));
};
