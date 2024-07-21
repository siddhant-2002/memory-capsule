import React from 'react'
import { useState, useEffect, useRef } from 'react';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';


export const Capsule = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class="w-full h-full border border-black overflow-hidden relative">
      <div class="w-full h-full overflow-y-scroll absolute">
        <div class=" bg-gradient-to-b">
          <div className='FLEX flex-col gap-3 sticky top-0 bg-gradient-to-b from-black text-white pb-8'>
            <h1 className='text-[70px] ml-6 font-bold'>{time}</h1>
            <p className='text-4xl font-semibold ml-6'>CAPSULE NAME</p>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="w-[calc(100%/5)] h-[250px] p-2 rounded-md">
              <img src={image1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[calc(100%/4)] h-[250px] p-2">
              <img src={image2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[calc(100%/4)] h-[250px] p-2">
              <img src={image3} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[calc(100%/4)] h-[250px] p-2">
              <img src={image4} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[calc(100%/4)] h-[250px] p-2">
              <img src={image1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[calc(100%/4)] h-[250px] p-2">
              <img src={image2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[calc(100%/4)] h-[250px] p-2">
              <img src={image3} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[calc(100%/4)] h-[250px] p-2">
              <img src={image4} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className=''>
    //   <div className='w-full flex flex-wrap '>
    //       <div className='w-[calc(100%/3)] h-[300px] p-2'>
    //         <img src={image1} alt='' className='w-full h-full object-cover' />
    //       </div>
    //       <div className='w-[calc(100%/3)] h-[300px] p-2'>
    //         <img src={image2} alt='' className='w-full h-full object-cover' />
    //       </div>
    //       <div className='w-[calc(100%/3)] h-[300px] p-2'>
    //         <img src={image3} alt='' className='w-full h-full object-cover' />
    //       </div>
    //       <div className='w-[calc(100%/3)] h-[300px] p-2'>
    //         <img src={image4} alt='' className='w-full h-full object-cover' />
    //       </div>
    //       <div className='w-[calc(100%/3)] h-[300px] p-2'>
    //         <img src={image5} alt='' className='w-full h-full object-cover' />
    //       </div>
    //       <div className='w-[calc(100%/3)] h-[300px] p-2'>
    //         <img src={image6} alt='' className='w-full h-full object-cover' />
    //       </div>
    //       <div className='w-[calc(100%/3)] h-[300px] p-2'>
    //         <img src={image2} alt='' className='w-full h-full object-cover' />
    //       </div>
    //       <div className='w-[calc(100%/3)] h-[300px] p-2'>
    //         <img src={image1} alt='' className='w-full h-full object-cover' />
    //       </div>
    //   </div>
    // </div>
  );
}
