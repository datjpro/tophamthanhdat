"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Character({ char, index, total, progress }: CharacterProps) {
  // Compute start/end offset based on the character's relative position in the text
  // We add a soft range (0.2 width) for smoother fade transitions between characters
  const start = (index / total) * 0.8;
  const end = start + 0.2;

  // Map the scroll progress to opacity from 0.2 to 1
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block select-none">
      {/* Invisible placeholder for layout sizing */}
      <span className="opacity-0">{char}</span>
      {/* Absolute positioned animated character */}
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll position of the paragraph element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {characters.map((char, index) => {
        if (char === " ") {
          return (
            <span key={`space-${index}`} className="inline-block">
              &nbsp;
            </span>
          );
        }
        return (
          <Character
            key={`char-${index}`}
            char={char}
            index={index}
            total={characters.length}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}
