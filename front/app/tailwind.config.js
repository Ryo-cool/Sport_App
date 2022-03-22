// tailwind.config.js
module.exports = {
  // 追記
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    neumorphismColor: {
      slate: {
        100: '#F0F4F9',
      }
    },
    extend: {

    },

  },
    plugins: [
      require('tailwindcss-filters'),
      require('tailwindcss-neumorphism'),
  ],
};