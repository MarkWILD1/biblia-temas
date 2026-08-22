import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_ROMANOS, TEMAS_ROMANOS } from './temas-de-pericopa-romanos.mjs'
import { PERICOPAS_ROMANOS } from './temas-romanos.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'ROM',
  slug: 'romanos',
  pericopas: PERICOPAS_ROMANOS,
  temas: TEMAS_ROMANOS,
  pericopaATemas: PERICOPA_A_TEMAS_ROMANOS,
})
console.log(`Escrito data/temas-de-pericopa/romanos.json (${TEMAS_ROMANOS.length} temas)`)
