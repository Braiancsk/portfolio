import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { darkContext } from '../globalContext/darkModeContext'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState('')

  useEffect(()=>{
    if(localStorage.getItem('darkMode')){
      setDarkMode(localStorage.getItem('darkMode') || '')
    }else{
      localStorage.setItem('darkMode', 'dark')
    }
  },[])
  
  return (
    <darkContext.Provider value= {{ darkMode, setDarkMode }}>
    <Component {...pageProps} />
    </darkContext.Provider>
  )

}

export default MyApp
