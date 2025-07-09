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
<<<<<<< HEAD
// adapter: netlify(), // matikan dulu

>>>>>>> 17120f2d1793f8794ea90fcf5cd4aeaf6aed0f03
=======
    adapter: netlify(), // <-- HARUS AKTIF jika mau deploy Netlify
>>>>>>> a6f575e3a7fd3f3c2a9c8a9f8396d627c0c88c76
});
