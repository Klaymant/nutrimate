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
  error: {
    DEFAULT: '#e05a42',
    dark: '#e73d1f',
  },
  success: {
    DEFAULT: '#0eb944',
  },
  warning: {
    DEFAULT: '#f5a623',
  }
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
        error: COLORS["error"],
        success: COLORS["success"],
        warning: COLORS["warning"],
      },
    },
  },
  plugins: [],
}
