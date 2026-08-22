import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_ESTER, TEMAS_ESTER } from './temas-de-pericopa-ester.mjs'
import { PERICOPAS_ESTER } from './temas-ester.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'EST',
  slug: 'ester',
  pericopas: PERICOPAS_ESTER,
  temas: TEMAS_ESTER,
  pericopaATemas: PERICOPA_A_TEMAS_ESTER,
})
console.log(`Escrito data/temas-de-pericopa/ester.json (${TEMAS_ESTER.length} temas)`)
