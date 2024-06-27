/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gilory: ['Gilory', 'sans-serif'],
        sans: ['Gilory', 'sans-serif'],
        strretch :['strretch sans','sans-serif'],
        // 'futura': ['futura', 'sans-serif'],
        // 'poppins': ['Poppins', 'sans-serif'],
        'emot': ['emotional', 'serif']
      },
      colors: {
        'primary': '#FF6E05'
      }
    },
  },
  plugins: [],
}

