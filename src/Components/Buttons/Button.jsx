import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import { Link } from 'react-router-dom';

function Button({ id, country }) {
  return (
    <Link to={`/detail/${id}/${country}`}>
      <button className="btn" type="button">
        <i className="fas fa-arrow-right" />
      </button>
    </Link>
  );
}

export default Button;

Button.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
