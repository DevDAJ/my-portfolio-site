/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#17151C',
			},
			fontFamily: {
				sans: 'Source Code Pro',
			},
		},
	},
	plugins: [],
};
