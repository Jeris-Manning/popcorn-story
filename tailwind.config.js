module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "popcorn-box":
          "url('D:/gitLocal/popcorn-story/src/images/popcornBox.png')",
        "popcorn-stack":
          "url('D:/gitLocal/popcorn-story/src/images/popcornStack.png')",
      }),
      dropShadow: {
        "popcorn": "2px 2px 1px black",
      },
      flex: {
        "cards": "1 1 20%",
      },
      width: {
        "movie-card": "24rem",
      },
      maxWidth: {
        "movie-card": "24rem",
      },
      height: {
        "movie-card": "22rem",
      },
      maxHeight: {
        "movie-card": "22rem",
      },
      fontSize: {
        "popcorn": "7rem",
        "mega": "4rem",
        "movie-title": "1.8rem",
        "h1": "3rem",
        "h2": "2.5rem",
        "h3": "2rem",
        "base": "1.6rem",
      },
      lineHeight: {
        "popcorn": ".9",
        "movie-title": ".7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
