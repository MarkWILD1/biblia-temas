import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_JUECES, TEMAS_JUECES } from './temas-de-pericopa-jueces.mjs'
import { PERICOPAS_JUECES } from './temas-jueces.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'JDG',
  slug: 'jueces',
  pericopas: PERICOPAS_JUECES,
  temas: TEMAS_JUECES,
  pericopaATemas: PERICOPA_A_TEMAS_JUECES,
})
console.log(`Escrito data/temas-de-pericopa/jueces.json (${TEMAS_JUECES.length} temas)`)
