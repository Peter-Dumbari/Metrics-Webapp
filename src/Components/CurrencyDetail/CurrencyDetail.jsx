import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrencyDetails } from '../../Redux/CurrencySlice';
import { Card } from '../CurrencyCard/CurrencyCard';
import './CurrencyDetail.css';
import Loader from '../Loader/Loader';

function CurrencyDetail() {
  const dispatch = useDispatch();
  const { currencyDetails, loading } = useSelector((state) => state.currency);
  const params = useParams();
  const { currencyId, country } = params;

  React.useEffect(() => {
    dispatch(getCurrencyDetails(currencyId));
  }, [dispatch]);
  return (
    <div className="currency_detail_container">
      <div className="detail_inner_container">
        <div className="detail_inner_bg">
          <div className="detail_herosection_items">
            <div className="contents">
              <h2 className="text">The Exchange Rate of</h2>
              <h3 className="country_name">{country}</h3>
              <h5 className="country_currency">
                {`1
                  ${currencyId}`}
              </h5>
            </div>
          </div>
        </div>
        <div className="rates_container">
          <div className="rate_header">
            <h3>Exchange Rates</h3>
          </div>
          {currencyDetails.length !== 0
            && Object.entries(currencyDetails[1][1]).map(([key, value]) => (
              <div className="detail_card_container" key={key}>
                <Card country={key} currency={value} />
              </div>
            ))}
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
}

export default CurrencyDetail;
