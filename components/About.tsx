'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const trustPoints = [
  {
    title: 'Szakma és hivatás',
    desc: 'A SomogyiTherm számára minden munka, legyen az egy csap csere vagy teljes padlófűtés kiépítése, ugyanolyan gondossággal történik.',
  },
  {
    title: 'Személyes felelősség',
    desc: 'Somogyi Csaba személyesen felügyeli és garantálja minden elvégzett munkát. Nem küldünk alvállalkozót.',
  },
  {
    title: 'Helyszíni felmérés',
    desc: 'Minden munka helyszíni felméréssel kezdődik. Pontos, átlátható árajánlat, meglepetések nélkül.',
  },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Hexagon background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" x="0" y="0" width="56" height="97" patternUnits="userSpaceOnUse">
              <polygon
                points="28,3 52,17 52,45 28,59 4,45 4,17"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
              <polygon
                points="28,59 52,73 52,101 28,115 4,101 4,73"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>

      {/* Orange left accent bar */}
      <div className="absolute left-0 top-16 bottom-16 w-1 bg-orange" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              Rólunk
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-title text-white mt-2 mb-3"
            >
              Szakma és hivatás
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-14 h-1 bg-orange mb-8 origin-left"
            />

            <div className="space-y-6">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <svg className="w-6 h-6 text-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{point.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <a href="tel:+36705732050" className="btn-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Felhívom
              </a>
            </motion.div>
          </div>

          {/* Right: Guarantee badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, rotate: -6 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-orange/15"
              />

              {/* Middle ring */}
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full border border-orange/25 flex items-center justify-center relative">
                {/* Rotating text ring */}
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 240 240" className="w-full h-full">
                    <defs>
                      <path
                        id="circle"
                        d="M 120,120 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                      />
                    </defs>
                    <text fill="rgba(232,97,44,0.35)" fontSize="10" fontWeight="600" letterSpacing="8" fontFamily="inherit">
                      <textPath href="#circle">
                        SOMOGYITHERM · BUDAPEST · MEGBÍZHATÓ SZAKEMBER ·
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Inner badge */}
                <div className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-orange/8 border border-orange/20 flex flex-col items-center justify-center text-center px-6 relative z-10">
                  <div
                    className="font-display text-orange leading-none"
                    style={{ fontSize: 'clamp(3rem, 10vw, 5rem)' }}
                  >
                    100%
                  </div>
                  <div className="w-10 h-px bg-orange/50 my-2" />
                  <div className="font-display text-white text-xl md:text-2xl uppercase tracking-wider leading-tight">
                    Kivitelezői
                  </div>
                  <div className="font-display text-white text-xl md:text-2xl uppercase tracking-wider leading-tight">
                    Garancia
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
