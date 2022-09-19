import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, coinArray] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") //get
    .then((response) => response.json()) //api response
    .then((json) => {
      coinArray(json)
      setLoading(false)
    })
    }, []); // only run once
  return (
  <div>
    <h1> The Coins !!! {loading ? null : `(${coins.length})`}</h1>
    {loading ? <strong>Loading ..............</strong> : null}
    <ul>
      {coins.map((items, key) => <li key={items.rank}>{items.id} / {items.name} / {items.symbol} / {items.quotes.USD.price}</li>)}
    </ul>
  </div>
  );
}

export default App;

