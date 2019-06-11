import React from 'react';

/**
 * Button component.
 *
 * @typedef {Object} ButtonProps
 * @property {string} text Button text.
 * @property {function(React.FormEvent)} onClick Click handler.
 *
 * @param {ButtonProps} props Props.
 * @returns {React.FunctionComponentElement<ButtonProps>}
 */
export const Button = ({ text, onClick }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);
