import { NextPage } from 'next';
import React, { useContext, useState } from 'react'
import { darkContext } from '../globalContext/darkModeContext';
import Image from 'next/image'
import Head from 'next/head';
import Menu from '../components/Menu/Menu';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { menuContext } from '../globalContext/menuContext';
import Link from 'next/link';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import { AnimatePresence } from "framer-motion"


const Sobre: NextPage = () => {

  const { menu, setMenu } = useContext(menuContext);

  const handleMenu = () =>{
    setMenu(false)
  }

  //modal para contato
  const [isVisible, setIsVisible] = useState(false)
  const handleOpenModal = () =>{
    setIsVisible(true)
  }
  const handleCloseModal = () =>{

    setIsVisible(false)
    console.log(isVisible)
  }

const { darkMode } = useContext(darkContext);
  return (
    <section className={`transition relative duration-500 ${darkMode} ${
      darkMode === "dark" ? "bg-waves" : "bg-white"
    }`}>
     <Head>
        <title>Fellipedev | Sobre</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence initial={false}>
      {isVisible && 

      <Modal
      isContatct={true}
      closeModal={handleCloseModal}
      visible={isVisible}
      />

      }

      </AnimatePresence>
 
    

    
    <Menu/>
    <main  onClick={handleMenu} className={`transition duration-500 ${darkMode} ${darkMode === "dark" ? "bg-[#3A3845]" : "bg-white" } ${menu ? "scale-75 translate-x-[70%] translate-y-[-11%] rounded-md" : ""}`}>
        <Navbar/>
    
        <section className="pb-[150px] pt-[80px] container px-5 transition duration-500 relative z-10">
          <h1 className="transition duration-500 dark:text-primary text-light-btn-hover font-bold text-2xl md:text-3xl lg:text-left text-center">Um pouco sobre mim</h1>
            
            <p className="transition duration-500 dark:text-white text-light-text text-sm md:text-base mt-10 mb-5 max-w-[770px]">Olá, me chamo Braian Fellipe, tenho 24 anos e resido em Anápolis, Goiás. Amo tecnologia e passo a maior parte do meu tempo atendendo demandas como Freelancer em plataformas como <a className="transition duration-500 dark:text-primary text-light-btn-hover" href="https://www.99freelas.com.br/user/Braian-Fellipe">99Freelas</a> e <a className="transition duration-500 dark:text-primary text-light-btn-hover" href="https://www.workana.com/freelancer/1e4b03478c2a79fc2ac42698f3aacd87">Workana</a>.</p>
           
            <p className="transition duration-500 dark:text-white text-light-text text-sm md:text-base mb-5 max-w-[770px]">Estudo programação há 1 ano e gosto sempre de aprender algo novo todo dia. Sempre me desafiando com projetos cada vez mais complexos, sempre colocando meu melhor em cada um deles.</p>

            <div className="flex gap-10 flex-col md:flex-row items-center md:items-start">
              <Image className="object-contain" src="/about-me.png" width={258} height={334} alt="foto do autor"/>

              <div className="max-w-[485px]">
              <p className="transition duration-500 dark:text-white text-light-text text-sm md:text-base mb-5">Meus conhecimentos vão desde de HTML, CSS e JavaScript, até tecnologias como <span className="transition duration-500 dark:text-primary text-light-btn-hover">Reactjs, Nextjs, TailwindCSS  e Bootstrap 5</span></p>
              <p className="transition duration-500 dark:text-white text-light-text text-sm md:text-base mb-5">Hoje estou focado no desenvolvimento Front-End de aplicações e websites. Focando sempre em escrever um código limpo, otimizado e que todos consigam usar.</p>
              <Link href="/projetos"><a className="transition duration-500 dark:text-primary text-light-btn-hover mb-5 block">Confira alguns sites em que já trabalhei </a></Link>
              <p className="transition duration-500 dark:text-white text-light-text text-sm md:text-base mb-5">Tenho experiência em trabalhar com APIs rest e em desenvolver interfaces a partir de designs e até mesmo fotos.</p>
              <p className="transition duration-500 dark:text-white text-light-text text-sm md:text-base mb-5">Com um olhar crítico para detalhes, penso sempre na experiência do usuário com a aplicação, questionando sempre se algo é necessário ou se faz algum sentido estar mesmo alí.</p>

              <div className="md:max-w-[300px]">
              <Button
              isLink={false}
              outlined={false}
              border={true}
              url="/contato"
              text="Me contrate agora"
              onClick={handleOpenModal}
              />
              </div>
              
              </div>
            </div>
          
        </section>   

        <section className="container px-5 relative">
          <h2 className="transition duration-500 dark:text-white text-light-text font-bold text-2xl md:text-3xl text-center pb-[80px] z-10 relative">Confira alguns dos meus projetos</h2>

          <div className="flex justify-center items-center gap-10 flex-col md:flex-row pb-[150px]">
            <a href="https://www.rankingdetenis.com/federacao-fbt">
            <Image src="/mobile-mockup-1.png" width={300} height={576} alt="projeto sendo mostrado em um smartphone"/>
            </a>
            <a href="https://hogai.vercel.app/">
            <Image src="/mobile-mockup-2.png" width={300} height={576} alt="projeto sendo mostrado em um smartphone"/>
            </a>
            <a href="https://ultronflix.vercel.app/">
            <Image src="/mobile-mockup-3.png" width={300} height={576} alt="projeto sendo mostrado em um smartphone"/>
            </a>
          </div>
 

        </section>
        <Footer/>
    </main>
    </section>
  )
}

export default Sobre