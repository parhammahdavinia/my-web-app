import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { HiGlobe } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = () => {
  const { language, changeLanguage, t } = useLanguage();

  const handleLanguageChange = () => {
    const newLanguage = language === "fa" ? "en" : "fa";
    changeLanguage(newLanguage);
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
      rotateX: 90,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      rotateX: -90,
      transition: {
        duration: 0.2,
      },
    },
  };

  const globeVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.button
      onClick={handleLanguageChange}
      className="flex items-center gap-2 px-3 py-2 rounded-lg  text-white hover:bg-white/20 transition-all duration-300  hover:border-blue-400/50"
      title={t("language")}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        variants={globeVariants}
        animate="animate"
        className="text-lg"
      >
        <HiGlobe />
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.span
          key={language}
          className="font-medium min-w-[1.5rem] text-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {language === "fa" ? "EN" : "فا"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default LanguageSwitcher;
