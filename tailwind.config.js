/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '860': '860px',
      },
      colors: {
        'dark-navy': '#020c1b',
        'navy': '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'dark-slate': '#495670',
        'slate': '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'white': '#e6f1ff',
        'green': '#64ffda',
        'green-tint': 'rgba(100, 255, 218, 0.1)',
        'pink': '#f57dff',
        'blue': '#57cbff',
      },
      fontFamily: {
        'sans': ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', '-apple-system', 'system-ui', 'sans-serif'],
        'mono': ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      fontSize: {
        'xs': '13px',
        'sm': '15px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        'xxl': '22px',
        'h2': ['clamp(40px, 8vw, 80px)', {
          lineHeight: '1.1'
        }],
        'heading': ['clamp(26px, 5vw, 32px)', {
          lineHeight: '1.1'
        }],
        'ordinal': ['clamp(16px, 3vw, 20px)', {
          lineHeight: '1.1'
        }]
      },
      boxShadow: {
        'base': '3px 3px 0 0 #64ffda',
        'mobileMenu': '-10px 0px 30px -15px rgba(2, 12, 27, 0.7)'
      },
      transitionTimingFunction: {
        'ham-main': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        'ham-main-active': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeOutUp: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-100%)'
          }
        },
      },
      animation: {
        'fadeInDown': 'fadeInDown 250ms ease-in-out 1',
        'fadeOutUp': 'fadeOutUp 250ms ease-in-out 1 forwards'
      },
    },
  },
  plugins: [],
}