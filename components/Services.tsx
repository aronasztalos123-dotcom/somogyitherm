'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    number: '01',
    label: 'Rendszerek',
    title: 'Tervezés, javítás, karbantartás',
    desc: 'Víz, gáz és fűtési rendszerek teljes körű tervezése, javítása és rendszeres karbantartása. Csap cserétől a komplex rendszerek kiépítéséig.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    label: 'Felújítás',
    title: 'Fürdőszoba felújítás',
    desc: 'Teljes fürdőszoba átalakítás. Csövezéstől a csempézésig, komplex megoldással. Ízléses, tartós kivitelezés.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 10h18M3 14h18M10 10V6a2 2 0 012-2h0a2 2 0 012 2v4M5 20h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: '03',
    label: 'Sürgős',
    title: 'Csőtörés javítás',
    desc: 'Gyors reagálás csőtörés esetén. Minimális bontással, gyors, megbízható megoldással. Hívjon, és jövünk.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    number: '04',
    label: 'Korszerűsítés',
    title: 'Fűtési rendszer korszerűsítés',
    desc: 'Modern, energiatakarékos fűtési megoldások. Padlófűtés, kazáncsere, radiátorcseréktől a komplett rendszerekig.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 bg-cream relative">
      {/* Top diagonal cut from hero */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-navy" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Munkáink</span>
            <h2 className="section-title text-navy mt-2">
              Szolgáltatásaink
            </h2>
            <div className="w-14 h-1 bg-orange mt-4" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy/50 max-w-xs text-sm leading-relaxed"
          >
            Minden munkát személyesen vállal és felügyel Somogyi Csaba, 100% garanciával.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-navy/8 p-8 overflow-hidden hover:shadow-2xl hover:shadow-navy/10 transition-all duration-400 hover:-translate-y-1.5"
            >
              {/* Orange left border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange transform scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

              {/* Big ghost number */}
              <div className="absolute -right-3 -top-3 font-display text-[7rem] leading-none text-navy/4 select-none pointer-events-none">
                {service.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-orange/10 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-semibold text-orange/50 tracking-[0.18em] uppercase bg-orange/5 px-3 py-1">
                    {service.label}
                  </span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl text-navy uppercase leading-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-navy/55 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                  <a href="tel:+36705732050">Felhívom</a>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
