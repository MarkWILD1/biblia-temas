import { TEMAS } from './temas-proverbios.mjs';

function normalizeForMatch(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function scoreKeyword(text, keyword) {
  const normalized = normalizeForMatch(text);
  const term = normalizeForMatch(keyword.term);
  if (!normalized.includes(term)) return 0;
  return keyword.weight;
}

function scoreSectionHint(notaSeccion, tema) {
  if (!notaSeccion || !tema.sectionHints?.length) return 0;
  const note = normalizeForMatch(notaSeccion);
  for (const hint of tema.sectionHints) {
    if (note.includes(normalizeForMatch(hint))) {
      return 12;
    }
  }
  return 0;
}

export function scoreVerse(versiculo) {
  const text = `${versiculo.texto} ${versiculo.notaSeccion ?? ''}`;

  return TEMAS.map((tema) => {
    let score = scoreSectionHint(versiculo.notaSeccion, tema);

    for (const keyword of tema.keywords) {
      score += scoreKeyword(text, keyword);
    }

    return { temaId: tema.id, score, prioridad: tema.prioridad };
  });
}

export function pickBestTema(scores) {
  const maxScore = Math.max(...scores.map((item) => item.score));

  if (maxScore === 0) {
    return 1;
  }

  const candidates = scores.filter((item) => item.score === maxScore);
  candidates.sort((a, b) => b.prioridad - a.prioridad);
  return candidates[0].temaId;
}

export function clasificarVersiculo(versiculo, overrides = {}) {
  if (overrides[versiculo.referencia]) {
    return overrides[versiculo.referencia];
  }

  const scores = scoreVerse(versiculo);
  return pickBestTema(scores);
}
