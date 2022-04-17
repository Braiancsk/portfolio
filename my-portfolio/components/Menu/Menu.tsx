import { useContext } from "react";
import { menuContext } from "../../globalContext/menuContext";
import {TiHome} from 'react-icons/ti'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {FaLightbulb, FaBookReader} from 'react-icons/fa'
import { useRouter } from "next/router";
import Link from 'next/link'
import { MdConnectWithoutContact, MdLightMode, MdNightlight } from 'react-icons/md';
import { darkContext } from "../../globalContext/darkModeContext";

function Menu() {
    const { asPath } = useRouter();
    const {darkMode, setDarkMode} = useContext(darkContext)
    const {menu, setMenu} = useContext(menuContext)
    const handleMenu = () =>{
      setMenu(!menu)
      if(menu){
        document.body.style.overflow = 'hidden'
      }
    }

    const handleDarkMode = () =>{
        if(darkMode === 'dark'){
          setDarkMode('light')
          localStorage.setItem('darkMode', 'light')
        }else{
          setDarkMode('dark')
          localStorage.setItem('darkMode', 'dark')
        }
      
      }

  return (
      <>
    <aside className={`transition duration-500 dark:bg-[#292731] bg-white min-h-screen w-[80%] z-40 fixed ${menu ? 'translate-x-0' : 'translate-x-[-200%]'}`}>
    <ul className="flex flex-col gap-5 w-full p-8">

    <li className="flex items-center relative max-w-[130px] w-full justify-between">
    <Link href="/">
    <a className="transition duration-500 text-lg text-center dark:text-white text-light-text">Ínicio</a>
    </Link>
    <TiHome className={`transition duration-500 font-bold text-2xl ${asPath === '/' ? 'dark:text-primary text-light-btn-hover' : 'dark:text-white text-light-text'}`}/>
    </li>

    <li className="flex items-center relative max-w-[130px] w-full justify-between">
    <Link href="/projetos">
    <a className="transition duration-500 text-lg text-center dark:text-white text-light-text">Projetos</a>
    </Link>
    <FaLightbulb className={`transition  duration-500 font-bold text-2xl ${asPath === '/projetos' ? 'dark:text-primary text-light-btn-hover' : 'dark:text-white text-light-text'}`}/>
    </li>

    <li className="flex items-center relative max-w-[130px] w-full justify-between">
    <Link href="/sobre">
    <a className="transition duration-500 text-lg text-center dark:text-white text-light-text">Sobre</a>
    </Link>
    <FaBookReader className={`transition duration-500 font-bold text-2xl ${asPath === '/sobre' ? 'dark:text-primary text-light-btn-hover' : 'dark:text-white text-light-text'}`}/>
    </li>

    <li className="flex items-center relative max-w-[130px] w-full justify-between">
    <Link href="/contato">
    <a className="transition duration-500 text-lg text-center dark:text-white text-light-text">Contato</a>
    </Link>
    <MdConnectWithoutContact className={`transition duration-500 font-bold text-2xl ${asPath === '/contato' ? 'dark:text-primary text-light-btn-hover' : 'dark:text-white text-light-text'}`}/>
    </li>

    <li className="flex items-center relative max-w-[130px] w-full justify-between">
    <button title="Mudar cor entre modo claro e escuro" className="xl:fixed top-[30px] right-[85px]" onClick={handleDarkMode}>
        {darkMode === 'dark' 
        ? 
        <MdLightMode className="text-3xl dark:text-primary text-light-text"/>
        : 
        <MdNightlight className="text-3xl dark:text-primary text-light-text"/>
        }
        
      </button>
    </li>

    </ul>

    </aside>

     <aside className="rounded-md fixed bottom-[20px] z-50 left-0 right-0 mx-auto max-w-[90%] w-full transition duration-500 dark:bg-[#0A121E] bg-light-bg py-3 px-5 xl:hidden overflow-x-scroll">
     <ul className="flex justify-center gap-5">

       <li className="flex flex-col items-center relative">
       <span className={`${asPath === '/' ? 'after:transition after:duration-500 after:w-[30px] after:h-[30px] after:absolute after:top-[-35px] after:rounded-md after:left-[15%] dark:after:bg-primary after:bg-light-text' : 'after:bg-transparent'}`}></span>
       <TiHome className="transition duration-500 dark:text-white font-bold text-2xl"/>
         <Link href="/">
           <a className="transition duration-500 dark:text-white text-lg text-center">Ínicio</a>
         </Link>
       </li>

       <li className="flex flex-col items-center relative">
       <span className={`${asPath === '/projetos' ? 'after:transition after:duration-500 after:w-[30px] after:h-[30px] after:absolute after:top-[-35px] after:rounded-md after:left-[25%] dark:after:bg-primary after:bg-light-text' : 'after:bg-transparent'}`}></span>
       <FaLightbulb className="transition duration-500 dark:text-white font-bold text-2xl"/>
         <Link href="/projetos">
           <a className="transition duration-500 dark:text-white text-lg text-center">Projetos</a>
         </Link>
       </li>

       <li className="flex flex-col items-center relative">
       <span className={`${asPath === '/sobre' ? 'after:transition after:duration-500 after:w-[30px] after:h-[30px] after:absolute after:top-[-35px] after:rounded-md after:left-[15%] dark:after:bg-primary after:bg-light-text' : 'after:bg-transparent'}`}></span>
       <FaBookReader className="transition duration-500 dark:text-white font-bold text-2xl"/>
         <Link href="/sobre">
           <a className="transition duration-500 dark:text-white text-lg text-center">Sobre</a>
         </Link>
       </li>

       <li className="flex flex-col items-center relative">
       <span className={`${asPath === '/contato' ? 'after:transition after:duration-500 after:w-[30px] after:h-[30px] after:absolute after:top-[-35px] after:rounded-md after:left-[23%] dark:after:bg-primary after:bg-light-text' : 'after:bg-transparent'}`}></span>
       <MdConnectWithoutContact className="transition duration-500 dark:text-white font-bold text-2xl"/>
         <Link href="/contato">
           <a className="transition duration-500 dark:text-white text-lg text-center">Contato</a>
         </Link>
       </li>

       <li onClick={handleMenu} className="flex flex-col items-center">
       <HiOutlineMenuAlt3 className="transition duration-500 dark:text-white font-bold text-2xl"/>
           <button className="transition duration-500 dark:text-white text-lg text-center">Menu</button>
       </li>
     </ul>
   </aside>
   </>
  )
}

export default Menu