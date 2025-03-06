
import CurrencySelect from './CurrencySelect.jsx'
import Change from '../img/exchange.svg'
export default function Main() {




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
          not-checked:">

<div className="live wallpaper
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
      type="number" 
      className="
        lg:w-[630px]
        inline-flex
        bg-black-300
        border
        border-white-200
        text-center 
        text-2xl 
        font-bold
        h-[50px]
        rounded-md
        ">
      </input>
  </div>
</div>

  <div className="
    flex 
    justify-center 
    items-center
    mt-[-5px]
    currency
    ">

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

/>

</div>
</div>

<div className='
  icons 
  w-[150px]'>
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
            From
        </label>



<CurrencySelect />
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
    w-[630px] 
    ml-[00px]
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
    w-[630px] 
    border-1 
    rounded-md'>
      Results
  </p>
</div>
</div>
  </form>
  </div>
</>
  );
}