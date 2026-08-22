import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extraerLibroMap, mapToObject } from './lib/extraer-libro-snapshot.mjs'
import { SNAPSHOTS, loadSnapshot } from './lib/snapshots-biblia.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const usfm = String(process.argv[2] ?? '').toUpperCase()

if (!usfm) {
  throw new Error('Uso: node scripts/extraer-libro-versiones.mjs EXO')
}

function writeVersion(id, versiculos) {
  const outDir = join(root, 'data', 'versiones', id)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(
    join(outDir, `${usfm}.json`),
    `${JSON.stringify({ version: id, libro: usfm, versiculos }, null, 2)}\n`,
    'utf8',
  )
}

const maps = {}
for (const snapshot of SNAPSHOTS) {
  const bible = await loadSnapshot(snapshot)
  maps[snapshot.id] = extraerLibroMap(bible, usfm, snapshot.file)
  console.log(`${snapshot.id}: ${maps[snapshot.id].size} versos`)
}

const rvrKeys = [...maps.rvr1960.keys()]

// NTV une Sal 47:9-10 (numeración inglesa) en un solo verso. No es un
// remapeo de capítulos: el texto de NTV 47:9 cubre RVR 47:9 y 47:10.
if (usfm === 'PSA' && maps.ntv.has('47:9') && !maps.ntv.has('47:10')) {
  maps.ntv.set('47:10', maps.ntv.get('47:9'))
}

// Versos de RVR ausentes en el texto crítico de NTV/DHH/TLA (p. ej. Mt 17:21).
// No es remapeo: la celda queda marcada. TLA a veces sí los trae.
const OMITIDO = '[Este verso no aparece en esta versión.]'
for (const id of ['ntv', 'dhh', 'tla']) {
  const missing = rvrKeys.filter((key) => !maps[id].has(key))
  if (missing.length > 0) {
    console.log(`${id}: ${missing.length} omitidos respecto de RVR: ${missing.join(', ')}`)
    for (const key of missing) maps[id].set(key, OMITIDO)
  }
}

for (const snapshot of SNAPSHOTS) {
  const onlyRvrKeys = new Map(rvrKeys.map((key) => [key, maps[snapshot.id].get(key)]))
  writeVersion(snapshot.id, mapToObject(onlyRvrKeys))
}

console.log(`Escrito ${usfm} en 4 versiones. Claves RVR: ${rvrKeys.length}`)
