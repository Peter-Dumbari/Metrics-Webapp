import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/'; // Change the condition based on your home page route

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navigator">
          {!isHomePage && (
            <Link to="/">
              <i className="fa-solid fa-chevron-left" />
            </Link>
          )}
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
