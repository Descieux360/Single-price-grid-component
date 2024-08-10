/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**{html,js}"],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'backgroundColor' : '#e6eff6',
        'lightCyan' : '#4abebd',
        'cyan': 'hsl(179, 62%, 43%)',
        'brightYellow': 'hsl(71, 73%, 54%)',
        'lightGrey':'hsl(204, 43%, 93%)',
        'grayishBlue':'hsl(218, 22%, 67%)',
      },
    },
  },
  plugins: [],
}

