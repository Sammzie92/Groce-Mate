/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./images/*.{png,jpg,gif}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',

    },
    extend: {
      backgroundImage: {
        'body-image': "url('images/Image.png')"
      }
    },
  },
  plugins: [],
}

