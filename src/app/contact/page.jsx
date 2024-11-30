'use client'

import { delay, easeIn, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import TextArea  from "@/components/ui/"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import SectionTitle from "@/components/SectionTitle";


const Contact = () => {


    const info = [
        {
            icon: <FaPhoneAlt />,
            title: "Phone",
            description: "(+088) 016112147103"
        },
        {
            icon: <FaEnvelope />,
            title: "E-mail",
            description: "ismailhossain.web07@gmail.com "
        },
        {
            icon: <FaMapMarkedAlt />,
            title: "Address",
            description: "Sonagazi, Feni"
        }
    ]

    return (
        <motion.section

            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: easeIn }
            }}
            className="section-padding"
        >

            <div className="container mx-auto">

                <SectionTitle title="GET IN" colorText="TOUCH" />

                <div className="flex flex-col xl:flex-row gap-7">
                    <div className="xl:h-[54%] flex-1 order-2 xl:order-none">
                        {/* form */}
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-accent text-4xl">Let's Works Together </h3>
                            <p className="text-white/60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptatem blanditiis sunt quod ipsum quidem eaque accusantium fugiat suscipit voluptate quaerat, similique sint hic nisi amet ab, corporis esse? Quae?</p>
                        
                            {/* input */}
                            <Input  type="fristName" placeholder="Enter Your FristName" />
                            <Input  type="lastName" placeholder="Enter Your lastName" />
                            <Input  type="email" placeholder="Enter Your email" />
                            <Input  type="phone" placeholder="Enter Your phone" />

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue className="Select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem>Web Development</SelectItem>
                                        <SelectItem>Web Data Analizies</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <textarea rows={10} cols={20} className="flex  border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none rounded-[7px]" type="phone" placeholder="Enter Your phone" />
                        
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 xl:w-[30%]">
                        info
                    </div>
                </div>
            </div>


        </motion.section>
    )
}

export default Contact; 