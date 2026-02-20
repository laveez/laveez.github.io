/**
 * Shared Framer Motion animation variants
 * Modern, snappy animations - prefer quick over sluggish
 */

// Snappy easing curves
const snappy = [ 0.25, 0.1, 0.25, 1 ];
const bouncy = [ 0.34, 1.56, 0.64, 1 ];
const smooth = [ 0.4, 0, 0.2, 1 ];

// Fade in while sliding up
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: snappy,
    },
  },
};

// Fade in while scaling up slightly
export const fadeInScale = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: bouncy,
    },
  },
};

// Fade in from left
export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: snappy,
    },
  },
};

// Fade in from right
export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: snappy,
    },
  },
};

// Container that staggers its children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Fast stagger for many items
export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.02,
    },
  },
};

// Item within a stagger container
export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: snappy,
    },
  },
};

// Hover lift effect - subtle and snappy
export const hoverLift = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -6,
    scale: 1.01,
    transition: {
      duration: 0.15,
      ease: snappy,
    },
  },
  tap: {
    scale: 0.98,
    y: -2,
    transition: {
      duration: 0.08,
    },
  },
};

// Subtle hover for icons/links - no rotate, cleaner
export const hoverScale = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.15,
    transition: {
      duration: 0.15,
      ease: snappy,
    },
  },
  tap: {
    scale: 0.92,
    transition: {
      duration: 0.08,
    },
  },
};

// Icon button hover - snappy
export const hoverButton = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.08,
    transition: {
      duration: 0.12,
      ease: snappy,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.08,
    },
  },
};

// Page/tab transition - quick and clean
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: snappy,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.15,
      ease: smooth,
    },
  },
};

// Profile avatar - bouncy entrance
export const avatarReveal = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: bouncy,
    },
  },
};

// Text reveal with blur - crisp
export const textReveal = {
  hidden: {
    opacity: 0,
    y: 6,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.3,
      ease: snappy,
    },
  },
};

// Menu item animation
export const menuItem = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.15,
      ease: snappy,
    },
  },
};

// Card entrance with pop
export const cardPop = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 16,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: bouncy,
    },
  },
};
