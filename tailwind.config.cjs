const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Helvetica', 'Arial', 'sans-serif']
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
