/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        skyTop: '#D8EEFF',
        skyBottom: '#9BCDF8',
        primaryBlue: '#0050D6',
        secondaryBlue: '#326BF3',
        photoOverlay: '#4B9FEA',
        surfaceDark: '#0F172A',
        onSurface: '#151C27',
      },
    },
  },
  plugins: [],
};
