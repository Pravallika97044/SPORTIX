/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#050714',
        darkCard: '#0B0F2B',
        darkBorder: 'rgba(255, 255, 255, 0.08)',
        stamsBlue: '#2563EB',
        stamsPurple: '#7C3AED',
        stamsNeonBlue: '#00F2FE',
        stamsNeonGreen: '#4ADE80',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 15px rgba(37, 99, 235, 0.3)',
        'neon-purple': '0 0 15px rgba(124, 58, 237, 0.3)',
        'neon-green': '0 0 15px rgba(74, 222, 128, 0.3)',
      }
    },
  },
  plugins: [],
}
