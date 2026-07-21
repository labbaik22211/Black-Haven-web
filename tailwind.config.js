module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bhGreen: "#2ecc71",
        bhBlue: "#3498db",
        bhBrown: "#8b5a2b"
      },
      fontFamily: {
        block: ["'Press Start 2P'", "cursive", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
}