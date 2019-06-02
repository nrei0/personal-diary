import Loadable from 'react-loadable';
import express from 'express';
import config from 'config';
import path from 'path';

import { createLogger } from './logger';
import { univeralMiddleware } from './middleware';

/** @typedef { import('http').Server } http.Server */
/** @typedef { import('winston').Logger } Logger */

// Settings.
const { port, statsPath, manifestPath } = config.get('bff');

/**
 * Stop server.
 *
 * @param {{ server: http.Server, logger: Logger }} props Props.
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
 */
export const startServer = ({ process }) => () => {
  const app = express();
  const logger = createLogger({ process });

  app.get('/', univeralMiddleware({ statsPath, manifestPath }));

  // tbd @ateiri Express static is very slow, better to look forward of using Nginx intstead.
  app.use(express.static(path.join(__dirname, '../../.dist')));

  Loadable.preloadAll().then(() => {
    const server = app.listen(port, () => logger.info(`BFF listening on :${port}`));

    process.on('SIGINT', stopServer({ server, logger }));
    process.on('SIGTERM', stopServer({ server, logger }));
  });
};
