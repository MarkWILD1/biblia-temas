import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERICOPAS_3_JUAN } from './temas-3-juan.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

function load(rel) {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8'))
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const doc = load('temas-de-pericopa/3-juan.json')
const asignaciones = load('asignaciones/3JN.json').asignaciones
const periSlugs = new Set(PERICOPAS_3_JUAN.map((item) => item.slug))
const temaSlugs = new Set(doc.temas.map((item) => item.slug))

assert(doc.libro === '3JN', 'libro debe ser 3JN')
assert(doc.temas.length === 8, `se esperaban 8 temas, hay ${doc.temas.length}`)
assert(Object.keys(doc.pericopaATemas).length === 6, 'faltan perícopas en pericopaATemas')

for (const peri of PERICOPAS_3_JUAN) {
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
  verdad: 4,
  prosperidad: 4,
  hospitalidad: 4,
  orgullo: 2,
  testimonio: 1,
  paz: 3,
  comunion: 3,
  imitacion: 1,
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

assert(doc.pericopaATemas['hospedaje-a-los-hermanos'].includes('hospitalidad'), 'hospedaje debe mapear a hospitalidad')
assert(doc.pericopaATemas['diotrefes'].includes('orgullo'), 'Diotrefes debe estar en orgullo')
assert(doc.pericopaATemas['el-anciano-a-gaio'].includes('verdad'), 'el anciano a Gaio debe estar en verdad')

console.log('OK: temas de perícopa 3JN')
console.log(`  temas=${doc.temas.length} relatos=${Object.keys(doc.pericopaATemas).length}`)
console.log(`  ${Object.entries(counts).map(([slug, n]) => `${slug}=${n}`).join(' ')}`)
