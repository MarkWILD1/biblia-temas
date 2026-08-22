import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_JEREMIAS, TEMAS_JEREMIAS } from './temas-de-pericopa-jeremias.mjs'
import { PERICOPAS_JEREMIAS } from './temas-jeremias.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'JER',
  slug: 'jeremias',
  pericopas: PERICOPAS_JEREMIAS,
  temas: TEMAS_JEREMIAS,
  pericopaATemas: PERICOPA_A_TEMAS_JEREMIAS,
})
console.log(`Escrito data/temas-de-pericopa/jeremias.json (${TEMAS_JEREMIAS.length} temas)`)
