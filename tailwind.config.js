module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#283144",
          "secondary": "#e879f9",
          "accent": "#00cfdd",
          "neutral": "#a1b0cb",
          "base-100": "#1c222f",
          "info": "#5a8dee",
          "success": "#35be7c",
          "warning": "#df9c45",
          "error": "#ff588c",
        },
      },
    ],
  },
}