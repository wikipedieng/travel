import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // pastikan hanya 1 baris ini, TANPA conflict marker!

export default defineConfig({
    site: 'https://dieng.travel',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        react(),
        sitemap(),
    ],
    adapter: netlify(),
});
