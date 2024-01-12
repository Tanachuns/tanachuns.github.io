/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--c-base)',
        wash: 'var(--c-wash)',
        warning: 'var(--c-warning)',
        danger: 'var(--c-danger)',
      },
    },
  },
  plugins: [],
}
