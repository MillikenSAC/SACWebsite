// Transition.js
import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    opacity: 0,
    x: 100, // or -100 for entering from left
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100, // or 100 for exiting to right
  },
};

const Transition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={transitionVariants}
      transition={{ duration: 0.5 }} // adjust duration as needed
    >
      {children}
    </motion.div>
  );
};

export default Transition;
