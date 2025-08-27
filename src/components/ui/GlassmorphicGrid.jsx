"use client";

import React from "react";

export default function GlassmorphicGrid({ items }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      {/* Container flex */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl border-2 border-white/20 rounded-3xl p-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 min-w-[270px] w-full sm:w-[48%] md:w-[31%] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl steel-border"
          >
            {/* Overlay glassmorphique */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md z-0 pointer-events-none rounded-2xl"></div>

            {/* Image */}
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover rounded-2xl relative z-10"
            />

            {/* Texte */}
            <div className="absolute inset-0 flex items-center justify-center text-white z-20 pointer-events-none">
              <p className="text-sm opacity-100 text-center px-2">{item.alt}</p>
            </div>

            {/* Bordure métallique */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none border-metal z-30"></div>
          </div>
        ))}
      </div>

      {/* Styles globaux pour la bordure métallique */}
      <style jsx global>{`
        @keyframes steelSweep {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 0%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 100%; }
          100% { background-position: 0% 50%; }
        }

        .border-metal {
          border: 2px solid transparent;
          background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.95) 0%,
              rgba(200, 200, 200, 0.7) 12%,
              rgba(120, 120, 120, 0.6) 25%,
              rgba(40, 40, 40, 0.5) 37%,
              rgba(160, 160, 160, 0.65) 50%,
              rgba(40, 40, 40, 0.5) 63%,
              rgba(120, 120, 120, 0.6) 75%,
              rgba(200, 200, 200, 0.7) 88%,
              rgba(255, 255, 255, 0.95) 100%
            )
            border-box;
          border-radius: inherit;
          background-size: 300% 300%;
          animation: steelSweep 30s linear infinite;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>
    </div>
  );
}
