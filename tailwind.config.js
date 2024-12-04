/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      colors: {
        "high-black": "#2a2a2a",
        "light-black": "#1a1a1a",
        "purple-light": "#e05bf4",
        "blue-light": "#CFF80B",
        // "blue-light": "#CFF80B",
        "light-grey": "#e0e0e0",
      },
      backgroundImage: {
        // "custom-gradient": "linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% )",
        "custom-gradient": "linear-gradient(-45deg, #CFF80B 0%, #0A9396 100% )",
        "custom2-gradient": "linear-gradient(to right, #e05bf4 , #00dbde )",
        "najatul-11": "url('src/assets/najatul11.jpg')",
      },
      boxShadow: {
        "main-up": ["8px 8px 16px #0e0e0e", "-8px -8px 16px #464646"],
        up: ["4px 4px 8px #0e0e0e", "-4px -4px 8px #464646"],
        in: ["inset 4px 4px 8px #0e0e0e", "inset -4px -4px 8px #464646"],
        text: [
          "0 0 5px #03e914",
          "0 0 15px #03e914",
          "0 0 25px #03e914",
          "0 0 100px #03e914",
        ],
      },
      fontFamily: {
        Cormorant: ["Comfortaa", "serif"],
        Montserrat: ["Montserrat", "sans-serif;"],
        Nunito: ['"Nunito", sans-serif'],

      },
      animation: {
        profileAnimate: "profileAnimate 5s ease-in-out infinite",
      },
      keyframes: {
        profileAnimate: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
      },
      rotate: {
        "x-180": "180deg",
      },
    },
  },
  plugins: [],
};
