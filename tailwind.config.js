/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-light': '#D3EDCC',
      'primary': '#5B9852',
      'white': '#fff',
      'dark': '#1D1D1D'
    },
    fontFamily: {
      'heading': "DM Serif Display"
    },
    backgroundImage: {
      'gradient-primary-light': "linear-gradient(0deg, #fff 22%, #D3EDCC 20%)"
    }
  },
  plugins: [],
}
