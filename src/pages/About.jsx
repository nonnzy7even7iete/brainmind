import React from "react";
import { BinaryRain } from "@/components/ui/BinaryRain";
import GlassCard from "@/components/ui/GlassCard";
import GradientText from "@/components/ui/GradientText";
import DarkCard from "@/components/ui/DarkCard";
import nverImg from "@/assets/neverstop.png";

export default function About() {
  return (
    <div className="relative w-screen min-h-screen bg-black overflow-visible">
      <BinaryRain />

      <div className="relative z-20 flex flex-col items-center justify-start gap-6 px-4 md:px-10 pt-28 pb-10">
        <GradientText
          text="Nonnzy transformium"
          className="text-5xl md:text-6xl text-center"
        />

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <GlassCard
            title="Le prix a payer"
            text="L’excellence, consiste a voir l’âme et le corps en vecteur vers le motif de l’engagement , Il ne sert à rien de désirer si l’on n’est pas prêt à en payer le prix"
          />

          <GlassCard
            title="Protocole"
            text="La victoire réside dans le processus"
          />

          <GlassCard
            title="Mindset"
            text="La transition du chaos a la structure ! commencera par la reconnaissance du potentiel enfouie au trefond de soi , mais surtout des opportunités a saisir a portée des facultées propre a soi meme"
          />

          <div className="relative">
            <DarkCard
              image={nverImg}
              alt="Échec et renaissance"
              title="L’Ombre de l’Échec"
              description="La peur d’échouer n’est qu’un voile : oser la traverser, c’est renaître au-delà du bien et du mal."
              imgShadow="0 16px 40px rgba(0,0,0,0.8)"
            />
            {/* Brume/fumée sur les côtés */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}