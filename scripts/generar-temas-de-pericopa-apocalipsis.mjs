import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_APOCALIPSIS, TEMAS_APOCALIPSIS } from './temas-de-pericopa-apocalipsis.mjs'
import { PERICOPAS_APOCALIPSIS } from './temas-apocalipsis.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'REV',
  slug: 'apocalipsis',
  pericopas: PERICOPAS_APOCALIPSIS,
  temas: TEMAS_APOCALIPSIS,
  pericopaATemas: PERICOPA_A_TEMAS_APOCALIPSIS,
})
console.log(`Escrito data/temas-de-pericopa/apocalipsis.json (${TEMAS_APOCALIPSIS.length} temas)`)
