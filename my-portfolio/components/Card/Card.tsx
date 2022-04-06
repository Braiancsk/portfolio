import React, { ReactElement } from 'react'

type cardProps = {
    title: string
    description: string
    children: ReactElement
}
function Card({title, description, children}: cardProps) {
  return (
    <div className="transition duration-500 dark:bg-waves bg-[#61A4BC] relative rounded-md shadow p-7 max-w-[274px] w-full min-h-[183px]">

        <strong className="transition duration-500 text-white font-bold text-xl md:text-2xl pt-[15px]">
            {title}
        </strong>

        <p className="transition duration-500 text-white text-sm mt-[15px] max-w-[180px] w-full">{description}</p>

        <div className="flex items-center justify-center transition duration-500 absolute top-[-30px] left-[-30px] w-[70px] h-[70px] rounded-full dark:bg-waves bg-[#61A4BC]">
        {children}
        </div>

    </div>
  )
}

export default Card