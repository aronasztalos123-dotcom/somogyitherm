'use client'

import { motion } from 'framer-motion'

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  )
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Pipe grid background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pipes" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 40h80M40 0v80" stroke="white" strokeWidth="1" fill="none" />
              <circle cx="40" cy="40" r="5" stroke="white" strokeWidth="1" fill="none" />
              <circle cx="40" cy="40" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pipes)" />
        </svg>
      </div>

      {/* Orange accent — right triangle */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[45%] bg-orange/5"
        style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-[8%] bg-orange/15"
        style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />

      {/* Large watermark */}
      <div
        className="absolute right-0 bottom-0 font-display leading-none select-none pointer-events-none text-white/[0.025]"
        style={{ fontSize: 'clamp(8rem, 25vw, 22rem)', lineHeight: 1 }}
      >
        100%
      </div>

      {/* Orange vertical bar */}
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-orange/20 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-10">
            <span className="inline-flex items-center gap-2.5 bg-orange/15 border border-orange/20 text-orange px-4 py-2 text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              Budapest, elérhető 8:00-tól
            </span>
          </motion.div>

          {/* Main headline — stacked typographic treatment */}
          <motion.div variants={itemVariants}>
            <h1 className="font-display uppercase leading-[0.9] mb-2">
              <span
                className="block text-white"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 8rem)' }}
              >
                Megbízható
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="font-display uppercase leading-[0.9] mb-2">
              <span
                className="block text-orange"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 8rem)' }}
              >
                Víz, gáz
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="font-display uppercase leading-[0.9] mb-10">
              <span
                className="block text-white/30"
                style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)' }}
              >
                és fűtésszerelés
              </span>
            </h1>
          </motion.div>

          {/* Divider with location */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-orange" />
            <span className="text-white/40 text-sm font-medium tracking-widest uppercase">
              Somogyi Csaba e.v.
            </span>
          </motion.div>

          {/* Subline */}
          <motion.p
            variants={itemVariants}
            className="text-white/55 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          >
            100% kivitelezői garanciával. Csőtöréstől a teljes padlófűtés kiépítéséig, minden munkát ugyanolyan gondossággal végzünk.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+36705732050"
              className="btn-primary text-lg group"
            >
              <PhoneIcon />
              Felhívom
              <svg
                className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:somogyitherm@gmail.com"
              className="btn-outline text-lg"
            >
              Ajánlatot kérek
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 mt-14 pt-10 border-t border-white/10"
          >
            {[
              '100% kivitelezői garancia',
              'Gyors reagálás',
              'Helyszíni felmérés',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/40 text-sm">
                <svg className="w-4 h-4 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Görgessen</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
