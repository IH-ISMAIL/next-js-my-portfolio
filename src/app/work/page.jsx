'use client'

import SectionTitle from "@/components/SectionTitle";
import { sectionClassName } from "@/lib/utils";
import { usePathname } from 'next/navigation'

import { motion } from "framer-motion";
import React, {useState, } from "react";

// swiper 
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css"

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"

import Link from "next/link";
import Image from "next/image";


const Projects = [
    {
        num: '01',
        name: 'Front End',
        title: "Project 1",
        description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsum qui, doloribus voluptate perspiciatis molestiae maiores quae molestias excepturi neque, sapiente, eum sequi debitis laudantium. Omnis nobis corporis vero saepe.",
        stack: ["HTML", "CSS 3", "JAVASCRIP", "REACT JS"],
        images: '/',
        liveURL: "/",
        githubURL: '/'
    },
    
]


const Work = () => {
    return (
        <section id={sectionClassName(usePathname)}>
            <div className="ih-ismail-hossain-wrapper container mx-auto">
                <SectionTitle title="My" colorText="Work" />
                {/* main content */}

            </div>
        </section>
    )
}

export default Work; 