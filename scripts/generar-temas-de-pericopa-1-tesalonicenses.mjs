import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_1_TESALONICENSES, TEMAS_1_TESALONICENSES } from './temas-de-pericopa-1-tesalonicenses.mjs'
import { PERICOPAS_1_TESALONICENSES } from './temas-1-tesalonicenses.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '1TH',
  slug: '1-tesalonicenses',
  pericopas: PERICOPAS_1_TESALONICENSES,
  temas: TEMAS_1_TESALONICENSES,
  pericopaATemas: PERICOPA_A_TEMAS_1_TESALONICENSES,
})
console.log(`Escrito data/temas-de-pericopa/1-tesalonicenses.json (${TEMAS_1_TESALONICENSES.length} temas)`)
