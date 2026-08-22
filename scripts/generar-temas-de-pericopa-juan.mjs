import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_JUAN, TEMAS_JUAN } from './temas-de-pericopa-juan.mjs'
import { PERICOPAS_JUAN } from './temas-juan.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'JHN',
  slug: 'juan',
  pericopas: PERICOPAS_JUAN,
  temas: TEMAS_JUAN,
  pericopaATemas: PERICOPA_A_TEMAS_JUAN,
})
console.log(`Escrito data/temas-de-pericopa/juan.json (${TEMAS_JUAN.length} temas)`)
