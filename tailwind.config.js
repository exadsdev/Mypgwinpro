/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/lib/**/*.{js,jsx}",
    "./src/content/**/*.{js,jsx,json}"
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 0 1px rgba(34, 211, 238, 0.18), 0 0 32px rgba(34, 211, 238, 0.12)"
      },
      backgroundImage: {
        "radial-dark":
          "radial-gradient(1200px circle at 10% 10%, rgba(34,211,238,0.12), transparent 55%), radial-gradient(900px circle at 90% 30%, rgba(168,85,247,0.12), transparent 55%), radial-gradient(700px circle at 50% 90%, rgba(239,68,68,0.10), transparent 55%)"
      }
    }
  },
  plugins: []
};
