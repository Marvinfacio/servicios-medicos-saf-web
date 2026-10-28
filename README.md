# Sitio web · Dr. Marvin Facio / Servicios Médicos SaF

Página del consultorio hecha con **React + Vite**, **Tailwind CSS v4** y animaciones con **GSAP**.

**En línea:** https://marvinfacio.github.io/servicios-medicos-saf-web/

## Trabajar en la página
```bash
npm install      # solo la primera vez
npm run dev      # vista previa con recarga automática
npm run build    # genera la versión final en dist/
```

## Dónde cambiar cosas
- Textos, servicios, horario, enlaces (WhatsApp, Instagram, Maps): `src/data.js`
- Secciones: `src/components/`
- Colores y fuente: bloque `@theme` en `src/index.css`
- Animaciones: `src/App.jsx`
- Imágenes: carpeta `public/`

## Publicación
Cada `git push` a `main` publica la página automáticamente con GitHub Actions (`.github/workflows/deploy.yml`).

## Pendientes
- [ ] Fotos del consultorio y del doctor (`public/`).

## Colores (del logo)
| Color | Hex |
|---|---|
| Azul marino | `#122D3E` |
| Verde azulado | `#14A398` (botón: `#0B7A72` para mejor contraste) |
| Cian | `#2DC4E4` |
| Magenta | `#D4237A` |
