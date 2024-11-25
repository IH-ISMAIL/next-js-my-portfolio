"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import HeroBannerVone from "@/components/HeroBannerv1";
import WorkingProgress from "@/components/WorkingProgress";
import Services from "./service/page";
import Resume from "./resume/page";

export default function Home() {



  return (
    <main>
      <HeroBannerVone />
      <WorkingProgress />
      <Services />
      <Resume />
    </main>
  );
}
