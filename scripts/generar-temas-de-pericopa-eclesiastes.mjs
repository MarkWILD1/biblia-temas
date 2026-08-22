import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_ECLESIASTES, TEMAS_ECLESIASTES } from './temas-de-pericopa-eclesiastes.mjs'
import { PERICOPAS_ECLESIASTES } from './temas-eclesiastes.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'ECC',
  slug: 'eclesiastes',
  pericopas: PERICOPAS_ECLESIASTES,
  temas: TEMAS_ECLESIASTES,
  pericopaATemas: PERICOPA_A_TEMAS_ECLESIASTES,
})
console.log(`Escrito data/temas-de-pericopa/eclesiastes.json (${TEMAS_ECLESIASTES.length} temas)`)
