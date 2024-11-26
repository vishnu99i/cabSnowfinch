import React from 'react';
import car from "../assets/car.png";
import sendicon from "../assets/sendicon.png";
import arrow from "../assets/arrow.png";

const Aboutus = () => {
  return (
    <div className='w-full h-[85vh] flex'>
      <div className='w-[50%] hover:scale-105 duration-300 ease-in-out'>
         <img src={car} alt="car" className='h-[50vh]'/>
      </div>
      <div className='w-[50%]'>
         <h3 className='text-[#4691F2]font-bold hover:scale-105 duration-300 ease-in-out text-[#4691F2]'>Get About us</h3>
         <h1 className='text-3xl font-bold hover:scale-105 duration-300 ease-in-out'>More About Us</h1>
         <h3 className='hover:scale-105 duration-300 ease-in-out mb-5'>We are company name Car Rentals, an online cab booking aggregator, providing customers with reliable and premium Intercity and Local car rental services. Over the last decade, we are uniquely placed as the largest chauffeur driven car rental company in India in terms of geographical reach. We love that you are free to stop to breathe in clean air, learn about cultures and taste local food when you travel by cabs. We love that these wholesome experiences make travelling better and enrich our lives. We live for the surprises we find on road trips.</h3>
         
         <ul>
          <li className="flex hover:scale-105 duration-300 ease-in-out">
            <img src={sendicon} alt="" />
            Most trusted car renting company in mumbai
          </li>
          <li className="flex hover:scale-105 duration-300 ease-in-out">
            <img src={sendicon} alt="" />
            10 plus years years of experience in car renting field
          </li>
          <li className="flex hover:scale-105 duration-300 ease-in-out">
            <img src={sendicon} alt="" />
            Professional and trustable agency in town
          </li>
         </ul>
         <button className='text-white bg-[#4691F2] flex px-3 py-2 rounded-full hover:scale-105 duration-300 ease-in-out mt-5'>
          Read More
          <img src={arrow} alt="" />
         </button>
      </div>
    </div>
  )
}

export default Aboutus