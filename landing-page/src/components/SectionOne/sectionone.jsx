"use client";
import { useState, useEffect, useMemo } from 'react';
import Navbar from '../Navbar/navbar';
import Swiper from '../Swiper/swiper';
import 'swiper/css';
import { GoDotFill } from 'react-icons/go';
import Image from 'next/image';

const SectionOne = () => {
  const [currentImage, setCurrentImage] = useState('/img/imageone.svg');
  const [nextImage, setNextImage] = useState('/img/imagetwo.svg');
  const [fadeOut, setFadeOut] = useState(false);

  const images = useMemo(() => [
    '/img/imageone.svg',
    '/img/imagethree.svg',
    '/img/imagefour.svg',
    '/img/imagefive.svg',
  ], []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeOut(true);

      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      const nextImageSrc = images[nextIndex];

      setNextImage(nextImageSrc);

      setTimeout(() => {
        setCurrentImage(nextImageSrc);
        setFadeOut(false);
      }, 500); // Match the duration of the fade-out effect
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images, currentImage]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image layers */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${currentImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${fadeOut ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${nextImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Preload images */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Preload Image ${index}`}
          layout="fill"
          objectFit="cover"
          priority
          style={{ visibility: 'hidden' }}
        />
      ))}

      {/* Navbar */}
      <Navbar className="absolute top-0 left-0 right-0 z-20" />

      {/* Content */}
      <div className='relative z-10 flex flex-col justify-center items-center h-full'>
        <div className='text-center'>
          <p className='text-2xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-7xl text-white font-bold uppercase leading-tight md:leading-tight lg:leading-tight xl:leading-none'>
            Book us <br /> for your next <span className='text-orange-500'>event!</span>
          </p>
          <p className='block text-xs md:text-2xl lg:text-lg xl:text-xl text-white font-bold lg:font-light leading-normal py-2 lg:py-4'>
            Enjoy a lifetime memory from our high-quality <br className='block lg:hidden' /> and classy entertainment.
          </p>
          <div className='block py-2 md:py-4 lg:py-4 xl:hidden'>
            <Swiper />
          </div>
          <div className='hidden py-2 md:py-4 lg:py-4 xl:flex justify-between items-center'>
            <div className='flex justify-between items-center text-white'>
              <div className='flex items-center'>
                <GoDotFill className='text-red-600 h-8 w-8' />
                <p className='font-extrabold text-xs md:text-2xl lg:text-base xl:text-lg ml-2'>
                  Chart-topping Disc Jockey (DJ) in the city!
                </p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='text-yellow-600 h-8 w-8' />
                <p className='font-extrabold text-xs md:text-2xl lg:text-base xl:text-lg ml-2'>
                  Chart-topping Disc Jockey (DJ) in the city!
                </p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='text-purple-600 h-8 w-8' />
                <p className='font-extrabold text-xs md:text-2xl lg:text-base xl:text-lg ml-2'>
                  Chart-topping Disc Jockey (DJ) in the city!
                </p>
              </div>
            </div>
          </div>
          <div className='py-6 lg:py-10'>
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
