/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '19': 'repeat(19, minmax(0, 1fr))',
      },
    },
    plugins: [],
  }
}

