/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                righteous: ['"Righteous"', ...defaultTheme.fontFamily.sans],
                'work-sans': ['"Work Sans"', 'sans-serif']
            },
            screens: {
                '2xl': '1536px',
                lg: '1200px'
            },
            colors: {
                'custom-dark': '#1e2326',
                'custom-green': '#1CB698',
                'custom-grey': '#252A2E'
            },
            maxWidth: {
                custom: '1200px'
            },
            backgroundImage: {
                'custom-gradient':
                    'linear-gradient(to top, rgba(30, 35, 38, .8), rgba(30, 35, 38, 1))'
            }
        }
    },
    plugins: ['daisyui']
}
