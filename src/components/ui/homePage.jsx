"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import nonnzytr from "../../assets/NN.png";
import Counter from "./Counter";
import GradientText from "./GradientText";

export default function HomePage() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [12, 26, 8, 499];
  const cycleDuration = 7;

  useEffect(() => {
    const stepInterval = 50;
    let interval;

    const runCounters = () => {
      let start = [0, 0, 0, 0];
      const steps = Math.floor((cycleDuration * 1000) / stepInterval);
      let currentStep = 0;

      interval = setInterval(() => {
        currentStep++;
        const newCounts = start.map((s, i) =>
          Math.min(Math.round((targets[i] * currentStep) / steps), targets[i])
        );
        setCounts(newCounts);

        if (currentStep >= steps) {
          clearInterval(interval);
          setTimeout(runCounters, 7000);
        }
      }, stepInterval);
    };

    runCounters();
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-center items-center px-6 md:px-20 pt-20 md:pt-32 lg:pt-40 relative z-[50]">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">

        {/* Texte de présentation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 relative z-[51]"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Nonnzy{" "}
            <span>
              <GradientText
                text="Transformmium"
                gradient={["#fff", "#ccc", "#fff"]}
                duration={77}
                fontSize="2.5rem"
              />
            </span>
          </h1>
          <p className="text-gray-400 max-w-md">
            L’esprit humain cherche le sens de l’engagement, le code crée la
            direction. Ce que vous croyez voir n’est qu’un voile. Embarquez vers
            le futur… voir par-delà !
          </p>

          {/* Bloc icônes contact + taille augmentée */}
          <div className="flex items-center gap-6 flex-wrap mt-4 relative z-[52] text-3xl">
            <a
              href="https://www.linkedin.com/in/ton-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/nonnzy7even7iete"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/+2250575940418"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="tel:+2250716049362"
              className="hover:text-green-400 transition-colors duration-300"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </motion.div>

        {/* Photo + Cercle animé + Contour acier fin + Software Engineer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center relative z-[51]"
        >
          <div className="relative w-72 h-72 flex items-center justify-center pointer-events-none">
            {/* Cercle animé décoratif */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute w-full h-full rounded-full border-2 border-green-400 border-dashed pointer-events-none"
            />
            {/* Contour acier + photo */}
            <div className="absolute w-64 h-64 rounded-full p-[2px] bg-gradient-to-tr from-gray-400 via-gray-200 to-gray-500 flex items-center justify-center z-[50]">
              <div className="w-full h-full rounded-full overflow-hidden border border-gray-300">
                <img
                  src={nonnzytr}
                  alt="Nonnzy"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Texte Software Engineer */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="mt-4 text-center text-white"
          >
            <GradientText
              text="Software Engineer"
              gradient={["#fff", "#ccc", "#fff"]}
              duration={77}
              fontSize="1.5rem"
            />
          </motion.h2>
        </motion.div>
      </div>

      {/* Stats synchronisés */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center relative z-[51]">
        <div>
          <Counter value={counts[0]} />
          <p className="text-gray-400">Years of experience</p>
        </div>
        <div>
          <Counter value={counts[1]} />
          <p className="text-gray-400">Projects completed</p>
        </div>
        <div>
          <Counter value={counts[2]} />
          <p className="text-gray-400">Technologies mastered</p>
        </div>
        <div>
          <Counter value={counts[3]} />
          <p className="text-gray-400">Code commits</p>
        </div>
      </div>
    </section>
  );
}
