/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px rgba(76, 29, 149, 0.25)'
      },
      backgroundImage: {
        dots: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};
