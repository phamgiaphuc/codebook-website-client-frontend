import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type ChildrenProps = {
  children: React.ReactNode;
};

const PopUpMotion = ({ children }: ChildrenProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PopUpMotion;
