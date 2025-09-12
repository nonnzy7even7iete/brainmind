"use client";
import React, { useState } from "react";
import { cn } from "@components/lib/utils";

// Carte individuelle
export const Card = React.memo(({ card, index, hovered, setHovered }) => {
  const isHovered = hovered === index;

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onTouchStart={() => setHovered(index)}
      onTouchEnd={() => setHovered(null)}
      className={cn(
        "rounded-lg relative overflow-hidden h-60 md:h-96 w-full transition-transform duration-500 ease-out transform-gpu",
        // Carte sélectionnée : scale + bounce
        isHovered && "scale-105 md:scale-110 animate-bounce-slow",
        // Autres cartes : blur + légère réduction
        hovered !== null && !isHovered && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full transition-transform duration-500 ease-out"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          isHovered || hovered === null ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  );
});

Card.displayName = "Card";

// Grille de cartes
export default function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.id ?? card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
