"use client";
import React, { useMemo, useRef, useState } from "react";

export const BackgroundRippleEffect = ({ rows = 20, cols = 50, cellSize = 24 }) => {
  const [clickedCell, setClickedCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);
  const ref = useRef(null);

  return (
    <div ref={ref} className="absolute inset-0 h-full w-full overflow-hidden">
      {/* Grille de carreaux */}
      <DivGrid
        key={`base-${rippleKey}`}
        rows={rows}
        cols={cols}
        cellSize={cellSize}
        clickedCell={clickedCell}
        onCellClick={(row, col) => {
          setClickedCell({ row, col });
          setRippleKey((k) => k + 1);
        }}
      />

      {/* Brouillard flottant */}
      <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-black/20 blur-3xl animate-float"
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              top: `${20 + i * 10}%`,
              left: `${15 + i * 10}%`,
              opacity: 0.1 + i * 0.05,
            }}
          />
        ))}
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(15px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

const DivGrid = ({ rows = 20, cols = 50, cellSize = 24, clickedCell = null, onCellClick = () => {} }) => {
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, idx) => idx), [rows, cols]);
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: "auto",
  };

  return (
    <div style={gridStyle} className="relative z-[3]">
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        return (
          <div
            key={idx}
            className="cell border-[0.25px] opacity-20 hover:opacity-60"
            style={{ backgroundColor: "rgba(20,20,20,0.1)", borderColor: "#3f3f46" }}
            onClick={() => onCellClick?.(rowIdx, colIdx)}
          />
        );
      })}
    </div>
  );
};

export default BackgroundRippleEffect;
