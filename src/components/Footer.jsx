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
   <div>
    <div className="grid grid-cols-4">

      <div>
         <h1>lo<span className="text-[#4691F2]">go</span></h1>
         <p>We are company name Car Rentals,an online cab booking aggregator</p>
         <div className="flex bg-blue h-[100px]">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
         </div>
      </div>

      <div>
         <h1>Quick Links</h1>
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Serevice</li>
            <li>Blog</li>
            <li>Features</li>
            <li>Contact Us</li>
         </ul>
      </div>

      <div>
         <h1>Get In Touch</h1>
         <ul>
            <li>
               +91 123456789
            </li>
            <li>
               company@gmail.com
            </li>
            <li>company 123 street d block,4th floor</li>
         </ul>
      </div>

      <div>
         <h1>Follow Us On @instagram</h1>
         <div className="grid grid-cols-3 gap-1">
            <div>
               <img src={footer1} alt="footer1" />
            </div>
            <div>
               <img src={footer2} alt="footer2" />
            </div>
            <div>
               <img src={footer3} alt="footer3" />
            </div>
            <div>
               <img src={footer1} alt="footer1" />
            </div>
            <div>
               <img src={footer2} alt="footer2" />
            </div>
            <div>
               <img src={footer3} alt="footer3" />
            </div>
         </div>
      </div>

    </div>

    <h3 className="w-full h-[5vh] bg-[#4691F2] text-white">2024 Developed By Snowfinch Consulting Group
    </h3>

   </div>
  )
}

export default Footer