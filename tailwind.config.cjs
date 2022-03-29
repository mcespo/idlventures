const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Helvetica', 'Arial', 'sans-serif']
		},
		colors: {
			white: '#ffffff',
			black: '#000000',
			'il-orange': '#ef7216'
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
