import React from "react";
import { motion } from "framer-motion";

const STAGGER = 0.035;

const TextRoll = ({ text, href }) => {
  const Wrapper = href ? "a" : "span"; // Render <a> if href provided

  return (
    <Wrapper
      href={href || undefined}
      className="relative inline-block overflow-hidden text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] transition-colors lg:text-5xl"
      style={{ lineHeight: 0.75 }}
    >
      <motion.span
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden"
      >
        {/* First layer (default text) */}
        <div className="text-xl font-[font2] ">
          {text.split("").map((l, i) => {
            const delay = STAGGER * i;
            return (
              <motion.span
                key={i}
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" },
                }}
                transition={{
                  ease: "easeInOut",
                  delay,
                }}
                className="inline-block"
              >
                {l}
              </motion.span>
            );
          })}
        </div>

        {/* Second layer (animated on hover) */}
        <div className="absolute inset-0 text-lg font-[font2]">
          {text.split("").map((l, i) => {
            const delay = STAGGER * i;
            return (
              <motion.span
                key={i}
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{
                  ease: "easeInOut",
                  delay,
                }}
                className="inline-block"
              >
                {l}
              </motion.span>
            );
          })}
        </div>
      </motion.span>
    </Wrapper>
  );
};

export default TextRoll;
