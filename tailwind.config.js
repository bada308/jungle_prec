/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './features/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                black: '#171717',
                darkGray: '#666666',
                gray: '#8D8D8D',
                lightGray: '#D6D6D6',
                white: '#f5f5f5',
                background: '#FAFAFA',
                blue: '#0070F3',
                error: '#EE0000',
            },
            fontFamily: {
                LineSeedKR: ['LineSeedKR', 'sans-serif'],
                Pretendard: ['Pretendard', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
