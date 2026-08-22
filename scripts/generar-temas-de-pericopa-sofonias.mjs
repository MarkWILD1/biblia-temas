import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_SOFONIAS, TEMAS_SOFONIAS } from './temas-de-pericopa-sofonias.mjs'
import { PERICOPAS_SOFONIAS } from './temas-sofonias.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'ZEP',
  slug: 'sofonias',
  pericopas: PERICOPAS_SOFONIAS,
  temas: TEMAS_SOFONIAS,
  pericopaATemas: PERICOPA_A_TEMAS_SOFONIAS,
})
console.log(`Escrito data/temas-de-pericopa/sofonias.json (${TEMAS_SOFONIAS.length} temas)`)
