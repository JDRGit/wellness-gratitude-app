module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}