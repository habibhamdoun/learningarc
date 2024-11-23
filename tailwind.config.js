import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#49BBBD',
        secondary: '#7ECCCE',
        accent: '#136CB5',
      },
      borderImage: {
        'custom-gradient': 'linear-gradient(to right, #136CB5, #49BBBD)', // Define gradient for border
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#49BBBD',
          secondary: '#7ECCCE',
          accent: '#136CB5',
          neutral: '#3d4451',
          'base-100': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
      'light',
      'dark',
    ],
  },
};
