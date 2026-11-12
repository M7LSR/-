/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './preview.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      opacity: {
        6: '0.06',
        7: '0.07',
        8: '0.08',
        12: '0.12',
        13: '0.13',
        15: '0.15',
        18: '0.18',
        22: '0.22',
        24: '0.24',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
        92: '0.92',
      },
      colors: {
        ink: {
          900: '#0A0A0A',
          800: '#111111',
          700: '#161616',
        },
        accent: {
          DEFAULT: '#FF5C00',
          soft: '#FF8A3D',
          dim: '#B34200',
        },
      },
      fontFamily: {
        sans: [
          '"PingFang SC"',
          '"HarmonyOS Sans SC"',
          '"Microsoft YaHei"',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 92, 0, 0.35)',
        'glow-sm': '0 0 18px rgba(255, 92, 0, 0.35)',
        shell: '0 40px 120px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        'toast-in': {
          from: { opacity: '0', transform: 'translateY(-12px) scale(.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { opacity: '.55' },
          '50%': { opacity: '1' },
        },
        'toast-bar': {
          from: { width: '100%' },
          to: { width: '0%' },
        },
      },
      animation: {
        'toast-in': 'toast-in .35s cubic-bezier(.2,.8,.2,1) both',
        'rise-in': 'rise-in .6s cubic-bezier(.2,.8,.2,1) both',
        breathe: 'breathe 3.2s ease-in-out infinite',
        'toast-bar': 'toast-bar 3s linear forwards',
      },
    },
  },
  plugins: [],
}