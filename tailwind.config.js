module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(5deg)' },
          '20%': { transform: 'rotate(-3deg)' },
          '30%': { transform: 'rotate(5deg)' },
          '40%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
      variants: {
        extend: {
            display: ["group-hover"],
        },
    },
    },
  },
  plugins: [],
}