import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirCapasDesdeBlob } from './lib/escribir-capas-proverbios.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const blobPath = join(root, 'proverbios-por-temas.json')
const blob = JSON.parse(readFileSync(blobPath, 'utf8'))
const resultado = escribirCapasDesdeBlob(blob, root)

console.log(`Capas escritas en data/`)
console.log(`Asignaciones: ${resultado.asignaciones}`)
console.log(`Temas: ${resultado.slugs.length}`)
console.log(`Notas: ${resultado.notas}`)
