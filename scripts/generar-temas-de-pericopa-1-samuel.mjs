import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_1_SAMUEL, TEMAS_1_SAMUEL } from './temas-de-pericopa-1-samuel.mjs'
import { PERICOPAS_1_SAMUEL } from './temas-1-samuel.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '1SA',
  slug: '1-samuel',
  pericopas: PERICOPAS_1_SAMUEL,
  temas: TEMAS_1_SAMUEL,
  pericopaATemas: PERICOPA_A_TEMAS_1_SAMUEL,
})
console.log(`Escrito data/temas-de-pericopa/1-samuel.json (${TEMAS_1_SAMUEL.length} temas)`)
