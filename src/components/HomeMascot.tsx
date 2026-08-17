'use client'

import React, { useState } from 'react'
import { RobotMascot, MascotState, MascotExpression } from '@/components/global/RobotMascota'

interface HomeMascotProps {
  // Estado inicial al cargar la página
  initialState?: MascotState
  initialExpression?: MascotExpression
  
  // Opciones para la animación aleatoria al hacer hover
  possibleExpressions?: MascotExpression[]
  possibleStates?: MascotState[]
  
  // Opciones de contacto
  phoneNumber?: string
  message?: string
  
  // Diseño
  speechText?: string
  size?: number
  className?: string
}

export function HomeMascot({
  initialState = "greeting",
  initialExpression = "happy",
  possibleExpressions = ["wink", "surprised", "neutral", "happy"], // Mezcla de caras para el hover
  possibleStates = ["idle", "dancing", "thinking", "greeting"],    // Mezcla de estados para el hover
  phoneNumber,
  message = "¡Hola Lesther! Estuve viendo tu sitio web y me gustaría conversar contigo.",
  speechText = "¡Hola! Soy Lesther IA 🤖 ¿Hablamos?",
  size = 140,
  className = ""
}: HomeMascotProps) {

  // Inicializamos con las propiedades explícitas que definiste
  const [expression, setExpression] = useState<MascotExpression>(initialExpression)
  const [state, setState] = useState<MascotState>(initialState)

  const getRandomItem = <T,>(arr: T[], current: T): T => {
    if (arr.length <= 1) return arr[0]
    let newItem
    do {
      newItem = arr[Math.floor(Math.random() * arr.length)]
    } while (newItem === current)
    return newItem
  }

  // 1. REACCIÓN AL PASAR EL MOUSE
  const handleHover = () => {
    if (possibleExpressions.length > 0) {
      setExpression(getRandomItem(possibleExpressions, expression))
    }
    if (possibleStates.length > 0) {
      setState(getRandomItem(possibleStates, state))
    }
  }

  // 2. REACCIÓN AL CLIC
  const handleClick = () => {
    if (phoneNumber) {
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div 
      onMouseEnter={handleHover} 
      className="inline-block"
    >
      <RobotMascot
        size={size}
        state={state}
        expression={expression}
        speechText={speechText}
        className={className}
        onClick={handleClick}
      />
    </div>
  )
}