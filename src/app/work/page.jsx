"use client"

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";
import thumbilImage1 from '/images/thumbill-1.png'
import SectionTitle from "@/components/SectionTitle";



const AboutProjects = [
    {
        num: "01",
        name: "Front End",
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        stack: ["HTML", "CSS 3", "JavaScript", "React JS"],
        images: thumbilImage1,
        liveURL: "https://example.com/project1",
        githubURL: "https://github.com/username/project1",
    },
    {
        num: "02",
        name: "Back End",
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        stack: ["Node.js", "Express.js", "MongoDB"],
        images: thumbilImage1,
        liveURL: "https://example.com/project2",
        githubURL: "https://github.com/username/project2",
    },
];

const Work = () => {
    const [swiperInstance, setSwiperInstance] = useState(null); // Store Swiper instance
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");


    const handleImageClick = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    return (
        <section className="section-padding" data-aos="fade-up"
        data-aos-duration="1500">
            <div className="ih-ismail-hossain-wrapper container mx-auto">


                <SectionTitle title="My" colorText="Work" />

                
                <div className="ih-work-project-wrapper flex flex-col xl:flex-row xl:gap-7">
                    {/* Slider Section */}
                    <div className="w-full xl:w-[48%] xl:h-[480px] flex flex-col xl:justify-between   rounded-xl">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            onSwiper={setSwiperInstance} // Capture Swiper instance
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
                        {/* Slider Button */}
                        {swiperInstance && (
                            <WorkSliderBtn
                                swiper={swiperInstance} // Pass Swiper instance
                                containerStyle="flex gap-4 w-full items-center justify-end  text-right mt-3"
                                btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-5 border-accent rounded-[7px]"
                                iconsSTyles="icon-style-class"
                            />
                        )}
                    </div>

                    {/* Text Section */}
                    <div className="w-full xl:w-[48%] xl:h-[480px] flex flex-col xl:justify-center">
                        <div>
                            <div className="text-8xl font-extrabold text-transparent text-stock-outline duration-500">
                                {AboutProjects[currentProjectIndex].num}
                            </div>
                            <div className="h2 font-extrabold text-outline text-white">
                                {AboutProjects[currentProjectIndex].name}
                            </div>
                            <p>{AboutProjects[currentProjectIndex].description}</p>
                            <ul className="flex gap-4">
                                {AboutProjects[currentProjectIndex].stack.map((item, index) => (
                                    <li key={index} className="text-xl font-bold text-accent">
                                        {item}
                                        {index !== AboutProjects[currentProjectIndex].stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[999]">
                    <div className="relative max-w-3xl w-full">
                        <button
                            className="absolute top-2 right-2 text-white text-3xl"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close
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
        </section>
    );
};

export default Work;
