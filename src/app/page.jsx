"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import HeroBannerVone from "@/components/HeroBannerv1";
import WorkingProgress from "@/components/WorkingProgress";
import Services from "./service/page";
import Resume from "./resume/page";
import SetionTranstios from "@/components/SetionTranstion";


export default function Home() {



  return (
    <main>
     <SetionTranstios> <HeroBannerVone /></SetionTranstios>
     <SetionTranstios>  <WorkingProgress /> </SetionTranstios>
     <SetionTranstios>   <Services /> </SetionTranstios>
     <SetionTranstios>   <Resume /> </SetionTranstios>
    </main>
  );
}
