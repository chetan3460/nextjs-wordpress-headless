/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx}",
        "./src/components/**/*.{js,jsx}",
        "./src/app/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#dc2626',
                    teal: '#14b8a6',
                    blue: '#0ea5e9',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
