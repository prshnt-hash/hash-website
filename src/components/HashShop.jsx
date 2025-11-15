'use client';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

const HashShop = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className='relative w-screen h-screen overflow-hidden bg-black'>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
      >
        <source src='/videos/joystick.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/40 z-10'></div>

      {/* Top Right Button */}
      <div className='absolute top-[60px] right-[5vw] md:top-[80px] md:right-[6vw] lg:top-[100px] lg:right-[8vw] z-30'>
        <button>
            <Image src="/component/button.svg" alt='button' width={100} height={100}/>
        </button>
      </div>

      {/* Content Container */}
      <div className='relative z-20 h-full flex flex-col lg:flex-row items-center justify-between px-[5vw] lg:px-[8vw] lg:mb-[100px] py-[8vh]'>
        
        {/* Left Side - Text Content */}
        <div className='flex flex-col gap-8 max-w-xl'>
          {/* Heading */}
          <h1>
            <Image src="/images/HashShop.png" alt='hashshop' width={200} height={120}/>
          </h1>
          
          {/* Description Text */}
          <p className='text-white text-lg md:text-xl lg:text-2xl font-medium leading-relaxed'>
            <Image src={"/images/bookingText.png"} width={200} alt='booking' height={120}/>
          </p>

          {/* Shop Now Button */}
          <button>
            <Image src="/images/shopnow.svg" alt='shopnow' width={110} height={110}/>
          </button>
        </div>

        {/* Right Side - Product Images (Energy Drinks) */}
        <div className='flex flex-row gap-4 md:gap-6 items-center mt-8 lg:mt-[36vh]'>
          {/* First Drink (Orange Monster) */}
          <div className='relative w-[140px] h-[280px] md:w-[180px] md:h-[360px] lg:w-[200px] lg:h-[400px]'>
            <Image 
              src='/images/hash-monster-orange.png' 
              alt='Hash Monster Orange'
              fill
              className='object-contain'
            />
          </div>

          {/* Second Drink (Green X-Slash) */}
          <div className='relative w-[140px] h-[280px] md:w-[180px] md:h-[360px] lg:w-[200px] lg:h-[400px]'>
            <Image 
              src='/images/hash-x-green.png' 
              alt='Hash X Green'
              fill
              className='object-contain'
            />
          </div>

          {/* Third Drink (Orange Monster) */}
          <div className='relative w-[140px] h-[280px] md:w-[180px] md:h-[360px] lg:w-[200px] lg:h-[400px]'>
            <Image 
              src='/images/hash-monster-orange.png' 
              alt='Hash Monster Orange'
              fill
              className='object-contain'
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default HashShop;
