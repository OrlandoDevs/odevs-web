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
        violet: colors.violet

      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
