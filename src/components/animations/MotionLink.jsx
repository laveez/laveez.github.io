import { motion } from 'framer-motion';
import { Link } from '@mui/material';
import { hoverScale, staggerItem } from './variants.js';

const MotionLinkBase = motion.create(Link);

/**
 * MUI Link with Framer Motion animations.
 * Includes scale hover effect, useful for icon links.
 */
const MotionLink = ({
  children,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  sx,
  ...props
}) => {
  return (
    <MotionLinkBase
      href={href}
      target={target}
      rel={rel}
      variants={staggerItem}
      whileHover={hoverScale.hover}
      whileTap={hoverScale.tap}
      sx={{
        display: 'inline-flex',
        ...sx,
      }}
      {...props}
    >
      {children}
    </MotionLinkBase>
  );
};

export default MotionLink;
