import React from 'react';
import tiago from "../assets/tiago.png";
import arrow from "../assets/arrow.png";

const Carbooking = () => {
  return (
    <div>
      <h3 className="text-[#4691F2]">Best Places For Your Party</h3>
      <h1>Let&#39;s Check Available vehicle</h1>

      <div className="grid grid-cols-3">

         <div>
            <img src={tiago} alt="" />
            <table>
               <thead>
                  <tr>
                     <th>REGULAR</th>
                     <th></th>
                  </tr>
                  <tr>
                     <th>TATA TIAGO</th>
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
            <button className="flex text-white bg-[#4691F2] px-3 mpy-2 rounded-full">
               Read More
               <img src={arrow} alt="arrow" />
            </button>
         </div>

         <div>
            <img src={tiago} alt="" />
            <table>
               <thead>
                  <tr>
                     <th>REGULAR</th>
                     <th></th>
                  </tr>
                  <tr>
                     <th>TATA TIAGO</th>
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
            <button className="flex text-white bg-[#4691F2] px-3 mpy-2 rounded-full">
               Read More
               <img src={arrow} alt="arrow" />
            </button>
         </div>

         <div>
            <img src={tiago} alt="" />
            <table>
               <thead>
                  <tr>
                     <th>REGULAR</th>
                     <th></th>
                  </tr>
                  <tr>
                     <th>TATA TIAGO</th>
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
            <button className="flex text-white bg-[#4691F2] px-3 mpy-2 rounded-full">
               Read More
               <img src={arrow} alt="arrow" />
            </button>
         </div>

      </div>

    </div>
  )
}

export default Carbooking;