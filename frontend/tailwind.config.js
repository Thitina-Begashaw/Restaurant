/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Include your root HTML file
    './src/**/*.{html,js,jsx,ts,tsx}', // Include all files in the `src` folder
  ],
  theme: {
    extend: {
      animation: {
        'spin-custom': 'spin360 25s linear infinite',
      },
      keyframes: {
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
