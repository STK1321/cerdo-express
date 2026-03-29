// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://cerdoexpress.co',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
