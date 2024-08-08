/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'background': '#EDEDE9',
				'primary': '#f44611',
				'secondary': '#4D2C22',
			},

		},
	},
	plugins: [],
}
