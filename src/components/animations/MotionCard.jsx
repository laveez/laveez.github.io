import { motion } from 'framer-motion';
import { Card, useTheme } from '@mui/material';
import { cardPop } from './variants.js';

const MotionCardBase = motion.create(Card);

/**
 * MUI Card with Framer Motion animations.
 * Subtle hover lift with faint glow, snappy transitions.
 */
const MotionCard = ({
  children,
  variant = 'outlined',
  disableHover = false,
  sx,
  ...props
}) => {
  const theme = useTheme();
  const glowColor = theme.palette.primary.main;

  // Subtle hover - lift + faint glow
  const hoverEffect = {
    y: -6,
    scale: 1.01,
    boxShadow: `0 8px 20px rgba(0,0,0,0.12), 0 0 12px ${glowColor}20`,
    transition: {
      duration: 0.15,
      ease: [ 0.25, 0.1, 0.25, 1 ],
    },
  };

  const tapEffect = {
    scale: 0.98,
    y: -2,
    transition: {
      duration: 0.08,
    },
  };

  return (
    <MotionCardBase
      variant={variant}
      variants={cardPop}
      whileHover={disableHover ? undefined : hoverEffect}
      whileTap={disableHover ? undefined : tapEffect}
      sx={{
        borderRadius: 2,
        transition: 'box-shadow 0.15s ease-out',
        ...sx,
      }}
      {...props}
    >
      {children}
    </MotionCardBase>
  );
};

export default MotionCard;
