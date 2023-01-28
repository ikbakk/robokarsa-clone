/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        amatic: ['var(--font-amatic)']
      },
      fontSize: {
        '6.5xl': '4rem'
      },
      animation: {
        'fade-in':
          'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
        'fade-out': 'fade-out 1s ease   both'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1'
          },
          to: {
            opacity: '0'
          }
        }
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
}
