import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition } from './variants.js';

/**
 * Wrapper for page/tab content transitions.
 * Uses AnimatePresence to animate content in and out.
 */
const PageTransition = ({ children, transitionKey, mode = 'wait' }) => {
  return (
    <AnimatePresence mode={mode}>
      <motion.div
        key={transitionKey}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
