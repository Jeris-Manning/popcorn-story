module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "popcorn-box":
          "url('D:/gitLocal/popcorn-story/src/images/popcornBox.png')",
      }),
      dropShadow: {
        "popcorn": "2px 2px 1px black",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
