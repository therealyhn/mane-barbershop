export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prime-dark': '#221B24',
        'second-dark': '#2E2431',
        'third-dark': '#332940',
        'prime': '#7D3C98',
        'second': '#9A79B1',
        'third': '#BCA2D5',
        'light-gray': '#E2DCEC',
        'bgprime': '#FAF6FC'
      },
      fontFamily: {
        'prata': ['Playfair Display', 'serif', 'Georgia', 'Times New Roman'],
        'lato': ['Baskervville', 'serif', 'Georgia', 'Times New Roman'],
      },
    },
  },
  plugins: [],
}