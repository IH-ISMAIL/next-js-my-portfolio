'use client'

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion";
import { sectionClassName } from "@/lib/utils";


const Services = () => {

   const servicesContent = [
      {
         num: "01",
         url: "#",
         title: "Shopify Design",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "02",
         url: "#",
         title: "Shopify Custom Liquid",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "03",
         url: "#",
         title: "Wix Design",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "04",
         url: "#",
         title: "Squarespace",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "05",
         url: "#",
         title: "Wordpress",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "06",
         url: "#",
         title: "PSD to HTML",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "07",
         url: "#",
         title: "Figma to HTML, CSS, JS",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "08",
         url: "#",
         title: "Build website with React, NextJS",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      }
   ]

   return (
      <section className={`${sectionClassName(usePathname)} `}>
         <div className="container mx-auto section-padding">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{
                  opacity: 1,
                  transition: { delay: 1.4, duration: 0.2, ease: "easeIn" }
               }}
               className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
            >

               {servicesContent.map((service, index) => {
                  return (
                     <div key={index} className="service-item flex-1 flex flex-col justify-center gap-6 group">
                        {/* top */}
                        <div className=" w-full flex justify-between items-center">
                           <div className="text-4xl font-extrabold text-stock-outline text-transparent group-hover:text-stock-outline-hover  ">{service.num}</div>
                           <Link href={service.url}
                            className=" w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                            >
                           <BsArrowDownRight className="text-primary font-extrabold text-xl" />
                           </Link>
                        </div>

                      
                        <h3 className={`${service.title.length > 32 ? "max-w-[200px]" : "max-w-[150px]"}`}>{service.title}</h3>
                        <p>{service.description}</p>
                     
                        <div className="border-b border-white/20 w-full" ></div>

                     </div>
                  );
               })}

            </motion.div>
         </div>
      </section>
   )
}


export default (Services)