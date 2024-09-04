"use client"
import React, { useEffect } from 'react';
import New from "../../../public/img/new.svg";
import style from './sectionfour.module.css';
import Image from 'next/image';
import 'aos/dist/aos.css'; // import AOS CSS
import AOS from 'aos';

const Sectionfour = () => {
useEffect(() => {
       AOS.init({
    duration: 1000, // Duration of animations
    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Custom easing function
});

    }, []);

    return (
        <div className='bg-black'>
            <div className=' max-w-7xl mx-auto px-4 py-10 md:py-16 md:px-10 lg:px-20 lg:py-28 text-white'>
                <div >
                    <div >
                        <p className='text-center text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-josefin text-orange-400 '>Our Services</p>
                    </div>

                    {/* Mobile */}
                    <div className='block lg:hidden'>
                        <div className={style.slidercontainer}>
                            <div className={style.slider}>
                                <div className='flex justify-between items-center  gap-2  text-white'>
                                    <div className='flex justify-start items-center gap-2'>
                                        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Corporate Events</p>
                                        <div className='border border-t-8 h-[20px]'></div>
                                    </div>
                                    <div className='flex justify-start items-center  gap-2'>
                                        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Live Concerts</p>
                                        <div className='border border-t-8 h-[20px]'></div>
                                    </div>
                                    <div className='flex justify-start items-center  gap-2'>
                                        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Weddings</p>
                                        <div className='border border-t-8 h-[20px]'></div>
                                    </div>
                                    <div className='flex justify-start items-center  gap-2'>
                                        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Audiovisual Production</p>
                                        <div className='border border-t-8 h-[20px]'></div>
                                    </div>
                                    <div className='flex justify-start items-center  gap-2'>
                                        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Rentals</p>
                                        <div className='border border-t-8 h-[20px]'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Desktop */}
                    <div className='hidden lg:flex items-center justify-center text-white gap-2 py-4'>
                        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Corporate Events</p>
                        <div className='border border-t-8 h-[20px]'></div>
                        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'> Live Concerts</p>
                        <div className='border border-t-8 h-[20px]'></div>
                        <p>hello</p>
                        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Weddings</p>
                        <div className='border border-t-8 h-[20px]'></div>
                        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'> Audiovisual Production</p>
                        <div className='border border-t-8 h-[20px]'></div>
                        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Rentals</p>
                    </div>
                </div>

                

                <div className='pt-6 lg:pt-10'>
                    <Image src={New} alt='all-img' className='w-[100%]' data-aos="fade-in"
    data-aos-delay="200"
    data-aos-easing="ease-in"  />
                </div>

                <div className='pt-14 md:pt-28 lg:pt-28 xl:pt-32'>
                    <Image src={New} alt='all-img' className='w-[100%]' data-aos="fade-right"
                    data-aos-delay="200" />
                </div>
            </div>
        </div>
    )
}

export default Sectionfour