import { type } from 'os'
import React from 'react'

type textProps = {
  text: string
  size: string
}
function Text({text, size}:textProps) {
  return (
    <p style={{fontSize: `${size}px`}} className="dark:text-white text-light-text text-center transition duration-500">{text}</p>
  )
}

export default Text