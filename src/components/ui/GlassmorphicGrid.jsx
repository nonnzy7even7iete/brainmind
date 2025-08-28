"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

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
            className="min-w-[270px] flex-1 relative flex flex-col rounded-2xl overflow-hidden shadow-lg
              transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl
              steel-border bg-white/5 backdrop-blur-md p-4"
          >
            {/* IMAGE */}
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            {/* TEXTES */}
            <div className="flex flex-col flex-grow items-center text-center">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">{item.subtitle}</h3>
              <p className="text-sm italic text-gray-400 mb-2">{item.signature}</p>

              {item.icon && <div className="mt-auto flex justify-center">{item.icon}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GlassmorphicGrid;
