import { useState } from 'react'
import CurrencySelect from './CurrencySelect.jsx'
import Change from '../img/exchange.svg'
export default function Main() {

  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(100);
  const [result, setResult] = useState("");

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Network response was not ok');
  
      const data = await response.json();
      const rate = (data.conversion_rate * amount).toFixed();
        setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
        console.log(rate);
      } catch (error) {
        console.error(error);
  }
  };
  

  const handleFormSubmitg = (e) => {
    e.preventDefault();
    getExchangeRate();
  }

  return (
    <>
    
      <div className='Container_main'>
        
        <form className="form
          grid 
          grid-cols-6 
          grid-rows-1 
          gap-0
          h-[400px] 
          w-[100%]
          items-center 
          bg-black-400 
          border 
          rounded-md
          not-checked:"
          onSubmit={handleFormSubmitg}
          >
            

<div className="
  live wallpaper
  col-span-4 
  col-start-2
  text-center 
  text-2xl 
  rounded-md
  font-bold 
  p-[100px]
  shadow-[0_1px_2px_rgba(0,0,0,0.1)]
shadow-white">

  <h1 className="Check
    text-4xl 
    font-bold
    rounded-md
  text-gray-300">
      Check live foreign currency exchange rates
  </h1>

<div className="
  flex 
  justify-center 
  items-center
  mt-10
  rounded-md
  flex-col
  text-gray-300">

<div className='
  flex 
  flex-col 
  pl-[0px] 
  mt-[10px]'>
  <span className="
    text-2xl 
    font-bold 
    mr-30 
    inline-flex">
      Enter amount
  </span>

    <input 
      required
      value={amount}
      onChange={e => setAmount(e.target.value)}
      type="number" 
      className="
        lg:w-[650px]
        p-[10px]
        inline-flex
        bg-black-300
        border
        border-white-200
        text-center 
        text-2xl 
        font-bold
        h-[50px]
        
        rounded-md">
      </input>
  </div>
</div>

  <div className="
    flex 
    justify-center 
    items-center
    mt-[-5px]
    currency">

      <div className="
      currency
      p-4">
        <div className="  
          rounded-md
          border
        text-gray-300
        hover:bg-green-950
        bg-black">     
        <label className='
          inline-flex 
          mt-3.5'>
            From
        </label>
        <CurrencySelect
          selectedCurrency={fromCurrency} 
          handleCurrency={e => setFromCurrency(e.target.value)}/>
</div>
</div>

<div className='
  icons 
  w-[150px]'
    onClick={handleSwapCurrencies}>
  <img 
    src={Change} 
    alt="change"/>
</div>

<div className="
    flex 
    justify-center 
    items-center
    mt-[-5px]">
      <div className="p-4">
      <div className="  
        rounded-md
        border
      text-gray-300
      hover:bg-green-950
      bg-black">
        <label className='
          inline-flex 
          mt-3.5'>
          To
        </label>
          <CurrencySelect 
            selectedCurrency={toCurrency} 
            handleCurrency={e => setToCurrency(e.target.value)}/>
</div>
</div>
  </div>
</div>

<div className="Get
  flex 
  justify-center 
  mt-[-40px]">
  <button className="Get
    border 
    rounded-md
  text-gray-300
    w-[650px] 
    text-center
  bg-black
    mt-10 
    p-2 
    cursor-pointer 
  hover:bg-green-950">
      Get Exchange Rate
  </button>
</div>

<div className="results
  flex
  justify-center
  rounded-md
text-gray-300

  mt-[20px]
  relative
  before:opacity-[.4] 
  before:z-[-1]">
  <p className='p_results
    w-[650px] 
    border-1 
    rounded-md'>
    {result}
  </p>
</div>
</div>
  </form>
  </div>
</>
  );
}
