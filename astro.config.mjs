import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Cambiar por el dominio definitivo cuando esté registrado.
  site: 'https://nexora.com.py',
  vite: { plugins: [tailwindcss()] },
});
