import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
import svg from '@poppanator/sveltekit-svg'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: netlify(),
		vite: {
			// Options are optional
			plugins: [svg()]
		}
	}
};

export default config;
