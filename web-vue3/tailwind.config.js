module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    zIndex: {
      '999': 999
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#db9e3f'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
