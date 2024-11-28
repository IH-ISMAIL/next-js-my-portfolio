"use client";

import { motion } from "framer-motion";


const SetionTranstion = ({children}) => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }} // Adjust duration as needed
      >
        {children}
      </motion.div>
    );
};

export default SetionTranstion;