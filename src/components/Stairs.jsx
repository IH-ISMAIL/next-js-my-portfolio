"use client";

import { motion } from "framer-motion";

// variable 
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// reverseIndex calculator fx
const reverseCalculate = (index) => {
    const totalStairs = 6;
    return totalStairs - index - 1;
};

const Stairs = () => {
    return (
        <>
            {
                [...Array(6)].map((_, index) => (  // Fix the map syntax
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseCalculate(index) * 0.1,
                        }}
                        className="h-full w-full relative bg-white"
                    />
                ))
            }
        </>
    );
};

export default Stairs;
