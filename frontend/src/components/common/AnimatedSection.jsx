import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const variantsList = [
  {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
  {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  },
  {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },
  {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.8 } },
  },
];

const AnimatedSection = ({ children, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const variants = variantsList[index % variantsList.length];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
