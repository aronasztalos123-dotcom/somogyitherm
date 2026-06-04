'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contactItems = [
  {
    label: 'Telefon',
    value: '+36-70-573-2050',
    href: 'tel:+36705732050',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    ),
  },
  {
    label: 'E-mail',
    value: 'somogyitherm@gmail.com',
    href: 'mailto:somogyitherm@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Nyitvatartás',
    value: 'Hétfő-Szombat, 8:00-tól',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Helyszín',
    value: 'Budapest',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="bg-navy relative overflow-hidden">
      {/* Top diagonal */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="contact-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-dots)" />
        </svg>
      </div>

      {/* Orange right panel accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[42%] bg-orange/[0.04] hidden lg:block"
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-0">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Contact info */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              Elérhetőség
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-title text-white mt-2 mb-3"
            >
              Kapcsolat
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-14 h-1 bg-orange mb-10 origin-left"
            />

            <div className="space-y-5">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 bg-orange/10 flex items-center justify-center text-orange flex-shrink-0 group-hover:bg-orange group-hover:text-white transition-all duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/30 text-[10px] uppercase tracking-[0.18em] mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-orange transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-orange relative overflow-hidden p-10 md:p-12">
              {/* Decorative circles */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/10 rounded-full" />

              <div className="relative z-10">
                <div className="font-display text-4xl md:text-5xl text-white uppercase leading-tight mb-4">
                  Ingyenes árajánlat
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-8">
                  Írjon e-mailt vagy hívjon fel. Gyorsan válaszolunk, elvégezzük a helyszíni felmérést, és átlátható árajánlatot adunk.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+36705732050"
                    className="flex items-center justify-center gap-2 bg-white text-orange px-6 py-4 font-semibold text-base hover:bg-white/90 transition-colors active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    </svg>
                    Felhívom most
                  </a>
                  <a
                    href="mailto:somogyitherm@gmail.com"
                    className="flex items-center justify-center gap-2 bg-black/15 border border-white/20 text-white px-6 py-4 font-semibold text-base hover:bg-black/25 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Ajánlatot kérek e-mailben
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white/70 text-sm">100% kivitelezői garancia minden munkára</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 border-t border-white/8 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <a href="#" className="font-display text-2xl text-white/40 hover:text-white/60 transition-colors">
            Somogyi<span className="text-orange/50">Therm</span>
          </a>
          <span className="text-white/25 text-sm text-center">
            &copy; {new Date().getFullYear()} SomogyiTherm, Somogyi Csaba e.v. Budapest
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+36705732050" className="text-white/25 hover:text-white/50 text-sm transition-colors">
              +36-70-573-2050
            </a>
            <a href="mailto:somogyitherm@gmail.com" className="text-white/25 hover:text-white/50 text-sm transition-colors">
              somogyitherm@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
