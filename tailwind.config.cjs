/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			'nav':['Dapifer'],
		},
		extend: {
			colors: {
				linen: '#E2E2D9',
			},
			backgroundImage: {},
		},
	},
	plugins: [],
};
