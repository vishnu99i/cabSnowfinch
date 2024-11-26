import React from 'react';
import Bannerimage from "../assets/Bannerimage.png"

const Intro = () => {
  return (
    <div className="bg-image h-[80vh] w-full flex mt-10">
      <div className='w-[50vw] ml-20'>
         <h3 className='font-[wigglye] hover:scale-105 duration-300 ease-in-out'>Relax & Enjoy the vacation</h3>
         <h1 className='font-bold text-3xl hover:scale-105 duration-300 ease-in-out'>Choose <span className='text-[#4691F2]'>Company name</span></h1>
         <h1 className='hover:scale-105 duration-300 ease-in-out'>To Book Your Hotel</h1>
         <h3 className='text-sm mt-3 hover:scale-105 duration-300 ease-in-out'>Browse our diverse fleet, book with ease, and enjoy seamless experiences</h3>
         <h3 className='text-sm hover:scale-105 duration-300 ease-in-out'>with our user-friendly car rental platform today</h3>
         <button className='bg-[#4691F2] text-white rounded-full mt-5 px-3 py-2 hover:scale-105 duration-300 ease-in-out font-bold'>BOOK YOUR RIDE NOW</button>
      </div>
      <div className='w-[50vw]'>
         <img src={Bannerimage} alt="Bannerimage" className="h-[70vh] hover:scale-105 duration-300 ease-in-out"/>
      </div>
    </div>
  )
}

export default Intro;