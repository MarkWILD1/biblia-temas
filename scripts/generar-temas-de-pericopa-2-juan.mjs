import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_2_JUAN, TEMAS_2_JUAN } from './temas-de-pericopa-2-juan.mjs'
import { PERICOPAS_2_JUAN } from './temas-2-juan.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '2JN',
  slug: '2-juan',
  pericopas: PERICOPAS_2_JUAN,
  temas: TEMAS_2_JUAN,
  pericopaATemas: PERICOPA_A_TEMAS_2_JUAN,
})
console.log(`Escrito data/temas-de-pericopa/2-juan.json (${TEMAS_2_JUAN.length} temas)`)
