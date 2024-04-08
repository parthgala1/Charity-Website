/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      utilities: {
        "clip-polygon": "clip-path-[polygon(10% 0, 100% 0, 100% 100%, 0 100%)]",
      },
    },
  },
  plugins: [require("daisyui")],
};
