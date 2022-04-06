import { createContext, useContext } from "react"

export type GlobalContent = {
  darkMode: string
  setDarkMode:(c: string) => void
}
export const darkContext = createContext<GlobalContent>({
darkMode: '', // set a default value
setDarkMode: () => {},
})
export const useGlobalContext = () => useContext(darkContext)