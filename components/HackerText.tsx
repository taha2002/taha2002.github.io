"use client"
import React, { useState, useEffect, useRef } from 'react';

interface HackerTextProps {
  text: string;
  className?: string;
  speed?: number;
}

const HackerText: React.FC<HackerTextProps> = ({ text, className, speed = 40 }) => {
  const [displayedText, setDisplayedText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&[]{}<>";
  const intervalRef = useRef<any>(null);

  const startScramble = () => {
    setIsHovering(true);
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayedText(prev =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, speed);
  };

  // Trigger once on mount for effect
  useEffect(() => {
    startScramble();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <span
      className={`${className} cursor-default`}
      onMouseEnter={startScramble}
    >
      {displayedText}
    </span>
  );
};

export default HackerText;