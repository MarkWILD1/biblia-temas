import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_JOB, TEMAS_JOB } from './temas-de-pericopa-job.mjs'
import { PERICOPAS_JOB } from './temas-job.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'JOB',
  slug: 'job',
  pericopas: PERICOPAS_JOB,
  temas: TEMAS_JOB,
  pericopaATemas: PERICOPA_A_TEMAS_JOB,
})
console.log(`Escrito data/temas-de-pericopa/job.json (${TEMAS_JOB.length} temas)`)
