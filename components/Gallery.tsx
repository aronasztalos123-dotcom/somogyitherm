'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  { label: 'Fűtésszerelés', sub: 'Padlófűtés kiépítése', large: true },
  { label: 'Csőszerelés', sub: 'Vízelosztó rendszer', large: false },
  { label: 'Fürdőszoba', sub: 'Teljes felújítás', large: false },
  { label: 'Kazáncsere', sub: 'Modern kondenzációs', large: false },
  { label: 'Gázszerelés', sub: 'Gázvezeték kiépítés', large: false },
  { label: 'Padlófűtés', sub: 'Asztalt fektetés', large: false },
  { label: 'Radiátor', sub: 'Csere és beállítás', large: false },
  { label: 'Csőtörés', sub: 'Gyors javítás', large: false },
  { label: 'Felújítás', sub: 'Komplex projekt', large: false },
]

const pipeIcons = [
  <svg key="a" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full p-10 opacity-20">
    <path d="M8 32h48M32 8v48M16 16l32 32M48 16L16 48" />
    <circle cx="32" cy="32" r="8" />
  </svg>,
  <svg key="b" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full p-10 opacity-20">
    <path d="M8 20h20v24h8V20h20M8 44h48" />
    <circle cx="32" cy="32" r="4" />
  </svg>,
  <svg key="c" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full p-10 opacity-20">
    <rect x="12" y="12" width="40" height="40" rx="4" />
    <path d="M12 32h40M32 12v40" />
    <circle cx="32" cy="32" r="6" />
  </svg>,
]

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" ref={ref} className="py-24 md:py-32 bg-white relative">
      {/* Diagonal top transition from navy */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-navy" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Portfolio</span>
            <h2 className="section-title text-navy mt-2">
              Elvégzett munkáink
            </h2>
            <div className="w-14 h-1 bg-orange mt-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xs"
          >
            <p className="text-navy/45 text-sm leading-relaxed">
              Néhány elvégzett munkánk. Kérjen helyszíni felmérést és árajánlatot e-mailben.
            </p>
            <a
              href="mailto:somogyitherm@gmail.com"
              className="inline-flex items-center gap-2 text-orange text-sm font-semibold mt-3 hover:text-orange-dark transition-colors"
            >
              Ajánlatot kérek
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 + 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square overflow-hidden cursor-pointer"
              style={{
                background: `linear-gradient(135deg, #0a1628 0%, ${
                  i % 3 === 0 ? '#162542' : i % 3 === 1 ? '#0f2040' : '#1a2d50'
                } 100%)`,
              }}
            >
              {/* Icon pattern */}
              <div className="absolute inset-0 text-white/10">
                {pipeIcons[i % pipeIcons.length]}
              </div>

              {/* Orange dot accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-orange rounded-full opacity-60" />

              {/* Bottom progress bar on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-orange w-0 group-hover:w-full transition-all duration-500" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label — always visible, enhances on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <div className="font-display text-xl md:text-2xl text-white uppercase leading-tight transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  {item.label}
                </div>
                <div className="text-white/40 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <a
            href="mailto:somogyitherm@gmail.com"
            className="btn-primary inline-flex"
          >
            Kérjen árajánlatot
          </a>
        </motion.div>
      </div>
    </section>
  )
}
