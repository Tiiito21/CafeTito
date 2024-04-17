/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': '#333',
				'primary': '#f44611',
				'secondary': '#5D3C32',
			},

		},
	},
	plugins: [],
}
