import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

export function escribirTemasDePericopa({ root, usfm, slug, pericopas, temas, pericopaATemas }) {
  const taxonomia = JSON.parse(readFileSync(join(root, 'data', 'taxonomias', `${slug}.json`), 'utf8'))
  const periSlugs = new Set(taxonomia.temas.map((item) => item.slug))
  const knownTemas = new Set(temas.map((item) => item.slug))

  for (const peri of pericopas) {
    if (!periSlugs.has(peri.slug)) {
      throw new Error(`Perícopa ${peri.slug} no está en taxonomias/${slug}.json`)
    }
    const mapped = pericopaATemas[peri.slug]
    if (!mapped?.length) throw new Error(`Perícopa sin tema: ${peri.slug}`)
  }

  for (const [peri, mapped] of Object.entries(pericopaATemas)) {
    if (!periSlugs.has(peri)) throw new Error(`Perícopa extra en capa de temas: ${peri}`)
    for (const tema of mapped) {
      if (!knownTemas.has(tema)) throw new Error(`${peri} apunta a tema desconocido: ${tema}`)
    }
  }

  const doc = {
    libro: usfm,
    temas,
    pericopaATemas,
  }

  const outDir = join(root, 'data', 'temas-de-pericopa')
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, `${slug}.json`), `${JSON.stringify(doc, null, 2)}\n`, 'utf8')
  return doc
}
