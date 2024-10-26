/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '22': 'repeat(22, minmax(0, 1fr))',
      },
    },
    plugins: [],
  }
}

