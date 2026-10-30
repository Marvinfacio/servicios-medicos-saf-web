# Sitio web · Dr. Marvin Facio / Servicios Médicos SaF

Sitio del consultorio hecho con **React + Vite**, **Tailwind CSS v4** y animaciones con **GSAP**. Disponible en español (idioma por defecto) e inglés.

**En línea:** https://marvinfacio.github.io/servicios-medicos-saf-web/
**Empresas:** https://marvinfacio.github.io/servicios-medicos-saf-web/empresas/

Para abrir un idioma desde un enlace o un anuncio: `?lang=es` o `?lang=en` al final de la dirección.

## Trabajar en la página
```bash
npm install      # solo la primera vez
npm run dev      # vista previa con recarga automática
npm run build    # genera la versión final en dist/
npm run images   # vuelve a generar las imágenes WebP (ver abajo)
```

## Dónde cambiar cosas
- **Textos en español e inglés**, servicios, horario, médicos, perfil y enlaces: `src/data.js`. Cada texto tiene la forma `{ es: '…', en: '…' }`.
- **Volantes de los servicios:**
  1. Reemplaza el PNG original (1080×1350) en `assets-src/ads/es/` o `assets-src/ads/en/`, con el mismo nombre: `control-metabolico.png`, `medicina-general.png`, `verrugas.png` o `ekg.png`.
  2. Ejecuta `npm run images`. Genera las versiones WebP en `public/img/ads/`: 700 px para las tarjetas y 1080 px para el visor.
  3. Actualiza el resumen del volante (`adAlt`) en `src/data.js` si cambió el precio o el contenido.
- **Foto del doctor:** reemplaza `assets-src/dr-marvin-facio.jpg` y ejecuta `npm run images`.
- **Imagen para compartir** (WhatsApp, Facebook): `public/og-image.png`, de 1200×630. Se genera desde `scripts/og-image.html`; el comando está dentro de ese archivo.
- **Secciones:** `src/components/`.
- **Páginas:** empresas en `src/pages/Empresas.jsx` y la página de error en `src/pages/NotFound.jsx`.
- **Colores:** bloque `@theme` en `src/index.css`. La fuente Plus Jakarta Sans se sirve desde el propio sitio (`@fontsource-variable`).
- **Animaciones:** `src/App.jsx`.

## Publicación
Cada `git push` a `main` publica la página automáticamente con GitHub Actions (`.github/workflows/deploy.yml`).

## Pendientes
- [ ] Aviso de privacidad: esperando la versión corregida del PDF (falta el correo de contacto). Publicarlo en `public/` y enlazarlo desde el pie de página.
- [ ] `robots.txt`: hacerlo cuando se conecte el dominio propio. En GitHub Pages bajo subruta vive en la raíz del dominio. `public/sitemap.xml` ya existe.
- [ ] Contenido de la página para empresas.

## Colores (del logo)
| Color | Hex |
|---|---|
| Azul marino | `#122D3E` |
| Verde azulado | `#14A398` (botón: `#0B7A72` para mejor contraste) |
| Cian | `#2DC4E4` |
| Magenta | `#D4237A` |
