/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ajuste conforme a estrutura do seu projeto
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--corDestaque)",
        lightColor: "var(--lightColor)",
      },
    },
  },
  plugins: [],
};
