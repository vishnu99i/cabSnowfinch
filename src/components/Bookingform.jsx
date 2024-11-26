// import React from 'react';
import arrow from "../assets/arrow.png";

const Bookingform = () => {
  return (
    <div className='h-[15vh] flex justify-between mx-20 border-2 border-slate-500 p-5 rounded-3xl mb-32'>
      <button className='hover:scale-110 duration-300 ease-in-out border-2 border-slate-300 rounded-3xl px-3'>Pick up location</button>
      <button className='hover:scale-110 duration-300 ease-in-out border-2 border-slate-300 rounded-3xl px-3'>Dropoff location</button>
      <button className='hover:scale-110 duration-300 ease-in-out border-2 border-slate-300 rounded-3xl px-3'>Date & Time</button>
      <button className='hover:scale-110 duration-300 ease-in-out border-2 border-slate-300 rounded-3xl px-3'>no of passengers</button>
      <button className="bg-[#4691F2] flex text-white px-3 py-2 pt-2 rounded-full">
         Search
         <img src={arrow} alt="arrow" />
      </button>
    </div>
  )
}

export default Bookingform