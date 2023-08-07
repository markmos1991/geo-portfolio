"use client";
import {motion, AnimatePresence} from 'framer-motion';

export const IconHover = ({ children }) => (
    <>
   
   <motion.button
 whileHover={{ scale: 1.2 }}
 onHoverStart={e => {}}
 onHoverEnd={e => {}}
>
       
        {children}
        
    </motion.button>
   
    </>
)