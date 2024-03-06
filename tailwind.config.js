/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary01: '#836FFF',
        secondary01: '#F2DF74',
        red01: '#F02828',
        black01: '#151518',
        black02: '#151518',
        grey01: '#333333',
        grey02: '#555555',
        grey03: '#999999',
        white01: '#FFFFFF',
        white02: '#F3F3F3',
        white03: '#EEEEEE',
      },
      fontFamily: {
        serif: ['var(--font-pretendard)']
      },
      fontSize: {
        '2xl': '12.5rem',
      },
      spacing: {
        'inline': '1.25rem',
      }
    },
  },
  plugins: [],
}