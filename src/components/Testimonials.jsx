import React from 'react';
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

const Testimonials = () => {
  return (
    <div>
      <h3 className="text-[#4691F2]">Testimonials</h3>
      <h1>What Our Traveler Say&#39;s</h1>
      <div className="flex">
         <div className="w-[50%] grid grid-cols-3">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
         </div>
         <div className="w-[50%]">
            <h1>Amritha unni</h1>
            <h3>Youtuber & Social media influencer</h3>
            <p>The punctuality of the drivers was remarkable. They always arrived on time, if not a few minutes early, which was a huge relief, especially when I had tight schedules to adhere to.
            Furthermore, the drivers were courteous and professional, making the journey not just comfortable but also enjoyable. They were well-versed with the routes and ensured a smooth and safe ride to my destinations.</p>
         </div>
      </div>
    </div>
  )
}

export default Testimonials