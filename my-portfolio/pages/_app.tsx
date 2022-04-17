import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { darkContext } from '../globalContext/darkModeContext'
import { useEffect, useState } from 'react'
import { menuContext } from '../globalContext/menuContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState('')
  const [menu, setMenu] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem('darkMode')){
      setDarkMode(localStorage.getItem('darkMode') || '')
    }else{
      localStorage.setItem('darkMode', 'dark')
    }
  },[])
  
  
  return (
    <menuContext.Provider value= {{ menu, setMenu }}>
    <darkContext.Provider value= {{ darkMode, setDarkMode }}>
    <Component {...pageProps} />
    </darkContext.Provider>
    </menuContext.Provider>
  )

}

export default MyApp
