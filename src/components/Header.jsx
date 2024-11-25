import React from 'react';
import { CircleUser,PhoneCall,Mail,Facebook,Twitter,Youtube,Instagram } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full h-[127px]">
      <div className="flex h-[40%]">
        <div className="bg-[#4691f2] w-[50%] flex">
          <div className="bg-[#4691F2] rounded-full m-auto flex text-white">
            <PhoneCall fill='#4691F2' stroke='white' className='m-1' />
            <a href="tel:+91 1234567890" target="_blank">+91 123456789</a>
          </div>
          <div className="bg-[#4691F2] rounded-full m-auto flex text-white">
            <Mail fill='#4691F2' stroke='white' className='m-1'/>
            <a href="mailto:company@gmail.com" target="_blank">company@gmail.com</a>
          </div>
        </div>
        <div className="bg-black w-[50%] flex">

          <div className="m-auto flex">
          <CircleUser fill='#4691F2' stroke='white' />
          <h3 className="text-white m-auto ml-0">
              <a href="#">Login/</a>
              <a href="#">Register</a>
            </h3>
          </div>         
          <div className="bg-white rounded-full m-auto">
            <Facebook fill='#4691F2' stroke='white' />
          </div>
          <div className="bg-white rounded-full m-auto">
            <Twitter fill='#4691F2' stroke='white' />
          </div>
          <div className="bg-white rounded-full m-auto">
            <Youtube fill='#4691F2' stroke='white' />
          </div>
          <div className="bg-white rounded-full m-auto">
            <Instagram fill='#4691F2' stroke='white' />
          </div>
        </div>
        
        
      </div>
      <div className="h-[60%] bg-white mx-5vw flex">
        <div className='w-[30vw] m-auto'>
          lo<span className="text-[#4691F2]">go</span>
        </div>
        <div className='w-[30vw] flex m-auto'>
          <ul className="flex gap-3">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="w-[30vw] m-auto">
          <button className="bg-[#4691F2] flex text-white rounded-3xl px-3 py-2">
            Contact Us
            <PhoneCall fill='white' stroke="#4691F2" className='ml-1'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header