import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS, TEMAS_GENESIS } from './temas-de-pericopa-genesis.mjs'
import { PERICOPAS_GENESIS } from './temas-genesis.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'GEN',
  slug: 'genesis',
  pericopas: PERICOPAS_GENESIS,
  temas: TEMAS_GENESIS,
  pericopaATemas: PERICOPA_A_TEMAS,
})
console.log(`Escrito data/temas-de-pericopa/genesis.json (${TEMAS_GENESIS.length} temas)`)
