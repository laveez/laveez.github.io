import { motion } from 'framer-motion';
import { staggerItem } from './variants.js';

/**
 * Individual item that animates within a StaggerContainer.
 * Uses the staggerItem variant by default.
 */
const AnimatedItem = ({
  children,
  variants = staggerItem,
  className,
  style,
  ...props
}) => {
  return (
    <motion.div
      variants={variants}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
