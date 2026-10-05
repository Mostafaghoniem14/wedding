
"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { fadeIn, fadeUp, stagger, viewport } from "@/lib/section-motion";

const TARGET = new Date("2026-10-23T20:30:00+03:00");

const pad = (n: number) => String(n).padStart(2, "0");

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();

  if (diff <= 0) return [0, 0, 0, 0];

  const s = Math.floor(diff / 1000);

  return [
    Math.floor(s / 86400),
    Math.floor((s % 86400) / 3600),
    Math.floor((s % 3600) / 60),
    s % 60,
  ];
}

const labels = ["days", "hours", "minutes", "seconds"];

export default function Countdown() {
  // ثابت أثناء SSR عشان الـ server والـ client يطلعوا نفس الـ HTML
  const [time, setTime] = useState([0, 0, 0, 0]);

  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? fadeIn : fadeUp;

  useEffect(() => {
    // نحسب الوقت الحقيقي بعد ما component يركب على الـ client
    setTime(getTimeLeft());

    const id = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.h2
        className="mb-7 text-4xl leading-tight sm:text-5xl md:text-6xl"
        variants={reveal}
      >
        Countdown
      </motion.h2>

      <motion.div
        className="grid w-full max-w-2xl grid-cols-4 items-start gap-2 sm:gap-4"
        variants={stagger}
      >
        {time.map((val, i) => (
          <motion.div
            key={labels[i]}
            className="relative flex min-w-0 flex-col items-center"
            variants={reveal}
          >
            <h3 className="font-secondary text-3xl font-light leading-none tabular-nums sm:text-5xl md:text-6xl lg:text-7xl">
              {pad(val)}
            </h3>

            {i < labels.length - 1 && (
              <span
                className="absolute -right-[0.45rem] top-0 font-secondary text-3xl font-light leading-none sm:-right-3 sm:text-5xl md:-right-4 md:text-6xl lg:text-7xl"
                aria-hidden
              >
                :
              </span>
            )}

            <span className="mt-2 text-[9px] uppercase tracking-[0.16em] sm:text-[10px] md:text-xs md:tracking-[0.2em]">
              {labels[i]}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

