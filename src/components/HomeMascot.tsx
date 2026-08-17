// components/HomeMascot.tsx
"use client";

import { RobotMascot } from "@/components/global/RobotMascota";
import { useRandomFace } from "@/functions/useRandomFace";

export function HomeMascot() {
  const { expression, randomizeFace } = useRandomFace([
    "happy",
    "wink",
    "surprised",
  ]);

  return (
    <RobotMascot
      size={140}
      state="greeting"
      showNameTag={false}
      expression={expression}
      onClick={randomizeFace}
    />
  );
}
