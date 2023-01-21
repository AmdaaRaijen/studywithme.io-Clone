const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".animation-scroll": {
          animation:
            "6.73s linear 500ms 1 normal none running animation-1fh7g0a",
        },
      });
    }),
  ],
};
