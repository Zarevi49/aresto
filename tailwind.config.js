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
      'dark': '#1D1D1D',
      'yellow': '#E6EBAD'
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'heading': "DM Serif Display"
    },
    lineHeight: {
      '90': '90%',
      '110': '110%',
      '150': '150%',
    },
    letterSpacing: {
      '1.3px': '1.3px',
    },
    backgroundImage: {
      'gradient-primary-light': "linear-gradient(0deg, #fff 22%, #D3EDCC 20%)",
      'gradient-primary-yellow': "linear-gradient(0deg, #fff 26%, #E6EBAD 20%)",
      'gradient-yellow': "linear-gradient(0deg, #fff 9.4%, #E6EBAD 0%)"
    },
  },
  plugins: [],
}
