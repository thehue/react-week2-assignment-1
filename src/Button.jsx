/* eslint-disable react/prop-types */
import React from 'react';

function Button({ children, onClick }) {
  return <button type="button" onClick={onClick}>{children}</button>;
}

export default Button;
