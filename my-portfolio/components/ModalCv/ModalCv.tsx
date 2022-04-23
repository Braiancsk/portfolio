import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { modalTypes } from "./modalTypes.types";
import Backdrop from "../Backdrop/Backdrop";

function ModalCv({ visible, closeModal }: modalTypes) {
  const variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };
  return (
    <Backdrop visible={visible} closeModal={closeModal}>
      <motion.div
          transition={{ duration: 0.4, type: "tween" }}
          onClick={(e) => e.stopPropagation()}
          initial="hidden"
          animate="visible"
          exit={{ scale: 0, opacity: 0 }}
          variants={variants}
          className="max-w-[800px] w-full bg-white p-5 relative z-50 rounded-lg shadow"
        >
          <div>
            <div className="flex justify-end">
              <AiOutlineCloseCircle
                className="text-2xl cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="flex items-center md:items-start md:flex-row flex-col gap-5 justify-center mt-5">
       
             <a href="/cv-pdf.pdf" className="max-w-[300px] transition duration-500 p-3 w-full block text-center rounded-md font-bold text-sm md:text-xl dark:bg-primary dark:hover:bg-darker dark:text-black/80 dark:hover:text-white hover:bg-light-btn bg-light-btn-hover text-white">
             Baixar PDF
             </a>
           
              <a href="/cv-doc.doc" className="max-w-[300px] transition duration-500 p-3 w-full block text-center rounded-md font-bold text-sm md:text-xl dark:bg-primary dark:hover:bg-darker dark:text-black/80 dark:hover:text-white hover:bg-light-btn bg-light-btn-hover text-white">
             Baixar DOC
             </a>

            </div>
          </div>
        </motion.div>
    </Backdrop>
  );
}

export default ModalCv;
