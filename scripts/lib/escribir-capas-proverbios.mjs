import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { slugify } from './slug.mjs'
import { LIBROS_PUBLICADOS, buildCanon } from './canon-66.mjs'

const THEME_ICONS = {
  1: '📖',
  2: '💬',
  3: '💰',
  4: '⚡',
  5: '👨‍👩‍👧',
  6: '💍',
  7: '⚖️',
  8: '🙏',
  9: '🔥',
  10: '🤝',
  11: '🏛️',
  12: '🍷',
}

const VERSION_FIELDS = [
  { id: 'rvr1960', field: 'texto' },
  { id: 'ntv', field: 'textoNtv' },
  { id: 'dhh', field: 'textoDhh' },
  { id: 'tla', field: 'textoTla' },
]

function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

export function temaSlug(nombre) {
  return slugify(nombre)
}

export function escribirCapasDesdeBlob(blob, root) {
  const slugs = new Map()
  for (const tema of blob.temas) {
    slugs.set(tema.id, temaSlug(tema.nombre))
  }

  const taxonomia = {
    libro: 'PRO',
    id: 'proverbios',
    temas: blob.temas.map((tema) => ({
      slug: slugs.get(tema.id),
      nombre: tema.nombre,
      orden: tema.id,
      icono: THEME_ICONS[tema.id] ?? '📌',
      conteoOrientativo: tema.conteoOrientativo,
    })),
  }

  const asignaciones = {}
  const versiones = {
    rvr1960: {},
    ntv: {},
    dhh: {},
    tla: {},
  }
  const notas = {}
  const missing = { rvr1960: [], ntv: [], dhh: [], tla: [] }

  for (const tema of blob.temas) {
    const slug = slugs.get(tema.id)
    for (const verso of tema.versiculos) {
      const key = `${verso.capitulo}:${verso.versiculo}`
      if (asignaciones[key] && asignaciones[key] !== slug) {
        throw new Error(`Asignación duplicada con tema distinto: ${key}`)
      }
      asignaciones[key] = slug

      for (const { id, field } of VERSION_FIELDS) {
        const texto = verso[field]
        if (!texto) {
          missing[id].push(key)
          continue
        }
        versiones[id][key] = texto
      }

      if (verso.nota) {
        notas[key] = verso.nota
      }
    }
  }

  for (const [id, keys] of Object.entries(missing)) {
    if (keys.length > 0) {
      throw new Error(`Faltan ${keys.length} versículos en ${id}: ${keys.slice(0, 8).join(', ')}`)
    }
  }

  const dataDir = join(root, 'data')
  writeJson(join(dataDir, 'canon.json'), buildCanon({ publicados: LIBROS_PUBLICADOS }))
  writeJson(join(dataDir, 'taxonomias', 'proverbios.json'), taxonomia)
  writeJson(join(dataDir, 'asignaciones', 'PRO.json'), {
    libro: 'PRO',
    taxonomia: 'proverbios',
    asignaciones,
  })

  for (const { id } of VERSION_FIELDS) {
    writeJson(join(dataDir, 'versiones', id, 'PRO.json'), {
      version: id,
      libro: 'PRO',
      versiculos: versiones[id],
    })
  }

  writeJson(join(dataDir, 'notas', 'rvr-esquematizada', 'PRO.json'), {
    fuente: 'rvr-esquematizada',
    libro: 'PRO',
    nombre: blob.notasEstudio?.fuente ?? 'Reina-Valera 1960 Esquematizada',
    paginas: blob.notasEstudio?.paginas ?? '',
    colecciones: blob.notasEstudio?.colecciones ?? [],
    notas,
  })

  return {
    slugs: [...slugs.values()],
    asignaciones: Object.keys(asignaciones).length,
    notas: Object.keys(notas).length,
  }
}
