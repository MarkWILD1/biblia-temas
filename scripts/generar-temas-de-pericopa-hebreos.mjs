import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_HEBREOS, TEMAS_HEBREOS } from './temas-de-pericopa-hebreos.mjs'
import { PERICOPAS_HEBREOS } from './temas-hebreos.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'HEB',
  slug: 'hebreos',
  pericopas: PERICOPAS_HEBREOS,
  temas: TEMAS_HEBREOS,
  pericopaATemas: PERICOPA_A_TEMAS_HEBREOS,
})
console.log(`Escrito data/temas-de-pericopa/hebreos.json (${TEMAS_HEBREOS.length} temas)`)
