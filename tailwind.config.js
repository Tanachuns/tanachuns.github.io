/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: 'var(--c-sky)',
        sand: 'var(--c-sand)',
        mango: 'var(--c-mango)',
        sage: 'var(--c-sage)',
      },
    },
  },
  plugins: [],
}
