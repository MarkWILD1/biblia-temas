import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERICOPAS_1_PEDRO } from './temas-1-pedro.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

function load(rel) {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8'))
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const doc = load('temas-de-pericopa/1-pedro.json')
const asignaciones = load('asignaciones/1PE.json').asignaciones
const periSlugs = new Set(PERICOPAS_1_PEDRO.map((item) => item.slug))
const temaSlugs = new Set(doc.temas.map((item) => item.slug))

assert(doc.libro === '1PE', 'libro debe ser 1PE')
assert(doc.temas.length === 8, `se esperaban 8 temas, hay ${doc.temas.length}`)
assert(Object.keys(doc.pericopaATemas).length === 8, 'faltan perícopas en pericopaATemas')

for (const peri of PERICOPAS_1_PEDRO) {
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
  esperanza: 12,
  santidad: 32,
  pueblo: 10,
  sufrimiento: 56,
  ejemplo: 15,
  hogar: 22,
  pastoreo: 7,
  vigilancia: 7,
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

assert(doc.pericopaATemas['piedras-vivas'].includes('pueblo'), 'piedras vivas debe mapear a pueblo')
assert(doc.pericopaATemas['esperanza-viva'].includes('esperanza'), 'esperanza viva debe estar en esperanza')
assert(doc.pericopaATemas['el-adversario'].includes('vigilancia'), 'el adversario debe estar en vigilancia')

console.log('OK: temas de perícopa 1PE')
console.log(`  temas=${doc.temas.length} relatos=${Object.keys(doc.pericopaATemas).length}`)
console.log(`  ${Object.entries(counts).map(([slug, n]) => `${slug}=${n}`).join(' ')}`)
