import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { mapToObject } from './lib/extraer-libro-snapshot.mjs'
import { LIBROS } from './lib/canon-66.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = join(root, '.cache', 'spaRV1909')
const outDir = join(root, 'data', 'versiones', 'rv1909')
const OMITIDO = '[Este verso no aparece en esta versión.]'

// spaRV1909 de eBible.org: Reina-Valera 1909, dominio público.
// Los marcadores \w ...|strong="..."\w* pertenecen a esa edición digital;
// el JSON guarda solo el texto del versículo.

function limpiarVerso(raw) {
  let text = raw
  text = text.replace(/\\f [\s\S]*?\\f\*/g, ' ')
  text = text.replace(/\\fe [\s\S]*?\\fe\*/g, ' ')
  text = text.replace(/\\x [\s\S]*?\\x\*/g, ' ')
  text = text.replace(/\\w\s+([^\\|*]+?)(?:\|[^\\]*)?\\w\*/g, '$1')
  text = text.replace(/\\[+]?[a-zA-Z]+\d*\s*\*?/g, ' ')
  text = text.replace(/\|strong="[^"]*"/g, '')
  return text.replace(/\s+/g, ' ').trim()
}

function seq(capitulo, desde, hasta) {
  return Array.from({ length: hasta - desde + 1 }, (_, index) => `${capitulo}:${desde + index}`)
}

// La Reina-Valera 1909 sigue, en estos pasos, la numeración de la King James.
// La clave canónica del sitio es la de 1960. Cada regla copia el texto de 1909
// a esa clave. Si el destino es un versículo más largo, el último texto se repite:
// ahí 1909 unió los dos versículos, igual que NTV en Salmo 47:9-10.
const CORRIDAS = {
  NUM: [
    { desde: seq(13, 1, 33), hacia: ['12:16', ...seq(13, 1, 33)] },
    { desde: seq(30, 1, 16), hacia: ['29:40', ...seq(30, 1, 16)] },
  ],
  '1SA': [{ desde: seq(24, 1, 22), hacia: ['23:29', ...seq(24, 1, 22)] }],
  '2SA': [{ desde: ['20:25'], hacia: ['20:26'] }],
  '2CH': [
    { desde: ['33:10'], hacia: ['33:11'] },
    { desde: seq(33, 11, 24), hacia: seq(33, 12, 25) },
  ],
  JOB: [
    { desde: ['35:15'], hacia: ['35:16'] },
    { desde: seq(39, 1, 3), hacia: ['38:39', '38:40', '38:41'] },
    { desde: seq(39, 4, 29), hacia: seq(39, 1, 26) },
    { desde: seq(40, 1, 19), hacia: seq(40, 6, 24) },
  ],
  PSA: [{ desde: ['47:9'], hacia: ['47:10'] }],
  HOS: [{ desde: seq(12, 1, 14), hacia: ['11:12', ...seq(12, 1, 14)] }],
  JON: [{ desde: seq(2, 1, 10), hacia: ['1:17', ...seq(2, 1, 10)] }],
  ACT: [{ desde: ['19:40'], hacia: ['19:41'] }],
  '2CO': [
    { desde: ['13:12'], hacia: ['13:13'] },
    { desde: ['13:13'], hacia: ['13:14'] },
  ],
  '3JN': [{ desde: ['1:14'], hacia: ['1:15'] }],
}

function aplicarCorridas(usfm, map) {
  const alineado = new Map(map)
  for (const corrida of CORRIDAS[usfm] ?? []) {
    const textos = corrida.desde.map((key) => {
      const texto = map.get(key)
      if (!texto) throw new Error(`${usfm} no tiene ${key} para alinear`)
      return texto
    })
    if (textos.length > corrida.hacia.length) {
      throw new Error(`${usfm}: la corrida ${corrida.desde[0]} sobra textos`)
    }
    corrida.hacia.forEach((key, index) => {
      alineado.set(key, textos[Math.min(index, textos.length - 1)])
    })
  }

  // 39:30 de esta edición trae, en un solo versículo, el águila (1960 39:27-30)
  // y la respuesta de Job (1960 40:1-5). El corte está escrito en el propio texto.
  if (usfm === 'JOB') {
    const blob = map.get('39:30')
    const corte = blob?.indexOf('A más de eso respondió') ?? -1
    if (corte < 1) throw new Error('JOB 39:30 no trae el corte esperado')
    const aguila = blob.slice(0, corte).trim()
    const respuesta = blob.slice(corte).trim()
    for (const key of seq(39, 27, 30)) alineado.set(key, aguila)
    for (const key of seq(40, 1, 5)) alineado.set(key, respuesta)
  }

  return alineado
}

function parseUsfm(usfm) {
  const map = new Map()
  const ranges = []
  const chapters = usfm.split(/\\c\s+/)

  for (const chunk of chapters.slice(1)) {
    const chapterMatch = chunk.match(/^(\d+)/)
    if (!chapterMatch) continue
    const capitulo = Number(chapterMatch[1])
    const parts = chunk.split(/\\v\s+/)

    for (const part of parts.slice(1)) {
      const verseMatch = part.match(/^(\d+)(?:-(\d+))?\s*([\s\S]*)$/)
      if (!verseMatch) continue
      const desde = Number(verseMatch[1])
      const hasta = verseMatch[2] ? Number(verseMatch[2]) : desde
      const texto = limpiarVerso(verseMatch[3])
      if (!texto) continue
      if (hasta !== desde) ranges.push(`${capitulo}:${desde}-${hasta}`)
      for (let versiculo = desde; versiculo <= hasta; versiculo += 1) {
        map.set(`${capitulo}:${versiculo}`, texto)
      }
    }
  }

  return { map, ranges }
}

function loadUsfmById() {
  const byId = new Map()
  for (const name of readdirSync(sourceDir)) {
    if (!name.endsWith('.usfm')) continue
    const id = name.match(/(\d?[A-Z]{2,3})spaRV1909\.usfm$/)?.[1]
    if (!id) throw new Error(`Nombre USFM no reconocido: ${name}`)
    byId.set(id, readFileSync(join(sourceDir, name), 'utf8'))
  }
  return byId
}

const fuentes = loadUsfmById()
mkdirSync(outDir, { recursive: true })

let omitidos = 0
let escritos = 0

for (const [usfm] of LIBROS) {
  const fuente = fuentes.get(usfm)
  if (!fuente) throw new Error(`Falta ${usfm} en spaRV1909`)

  const { map, ranges } = parseUsfm(fuente)
  const corrido = aplicarCorridas(usfm, map)
  const rvr = JSON.parse(readFileSync(join(root, 'data', 'versiones', 'rvr1960', `${usfm}.json`), 'utf8'))
  const claves = Object.keys(rvr.versiculos)
  const faltan = claves.filter((key) => !corrido.has(key))
  const sucios = claves.filter((key) => corrido.get(key)?.includes('strong=') || corrido.get(key)?.includes('\\'))

  for (const key of faltan) corrido.set(key, OMITIDO)

  const alineado = new Map(claves.map((key) => [key, corrido.get(key)]))
  writeFileSync(
    join(outDir, `${usfm}.json`),
    `${JSON.stringify({ version: 'rv1909', libro: usfm, versiculos: mapToObject(alineado) }, null, 2)}\n`,
    'utf8',
  )

  escritos += claves.length
  omitidos += faltan.length
  if (sucios.length) {
    throw new Error(`${usfm} conserva marcas: ${sucios.slice(0, 8).join(', ')}`)
  }
  const extra = [
    faltan.length ? `omitidos ${faltan.length}: ${faltan.slice(0, 12).join(', ')}` : '',
    ranges.length ? `rangos ${ranges.join(', ')}` : '',
  ].filter(Boolean).join(' | ')
  console.log(`${usfm}: ${claves.length} claves${extra ? ` · ${extra}` : ''}`)
}

console.log(`Escrito rv1909. Claves: ${escritos}. Omitidos: ${omitidos}.`)
