/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#449CF4',
          100: '#F6F9FE'
        },
        gray: {
          100: '#F5F5FC',
          300: '#E4E6F1'
        },
        'accent-cyan': '#68C2E9',
        'accent-cyan-hover': '#4B97B8',
        primary: '#4368E0',
        'block-bg': '#D9E7FF'
      },
    },
  },
  plugins: [],
}

