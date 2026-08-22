import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERICOPAS_EFESIOS } from './temas-efesios.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

function load(rel) {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8'))
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const doc = load('temas-de-pericopa/efesios.json')
const asignaciones = load('asignaciones/EPH.json').asignaciones
const periSlugs = new Set(PERICOPAS_EFESIOS.map((item) => item.slug))
const temaSlugs = new Set(doc.temas.map((item) => item.slug))

assert(doc.libro === 'EPH', 'libro debe ser EPH')
assert(doc.temas.length === 8, `se esperaban 8 temas, hay ${doc.temas.length}`)
assert(Object.keys(doc.pericopaATemas).length === 8, 'faltan perícopas en pericopaATemas')

for (const peri of PERICOPAS_EFESIOS) {
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
  eleccion: 23,
  gracia: 57,
  unidad: 53,
  misterio: 30,
  cuerpo: 53,
  santidad: 58,
  casa: 21,
  guerra: 15,
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

assert(doc.pericopaATemas['la-armadura'].includes('guerra'), 'la armadura debe mapear a guerra')
assert(doc.pericopaATemas['de-muerte-a-vida'].includes('gracia'), 'de muerte a vida debe estar en gracia')
assert(doc.pericopaATemas['un-solo-cuerpo'].includes('unidad'), 'un solo cuerpo debe estar en unidad')

console.log('OK: temas de perícopa EPH')
console.log(`  temas=${doc.temas.length} relatos=${Object.keys(doc.pericopaATemas).length}`)
console.log(`  ${Object.entries(counts).map(([slug, n]) => `${slug}=${n}`).join(' ')}`)
