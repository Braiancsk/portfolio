import React from "react";
import { modalBgProps } from "./backdropTypes.types";
import { motion } from "framer-motion";

function Backdrop({ closeModal, children, visible }: modalBgProps) {
  const variants = {
    hidden: {scale: 0, opacity: 0 },
    visible: {scale: 1, opacity: 1 },
  };

  return (
    <motion.section
    transition={{ duration: 0.2, type: "tween" }}
    initial="hidden"
    animate="visible"
    exit={{scale: 0, opacity: 0  }}
      variants={variants}
      onClick={closeModal}
      className="bg-black/50 w-full min-h-screen fixed top-0 left-0 right-0 mx-auto z-20 flex justify-center items-center px-5"
    >
      {children}
    </motion.section>
  );
}

export default Backdrop;
