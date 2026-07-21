"use client";
import { useState, useEffect } from "react";

export function useScrollVisibility(showAfterPx: number = 350, hideBeforeBottomPx: number = 200) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrolled + winHeight > docHeight - hideBeforeBottomPx;

      if (scrolled > showAfterPx && !nearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutar una vez al montar para comprobar la posición inicial
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterPx, hideBeforeBottomPx]);

  return isVisible;
}