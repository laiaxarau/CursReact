import { useState } from "react"
import { useCallback } from "react"
import { useEffect } from "react"

export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
const [numero,setNumero]=useState(0)
//explicació xevi sobre useCallback
  const sayHello=useCallback(()=>console.log(numero),[numero])
  
  const handleClick = () => {
    updateBoard(index)
    sayHello()
    setNumero(numero+1)
    console.log(numero)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}