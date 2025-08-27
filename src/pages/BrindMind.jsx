"use client";

import React from "react";
import InfiniteMovingCards from "@/components/ui/infinite-moving-cards";
import GradientText from "@/components/ui/GradientText";

export default function BrainMind() {
  const stoicQuotes = [
    { 
      quote: "Ce n’est pas parce que les choses sont difficiles que nous n’osons pas, c’est parce que nous n’osons pas qu’elles sont difficiles.", 
      author: "Sénèque",
      logic: "Pourquoi ? Pour nous pousser à agir. Jusqu'à quand ? Tant que nous hésitons."
    },
    { 
      quote: "Nous souffrons plus souvent dans l’imagination que dans la réalité.", 
      author: "Sénèque",
      logic: "Pourquoi ? Parce que l’esprit amplifie les peurs. Jusqu'à quand ? Tant que nous imaginons."
    },
    { 
      quote: "Accepte ce que tu ne peux pas changer, et change ce que tu peux.", 
      author: "Épictète",
      logic: "Pourquoi ? Pour distinguer ce qui dépend de nous. Jusqu'à quand ? Toujours."
    },
    { 
      quote: "La tranquillité de l’esprit est atteinte lorsque l’on ne s’inquiète plus de ce qui dépend des autres.", 
      author: "Épictète",
      logic: "Pourquoi ? Pour se libérer des soucis inutiles. Jusqu'à quand ? Chaque jour."
    },
    { 
      quote: "La vie n’est ni bonne ni mauvaise, mais seulement un lieu où l’on peut faire le bien.", 
      author: "Marc Aurèle",
      logic: "Pourquoi ? Pour nous rappeler que tout dépend de nos choix. Jusqu'à quand ? Toujours."
    },
    { 
      quote: "Ne perds pas de temps à discuter de ce qu’un bon homme devrait être. Sois-le.", 
      author: "Marc Aurèle",
      logic: "Pourquoi ? Parce que l’action vaut mieux que les paroles. Jusqu'à quand ? Dès maintenant."
    },
    { 
      quote: "Ce qui trouble les hommes, ce ne sont pas les choses, mais les jugements qu’ils portent sur les choses.", 
      author: "Épictète",
      logic: "Pourquoi ? Pour apprendre à contrôler nos pensées. Jusqu'à quand ? Chaque instant."
    },
  ];

  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-start bg-black text-white overflow-x-hidden mt-[77px]">
      
      {/* Header */}
      <header className="w-full py-12 flex flex-col items-center text-center">
        <GradientText
          text="Bienvenue ! Vous êtes dans BrainMind"
          gradient={["#fff", "#ccc", "#fff"]}
          duration={77}
          fontSize="2.5rem"
        />
      </header>

      {/* Section InfiniteMovingCards */}
      <section className="w-full py-16 flex flex-col items-center text-center">
        <div className="w-full max-w-6xl px-4 flex justify-center">
          <InfiniteMovingCards
            items={stoicQuotes.map(item => ({
              quote: item.quote,
              name: item.author,
              logic: item.logic
            }))}
            direction="left"
            speed={7}
            pauseOnHover={true}
          />
        </div>
      </section>

      {/* Section centrale pour futur composant */}
      <section className="w-full py-16 flex flex-col items-center text-center">
        <div className="bg-gray-800 text-white rounded-xl p-6 text-center max-w-2xl w-full shadow-lg">
          Ici pourra être ton prochain composant, centré et responsive.
        </div>
      </section>

    </main>
  );
}
