import React from 'react';
import PropTypes from 'prop-types';

function ButtonMaker({ value, onClickChange }) {
  ButtonMaker.propTypes = {
    value: PropTypes.string.isRequired,
    onClickChange: PropTypes.string.isRequired,
  };
  return (
    <button type="button" key={value} onClick={() => onClickChange(value)}>
      {value}
    </button>
  );
}
export default ButtonMaker;
