import React, { useState, useEffect } from "react";

export function ContainerTextFlip({
  words = ["Créativité", "Logique", "Vision", "Évolution"],
  interval = 2000,
  className = "",
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState([]);

  // Changement du mot à interval régulier
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  // Animation lettre par lettre à chaque mot
  useEffect(() => {
    const letters = words[currentWordIndex].split("");
    setVisibleLetters([]);
    letters.forEach((letter, i) => {
      setTimeout(() => {
        setVisibleLetters((prev) => [...prev, letter]);
      }, i * 50);
    });
  }, [currentWordIndex, words]);

  return (
    <p
      className={`text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-800 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] ${className}`}
    >
      {visibleLetters.map((letter, idx) => (
        <span key={idx} className="inline-block">
          {letter}
        </span>
      ))}
    </p>
  );
}
