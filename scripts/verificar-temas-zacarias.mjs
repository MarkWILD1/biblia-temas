import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERICOPAS_ZACARIAS } from './temas-zacarias.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

function load(rel) {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8'))
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const doc = load('temas-de-pericopa/zacarias.json')
const asignaciones = load('asignaciones/ZEC.json').asignaciones
const periSlugs = new Set(PERICOPAS_ZACARIAS.map((item) => item.slug))
const temaSlugs = new Set(doc.temas.map((item) => item.slug))

assert(doc.libro === 'ZEC', 'libro debe ser ZEC')
assert(doc.temas.length === 8, `se esperaban 8 temas, hay ${doc.temas.length}`)
assert(Object.keys(doc.pericopaATemas).length === 14, 'faltan perícopas en pericopaATemas')

for (const peri of PERICOPAS_ZACARIAS) {
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
  retorno: 20,
  vision: 51,
  templo: 24,
  sacerdocio: 25,
  rey: 57,
  sion: 127,
  pastores: 29,
  naciones: 89,
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

assert(doc.pericopaATemas['volved-a-mi'].includes('retorno'), 'volved a mí debe mapear a retorno')
assert(doc.pericopaATemas['el-rey-humilde'].includes('rey'), 'el rey humilde debe estar en rey')
assert(doc.pericopaATemas['el-traspasado'].includes('sion'), 'el traspasado debe estar en sion')

console.log('OK: temas de perícopa ZEC')
console.log(`  temas=${doc.temas.length} relatos=${Object.keys(doc.pericopaATemas).length}`)
console.log(`  ${Object.entries(counts).map(([slug, n]) => `${slug}=${n}`).join(' ')}`)
