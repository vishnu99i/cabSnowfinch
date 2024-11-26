import React from 'react';
import { CircleUser,PhoneCall,Mail,Facebook,Twitter,Youtube,Instagram } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full h-[127px] font-bold">
      <div className="flex h-[40%]">
        <div className="bg-[#4691f2] w-[50%] flex">
          <div className="bg-[#4691F2] rounded-full m-auto flex text-white">
            <PhoneCall fill='#4691F2' stroke='white' className='m-1 hover:scale-105 duration-300 ease-in-out' />
            <a href="tel:+91 1234567890" target="_blank" className='hover:scale-105 duration-300 ease-in-out'>+91 123456789</a>
          </div>
          <div className="bg-[#4691F2] rounded-full m-auto flex text-white">
            <Mail fill='#4691F2' stroke='white' className='m-1 hover:scale-105 duration-300 ease-in-out'/>
            <a href="mailto:company@gmail.com" target="_blank" className='hover:scale-105 duration-300 ease-in-out'>company@gmail.com</a>
          </div>
        </div>
        <div className="bg-black w-[50%] flex items-center">

          <div className="m-auto flex">
          <CircleUser fill='#4691F2' stroke='white' className='hover:scale-105 duration-300 ease-in-out' />
          <h3 className="text-white m-auto ml-0">
              <a href="#" className='hover:scale-105 duration-300 ease-in-out'>Login/</a>
              <a href="#" className='hover:scale-105 duration-300 ease-in-out'>Register</a>
            </h3>
          </div>         
          <div className="bg-white rounded-full m-auto hover:scale-110 duration-300 ease-in-out">
            <Facebook fill='#4691F2' stroke='white' />
          </div>
          <div className="bg-white rounded-full m-auto hover:scale-110 duration-300 ease-in-out">
            <Twitter fill='#4691F2' stroke='white' />
          </div>
          <div className="bg-white rounded-full m-auto hover:scale-110 duration-300 ease-in-out">
            <Youtube fill='#4691F2' stroke='white' />
          </div>
          <div className="bg-white rounded-full m-auto hover:scale-110 duration-300 ease-in-out">
            <Instagram fill='#4691F2' stroke='white' />
          </div>
        </div>
        
        
      </div>
      <div className="h-[60%] bg-white mx-5vw flex">
        <div className='w-[30vw] m-auto hover:scale-105 duration-300 ease-in-out text-3xl'>
          lo<span className="text-[#4691F2]">go</span>
        </div>
        <div className='w-[30vw] flex m-auto'>
          <ul className="flex gap-3 text-xl">
            <li><a href="#" className='hover:scale-105 duration-300 ease-in-out hover:text-[#4691F2]'>Home</a></li>
            <li><a href="#" className='hover:scale-105 duration-300 ease-in-out hover:text-[#4691F2]'>About Us</a></li>
            <li><a href="#" className='hover:scale-105 duration-300 ease-in-out hover:text-[#4691F2]'>Services</a></li>
            <li><a href="#" className='hover:scale-105 duration-300 ease-in-out hover:text-[#4691F2]'>Features</a></li>
            <li><a href="#" className='hover:scale-105 duration-300 ease-in-out hover:text-[#4691F2]'>Blog</a></li>
          </ul>
        </div>
        <div className="w-[30vw] m-auto">
          <button className="bg-[#4691F2] flex text-white rounded-3xl px-3 py-2 hover:scale-105 duration-300 ease-in-out">
            Contact Us
            <PhoneCall fill='white' stroke="#4691F2" className='ml-1'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header