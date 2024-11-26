// import React from 'react';
import newarrow from "../assets/newarrow.png";

const CTA = () => {
  return (
    <div className="cta h-[300px] mt-7 pt-7">
      <h1 className="text-white text-center text-3xl hover:scale-105 duration-300 ease-in-out">Call our agent to get a</h1>
      <h1 className="text-white text-center text-3xl hover:scale-105 duration-300 ease-in-out">qoute.Enjoy our ride!</h1>
      <p className="text-white text-center text-lg mt-3 hover:scale-105 duration-300 ease-in-out">We are company name Car Rentals, an online cab booking aggregator, providing customers with reliable and premium</p>
      <p className="text-white text-center text-lg hover:scale-105 duration-300 ease-in-out">Intercity and Local car rental services. Over the last decade</p>
      <button className="bg-white text-[#4691F2] flex rounded-full px-3 py-2 mt-7 item-center mx-auto text-md font-bold hover:scale-105 duration-300 ease-in-out">
         Book Now
         <img src={newarrow} alt="newarrow" />
      </button>
    </div>
  )
}

export default CTA