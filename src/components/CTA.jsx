import React from 'react';
import newarrow from "../assets/newarrow.png";

const CTA = () => {
  return (
    <div className="cta h-[300px]">
      <h1 className="text-white">Call our agent to get a</h1>
      <h1 className="text-white">qoute.Enjoy our ride!</h1>
      <p className="text-white">We are company name Car Rentals, an online cab booking aggregator, providing customers with reliable and premium Intercity and Local car rental services. Over the last decade</p>
      <button className="bg-white text-[#4691F2] flex rounded-full px-3">
         Book Now
         <img src={newarrow} alt="newarrow" />
      </button>
    </div>
  )
}

export default CTA