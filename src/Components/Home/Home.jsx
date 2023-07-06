import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from '../../Redux/CurrencySlice';
import './Home.css';
import Currencies from '../Currencies/Currencies';
import Search from '../Searcch/Search';
import Button from '../Buttons/Button';
import Loader from '../Loader/Loader';

function Home() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.currency);

  React.useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  return (
    <div className="main_container">
      <section className="herosection">
        <div className="herosection_container">
          <div className="hero_items">
            <h5>Get your current Exchange rate</h5>
            <Search />
            <div className="button_container">
              <Button id="ngn" country="nigeria" />
            </div>
          </div>
        </div>
      </section>
      <section className="currencysection">
        <Currencies />
      </section>
      {loading && <Loader />}
    </div>
  );
}

export default Home;
