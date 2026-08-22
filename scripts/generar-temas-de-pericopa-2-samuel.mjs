import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_2_SAMUEL, TEMAS_2_SAMUEL } from './temas-de-pericopa-2-samuel.mjs'
import { PERICOPAS_2_SAMUEL } from './temas-2-samuel.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '2SA',
  slug: '2-samuel',
  pericopas: PERICOPAS_2_SAMUEL,
  temas: TEMAS_2_SAMUEL,
  pericopaATemas: PERICOPA_A_TEMAS_2_SAMUEL,
})
console.log(`Escrito data/temas-de-pericopa/2-samuel.json (${TEMAS_2_SAMUEL.length} temas)`)
