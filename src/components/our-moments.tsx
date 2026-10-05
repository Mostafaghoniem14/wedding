"use client";

import { fadeIn, fadeUp, stagger, viewport } from "@/lib/section-motion";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const momentImages = [
  "/moments/11.jpg",
  "/moments/22.jpg",
  "/moments/33.jpg",
  "/moments/44.jpg",
  "/moments/55.jpg" ,
  "/moments/66.jpg"
];

export default function OurMoments() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? fadeIn : fadeUp;
  const galleryItems = reduceMotion
    ? momentImages
    : [...momentImages, ...momentImages];

  return (
    <motion.section
      className="flex w-full flex-col items-center overflow-hidden text-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.h2
        className="mb-8 text-4xl leading-tight sm:text-5xl md:text-6xl"
        variants={reveal}
      >
        Our Moments
      </motion.h2>

      <motion.div className="relative w-full" variants={reveal}>
        <motion.div
          className={
            reduceMotion
              ? "grid grid-cols-2 justify-items-center gap-4 px-4 sm:grid-cols-3 sm:gap-5"
              : "flex w-max gap-4 px-4 sm:gap-5 sm:px-6"
          }
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 34,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
        >
          {galleryItems.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative flex aspect-[2/3] w-64 overflow-hidden rounded-sm"
              aria-hidden={i >= momentImages.length}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="256px"
                quality={100}
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
