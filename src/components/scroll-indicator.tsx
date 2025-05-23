import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollIndicator() {
  const [showIndicator, setShowIndicator] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show indicator after scrolling a bit
      if (window.scrollY > 100) {
        setShowIndicator(true);
      } else {
        setShowIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
      style={{ scaleX }}
      initial={{ opacity: 0 }}
      animate={{ opacity: showIndicator ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
