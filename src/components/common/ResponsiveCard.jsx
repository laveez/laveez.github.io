import { motion } from 'framer-motion';
import { Card, useMediaQuery, useTheme } from '@mui/material';
import { staggerItem } from '../animations/variants.js';

const MotionCard = motion.create(Card);

const ResponsiveCard = ({ variant = 'outlined', children, ...props }) => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const theme = useTheme();
  const glowColor = theme.palette.primary.main;

  const baseStyles = {
    display: 'flex',
    width: '100%',
    borderRadius: 2,
    transition: 'box-shadow 0.15s ease-out',
  };

  const responsiveStyles = isLargeScreen ? {} : {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

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
    <MotionCard
      variant={variant}
      className="responsive-card"
      variants={staggerItem}
      whileHover={hoverEffect}
      whileTap={tapEffect}
      sx={{
        ...baseStyles,
        ...responsiveStyles,
      }}
      {...props}
    >
      {children}
    </MotionCard>
  );
};

export default ResponsiveCard;
