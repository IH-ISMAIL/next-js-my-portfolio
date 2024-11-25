"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import Image from 'next/image'
import MobileNav from "./MobileNav";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";


const Header = () => {

    // Optional: Use the callback for loading the full tsparticles engine
    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);
  
    const particlesOptions = {
      background: {
        color: {
          value: "#121212", // Background color (dark for contrast)
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 50, // Number of particles
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#00ff99", // Your brand color for particles
        },
        links: {
          enable: true,
          color: "#00ff99", // Color for particle connections
          distance: 150,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2, // Particle movement speed
          outModes: {
            default: "bounce",
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.3, max: 1 }, // Particle size
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Repulse particles when hovered
          },
          onClick: {
            enable: true,
            mode: "push", // Add particles on click
          },
        },
        modes: {
          repulse: {
            distance: 100, // Repulsion distance
          },
          push: {
            quantity: 3, // Quantity of particles on click
          },
        },
      },
      detectRetina: true, // Retina display support
    };

  return (
    <header className="py-8 xl:py-12 text-white relative">

 {/* Particle Background */}
 <Particles
        id="hero-section-particles"
        init={particlesInit} // Optional, only if you want to load full engine
        options={particlesOptions} // Directly passing the configuration
        className="absolute inset-0 z-[-1]" // Position it behind content
      />
  

      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-lg md:text-3xl font-semibold text-white flex items-center gap-3">
          <Image
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            src="/IH-fav.png"
            width={40}
            height={40}
            alt="Picture of the author"
          /> <span>ISMAIL HOSSAIN</span>
            <span className="text-accent">.</span>
          </h1>
        </Link>



        {/* desktop nav */}
        <div className="hidden xl:flex justify-between items-center">
          <Nav />
          <Button color="gray" variant="bg-primary">
             <Link  href='/'>Hire me</Link>
          </Button>
        </div>

        {/* mobile menu */}
        <div className="xl:hidden">
           <MobileNav/>
        </div>

      </div>
    </header>
  );
};

export default Header;
