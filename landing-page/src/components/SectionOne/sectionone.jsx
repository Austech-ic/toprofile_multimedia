"use client";
import { useState, useEffect, useMemo } from 'react';
import Navbar from '../Navbar/navbar';
import Swiper from '../Swiper/swiper';
import 'swiper/css';
import { GoDotFill } from 'react-icons/go';



const SectionOne = () => {
  const [currentImage, setCurrentImage] = useState('/img/imageone.svg');

  // Memoize images array
  const images = useMemo(() => [
    '/img/imageone.svg',
    '/img/imagetwo.svg',
    '/img/imagethree.svg',
    '/img/imagefour.svg',
    '/img/imagefive.svg',
  ], []);

  useEffect(() => {
    // Preload images
    const preloadImages = () => {
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();

    const intervalId = setInterval(() => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000); // Change every 5 seconds

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

          <div className='block py-2 md:py-4 lg:py-4 lg:hidden'>
            <Swiper />
          </div>


          <div className='hidden py-2 md:py-4 lg:py-4 lg:flex justify-between items-center'>
          <div className='flex justify-between items-center text-white'>
          <div className='flex justify-start items-center'>
            <GoDotFill className='text-red-600 h-8 w-8' />
            <p className='font-extrabold text-xs md:text-2xl lg:text-base xl:text-lg'>
              Chart-topping Disc Jockey (DJ) in the city!
            </p>
          </div>
          <div className='flex justify-start items-center'>
            <GoDotFill className='text-yellow-600 h-8 w-8' />
            <p className='font-extrabold text-xs md:text-2xl lg:text-base xl:text-lg'>
              Chart-topping Disc Jockey (DJ) in the city!
            </p>
          </div>
          <div className='flex justify-start items-center'>
            <GoDotFill className='text-purple-600 h-8 w-8' />
            <p className='font-extrabold text-xs md:text-2xl lg:text-base xl:text-lg'>
              Chart-topping Disc Jockey (DJ) in the city!
            </p>
          </div>
        </div>
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
