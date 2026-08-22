import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_OSEAS, TEMAS_OSEAS } from './temas-de-pericopa-oseas.mjs'
import { PERICOPAS_OSEAS } from './temas-oseas.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'HOS',
  slug: 'oseas',
  pericopas: PERICOPAS_OSEAS,
  temas: TEMAS_OSEAS,
  pericopaATemas: PERICOPA_A_TEMAS_OSEAS,
})
console.log(`Escrito data/temas-de-pericopa/oseas.json (${TEMAS_OSEAS.length} temas)`)
