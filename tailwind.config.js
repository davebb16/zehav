import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,tsx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter:
          'Inter,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
        lucida:
          'Lucida Grande,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
        secular:
          'Secular One,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      },
      colors: {
        accent: {
          DEFAULT: 'rgb(var(--accent) , <alpha-value> )',
        },
        background: {
          DEFAULT: 'rgb(var(--background) , <alpha-value> )',
          dimmed1: 'rgb(var(--fbackground-dimmed1) , <alpha-value> )',
          dimmed2: 'rgb(var(--background-dimmed2) , <alpha-value> )',
          border: 'rgb(var(--background-border) , <alpha-value> )',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary) , <alpha-value> )',
          foreground: 'rgb(var(--secondary-foreground) , <alpha-value> )',
          hover: 'rgb(var(--secondary-hover) , <alpha-value> )',
          border: 'rgb(var(--secondary-border) , <alpha-value> )',
        },
        headerColor: 'rgb(var(--headerColor) , <alpha-value> )',
        footerColor: 'rgb(var(--footerColor) , <alpha-value> )',
        foreground: {
          DEFAULT: 'rgb(var(--foreground) , <alpha-value> )',
          dimmed1: 'rgb(var(--foreground-dimmed1) , <alpha-value> )',
          dimmed2: 'rgb(var(--foreground-dimmed2) , <alpha-value> )',
          dimmed3: 'rgb(var(--foreground-dimmed3) , <alpha-value> )',
          dimmed4: 'rgb(var(--foreground-dimmed4) , <alpha-value> )',
          dimmed5: 'rgb(var(--foreground-dimmed5) , <alpha-value> )',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary) , <alpha-value> )',
          hover: 'rgb(var(--primary-hover) , <alpha-value> )',
          foreground: 'rgb(var(--primary-foreground) , <alpha-value> )',
        },

        scrollbarColor: {
          DEFAULT: 'var(--scrollbarColor)',
        },

        field: {
          DEFAULT: 'var(--field)',
        },
      },
      spacing: {
        'spacing': 'var(--spacing)',
        'inner-spacing': 'var(--inner-spacing)',
        'text-gap': 'var(--textGap)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      content: {
        empty: '""',
      },
      backgroundImage: {
        'repeating-magen': 'var(--repeating-magen)',
        'accentBorderGradient': 'var(--accentBorderGradient);',
      },
      content: {
        empty: '""',
      },
    },
    screens: {
      'xxs': '390px',
      'xs': '500px',
      ...defaultTheme.screens,
      '3xl': '1750px',
      '4xl': '1950px',
      '5xl': '2150px',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
