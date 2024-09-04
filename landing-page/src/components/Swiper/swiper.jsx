import React from 'react';
import { GoDotFill } from 'react-icons/go';
import style from './swiper.module.css';

const Swiper = () => {
  return (
    <div className={style.slidercontainer}>
      <div className={style.slider}>
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
    </div>
  );
};

export default Swiper;
