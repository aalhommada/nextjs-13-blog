/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [{
    pattern: /hljs+/,
  }],
  theme: {
    extend: {
      hljs: {
        theme: 'stackoverflow-dark',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-highlightjs')
  ],
}
