/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'terminal-green': '#00FF00',
				'neon-cyan': '#00FFFF',
				'purple-700': '#6B21A8',
				'purple-100': '#E9D5FF',
				'accent-yellow': '#b58900',
				'accent-blue': '#268bd2',
				'dark-green': '#0F380F',
				'medium-green': '#1D662D',
				'light-green': '#4E924A',
				'very-light-green': '#A8B04C',

				'base03': '#002b36',
				'base02': '#073642',
				'base01': '#586e75',
				'base00': '#657b83',
				'base0': '#839496',
				'base1': '#93a1a1',
				'base2': '#eee8d5',
				'base3': '#fdf6e3',
				'yellow': '#b58900',
				'orange': '#cb4b16',
				'red': '#dc322f',
				'magenta': '#d33682',
				'violet': '#6c71c4',
				'blue': '#268bd2',
				'cyan': '#2aa198',
				'green': '#859900',

				
			},
		},
	},
	plugins: [],
};

