"use client";
import SectionTitle from "@/components/SectionTitle";
import SpotLightItem from "@/components/SpotLightItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact, FaShopify, FaSquarespace, FaWix } from "react-icons/fa";
import Education from "../../assets/education-logo.png";
import Experience from "../../assets/achievement.png";
import Skill from "../../assets/skills.png";
import AboutMeLogo from "../../assets/aboutUs.png";
import AboutMeImg from "../../assets/IH ISMAIL HOSSAIN ABOUT ME IMAGE.png";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import DotAboutMeLottefle from "@/components/DotAboutMeLottefle";





// About data 
const about = {
    title: 'About Me',
    description: "I am strategic and goal-oriented, and I always work with an end goal in mind. I like to take challenges in everything. I believe I am a good candidate for this position.",
    logo: AboutMeLogo,
    info: [
        {
            fieldName: "Name",
            fieldValue: "Luke Coleman"
        },
        {
            fieldName: "Phone",
            fieldValue: "+880161217103"
        },
        {
            fieldName: "Experience",
            fieldValue: "12+ years"
        },
        {
            fieldName: "Skype",
            fieldValue: "Luke.01"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Bangladeshi"
        },
        {
            fieldName: "Email",
            fieldValue: "ismailhossain.web07@gmail.com"
        },
        {
            fieldName: "Feelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Language",
            fieldValue: "English, Bangla, India"
        }
    ]
}
// Experience Data 
const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore veritatis eius aliquid a animi, hic quisquam qui eum sit pariatur.",
    icons: Experience,
    items: [
        {
            company: "Softvence Agency",
            position: "Web Developer",
            duration: "1 Years (Present)",
            logo: "https://i.ibb.co.com/nQt5zBL/download.png"
        },
        {
            company: "BdCalling IT Limited",
            position: "Web Developer",
            duration: "6 Months",
            logo: "https://bdcalling.com/wp-content/themes/bdcalling/assets/images/Bdcalling%20White%20Logo.png"
        }
    ]
}
// Education/Courses Data 
const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Educatoin",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore veritatis eius aliquid a animi, hic quisquam qui eum sit pariatur.",
    icons: Education,
    items: [
        {
            institution: "Feni Computer Institution",
            degree: "Web Design",
            duration: "6 Month",
            logo: "https://seip-fd.gov.bd/wp-content/uploads/2019/01/logo1.png"
        },
        {
            institution: "Programming Hero Institution",
            degree: "Web Development",
            duration: "1 Years",
            logo: "https://www.programming-hero.com/header/ph_logo.svg"
        },
        {
            institution: "Programming Hero Institution",
            degree: "Next Level Web Development",
            duration: "6 Month",
            logo: "https://i.ibb.co.com/kDRKHhh/Next-Lvl.png"
        },
        {
            institution: "Ostad",
            degree: "Shopify Theme Development",
            duration: "6 Month",
            logo: "https://i.ibb.co.com/wWMCM6x/Ostad-Logo.png"
        }
    ]
}
// Skill Data 
const skills = {
    icon: '/assets/resume/cap.svg',
    title: "My Skills",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore veritatis eius aliquid a animi, hic quisquam qui eum sit pariatur.",
    icons: Skill,
    items: [
        {
            icon: <FaHtml5 className="w-[40px] h-[30px] xl:w-[60px] xl:h-[60px] text-accent" />,
            name: "HTML 5"
        },
        {
            icon: <FaCss3 className="w-[40px] h-[30px] xl:w-[60px] xl:h-[60px] text-accent" />,
            name: "CSS 3"
        },
        {
            icon: <FaJs className="w-[40px] h-[30px] xl:w-[60px] xl:h-[60px] text-accent" />,
            name: "Javascript"
        },
        {
            icon: <FaShopify className="w-[40px] h-[30px] xl:w-[60px] xl:h-[60px] text-accent" />,
            name: "Shopify"
        },
        {
            icon: <FaSquarespace className="w-[40px] h-[30px] xl:w-[60px] xl:h-[60px] text-accent" />,
            name: "Squarespace"
        },
        {
            icon: <FaWix className="w-[40px] h-[30px] xl:w-[60px] xl:h-[60px] text-accent" />,
            name: "Wix"
        },
        {
            icon: <FaReact className="w-[40px] h-[30px] xl:w-[60px] xl:h-[60px] text-accent" />,
            name: "React"
        },
        {
            icon: <FaNodeJs className="w-[40px] h-[30px] xl:w-[60px] xl:h-[60px] text-accent" />,
            name: "Node Js"
        },
    ]
}

const Resume = () => {
    return (
        <section className="section-padding">
            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.3, ease: "easeIn" }}
                className=" flex items-center justify-center py-12 xl:py-0"
            >


                <div className="container mx-auto">
                    <SectionTitle title="My" colorText="Resume" />
                    <Tabs defaultValue="experience" className="flex flex-col gap-[30px]">
                        <TabsList className="flex flex-col xl:flex-row w-full mx-w-[250px] mx-auto xl:mx-0 ">
                            <TabsTrigger className="rounded-[15px]" value="experience">Expreience</TabsTrigger>
                            <TabsTrigger className="rounded-[15px]" value="Education">Education</TabsTrigger>
                            <TabsTrigger className="rounded-[15px]" value="Skills"> Skills</TabsTrigger>
                            <TabsTrigger className="rounded-[15px]" value="About Me">About Me</TabsTrigger>
                        </TabsList>
                        <div >

                            {/* Experience */}
                            <TabsContent value="experience" className="w-full flex flex-col gap-4">

                                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                                    <div className="flex items-center gap-4">
                                        <Image src={experience.icons} width={70} height={70} alt="Education" />
                                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                                    </div>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                </div>


                                <ScrollArea>

                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    transition={{ type: "spring", stiffness: 150, damping: 20 }}

                                                >
                                                    <SpotLightItem>
                                                        <li

                                                            className="bg-primary h-[184px] py-6 px-10 rounded-xl flex items-center justify-between gap-1"

                                                        >
                                                            <div>
                                                                <span className="text-accent">{item.duration}</span>
                                                                <h3 className="font-bold h4">{item.position}</h3>
                                                                <div className="flex items-center gap-3">
                                                                    {/* dot */}
                                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                                    <p>{item.company}</p>
                                                                </div>
                                                            </div>
                                                            {/* company logo */}
                                                            <div>
                                                                <img
                                                                    width={200}
                                                                    height={200}
                                                                    src={item.logo}
                                                                    alt="logo"

                                                                />


                                                                {/* <Image src={item.logo && item.logo} width={70} height={70} alt="Education" /> */}
                                                            </div>
                                                        </li>
                                                    </SpotLightItem>
                                                </motion.div>
                                            )
                                        })}
                                    </ul>

                                </ScrollArea>

                            </TabsContent>

                            {/* Education */}
                            <TabsContent value="Education" className="w-full flex flex-col gap-4">

                                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                                    <div className="flex items-center gap-4">
                                        <Image src={education.icons} width={70} height={70} alt="Education" />
                                        <h3 className="text-4xl font-bold">{education.title}</h3>
                                    </div>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                </div>

                                <ScrollArea >

                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    transition={{ type: "spring", stiffness: 150, damping: 20 }}

                                                >
                                                    <SpotLightItem>
                                                        <li

                                                            className="bg-primary h-[184px] py-6 px-10 rounded-xl flex items-center justify-between gap-1"

                                                        >
                                                            <div>
                                                                <span>{item.duration}</span>
                                                                <h3 >{item.degree}</h3>
                                                                <div className="flex items-center gap-3">
                                                                    {/* dot */}
                                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                                    <p>{item.institution}</p>
                                                                </div>
                                                            </div>
                                                            {/* company logo */}
                                                            <div>
                                                                <img
                                                                    width={"140px"}
                                                                    height={100}
                                                                    src={item.logo}
                                                                    alt="logo"

                                                                />
                                                            </div>
                                                        </li>
                                                    </SpotLightItem>
                                                </motion.div>
                                            )
                                        })}
                                    </ul>

                                </ScrollArea>

                            </TabsContent>


                            {/* skill */}
                            <TabsContent value="Skills" className="w-full flex flex-col gap-4">

                                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                                    <div className="flex items-center gap-4">
                                        <Image src={skills.icons} width={70} height={70} alt="Education" />
                                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    </div>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>

                                <ScrollArea>

                                    <ul className="grid grid-cols-1 lg:grid-cols-4 gap-[30px]">
                                        {skills.items.map((item, index) => {
                                            return (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    transition={{ type: "spring", stiffness: 150, damping: 20 }}

                                                >

                                                    <li key={index}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                    <div>
                                                                        {item.icon}
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent className="bg-white text-primary text-xl font-bold p-3 border rounded-[7px]">
                                                                    {item.name}
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>

                                                </motion.div>
                                            )
                                        })}
                                    </ul>

                                </ScrollArea>

                            </TabsContent>

                            {/* Abour Me */}
                            <TabsContent value="About Me" className="w-full flex flex-col gap-4">



                                <div className="ismail-about-me-wrapper flex gap-6 items-center">
                                    <div className="flex flex-col gap-[10px] text-center xl:text-left  basis-[55%]">
                                        <div className="flex items-center gap-4">
                                            <Image src={about.logo} width={70} height={70} alt="Education" />
                                            <h3 className="h2 font-bold">{about.title}</h3>
                                        </div>
                                        <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                    </div>
                                    <div>
                                       <DotAboutMeLottefle/>
                                    </div>
                                </div>


                            </TabsContent>

                        </div>
                    </Tabs>
                </div>

            </motion.div>
        </section>
    );
};

export default Resume;
