"use client";
import React, { useEffect, useState } from "react";
import eventone from "../../../public/img/eventone.svg";
import eventwo from "../../../public/img/eventwo.svg";
import eventhree from "../../../public/img/eventhree.svg";
import eventfour from "../../../public/img/eventfour.svg";
import eventfive from "../../../public/img/eventfive.svg";
import Close from "../../../public/img/close.svg";
import Hall from "../../../public/img/hall.svg";
import Rent from "../../../public/img/rent.svg";
import Audio from "../../../public/img/audio.svg";
import Clapper from "../../../public/img/clapper.svg";
import style from "./sectionfour.module.css";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Sectionfour = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [borderWidth, setBorderWidth] = useState("w-[30%]");

    const details = [
        { id: 1, text: "Carnival" },
        { id: 2, text: "House Parties" },
        { id: 3, text: "Wedding Reception" },
        { id: 4, text: "Beach Parties" },
        { id: 5, text: "Dinner Nights" },
        { id: 6, text: "Concerts" },
        { id: 7, text: "Outreaches" },
        { id: 8, text: "Anniversaries" },
        { id: 9, text: "Grand Openings" },
        { id: 10, text: "Seminars" },
        { id: 11, text: "Outreaches" },
        { id: 12, text: "Movie Sets" },
        { id: 13, text: "After Parties" },
        { id: 14, text: "Company Events" },
        { id: 15, text: "Sales Banquets" },
        { id: 16, text: "School Dances" },
        { id: 17, text: "Book Readings" },
        { id: 18, text: "Networking Events" },
        { id: 19, text: "Product Launches" },
        { id: 20, text: "Charity Galas" },
        { id: 21, text: "Fashion Shows" },
        { id: 22, text: "Conferences" },
        { id: 23, text: "Trade Shows" },
        { id: 24, text: "Pop-up Markets" },
        { id: 25, text: "Bridal Showers" },
        { id: 26, text: "Birthday Parties" },
        { id: 27, text: "Team Building" },
        { id: 28, text: "Music Festivals" },
        { id: 29, text: "Film Screenings" },
        { id: 30, text: "Fitness Events" },
        { id: 31, text: "Gaming Tournaments" },
        { id: 32, text: "Cooking Classes" },
        { id: 33, text: "Art Exhibits" },
        { id: 34, text: "Workshops" },
        { id: 35, text: "Street Festivals" },
        { id: 36, text: "Fundraisers" },
        { id: 37, text: "Holiday Parties" },
        { id: 38, text: "Award Ceremonies" },
        { id: 39, text: "Religious Events" },
        { id: 40, text: "Community Fairs" },
        { id: 41, text: "Political Rallies" },
        { id: 42, text: "Job Fairs" },
        { id: 43, text: "Education Fairs" },
        { id: 44, text: "Music Jams" },
        { id: 45, text: "Hackathons" },
        { id: 46, text: "Photo Shoots" },
        { id: 47, text: "Car Shows" },
        { id: 48, text: "Wine Tastings" },
        { id: 49, text: "Public Talks" },
        { id: 50, text: "Open Mic Nights" },
    ];

    const info = [
        {
            id: 1,
            image: Close,
            label: "Disc Jockey",
            text: "We have a chart-topping DJ service. We will set up and play recorded music for your audience, ensuring excellent music and sound production. Our DJs add creative flair to their art and we never run out of popular songs and danceable beats. "
        },
        {
            id: 2,
            image: Rent,
            label: "Equipment Rental",
            text: "When we can, we lease out our equipment to event managers and film makers. Thereby, we relieve you of the financial burden of owning high-grade equipment. We ensure you meet our equipment in a good and rentable condition. "
        },
        {
            id: 3,
            image: Audio,
            label: "Audiovisual Production",
            text: "This entails the making of both auditory and visual contents. Among these are adverts/commercials, corporate videos, TV shows, films, music videos, etc"
        },
        {
            id: 4,
            image: Clapper,
            label: "Digital Media/AI",
            text: "The business landscape has been taken over by the digital media. Our enterprise cuts across social media, web, live-streaming, animation, AI, etc."
        },
        

    ]

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations
            easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)", // Custom easing function
        });

        // Automatically slide every 3 seconds
        const interval = setInterval(() => {
            setStartIndex((prevIndex) => {
                const nextIndex = prevIndex + 16;
                if (nextIndex >= details.length) {
                    setBorderWidth("w-[30%]"); // Reset to the default width
                    return 0; // Reset to the first set
                }
                // Update the width of the border as the items change
                if (nextIndex === 16) {
                    setBorderWidth("w-[50%]"); // Move to center on the second set
                } else if (nextIndex === 32) {
                    setBorderWidth("w-[100%]"); // Move to the end on the third set
                }
                return nextIndex;
            });
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [details.length]);

    // Display the next set of 16 items based on the current startIndex
    const displayedItems = details.slice(startIndex, startIndex + 16);

    return (
        <div className="overflow-x-hidden">
            <div className="bg-black ">
                <div className="px-10 py-10 md:py-16 md:px-16 lg:px-20 lg:py-28 text-white ">
                    <div data-aos="fade-down" className="pb-10 md:pb-32">
                        <p className="text-center text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-josefin text-orange-700">
                            Our Services
                        </p>




                        <div>
                            {/* Mobile */}
                            <div className='block lg:hidden md:pt-6'>
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
                                <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Weddings</p>
                                <div className='border border-t-8 h-[20px]'></div>
                                <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'> Audiovisual Production</p>
                                <div className='border border-t-8 h-[20px]'></div>
                                <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-josefin'>Rentals</p>
                            </div>
                        </div>



                    
                        <div className="pt-6 lg:pt-10  flex flex-col lg:flex-row gap-16 lg:gap-10 " >
                            <div className="flex flex-col gap-2 md:gap-3 rounded-2xl"
                                style={{ boxShadow: '0px 0px 10.8px 8px #FF4D03B2' }}>
                                <div className="h-[75vh] lg:h-[94vh] xl:h-[78vh] w-[100%]">
                                    <Image
                                        src={Hall}
                                        alt="pic-img"
                                        className="w-[100%] h-[100%] object-cover rounded-t-2xl"
                                    />
                                </div>
                                <div className="px-3 py-6 md:px-6 md:py-8 lg:p-4 flex flex-col gap-4 md:gap-3">
                                    <p className="font-light text-xl md:text-4xl lg:text-2xl xl:text-3xl hover:text-orange-700 cursor-pointer">Event Coverage</p>
                                    <p className="font-light text-sm md:text-2xl lg:text-lg xl:text-xl leading-relaxed md:leading-relaxed lg:leading-snug xl:leading-normal">
                                        Event Coverage With our digital cameras, we cover (record) live events such as conferences (business, academic, or political), weddings, parties, concerts, rallies, publicity stunts, festivals, anniversaries, outreaches, carnivals, etc.
                                    </p>
                                </div>
                            </div>




                            <div className="flex-2 grid lg:grid-cols-2 gap-10 ">
                              
                              {
                                info.map((item) => (
                                    <div key={item.id} className="flex flex-col gap-2 md:gap-3 rounded-2xl h-[50vh] lg:h-[72vh] xl:h-[58vh]"
                                    style={{ boxShadow: '0px 0px 10.8px 8px #FF4D03B2' }}>
                                    <div className="h-[15vh] w-[100%]">
                                        <Image
                                            src={item.image}
                                            alt="pic-img"
                                            className="w-[100%] h-[100%] object-cover rounded-t-2xl"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-2 md:gap-6 lg:gap-3">
                                        <p className="font-light text-xl md:text-4xl lg:text-2xl xl:text-3xl hover:text-orange-700 cursor-pointer">{item.label}</p>
                                        <p className="font-light text-sm md:text-2xl lg:text-lg xl:text-xl leading-relaxed md:leading-relaxed lg:leading-snug xl:leading-normal">
                                        {item.text}
                                    </p>
                                    </div>
                                </div>
                                ))
}
                               
                            </div>
                        </div>



                    </div>

                    <div
                    data-aos="fade-left"
                        className="bg-cover bg-center h-screen"
                        style={{ backgroundImage: `url('/img/newimg.svg')` }}
                    >
                        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
                            <div className="pt-4 md:pt-10 lg:pt-24">
                                <p className="text-xl md:text-5xl lg:text-4xl xl:text-6xl font-light text-orange-300">
                                    Events We Cover
                                </p>
                                <div className="border-b-4 w-[25%] h-[1vh] md:h-[2vh] ml-[80px] md:ml-[200px] lg:ml-[155px] xl:ml-[250px] border-orange-300 lg:w-[15%] xl:w-[17%]"></div>

                            </div>

                            {/* Display the events grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10 md:pt-20 lg:pt-10 xl:pt-24 md:gap-10 lg:gap-12">
                                {displayedItems.map((datum) => (
                                    <div
                                        key={datum.id}
                                        className="bg-white flex items-center justify-start xl:justify-center gap-1 md:gap-2 lg:gap-0 border rounded-xl px-2 py-2 md:py-3 lg:py-2"
                                    >
                                        <GoDotFill className="text-gray-500 w-4 h-4  md:w-6 md:h-6" />
                                        <p className="text-xs md:text-2xl lg:text-sm xl:text-xl font-light text-black max-w-full truncate overflow-hidden">
                                            {datum.text}
                                        </p>
                                    </div>
                                ))}
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sectionfour;
