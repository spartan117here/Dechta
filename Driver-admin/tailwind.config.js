/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- THIS IS THE MOST IMPORTANT LINE
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: { 
           gold: '#facc15',
           dark: '#0f172a',
           cyan: '#0ceded', 
           success: '#22c55e',
           danger: '#ef4444',
           warning: '#f97316'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}