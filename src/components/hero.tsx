"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f7f7] text-[#692b3a]">
      {/* Background image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat bg-[url('/hero.webp')]"
        role="img"
        aria-label="Wedding celebration"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-full max-w-4xl flex-col items-center text-center"
        >
          {/* Bismillah */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            dir="rtl"
            className="mb-7 text-lg font-semibold sm:text-xl font-arabic"
          >
            بسم الله الرحمن الرحيم
          </motion.p>
          {/* Divider */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-[#692b3a]/40 sm:w-16" />
            <span className="text-xs">◇</span>
            <span className="h-px w-12 bg-[#692b3a]/40 sm:w-16" />
          </div>
          {/* Invitation */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mb-5 text-[10px] uppercase tracking-[0.28em] sm:text-xs sm:tracking-[0.35em]"
          >
            You are invited to celebrate the wedding of
          </motion.p>

          {/* Names */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1 }}
            className="font-script text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Ahmed<span className="mx-2 sm:mx-4">&amp;</span> Donia
          </motion.h1>

          {/* Arabic phrase */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            dir="rtl"
            className="mt-7 text-base sm:text-lg font-arabic space"
          >
             نشارككم اجمل لحظاتنا      
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            dir="rtl"
            className="mt-7 text-base sm:text-lg font-arabic space"
          > 
             و نحتفل معا ببداية حكاية جديدة
          </motion.p>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-7 flex items-center gap-4 sm:gap-8"
          >
            <div className="h-px w-14 bg-[#692b3a]/40 sm:w-24" />

            <div className="flex items-center gap-3 sm:gap-5">
              <span className="text-[10px] uppercase tracking-[0.25em] sm:text-xs">
                Oct
              </span>

              <span className="text-4xl font-serif leading-none sm:text-5xl">
                23
              </span>

              <span className="text-[10px] uppercase tracking-[0.25em] sm:text-xs">
                2026
              </span>
            </div>

            <div className="h-px w-14 bg-[#692b3a]/40 sm:w-24" />
          </motion.div>

          {/* Saturday */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-3 text-[10px] uppercase tracking-[0.35em] sm:text-xs"
          >
            Friday
          </motion.p>

          {/* Time */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-7 text-[12px] uppercase tracking-[0.35em] sm:text-xs"
          >
            8 PM TO 12 AM
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-14 flex flex-col items-center"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
