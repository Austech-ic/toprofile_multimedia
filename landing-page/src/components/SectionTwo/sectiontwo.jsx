"use client"
import React from 'react'
import all from "../../../public/img/all.svg";
import Image from 'next/image';

const Sectiontwo = () => {
  return (
    <div className='bg-black'>
        <div  className=' max-w-7xl mx-auto px-4 py-10 md:py-16 md:px-10 lg:px-20 lg:py-28 text-white'>
       <div >
      <div >
      <p className='text-center text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-josefin text-orange-600 '>Visuals Of Our Equipment</p>
      </div>

       <div className='flex items-center justify-center text-white gap-2 py-4'>
        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Camera</p>
        <div className='border border-t-8 h-[20px]'></div>
        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Speakers</p>
        <div className='border border-t-8 h-[20px]'></div>
        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Disc Jokey</p>
       </div>
       </div>

       <div className='px-4 md:px-6 lg:px-0 pt-6 lg:pt-10 ' data-aos="fade-up" >
        <Image 
        src={all} alt='all-img' 
        className='w-[100%]'
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy" />
       </div>
    </div>
    </div>
  )
}

export default Sectiontwo