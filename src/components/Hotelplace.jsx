// import React from 'react';

const Hotelplace = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 pt-16">
      <h3 className="text-center text-[#4691F2] font-bold text-base hover:scale-105 duration-300 ease-in-out">Best Places For your party</h3>
      <h1 className="text-center font-bold text-3xl hover:scale-105 duration-300 ease-in-out mb-7">Top Destinations</h1>
      <div className="grid grid-cols-4 h-[400px] mx-20">
         <div className="munnar text-white flex items-end rounded-md hover:scale-105 duration-300 ease-in-out">
            <h3 className="p-3 text-xl font-bold">Munnar,Kerala</h3>
         </div>
         <div className="mysore text-white flex items-end rounded-md hover:scale-105 duration-300 ease-in-out">
            <h3 className="p-3 text-xl font-bold">Mysore,Karnataka</h3>
         </div>
         <div className="tajmahal text-white flex items-end rounded-md hover:scale-105 duration-300 ease-in-out">
            <h3 className="p-3 text-xl font-bold">Taj Mahal,UP</h3>
         </div>
         <div className="kochi text-white flex items-end rounded-md hover:scale-105 duration-300 ease-in-out">
            <h3 className="p-3 text-xl font-bold">Kochi,Kerala</h3>
         </div>
      </div>
    </div>
  )
}

export default Hotelplace