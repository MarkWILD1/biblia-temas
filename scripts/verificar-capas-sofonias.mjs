import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERICOPAS_SOFONIAS } from './temas-sofonias.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

function load(rel) {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8'))
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const rvr = load('versiones/rvr1960/ZEP.json').versiculos
const ntv = load('versiones/ntv/ZEP.json').versiculos
const dhh = load('versiones/dhh/ZEP.json').versiculos
const tla = load('versiones/tla/ZEP.json').versiculos
const rv1909 = load('versiones/rv1909/ZEP.json').versiculos
const asignaciones = load('asignaciones/ZEP.json').asignaciones
const taxonomia = load('taxonomias/sofonias.json')
const canon = load('canon.json')

const rvrKeys = Object.keys(rvr)
const slugs = new Set(PERICOPAS_SOFONIAS.map((item) => item.slug))

assert(rvrKeys.length === 53, `RVR ZEP: se esperaban 53, hay ${rvrKeys.length}`)
assert(Object.keys(asignaciones).length === 53, 'asignaciones no cubren 53')
assert(taxonomia.unidad === 'pericopa', 'taxonomía ZEP debe ser pericopa')
assert(taxonomia.temas.length === 8, `se esperaban 8 relatos, hay ${taxonomia.temas.length}`)

for (const [nombre, mapa] of [
  ['ntv', ntv],
  ['dhh', dhh],
  ['tla', tla],
  ['rv1909', rv1909],
]) {
  const missing = rvrKeys.filter((key) => !mapa[key])
  assert(missing.length === 0, `${nombre} pierde ${missing.slice(0, 8).join(', ')}`)
}

const orphans = rvrKeys.filter((key) => !asignaciones[key])
assert(orphans.length === 0, `huérfanos: ${orphans.slice(0, 8).join(', ')}`)

for (const key of rvrKeys) {
  assert(slugs.has(asignaciones[key]), `${key} apunta a slug desconocido ${asignaciones[key]}`)
}

const publicados = canon.libros.filter((libro) => libro.estado === 'publicado').map((libro) => libro.slug)
assert(publicados.includes('genesis'), 'GEN debe seguir publicado')
assert(publicados.includes('exodo'), 'EXO debe seguir publicado')
assert(publicados.includes('levitico'), 'LEV debe seguir publicado')
assert(publicados.includes('numeros'), 'NUM debe seguir publicado')
assert(publicados.includes('deuteronomio'), 'DEU debe seguir publicado')
assert(publicados.includes('josue'), 'JOS debe seguir publicado')
assert(publicados.includes('jueces'), 'JDG debe seguir publicado')
assert(publicados.includes('rut'), 'RUT debe seguir publicado')
assert(publicados.includes('1-samuel'), '1SA debe seguir publicado')
assert(publicados.includes('2-samuel'), '2SA debe seguir publicado')
assert(publicados.includes('1-reyes'), '1KI debe seguir publicado')
assert(publicados.includes('2-reyes'), '2KI debe seguir publicado')
assert(publicados.includes('1-cronicas'), '1CH debe seguir publicado')
assert(publicados.includes('2-cronicas'), '2CH debe seguir publicado')
assert(publicados.includes('esdras'), 'EZR debe seguir publicado')
assert(publicados.includes('nehemias'), 'NEH debe seguir publicado')
assert(publicados.includes('ester'), 'EST debe seguir publicado')
assert(publicados.includes('job'), 'JOB debe seguir publicado')
assert(publicados.includes('salmos'), 'PSA debe seguir publicado')
assert(publicados.includes('proverbios'), 'PRO debe seguir publicado')
assert(publicados.includes('eclesiastes'), 'ECC debe seguir publicado')
assert(publicados.includes('cantares'), 'SNG debe seguir publicado')
assert(publicados.includes('isaias'), 'ISA debe seguir publicado')
assert(publicados.includes('jeremias'), 'JER debe seguir publicado')
assert(publicados.includes('lamentaciones'), 'LAM debe seguir publicado')
assert(publicados.includes('ezequiel'), 'EZK debe seguir publicado')
assert(publicados.includes('daniel'), 'DAN debe seguir publicado')
assert(publicados.includes('oseas'), 'HOS debe seguir publicado')
assert(publicados.includes('joel'), 'JOL debe seguir publicado')
assert(publicados.includes('amos'), 'AMO debe seguir publicado')
assert(publicados.includes('abdias'), 'OBA debe seguir publicado')
assert(publicados.includes('jonas'), 'JON debe seguir publicado')
assert(publicados.includes('miqueas'), 'MIC debe seguir publicado')
assert(publicados.includes('nahum'), 'NAM debe seguir publicado')
assert(publicados.includes('habacuc'), 'HAB debe seguir publicado')
assert(publicados.includes('sofonias'), 'ZEP debe estar publicado')
assert(publicados.includes('hageo'), 'HAG debe estar publicado')
assert(publicados.includes('zacarias'), 'ZEC debe estar publicado')
assert(publicados.includes('malaquias'), 'MAL debe seguir publicado')
assert(publicados.includes('mateo'), 'MAT debe seguir publicado')
assert(publicados.includes('marcos'), 'MRK debe seguir publicado')
assert(publicados.includes('lucas'), 'LUK debe seguir publicado')
assert(publicados.includes('juan'), 'JHN debe seguir publicado')
assert(publicados.includes('hechos'), 'ACT debe seguir publicado')
assert(publicados.includes('romanos'), 'ROM debe seguir publicado')
assert(publicados.includes('1-corintios'), '1CO debe seguir publicado')
assert(publicados.includes('2-corintios'), '2CO debe seguir publicado')
assert(publicados.includes('galatas'), 'GAL debe seguir publicado')
assert(publicados.includes('efesios'), 'EPH debe seguir publicado')
assert(publicados.includes('filipenses'), 'PHP debe seguir publicado')
assert(publicados.includes('colosenses'), 'COL debe seguir publicado')
assert(publicados.includes('1-tesalonicenses'), '1TH debe seguir publicado')
assert(publicados.includes('2-tesalonicenses'), '2TH debe seguir publicado')
assert(publicados.includes('1-timoteo'), '1TI debe seguir publicado')
assert(publicados.includes('2-timoteo'), '2TI debe seguir publicado')
assert(publicados.includes('tito'), 'TIT debe seguir publicado')
assert(publicados.includes('filemon'), 'PHM debe seguir publicado')
assert(publicados.includes('hebreos'), 'HEB debe seguir publicado')
assert(publicados.includes('santiago'), 'JAS debe estar publicado')
assert(publicados.includes('1-pedro'), '1PE debe estar publicado')
assert(publicados.includes('2-pedro'), '2PE debe estar publicado')
assert(publicados.includes('1-juan'), '1JN debe estar publicado')
assert(publicados.includes('2-juan'), '2JN debe estar publicado')
assert(publicados.includes('3-juan'), '3JN debe estar publicado')
assert(publicados.includes('judas'), 'JUD debe estar publicado')
assert(publicados.includes('apocalipsis'), 'REV debe estar publicado')
assert(publicados.length === 66, `publicados=${publicados.join(',')}`)

assert(!existsSync(join(dataDir, 'notas', 'rvr-esquematizada', 'ZEP.json')), 'ZEP no debe tener notas')

console.log('OK: capas ZEP')
console.log(`  versos=${rvrKeys.length} relatos=${taxonomia.temas.length} publicados=${publicados.join(',')}`)
