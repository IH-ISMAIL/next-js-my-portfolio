"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import SpotLightItem from "@/components/SpotLightItem";
import { sectionClassName } from "@/lib/utils";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";


const Services = () => {

   const servicesContent = [
      {
         num: "01",
         url: "#",
         title: "Shopify Design",
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
      }
   ]

   return (
      <section className={sectionClassName(usePathname)}>
         <div className="container mx-auto section-padding">

           <SectionTitle title={"Our"} colorText={"Services"} />

            <motion.div
               initial={{ opacity: 0 }}
               animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" }
               }}
               className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
               {servicesContent.map((service, index) => (
                  <motion.div

                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  
                  >

                     <SpotLightItem key={index}>
                        <div
                           className="service-item flex flex-col justify-center gap-6 group"
                        >
                           <div className="w-full flex justify-between items-center">
                              <div className="text-4xl font-extrabold text-stock-outline text-transparent group-hover:text-stock-outline-hover">
                                
                              {index > 10 ? "20" : `0${index + 1}`}
                              </div>
                              <Link
                                 href={service.url}
                                 className="w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                              >
                                 <BsArrowDownRight className="text-primary font-extrabold text-xl" />
                              </Link>
                           </div>
                           <h3 className="h3 group-hover:text-accent">{service.title}</h3>
                           <p>{service.description}</p>
                        </div>
                     </SpotLightItem>

                  </motion.div>

               ))}
            </motion.div>
         </div>
      </section>
   );
};

export default Services;
