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
          <div className="bg-white rounded-full m-auto">
            <CircleUser fill='#4691F2' stroke='white' />
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
      <div className="h-[60%] bg-white"></div>
    </div>
  )
}

export default Header