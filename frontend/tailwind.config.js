/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Include your root HTML file
    './src/**/*.{html,js,jsx,ts,tsx}', // Include all files in the `src` folder
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
