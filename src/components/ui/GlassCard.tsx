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
      className={`relative rounded-2xl backdrop-blur-2xl bg-black/30 border border-gray-400 flex flex-col justify-center items-center p-6 text-center overflow-hidden transition-all duration-300`}
      style={{
        width: single ? "90vw" : `${width}px`,
        height: `${height}px`,
        maxWidth: single ? "90vw" : `${width}px`,
        borderWidth: "1px",
      }}
    >
      {/* Shine métallique subtil */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div
          className="w-full h-full rounded-2xl opacity-30"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0) 60%)",
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>

      {/* Contenu */}
      <div className="relative flex flex-col justify-center items-center text-center z-10">
        {/* Titre avec check icon */}
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
