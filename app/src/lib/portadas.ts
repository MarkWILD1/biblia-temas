export interface TonoPortada {
  base: string
  deep: string
}

/** Paleta de portadas por grupo canónico. Ver DESIGN.md, sección 1. */
const TONOS: Record<string, TonoPortada> = {
  pentateuco: { base: '#8a6a3b', deep: '#5f4724' },
  historicos: { base: '#9c5a3c', deep: '#6d3a25' },
  poeticos: { base: '#6f7355', deep: '#4b4f38' },
  'profetas-mayores': { base: '#7c5a52', deep: '#523a34' },
  'profetas-menores': { base: '#a1803f', deep: '#6f5626' },
  evangelios: { base: '#8d5147', deep: '#5e332c' },
  hechos: { base: '#96703f', deep: '#664a26' },
  'epistolas-paulinas': { base: '#5f6b6a', deep: '#3f4948' },
  'epistolas-generales': { base: '#7a6a4e', deep: '#524734' },
  apocalipsis: { base: '#5b4a42', deep: '#3a2f29' },
}

const FALLBACK: TonoPortada = { base: '#7a6a4e', deep: '#524734' }

export function tonoDeGrupo(grupo: string): TonoPortada {
  return TONOS[grupo] ?? FALLBACK
}
