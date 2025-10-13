import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F2F5',
          100: '#C2DEE6',
          200: '#9BCBD8',
          300: '#74B8CA',
          400: '#4DA5BC',
          500: '#051D2E',
          600: '#041826',
          700: '#03131E',
          800: '#020E16',
          900: '#01090E',
          950: '#000407',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#FEF9ED',
          100: '#FDEFD0',
          200: '#FBE5B3',
          300: '#F9DB96',
          400: '#F6D17D',
          500: '#F2C864',
          600: '#EFB93C',
          700: '#D19520',
          800: '#A67419',
          900: '#7A5512',
        },
        beige: {
          50: '#FEFDFB',
          100: '#FDFBF7',
          200: '#FAF7F0',
          300: '#F5F1E8',
          400: '#F0EBE0',
          500: '#E9ECDD',
          600: '#D4D7C8',
          700: '#B8BBA8',
          800: '#9A9D88',
          900: '#7C7F6A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'dropdown-enter': 'dropdownEnter 0.2s ease-out',
        'stagger-fade-in': 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-bounce': 'scaleBounce 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dropdownEnter: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px) scale(0.95)',
            filter: 'blur(1px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0px)'
          },
        },
        scaleBounce: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config