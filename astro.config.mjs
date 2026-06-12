// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// User GitHub Pages site — served from the domain root, no `base` needed.
	site: 'https://ashishkhuraishy.github.io',
	integrations: [mdx(), sitemap()],

	fonts: [
		{
			provider: fontProviders.google(),
			name: 'IBM Plex Sans',
			cssVariable: '--font-plex-sans',
			weights: [400, 500, 600, 700],
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'IBM Plex Mono',
			cssVariable: '--font-plex-mono',
			weights: [400, 500, 600],
			fallbacks: ['ui-monospace', 'monospace'],
		},
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
