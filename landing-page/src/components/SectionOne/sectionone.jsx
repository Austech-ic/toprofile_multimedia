"use client";
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar';
import Swiper from '../Swiper/swiper';
import 'swiper/css';

const SectionOne = () => {
  const [currentImage, setCurrentImage] = useState('/img/imageone.svg');

  const images = [
    '/img/imageone.svg',
    '/img/imagetwo.svg',
    '/img/imagethree.svg',
    '/img/imagefour.svg',
    '/img/imagefive.svg',
  ];

  useEffect(() => {
    // Preload images by creating Image elements and setting their src
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    const intervalId = setInterval(() => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 2000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images]);

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${currentImage})` }}>
      <Navbar />
      <div className='flex justify-center items-center h-full'>
        <div>
          <div>
            <p className='text-2xl md:text-6xl lg:text-6xl xl:text-7xl text-white font-medium text-center uppercase leading-relaxed md:leading-tight lg:leading-tight xl:leading-none'>
              Book us <br /> for your next <span className='text-orange-500'>event!</span>
            </p>
          </div>

          <div className='py-2 lg:py-4'>
            <p className='block text-xs md:text-2xl lg:text-lg xl:text-xl text-white font-light text-center leading-normal'>
              Enjoy a lifetime memory from our high-quality <br className='block lg:hidden' /> and classy entertainment.
            </p>
          </div>

          <div className='py-2 md:py-4 lg:py-4 flex justify-between items-center'>
            <Swiper />
          </div>

          <div className='py-6 lg:py-10 flex justify-center items-center'>
            <button
              type="submit"
              style={{ background: 'linear-gradient(90deg, #F7C355 5.56%, #835C0B 96.58%)' }}
              className='bg-lite text-white px-8 md:px-16 py-2 md:py-4 lg:py-3 lg:px-14 rounded-3xl text-xs md:text-3xl lg:text-lg xl:text-xl font-light'
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
