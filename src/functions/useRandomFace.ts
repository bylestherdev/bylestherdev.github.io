'use client'

// useRandomFace.ts
import { useCallback, useState } from 'react'
import type { MascotExpression } from '@/components/global/RobotMascota'

function pickRandomExpression(
  pool: MascotExpression[],
  current: MascotExpression
): MascotExpression {
  if (pool.length === 0) return current
  if (pool.length === 1) return pool[0]
  let next = current
  while (next === current) {
    next = pool[Math.floor(Math.random() * pool.length)]
  }
  return next
}

export function useRandomFace(pool: MascotExpression[], initial: MascotExpression = 'neutral') {
  const [expression, setExpression] = useState<MascotExpression>(initial)

  const randomizeFace = useCallback(() => {
    setExpression((prev) => pickRandomExpression(pool, prev))
  }, [pool])

  return { expression, randomizeFace }
}