const colors = require('tailwindcss/colors')

module.exports = {
  important: '#root',
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
      },
      minHeight: {
        '60vh': '60vh'
      },
      maxHeight: {
        '60vh': '60vh'
      }
    },
  },
  variants: {
  },
  plugins:
    [
      require("@tailwindcss/typography"),
      require('daisyui'),
  
    ],
  daisyui: {
    themes: [
      {
        'odevs': {                          /* your theme name */
            'primary' : '#0b3b59',           /* Primary color */
            'primary-focus' : '#08293e',     /* Primary color - focused */
            'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

            'secondary' : '#7eadbf',         /* Secondary color */
            'secondary-focus' : '#658a99',   /* Secondary color - focused */
            'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

            'accent' : '#06b6d4',            /* Accent color */
            'accent-focus' : '#0891b2',      /* Accent color - focused */
            'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

            'neutral' : '#3d4451',           /* Neutral color */
            'neutral-focus' : '#2a2e37',     /* Neutral color - focused */
            'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

            'base-100' : '#f9fafb',          /* Base color of page, used for blank backgrounds */
            'base-200' : '#f2f2f2',          /* Base color, a little darker */
            'base-300' : '#f5f5f5',          /* Base color, even more darker */
            'base-content' : '#1f2937',      /* Foreground content color to use on base color */

            'info' : '#2094f3',              /* Info */
            'success' : '#009485',           /* Success */
            'warning' : '#ff9900',           /* Warning */
            'error' : '#dc2626',             /* Error */
        },
      },
    ],
  },
};
