import proverbios from '../proverbios.js';

const SECTION_HEADER_PATTERN =
  /\s*\/n(?:Amonestaciones?[^/]*|Elogio[^/]*|Preceptos[^/]*|Palabras del rey[^/]*)\s*$/i;

export function normalizeText(raw) {
  return raw
    .replace(/^\/n/, '')
    .replace(/\/n\/n/g, ' ')
    .replace(/\/n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractSectionNote(raw) {
  const match = raw.match(
    /\s*\/n((?:Amonestaciones?|Elogio|Preceptos)[^/]*)$/i
  );
  return match ? match[1].trim() : null;
}

export function cleanVerseText(raw) {
  const notaSeccion = extractSectionNote(raw);
  let texto = normalizeText(raw);

  if (notaSeccion) {
    const escaped = notaSeccion.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    texto = texto.replace(new RegExp(`\\s*${escaped}\\s*$`, 'i'), '').trim();
  }

  return { texto, notaSeccion };
}

export function parseProverbios() {
  const versiculos = [];

  proverbios.forEach((capitulo, capituloIndex) => {
    const capituloNum = capituloIndex + 1;

    capitulo.forEach((raw, versiculoIndex) => {
      const versiculoNum = versiculoIndex + 1;
      const { texto, notaSeccion } = cleanVerseText(raw);

      versiculos.push({
        capitulo: capituloNum,
        versiculo: versiculoNum,
        referencia: `${capituloNum}:${versiculoNum}`,
        texto,
        textoOriginal: raw,
        notaSeccion,
      });
    });
  });

  return versiculos;
}
