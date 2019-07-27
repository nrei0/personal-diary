/**
 * Auth by google.
 *
 * @param {string} googleAuthURL Google Auth URL.
 */
export const authByGoogle = googleAuthURL => () => {
  window.location.replace(googleAuthURL);
};

/**
 * Logout.
 *
 * @param {string} googleLogoutURL Google logout URL.
 */
export const logout = googleLogoutURL => () => {
  window.location.replace(googleLogoutURL);
};
