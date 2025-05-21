/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,svelte,md,mdx,svx,sv}'],
    theme: {
        fontFamily: {
            display: ["Roboto Slab", "serif"],
            title: ["EB Garamond", "serif"]
        },
        extend: {
            colors: {
                'brown-coffee': 'hsl(4, 26%, 23%)',
                'sepia': 'hsl(35, 70%, 26%)',
                'light-gray': 'hsl(0, 0%, 74%)',
                'mountbatten-pink': 'hsl(329, 12%, 54%)',
                'eerie-black': 'hsl(0, 0%, 10%)',
                'alabaster': 'hsl(43, 41%, 91%)',
                'old-lace': 'hsl(49, 55%, 94%)'
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};