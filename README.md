# Página de Nexora Development

Sitio de la empresa: proyectos, servicios, equipo y contacto. Astro + Tailwind v4, sale como HTML estático.

- `npm run dev` → http://localhost:4321
- `npm run build` → carpeta `dist` (se sube tal cual a Cloudflare Pages o al servidor).

## Qué editar

- Proyectos: `src/data/proyectos.ts` (el primero sale destacado; imágenes en `public/proyectos/`).
- Contacto y equipo: `src/data/empresa.ts`. **El correo es de ejemplo: completarlo antes de publicar.** El WhatsApp está vacío: al completarlo aparece su botón en Contacto.
- Textos de servicios y de "Cómo trabajamos": arriba de `src/pages/index.astro`.
- Colores y tipografías: `src/styles/global.css` (los de la marca, ver `../Nexora Development - marca/LEEME.md`).
