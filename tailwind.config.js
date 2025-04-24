export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prime-dark': '#1A1A1A', // Very dark gray
        'second-dark': '#292929', // Dark gray
        'third-dark': '#333333', // Medium gray
        'prime': '#4D4D4D', // Lighter gray
        'second': '#B3B3B3', // Light gray
        'third': '#E6E6E6', // Very light gray
        'light-gray': '#F2F2F2', // Near white
        'bgprime': '#FFFFFF' // White
      },
      fontFamily: {
        'prata': ['Poppins', 'serif', 'Georgia', 'Times New Roman'],
        'lato': ['Glacial Indifference', 'serif', 'Georgia', 'Times New Roman'],
      },
    },
  },
  plugins: [],
}