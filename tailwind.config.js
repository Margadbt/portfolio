/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        '10px': '10px',
      },
      width: {
        'img': 'calc(40vw - 40px)',
      },
      minWidth: {
        'img': '200px',
      },
      maxWidth: {
        'img': '460px',
      },
      borderColor: {
        'header': 'rgb(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
};
