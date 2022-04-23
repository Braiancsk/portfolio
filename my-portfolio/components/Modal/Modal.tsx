import React from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { motion } from "framer-motion";
import { modalTypes } from "./modalTypes.types";
import Image from 'next/image'
import ModalBg from "../ModalBg/ModalBg";

function Modal({ visible, closeModal }: modalTypes) {
  const variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <ModalBg visible={visible} closeModal={closeModal}>
      <motion.div
        transition={{ duration: 0.4, type: "tween" }}
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        exit={{scale: 0, opacity: 0  }}
        variants={variants}
        className="max-w-[800px] w-full bg-white p-5 relative z-50 rounded-lg shadow"
        >
        <div>
            <div className="flex justify-end">
                <AiOutlineCloseCircle className="text-2xl cursor-pointer" onClick={closeModal}/>
            </div>
            <div className="flex items-center md:items-start md:flex-row flex-col gap-5">
            <div>
            <strong className="block text-black/80 font-bold text-xl lg:text-2xl text-center">Vamos conversar?</strong>
            <p className="text-base text-black/80 text-center">Me chama no WhatsApp e faça um orçamento sem compromisso</p>
            <a title="Me chame no WhatsApp" className="flex justify-center my-5 w-max mx-auto transition hover:scale-110" href="https://wa.me/5562994901223/?text=Eu%20Gostaria%20de%20fazer%20um%20orçamento%20">
            <IoLogoWhatsapp className="text-green-500 text-3xl"/>
            </a>
            </div>
           
            <div>
              <strong className="block text-black/80 font-bold text-xl lg:text-2xl text-center">Plataformas</strong>
              <p className="text-base text-black/80 text-center">Você também pode me contratar pelas seguintes plataformas</p>

              <ul className="flex justify-center gap-5 mt-5">

              <li className="transition hover:scale-110 dark:hover:fill-primary icons">
              <a href="https://www.99freelas.com.br/user/Braian-Fellipe">
                  <Image src="/99freelas.png" width={30} height={30} alt="icone da empresa 99Freelas, com fundo azul e dois noves desenhados nele"/>
              </a>
                  </li>

                  <li className="transition hover:scale-110 dark:hover:fill-primary icons">
                      <a href="https://www.workana.com/freelancer/1e4b03478c2a79fc2ac42698f3aacd87">
                          <Image src="/workana.png" width={30} height={30} alt="icone da empresa 99Freelas, com fundo azul e dois noves desenhados nele"/>
                      </a>
                  </li>
              </ul>
            </div>

            </div>
          
            
         
        </div>
    </motion.div>
    </ModalBg>
  );
}

export default Modal;
