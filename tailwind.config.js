/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    // Add more paths if your templates/components are elsewhere
  ],
  theme: {
    extend: {
      maxWidth: {
        vmax: "100vmax", // Enables max-w-vmax
      },
      maxHeight: {
        vmax: "100vmax", // Enables max-h-vmax
      },
    },
  },
  plugins: [],
};
