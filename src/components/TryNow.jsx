import React from 'react';
import Image from 'next/image';
import {Menu} from 'lucide-react';

const HeroSection = () => {
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover -z-10'
      >
        <source src='/images/trynow.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Top Buttons */}
      <div className='relative z-20 flex justify-between py-[60px] px-[5vw] md:py-[80px] md:px-[6vw] lg:py-[100px] lg:px-[8vw]'>
        <button>
          <Image width={40} height={40} src='/component/sideButton.svg' alt="Side button" className='absolute' />
           <Menu className='absolute text-[10px] mx-[6px] mb-[2vh]'/>
        </button>
        <button>
          <Image width={100} height={100} src='/component/button.svg' alt="Button" />
        </button>
      </div>
      
      {/* Optional: Dark Overlay for better text visibility */}
      <div className='absolute inset-0 bg-black/10 z-0'></div>
      
      {/* Content on top of video */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full px-[5vw] md:px-[8vw] '>
        <h1 className='text-[#16FF00] text-3xl md:text-3xl lg:text-4xl font-semibold text-center mb-6 leading-tight'>
          No queues. No calls. No confusion.
        </h1>
        
        <p className='text-white text-lg md:text-xl lg:text-2xl text-center mb-10 max-w-3xl'>
          Just pick your café, choose your game<br />
          station, lock in your time, and play.
        </p>
        
        <button>
            <Image src="/images/trynow.svg" alt='trynow' width={150} height={160}/>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
