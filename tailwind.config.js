/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#bf0603",
                gray: "#403D39",
            },
        },
    },
    plugins: [require("daisyui")],
};
