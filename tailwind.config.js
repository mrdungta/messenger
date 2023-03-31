/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "macos-big-sur-wallpaper":
          "url('https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-2880x1800-1455.jpg')",
      },

      fontFamily: {
        "sf-pro": "SF Pro",
      },
    },
  },
  plugins: [],
};
