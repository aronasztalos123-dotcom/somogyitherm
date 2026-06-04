'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  { label: 'Fűtésszerelés', sub: 'Padlófűtés kiépítése', img: 'http://somogyitherm.hu/wp-content/uploads/2022/10/1667148088400-1024x1024.jpg' },
  { label: 'Csőszerelés', sub: 'Vízelosztó rendszer', img: 'http://somogyitherm.hu/wp-content/uploads/2022/10/1667148088413-Nagy-1024x1024.jpeg' },
  { label: 'Fürdőszoba', sub: 'Teljes felújítás', img: 'http://somogyitherm.hu/wp-content/uploads/2022/10/1667148088465-1024x1024.jpg' },
  { label: 'Kazáncsere', sub: 'Modern kondenzációs', img: '/assets/Kazáncsere.webp' },
  { label: 'Gázszerelés', sub: 'Gázvezeték kiépítés', img: '/assets/Gázszerelés.jpg' },
  { label: 'Padlófűtés', sub: 'Csőhálózat fektetés', img: '/assets/Padlófűtés.webp' },
  { label: 'Radiátor', sub: 'Csere és beállítás', img: 'http://somogyitherm.hu/wp-content/uploads/2023/04/1681056716113-1.jpg' },
  { label: 'Csőtörés', sub: 'Gyors javítás', img: 'http://somogyitherm.hu/wp-content/uploads/2022/08/20220702_084839_HDR.jpg' },
  { label: 'Felújítás', sub: 'Komplex projekt', img: '/assets/Felújítás.jpg' },
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
              className="group relative aspect-square overflow-hidden cursor-pointer bg-navy-light"
            >
              {/* Real photo */}
              <img
                src={item.img}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

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
