import Spotlight from "../components/ui/Spotlight";
import { ReactTyped } from "react-typed";
import { Brain } from "lucide-react";
import CardsFlip from "../components/ui/CardsFlip";

export default function About() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-['IBM Plex Mono']">

      {/* Grille de fond */}
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Spotlight */}
      <div className="absolute inset-0 z-[1]">
        <Spotlight className="h-[250%] w-[200%] md:h-[169%] md:w-[138%]" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-8 text-center pt-28 md:pt-32">
        {/* Titre */}
        <h1 className="text-5xl md:text-6xl font-extrabold 
            bg-gradient-to-r from-green-400 to-green-1700 
            bg-clip-text text-transparent animate-gradient-slow">
          Transformium <br />
          <span className="text-4xl md:text-5xl font-extrabold">
            محمد
          </span>
        </h1>

        {/* Box glassmorphique */}
        <div className="relative p-8 max-w-2xl mt-12">
          <div className="bg-gradient-to-br from-white/20 via-white/5 to-white/10 
                          backdrop-blur-2xl border border-white/30 
                          rounded-2xl shadow-2xl p-6 relative flex flex-col items-center space-y-4">
            {/* Reflets */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
              <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent rounded-r-2xl" />
            </div>

            {/* Icône Brain */}
            <Brain size={40} className="text-gray-100 drop-shadow-lg relative bottom-7" />

            {/* Texte animé */}
            <ReactTyped
              strings={[
                "Bienvenue ! vous êtes dans BrainMind",
                ".",
                "Le pouvoir n’est pas dans ce que tu obtiens, mais dans ce que tu deviens en chemin",
                "Ainsi que de l’engagement",
              ]}
              typeSpeed={70}
              backSpeed={27}
              backDelay={2000}
              loop
              className="text-3xl md:text-4xl font-extrabold 
                         bg-gradient-to-r from-gray-300 via-black to-gray-300 
                         bg-clip-text text-transparent animate-gradient-slow"
            />
          </div>
        </div>

        {/* Section des cartes Qur'an */}
        <div className="mt-20">
          <CardsFlip skew />
        </div>
      </div>
    </div>
  );
}
