/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ...(process.env.NODE_ENV === 'development'
      ? ['./src/**/*.{js,jsx,ts,tsx}']
      : ['./src/components/**/*.{js,jsx,ts,tsx}']),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
