# Sitio web · Dr. Marvin Facio / Servicios Médicos SaF

Sitio del consultorio hecho con **React + Vite**, **Tailwind CSS v4** y animaciones con **GSAP**. Disponible en español e inglés.

**En línea:** https://marvinfacio.github.io/servicios-medicos-saf-web/
**Empresas:** https://marvinfacio.github.io/servicios-medicos-saf-web/empresas/

## Trabajar en la página
```bash
npm install      # solo la primera vez
npm run dev      # vista previa con recarga automática
npm run build    # genera la versión final en dist/
```

## Dónde cambiar cosas
- **Textos en español e inglés**, servicios, horario, médicos, perfil y enlaces: `src/data.js`. Cada texto tiene la forma `{ es: '…', en: '…' }`.
- **Publicidades de los servicios:** reemplaza la imagen en `public/img/ads/` con el mismo nombre (`control-metabolico.png`, `medicina-general.png`, `verrugas.png`, `ekg.png`), en formato 1080×1350.
- **Foto del doctor:** `public/img/dr-marvin-facio.jpg`.
- **Secciones:** `src/components/`. La página para empresas está en `src/pages/Empresas.jsx`.
- **Colores y fuente:** bloque `@theme` en `src/index.css`.
- **Animaciones:** `src/App.jsx`.

## Publicación
Cada `git push` a `main` publica la página automáticamente con GitHub Actions (`.github/workflows/deploy.yml`).

## Pendientes
- [ ] Contenido de la página para empresas.

## Colores (del logo)
| Color | Hex |
|---|---|
| Azul marino | `#122D3E` |
| Verde azulado | `#14A398` (botón: `#0B7A72` para mejor contraste) |
| Cian | `#2DC4E4` |
| Magenta | `#D4237A` |
