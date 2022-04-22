import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import Text from "../components/Subtitle/Text";
import { darkContext } from "../globalContext/darkModeContext";
// Import Swiper React components
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";
import { CgArrowTopRightR } from "react-icons/cg";
import Card from "../components/Card/Card";
import LinkCard from "../components/LinkCard/LinkCard";
import Footer from "../components/Footer/Footer";
import { menuContext } from "../globalContext/menuContext";
import Menu from "../components/Menu/Menu";
import { AnimatePresence } from "framer-motion"
import Modal from '../components/Modal/Modal';

const Home: NextPage = () => {
  const { darkMode } = useContext(darkContext);
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


  return (
    <div className={`transition relative duration-500 ${darkMode} ${
      darkMode === "dark" ? "bg-[#3A3845]" : "bg-white"
    }`}>

    <Menu/>

    
    <AnimatePresence initial={false}>
      {isVisible && 

      <Modal
      closeModal={handleCloseModal}
      visible={isVisible}
      />

      }

      </AnimatePresence>

    <main
      onClick={handleMenu}
      className={`transition relative duration-500 ${darkMode} ${
        darkMode === "dark" ? "bg-[#3A3845]" : "bg-white"
      }
      ${menu ? "scale-75 translate-x-[70%] translate-y-[-11%] rounded-md" : ""} 
      `
    }
    >
      <Head>
        <title>Fellipedev | Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="transition duration-500 dark:bg-waves bg-light-bg rounded-br-[600px] max-w-[800px] w-full md:min-h-[1024px] min-h-[690px] absolute top-0 left-0"></div>
      <section className="container px-5 z-10 relative">
      <Navbar />

        <header className="md:mt-[200px] mt-8 max-w-[540px] w-full">
          <h1 className="dark:text-white text-black/80 text-2xl md:text-3xl transition duration-500">
            - Olá, eu sou o{" "}
            <b className="dark:text-primary text-light-text text-2xl md:text-3xl transition duration-500">Braian</b>
            ,{" "}
            <b className="dark:text-primary text-light-text text-2xl md:text-3xl transition duration-500">
              desenvolvedor web
            </b>{" "}
            e{" "}
            <b className="dark:text-primary text-light-text text-2xl md:text-3xl transition duration-500">
              Freelancer
            </b>
          </h1>
          <p className="my-[30px] text-sm font-bold dark:text-white text-black/80 max-w-[370px] w-full transition duration-500">
            Atuo como desenvolvedor Front-End, desenvolvendo interfaces de
            qualidade
          </p>

          <div className="flex gap-8 items-center">
            <Button
              isLink={false}
              outlined={false}
              border={true}
              text="Download CV"
              onClick={() => console.log("Baixar CV")}
            />
            <Button
              isLink={false}
              outlined={true}
              border={true}
              url="/contato"
              text="Me contrate agora"
              onClick={handleOpenModal}
            />
          </div>

          <div className="flex flex-col items-center w-max gap-8 slide-top pointer-events-none">
            <span className="scroll dark:text-white text-light-text transition duration-500">
              Scroll
            </span>
            <svg
              className="pulse"
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition duration-500 dark:fill-white fill-light-text"
                d="M6.98486 9.74365L0.344238 3.10303C-0.114746 2.64404 -0.114746 1.90186 0.344238 1.44775L1.44775 0.344238C1.90674 -0.114746 2.64893 -0.114746 3.10303 0.344238L7.81006 5.05127L12.5171 0.344238C12.9761 -0.114746 13.7183 -0.114746 14.1724 0.344238L15.2856 1.44287C15.7446 1.90186 15.7446 2.64404 15.2856 3.09814L8.64502 9.73877C8.18604 10.2026 7.44385 10.2026 6.98486 9.74365ZM8.64502 19.1187L15.2856 12.478C15.7446 12.019 15.7446 11.2769 15.2856 10.8228L14.1821 9.71924C13.7231 9.26025 12.981 9.26025 12.5269 9.71924L7.81494 14.4214L3.10791 9.71435C2.64893 9.25537 1.90674 9.25537 1.45264 9.71435L0.344238 10.8179C-0.114746 11.2769 -0.114746 12.019 0.344238 12.4731L6.98486 19.1138C7.44385 19.5776 8.18604 19.5776 8.64502 19.1187Z"
                fill="#FDFDFD"
              />
            </svg>
          </div>
        </header>
      </section>

      <section className="transition duration-500 relative py-10 dark:bg-waves bg-light-bg">
        <svg
          className="absolute xl:top-[-45%] md:top-[-50%] top-[-70%] max-w-full left-0 right-0"
          width="1920"
          height="1784"
          viewBox="0 0 1920 1784"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="transition duration-500 dark:fill-waves fill-light-bg"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M928.971 242.567C1219.01 198.16 1505.56 -114.152 1752.28 44.6688C1996.03 201.574 1903.03 578.106 1900.52 867.978C1898.05 1153.95 1955.93 1491.79 1738.15 1677.15C1524.57 1858.93 1199.71 1768.11 928.971 1694.89C731.887 1641.59 616.519 1468.71 464.304 1332.64C295.313 1181.58 33.3438 1092.73 3.91777 867.978C-26.8662 632.858 127.853 396.116 324.297 263.304C497.983 145.879 721.73 274.297 928.971 242.567Z"
            fill="#32303B"
          />
        </svg>

        <div className="container px-4 flex flex-col items-center z-1 relative">
          <Text
            text="Seu site com as melhores tecnologias do mercado"
            size="16"
          />

          <h2 className="text-center dark:text-white text-black/80 text-3xl transition duration-500 max-w-[480px] mx-auto mt-3">
            Eu crio seus websites{" "}
            <b className="transition duration-500 dark:text-primary text-light-text text-2xl md:text-3xl">
              otimizados
            </b>
            ,{" "}
            <b className="transition duration-500 dark:text-primary text-light-text text-2xl md:text-3xl">
              responsivos
            </b>{" "}
            e{" "}
              de fácil {" "} 
            <b className="transition duration-500 dark:text-primary text-light-text text-2xl md:text-3xl">
              manutenção.
            </b>
          </h2>

          <div className="mt-8 max-w-[236px] w-full">
            <Button
              isLink={false}
              outlined={false}
              border={false}
              text="Converse comigo"
              onClick={handleOpenModal}
            />
          </div>

          <section className="my-20">
            <div className="relative">
              <div className="max-w-[1008px] w-full relative xl:block hidden">
                <Image
                  src="/desktop-mockup.png"
                  width={1008}
                  height={591}
                  alt="representação de um notebook com alguns projetos passando dentro dele"
                />
                <div className="absolute top-[26px] left-[5px] right-0 max-w-[77%] mx-auto">
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    allowTouchMove={false}
                  >
                    <SwiperSlide>
                      <Image
                        src="/ultronflix-desktop.png"
                        width={771}
                        height={480}
                        alt="representação de um projeto sempre mostrado em um notebook"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/hogai-desktop.png"
                        width={771}
                        height={480}
                        alt="representação de um projeto sempre mostrado em um notebook"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/touse-desktop.png"
                        width={771}
                        height={480}
                        alt="representação de um projeto sempre mostrado em um notebook"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>

              <div className="xl:absolute right-0 top-[20%] z-[1]">
                <div className="relative">
                  <Image
                    src="/mobile-mockup.png"
                    width={300}
                    height={576}
                    alt="representação de um smartphone com alguns projetos passando dentro dele"
                  />
                  <div className="absolute top-[13%] left-[0] right-0 z-1 max-w-[77%] w-full mx-auto">
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={true}
                      spaceBetween={0}
                      slidesPerView={1}
                      loop={true}
                      allowTouchMove={false}
                    >
                      <SwiperSlide>
                        <Image
                          src="/ultronflix-mobile.png"
                          width={250}
                          height={458}
                          alt="representação de um projeto sempre mostrado em um notebook"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          src="/hogai-mobile.png"
                          width={250}
                          height={458}
                          alt="representação de um projeto sempre mostrado em um notebook"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          src="/touse-mobile.png"
                          width={250}
                          height={458}
                          alt="representação de um projeto sempre mostrado em um notebook"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/projetos">
              <a className="transition duration-500 dark:text-primary text-light-text font-bold text-lg md:text-2xl flex items-center justify-center gap-4 text-center mt-[60px] md:mt-[200px]">
                Veja mais projetos
                <CgArrowTopRightR />
              </a>
            </Link>
          </section>
        </div>
        <svg
          className="absolute max-w-full bottom-[-15%] left-0 right-0 mx-auto"
          width="1920"
          height="302"
          viewBox="0 0 1920 302"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="transition duration-500 dark:fill-waves fill-light-bg"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1920 211.469H1840C1760 211.469 1600 211.469 1440 221.528C1280 231.587 1120 251.705 960 231.587C800 211.469 640 151.115 480 156.144C320 161.174 160 231.587 80.0001 266.793L7.20024e-05 302V0.22926H80.0001C160 0.22926 320 0.22926 480 0.22926C640 0.22926 800 0.22926 960 0.22926C1120 0.22926 1280 0.22926 1440 0.22926C1600 0.22926 1760 0.22926 1840 0.22926H1920V211.469Z"
            fill="#32303B"
          />
        </svg>
      </section>

      <section className="mt-[100px] md:mt-[300px] py-5">
        <div className="container px-4 relative z-[2]">
          <h2 className="transition duration-500 text-center text-2xl md:text-3xl max-w-[354px] w-full mx-auto dark:text-white text-light-text">
            Seu site construido com a qualidade que você merece
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-20 my-[80px]">
          <Card
            title="Código limpo"
            description="Seu site será feito com um olhar crítico, sempre visando a qualidade e acessibilidade"
          >
            <svg
              width="30"
              height="24"
              viewBox="0 0 30 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition duration-500 fill-white"
                d="M13.0736 23.9729L10.2144 23.1433C9.91446 23.059 9.74572 22.7449 9.83009 22.4449L16.228 0.406038C16.3124 0.106062 16.6264 -0.0626751 16.9264 0.0216933L19.7856 0.851316C20.0855 0.935684 20.2543 1.24972 20.1699 1.5497L13.772 23.5886C13.6829 23.8886 13.3736 24.062 13.0736 23.9729V23.9729ZM7.73025 18.714L9.76916 16.5392C9.98477 16.3095 9.97071 15.9439 9.73166 15.733L5.48512 11.9973L9.73166 8.26167C9.97071 8.05075 9.98945 7.68516 9.76916 7.45549L7.73025 5.28066C7.51933 5.05567 7.16311 5.04161 6.93344 5.25722L0.179283 11.5849C-0.059761 11.8051 -0.059761 12.1848 0.179283 12.4051L6.93344 18.7374C7.16311 18.953 7.51933 18.9437 7.73025 18.714V18.714ZM23.0666 18.7421L29.8207 12.4098C30.0598 12.1895 30.0598 11.8098 29.8207 11.5895L23.0666 5.25253C22.8416 5.04161 22.4854 5.05099 22.2697 5.27597L20.2308 7.4508C20.0152 7.68047 20.0293 8.04607 20.2683 8.25699L24.5149 11.9973L20.2683 15.733C20.0293 15.9439 20.0105 16.3095 20.2308 16.5392L22.2697 18.714C22.4807 18.9437 22.8369 18.953 23.0666 18.7421V18.7421Z"
                fill="white"
              />
            </svg>
          </Card>
          <Card
            title="Velocidade"
            description="Velocidade e otimização
            para os mecanismos de
            busca do Google, esse
            será o foco sempre."
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition duration-500 fill-white"
                d="M27.3714 2.62763C23.7064 -1.03334 17.8985 -1.16811 12.5893 4.13526C7.98318 8.73609 9.0162 7.70483 7.56482 9.15445C4.02221 12.693 3.44036 17.9922 3.83588 21.5278L14.2914 11.0834C14.6582 10.7172 15.2524 10.7172 15.6186 11.0834C15.9848 11.4496 15.9848 12.0432 15.6186 12.4094L0.412211 27.5999C-0.137404 28.149 -0.137404 29.0396 0.412211 29.5886C0.961825 30.1377 1.85363 30.1377 2.40324 29.5886L6.27633 25.7196C9.34081 26.6402 16.3475 26.7843 20.7392 22.5005H14.9858L23.6325 19.6212C26.5617 16.6955 25.7642 17.5012 26.346 16.8754H20.6167L28.3242 14.309C30.9867 9.94606 30.3346 5.58782 27.3714 2.62763Z"
                fill="white"
              />
            </svg>
          </Card>
          <Card
            title="Escalável"
            description="Irei construir o seu site
            da maneira mais correta, para que fique fácil para futuras manutenções."
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition duration-500 fill-white"
                d="M0.727288 8.6734L14.376 14.8649C14.7744 15.046 15.225 15.046 15.6234 14.8649L29.2721 8.6734C30.2418 8.23337 30.2418 6.76795 29.2721 6.32791L15.624 0.135788C15.4283 0.0463105 15.2155 0 15.0003 0C14.7851 0 14.5723 0.0463105 14.3766 0.135788L0.727288 6.32733C-0.242429 6.76736 -0.242429 8.23337 0.727288 8.6734ZM29.2727 13.846L25.869 12.3032L16.398 16.5964C15.9551 16.7973 15.4846 16.8993 15 16.8993C14.5154 16.8993 14.0455 16.7973 13.602 16.5964L4.13155 12.3032L0.727288 13.846C-0.242429 14.2855 -0.242429 15.7503 0.727288 16.1897L14.376 22.3766C14.7744 22.5571 15.225 22.5571 15.6234 22.3766L29.2727 16.1897C30.2424 15.7503 30.2424 14.2855 29.2727 13.846ZM29.2727 21.3342L25.8819 19.7973L16.398 24.0963C15.9551 24.2973 15.4846 24.3992 15 24.3992C14.5154 24.3992 14.0455 24.2973 13.602 24.0963L4.11866 19.7973L0.727288 21.3342C-0.242429 21.7737 -0.242429 23.2385 0.727288 23.6779L14.376 29.8648C14.7744 30.0453 15.225 30.0453 15.6234 29.8648L29.2727 23.6779C30.2424 23.2385 30.2424 21.7737 29.2727 21.3342Z"
                fill="white"
              />
            </svg>
          </Card>
        </div>
      </section>

      <section className="container my-[40px]">
        <h2 className="transition duration-500 text-center text-2xl md:text-3xl max-w-[354px] w-full mx-auto dark:text-white text-light-text mb-3">Projetos pessoais</h2>
        <Text 
        text="Confira alguns projetos pessoais que me orgulho" 
        size="16"
        />
         
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <LinkCard
          link="https://ultronflix.vercel.app/"
          text="Ultronflix"
          image="/ultronflix-desktop.png"
          />
          <LinkCard
          link="https://shortly-pi.vercel.app/"
          text="Shortly"
          image="/shortly.png"
          />
          <LinkCard
          link="https://topgains.vercel.app/"
          text="Calculadora de ganhos"
          image="/calculadora.png"
          />
        </div>
      </section>

      <section className="container flex flex-col items-center pt-20 pb-[130px] z-[1] relative">
      <h2 className="transition duration-500 text-center text-2xl md:text-3xl max-w-[354px] w-full mx-auto dark:text-white text-light-text mb-10">Vamos trabalhar juntos?</h2>
     
      <div className="max-w-[273px] w-full">
      <Button 
      isLink={false}
      text="Entre em contato"
      outlined={false}
      border={false}
      onClick={handleOpenModal}
      />
      </div>
    
      </section>


      <Footer/>
    </main>
    </div>
  );
};

export default Home;
