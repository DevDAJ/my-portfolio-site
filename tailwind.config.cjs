/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	active: {
		extend: {
			colors: {
				main: '#17151C',
			},
		},
	},
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: 'rgb(6, 00, 12)',
				ascent: 'rgb(91, 33, 182)',
			},
			fontFamily: {
				sans: 'Source Code Pro',
			},
		},
	},
	plugins: [],
};
