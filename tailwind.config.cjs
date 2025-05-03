/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,svelte,md,mdx,svx,sv}'],
    theme: {
        extend: {
            colors: {
                // https://coolors.co/palette/b68446-739b99-e3c08c-4c6c72-262112
                bronze: 'hsla(33, 44%, 49%, 1)',
                'cambridge-blue': 'hsla(177, 17%, 53%, 1)',
                tan: 'hsla(36, 61%, 72%, 1)',
                'paynes-gray': 'hsla(189, 20%, 37%, 1)',
                'eerie-black': 'hsl(40,35%,7%)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};