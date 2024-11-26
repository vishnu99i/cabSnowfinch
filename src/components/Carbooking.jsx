// import React from 'react';
import tiago from "../assets/tiago.png";
import arrow from "../assets/arrow.png";

const Carbooking = () => {
  return (
    <div className="mt-20">
      <h3 className="text-[#4691F2] text-center text-xl font-bold hover:scale-105 duation-300 ease-in-out">Best Places For Your Party</h3>
      <h1 className="text-center text-3xl font-bold hover:scale-105 duration-300 ease-in-out">Let&#39;s Check Available vehicle</h1>

      <div className="grid grid-cols-3 gap-2 mx-20 mt-7">

         <div className="border-4 bg-gradient-to-r from-blue-100 hover:scale-105 duration-300 ease-in-out">
            <img src={tiago} alt="" />
            <table className="mx-5 table-auto w-full">
               <thead>
                  <tr>
                     <th className="text-left">REGULAR</th>
                     <th></th>
                  </tr>
                  <tr>
                     <th className="text-left">TATA TIAGO</th>
                     <th>₹ 399/km</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Taxi Doors</td>
                     <td>4</td>
                  </tr>
                  <tr>
                     <td>Passengers</td>
                     <td>4</td>
                  </tr>
                  <tr>
                     <td>Luggage Carry</td>
                     <td>4</td>
                  </tr>
                  <tr>
                     <td>Air Condition</td>
                     <td>Yes</td>
                  </tr>
                  <tr>
                     <td>GPS Navigation</td>
                     <td>Yes</td>
                  </tr>
                  <tr>
                     <td>Driver Choosing</td>
                     <td>Yes</td>
                  </tr>
               </tbody>
            </table>
            <button className="flex text-white bg-[#4691F2] px-3 py-2 my-3 ml-5 rounded-full hover:scale-105 duration-300 ease-in-out w-[90%]">
               Read More
               <img src={arrow} alt="arrow" />
            </button>
         </div>

         <div className="border-4 bg-gradient-to-r from-blue-100 hover:scale-105 duration-300 ease-in-out">
            <img src={tiago} alt="" />
            <table className="mx-5 table-auto w-full">
               <thead>
                  <tr>
                     <th className="text-left">REGULAR</th>
                     <th></th>
                  </tr>
                  <tr>
                     <th className="text-left">TATA TIAGO</th>
                     <th>₹ 399/km</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Taxi Doors</td>
                     <td>4</td>
                  </tr>
                  <tr>
                     <td>Passengers</td>
                     <td>4</td>
                  </tr>
                  <tr>
                     <td>Luggage Carry</td>
                     <td>4</td>
                  </tr>
                  <tr>
                     <td>Air Condition</td>
                     <td>Yes</td>
                  </tr>
                  <tr>
                     <td>GPS Navigation</td>
                     <td>Yes</td>
                  </tr>
                  <tr>
                     <td>Driver Choosing</td>
                     <td>Yes</td>
                  </tr>
               </tbody>
            </table>
            <button className="flex text-white bg-[#4691F2] px-3 py-2 my-3 ml-5 rounded-full hover:scale-105 duration-300 ease-in-out w-[90%]">
               Read More
               <img src={arrow} alt="arrow" />
            </button>
         </div>

         <div className="border-4 bg-gradient-to-r from-blue-100 hover:scale-105 duration-300 ease-in-out">
            <img src={tiago} alt="" />
            <table className="mx-5 table-auto w-full">
               <thead>
                  <tr>
                     <th className="text-left">REGULAR</th>
                     <th></th>
                  </tr>
                  <tr>
                     <th className="text-left">TATA TIAGO</th>
                     <th>₹ 399/km</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Taxi Doors</td>
                     <td>4</td>
                  </tr>
                  <tr>
                     <td>Passengers</td>
                     <td>4</td>
                  </tr>
                  <tr>
                     <td>Luggage Carry</td>
                     <td>4</td>
                  </tr>
                  <tr>
                     <td>Air Condition</td>
                     <td>Yes</td>
                  </tr>
                  <tr>
                     <td>GPS Navigation</td>
                     <td>Yes</td>
                  </tr>
                  <tr>
                     <td>Driver Choosing</td>
                     <td>Yes</td>
                  </tr>
               </tbody>
            </table>
            <button className="flex text-white bg-[#4691F2] px-3 py-2 my-3 ml-5 rounded-full hover:scale-105 duration-300 ease-in-out w-[90%]">
               Read More
               <img src={arrow} alt="arrow" />
            </button>
         </div>

      </div>

    </div>
  )
}

export default Carbooking;