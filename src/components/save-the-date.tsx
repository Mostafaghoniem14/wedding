"use client";

import { fadeIn, fadeUp, stagger, viewport } from "@/lib/section-motion";
import { motion, useReducedMotion } from "motion/react";

export default function SaveTheDate() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? fadeIn : fadeUp;

  return (
    <motion.section
      className="flex flex-col items-center text-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.h2
        className="mb-6 text-4xl leading-tight sm:text-5xl md:text-6xl"
        variants={reveal}
      >
        Save The Date!
      </motion.h2>
      <motion.div
        className="max-w-2xl space-y-4 px-2 text-base leading-7 sm:text-lg sm:leading-8"
        variants={reveal}
      >
        <p className="font-semibold">
          Hand in hand, heart to heart. The day our hearts become one Please
          join us in celebrating love and new beginnings as we step into our
          forever on our wedding day.
        </p>
      </motion.div>
    </motion.section>
  );
}
