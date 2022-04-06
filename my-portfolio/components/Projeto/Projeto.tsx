import React from 'react'
import Image from 'next/image'
import { projetoTypes } from './projeto.types'


function Projeto({title, description, skills, url, image}:projetoTypes) {
  return (
    <article className="container flex md:flex-row flex-col-reverse py-5">
        <div className="w-full text-center md:text-left md:max-w-[500px]">
            <strong className="transition duration-500 dark:text-white font-bold text-lg md:text-2xl block md:mt-0 mt-5">{title}</strong>

            <div className="mb-8 mt-5">
            <p className="transition duration-500 dark:text-white text-sm max-w-[379px] mb-2 md:mx-0 mx-auto">{description}</p>
            
            <div className="flex gap-3 mt-5">
                {skills.map(skill => {
                   return(
                    <span className="transition duration-500 dark:text-[#826F66] text-[#61A4BC] text-sm block md:mx-0 mx-auto">{skill}</span>
                   ) 
                })}
            </div>

            </div>
        
            <div className="md:max-w-[273px]">
            <a
            href={url}
            className="transition p-3 w-full border-0 dark:bg-primary hover:dark:bg-darker hover:bg-light-btn bg-light-btn-hover  dark:text-black/80 dark:hover:text-white text-white text-center rounded-md font-bold block">
            Ver projeto
            </a>
            </div>
            
        </div>

        <div className="transition duration-500 shadow dark:bg-waves bg-light-bg rounded-md p-4 flex items-center justify-center md:justify-end min-h-[364px] md:max-w-[580px] w-full mx-auto">
            <Image className="object-cover" src={image} width={402} height={280} alt="Representação de print do projeto" />
        </div>
    </article>
  )
}

export default Projeto