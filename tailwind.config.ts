import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          light: '#0f2040',
          medium: '#162542',
          deep: '#060e1a',
        },
        orange: {
          DEFAULT: '#e8612c',
          dark: '#c94e1f',
          light: '#ff7a42',
        },
        cream: '#f8f4ef',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'pipe-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='white' stroke-width='0.5' fill='none' opacity='0.08'/%3E%3Ccircle cx='30' cy='30' r='3' stroke='white' stroke-width='0.5' fill='none' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
export default config
