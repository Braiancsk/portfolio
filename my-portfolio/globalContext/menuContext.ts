import { createContext, useContext } from "react"

export type GlobalContent = {
  menu: boolean
  setMenu:(c: boolean) => void
}
export const menuContext = createContext<GlobalContent>({
menu: false, // set a default value
setMenu: () => {},
})
export const useGlobalContext = () => useContext(menuContext)