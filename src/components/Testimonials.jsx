import React from 'react';
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

const Testimonials = () => {
  return (
    <div className='py-20'>
      <h3 className="text-[#4691F2] text-lg font-bold text-center hover:scale-95 duration-300 ease-in-out">Testimonials</h3>
      <h1 className='text-3xl font-bold pb-10 text-center hover:scale-95 duration-300 ease-in-out'>What Our Traveler Say&#39;s</h1>
      <div className="flex">
         <div className="w-[50%] grid grid-cols-3 px-7 gap-2">
            <img src={img1} alt="img1" className='hover:scale-105 duration-300 ease-in-out'/>
            <img src={img2} alt="img2" className='hover:scale-105 duration-300 ease-in-out'/>
            <img src={img3} alt="img3" className='hover:scale-105 duration-300 ease-in-out'/>
         </div>
         <div className="w-[50%]">
            <h1 className='hover:scale-95 duration-300 ease-in-out text-lg font-bold mb-2'>Amritha unni</h1>
            <h3 className='hover:scale-95 duration-300 ease-in-out mb-3'>Youtuber & Social media influencer</h3>
            <p className='hover:scale-95 duration-300 ease-in-out'>The punctuality of the drivers was remarkable. They always arrived on time, if not a few minutes early, which was a huge relief, especially when I had tight schedules to adhere to.
            Furthermore, the drivers were courteous and professional, making the journey not just comfortable but also enjoyable. They were well-versed with the routes and ensured a smooth and safe ride to my destinations.</p>
         </div>
      </div>
    </div>
  )
}

export default Testimonials