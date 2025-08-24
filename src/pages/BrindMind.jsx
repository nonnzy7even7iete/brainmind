"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function BrainMind() {
  // Liste de citations stoïciennes
  const stoicQuotes = [
    {
      quote: "Ce n’est pas parce que les choses sont difficiles que nous n’osons pas, c’est parce que nous n’osons pas qu’elles sont difficiles.",
      author: "Sénèque"
    },
    {
      quote: "Nous souffrons plus souvent dans l’imagination que dans la réalité.",
      author: "Sénèque"
    },
    {
      quote: "Accepte ce que tu ne peux pas changer, et change ce que tu peux.",
      author: "Épictète"
    },
    {
      quote: "La tranquillité de l’esprit est atteinte lorsque l’on ne s’inquiète plus de ce qui dépend des autres.",
      author: "Épictète"
    },
    {
      quote: "La vie n’est ni bonne ni mauvaise, mais seulement un lieu où l’on peut faire le bien.",
      author: "Marc Aurèle"
    },
    {
      quote: "Ne perds pas de temps à discuter de ce qu’un bon homme devrait être. Sois-le.",
      author: "Marc Aurèle"
    },
    {
      quote: "Ce qui trouble les hommes, ce ne sont pas les choses, mais les jugements qu’ils portent sur les choses.",
      author: "Épictète"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-10">BrainMind Flow</h1>

      <InfiniteMovingCards
        items={stoicQuotes}  // 👈 utiliser la liste correcte
        direction="left"
        speed={177}           // plus grand = plus lent
        pauseOnHover={true}
      />
    </main>
  );
}
