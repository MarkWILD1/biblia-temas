import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_ABDIAS, TEMAS_ABDIAS } from './temas-de-pericopa-abdias.mjs'
import { PERICOPAS_ABDIAS } from './temas-abdias.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'OBA',
  slug: 'abdias',
  pericopas: PERICOPAS_ABDIAS,
  temas: TEMAS_ABDIAS,
  pericopaATemas: PERICOPA_A_TEMAS_ABDIAS,
})
console.log(`Escrito data/temas-de-pericopa/abdias.json (${TEMAS_ABDIAS.length} temas)`)
