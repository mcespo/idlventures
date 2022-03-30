const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Helvetica', 'Arial', 'sans-serif']
		},
		colors: {
			white: '#ffffff',
			black: '#000000',
			'idl-orange': '#ed7625',
			'idl-gray': '#54565a',
			'idl-gray-dark': '#444345',
			'idl-gray-medium': '#979899',
			'idl-gray-light': '#d9d8d6',
			'idl-red-orange': '#e8562a',
			'idl-yellow': '#f9ae19',
			'idl-green': '#57bd91',
			'idl-blue': '#0ab8dc'
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
