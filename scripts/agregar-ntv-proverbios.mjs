import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function buildProverbsMap(bible, sourceName) {
  const pro = bible.books.find((b) => b.book_usfm === 'PRO')
  if (!pro) throw new Error(`No se encontró el libro de Proverbios en ${sourceName}`)

  const map = new Map()

  for (const chapter of pro.chapters) {
    const capitulo = Number(chapter.chapter_usfm.split('.')[1])

    for (const item of chapter.items) {
      if (item.type !== 'verse' || item.verse_numbers.length === 0) continue

      const texto = item.lines.join(' ')

      for (const versiculo of item.verse_numbers) {
        map.set(`${capitulo}:${versiculo}`, texto)
      }
    }
  }

  return map
}

function mergeVersion(temas, versionMap, field, label) {
  const missing = []

  for (const tema of temas.temas) {
    for (const versiculo of tema.versiculos) {
      const key = `${versiculo.capitulo}:${versiculo.versiculo}`
      const texto = versionMap.get(key)

      if (!texto) {
        missing.push(key)
        continue
      }

      versiculo[field] = texto
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Faltan ${missing.length} versículos en ${label}: ${missing.slice(0, 10).join(', ')}`,
    )
  }
}

const temasPath = join(root, 'proverbios-por-temas.json')
const publicPath = join(root, 'app', 'public', 'proverbios-por-temas.json')

const temas = JSON.parse(readFileSync(temasPath, 'utf8'))
const ntv = JSON.parse(readFileSync(join(root, 'ntv-v.json'), 'utf8'))
const dhh = JSON.parse(readFileSync(join(root, 'dhh-v.json'), 'utf8'))
const tla = JSON.parse(readFileSync(join(root, 'tla-v.json'), 'utf8'))

mergeVersion(temas, buildProverbsMap(ntv, 'ntv-v.json'), 'textoNtv', 'NTV')
mergeVersion(temas, buildProverbsMap(dhh, 'dhh-v.json'), 'textoDhh', 'DHH')
mergeVersion(temas, buildProverbsMap(tla, 'tla-v.json'), 'textoTla', 'TLA')

temas.versiones = {
  rvr: 'Reina-Valera 1960',
  ntv: ntv.local_title ?? 'Nueva Traducción Viviente',
  dhh: dhh.local_title ?? 'Biblia Dios Habla Hoy',
  tla: tla.local_title ?? 'Traducción en Lenguaje Actual',
}

writeFileSync(temasPath, `${JSON.stringify(temas, null, 2)}\n`, 'utf8')
writeFileSync(publicPath, `${JSON.stringify(temas, null, 2)}\n`, 'utf8')

const total = temas.temas.reduce((n, t) => n + t.versiculos.length, 0)
console.log(`Actualizado: ${temasPath}`)
console.log(`Actualizado: ${publicPath}`)
console.log(`Versículos con NTV, DHH y TLA: ${total}`)
