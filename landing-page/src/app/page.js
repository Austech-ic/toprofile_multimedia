"use client"
import 'aos/dist/aos.css'; // import AOS CSS
import AOS from 'aos';
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar/navbar";
import Sectionfour from "@/components/SectionFour/sectionfour";
import SectionOne from "@/components/SectionOne/sectionone";
import Sectionthree from "@/components/SectionThree/sectionthree";
import Sectiontwo from "@/components/SectionTwo/sectiontwo";

import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // Initialize AOS when the component is mounted
    AOS.init({
        duration: 1000, // Duration of animations
    });
}, []);
  return (
   <main className=" overflow-x-hidden" >
  <SectionOne />
  <Sectionfour />
  <Sectiontwo />
<Sectionthree />
  
   </main>
  );
}
