import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_JOEL, TEMAS_JOEL } from './temas-de-pericopa-joel.mjs'
import { PERICOPAS_JOEL } from './temas-joel.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'JOL',
  slug: 'joel',
  pericopas: PERICOPAS_JOEL,
  temas: TEMAS_JOEL,
  pericopaATemas: PERICOPA_A_TEMAS_JOEL,
})
console.log(`Escrito data/temas-de-pericopa/joel.json (${TEMAS_JOEL.length} temas)`)
