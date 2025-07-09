import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // <--- tambahkan ini!

// https://astro.build/config
export default defineConfig({
    site: 'https://dieng.travel', // <--- wajib isi domain utama di sini!
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        react(),
        sitemap(),    // <--- aktifkan plugin sitemap
    ],
// adapter: netlify(), // matikan dulu

});
