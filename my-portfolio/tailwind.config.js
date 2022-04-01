module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'waves': '#32303B',
        'primary': '#F7CCAC',
        'fundo': '#3A3845',
        'darker': '#826F66',
      },
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}
