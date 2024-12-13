"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'
import SpotLightItem from "@/components/SpotLightItem";
import { sectionClassName } from "@/lib/utils";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { FaFigma, FaReact, FaShopify, FaSquarespace, FaWix, FaWordpress } from "react-icons/fa";





const Services = () => {


  

   const servicesContent = [
      {
         num: "01",
         url: "#",
         logo: <FaShopify className="text-primary font-extrabold text-7xl" />,
         title: "Shopify Design",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "03",
         url: "#",
         title: "Wix Design",
         logo: <FaWix className="text-primary font-extrabold text-7xl" />,
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "04",
         url: "#",
         logo: <FaSquarespace className="text-primary font-extrabold text-5xl" />,
         title: "Squarespace",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "05",
         url: "#",
         logo: <FaWordpress className="text-primary font-extrabold text-5xl" />,
         title: "Wordpress",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "06",
         url: "#",
         logo: <FaReact className="text-primary font-extrabold text-5xl" />,
         title: "Web Development",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      },
      {
         num: "07",
         url: "#",
         logo: <FaFigma  className="text-primary font-extrabold text-5xl" /> ,
         title: "Figma to HTML, CSS, JS",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit"
      }
   ]

   return (
      <section id={sectionClassName(usePathname)} >
         <div className="container mx-auto section-padding"  
data-aos="fade-up"
    data-aos-duration="1500"
                    
                    >

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
                  key={index}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.98 }}
                     transition={{ type: "spring", stiffness: 150, damping: 20 }}
                   data-aos="fade-left"
                   data-aos-duration="1000"

                  >

                     <SpotLightItem   spotLightCard="spotLightCard">
                        <div
                           className="service-item flex flex-col justify-center gap-6 group" 
                        >
                           <div className="w-full flex justify-center items-center">
                              <div className="text-4xl font-extrabold text-stock-outline text-transparent group-hover:text-stock-outline-hover">

                                 {/* {index > 10 ? "20" : `0${index + 1}`} */}
                              </div>
                              <Link
                                 href={service.url}
                                 className="w-[30px] h-[30px] xl:w-[100px] xl:h-[100px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                              >
                                 {/* < FaShopify className="text-primary font-extrabold text-4xl" /> */}
                                 {service.logo}
                              </Link>
                           </div>
                           <h3 className="text-4xl group-hover:text-accent">{service.title}</h3>
                           <div className="service-hover-full-description">
                              <SpotLightItem spotLightCard="spotLightCard">
                              <p>{service.description}</p>
                              </SpotLightItem>
                           </div>
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
