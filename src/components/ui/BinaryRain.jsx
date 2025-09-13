"use client";
import React, { useEffect, useRef, useState } from "react";

export const BinaryRain = ({ columns = 120, speed = 50 }) => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // Mise à jour de la taille du canvas
  useEffect(() => {
    const updateSize = () => {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const fontSize = 16;
    const columnsCount = columns;
    const drops = Array(columnsCount).fill(0);

    const draw = () => {
      // Fondez légèrement le canvas pour l'effet de trace
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "1" : "0";

        // Couleur dynamique shine entre gris clair et noir transparent
        const alpha = Math.random() * 0.6 + 0.3; // 0.3 → 0.9
        ctx.fillStyle = `rgba(200,200,200,${alpha})`;

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, speed);
    return () => clearInterval(interval);
  }, [canvasSize, columns, speed]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};
