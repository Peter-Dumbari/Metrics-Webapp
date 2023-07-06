import React from 'react';
import { useSelector } from 'react-redux';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import './Currencies.css';

function Currencies() {
  const { currency, filterCurrency } = useSelector((store) => store.currency);

  return (
    <div className="currencysection_container">
      <div className="header_container">
        <h3 className="header">Global Currencies</h3>
      </div>
      <div className="currencies">
        {filterCurrency.length !== 0
          ? Object.entries(filterCurrency).map(([key, value]) => (
            <CurrencyCard key={key} country={value[1]} currency={value[0]} />
          ))
          : Object.entries(currency).map(([key, value]) => (
            <CurrencyCard key={key} country={value} currency={key} />
          ))}
      </div>
    </div>
  );
}

export default Currencies;
