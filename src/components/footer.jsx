import Euro from '../img/euro.svg';
import Dollar from '../img/dollar.svg';
import INR from '../img/INR.svg';

export default function Footer() {
  return (
    <>
      <div className='App h-[100px] 
          lg:w-[100%]
          sm:w-[750px]
          md:w-[100%]'>
        <div className="
          grid 
          grid-cols-3 
          grid-rows-1 
          h-[100px] 
          
          justify-items-center 
          items-center 
          mt-[190px] 
          mb-[10px]  
          bg-green-950
          shadow-[0_1px_2px_rgba(0,0,0,0.1)]
        shadow-white">

          <div className="
            col-start-1 
            row-start-1">
            <img className='
              Goodes 
              w-[50px]  
              cursor-pointer 
              duration-700 
              rounded-[180px] scale-125' 
                src={Euro} 
                alt="one" />
          </div>

          <div className="
            col-start-2 
            row-start-1">
          <img className='
            Goodes 
            w-[50px]  
            cursor-pointer 
            duration-700 
            rounded-[180px] 
            scale-125' 
              src={Dollar} 
              alt="one" />
          </div>

          <div className="
            col-start-3 
            row-start-1">
          <img className='
            Goodes 
            w-[50px] 
            cursor-pointer 
            duration-700 
            rounded-[180px] 
            scale-125' 
              src={INR} 
              alt="one" 
            />
          </div>
      </div>
      </div>
    </>
  );
}