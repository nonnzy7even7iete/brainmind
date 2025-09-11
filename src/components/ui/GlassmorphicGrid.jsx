"use client";

import React, { useRef, useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";

const GlassmorphicGrid = ({ items }) => {
  const containerRef = useRef(null);
  const [lastItemStyle, setLastItemStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = 270 + 24; // 270px min + gap
      const itemsPerRow = Math.floor(containerWidth / itemWidth);

      if (items.length % itemsPerRow === 1) {
        setLastItemStyle({ flexGrow: 2 });
      } else {
        setLastItemStyle({ flexGrow: 1 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items]);

  // ✅ Initialiser VanillaTilt
  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".tilt-card");

      VanillaTilt.init(cards, {
        max: 35,          // angle max (plus grand = plus fort)
        speed: 100,       // vitesse de retour
        scale: 1.15,      // zoom lors du hover/touch
        glare: true,      // ajoute un reflet dynamique
        "max-glare": 0.6, // intensité du reflet
        gyroscope: true,  // gère le tilt aussi avec le gyroscope mobile
      });
    }
  }, [items]);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap gap-6 w-full max-w-6xl p-6 border-4 border-white/20 rounded-3xl"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div
            key={index}
            style={isLast ? lastItemStyle : { flexGrow: 1 }}
            className="tilt-card min-w-[270px] flex-1 flex flex-col rounded-2xl overflow-hidden shadow-2xl
              steel-border bg-white/5 backdrop-blur-md p-4"
          >
            {/* IMAGE avec ratio 4:3 optimisé */}
            <div className="relative w-full pb-[75%] mb-4 rounded-xl border-[1px] border-white/40 overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 pointer-events-none rounded-xl border-[1px] border-white/20"></div>
            </div>

            {/* TEXTE + ICONE */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div>
                <h2 className="text-2xl font-bold mb-1">{item.title}</h2>
                <h3 className="text-lg font-semibold text-gray-300 mb-1">{item.subtitle}</h3>
                <p className="text-sm italic text-gray-400 mb-2">{item.signature}</p>
              </div>

              {item.icon && (
                <div className="flex justify-center">
                  {item.icon}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GlassmorphicGrid;
