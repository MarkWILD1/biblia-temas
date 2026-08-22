export function parseRef(ref) {
  const [capitulo, versiculo] = String(ref).split(':').map(Number)
  if (!Number.isFinite(capitulo) || !Number.isFinite(versiculo)) {
    throw new Error(`Referencia inválida: ${ref}`)
  }
  return { capitulo, versiculo }
}

export function cmpRef(a, b) {
  const left = parseRef(a)
  const right = parseRef(b)
  return left.capitulo - right.capitulo || left.versiculo - right.versiculo
}

export function inRange(key, desde, hasta) {
  return cmpRef(key, desde) >= 0 && cmpRef(key, hasta) <= 0
}

export function sortKeys(keys) {
  return [...keys].sort(cmpRef)
}
