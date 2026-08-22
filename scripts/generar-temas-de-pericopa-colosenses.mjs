import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_COLOSENSES, TEMAS_COLOSENSES } from './temas-de-pericopa-colosenses.mjs'
import { PERICOPAS_COLOSENSES } from './temas-colosenses.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'COL',
  slug: 'colosenses',
  pericopas: PERICOPAS_COLOSENSES,
  temas: TEMAS_COLOSENSES,
  pericopaATemas: PERICOPA_A_TEMAS_COLOSENSES,
})
console.log(`Escrito data/temas-de-pericopa/colosenses.json (${TEMAS_COLOSENSES.length} temas)`)
