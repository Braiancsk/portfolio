import { NextPage, GetServerSideProps } from 'next'
import React, { useContext } from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'
import Projeto from '../components/Projeto/Projeto';
import { darkContext } from '../globalContext/darkModeContext';
import { projetoTypes } from '../components/Projeto/projeto.types';
import Menu from '../components/Menu/Menu';
import { menuContext } from '../globalContext/menuContext';
import Head from 'next/head';

export const getServerSideProps:GetServerSideProps = async (context) => {
    const url = context.req.headers.host
    console.log(url)
    const response = await fetch(`http://${url}/api/projetos`)
    const data = await response.json()
    return {
      props: {
        project:data
      }
    }
}


const Projetos: NextPage = ({project}:any) => {
const { darkMode } = useContext(darkContext);
const { menu, setMenu } = useContext(menuContext);

const handleMenu = () =>{
  setMenu(false)
}


  return (
    <section className={`transition relative duration-500 ${darkMode} ${
      darkMode === "dark" ? "bg-waves" : "bg-white"
    }`}>
     <Head>
        <title>Fellipedev | Projetos</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Menu/>
    <main onClick={handleMenu} className={`transition duration-500 ${darkMode} ${darkMode === "dark" ? "bg-[#3A3845]" : "bg-white" } ${menu ? "scale-75 translate-x-[70%] translate-y-[-11%] rounded-md" : ""}`}>
        <Navbar/>
    
        <section className="container pb-[150px] pt-[80px] px-5">
            <h1 className="transition duration-500 dark:text-white font-bold text-2xl md:text-3xl lg:text-left text-center">Confira alguns dos meus projetos</h1>
            <div className="mt-20">
            {project.map((projeto: projetoTypes) => {
               return( <Projeto
                key={projeto.title}
                title={projeto.title}
                description={projeto.description}
                skills={projeto.skills}
                url={projeto.url}
                image={projeto.image}
                />
               )
            })}
          
            </div>
        
        </section>   
        <Footer/>
    </main>
    </section>
  )
}

export default Projetos

