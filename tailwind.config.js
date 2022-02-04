const colors = require('tailwindcss/colors')

module.exports = {
  content: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily:{ 
      'Poppins': ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        blueGray: colors.slate,
        coolGray: colors.gray,
        warmGray: colors.stone,
        cyan: colors.cyan,
        trueGray: colors.neutral,
        violet: colors.violet,
        tPalette1: '#bfbfbf',
        tPalette2: '#0b3b59',
        tPalette3: '#092b40',
        tPalette4: '#7eadbf',
        tPalette5: '#f2f2f2',

      },
    },
  },
  variants: {
  },
  plugins:
    [require("@tailwindcss/typography")],
};
