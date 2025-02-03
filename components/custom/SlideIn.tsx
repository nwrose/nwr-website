"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface SlideInProps {
  children: React.ReactNode;
  from?: "left" | "right" | "top" | "bottom";
  delay?: number;
}

const SlideIn: React.FC<SlideInProps> = ({ children, from = "left", delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  const variants = {
    hidden: {
      opacity: 0,
      x: from === "left" ? -50 : from === "right" ? 50 : 0,
      y: from === "top" ? -50 : from === "bottom" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
