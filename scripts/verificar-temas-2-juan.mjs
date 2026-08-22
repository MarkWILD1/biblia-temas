import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERICOPAS_2_JUAN } from './temas-2-juan.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

function load(rel) {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8'))
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const doc = load('temas-de-pericopa/2-juan.json')
const asignaciones = load('asignaciones/2JN.json').asignaciones
const periSlugs = new Set(PERICOPAS_2_JUAN.map((item) => item.slug))
const temaSlugs = new Set(doc.temas.map((item) => item.slug))

assert(doc.libro === '2JN', 'libro debe ser 2JN')
assert(doc.temas.length === 8, `se esperaban 8 temas, hay ${doc.temas.length}`)
assert(Object.keys(doc.pericopaATemas).length === 6, 'faltan perícopas en pericopaATemas')

for (const peri of PERICOPAS_2_JUAN) {
  const temas = doc.pericopaATemas[peri.slug]
  assert(temas?.length, `perícopa sin tema: ${peri.slug}`)
  for (const tema of temas) {
    assert(temaSlugs.has(tema), `${peri.slug} apunta a tema desconocido: ${tema}`)
  }
}

for (const slug of Object.keys(doc.pericopaATemas)) {
  assert(periSlugs.has(slug), `perícopa extra en capa de temas: ${slug}`)
}

const esperados = {
  verdad: 3,
  amor: 3,
  mandamiento: 3,
  engano: 2,
  doctrina: 3,
  hospitalidad: 3,
  gozo: 1,
  comunion: 4,
}

const counts = Object.fromEntries(doc.temas.map((tema) => [tema.slug, 0]))
for (const peri of Object.values(asignaciones)) {
  assert(periSlugs.has(peri), `asignaciones sigue siendo perícopa, no tema: ${peri}`)
  for (const tema of doc.pericopaATemas[peri] ?? []) {
    counts[tema] += 1
  }
}

for (const [slug, esperado] of Object.entries(esperados)) {
  assert(counts[slug] === esperado, `${slug}: se esperaban ${esperado} versos, hay ${counts[slug]}`)
}

assert(doc.pericopaATemas['permanece-en-la-doctrina'].includes('doctrina'), 'permanece en la doctrina debe mapear a doctrina')
assert(doc.pericopaATemas['andando-en-verdad'].includes('verdad'), 'andando en verdad debe estar en verdad')
assert(doc.pericopaATemas['muchos-enganadores'].includes('engano'), 'muchos engañadores debe estar en engaño')

console.log('OK: temas de perícopa 2JN')
console.log(`  temas=${doc.temas.length} relatos=${Object.keys(doc.pericopaATemas).length}`)
console.log(`  ${Object.entries(counts).map(([slug, n]) => `${slug}=${n}`).join(' ')}`)
