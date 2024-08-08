/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        euclid:["euclid-flex"],
        nunito:["Nunito+Sans"],
      },
      backgroundImage:{
        'request-section':"url('/img/Rectangle 690.png')",
        'contact-section':"url('/img/geely.jpg')",
      }
    },

  },
  plugins: [],
}

