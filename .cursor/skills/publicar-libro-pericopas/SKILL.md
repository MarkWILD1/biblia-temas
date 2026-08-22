---
name: publicar-libro-pericopas
description: >-
  Publica un libro narrativo o legal en biblia-temas con perícopas exclusivas
  más una capa de temas multilabel. Usar cuando el usuario diga sigamos con
  [libro], publicar Génesis/Éxodo/Levítico/Números, agregar relatos o ejes,
  extraer un libro de snapshots, continuar el Pentateuco por tema, o seguir
  automáticamente con el siguiente libro canónico.
---

# Publicar libro por perícopas y temas

Pipeline de Génesis / Éxodo / Levítico. **No reclasificar verso a verso.** Proverbios (keywords) queda fuera.

Detalles de rangos y conteos ya publicados: [reference.md](reference.md).

## Método

1. Extraer textos (RVR es la clave canónica).
2. Cortar el libro en **relatos exclusivos** (rangos sin huecos ni solapes).
3. Encima, **temas multilabel a nivel relato** (`pericopaATemas`). Un relato puede entrar en varios temas; la página de tema une esos versos (claves únicas).
4. URLs:
   - Relato: `/libros/{slug}/temas/{pericopa}`
   - Tema: `/libros/{slug}/ejes/{tema}`
5. La app Astro ya hace el join. **No crear páginas nuevas** salvo que falte una ruta genérica.

## Continuar

Si el usuario pidió seguir automáticamente, «el siguiente» o «continúa siempre», al terminar un libro publicar el próximo USFM que aún no está en `LIBROS_PUBLICADOS`, en orden canónico. Con «continúa siempre» no preguntar entre libros. Parar si dice «pará» o «hasta acá».

## Checklist

```
Libro:
- [ ] Extraer 4 versiones
- [ ] Definir 12–14 relatos (o 6–8 si el libro es corto, p. ej. Rut)
- [ ] Definir ~8 temas; cada relato en ≥1 tema
- [ ] Generar taxonomía + asignaciones + temas-de-pericopa
- [ ] Publicar USFM en LIBROS_PUBLICADOS
- [ ] Actualizar verificadores + home + conteo de HTML
- [ ] Build Astro y verificar dist
```

## Paso 1 — Extraer

```bash
node scripts/extraer-libro-versiones.mjs LEV
```

Snapshots en `.cache/snapshots/` (gitignored). Si falta el archivo, el script lo baja. **No commitear snapshots.**

No inventar un mapeo de numeración salvo que el usuario lo pida.

Excepciones documentadas (no son re mapeo de capítulos):

- NTV une Sal 47:9-10; el extractor copia 47:9 a 47:10.
- Si NTV/DHH/TLA omiten una clave RVR (texto crítico), el extractor marca la celda como omitida.

Inspeccionar último verso por capítulo contra el JSON RVR (no contra memoria).

PowerShell: encadenar con `;`, no `&&`.

## Paso 2 — Relatos

Crear `scripts/temas-{slug}.mjs` exportando `PERICOPAS_{USFM}` (GEN/EXO/LEV como modelo):

```js
{ slug, nombre, orden, icono, desde: '1:1', hasta: '3:17' }
```

Reglas:

- Slugs **sin tildes** (`sinai-y-decalogo`, no `decálogo`).
- 12–14 unidades en libros largos; 6–8 si el libro tiene pocos capítulos (Rut). Granularidad de Génesis (bloques de 1–9 capítulos), no verso a verso.
- Cada clave RVR cae en **exactamente un** relato.
- `asignaciones/{USFM}.json` guarda el slug del **relato**, nunca el del tema.

Registrar el libro en `scripts/generar-asignaciones-pericopas.mjs` y correr:

```bash
node scripts/generar-asignaciones-pericopas.mjs {slug}
```

Eso escribe `data/taxonomias/{slug}.json` (`unidad: "pericopa"`), `data/asignaciones/{USFM}.json` y republica el canon.

## Paso 3 — Temas

Crear `scripts/temas-de-pericopa-{slug}.mjs`:

```js
export const TEMAS = [{ slug, nombre, orden, icono }]
export const PERICOPA_A_TEMAS = { 'relato-slug': ['tema-a', 'tema-b'] }
```

Ontología **local al libro** (un `pacto` de Éxodo no se fusiona con el de Génesis hasta una oleada cross-book).

Mismo slug de relato y tema (`fiestas`, `votos`, `creacion`) es válido: viven en `/temas/` vs `/ejes/`.

Generar:

```bash
node scripts/generar-temas-de-pericopa-{slug}.mjs
```

El generador debe llamar `escribirTemasDePericopa` en `scripts/lib/escribir-temas-de-pericopa.mjs`. Escribe `data/temas-de-pericopa/{slug}.json`.

No crear `data/notas/rvr-esquematizada/{USFM}.json` vacío. `loadNotas` ya tolera ausencia.

## Paso 4 — Publicar

En `scripts/lib/canon-66.mjs` agregar el USFM a `LIBROS_PUBLICADOS` (orden canónico: GEN, EXO, LEV, NUM, …, PRO). `escribir-capas-proverbios.mjs` y `escribir-capas-pericopas.mjs` leen esa lista: si se regenera PRO/GEN no se despublica el libro nuevo.

Home (`app/src/pages/index.astro`): mencionar el libro en el párrafo de publicados.

## Paso 5 — Verificar

Crear `verificar-capas-{slug}.mjs` y `verificar-temas-{slug}.mjs` copiando LEV/EXO.

En **todos** los `verificar-capas-*.mjs` y `verificar-capas-proverbios.mjs`:

- `publicados.length === N`
- el nuevo slug está incluido
- `próximo` = `66 - N`

En `verificar-dist-astro.mjs`:

```
páginas = 1 + N_libros + suma(relatos o temas keyword) + suma(ejes)
```

Hoy: 1 + 66 + 12 PRO + 14 GEN + 8 ejes GEN + 12 EXO + 8 ejes EXO + 14 LEV + 8 ejes LEV + 14 NUM + 8 ejes NUM + 14 DEU + 8 ejes DEU + 14 JOS + 8 ejes JOS + 14 JDG + 8 ejes JDG + 8 RUT + 8 ejes RUT + 14 1SA + 8 ejes 1SA + 14 2SA + 8 ejes 2SA + 14 1KI + 8 ejes 1KI + 14 2KI + 8 ejes 2KI + 14 1CH + 8 ejes 1CH + 14 2CH + 8 ejes 2CH + 8 EZR + 8 ejes EZR + 13 NEH + 8 ejes NEH + 8 EST + 8 ejes EST + 14 JOB + 8 ejes JOB + 14 PSA + 8 ejes PSA + 8 ECC + 8 ejes ECC + 8 SNG + 8 ejes SNG + 14 ISA + 8 ejes ISA + 14 JER + 8 ejes JER + 8 LAM + 8 ejes LAM + 14 EZK + 8 ejes EZK + 12 DAN + 8 ejes DAN + 14 HOS + 8 ejes HOS + 8 JOL + 8 ejes JOL + 8 AMO + 8 ejes AMO + 8 OBA + 8 ejes OBA + 8 JON + 8 ejes JON + 8 MIC + 8 ejes MIC + 8 NAM + 8 ejes NAM + 8 HAB + 8 ejes HAB + 8 ZEP + 8 ejes ZEP + 8 HAG + 8 ejes HAG + 14 ZEC + 8 ejes ZEC + 8 MAL + 8 ejes MAL + 14 MAT + 8 ejes MAT + 14 MRK + 8 ejes MRK + 14 LUK + 8 ejes LUK + 14 JHN + 8 ejes JHN + 14 ACT + 8 ejes ACT + 14 ROM + 8 ejes ROM + 14 1CO + 8 ejes 1CO + 8 2CO + 8 ejes 2CO + 8 GAL + 8 ejes GAL + 8 EPH + 8 ejes EPH + 8 PHP + 8 ejes PHP + 8 COL + 8 ejes COL + 8 1TH + 8 ejes 1TH + 8 2TH + 8 ejes 2TH + 8 1TI + 8 ejes 1TI + 8 2TI + 8 ejes 2TI + 8 TIT + 8 ejes TIT + 8 PHM + 8 ejes PHM + 14 HEB + 8 ejes HEB + 8 JAS + 8 ejes JAS + 8 1PE + 8 ejes 1PE + 8 2PE + 8 ejes 2PE + 8 1JN + 8 ejes 1JN + 6 2JN + 8 ejes 2JN + 6 3JN + 8 ejes 3JN + 8 JUD + 8 ejes JUD + 14 REV + 8 ejes REV = **1296**. Canon de 66 cerrado. Cada libro nuevo suma `1 + relatos + ejes`.

Añadir asserts de home (`/libros/{slug}`), ficha (Relatos + Por temas + un `/ejes/` y un `/temas/`), un relato (`Relato seleccionado` + 4 versiones) y un eje (`Tema seleccionado` + sidebar `/ejes/`).

```bash
node scripts/verificar-capas-{slug}.mjs
node scripts/verificar-temas-{slug}.mjs
node scripts/verificar-capas-genesis.mjs
node scripts/verificar-capas-exodo.mjs
node scripts/verificar-capas-levitico.mjs
node scripts/verificar-capas-numeros.mjs
node scripts/verificar-capas-deuteronomio.mjs
node scripts/verificar-capas-josue.mjs
node scripts/verificar-capas-jueces.mjs
node scripts/verificar-capas-rut.mjs
node scripts/verificar-capas-1-samuel.mjs
node scripts/verificar-capas-2-samuel.mjs
node scripts/verificar-capas-1-reyes.mjs
node scripts/verificar-capas-2-reyes.mjs
node scripts/verificar-capas-1-cronicas.mjs
node scripts/verificar-capas-2-cronicas.mjs
node scripts/verificar-capas-esdras.mjs
node scripts/verificar-capas-nehemias.mjs
node scripts/verificar-capas-ester.mjs
node scripts/verificar-capas-job.mjs
node scripts/verificar-capas-salmos.mjs
node scripts/verificar-capas-eclesiastes.mjs
node scripts/verificar-capas-cantares.mjs
node scripts/verificar-capas-isaias.mjs
node scripts/verificar-capas-jeremias.mjs
node scripts/verificar-capas-lamentaciones.mjs
node scripts/verificar-capas-ezequiel.mjs
node scripts/verificar-capas-daniel.mjs
node scripts/verificar-capas-oseas.mjs
node scripts/verificar-capas-joel.mjs
node scripts/verificar-capas-amos.mjs
node scripts/verificar-capas-abdias.mjs
node scripts/verificar-capas-jonas.mjs
node scripts/verificar-capas-miqueas.mjs
node scripts/verificar-capas-nahum.mjs
node scripts/verificar-capas-habacuc.mjs
node scripts/verificar-capas-sofonias.mjs
node scripts/verificar-capas-hageo.mjs
node scripts/verificar-capas-zacarias.mjs
node scripts/verificar-capas-malaquias.mjs
node scripts/verificar-capas-mateo.mjs
node scripts/verificar-capas-marcos.mjs
node scripts/verificar-capas-lucas.mjs
node scripts/verificar-capas-juan.mjs
node scripts/verificar-capas-hechos.mjs
node scripts/verificar-capas-romanos.mjs
node scripts/verificar-capas-1-corintios.mjs
node scripts/verificar-capas-2-corintios.mjs
node scripts/verificar-capas-galatas.mjs
node scripts/verificar-capas-efesios.mjs
node scripts/verificar-capas-filipenses.mjs
node scripts/verificar-capas-colosenses.mjs
node scripts/verificar-capas-1-tesalonicenses.mjs
node scripts/verificar-capas-2-tesalonicenses.mjs
node scripts/verificar-capas-1-timoteo.mjs
node scripts/verificar-capas-2-timoteo.mjs
node scripts/verificar-capas-tito.mjs
node scripts/verificar-capas-filemon.mjs
node scripts/verificar-capas-hebreos.mjs
node scripts/verificar-capas-santiago.mjs
node scripts/verificar-capas-1-pedro.mjs
node scripts/verificar-capas-2-pedro.mjs
node scripts/verificar-capas-1-juan.mjs
node scripts/verificar-capas-2-juan.mjs
node scripts/verificar-capas-3-juan.mjs
node scripts/verificar-capas-judas.mjs
node scripts/verificar-capas-apocalipsis.mjs
node scripts/verificar-capas-proverbios.mjs
npm run build --prefix app
node scripts/verificar-dist-astro.mjs
```

Hardcodear conteos de versos por tema **después** de generar, no antes. Si el generador cubre todas las claves, los números salen de ahí.

## No hacer

- No envolver la UI en React.
- No denormalizar las 4 versiones en un JSON único.
- No mezclar slugs de tema en `asignaciones/{USFM}.json`.
- No rehacer Proverbios ni tocar su pipeline de keywords.
- No commitear `.cache/` ni snapshots completos.
- No commitear a menos que el usuario lo pida.

## Respuesta al usuario

Tabla de relatos (nombre + rango) y tabla de temas (qué relatos junta). Mencionar versos totales, páginas del sitio y el siguiente libro canónico.
