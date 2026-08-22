import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { temaSlug } from './lib/escribir-capas-proverbios.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

function load(rel) {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8'))
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const blob = JSON.parse(readFileSync(join(root, 'proverbios-por-temas.json'), 'utf8'))
const canon = load('canon.json')
const taxonomia = load('taxonomias/proverbios.json')
const asignacionesDoc = load('asignaciones/PRO.json')
const asignaciones = asignacionesDoc.asignaciones
const rvr = load('versiones/rvr1960/PRO.json').versiculos
const ntv = load('versiones/ntv/PRO.json').versiculos
const dhh = load('versiones/dhh/PRO.json').versiculos
const tla = load('versiones/tla/PRO.json').versiculos
const notas = load('notas/rvr-esquematizada/PRO.json').notas

const keys = Object.keys(asignaciones)
const slugs = new Set(taxonomia.temas.map((t) => t.slug))

assert(keys.length === 915, `T1: se esperaban 915 asignaciones, hay ${keys.length}`)
assert(
  keys.every((key) => slugs.has(asignaciones[key])),
  'T1: hay asignaciones que no apuntan a un slug de la taxonomía',
)
assert(slugs.size === 12, `T1: se esperaban 12 slugs, hay ${slugs.size}`)

for (const [nombre, mapa] of [
  ['rvr1960', rvr],
  ['ntv', ntv],
  ['dhh', dhh],
  ['tla', tla],
]) {
  const mapaKeys = Object.keys(mapa)
  assert(mapaKeys.length === 915, `T2: ${nombre} tiene ${mapaKeys.length} claves`)
  const missing = keys.filter((key) => !mapa[key])
  assert(missing.length === 0, `T2: ${nombre} no tiene ${missing.slice(0, 5).join(', ')}`)
}

for (const key of Object.keys(rvr)) {
  assert(typeof rvr[key] === 'string', `T3: rvr ${key} no es texto`)
  assert(!('nota' in Object(rvr[key])), `T3: la nota no debe ir en la versión (${key})`)
}

assert(typeof notas === 'object' && !Array.isArray(notas), 'T3: notas debe ser un mapa aparte')

for (const tema of blob.temas) {
  const slug = temaSlug(tema.nombre)
  const count = keys.filter((key) => asignaciones[key] === slug).length
  assert(
    count === tema.conteo,
    `T7: ${slug} tiene ${count} versos en capas y ${tema.conteo} en el JSON`,
  )
}

const publicados = canon.libros.filter((libro) => libro.estado === 'publicado').map((libro) => libro.slug)
assert(publicados.includes('proverbios'), 'T8: Proverbios debe seguir publicado')
assert(publicados.includes('genesis'), 'T8: Génesis debe estar publicado')
assert(publicados.includes('exodo'), 'T8: Éxodo debe estar publicado')
assert(publicados.includes('levitico'), 'T8: Levítico debe estar publicado')
assert(publicados.includes('numeros'), 'T8: Números debe estar publicado')
assert(publicados.includes('deuteronomio'), 'T8: Deuteronomio debe estar publicado')
assert(publicados.includes('josue'), 'T8: Josué debe estar publicado')
assert(publicados.includes('jueces'), 'T8: Jueces debe estar publicado')
assert(publicados.includes('rut'), 'T8: Rut debe estar publicado')
assert(publicados.includes('1-samuel'), 'T8: 1 Samuel debe estar publicado')
assert(publicados.includes('2-samuel'), 'T8: 2 Samuel debe estar publicado')
assert(publicados.includes('1-reyes'), 'T8: 1 Reyes debe estar publicado')
assert(publicados.includes('2-reyes'), 'T8: 2 Reyes debe estar publicado')
assert(publicados.includes('1-cronicas'), 'T8: 1 Crónicas debe estar publicado')
assert(publicados.includes('2-cronicas'), 'T8: 2 Crónicas debe estar publicado')
assert(publicados.includes('esdras'), 'T8: Esdras debe estar publicado')
assert(publicados.includes('nehemias'), 'T8: Nehemías debe estar publicado')
assert(publicados.includes('ester'), 'T8: Ester debe estar publicado')
assert(publicados.includes('job'), 'T8: Job debe estar publicado')
assert(publicados.includes('salmos'), 'T8: Salmos debe estar publicado')
assert(publicados.includes('eclesiastes'), 'T8: Eclesiastés debe estar publicado')
assert(publicados.includes('cantares'), 'T8: Cantares debe estar publicado')
assert(publicados.includes('isaias'), 'T8: Isaías debe estar publicado')
assert(publicados.includes('jeremias'), 'T8: Jeremías debe estar publicado')
assert(publicados.includes('lamentaciones'), 'T8: Lamentaciones debe estar publicado')
assert(publicados.includes('ezequiel'), 'T8: Ezequiel debe estar publicado')
assert(publicados.includes('daniel'), 'T8: Daniel debe estar publicado')
assert(publicados.includes('oseas'), 'T8: Oseas debe estar publicado')
assert(publicados.includes('joel'), 'T8: Joel debe estar publicado')
assert(publicados.includes('amos'), 'T8: Amós debe estar publicado')
assert(publicados.includes('abdias'), 'T8: Abdías debe estar publicado')
assert(publicados.includes('jonas'), 'T8: Jonás debe estar publicado')
assert(publicados.includes('miqueas'), 'T8: Miqueas debe estar publicado')
assert(publicados.includes('nahum'), 'T8: Nahúm debe estar publicado')
assert(publicados.includes('habacuc'), 'T8: Habacuc debe estar publicado')
assert(publicados.includes('sofonias'), 'T8: Sofonías debe estar publicado')
assert(publicados.includes('hageo'), 'T8: Hageo debe estar publicado')
assert(publicados.includes('zacarias'), 'T8: Zacarías debe estar publicado')
assert(publicados.includes('malaquias'), 'T8: Malaquías debe estar publicado')
assert(publicados.includes('mateo'), 'T8: Mateo debe estar publicado')
assert(publicados.includes('marcos'), 'T8: Marcos debe estar publicado')
assert(publicados.includes('lucas'), 'T8: Lucas debe estar publicado')
assert(publicados.includes('juan'), 'T8: Juan debe estar publicado')
assert(publicados.includes('hechos'), 'T8: Hechos debe estar publicado')
assert(publicados.includes('romanos'), 'T8: Romanos debe estar publicado')
assert(publicados.includes('1-corintios'), 'T8: 1 Corintios debe seguir publicado')
assert(publicados.includes('2-corintios'), 'T8: 2 Corintios debe seguir publicado')
assert(publicados.includes('galatas'), 'T8: Gálatas debe seguir publicado')
assert(publicados.includes('efesios'), 'T8: Efesios debe seguir publicado')
assert(publicados.includes('filipenses'), 'T8: Filipenses debe seguir publicado')
assert(publicados.includes('colosenses'), 'T8: Colosenses debe seguir publicado')
assert(publicados.includes('1-tesalonicenses'), 'T8: 1 Tesalonicenses debe seguir publicado')
assert(publicados.includes('2-tesalonicenses'), 'T8: 2 Tesalonicenses debe seguir publicado')
assert(publicados.includes('1-timoteo'), 'T8: 1 Timoteo debe seguir publicado')
assert(publicados.includes('2-timoteo'), 'T8: 2 Timoteo debe seguir publicado')
assert(publicados.includes('tito'), 'T8: Tito debe seguir publicado')
assert(publicados.includes('filemon'), 'T8: Filemón debe seguir publicado')
assert(publicados.includes('hebreos'), 'T8: Hebreos debe seguir publicado')
assert(publicados.includes('santiago'), 'T8: Santiago debe estar publicado')
assert(publicados.includes('1-pedro'), 'T8: 1 Pedro debe estar publicado')
assert(publicados.includes('2-pedro'), 'T8: 2 Pedro debe estar publicado')
assert(publicados.includes('1-juan'), 'T8: 1 Juan debe estar publicado')
assert(publicados.includes('2-juan'), 'T8: 2 Juan debe estar publicado')
assert(publicados.includes('3-juan'), 'T8: 3 Juan debe estar publicado')
assert(publicados.includes('judas'), 'T8: Judas debe estar publicado')
assert(publicados.includes('apocalipsis'), 'T8: Apocalipsis debe estar publicado')
assert(
  canon.libros.filter((libro) => libro.estado === 'proximo').length === 0,
  'T8: los otros 20 libros deben estar como próximo',
)

for (const key of keys) {
  assert(rvr[key] && ntv[key] && dhh[key] && tla[key], `T9: ${key} no tiene las cuatro versiones`)
}

console.log('OK: T1–T4, T7–T9')
console.log(`  asignaciones=${keys.length} temas=${slugs.size} notas=${Object.keys(notas).length}`)
