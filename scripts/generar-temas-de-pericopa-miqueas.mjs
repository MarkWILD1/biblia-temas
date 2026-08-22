import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_MIQUEAS, TEMAS_MIQUEAS } from './temas-de-pericopa-miqueas.mjs'
import { PERICOPAS_MIQUEAS } from './temas-miqueas.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'MIC',
  slug: 'miqueas',
  pericopas: PERICOPAS_MIQUEAS,
  temas: TEMAS_MIQUEAS,
  pericopaATemas: PERICOPA_A_TEMAS_MIQUEAS,
})
console.log(`Escrito data/temas-de-pericopa/miqueas.json (${TEMAS_MIQUEAS.length} temas)`)
