"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import nonnzytr from "../../assets/NN.png";
import Counter from "./Counter";

export default function HomePage() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [12, 26, 8, 499];
  const cycleDuration = 7; // secondes

  useEffect(() => {
    const stepInterval = 50; // ms
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
          // attendre 7s avant de recommencer
          setTimeout(runCounters, 7000);
        }
      }, stepInterval);
    };

    runCounters();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-center items-center px-6 md:px-20 pt-20 md:pt-32 lg:pt-40">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        {/* Texte de présentation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-gray-400">Software Developer</h2>
          <h1 className="text-4xl md:text-5xl font-bold">
            Hello I’m <span className="text-green-400">Nonnzy</span>
          </h1>
          <p className="text-gray-400 max-w-md">
            I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-green-400"><FaLinkedin /></a>
              <a href="#" className="hover:text-green-400"><FaGithub /></a>
              <a href="#" className="hover:text-green-400"><FaYoutube /></a>
              <a href="#" className="hover:text-green-400"><FaTwitter /></a>
            </div>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute w-72 h-72 rounded-full border-2 border-green-400 border-dashed"
          />
          <div className="w-64 h-64 rounded-full overflow-hidden relative border-4 border-transparent">
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-gray-300 via-white to-gray-500">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={nonnzytr}
                  alt="Nonnzy"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats synchronisés */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
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
