import React from 'react';

const Hotelplace = () => {
  return (
    <div>
      <h3>Best Places For your party</h3>
      <h1>Top Destinations</h1>
      <div className="grid grid-cols-4 h-[400px]">
         <div className="munnar text-white">
            <h3>Munnar,Kerala</h3>
         </div>
         <div className="mysore text-white">
            <h3>Mysore,Karnataka</h3>
         </div>
         <div className="tajmahal text-white">
            <h3>Tajmahal,UP</h3>
         </div>
         <div className="kochi text-white">
            <h3>Kochi,Kerala</h3>
         </div>
      </div>
    </div>
  )
}

export default Hotelplace