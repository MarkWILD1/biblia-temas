import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_1_JUAN, TEMAS_1_JUAN } from './temas-de-pericopa-1-juan.mjs'
import { PERICOPAS_1_JUAN } from './temas-1-juan.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '1JN',
  slug: '1-juan',
  pericopas: PERICOPAS_1_JUAN,
  temas: TEMAS_1_JUAN,
  pericopaATemas: PERICOPA_A_TEMAS_1_JUAN,
})
console.log(`Escrito data/temas-de-pericopa/1-juan.json (${TEMAS_1_JUAN.length} temas)`)
