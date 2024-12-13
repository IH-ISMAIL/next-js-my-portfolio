"use client"

import { delay, easeIn, motion } from "framer-motion";
import { Input } from "@/components/ui/input";
// import TextArea  from "@/components/ui/"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import PrimaryButton from "@/components/Primary-btn";
import { toast } from 'react-toastify';


const ContactForm = () => {


    const info = [
        {
            icon: <FaPhoneAlt className="w-[52px] h-[32px]" />,
            title: "Phone",
            description: "(+088) 016112147103"
        },
        {
            icon: <FaEnvelope className="w-[32px] h-[32px]" />,
            title: "E-mail",
            description: "ismailhossain.web07@gmail.com "
        },
        {
            icon: <FaMapMarkedAlt className="w-[52px] h-[32px]" />,
            title: "Address",
            description: "Sonagazi, Feni"
        }
    ]


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Formdata", data)

        try {
            const response = await fetch("http://localhost:5000/api/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.message) {
                toast.success(result.message || "Form submitted successfully!", {
                    position: "bottom-right"
                })

                // Reset the form
                 event.target.reset();
            }

        } catch (error) {
            toast.error("Something went wrong. Please try again.", {
                position: "bottom-right"
            })


        }




    };

    return (
        <motion.section

            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: easeIn }
            }}
            className="section-padding"

            data-aos="fade-up"
            data-aos-duration="1500"
        >

            

            <div className="container mx-auto">

                <SectionTitle title="GET IN" colorText="TOUCH" />

                <div className="flex flex-col xl:flex-row gap-7">
                    <div className="xl:h-[54%] w-full xl:w-[60%] order-2 xl:order-none">
                        {/* form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 xl:p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-accent text-4xl">Let's Work Together</h3>
                            <p className="text-white/60">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>

                            {/* Input Fields */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                <Input type="text" name="firstName" placeholder="Enter Your First Name" />
                                <Input type="text" name="lastName" placeholder="Enter Your Last Name" />
                                <Input type="email" name="email" placeholder="Enter Your Email" />
                                <Input type="text" name="phone" placeholder="Enter Your Phone" />
                            </div>

                            {/* Select Field */}
                            <Select name="service">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {/* <SelectLabel>Select a service</SelectLabel> */}
                                        <SelectItem value="shopifyDesign">Shopify Design</SelectItem>
                                        <SelectItem value="wixDesign">Wix Design</SelectItem>
                                        <SelectItem value="squarespaceDesign">Squarespace Design</SelectItem>
                                        <SelectItem value="psdToWeb">PSD To Web Design</SelectItem>
                                        <SelectItem value="figmaToWeb">Figma To Web Design</SelectItem>
                                        <SelectItem value="reactDesign">Web Design With React</SelectItem>
                                        <SelectItem value="nextjsDesign">Web Design With Next.js</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* Textarea */}
                            <textarea
                                name="message"
                                rows={10}
                                className="focus:outline-accent flex border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none rounded-[7px]"
                                placeholder="Enter Your Message"
                            />

                            {/* Submit Button */}
                            <PrimaryButton type="submit" bgColor="#00ff99" title="Submit Now" />
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0 xl:w-[30%]">

                        <ul className="flex flex-col gap-4">
                            {
                                info.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center  gap-4" data-aos="fade-left" data-aos-duration="1000">

                                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center gap-4 ">
                                                <div>{item.icon}</div>
                                            </div>

                                            <div>
                                                <p className="h3">{item.title}</p>
                                                <h3 className="font-medium text-xl">{item.description}</h3>
                                            </div>

                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>


        </motion.section>
    );
};

export default ContactForm;