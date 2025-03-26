/** @type {import('tailwindcss').config} */
module.exports = {
    content: ["./src/**/*.{html,js}"], // Rutas de tus archivos
    theme: {
        extend: {
            colors: {
                'custom-teal': '#327995',
                'custom-modal': '#0f172a8c',
            }
        },
    },
    plugins: [],
}