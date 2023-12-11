/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sea: 'var(--c-sea)',
        beige: 'var(--c-beige)',
        mango: 'var(--c-mango)',
        sage: 'var(--c-sage)',
      },
    },
  },
  plugins: [],
}
