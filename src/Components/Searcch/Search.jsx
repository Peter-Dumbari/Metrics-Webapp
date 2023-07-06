import React from 'react';
import { useDispatch } from 'react-redux';
import { searchCurrency } from '../../Redux/CurrencySlice';
import './Search.css';

function Search() {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    dispatch(searchCurrency(searchValue));
  };
  return (
    <input
      type="search"
      onChange={handleSearch}
      placeholder="Enter Country"
      className="searchfield"
    />
  );
}

export default Search;
