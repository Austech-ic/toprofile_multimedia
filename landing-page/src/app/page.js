"use client";

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import AOS from 'aos/dist/aos'; // Lazy load AOS from dist
import 'aos/dist/aos.css'; // Import AOS CSS

// Lazy loading components
const Navbar = dynamic(() => import("@/components/Navbar/navbar"), { ssr: false });
const SectionOne = dynamic(() => import("@/components/SectionOne/sectionone"), { ssr: false });
const SectionFour = dynamic(() => import("@/components/SectionFour/sectionfour"), { ssr: false });
const SectionThree = dynamic(() => import("@/components/SectionThree/sectionthree"), { ssr: false });
const SectionTwo = dynamic(() => import("@/components/SectionTwo/sectiontwo"), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Initialize AOS when the component is mounted
    AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);

  return (
    <main className="relative overflow-hidden">
      <SectionOne />
      <SectionFour />
      <SectionTwo />
      <SectionThree />
    </main>
  );
}
