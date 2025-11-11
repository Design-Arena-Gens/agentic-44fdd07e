/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f1115",
        text: "#e5e7eb",
        subtle: "#9ca3af",
        accent: "#f97316" /* orange-500 */,
      },
      backgroundImage: {
        'grid': "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
      boxShadow: {
        glow: "0 0 30px rgba(249, 115, 22, 0.25)",
      },
    },
  },
  plugins: [],
};
