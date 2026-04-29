import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#060f1c',
          light: '#264a78',
          dark: '#152b47',
          50: '#eef3fa',
        },
        brand: {
          orange: '#F97316',
          'orange-dark': '#EA580C',
        },
        surface: {
          light: '#F1F5F9',
        },
        ink: {
          DEFAULT: '#374151',
        },
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #060f1c 0%, #152b47 100%)',
        'gradient-orange': 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
        'gradient-hero': 'linear-gradient(145deg, #060f1c 0%, #152b47 60%, #0f1f35 100%)',
      },
      boxShadow: {
        'orange-glow': '0 0 40px rgba(249, 115, 22, 0.3)',
        'navy-glow': '0 0 40px rgba(6, 15, 28, 0.3)',
        'card': '0 4px 24px rgba(6, 15, 28, 0.08)',
        'card-hover': '0 12px 40px rgba(6, 15, 28, 0.16)',
      },
    },
  },
  plugins: [],
} satisfies Config
