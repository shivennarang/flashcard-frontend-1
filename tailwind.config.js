
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      eduVIC: ['Edu VIC WA NT Beginner', 'sans-serif'],
      greyQo: ['Grey Qo', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      redditSans: ['Reddit Sans', 'sans-serif'],
      workSans: ['Work Sans', 'sans-serif'],
    }
  ,
  perspective: {
    1000: '1000px',
  },
  rotate: {
    'y-180': 'rotateY(180deg)',
  },
  backfaceVisibility: {
    hidden: 'hidden',
  }},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      }, ['responsive', 'hover']);
    }
  ],
}