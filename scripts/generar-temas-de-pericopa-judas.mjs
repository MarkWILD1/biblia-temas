import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_JUDAS, TEMAS_JUDAS } from './temas-de-pericopa-judas.mjs'
import { PERICOPAS_JUDAS } from './temas-judas.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'JUD',
  slug: 'judas',
  pericopas: PERICOPAS_JUDAS,
  temas: TEMAS_JUDAS,
  pericopaATemas: PERICOPA_A_TEMAS_JUDAS,
})
console.log(`Escrito data/temas-de-pericopa/judas.json (${TEMAS_JUDAS.length} temas)`)
