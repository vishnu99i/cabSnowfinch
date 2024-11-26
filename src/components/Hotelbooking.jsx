import React from 'react';
import Blogimage from "../assets/Blogimage.png";
import arrow from "../assets/arrow.png";

const Hotelbooking = () => {
  return (
    <div>
      <h3 className="text-[#4691F2]">What we offers</h3>
      <h1>Start your journey with us !</h1>
      <div className='grid grid-cols-4'>

         <div className='w-[300px] h-[419px]'>
            <div className='h-[50%]'>
               <img src={Blogimage} alt="" />
            </div>
            <div className='h-[50%]'>
             <h2>Rapid city transfer</h2>
             <h3>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</h3>
             <div className="flex">
               <h2>Learn More</h2>
               <button className='w-[44px] h-44px rounde-[30px] bg-[#4691F2]'>
                  <img src={arrow} alt="" />
               </button>
             </div>
            </div>
         </div>

         <div className='w-[300px] h-[419px]'>
            <div className='h-[50%]'>
               <img src={Blogimage} alt="" />
            </div>
            <div className='h-[50%]'>
             <h2>Rapid city transfer</h2>
             <h3>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</h3>
             <div className="flex">
               <h2>Learn More</h2>
               <button className='w-[44px] h-44px rounde-[30px] bg-[#4691F2]'>
                  <img src={arrow} alt="" />
               </button>
             </div>
            </div>
         </div>
         <div className='w-[300px] h-[419px]'>
            <div className='h-[50%]'>
               <img src={Blogimage} alt="" />
            </div>
            <div className='h-[50%]'>
             <h2>Rapid city transfer</h2>
             <h3>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</h3>
             <div className="flex">
               <h2>Learn More</h2>
               <button className='w-[44px] h-44px rounde-[30px] bg-[#4691F2]'>
                  <img src={arrow} alt="" />
               </button>
             </div>
            </div>
         </div>
         <div className='w-[300px] h-[419px]'>
            <div className='h-[50%]'>
               <img src={Blogimage} alt="" />
            </div>
            <div className='h-[50%]'>
             <h2>Rapid city transfer</h2>
             <h3>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</h3>
             <div className="flex">
               <h2>Learn More</h2>
               <button className='w-[44px] h-44px rounde-[30px] bg-[#4691F2]'>
                  <img src={arrow} alt="" />
               </button>
             </div>
            </div>
         </div>

      </div>
    </div>
  )
}

export default Hotelbooking;