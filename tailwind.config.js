const COLORS = {
  'cornflower-blue': {
    DEFAULT: '#6495ED',
  },
  'mint-green': {
    DEFAULT: '#48CFB7',
  },
  'cream': {
    DEFAULT: '#FFFCF6',
    dark: '#e5e2dd',
  },
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: COLORS["cornflower-blue"],
        secondary: COLORS["mint-green"],
        background: COLORS["cream"],
      }
    },
  },
  plugins: [],
}
