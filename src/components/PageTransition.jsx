"use client"

import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';


const PageTransition = ({ children }) => {
    const pathname = usePathname()
    return (
        <AnimatePresence mode='wait'>
            <div key={pathname}>

                <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
                      <Stairs/>
                </div>


                <motion.div
                 initial={{ opacity: 1}} 
                animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: easeInOut } }} 

                
                className='h-full w-full fixed top-0 left-0  bg-primary pointer-events-none flex' 
                />
                {children}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;