"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@components/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  pauseOnHover = true,
  className
}) => {
  const containerRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState(40);

  const animationDir = direction === "left" ? "normal" : "reverse";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const childWidths = Array.from(container.children).map(
      (child) => child.offsetWidth + parseInt(getComputedStyle(child).marginRight || 0)
    );
    const totalWidth = childWidths.reduce((sum, w) => sum + w, 0);

    const baseSpeed = 50; // px/s
    const duration = totalWidth / baseSpeed;

    setAnimationDuration(duration || 40);
  }, [items]);

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      <div
        ref={containerRef}
        className={cn(
          "flex flex-nowrap gap-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDirection: animationDir,
          animationDuration: `${animationDuration}s`,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px] sm:w-[270px] md:w-[300px] lg:w-[370px] 
                       h-[180px] rounded-2xl 
                       bg-white/5 backdrop-blur-[20px] 
                       border border-white/20 shadow-lg
                       px-4 py-3"
          >
            <p className="text-sm text-white mb-2">{item.quote}</p>
            {item.name && <span className="text-xs text-white/70 block">{item.name}</span>}
            {item.logic && <span className="text-xs text-white/50 block mt-1 shine">{item.logic}</span>}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-scroll {
          display: flex;
          animation: scroll var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, normal);
        }

        /* Shine fluide droite → gauche uniquement sur logic */
        @keyframes shine {
          from { background-position: 200% 0; }
          to { background-position: -200% 0; }
        }

        .shine {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.05) 0%,
            rgba(255,255,255,0.3) 50%,
            rgba(255,255,255,0.05) 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 12s linear infinite; /* plus lent pour effet subtil */
        }
      `}</style>
    </div>
  );
};

export default InfiniteMovingCards;
