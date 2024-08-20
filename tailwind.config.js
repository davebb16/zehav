import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.5625rem',
        inherit: 'inherit',
      },
      colors: {
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

        background: {
          DEFAULT: 'rgb(var(--background) , <alpha-value> )',
          dimmed1: 'rgb(var(--background-dimmed1) , <alpha-value> )',
          border: 'rgb(var(--background-border) , <alpha-value> )',
        },
        scrollbarColor: {
          DEFAULT: 'var(--scrollbarColor)',
        },
        gray: {
          850: '#18212F',
        },
      },
      spacing: {
        'spacing': 'var(--spacing)',
        'inner-spacing': 'var(--inner-spacing)',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
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
  plugins: [],
}