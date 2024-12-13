"use client";

import HeroBannerVone from "@/components/HeroBannerv1";
import WorkingProgress from "@/components/WorkingProgress";
import Services from "./service/page";
import Resume from "./resume/page";
import SetionTranstios from "@/components/SetionTranstion";
import Work from "./work/page";
import Contact from "./contact/page";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home() {

  useEffect(() => {
    AOS.init(); // Initialize AOS
}, []);


  return (
    <main>
    <HeroBannerVone />
     <WorkingProgress />
      <Services/>
      <Resume />
      <Work />
      <Contact/>
      
    </main>
  );
}
