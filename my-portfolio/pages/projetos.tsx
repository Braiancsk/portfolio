import { NextPage } from 'next'
import React, { useContext } from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'
import Projeto from '../components/Projeto/Projeto';
import { darkContext } from '../globalContext/darkModeContext';
import { projetoTypes } from '../components/Projeto/projeto.types';

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/projetos')
    const data = await response.json()
    return {
      props: {
        project:data
      }
    }
}


const Projetos: NextPage = ({project}:any) => {
const { darkMode } = useContext(darkContext);

  return (
    <main className={`transition duration-500 ${darkMode} ${darkMode === "dark" ? "bg-[#3A3845]" : "bg-white" }`}>
        <Navbar/>
    
        <section className="container py-[140px] px-2">
            <h1 className="transition duration-500 dark:text-white font-bold text-2xl md:text-3xl">Confira alguns dos meus projetos</h1>
            <div className="mt-20">
            {project.map((projeto: projetoTypes) => {
               return( <Projeto
                title={projeto.title}
                description={projeto.description}
                skills={projeto.skills.map(skill => skill)}
                url={projeto.url}
                image={projeto.image}
                />
               )
            })}
          
            </div>
        
        </section>   
        <Footer/>
    </main>
  )
}

export default Projetos

