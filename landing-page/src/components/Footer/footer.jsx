import React from 'react'
import Image from 'next/image';
import Logo from "../../../public/img/logo-img.svg";
import Link from 'next/link'
import { IoMail } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookF, FaGooglePlusG, FaYoutube } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className=' max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-10'>
            <div className='flex items-center justify-between border-b'>
                <div className='flex-1'>
                    <Image
                        className="w-[30%] lg:w-[30%] xl:w-[20%]"
                        src={Logo}
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                </div>
                <div className='flex-1 flex justify-end items-center gap-4'>
                    <a href="https://www.instagram.com/toprofile_rel?igsh=YXZ0ZmM4a3dwenN1" target="_blank" rel="noopener noreferrer"><BsInstagram className='text-white h-3 w-3 md:h-6 md:w-6 lg:h-4 lg:w-4 xl:h-5 xl:w-5' /></a>
                    <a href="mailto:info@toprofile.com" target="_blank" rel="noopener noreferrer"><IoMail className='text-white  h-3 w-3 md:h-6 md:w-6 lg:h-4 lg:w-4 xl:h-5 xl:w-5' /></a>
                    <a href="https://youtube.com/@theragist?si=OClCj1dGveog7Ci7" target="_blank" rel="noopener noreferrer"><FaTwitter className='text-white h-3 w-3 md:h-6 md:w-6 lg:h-4 lg:w-4 xl:h-5 xl:w-5' /></a>
                    <a href="https://youtube.com/@theragist?si=OClCj1dGveog7Ci7" target="_blank" rel="noopener noreferrer"><FaFacebook className='text-white h-3 w-3 md:h-6 md:w-6 lg:h-4 lg:w-4 xl:h-5 xl:w-5' /></a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between md:items-center'>
                <div className='py-3 md:py-5 flex-1'>
                    <p className='text-white text-xs md:text-lg xl:text-base font-normal'>Copyright © 2024 Toprofile</p>
                </div>
                <div className='flex-1  flex items-center md:justify-end gap-6 md:gap-10'>
                    <Link href={`/`} >
                        <div>
                            <p className='text-white text-xs md:text-lg xl:text-base font-normal hover:text-orange-500'>Services</p>
                        </div>
                    </Link>
                    <Link href={`/`} >
                        <div>
                            <p className='text-white text-xs md:text-lg xl:text-base font-normal hover:text-orange-500'>Contact Us</p>
                        </div>
                    </Link>
                    <Link href={`/`} >
                        <div>
                            <p className='text-white text-xs md:text-lg xl:text-base font-normal hover:text-orange-500'>Book Now</p>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Footer