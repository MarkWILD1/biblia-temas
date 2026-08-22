import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERICOPAS_1_TIMOTEO } from './temas-1-timoteo.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

function load(rel) {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8'))
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const doc = load('temas-de-pericopa/1-timoteo.json')
const asignaciones = load('asignaciones/1TI.json').asignaciones
const periSlugs = new Set(PERICOPAS_1_TIMOTEO.map((item) => item.slug))
const temaSlugs = new Set(doc.temas.map((item) => item.slug))

assert(doc.libro === '1TI', 'libro debe ser 1TI')
assert(doc.temas.length === 8, `se esperaban 8 temas, hay ${doc.temas.length}`)
assert(Object.keys(doc.pericopaATemas).length === 8, 'faltan perícopas en pericopaATemas')

for (const peri of PERICOPAS_1_TIMOTEO) {
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
  doctrina: 36,
  oracion: 15,
  liderazgo: 41,
  piedad: 53,
  familia: 40,
  contentamiento: 10,
  batalla: 11,
  testimonio: 20,
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

assert(doc.pericopaATemas['pelea-la-buena-batalla'].includes('batalla'), 'pelea la buena batalla debe mapear a batalla')
assert(doc.pericopaATemas['obispos-y-diaconos'].includes('liderazgo'), 'obispos y diáconos debe estar en liderazgo')
assert(doc.pericopaATemas['la-sana-doctrina'].includes('doctrina'), 'la sana doctrina debe estar en doctrina')

console.log('OK: temas de perícopa 1TI')
console.log(`  temas=${doc.temas.length} relatos=${Object.keys(doc.pericopaATemas).length}`)
console.log(`  ${Object.entries(counts).map(([slug, n]) => `${slug}=${n}`).join(' ')}`)
