"use client";

import { cn } from "@components/lib/utils";
import React, { useEffect, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = 40, // Durée du cycle en secondes, ex: speed={120}
  pauseOnHover = true,
  className
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Duplique les items pour un scroll infini
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach(item => {
      const clone = item.cloneNode(true);
      scrollerRef.current.appendChild(clone);
    });

    // Appliquer la direction
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    // Appliquer la durée
    containerRef.current.style.setProperty(
      "--animation-duration",
      `${speed}s`
    );
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[350px] max-w-full shrink-0 rounded-3xl
                       bg-white/10 backdrop-blur-xl border border-white/30
                       shadow-lg shadow-white/10
                       px-8 py-6 md:w-[450px]
                       dark:bg-gray-900/20 dark:border-white/20
                       dark:shadow-lg dark:shadow-black/20
                       hover:scale-105 transition-transform duration-300"
          >
            <blockquote>
              <span className="relative z-20 text-sm leading-[1.6] font-medium text-white/90 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-white/70 dark:text-gray-300">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-white/70 dark:text-gray-300">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>

            {/* Bordure lumineuse subtile */}
            <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none animate-pulse-slow"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
