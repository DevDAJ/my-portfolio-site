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
				main: '#17151C',
				ascent: 'rgb(91, 33, 182)',
			},
			fontFamily: {
				sans: 'Source Code Pro',
			},
		},
	},
	plugins: [],
};
