/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Military/Tactical Dark Theme
                'dark-grey': '#1a1a1a',
                'gunmetal': '#1a1e24',
                'steel-edge': '#2c333a',
                'neon-blue': '#00f0ff',
                'danger-red': '#ff0000',
                'gold': '#ffd700',
                'hud-white': '#e0e6ed',
                'muted-grey': '#8b9bb4',
            },
            fontFamily: {
                'sans': ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'neon': '0 0 10px rgba(0, 240, 255, 0.5)',
                'danger': '0 0 10px rgba(255, 0, 0, 0.5)',
                'gold': '0 0 10px rgba(255, 215, 0, 0.5)',
            },
        },
    },
    plugins: [],
}
