import Image from 'next/image'
import React from 'react'

type cardProps ={
    link:string
    text:string
    image:string
}
function LinkCard({link, text, image}:cardProps) {
  return (
    <a className="text-white shadow text-2xl relative after:transition after:duration-500 hover:after:opacity-0 after:dark:bg-[#826F66]/80 after:bg-light-text/80 after:absolute after:w-full after:h-full after:rounded-md transition duration-500 flex items-center justify-center max-w-[345px] w-full min-h-[200px] rounded-md" href={link}>
       <div className="absolute top-0 w-full h-full rounded-md">
       <Image className="rounded-md object-cover" src={image} width={345} height={200} alt="Projeto do autor mostrado em um card"/>
       </div>
      
        <span className="relative z-[2]">{text}</span>
    </a>
  )
}

export default LinkCard