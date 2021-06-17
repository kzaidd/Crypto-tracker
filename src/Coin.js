import React from "react";
import "./Coin.css";
import Graph from "./Graph";

const Coin = ({
  id,
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  sparkline,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">₹{price}</p>
          <p className="coin-volume">₹{volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin-market">Mkt Cap: ₹{marketcap.toLocaleString()}</p>

          <div className="coin-graph">
            <Graph pointData={sparkline} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
