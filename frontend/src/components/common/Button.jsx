import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  className = "",
  disabled = false,
  isLoading = false,
  ...props
}) => {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 transform";

  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 border-2 border-transparent",
    secondary:
      "border-2 text-white hover:text-black hover:bg-blue-100 border-white/20 hover:border-blue-400/50",
    outline:
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3",
    large: "px-8 py-4 text-lg",
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
    disabled: {
      opacity: 0.7,
      cursor: "not-allowed",
    },
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${
        sizes[size]
      } ${className} ${disabled ? "opacity-70 cursor-not-allowed" : ""}`}
      whileHover={!disabled && "hover"}
      whileTap={!disabled && "tap"}
      variants={buttonVariants}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {isLoading ? (
          <motion.div
            className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          children
        )}
      </div>
    </motion.button>
  );
};

export default Button;
