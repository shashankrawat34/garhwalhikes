/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#184B44',
        'primary-dark': '#0f2f2a',
        'primary-light': '#2a6b60',
        'accent': '#ffffff',
        'accent-secondary': '#F5F5F5',
        'secondary': '#ffbe00',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
