import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_EZEQUIEL, TEMAS_EZEQUIEL } from './temas-de-pericopa-ezequiel.mjs'
import { PERICOPAS_EZEQUIEL } from './temas-ezequiel.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'EZK',
  slug: 'ezequiel',
  pericopas: PERICOPAS_EZEQUIEL,
  temas: TEMAS_EZEQUIEL,
  pericopaATemas: PERICOPA_A_TEMAS_EZEQUIEL,
})
console.log(`Escrito data/temas-de-pericopa/ezequiel.json (${TEMAS_EZEQUIEL.length} temas)`)
