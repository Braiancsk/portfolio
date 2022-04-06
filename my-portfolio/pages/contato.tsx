import { NextPage } from 'next';
import React, { useContext } from 'react'
import { darkContext } from '../globalContext/darkModeContext';
import Image from 'next/image'
import Link from 'next/link';
const Contato: NextPage = () => {
const { darkMode } = useContext(darkContext);
  return (
    <main className={`transition duration-500 ${darkMode} ${darkMode === "dark" ? "bg-[#dccbba]" : "#dccbba" }`}>
        <section className="flex flex-col items-center justify-center min-h-screen p-3">
        <h1 className="font-bold text-2xl md:text-3xl text-center text-waves">Essa página ainda está em construção!.</h1>
        <Image src="/gif.gif" width={300} height={300} alt="gif animado" />
        <Link href="/">
            <a className="text-white bg-waves p-2 md:max-w-[273px] w-full block text-center font-bold text-2xl rounded-md hover:scale-105 transition">Voltar ao ínicio</a>
        </Link>
        </section>
    </main>
  )
}

export default Contato