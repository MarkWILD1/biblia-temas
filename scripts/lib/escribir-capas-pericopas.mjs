import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { LIBROS_PUBLICADOS, buildCanon } from './canon-66.mjs'
import { inRange, sortKeys } from './ref-rango.mjs'

export function escribirCapasPericopas({ root, usfm, slug, pericopas }) {
  const rvrPath = join(root, 'data', 'versiones', 'rvr1960', `${usfm}.json`)
  const rvr = JSON.parse(readFileSync(rvrPath, 'utf8'))
  const keys = sortKeys(Object.keys(rvr.versiculos))

  if (keys.length === 0) {
    throw new Error(`RVR ${usfm} no tiene versículos. Extraé el libro primero.`)
  }

  const asignaciones = {}
  const counts = Object.fromEntries(pericopas.map((item) => [item.slug, 0]))

  for (const key of keys) {
    const hits = pericopas.filter((item) => inRange(key, item.desde, item.hasta))
    if (hits.length === 0) {
      throw new Error(`${usfm} verso huérfano: ${key}`)
    }
    if (hits.length > 1) {
      throw new Error(`${usfm} solape en ${key}: ${hits.map((item) => item.slug).join(', ')}`)
    }
    asignaciones[key] = hits[0].slug
    counts[hits[0].slug] += 1
  }

  const taxonomia = {
    libro: usfm,
    id: slug,
    unidad: 'pericopa',
    temas: pericopas.map((item) => ({
      slug: item.slug,
      nombre: item.nombre,
      orden: item.orden,
      icono: item.icono,
      desde: item.desde,
      hasta: item.hasta,
      conteoOrientativo: counts[item.slug],
    })),
  }

  const dataDir = join(root, 'data')
  mkdirSync(join(dataDir, 'taxonomias'), { recursive: true })
  mkdirSync(join(dataDir, 'asignaciones'), { recursive: true })

  writeFileSync(join(dataDir, 'taxonomias', `${slug}.json`), `${JSON.stringify(taxonomia, null, 2)}\n`, 'utf8')
  writeFileSync(
    join(dataDir, 'asignaciones', `${usfm}.json`),
    `${JSON.stringify({ libro: usfm, taxonomia: slug, asignaciones }, null, 2)}\n`,
    'utf8',
  )
  writeFileSync(
    join(dataDir, 'canon.json'),
    `${JSON.stringify(buildCanon({ publicados: LIBROS_PUBLICADOS }), null, 2)}\n`,
    'utf8',
  )

  return { keys: keys.length, counts }
}
