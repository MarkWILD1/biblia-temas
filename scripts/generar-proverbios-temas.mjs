import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { parseProverbios } from './parse-proverbios.mjs';
import { clasificarVersiculo } from './clasificar-versiculo.mjs';
import { TEMAS } from './temas-proverbios.mjs';
import { getOverrides } from './overrides-proverbios.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, '..', 'proverbios-por-temas.json');

function validarCobertura(versiculos, asignaciones) {
  if (versiculos.length !== 915) {
    throw new Error(`Se esperaban 915 versículos, se obtuvieron ${versiculos.length}`);
  }

  const referencias = new Set();
  for (const versiculo of versiculos) {
    if (!versiculo.texto) {
      throw new Error(`Texto vacío en ${versiculo.referencia}`);
    }
    if (referencias.has(versiculo.referencia)) {
      throw new Error(`Referencia duplicada: ${versiculo.referencia}`);
    }
    referencias.add(versiculo.referencia);
    if (!asignaciones[versiculo.referencia]) {
      throw new Error(`Versículo sin clasificar: ${versiculo.referencia}`);
    }
  }
}

function construirJson(versiculos, overrides) {
  const temas = TEMAS.map((tema) => ({
    id: tema.id,
    nombre: tema.nombre,
    conteoOrientativo: tema.conteoOrientativo,
    conteo: 0,
    versiculos: [],
  }));

  const indice = {};

  for (const versiculo of versiculos) {
    const temaId = clasificarVersiculo(versiculo, overrides);
    const tema = temas.find((item) => item.id === temaId);

    if (!tema) {
      throw new Error(`Tema inválido ${temaId} para ${versiculo.referencia}`);
    }

    tema.versiculos.push({
      capitulo: versiculo.capitulo,
      versiculo: versiculo.versiculo,
      referencia: versiculo.referencia,
      texto: versiculo.texto,
    });

    tema.conteo += 1;
    indice[versiculo.referencia] = temaId;
  }

  return {
    libro: 'Proverbios',
    idioma: 'es',
    totalVersiculos: versiculos.length,
    temas,
    indice,
    meta: {
      generado: new Date().toISOString().slice(0, 10),
      fuente: 'proverbios.js',
      metodo: 'clasificacion-semantica',
    },
  };
}

function imprimirReporte(resultado) {
  console.log('\n=== Reporte de conteos por tema ===\n');
  console.log(
    'ID  Tema'.padEnd(42) +
      'Real'.padStart(6) +
      'Orient.'.padStart(8) +
      'Diff'.padStart(7)
  );
  console.log('-'.repeat(63));

  let totalReal = 0;
  let totalOrient = 0;

  for (const tema of resultado.temas) {
    const diff = tema.conteo - tema.conteoOrientativo;
    const diffStr = diff >= 0 ? `+${diff}` : `${diff}`;
    console.log(
      `${String(tema.id).padStart(2)}  ${tema.nombre.slice(0, 38).padEnd(38)}` +
        `${String(tema.conteo).padStart(6)}` +
        `${String(tema.conteoOrientativo).padStart(8)}` +
        `${diffStr.padStart(7)}`
    );
    totalReal += tema.conteo;
    totalOrient += tema.conteoOrientativo;
  }

  console.log('-'.repeat(63));
  console.log(
    `    ${'TOTAL'.padEnd(38)}` +
      `${String(totalReal).padStart(6)}` +
      `${String(totalOrient).padStart(8)}` +
      `${String(totalReal - totalOrient).padStart(7)}`
  );
}

function main() {
  const versiculos = parseProverbios();
  const overrides = getOverrides();
  const resultado = construirJson(versiculos, overrides);

  validarCobertura(versiculos, resultado.indice);

  writeFileSync(OUTPUT_PATH, `${JSON.stringify(resultado, null, 2)}\n`, 'utf8');

  console.log(`Archivo generado: ${OUTPUT_PATH}`);
  console.log(`Versículos clasificados: ${resultado.totalVersiculos}`);
  imprimirReporte(resultado);
}

main();
