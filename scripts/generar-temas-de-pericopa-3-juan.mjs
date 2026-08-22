import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_3_JUAN, TEMAS_3_JUAN } from './temas-de-pericopa-3-juan.mjs'
import { PERICOPAS_3_JUAN } from './temas-3-juan.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '3JN',
  slug: '3-juan',
  pericopas: PERICOPAS_3_JUAN,
  temas: TEMAS_3_JUAN,
  pericopaATemas: PERICOPA_A_TEMAS_3_JUAN,
})
console.log(`Escrito data/temas-de-pericopa/3-juan.json (${TEMAS_3_JUAN.length} temas)`)
