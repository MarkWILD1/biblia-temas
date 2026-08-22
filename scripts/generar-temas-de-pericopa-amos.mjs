import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_AMOS, TEMAS_AMOS } from './temas-de-pericopa-amos.mjs'
import { PERICOPAS_AMOS } from './temas-amos.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'AMO',
  slug: 'amos',
  pericopas: PERICOPAS_AMOS,
  temas: TEMAS_AMOS,
  pericopaATemas: PERICOPA_A_TEMAS_AMOS,
})
console.log(`Escrito data/temas-de-pericopa/amos.json (${TEMAS_AMOS.length} temas)`)
