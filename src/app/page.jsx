"use client";

import HeroBannerVone from "@/components/HeroBannerv1";
import WorkingProgress from "@/components/WorkingProgress";
import Services from "./service/page";
import Resume from "./resume/page";
import SetionTranstios from "@/components/SetionTranstion";
import Work from "./work/page";


export default function Home() {



  return (
    <main>
     <SetionTranstios> <HeroBannerVone /></SetionTranstios>
     <SetionTranstios>  <WorkingProgress /> </SetionTranstios>
     <SetionTranstios>   <Services /> </SetionTranstios>
     <SetionTranstios>   <Resume /> </SetionTranstios>
     <SetionTranstios>   <Work /> </SetionTranstios>
    </main>
  );
}
