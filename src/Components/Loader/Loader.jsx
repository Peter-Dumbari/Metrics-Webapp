import React from 'react';
import './Loader.css';
import { ReactComponent as LoaderSpinner } from '../../Assets/Loaders/spinner.svg';

function Loader() {
  return (
    <div className="loader">
      <div className="loading_container">
        <LoaderSpinner />
      </div>
    </div>
  );
}

export default Loader;
