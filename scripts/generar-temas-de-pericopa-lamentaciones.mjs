import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_LAMENTACIONES, TEMAS_LAMENTACIONES } from './temas-de-pericopa-lamentaciones.mjs'
import { PERICOPAS_LAMENTACIONES } from './temas-lamentaciones.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'LAM',
  slug: 'lamentaciones',
  pericopas: PERICOPAS_LAMENTACIONES,
  temas: TEMAS_LAMENTACIONES,
  pericopaATemas: PERICOPA_A_TEMAS_LAMENTACIONES,
})
console.log(`Escrito data/temas-de-pericopa/lamentaciones.json (${TEMAS_LAMENTACIONES.length} temas)`)
