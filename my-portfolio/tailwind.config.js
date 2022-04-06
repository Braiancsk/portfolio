module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'waves': '#32303B',
        'primary': '#F7CCAC',
        'fundo': '#3A3845',
        'darker': '#826F66',
        'light-bg': '#3A3845',
        'light-text': '#1A132F',
        'light-bg': '#F7E2E2',
        'light-btn': '#32303B',
        'light-btn-hover': '#5B7DB1',
      },
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}
