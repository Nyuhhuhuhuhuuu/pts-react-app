/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-teal": "#008080",
        "light-teal": "#b2d8d8",
        "lm-teal": "#66b2b2",
        "lm-teal-hover": "#006666",
      },
    },
  },
  plugins: [],
};
