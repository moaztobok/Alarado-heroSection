/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:"class",
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'min': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    fontFamily:{
      'poppins':['poppins','sans-serif','sans-serif'],
      'lato':['lato','sans-serif','sans-serif'],
    },
    colors:{
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      'Whity':'#FFFFFF',
      'Greeny':'#4CA154',
      'Bluey':'#2A4DD0',
      'MyDarkGray':'#909193',
      'MyGrey': '#F2F9FE',
      'MyDarkBlue': '#111729',
      'BlueIshGrey': '#223344',
    },
    extend: {
      keyframes:{
        slideIn: {
          '0%':{transform: 'translateX(100%)'},
          '100%':{transform: 'translateX(0%)'},
        }
      },
      animation:{
        slideIn: 'slideIn 0.3s ease-in-out'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
