// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json([
    {
      title: 'ToUse',
      description: 'Front-End do site da ToUse, desenvolvido em conjunto com design eu construi o site a partir de layout no Figma.',
      skills: ['HTML','CSS','JS','Boostrap 5'],
      url: 'https://touse.com.br',
      image:'/projeto-touse.png'
    },

    {
      title: 'Beach Tennis',
      description: 'Front-End da Landing Page de Beach Tennis, desenvolvida com base em layout no Figma. Bastante detalhes em funcionalidades, principalmente slides e tabs',
      skills: ['HTML','CSS','JS','Boostrap 5'],
      url: 'https://www.rankingdetenis.com/federacao-fbt',
      image:'/projeto-beachtennis.png'
    },

    {
      title: 'Crypto Space Journey',
      description: 'Front-End da Landing Page de Jogo NFT, desenvolvida a partir de layout do Figma. Construída com React, e com foco em deixar preparada para receber dados via API',
      skills: ['Reactjs','TailwindCSS','Axios'],
      url: 'https://cjs-build.vercel.app/',
      image:'/projeto-csj.png'
    },

    {
      title: 'UltronFlix',
      description: 'Projeto desenvolvido para estudo, construído com Reactjs e consumindo API do themoviedb. Trabalhei com rotas, filtros, renderização condicional e controle de estado global.',
      skills: ['Reactjs','TailwindCSS','API','Axios'],
      url: 'https://ultronflix.vercel.app/',
      image:'/projeto-ultronflix.png'
    },

    {
      title: 'Shortly',
      description: 'Projeto feito no desafio do site frontendmentor.io com objetivo de construir o layout e integrar com API, o usuário deveria conseguir: Encurtar o link, ter os links encurtados de forma persistente e o site deveria seguir fielmente o layout proposto',
      skills: ['Reactjs','TailwindCSS','API','Axios','LocalStorage'],
      url: 'https://shortly-pi.vercel.app/',
      image:'/projeto-shortly.png'
    },

    {
      title: 'Hogai',
      description: 'Front-End da Landing Page, desenvolvido seguindo fielmente o layout no AdobeXD. Com várias funcionalidades de modais, cálculo de preço final e com uma velocidade excelente.',
      skills: ['HTML','CSS','JS','Boostrap 5'],
      url: 'https://hogai.vercel.app/',
      image:'/projeto-hogai.png'
    },

    
    {
      title: 'Calculadora de ganhos',
      description: 'Aplicação desenvolvida para me auxiliar a anotar os ganhos mensais como Freelancer. Como funciona? Aplicação feita com Reactjs, utilizando o localstorage para armazenar os dados dos ganhos. Dessa forma eu consigo colocar de qual plataforma entre o 99Freelas e o Workana veio o ganho, e também filtrar os valores de acordo com o mês, excluir ganhos e também saber o quanto aquele ganho equivale em porcentagem ao valor total.',
      skills: ['Reactjs','Typescript','LocalStorage', 'TailwindCSS'],
      url: 'https://topgains.vercel.app/',
      image:'/calculadora.png'
    },

    {
      title: 'TODO App',
      description: 'Projeto desenvolvido como desafio no site do https://www.frontendmentor.io/. O objetivo era construir um app de TODO, permitindo o usuário criar tarefas, marcar como concluída e excluir tarefas. O app deveria ser responsivo e também deveria permitir o usuário trocar o tema entre modo claro e escuro. Construi o backend simulado, utilizando o miragejs para mockar a API. Veja como ficou o resultado no link abaixo.',
      skills: ['Reactjs','Typescript','LocalStorage', 'TailwindCSS'],
      url: 'https://todo-app-blue-six.vercel.app/',
      image:'/todo.png'
    },
  ])
}
