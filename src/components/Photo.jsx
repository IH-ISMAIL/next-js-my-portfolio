"use client"
import Image from "next/image";
import ismail from "../assets/ismail/ismail hossain.png"
import { motion } from "framer-motion";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.3, ease: "easeIn" }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.3, ease: "easeInOut" }}
                    className="w-[318px] h-[318px] xl:w-[518px] xl:h-[518px]"
                >
                    <Image
                        src={ismail}
                        priority
                        quality={100}
                        fill
                        className="object-contain"
                        alt="ismail hossain IH RAJU"
                    />

                    {/* Animated Circles */}
                    <motion.svg
                        className="w-[320px] h-[320px] xl:w-[520px] xl:h-[520px] absolute"
                        fill="transparent"
                        viewBox="0 0 506 506"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="253"
                            cy="253"
                            r="253"
                            stroke="#00FF99"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "0 1570" }}
                            animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        />
                    </motion.svg>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Photo;