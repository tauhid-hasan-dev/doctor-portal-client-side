/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3A4256",
          "base-100": "#F5F0F5",
        },
      },
    ],
  },
  theme: {
    extend: {
      /* backgroundImage: {
        bg: "url('../../../assets/images/bg.png')",
      } */
    },
  },
  plugins: [require("daisyui")],
}
