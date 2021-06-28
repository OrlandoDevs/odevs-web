const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {fontFamily:{
    sans: 'Poppins',
  },
    container: {
      center: true,
    },
    extend: {
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        warmGray: colors.warmGray,
        cyan: colors.cyan,
        trueGray: colors.trueGray,
        violet: colors.violet,
        tPalette1: '#bfbfbf',
        tPalette2: '#0b3b59',
        tPalette3: '#092b40',
        tPalette4: '#7eadbf',
        tPalette5: '#f2f2f2'

      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
