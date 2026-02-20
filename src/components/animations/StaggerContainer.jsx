import { motion } from 'framer-motion';
import { staggerContainer, staggerContainerFast } from './variants.js';

/**
 * Container that staggers the entrance animation of its children.
 * Children should use AnimatedItem or have variants for hidden/visible states.
 */
const StaggerContainer = ({
  children,
  fast = false,
  className,
  style,
  component = 'div',
  ...props
}) => {
  const Component = motion[component] || motion.div;

  return (
    <Component
      variants={fast ? staggerContainerFast : staggerContainer}
      initial="hidden"
      animate="visible"
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

export default StaggerContainer;
