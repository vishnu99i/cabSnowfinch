// import React from 'react';
import Blogimage from "../assets/Blogimage.png";
import arrow from "../assets/arrow.png";

const Hotelbooking = () => {
  return (
    <div className='bg-gradient-to-b from-blue-100'>
      <h3 className="text-[#4691F2] text-xl text-center hover:scale-105 duration-300 ease-in-out pt-3">What we offers</h3>
      <h1 className='text-3xl font-bold mb-7 text-center hover:scale-105 duration-300 ease-in-out'>Start your journey with us !</h1>
      <div className='grid grid-cols-4 mx-20 gap-7'>

      <div className='w-[300px] hover:scale-105 duration-300 ease-in-out'>
            <div className='p-2'>
               <img src={Blogimage} alt="" />
            </div>
            <div>
             <h2 className='font-bold my-2 px-2'>Rapid city transfer</h2>
             <h3 className='text-sm mr-5 px-2'>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</h3>
             <div className="flex font-bold mt-2 justify-between">
               <h2 className='px-2'>Learn More</h2>
               <button className='rounded-full bg-[#4691F2] mr-6'>
                  <img src={arrow} alt="" />
               </button>
             </div>
            </div>
         </div>

         <div className='w-[300px] hover:scale-105 duration-300 ease-in-out'>
            <div className='p-2'>
               <img src={Blogimage} alt="" />
            </div>
            <div>
             <h2 className='font-bold my-2 px-2'>Rapid city transfer</h2>
             <h3 className='text-sm mr-5 px-2'>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</h3>
             <div className="flex font-bold mt-2 justify-between">
               <h2 className='px-2'>Learn More</h2>
               <button className='rounded-full bg-[#4691F2] mr-6'>
                  <img src={arrow} alt="" />
               </button>
             </div>
            </div>
         </div>

         <div className='w-[300px] hover:scale-105 duration-300 ease-in-out'>
            <div className='p-2'>
               <img src={Blogimage} alt="" />
            </div>
            <div>
             <h2 className='font-bold my-2 px-2'>Rapid city transfer</h2>
             <h3 className='text-sm mr-5 px-2'>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</h3>
             <div className="flex font-bold mt-2 justify-between">
               <h2 className='px-2'>Learn More</h2>
               <button className='rounded-full bg-[#4691F2] mr-6'>
                  <img src={arrow} alt="" />
               </button>
             </div>
            </div>
         </div>

         <div className='w-[300px] hover:scale-105 duration-300 ease-in-out'>
            <div className='p-2'>
               <img src={Blogimage} alt="" />
            </div>
            <div>
             <h2 className='font-bold my-2 px-2'>Rapid city transfer</h2>
             <h3 className='text-sm mr-5 px-2'>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</h3>
             <div className="flex font-bold mt-2 justify-between">
               <h2 className='px-2'>Learn More</h2>
               <button className='rounded-full bg-[#4691F2] mr-6'>
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