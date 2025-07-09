import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
<<<<<<< HEAD
import sitemap from '@astrojs/sitemap';
=======
import sitemap from '@astrojs/sitemap'; // <--- tambahkan ini!
>>>>>>> 17120f2d1793f8794ea90fcf5cd4aeaf6aed0f03

// https://astro.build/config
export default defineConfig({
    site: 'https://dieng.travel', // <--- wajib isi domain utama di sini!
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        react(),
<<<<<<< HEAD
        sitemap(),    // <--- pastikan ini ADA!
    ],
    adapter: netlify(),
=======
        sitemap(),    // <--- aktifkan plugin sitemap
    ],
// adapter: netlify(), // matikan dulu

>>>>>>> 17120f2d1793f8794ea90fcf5cd4aeaf6aed0f03
});
