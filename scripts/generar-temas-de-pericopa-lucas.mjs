import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_LUCAS, TEMAS_LUCAS } from './temas-de-pericopa-lucas.mjs'
import { PERICOPAS_LUCAS } from './temas-lucas.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'LUK',
  slug: 'lucas',
  pericopas: PERICOPAS_LUCAS,
  temas: TEMAS_LUCAS,
  pericopaATemas: PERICOPA_A_TEMAS_LUCAS,
})
console.log(`Escrito data/temas-de-pericopa/lucas.json (${TEMAS_LUCAS.length} temas)`)
