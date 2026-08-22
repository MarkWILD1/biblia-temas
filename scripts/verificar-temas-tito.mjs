import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERICOPAS_TITO } from './temas-tito.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

function load(rel) {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8'))
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const doc = load('temas-de-pericopa/tito.json')
const asignaciones = load('asignaciones/TIT.json').asignaciones
const periSlugs = new Set(PERICOPAS_TITO.map((item) => item.slug))
const temaSlugs = new Set(doc.temas.map((item) => item.slug))

assert(doc.libro === 'TIT', 'libro debe ser TIT')
assert(doc.temas.length === 8, `se esperaban 8 temas, hay ${doc.temas.length}`)
assert(Object.keys(doc.pericopaATemas).length === 8, 'faltan perícopas en pericopaATemas')

for (const peri of PERICOPAS_TITO) {
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
  encargo: 8,
  liderazgo: 5,
  doctrina: 12,
  conducta: 10,
  gracia: 13,
  obras: 22,
  herejia: 10,
  esperanza: 9,
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

assert(doc.pericopaATemas['la-gracia-aparecio'].includes('gracia'), 'la gracia apareció debe mapear a gracia')
assert(doc.pericopaATemas['ancianos-en-creta'].includes('liderazgo'), 'ancianos en Creta debe estar en liderazgo')
assert(doc.pericopaATemas['las-buenas-obras'].includes('obras'), 'las buenas obras debe estar en obras')

console.log('OK: temas de perícopa TIT')
console.log(`  temas=${doc.temas.length} relatos=${Object.keys(doc.pericopaATemas).length}`)
console.log(`  ${Object.entries(counts).map(([slug, n]) => `${slug}=${n}`).join(' ')}`)
