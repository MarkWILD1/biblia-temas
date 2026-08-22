import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERICOPAS_1_SAMUEL } from './temas-1-samuel.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

function load(rel) {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8'))
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const doc = load('temas-de-pericopa/1-samuel.json')
const asignaciones = load('asignaciones/1SA.json').asignaciones
const periSlugs = new Set(PERICOPAS_1_SAMUEL.map((item) => item.slug))
const temaSlugs = new Set(doc.temas.map((item) => item.slug))

assert(doc.libro === '1SA', 'libro debe ser 1SA')
assert(doc.temas.length === 8, `se esperaban 8 temas, hay ${doc.temas.length}`)
assert(Object.keys(doc.pericopaATemas).length === 14, 'faltan perícopas en pericopaATemas')

for (const peri of PERICOPAS_1_SAMUEL) {
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
  llamado: 162,
  sacerdocio: 209,
  realeza: 360,
  rechazo: 223,
  alianza: 163,
  guerra: 389,
  providencia: 211,
  fidelidad: 137,
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

assert(doc.pericopaATemas['el-llamado-de-samuel'].includes('llamado'), 'el llamado debe mapear a llamado')
assert(doc.pericopaATemas['david-y-goliat'].includes('guerra'), 'Goliat debe estar en guerra')
assert(doc.pericopaATemas['la-caida-de-saul'].includes('rechazo'), 'la caída debe estar en rechazo')

console.log('OK: temas de perícopa 1SA')
console.log(`  temas=${doc.temas.length} relatos=${Object.keys(doc.pericopaATemas).length}`)
console.log(`  ${Object.entries(counts).map(([slug, n]) => `${slug}=${n}`).join(' ')}`)
