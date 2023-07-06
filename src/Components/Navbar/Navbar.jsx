import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navigator">
          <Link to="/">
            <i className="fa-solid fa-chevron-left" />
          </Link>
        </div>
        <div className="currency_name">
          <h1>Currency Rates</h1>
        </div>
        <div className="menu">
          <div className="microphone_container">
            <i className="fas fa-microphone" />
          </div>
          <div className="setting_container">
            <i className="fa-solid fa-gear" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
