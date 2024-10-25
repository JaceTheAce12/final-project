/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '22': 'repeat(22, minmax(0, 1fr))',
      },
    },
    plugins: [],
  }
}

