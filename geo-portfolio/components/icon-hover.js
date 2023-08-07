"use client";
import {motion, AnimatePresence} from 'framer-motion';

export const IconHover = ({ children }) => (
    <>
   
   <motion.button
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
>
       
        {children}
        
    </motion.button>
   
    </>
)