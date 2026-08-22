import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const cacheDir = join(root, '.cache', 'snapshots')

export const SNAPSHOTS = [
  {
    id: 'rvr1960',
    file: 'RVR1960_vid_149.json',
    url: 'https://mrk214.github.io/snapshots/es___spa___spa/RVR1960_vid_149.json',
  },
  {
    id: 'ntv',
    file: 'NTV_vid_127.json',
    url: 'https://mrk214.github.io/snapshots/es___spa___spa/NTV_vid_127.json',
  },
  {
    id: 'dhh',
    file: 'DHH94I_vid_52.json',
    url: 'https://mrk214.github.io/snapshots/es___spa___spa/DHH94I_vid_52.json',
  },
  {
    id: 'tla',
    file: 'TLA_vid_176.json',
    url: 'https://mrk214.github.io/snapshots/es___spa___spa/TLA_vid_176.json',
  },
]

export async function loadSnapshot(snapshot) {
  mkdirSync(cacheDir, { recursive: true })
  const cachePath = join(cacheDir, snapshot.file)

  if (!existsSync(cachePath)) {
    console.log(`Descargando ${snapshot.file}…`)
    const res = await fetch(snapshot.url)
    if (!res.ok) {
      throw new Error(`No se pudo bajar ${snapshot.url}: ${res.status} ${res.statusText}`)
    }
    writeFileSync(cachePath, await res.text(), 'utf8')
  } else {
    console.log(`Usando caché ${snapshot.file}`)
  }

  return JSON.parse(readFileSync(cachePath, 'utf8'))
}
