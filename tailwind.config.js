/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans'],
      },
      colors: {
        primary: '#FF5733',
      },
      gradientExample: {
        'gradient-to-br': 'linear-gradient(to bottom right, #FF5733, #FFCC33)', // Your gradient colors
      },
      fontSize: {
        '3xl': '1.875rem', // Customize with your desired font size
      },
    },
  },
  plugins: [],
}


