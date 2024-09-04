
import Navbar from "@/components/Navbar/navbar";
import Sectionfour from "@/components/SectionFour/sectionfour";
import SectionOne from "@/components/SectionOne/sectionone";
import Sectionthree from "@/components/SectionThree/sectionthree";
import Sectiontwo from "@/components/SectionTwo/sectiontwo";

import Image from "next/image";

export default function Home() {
  return (
   <main className=" overflow-x-hidden" >
  <SectionOne />
  <Sectionfour />
  <Sectiontwo />
<Sectionthree />
  
   </main>
  );
}
