'use client'

import Image from 'next/image'
import { Clock, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { fadeIn, fadeUp, stagger, viewport } from '@/lib/section-motion'

export default function TheDetails() {
  const reduceMotion = useReducedMotion()
  const reveal = reduceMotion ? fadeIn : fadeUp

  return (
    <motion.section
      className="flex flex-col items-center text-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.h2
        className="mb-3 text-4xl leading-tight sm:text-5xl md:text-6xl"
        variants={reveal}
      >
        The Details
      </motion.h2>
      <motion.p
        className="mb-9 text-xs uppercase tracking-[0.2em] sm:mb-10 sm:text-sm"
        variants={reveal}
      >
        Everything you need to know
      </motion.p>

      <motion.div
        className="relative mx-auto w-full max-w-[22rem] sm:max-w-md"
        variants={reveal}
      >
        <Image
          src="/royal/images/ornate-badge.webp"
          alt=""
          width={480}
          height={640}
          className="h-auto w-full"
          aria-hidden
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 pb-8 pt-12 sm:px-14 sm:pb-10 sm:pt-16">
          <div className="flex flex-1 flex-col items-center justify-center gap-5 sm:gap-6">
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.25em] sm:text-xs">
                Location
              </p>
              <p className="text-lg leading-tight sm:text-xl md:text-2xl">
                Grand View hall
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm leading-snug sm:text-base md:text-lg">
              <Clock
                className="size-4 shrink-0 sm:size-5"
                strokeWidth={1.5}
                aria-hidden
              />
              <span>From 8:00 PM to 12:00 AM</span>
            </div>
          </div>

          <Image
            src="/royal/images/venue-sketch.webp"
            alt="Venue sketch"
            width={280}
            height={200}
            className="mt-3 h-auto w-4/5 max-w-[190px] object-contain sm:mt-4 sm:max-w-[250px]"
          />
        </div>
      </motion.div>

      <motion.a
        href="https://maps.app.goo.gl/eRAbucrd9DRoXGWf9"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#b8944e]/60 bg-[#fffaf3]/80 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#6f5630] shadow-sm transition hover:border-[#b8944e] hover:bg-[#fff4df] focus:outline-none focus:ring-2 focus:ring-[#b8944e]/45 focus:ring-offset-2 focus:ring-offset-[#faf6f0] sm:text-base"
        variants={reveal}
        aria-label="Open Evento halls location in Google Maps"
      >
        <MapPin className="size-4 shrink-0 sm:size-5" strokeWidth={1.7} />
        <span>Open Google Maps</span>
      </motion.a>
    </motion.section>
  );
}
