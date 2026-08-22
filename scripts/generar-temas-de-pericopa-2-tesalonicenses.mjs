import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_2_TESALONICENSES, TEMAS_2_TESALONICENSES } from './temas-de-pericopa-2-tesalonicenses.mjs'
import { PERICOPAS_2_TESALONICENSES } from './temas-2-tesalonicenses.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '2TH',
  slug: '2-tesalonicenses',
  pericopas: PERICOPAS_2_TESALONICENSES,
  temas: TEMAS_2_TESALONICENSES,
  pericopaATemas: PERICOPA_A_TEMAS_2_TESALONICENSES,
})
console.log(`Escrito data/temas-de-pericopa/2-tesalonicenses.json (${TEMAS_2_TESALONICENSES.length} temas)`)
