/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          primary: "#f5f6f6",
          secondary: "#e6e7e7",
          dark:"#111212",
          accent: "#5b5c5c",
          neutral: "#3d3e3e",
          "base-100": "#ffffff",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      "night",
      "light"
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
