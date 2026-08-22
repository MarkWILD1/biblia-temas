import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const script = join(dirname(fileURLToPath(import.meta.url)), 'extraer-libro-versiones.mjs')
const result = spawnSync(process.execPath, [script, 'GEN'], { stdio: 'inherit' })
process.exit(result.status ?? 1)
