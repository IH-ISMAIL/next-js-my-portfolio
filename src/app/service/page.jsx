'use client'

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion";
import { sectionClassName } from "@/lib/utils";


const Services = () => {

   const services = [
      {
         num: "01",
         title: "Shopify Design",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit cumque alias dolor impedit distinctio quasi molestias laudantium cum similique illo nostrum quae, voluptatibus accusamus asperiores dolores labore ?"
      },
      {
         num: "02",
         title: "Shopify Custom Liquid",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit cumque alias dolor impedit distinctio quasi molestias laudantium cum similique illo nostrum quae, voluptatibus accusamus asperiores dolores labore ?"
      },
      {
         num: "03",
         title: "Wix Design",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit cumque alias dolor impedit distinctio quasi molestias laudantium cum similique illo nostrum quae, voluptatibus accusamus asperiores dolores labore ?"
      },
      {
         num: "04",
         title: "Squarespace",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit cumque alias dolor impedit distinctio quasi molestias laudantium cum similique illo nostrum quae, voluptatibus accusamus asperiores dolores labore ?"
      },
      {
         num: "05",
         title: "Wordpress",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit cumque alias dolor impedit distinctio quasi molestias laudantium cum similique illo nostrum quae, voluptatibus accusamus asperiores dolores labore ?"
      },
      {
         num: "06",
         title: "PSD to HTML",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit cumque alias dolor impedit distinctio quasi molestias laudantium cum similique illo nostrum quae, voluptatibus accusamus asperiores dolores labore ?"
      },
      {
         num: "07",
         title: "Figma to HTML, CSS, JS",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit cumque alias dolor impedit distinctio quasi molestias laudantium cum similique illo nostrum quae, voluptatibus accusamus asperiores dolores labore ?"
      },
      {
         num: "08",
         title: "Build website with React, NextJS",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Possimus quibusdam reiciendis reprehenderit cumque alias dolor impedit distinctio quasi molestias laudantium cum similique illo nostrum quae, voluptatibus accusamus asperiores dolores labore ?"
      }
   ]

  


   return (
      <section className={`${sectionClassName(usePathname)} `}>
         <div className="container mx-auto">
            <motion.div
             initial = {{opacity: 0}}
             animate = {{
               opacity: 1,
               transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
             }}
            >

               {services.map((service, index)=> {
                  
               })}

            </motion.div>
         </div>
      </section>
   )
}


export default (Services)