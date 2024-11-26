import React from 'react';
import footer1 from "../assets/footer1.jpeg";
import footer2 from "../assets/footer2.jpeg";
import footer3 from "../assets/footer3.jpeg";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
   <div className='bg-blue-100 pt-5'>
    <div className="grid grid-cols-4 mx-10 ">

      <div>
         <h1 className='text-xl font-bold hover:scale-95 duration-300 ease-in-out'>lo<span className="text-[#4691F2]">go</span></h1>
         <p className='hover:scale-95 duration-300 ease-in-out mt-3'>We are company name Car Rentals,an online cab booking aggregator</p>
         <div className="flex gap-2 mt-7">
            <div className='bg-[#4691F2] rounded-full hover:scale-105 duration-300 ease-in-out p-1'>
               <img src={facebook} alt="" />
            </div>
            <div className='bg-[#4691F2] rounded-full hover:scale-105 duration-300 ease-in-out p-1'>
               <img src={twitter} alt="" />
            </div>
            <div className='bg-[#4691F2] rounded-full hover:scale-105 duration-300 ease-in-out p-1'>
               <img src={youtube} alt="" />
            </div>
            <div className='bg-[#4691F2] rounded-full hover:scale-105 duration-300 ease-in-out p-1'>
               <img src={instagram} alt="" />
            </div>
         </div>
      </div>

      <div>
         <h1 className='font-bold hover:scale-95 duration-300 ease-in-out mb-1'>Quick Links</h1>
         <ul>
            <li className='hover:scale-95 duration-300 ease-in-out'>Home</li>
            <li className='hover:scale-95 duration-300 ease-in-out'>About Us</li>
            <li className='hover:scale-95 duration-300 ease-in-out'>Serevice</li>
            <li className='hover:scale-95 duration-300 ease-in-out'>Blog</li>
            <li className='hover:scale-95 duration-300 ease-in-out'>Features</li>
            <li className='hover:scale-95 duration-300 ease-in-out'>Contact Us</li>
         </ul>
      </div>

      <div>
         <h1 className='font-bold hover:scale-95 duration-300 ease-in-out mb-1'>Get In Touch</h1>
         <ul>
            <li className='hover:scale-95 duration-300 ease-in-out'>
               +91 123456789
            </li>
            <li className='hover:scale-95 duration-300 ease-in-out'>
               company@gmail.com
            </li>
            <li className='hover:scale-95 duration-300 ease-in-out'>company 123 street d block,4th floor</li>
         </ul>
      </div>

      <div>
  <h1 className="font-bold hover:scale-95 duration-300 ease-in-out mb-1">Follow Us On @instagram</h1>
  <div className="grid grid-cols-3 gap-1">
    <div>
      <img src={footer1} alt="footer1" className="hover:scale-95 duration-300 ease-in-out aspect-square" />
    </div>
    <div>
      <img src={footer2} alt="footer2" className="hover:scale-95 duration-300 ease-in-out aspect-square" />
    </div>
    <div>
      <img src={footer3} alt="footer3" className="hover:scale-95 duration-300 ease-in-out aspect-square" />
    </div>
    <div>
      <img src={footer1} alt="footer1" className="hover:scale-95 duration-300 ease-in-out aspect-square" />
    </div>
    <div>
      <img src={footer2} alt="footer2" className="hover:scale-95 duration-300 ease-in-out aspect-square" />
    </div>
    <div>
      <img src={footer3} alt="footer3" className="hover:scale-95 duration-300 ease-in-out aspect-square" />
    </div>
  </div>
</div>

    </div>

    <h3 className="w-full h-[10vh] bg-[#4691F2] text-white font-bold text-center mt-5 pt-3">2024 Developed By Snowfinch Consulting Group
    </h3>

   </div>
  )
}

export default Footer