module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FBD062",
          "secondary": "#111430",
          "accent": "#7AB259",
          "neutral": "#009444",
          "base-100": "#FFFFFF",
          "info": "#CAE2E8",
        },
      },
    ],
  }
}