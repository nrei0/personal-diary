import express from 'express';
import config from 'config';

import { createLogger } from './logger';

// Settings.
const { port } = config.get('bff');

/**
 * Start server.
 *
 * @param {{ process: NodeJS.Process }} props Props.
 */
export const startServer = ({ process }) => () => {
  const app = express();
  const logger = createLogger({ process });

  app.get('/', (_, res) => res.send('Hello World!'));

  app.listen(port, () => logger.info(`BFF listening on :${port}`));
};
