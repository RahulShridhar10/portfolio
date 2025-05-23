import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" | "none" = "up",
  delay: number = 0
): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
      },
    },
  };
};

// Stagger children animation
export const staggerContainer = (staggerChildren: number = 0.1): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
      },
    },
  };
};

// Scale animation
export const scaleIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
      },
    },
  };
};

// Slide in animation
export const slideIn = (
  direction: "up" | "down" | "left" | "right",
  type: "tween" | "spring",
  delay: number = 0,
  duration: number = 0.5
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

// Text animation for headings
export const textVariant = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
};

// Animation for cards
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.2,
    }
  }
};

// Scroll reveal animation
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.2,
    },
  },
};
