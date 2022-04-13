module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: '-.015em'
    },
    extend: {
      height: {
        'half-screen': '50vh'
      },
      animation: {
        'fadeIn-1': 'fade 1s linear',
        'fadeIn-3': 'fade 3s linear',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        }
      }
    },
  },
  plugins: [],
}
