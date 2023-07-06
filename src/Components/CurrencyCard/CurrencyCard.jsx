import React from 'react';
import PropTypes from 'prop-types';
import './CurrencyCard.css';
import Button from '../Buttons/Button';

export default function CurrencyCard({ currency, country }) {
  return (
    <div className="currency_card">
      <div className="currency_card_container">
        <h5 className="country_currency">{currency}</h5>
        <h6 className="country_name">{country}</h6>
      </div>
      <div className="btn_container">
        <Button id={currency} country={country} />
      </div>
    </div>
  );
}

export const Card = ({ currency, country }) => (
  <div className="simple_card">
    <div className="simple_card_container">
      <h1>{currency}</h1>
      <h3>{country}</h3>
    </div>
  </div>
);
CurrencyCard.propTypes = {
  currency: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

Card.propTypes = {
  currency: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
