'use client'

import React from 'react'
import { RobotMascot, MascotState, MascotExpression } from '@/components/global/RobotMascota'

// 1. Definimos qué propiedades puede recibir este componente
interface WhatsAppRobotProps {
  phoneNumber: string           // Obligatorio: El número a contactar
  message?: string              // Opcional: El mensaje predeterminado
  state?: MascotState           // Opcional: Pose del robot
  expression?: MascotExpression // Opcional: Cara del robot
  speechText?: string           // Opcional: Texto del hover
  size?: number                 // Opcional: Tamaño
  className?: string            // Opcional: Clases de Tailwind extra
}

export default function WhatsAppRobot({
  phoneNumber,
  message = '¡Hola! Vengo de tu web y me gustaría más información.', // Mensaje por defecto
  state = 'greeting',                                                // Pose por defecto
  expression = 'happy',                                              // Expresión por defecto
  speechText = '¡Escríbeme por WhatsApp!',                           // Texto por defecto
  size = 240,
  className = ''
}: WhatsAppRobotProps) {

  // La función ahora usa los datos que llegan por las props
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <RobotMascot 
      state={state}
      expression={expression}
      speechText={speechText}
      size={size}
      className={className}
      onClick={handleWhatsAppClick}
    />
  )
}