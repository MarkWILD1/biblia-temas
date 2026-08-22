export function extraerLibroMap(bible, usfm, sourceName) {
  const book = bible.books?.find((item) => item.book_usfm === usfm)
  if (!book) throw new Error(`No se encontró ${usfm} en ${sourceName}`)

  const map = new Map()

  for (const chapter of book.chapters) {
    const capitulo = Number(String(chapter.chapter_usfm).split('.')[1])
    if (!Number.isFinite(capitulo)) {
      throw new Error(`chapter_usfm inválido en ${sourceName}: ${chapter.chapter_usfm}`)
    }

    for (const item of chapter.items ?? []) {
      if (item.type !== 'verse' || !item.verse_numbers?.length) continue
      const texto = (item.lines ?? []).join(' ').replace(/\s+/g, ' ').trim()
      if (!texto) continue

      for (const versiculo of item.verse_numbers) {
        map.set(`${capitulo}:${versiculo}`, texto)
      }
    }
  }

  if (map.size === 0) {
    throw new Error(`${usfm} quedó vacío en ${sourceName}`)
  }

  return map
}

export function mapToObject(map) {
  return Object.fromEntries(
    [...map.entries()].sort((a, b) => {
      const [ac, av] = a[0].split(':').map(Number)
      const [bc, bv] = b[0].split(':').map(Number)
      return ac - bc || av - bv
    }),
  )
}
