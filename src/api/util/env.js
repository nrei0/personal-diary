/**
 * Check is production environment.
 *
 * @param {NodeJS.Process} process NodeJS Process.
 * @returns {boolean} `true` if production environment, otherwise `false`.
 */
export const isProduction = process => process.env.NODE_ENV === 'production';
