/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(0, 94%, 66%)",
        "soft-blue": "hsl(231, 69%, 60%)",
        "grayish-blue": " hsl(229, 8%, 60%)",
        "verydark-blue": "hsl(229, 31%, 21%)",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
      },
      screens: {
        esm: "398px",
      },
    },
  },
  plugins: [],
};
