import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_CANTARES, TEMAS_CANTARES } from './temas-de-pericopa-cantares.mjs'
import { PERICOPAS_CANTARES } from './temas-cantares.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'SNG',
  slug: 'cantares',
  pericopas: PERICOPAS_CANTARES,
  temas: TEMAS_CANTARES,
  pericopaATemas: PERICOPA_A_TEMAS_CANTARES,
})
console.log(`Escrito data/temas-de-pericopa/cantares.json (${TEMAS_CANTARES.length} temas)`)
