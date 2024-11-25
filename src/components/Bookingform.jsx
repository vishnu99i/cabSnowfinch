import React from 'react';
import arrow from "../assets/arrow.png";

const Bookingform = () => {
  return (
    <div className='h-[15vh] flex w-[80vh]'>
      <input type="text" placeholder='Pick up location'/>
      <input type="text" placeholder='Dropoff location'/>
      <input type="text" placeholder='Date & Time'/>
      <input type="text" placeholder='no of passengers'/>
      <button className="bg-[#4691F2] flex text-white p-2 rounded-full">
         Search
         <img src={arrow} alt="arrow" className='bg-[#4691F2]' />
      </button>
    </div>
  )
}

export default Bookingform