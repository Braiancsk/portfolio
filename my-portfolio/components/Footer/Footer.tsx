import {BsInstagram, BsWhatsapp, BsLinkedin,BsGithub} from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="dark:bg-waves bg-light-bg p-7 relative">
        <div className="absolute top-[-150px] left-0 right-0 mx-auto pointer-events-none">
        <svg className="dark:fill-waves fill-light-bg" width="1920" height="302" viewBox="0 0 1920 302" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 90.5312H80C160 90.5312 320 90.5312 480 80.4722C640 70.4132 800 50.2951 960 70.4132C1120 90.5312 1280 150.885 1440 145.856C1600 140.826 1760 70.4132 1840 35.2066L1920 0V301.771H1840C1760 301.771 1600 301.771 1440 301.771C1280 301.771 1120 301.771 960 301.771C800 301.771 640 301.771 480 301.771C320 301.771 160 301.771 80 301.771H0L0 90.5312Z" fill="#32303B"/>
        </svg>
        </div>
       

        <section className="container flex flex-wrap md:justify-between justify-center relative z-[1]">
            <ul className="mx-auto md:mx-0 mb-10 md:mb-0">
                <li className="list-none text-lg font-bold dark:text-white text-light-text mb-5 transition duration-500">Links úteis</li>

                <li className="list-none text-lg dark:text-white text-light-text mt-3 transition duration-500">
                   <Link href="/">
                    <a>
                    Ínicio
                    </a>
                   </Link>
                </li>
                <li className="list-none text-lg dark:text-white text-light-text mt-3 transition duration-500">
                <Link href="/projetos">
                    <a>
                    Projetos
                    </a>
                </Link>
                </li>
                <li className="list-none text-lg dark:text-white text-light-text mt-3 transition duration-500">
                <Link href="/sobre">
                    <a>
                    Sobre
                    </a>
                </Link>
                </li>
                <li className="list-none text-lg dark:text-white text-light-text mt-3 transition duration-500">
                <Link href="/contato">
                    <a>
                    Contato
                    </a>
                </Link>
                </li>
            </ul>

            <ul className="mx-auto md:mx-0 mb-10 md:mb-0">
                <li className="list-none text-lg font-bold dark:text-white text-light-text mb-5 transition duration-500">Redes sociais</li>

                <li className="list-none text-lg dark:text-white text-light-text mt-3 flex items-center gap-3 transition duration-500">
                    <BsInstagram/>
                    <a href="https://www.instagram.com/braianfellipe/">
                    Instagram
                    </a>
                </li>
                <li className="list-none text-lg dark:text-white text-light-text mt-3 flex items-center gap-3 transition duration-500">
                    <BsWhatsapp/>
                    <a href="https://wa.me/5562994901223/?text=Ol%C3%A1%2C%20vim%20pelo%20o%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.">
                    Whatsapp
                    </a>
                </li>
                <li className="list-none text-lg dark:text-white text-light-text mt-3 flex items-center gap-3 transition duration-500">
                    <BsLinkedin/>
                    <a href="https://www.linkedin.com/in/braian-fellipe-gon%C3%A7alves-da-silva-549032217/">
                    Linkedin
                    </a>
                </li>
                <li className="list-none text-lg dark:text-white text-light-text mt-3 flex items-center gap-3 transition duration-500">
                    <BsGithub/>
                    <a href="https://github.com/Braiancsk">
                    Github
                    </a>
                </li>
            </ul>

            <Image src="/humans.png" width={400} height={310} alt="representação artistíca de duas pessoas sentadas e conversando pelo celular"/>
        </section>
        <p className="dark:text-white text-light-text font-bold container transition duration-500">© 2022 Braian Fellipe</p>
    </footer>
  )
}

export default Footer