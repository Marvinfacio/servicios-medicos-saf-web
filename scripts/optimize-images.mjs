// Genera las imágenes WebP del sitio a partir de los originales en assets-src/.
// Uso: npm run images  (vuelve a ejecutarlo cada vez que cambies un volante o la foto)
import { mkdir, readdir } from 'node:fs/promises'
import { join, parse, relative } from 'node:path'
import sharp from 'sharp'

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const src = join(root, 'assets-src')
const out = join(root, 'public', 'img')

async function toWebp(input, output, width, quality) {
  const info = await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality, effort: 6 }).toFile(output)
  console.log(`${relative(root, output)}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`)
}

// Volantes: 700 px para las tarjetas y 1080 px para el visor
for (const lang of ['es', 'en']) {
  const dir = join(src, 'ads', lang)
  await mkdir(join(out, 'ads', lang), { recursive: true })
  for (const file of await readdir(dir)) {
    if (!file.endsWith('.png')) continue
    const { name } = parse(file)
    await toWebp(join(dir, file), join(out, 'ads', lang, `${name}-700.webp`), 700, 82)
    await toWebp(join(dir, file), join(out, 'ads', lang, `${name}-1080.webp`), 1080, 82)
  }
}

// Foto del doctor
for (const width of [560, 896]) {
  await toWebp(join(src, 'dr-marvin-facio.jpg'), join(out, `dr-marvin-facio-${width}.webp`), width, 80)
}
