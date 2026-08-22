import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_FILIPENSES, TEMAS_FILIPENSES } from './temas-de-pericopa-filipenses.mjs'
import { PERICOPAS_FILIPENSES } from './temas-filipenses.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'PHP',
  slug: 'filipenses',
  pericopas: PERICOPAS_FILIPENSES,
  temas: TEMAS_FILIPENSES,
  pericopaATemas: PERICOPA_A_TEMAS_FILIPENSES,
})
console.log(`Escrito data/temas-de-pericopa/filipenses.json (${TEMAS_FILIPENSES.length} temas)`)
