import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_HECHOS, TEMAS_HECHOS } from './temas-de-pericopa-hechos.mjs'
import { PERICOPAS_HECHOS } from './temas-hechos.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'ACT',
  slug: 'hechos',
  pericopas: PERICOPAS_HECHOS,
  temas: TEMAS_HECHOS,
  pericopaATemas: PERICOPA_A_TEMAS_HECHOS,
})
console.log(`Escrito data/temas-de-pericopa/hechos.json (${TEMAS_HECHOS.length} temas)`)
