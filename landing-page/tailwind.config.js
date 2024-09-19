/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'josefin': ['Josefin_San', 'sans-serif'],
      },
      screens: {
        'custom-xs':'360px',
        'custom-sm': '375px', // Custom screen for 344px width
        'custom-md': { 'min': '540px', 'max': '1024px' },
        'range-375-430': { 'min': '390px', 'max': '430px' },
        'range-1024-1366-h': { 'min': '1024px', 'raw': '(max-height: 1366px)' },
        'md-to-xl': { 'min': '1024px', 'max': '1280px' },
      },
    },
  },
  plugins: [],
};
