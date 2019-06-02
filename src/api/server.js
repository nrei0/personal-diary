import express from 'express';
import config from 'config';

import { createLogger } from './logger';

/** @typedef { import('http').Server } http.Server */
/** @typedef { import('winston').Logger } Logger */

// Settings.
const { port } = config.get('api');

/**
 * Stop server.
 *
 * @param {{ server: http.Server, logger: Logger }} props Props.
 */
export const stopServer = ({ server, logger }) => () => {
  server.close(() => {
    logger.info('API server successfully terminated');
  });
};

/**
 * Start server.
 *
 * @param {{ process: NodeJS.Process }} props Props.
 */
export const startServer = ({ process }) => () => {
  const app = express();
  const logger = createLogger({ process });

  const server = app.listen(port, () => logger.info(`API listening on :${port}`));

  process.on('SIGINT', stopServer({ server, logger }));
  process.on('SIGTERM', stopServer({ server, logger }));
};
