/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            margin: "auto",
            padding: "15px",
            screens: {
                sm: "400px",
                mobile: "620px",
                tablet: "900px",
                laptop: "1200px",
                desktop: "1500px",
            },
        },
        screens: {
            sm: "350px",
            mobile: "640px",
            tablet: "900px",
            laptop: "1280px",
            desktop: "1600px",
        },
        extend: {},
    },
    plugins: [],
}
