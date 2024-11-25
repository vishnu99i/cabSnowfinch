import React from 'react';
import Bannerimage from "../assets/Bannerimage.png"

const Intro = () => {
  return (
    <div className="bg-image h-[80vh] w-full flex">
      <div className='w-[60vw'>
         <h3>Relax & Enjoy the vacation</h3>
         <h1 className='font-bold'>Choose <span className='text-[#4691F2]'>Company name</span></h1>
         <h1>To Book Your Hotel</h1>
         <h3>Browse our diverse fleet, book with ease, and enjoy seamless experiences with our user-friendly car rental platform today</h3>
         <button className='bg-[#4691F2] text-white px-2 rounded-full'>BOOK YOUR RIDE NOW</button>
      </div>
      <div className='w-[40vw]'>
         <img src={Bannerimage} alt="Bannerimage" className="h-[70vh]"/>
      </div>
    </div>
  )
}

export default Intro;