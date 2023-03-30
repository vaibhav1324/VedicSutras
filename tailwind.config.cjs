module.exports = {
  theme: {
    fontFamily: {
      sans: ["Roboto", "Open Sans", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        "off-white": "#F5F5F5",
      },
      textColor: {
        "deep-blue": "#1A237E",
        "light-teal": "#4DB6AC",
        "light-saffron": "#FFD54F",
        "dark-gray": "#424242",
      },
      // Add this section for custom button theming
      daisyui: {
        themes: ["light"],
      },
    },
  },
  variants: {
    extend: {},
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
};
