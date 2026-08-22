import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERICOPAS_DANIEL } from './temas-daniel.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

function load(rel) {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8'))
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const doc = load('temas-de-pericopa/daniel.json')
const asignaciones = load('asignaciones/DAN.json').asignaciones
const periSlugs = new Set(PERICOPAS_DANIEL.map((item) => item.slug))
const temaSlugs = new Set(doc.temas.map((item) => item.slug))

assert(doc.libro === 'DAN', 'libro debe ser DAN')
assert(doc.temas.length === 8, `se esperaban 8 temas, hay ${doc.temas.length}`)
assert(Object.keys(doc.pericopaATemas).length === 12, 'faltan perícopas en pericopaATemas')

for (const peri of PERICOPAS_DANIEL) {
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
  fidelidad: 79,
  sabiduria: 70,
  soberania: 117,
  idolatria: 30,
  juicio: 140,
  vision: 161,
  oracion: 55,
  reino: 41,
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

assert(doc.pericopaATemas['en-babilonia'].includes('fidelidad'), 'en Babilonia debe mapear a fidelidad')
assert(doc.pericopaATemas['el-foso-de-los-leones'].includes('oracion'), 'el foso debe estar en oración')
assert(doc.pericopaATemas['el-tiempo-del-fin'].includes('reino'), 'el tiempo del fin debe estar en reino')

console.log('OK: temas de perícopa DAN')
console.log(`  temas=${doc.temas.length} relatos=${Object.keys(doc.pericopaATemas).length}`)
console.log(`  ${Object.entries(counts).map(([slug, n]) => `${slug}=${n}`).join(' ')}`)
