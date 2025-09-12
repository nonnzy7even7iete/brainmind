import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const GlassCard = ({
  title = "Titre",
  text = "Contenu du texte",
  width = 300,
  height = 250,
  single = false
}) => {
  return (
    <div
      className={`relative rounded-2xl bg-black/20 flex flex-col justify-center items-center p-6 text-center overflow-hidden transition-all duration-300 border-t border-b border-white/10`}
      style={{
        width: single ? "90vw" : `${width}px`,
        height: `${height}px`,
        maxWidth: single ? "90vw" : `${width}px`,
        borderLeftWidth: 0, // pas de border à gauche
        borderRightWidth: 0, // pas de border à droite
      }}
    >
      {/* Shine subtil */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div
          className="w-full h-full rounded-2xl opacity-20"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0) 60%)",
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>

      {/* Contenu */}
      <div className="relative flex flex-col justify-center items-center text-center z-10">
        <div className="flex items-center gap-2">
          <h2 className="text-gray-300 font-light text-3xl tracking-wide font-oswald">
            {title}
          </h2>
          <IoCheckmarkOutline className="text-gray-200 w-6 h-6" />
        </div>

        <p className="text-gray-200 text-base mt-3">{text}</p>
      </div>
    </div>
  );
};

export default GlassCard;