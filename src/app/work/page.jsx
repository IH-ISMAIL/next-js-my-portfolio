'use client';

import SectionTitle from "@/components/SectionTitle";
import { sectionClassName } from "@/lib/utils";
import { usePathname } from 'next/navigation';

import { motion } from "framer-motion";
import React, { useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import { BsX } from "react-icons/bs";

import imageONe from '/images/thumbill-1.png';
import imageTwo from '/images/thumbill-2.png';


const AboutProjects = [
    {
        num: "01",
        name: "Front End",
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        stack: ["HTML", "CSS 3", "JavaScript", "React JS"],
        images: imageONe,
        liveURL: "https://example.com/project1", // Replace with your live project URL
        githubURL: "https://github.com/username/project1", // Replace with your GitHub repo URL
    },
    {
        num: "02",
        name: "Back End",
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        stack: ["Node.js", "Express.js", "MongoDB"],
        images: imageTwo,
        liveURL: "https://example.com/project2", // Replace with your live project URL
        githubURL: "https://github.com/username/project2", // Replace with your GitHub repo URL
    },
];

const Work = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const currentProject = AboutProjects[currentProjectIndex];

    const handleImageClick = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
            }}
            id={sectionClassName(usePathname)}
            className="section-padding"
        >
            <div className="ih-ismail-hossain-wrapper container mx-auto">
                <SectionTitle title="My" colorText="Work" />
                <div className="ih-work-project-wrapper flex flex-col xl:flex-row xl:gap-7">
                    {/* Slider Section */}
                    <div className="w-full xl:w-[48%] xl:h-[480px] flex flex-col xl:justify-between   overflow-hidden rounded-xl">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            onSlideChange={(swiper) => setCurrentProjectIndex(swiper.activeIndex)}
                            className="w-full h-[520px]"
                        >
                            {AboutProjects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="window"
                                        onClick={() => handleImageClick(project.images)}
                                    >
                                        <Image
                                            src={project.images}
                                            alt={`Project ${index + 1}`}
                                            width={500}
                                            height={800}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Text Section */}
                    <div className="w-full xl:w-[48%] xl:h-[480px] flex flex-col xl:justify-center">
                        <div>
                            <div className="text-8xl font-extrabold text-transparent text-stock-outline duration-500">
                                {currentProject.num}
                            </div>
                            <div className="h2 font-extrabold text-outline text-white">
                                {currentProject.name}
                            </div>
                            <p>{currentProject.description}</p>
                            <ul className="flex gap-4">
                                {currentProject.stack.map((item, index) => (
                                    <li key={index} className="text-xl font-bold text-accent">
                                        {item}
                                        {index !== currentProject.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>

                            {/* Buttons */}
                            <div className="flex gap-4 items-center">
                                {/* Live Project Link */}
                                {currentProject.liveURL && (
                                    <Link
                                        href={currentProject.liveURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="bg-primary text-white group-[hover]:text-accent w-16 h-16 text-xl rounded-full flex items-center justify-center">
                                                    <BsArrowUpRight />
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-white text-black">
                                                    <p>Live Project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                                {/* GitHub Link */}
                                {currentProject.githubURL && (
                                    <Link
                                        href={currentProject.githubURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="bg-primary text-white group-[hover]:text-accent w-16 h-16 text-xl rounded-full flex items-center justify-center">
                                                    <BsGithub />
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-white text-black">
                                                    <p>Source Code</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="relative max-w-3xl w-full">
                        <button
                            className="absolute top-2 right-2 text-white text-3xl"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <BsX />
                        </button>
                        <Image
                            src={modalImage}
                            alt="Modal Image"
                            width={1000}
                            height={800}
                            className="max-h-[90vh] w-auto object-contain mx-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}
        </motion.section>
    );
};

export default Work;
