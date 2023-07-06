import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import CurrencyDetail from './Components/CurrencyDetail/CurrencyDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/detail/:currencyId/:country" Component={CurrencyDetail} />
      </Routes>
    </>
  );
}

export default App;
