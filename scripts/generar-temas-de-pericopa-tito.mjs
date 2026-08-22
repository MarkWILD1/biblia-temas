import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_TITO, TEMAS_TITO } from './temas-de-pericopa-tito.mjs'
import { PERICOPAS_TITO } from './temas-tito.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'TIT',
  slug: 'tito',
  pericopas: PERICOPAS_TITO,
  temas: TEMAS_TITO,
  pericopaATemas: PERICOPA_A_TEMAS_TITO,
})
console.log(`Escrito data/temas-de-pericopa/tito.json (${TEMAS_TITO.length} temas)`)
