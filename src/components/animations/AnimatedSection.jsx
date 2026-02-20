import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { fadeInUp } from './variants.js';

const MotionBox = motion.create(Box);

/**
 * Animated section wrapper with fade-in-up effect.
 * Use for wrapping entire content sections.
 */
const AnimatedSection = ({
  children,
  variants = fadeInUp,
  component = 'section',
  sx,
  delay = 0,
  ...props
}) => {
  const customVariants = delay > 0 ? {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...variants.visible.transition,
        delay,
      },
    },
  } : variants;

  return (
    <MotionBox
      component={component}
      variants={customVariants}
      initial="hidden"
      animate="visible"
      sx={sx}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedSection;
