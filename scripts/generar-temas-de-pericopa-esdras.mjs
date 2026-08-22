import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_ESDRAS, TEMAS_ESDRAS } from './temas-de-pericopa-esdras.mjs'
import { PERICOPAS_ESDRAS } from './temas-esdras.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'EZR',
  slug: 'esdras',
  pericopas: PERICOPAS_ESDRAS,
  temas: TEMAS_ESDRAS,
  pericopaATemas: PERICOPA_A_TEMAS_ESDRAS,
})
console.log(`Escrito data/temas-de-pericopa/esdras.json (${TEMAS_ESDRAS.length} temas)`)
