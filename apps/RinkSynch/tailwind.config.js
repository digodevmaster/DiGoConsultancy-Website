/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}", // This path scans the root folder and all sub-folders
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}