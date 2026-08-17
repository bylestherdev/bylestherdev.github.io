'use client'

import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'

export type MascotState = 'idle' | 'greeting' | 'thinking' | 'dancing' | 'sleeping' | 'typing' | 'head-only'
export type MascotExpression = 'neutral' | 'happy' | 'thinking' | 'alert' | 'wink' | 'surprised'

interface RobotMascotProps {
  state?: MascotState
  expression?: MascotExpression
  className?: string
  size?: number
  speechText?: string
  showNameTag?: boolean
  onClick?: () => void
}

// Curva de easing "orgánica": arranca rápido y frena con un leve rebote de llegada.
const ORGANIC = [0.34, 1.35, 0.64, 1] as const
const SOFT_OUT = [0.22, 1, 0.36, 1] as const

export const RobotMascot: React.FC<RobotMascotProps> = ({
  state = 'idle',
  expression = 'neutral',
  className = '',
  size = 240,
  speechText,
  showNameTag = false,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    if (state === 'sleeping') return
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 180)
    }, 4500)
    return () => clearInterval(blinkInterval)
  }, [state])

  const headVariants: Variants = {
    idle: {
      y: [0, -6, 0],
      rotate: [0, 1.5, 0, -1.8, 0],
      transition: { duration: 4.1, repeat: Infinity, ease: SOFT_OUT, times: [0, 0.3, 0.55, 0.8, 1] }
    },
    thinking: {
      y: -4,
      rotate: -12,
      transition: { type: 'spring', stiffness: 120, damping: 12, delay: 0.05 }
    },
    greeting: {
      y: [0, -4, 0],
      rotate: [0, 6, -2, 6, 0],
      transition: { duration: 2.1, repeat: Infinity, ease: SOFT_OUT }
    },
    dancing: {
      y: [0, -10, 0],
      rotate: [-8, 8, -8],
      transition: { duration: 0.65, repeat: Infinity, ease: SOFT_OUT }
    },
    sleeping: {
      y: [0, 2, 0],
      rotate: 5,
      transition: { duration: 4.4, repeat: Infinity, ease: 'easeInOut' }
    },
    typing: {
      y: [0, -2, 0],
      rotate: [0, -2, 2, 0],
      transition: { duration: 0.35, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  const antennaVariants: Variants = {
    idle: { scale: [1, 1.2, 1], transition: { duration: 2.3, repeat: Infinity, ease: 'easeInOut' } },
    sleeping: { scale: 0.9, opacity: 0.4 },
    thinking: { scale: [1, 1.35, 1], transition: { duration: 0.8, repeat: Infinity } },
    greeting: { scale: [1, 1.25, 1], transition: { duration: 1.1, repeat: Infinity } }
  }

  // ────────────────────────────────────────────────────────────
  // SALUDO (greeting) — brazo derecho ahora sube y se EXTIENDE al costado
  // de la cabeza en vez de quedarse pegado al cuerpo.
  // El hombro hace el trabajo grande (sube el brazo ~110°) y el codo/antebrazo
  // se mantiene casi recto, solo con un ligero vaivén — así se lee como un
  // brazo extendido saludando, no como un codo doblado hacia abajo.
  // ────────────────────────────────────────────────────────────

  // Hombro Derecho
  const rightShoulderVariants: Variants = {
    idle: { rotate: [0, 3, 0], transition: { duration: 3.4, repeat: Infinity, ease: SOFT_OUT } },
    greeting: { rotate: -45, transition: { type: 'spring', stiffness: 160, damping: 15 } },
    thinking: { rotate: -10, transition: { type: 'spring', stiffness: 200, damping: 16 } },
    dancing: { rotate: [20, -30, 20], transition: { duration: 0.6, repeat: Infinity, ease: SOFT_OUT } },
    typing: { rotate: 15, transition: { duration: 0.3, ease: SOFT_OUT } }
  }

  // Codo Derecho — antebrazo casi recto (extendido), solo oscila un poco para el "vaivén" del saludo
  const rightElbowVariants: Variants = {
    idle: { rotate: [0, 5, 0], transition: { duration: 3.4, repeat: Infinity, ease: SOFT_OUT, delay: 0.15 } },
    greeting: {
      rotate: [-80, -105, -80, -105, -80],
      transition: { duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }
    },
    thinking: { rotate: -75, transition: { type: 'spring', stiffness: 170, damping: 11, delay: 0.12 } },
    dancing: { rotate: [30, -60, 30], transition: { duration: 0.6, repeat: Infinity, ease: SOFT_OUT, delay: 0.06 } },
    typing: {
      rotate: [-45, -25],
      transition: { duration: 0.22, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.04 }
    }
  }

  // Hombro Izquierdo (queda relajado, apoyando la pose)
  const leftShoulderVariants: Variants = {
    idle: { rotate: [0, -3, 0], transition: { duration: 3.8, repeat: Infinity, ease: SOFT_OUT } },
    greeting: { rotate: 15, transition: { duration: 0.4 } },
    thinking: { rotate: 10, transition: { type: 'spring', stiffness: 180, damping: 16 } },
    dancing: { rotate: [-30, 20, -30], transition: { duration: 0.6, repeat: Infinity, ease: SOFT_OUT } },
    typing: { rotate: -15, transition: { duration: 0.3, ease: SOFT_OUT } }
  }

  // Codo Izquierdo
  const leftElbowVariants: Variants = {
    idle: { rotate: [0, -5, 0], transition: { duration: 3.8, repeat: Infinity, ease: SOFT_OUT, delay: 0.12 } },
    greeting: { rotate: 0, transition: { duration: 0.4 } },
    thinking: { rotate: 25, transition: { type: 'spring', stiffness: 170, damping: 12, delay: 0.1 } },
    dancing: { rotate: [-60, 30, -60], transition: { duration: 0.6, repeat: Infinity, ease: SOFT_OUT, delay: 0.05 } },
    typing: {
      rotate: [-50, -30],
      transition: { duration: 0.22, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.03 }
    }
  }

  const bodyVariants: Variants = {
    idle: { y: [0, -3, 0], transition: { duration: 3.4, repeat: Infinity, ease: SOFT_OUT, delay: 0.05 } },
    dancing: { y: [0, -8, 0], rotate: [4, -4, 4], transition: { duration: 0.6, repeat: Infinity, ease: SOFT_OUT } },
    sleeping: { y: 2, transition: { duration: 0.6, ease: SOFT_OUT } }
  }

  const shadowVariants: Variants = {
    idle: { scale: [1, 0.85, 1], opacity: [0.4, 0.25, 0.4], transition: { duration: 3.4, repeat: Infinity, ease: SOFT_OUT, delay: 0.05 } },
    dancing: { scale: [1, 0.7, 1], opacity: [0.5, 0.2, 0.5], transition: { duration: 0.6, repeat: Infinity, ease: SOFT_OUT } },
    sleeping: { scale: 1.05, opacity: 0.3, transition: { duration: 0.6, ease: SOFT_OUT } }
  }

  const isHeadOnly = state === 'head-only'

  return (
    <div
      className={`relative inline-flex flex-col items-center group cursor-pointer ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: size, height: isHeadOnly ? size * 0.6 : size }}
      role="img"
      aria-label="Lesther IA - Mascota y Asistente Virtual de ByLestherDev"
    >
      {(speechText || (isHovered && !speechText)) && (
        <motion.div
          initial={{ opacity: 0, y: 4, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 px-3 py-1 bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 text-cyan-200 text-xs font-mono rounded-xl shadow-lg shadow-cyan-500/10 pointer-events-none whitespace-nowrap"
        >
          {speechText || "¡Hola! Soy Lesther IA 🤖"}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-r border-b border-cyan-500/40 rotate-45" />
        </motion.div>
      )}

      <svg
        viewBox={isHeadOnly ? '60 30 180 140' : '0 0 300 400'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="chassisLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          <linearGradient id="chassisDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          <linearGradient id="brandBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>

          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="glassGlare" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
          </linearGradient>

          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {!isHeadOnly && (
          <motion.ellipse
            cx="150"
            cy="375"
            rx="45"
            ry="10"
            fill="#38BDF8"
            variants={shadowVariants}
            animate={state === 'dancing' ? 'dancing' : state === 'sleeping' ? 'sleeping' : 'idle'}
            filter="url(#neonGlow)"
          />
        )}

        {!isHeadOnly && (
          <>
            <g id="jetpack" opacity="0.85">
              <path d="M130 220 L170 220 L175 255 L125 255 Z" fill="url(#chassisDark)" />
              <ellipse cx="150" cy="255" rx="16" ry="6" fill="#00F0FF" filter="url(#neonGlow)" />
            </g>

            <g id="legs">
              <rect x="110" y="270" width="24" height="60" rx="6" fill="url(#chassisDark)" />
              <polygon points="100,330 140,330 145,350 95,350" fill="url(#chassisLight)" />

              <rect x="166" y="270" width="24" height="60" rx="6" fill="url(#chassisDark)" />
              <polygon points="155,330 195,330 205,350 155,350" fill="url(#chassisLight)" />
            </g>

            <motion.g
              id="torso"
              variants={bodyVariants}
              animate={state === 'dancing' ? 'dancing' : state === 'sleeping' ? 'sleeping' : 'idle'}
            >
              <polygon
                points="90,160 210,160 195,270 105,270"
                fill="url(#chassisLight)"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <polygon
                points="195,160 210,160 195,270 180,270"
                fill="url(#chassisDark)"
                opacity="0.4"
              />

              <polygon points="110,180 190,180 180,230 120,230" fill="url(#brandBlue)" />
              <text
                x="150"
                y="210"
                fill="#FFFFFF"
                fontSize="13"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="2"
                textAnchor="middle"
                filter="url(#neonGlow)"
              >
                BLD
              </text>

              <circle cx="150" cy="242" r="8" fill={state === 'sleeping' ? '#64748B' : '#00F0FF'} filter="url(#neonGlow)" />
            </motion.g>

            <motion.g
              id="left-shoulder"
              style={{ transformBox: 'view-box', transformOrigin: '90px 175px' }}
              variants={leftShoulderVariants}
              animate={state}
            >
              <circle cx="90" cy="175" r="10" fill="url(#chassisDark)" />
              <rect x="79" y="180" width="16" height="40" rx="5" fill="url(#chassisLight)" />
              <circle cx="87" cy="220" r="7" fill="url(#chassisDark)" />
              <motion.g
                id="left-forearm"
                style={{ transformBox: 'view-box', transformOrigin: '87px 220px' }}
                variants={leftElbowVariants}
                animate={state}
              >
                <rect x="79" y="225" width="16" height="35" rx="5" fill="url(#chassisLight)" />
                <circle cx="87" cy="268" r="6" fill="url(#brandBlue)" />
              </motion.g>
            </motion.g>

            <motion.g
              id="right-shoulder"
              style={{ transformBox: 'view-box', transformOrigin: '210px 175px' }}
              variants={rightShoulderVariants}
              animate={state}
            >
              <circle cx="210" cy="175" r="10" fill="url(#chassisDark)" />
              <rect x="205" y="180" width="16" height="40" rx="5" fill="url(#chassisLight)" />
              <circle cx="213" cy="220" r="7" fill="url(#chassisDark)" />
              <motion.g
                id="right-forearm"
                style={{ transformBox: 'view-box', transformOrigin: '213px 220px' }}
                variants={rightElbowVariants}
                animate={state}
              >
                <rect x="205" y="225" width="16" height="35" rx="5" fill="url(#chassisLight)" />
                <circle cx="213" cy="268" r="6" fill="url(#brandBlue)" />
              </motion.g>
            </motion.g>
          </>
        )}

        <motion.g
          id="head"
          style={{ transformBox: 'view-box', transformOrigin: '150px 140px' }}
          variants={headVariants}
          animate={isHeadOnly ? 'idle' : state}
        >
          <g id="antennas">
            <line x1="130" y1="60" x2="124" y2="38" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
            <motion.circle
              cx="124"
              cy="34"
              r="5"
              fill="url(#brandBlue)"
              filter="url(#neonGlow)"
              variants={antennaVariants}
              animate={state === 'sleeping' ? 'sleeping' : state === 'thinking' ? 'thinking' : 'idle'}
            />

            <line x1="170" y1="60" x2="176" y2="38" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
            <motion.circle
              cx="176"
              cy="34"
              r="5"
              fill="url(#brandBlue)"
              filter="url(#neonGlow)"
              variants={antennaVariants}
              animate={state === 'sleeping' ? 'sleeping' : state === 'thinking' ? 'thinking' : 'idle'}
            />
          </g>

          <rect
            x="75"
            y="55"
            width="150"
            height="105"
            rx="42"
            fill="url(#chassisLight)"
            stroke="#94A3B8"
            strokeWidth="3"
          />

          <rect x="67" y="90" width="10" height="35" rx="5" fill="url(#brandBlue)" />
          <rect x="223" y="90" width="10" height="35" rx="5" fill="url(#brandBlue)" />

          <rect
            x="90"
            y="70"
            width="120"
            height="75"
            rx="28"
            fill="url(#screenGrad)"
            stroke="#1E293B"
            strokeWidth="2"
          />
          <path
            d="M95 75 L160 75 L110 142 L95 142 Z"
            fill="url(#glassGlare)"
          />

          <g id="face-expression" filter="url(#neonGlow)" opacity={isBlinking ? 0.2 : 1}>
            {expression === 'neutral' && (
              <>
                <rect x="110" y="95" width="22" height="22" rx="6" fill="#00F0FF" />
                <rect x="168" y="95" width="22" height="22" rx="6" fill="#00F0FF" />
                <rect x="138" y="128" width="24" height="4" rx="2" fill="#00F0FF" />
              </>
            )}

            {expression === 'happy' && (
              <>
                <path d="M110 110 Q121 95 132 110" stroke="#00F0FF" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M168 110 Q179 95 190 110" stroke="#00F0FF" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M135 124 Q150 138 165 124" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" fill="none" />
              </>
            )}

            {expression === 'thinking' && (
              <>
                <path d="M110 90 L132 94" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                <circle cx="121" cy="105" r="9" fill="#F59E0B" />
                <line x1="168" y1="102" x2="190" y2="102" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
                <circle cx="150" cy="128" r="4" fill="#F59E0B" />
              </>
            )}

            {expression === 'alert' && (
              <>
                <path d="M110 92 L132 98" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
                <path d="M190 92 L168 98" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
                <polygon points="121,98 132,118 110,118" fill="#EF4444" />
                <polygon points="179,98 190,118 168,118" fill="#EF4444" />
                <rect x="135" y="128" width="30" height="4" rx="2" fill="#EF4444" />
              </>
            )}

            {expression === 'wink' && (
              <>
                <path d="M110 106 Q121 110 132 106" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" fill="none" />
                <rect x="168" y="95" width="22" height="22" rx="6" fill="#00F0FF" />
                <path d="M138 126 Q150 136 162 126" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" fill="none" />
              </>
            )}

            {expression === 'surprised' && (
              <>
                <circle cx="121" cy="106" r="11" fill="#00F0FF" />
                <circle cx="179" cy="106" r="11" fill="#00F0FF" />
                <circle cx="150" cy="128" r="6" fill="#00F0FF" />
              </>
            )}
          </g>

          {state === 'sleeping' && (
            <g id="sleeping-eyes">
              <path d="M112 106 Q121 100 130 106" stroke="#64748B" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M170 106 Q179 100 188 106" stroke="#64748B" strokeWidth="3" strokeLinecap="round" fill="none" />
              <text x="210" y="60" fill="#38BDF8" fontSize="16" fontFamily="monospace" opacity="0.8">z</text>
              <text x="220" y="45" fill="#38BDF8" fontSize="20" fontFamily="monospace" opacity="0.6">Z</text>
            </g>
          )}
        </motion.g>
      </svg>

      {showNameTag && (
        <div className="mt-2 text-center">
          <span className="px-2.5 py-0.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-full shadow">
            Lesther IA · ByLestherDev
          </span>
        </div>
      )}
    </div>
  )
}