"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from "../../../public/img/logo-img.svg";
import imageOne from "../../../public/img/imageone.svg";
import imageTwo from "../../../public/img/imagetwo.svg";
import imageThree from "../../../public/img/imagethree.svg";
import imageFour from "../../../public/img/imagefour.svg";
import imageFive from "../../../public/img/imagefive.svg";
import Navbar from '../Navbar/navbar';

const SectionOne = () => {
  const [currentImage, setCurrentImage] = useState(imageOne);

  const images = [imageOne, imageTwo, imageThree, imageFour, imageFive];

  useEffect(() => {
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
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${currentImage.src})` }}>
     <Navbar />
     <div className='flex justify-center items-center  h-full'>
    <div>
    <div>
     <p className='text-2xl md:text-6xl lg:text-6xl xl:text-7xl text-white font-medium text-center uppercase leading-tight md:leading-tight lg:leading-none xl:leading-none'>Book us <br /> for your next <span className='text-orange-500'>event!</span></p>
     </div>

     <div className='py-2'>
     <p className='text-xs md:text-2xl lg:text-lg xl:text-xl text-white font-light text-center leading-normal' >Enjoy a lifetime memory from our high-quality and classy entertainment.</p>
     </div>
    </div>
     </div>
    </div>
  );
}

export default SectionOne
