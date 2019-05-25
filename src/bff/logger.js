import winston from 'winston';

import { isProduction } from './util';

/**
 * Create logger.
 *
 * @param {Object} o Options.
 * @param {NodeJS.Process} o.process NodeJS process.
 * @returns {winston.Logger} Winston logger.
 */
export const createLogger = ({ process }) => {
  const logger = winston.createLogger({
    level: 'info'
  });

  if (!isProduction(process)) {
    logger.add(
      new winston.transports.Console({
        format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
        level: 'debug'
      })
    );
  } else {
    // tbd @ateiri define production logger.
  }

  return logger;
};
