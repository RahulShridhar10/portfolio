import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  showRing?: boolean;
}

export function CustomCursor({ showRing = true }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Update mouse position on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is over clickable element
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Add click animation
  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-4 h-4 bg-primary rounded-full pointer-events-none"
        style={{
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isClicking ? 0.6 : 1,
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cursor ring */}
      {showRing && (
        <motion.div
          className="fixed top-0 left-0 z-[9998] w-8 h-8 border-2 border-primary rounded-full pointer-events-none"
          style={{
            mixBlendMode: "difference",
          }}
          animate={{
            scale: isPointer ? 1.5 : isClicking ? 0.8 : 1,
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 25,
          }}
        />
      )}
    </>
  );
}
