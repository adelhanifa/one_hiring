import React from "react";
import PropTypes from "prop-types";

function Button({ label, type }) {
  return <button className={`button ${type}`}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
