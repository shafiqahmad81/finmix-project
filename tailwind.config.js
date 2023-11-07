/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green':{
          DEFAULT:'#2DCC89',
          'status':'#54CC8B',
          'gradient':'#46CDA2',
          'gradient-light':'#48DD5F',
        },
        'dark':{
          DEFAULT:'#000077',
          'primary':'#2D405A',
          'secodary':'#56606D',
          '500':'#79828D',
        },
        'sky':'#DBF5E7',
        'gray':{
          DEFAULT:'#C4CEFE',
          'light':'#E8EFF6',
          '50':'#F2F6FA',
        },
        'orange':{
          DEFAULT:'#FFB13C',
          'gradient':'#F7C01D',
          'gradient-light':'#FF6C39',
        },
        'red':'#FF5050',
        'blue':{
          DEFAULT:'#46B0FE',
          'gradient':'#4465FF',
        },
        'blue-light':{
          DEFAULT:'#5DE8FF',
          'gradient':'#2DA9E7',
        },

      },
    },
  },
  plugins: [],
}

