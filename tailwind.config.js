/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "signup-bg": "url('assets/backgrounds/signup-screen.jpg')",
        "light-white": "rgba(255,255,255,0.18)",
      },
    },
  },
  plugins: [],
};
