import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_ISAIAS, TEMAS_ISAIAS } from './temas-de-pericopa-isaias.mjs'
import { PERICOPAS_ISAIAS } from './temas-isaias.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'ISA',
  slug: 'isaias',
  pericopas: PERICOPAS_ISAIAS,
  temas: TEMAS_ISAIAS,
  pericopaATemas: PERICOPA_A_TEMAS_ISAIAS,
})
console.log(`Escrito data/temas-de-pericopa/isaias.json (${TEMAS_ISAIAS.length} temas)`)
