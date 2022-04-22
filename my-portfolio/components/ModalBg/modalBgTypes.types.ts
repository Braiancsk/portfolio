import { ReactElement } from "react"

export type modalBgProps = {
    closeModal: (e:any) => void
    children: ReactElement
    visible: boolean
}