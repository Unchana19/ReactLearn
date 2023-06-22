import { useEffect, useState } from "react";
import money from "./assets/money.png";
import CurrencyComponent from "./components/CurrencyComponent";

function App() {
  const [currencyChoice, setCurrencyChoice] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("THB");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [checkFromCurrency, setCheckFromCurrency] = useState(true);

  let fromAmount, toAmount;

  if (checkFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(2);
  }

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyChoice([...Object.keys(data.rates)]);
        setExchangeRate(data.rates[toCurrency]);
      });
  }, [fromCurrency]);

  const amountFromCurrency = (e) => {
    setAmount(e.target.value);
    setCheckFromCurrency(true);
  };

  const amountToCurrency = (e) => {
    setAmount(e.target.value);
    setCheckFromCurrency(false);
  };

  return (
    <main className="h-screen bg-teal-100 flex flex-col items-center justify-center text-teal-800">
      <img
        className="mb-10 rounded-xl"
        src={money}
        alt="logo"
        width="20%"
      />
      <h1 className="mt-10 mb-20 text-4xl font-bold ">Currency Convert App</h1>
      <div className="my-5">
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={fromCurrency}
          ChangeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={amountFromCurrency}
        />
      </div>
      <div className="my-5 text-2xl font-bold"> = </div>
      <div className="mt-5 mb-20">
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={toCurrency}
          ChangeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={amountToCurrency}
        />
      </div>
    </main>
  );
}

export default App;
