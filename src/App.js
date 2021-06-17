import { useEffect, useState, React } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";
import Header from "./Header";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true",
        {
          //withCredentials: false,
          // headers: {
          // 'Access-Control-Allow-Origin' : 'http://localhost:3000',
          //'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          //'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token',
          //'Content-Type': 'application/x-www-form-urlencoded'
          //  }
        }
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="app-title">Crypto Tracker</h1>
        <h2 className="coin-text">Search a currency</h2>
        <form>
          {" "}
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <Header />
      {filterCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            id={coin.id}
            sparkline={coin.sparkline_in_7d.price}
          />
        );
      })}
    </div>
  );
}

export default App;
