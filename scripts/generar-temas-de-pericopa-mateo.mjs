import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_MATEO, TEMAS_MATEO } from './temas-de-pericopa-mateo.mjs'
import { PERICOPAS_MATEO } from './temas-mateo.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'MAT',
  slug: 'mateo',
  pericopas: PERICOPAS_MATEO,
  temas: TEMAS_MATEO,
  pericopaATemas: PERICOPA_A_TEMAS_MATEO,
})
console.log(`Escrito data/temas-de-pericopa/mateo.json (${TEMAS_MATEO.length} temas)`)
