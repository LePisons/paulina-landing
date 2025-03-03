/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-pink': {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#fad0d9',
          300: '#f7aabb',
          400: '#f27a96',
          500: '#e84c74',
          600: '#d42e5b',
          700: '#b21e47',
          800: '#951c3d',
          900: '#7d1c38',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};