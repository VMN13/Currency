import Franklin from '../img/franklin.png'

export default function Header() {
  return (
    <>
      <div className='App'>
        <div className="Container
          grid 
          grid-cols-3 
          grid-rows-1 
          h-[100px] 
          justify-items-center 
          items-center 
          mt-[60px] 
          mb-[200px] 
          z-[1] 
          bg-green-950
          shadow-[0_1px_2px_rgba(0,0,0,0.1)]
        shadow-white">

<div className="flex
  
  justify-center
  col-start-1 
  row-start-1">
    <img className='
      franklin 
      z-[2] 
      w-[150px]
      cursor-pointer 
      duration-700' 
        src={Franklin} 
        alt="Franklin" />
</div>
          
<div className="Converter
  col-start-2 
  row-start-1">
  <h1 className="
    lg:text-5xl 
    sm:text-1xl 
    md:text-4xl
    font-bold 
    pl-[20px]
    tracking-[6px]  
    text-amber-50
    tablet:bg-red-500
    
    ">
      Currency Converter
    </h1>
</div>

<div className="col-start-3 row-start-1">
<img className='
      franklin 
      z-[2] 
      w-[150px]
      cursor-pointer 
      duration-700' 
        src={Franklin} 
        alt="Franklin" />
</div>
</div>
</div>
    </>
  );
}