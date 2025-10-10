/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./admin/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bebas: ['"Bebas Neue"', 'cursive'],
        mont: ['"Montserrat"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans : ["poppins", "sans-serif"],
        fantasy: ['FantasyFont', 'cursive'],
        cambria: ['Cambria', 'serif'], 
        Playwrite: ['oswald', 'serif'],
      },
      keyframes: {
        moveXY: {
          '0%': { transform: 'translate(0, 0)', opacity:'0' },
          '50%': { transform: 'translate(0, 350px)', opacity:'100' },
          '100%': { transform: 'translate(0, 700px)', opacity:'0' },
        },
        moveX: {
          '0%': { transform: 'translate(0, 0)', opacity:'0' },
          '100%': { transform: 'translate(250px ,0)', opacity:'100' },
        },
        typing: {
          from: { width: '0ch' },
          to: { width: '34ch' },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        growWidthMax: {
          '0%': { width: '0%' },
          '100%': { width: '83%' },
        },
        growWidthMaxed: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        growWidthMiddle: {
          '0%': { width: '0%' },
          '100%': { width: '66.66%' },
        },
        growWidthLow: {
          '0%': { width: '0%' },
          '100%': { width: '25%' },
        },
        growWidthL: {
          '0%': { width: '0%' },
          '100%': { width: '33%' },
        },
        growWidthM: {
          '0%': { width: '0%' },
          '100%': { width: '60%' },
        },
        growWidthlowest: {
          '0%': { width: '0%' },
          '100%': { width: '16.66%' },
        },
        loader: {
          '0%': { width: '0%' },
          '100%': { width: '100%'},
        },

      },
      animation: {
        moveXY: 'moveXY 5s infinite alternate',
        moveX: 'moveX 2s ease-in forwards',
        growWidthMax: 'growWidthMax 2s ease-in-out alternate',
        growWidthMaxed: 'growWidthMaxed 2s ease-in-out alternate',
        growWidthMiddle: 'growWidthMiddle 2s ease-in-out alternate',
        growWidthLow: 'growWidthLow 2s ease-in-out alternate',
        growWidthL: 'growWidthL 2s ease-in-out alternate',
        growWidthM: 'growWidthM 2s ease-in-out alternate',
        growWidthlowest: 'growWidthlowest 2s ease-in-out alternate',
        loader: 'loader 2s ease-in-out ',
        typing: "typing 4s steps(20, end) forwards",
        blink: "blink 0.7s step-end infinite",
      },
      screens: {
        'sm': '300px',
        'lg': '1024px',
        '2xl': '2560px',
      },
      colors: {
        'custom-dark': '#0F172A',
        'primary' : '#3B82F6',
        'Text-Primary' : '#F9FAFB',
        'Text-Secondary' : '#CBD5E1',
        'border' : '#CBD5E1',
        'Hover' : '#60A5FA',
        'custom-light-dark' : '#192937',
        'custom-gray-dark' : '#32414d',
        'custom-cyan' : '#36B5EF'
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}

