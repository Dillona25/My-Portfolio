/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
      },
      keyframes: {
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
      },
    },
    backgroundImage: {
      LinkedIn: "url('../src/assets/LinkedIn.svg')",
      LinkedIn2: "url('../src/assets/LinkedIn2.svg')",
      Github2: "url('../src/assets/Github2.svg')",
      Instagram: "url('../src/assets/Instagram.svg')",
      Close: "url('../src/assets/Close.svg')",
    },
  },
  plugins: [require("daisyui")],
};
