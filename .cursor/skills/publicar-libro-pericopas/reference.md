# Libros ya publicados por este método

USFM y slug salen de `scripts/lib/canon-66.mjs`.

## Inventario

| Libro | USFM | slug | Versos | Relatos | Temas |
|---|---|---|---|---|---|
| Génesis | GEN | genesis | 1533 | 14 | 8 |
| Éxodo | EXO | exodo | 1213 | 12 | 8 |
| Levítico | LEV | levitico | 859 | 14 | 8 |
| Números | NUM | numeros | 1288 | 14 | 8 |
| Deuteronomio | DEU | deuteronomio | 959 | 14 | 8 |
| Josué | JOS | josue | 658 | 14 | 8 |
| Jueces | JDG | jueces | 618 | 14 | 8 |
| Rut | RUT | rut | 85 | 8 | 8 |
| 1 Samuel | 1SA | 1-samuel | 810 | 14 | 8 |
| 2 Samuel | 2SA | 2-samuel | 695 | 14 | 8 |
| 1 Reyes | 1KI | 1-reyes | 816 | 14 | 8 |
| 2 Reyes | 2KI | 2-reyes | 719 | 14 | 8 |
| 1 Crónicas | 1CH | 1-cronicas | 942 | 14 | 8 |
| 2 Crónicas | 2CH | 2-cronicas | 822 | 14 | 8 |
| Esdras | EZR | esdras | 280 | 8 | 8 |
| Nehemías | NEH | nehemias | 406 | 13 | 8 |
| Ester | EST | ester | 167 | 8 | 8 |
| Job | JOB | job | 1070 | 14 | 8 |
| Salmos | PSA | salmos | 2462 | 14 | 8 |
| Proverbios | PRO | proverbios | 915 | — (12 keywords) | — |
| Eclesiastés | ECC | eclesiastes | 222 | 8 | 8 |
| Cantares | SNG | cantares | 117 | 8 | 8 |
| Isaías | ISA | isaias | 1292 | 14 | 8 |
| Jeremías | JER | jeremias | 1364 | 14 | 8 |
| Lamentaciones | LAM | lamentaciones | 154 | 8 | 8 |
| Ezequiel | EZK | ezequiel | 1273 | 14 | 8 |
| Daniel | DAN | daniel | 357 | 12 | 8 |
| Oseas | HOS | oseas | 197 | 14 | 8 |
| Joel | JOL | joel | 73 | 8 | 8 |
| Amós | AMO | amos | 146 | 8 | 8 |
| Abdías | OBA | abdias | 21 | 8 | 8 |
| Jonás | JON | jonas | 48 | 8 | 8 |
| Miqueas | MIC | miqueas | 105 | 8 | 8 |
| Nahúm | NAM | nahum | 47 | 8 | 8 |
| Habacuc | HAB | habacuc | 56 | 8 | 8 |
| Sofonías | ZEP | sofonias | 53 | 8 | 8 |
| Hageo | HAG | hageo | 38 | 8 | 8 |
| Zacarías | ZEC | zacarias | 211 | 14 | 8 |
| Malaquías | MAL | malaquias | 55 | 8 | 8 |
| Mateo | MAT | mateo | 1071 | 14 | 8 |
| Marcos | MRK | marcos | 678 | 14 | 8 |
| Lucas | LUK | lucas | 1151 | 14 | 8 |
| Juan | JHN | juan | 879 | 14 | 8 |
| Hechos | ACT | hechos | 1007 | 14 | 8 |
| Romanos | ROM | romanos | 433 | 14 | 8 |
| 1 Corintios | 1CO | 1-corintios | 437 | 14 | 8 |
| 2 Corintios | 2CO | 2-corintios | 257 | 8 | 8 |
| Gálatas | GAL | galatas | 149 | 8 | 8 |
| Efesios | EPH | efesios | 155 | 8 | 8 |
| Filipenses | PHP | filipenses | 104 | 8 | 8 |
| Colosenses | COL | colosenses | 95 | 8 | 8 |
| 1 Tesalonicenses | 1TH | 1-tesalonicenses | 89 | 8 | 8 |
| 2 Tesalonicenses | 2TH | 2-tesalonicenses | 47 | 8 | 8 |
| 1 Timoteo | 1TI | 1-timoteo | 113 | 8 | 8 |
| 2 Timoteo | 2TI | 2-timoteo | 83 | 8 | 8 |
| Tito | TIT | tito | 46 | 8 | 8 |
| Filemón | PHM | filemon | 25 | 8 | 8 |
| Hebreos | HEB | hebreos | 303 | 14 | 8 |
| Santiago | JAS | santiago | 108 | 8 | 8 |
| 1 Pedro | 1PE | 1-pedro | 105 | 8 | 8 |
| 2 Pedro | 2PE | 2-pedro | 61 | 8 | 8 |
| 1 Juan | 1JN | 1-juan | 105 | 8 | 8 |
| 2 Juan | 2JN | 2-juan | 13 | 6 | 8 |
| 3 Juan | 3JN | 3-juan | 15 | 6 | 8 |
| Judas | JUD | judas | 25 | 8 | 8 |
| Apocalipsis | REV | apocalipsis | 404 | 14 | 8 |

Proverbios no usa esta skill.

## Archivos por libro narrativo

| Rol | Ruta |
|---|---|
| Rangos | `scripts/temas-{slug}.mjs` |
| Mapa relato→temas | `scripts/temas-de-pericopa-{slug}.mjs` |
| Generador temas | `scripts/generar-temas-de-pericopa-{slug}.mjs` |
| Check capas | `scripts/verificar-capas-{slug}.mjs` |
| Check temas | `scripts/verificar-temas-{slug}.mjs` |
| Versiones | `data/versiones/{rvr1960,ntv,dhh,tla}/{USFM}.json` |
| Relatos | `data/taxonomias/{slug}.json` |
| Verso→relato | `data/asignaciones/{USFM}.json` |
| Relato→temas | `data/temas-de-pericopa/{slug}.json` |

Compartidos: `scripts/extraer-libro-versiones.mjs`, `scripts/lib/snapshots-biblia.mjs`, `scripts/lib/escribir-capas-pericopas.mjs`, `scripts/lib/escribir-temas-de-pericopa.mjs`, `scripts/generar-asignaciones-pericopas.mjs`, `scripts/lib/canon-66.mjs`.

## Génesis — relatos

| slug | rango | versos |
|---|---|---|
| creacion | 1:1–2:3 | 34 |
| eden-y-caida | 2:4–3:24 | 46 |
| cain-abel-y-set | 4:1–5:32 | 58 |
| diluvio | 6:1–9:17 | 85 |
| naciones-y-babel | 9:18–11:26 | 70 |
| llamado-de-abram | 11:27–14:24 | 68 |
| pacto-con-abraham | 15:1–17:27 | 64 |
| sodoma-e-isaac | 18:1–23:20 | 167 |
| isaac-e-rebeca | 24:1–25:18 | 85 |
| jacob-y-esau | 25:19–28:9 | 106 |
| jacob-en-aran | 28:10–31:55 | 146 |
| retorno-de-jacob | 32:1–36:43 | 155 |
| jose-en-egipto | 37:1–41:57 | 169 |
| reconciliacion-y-bendicion | 42:1–50:26 | 280 |

Temas: creacion, caida-y-pecado, juicio, pacto, promesa-y-llamado, familia, naciones, providencia.

## Éxodo — relatos

| slug | rango | versos |
|---|---|---|
| opresion-en-egipto | 1:1–2:25 | 47 |
| llamado-de-moises | 3:1–4:31 | 53 |
| moises-y-faraon | 5:1–7:13 | 66 |
| las-plagas | 7:14–11:10 | 118 |
| pascua-y-salida | 12:1–13:16 | 67 |
| mar-rojo | 13:17–15:21 | 58 |
| desierto-hacia-sinai | 15:22–18:27 | 85 |
| sinai-y-decalogo | 19:1–20:26 | 51 |
| libro-del-pacto | 21:1–24:18 | 118 |
| tabernaculo-instrucciones | 25:1–31:18 | 243 |
| becerro-de-oro | 32:1–34:35 | 93 |
| tabernaculo-construccion | 35:1–40:38 | 214 |

Temas: liberacion, llamado, juicio, pascua, pacto, provision, presencia, idolatria.

## Levítico — relatos

| slug | rango | versos |
|---|---|---|
| holocaustos-y-ofrendas | 1:1–3:17 | 50 |
| pecado-y-culpa | 4:1–6:7 | 61 |
| leyes-de-las-ofrendas | 6:8–7:38 | 61 |
| consagracion-sacerdotal | 8:1–10:20 | 80 |
| alimentos-limpios | 11:1–11:47 | 47 |
| parto-y-lepra | 12:1–14:57 | 124 |
| flujos | 15:1–15:33 | 33 |
| dia-de-la-expiacion | 16:1–16:34 | 34 |
| sangre-y-relaciones | 17:1–18:30 | 46 |
| sed-santos | 19:1–20:27 | 64 |
| sacerdotes-santos | 21:1–22:33 | 57 |
| fiestas | 23:1–24:23 | 67 |
| sabatico-y-jubileo | 25:1–26:46 | 101 |
| votos | 27:1–27:34 | 34 |

Temas: sacrificio, sacerdocio, pureza, expiacion, santidad, fiestas, tierra-y-pacto, votos.

## Números — relatos

| slug | rango | versos |
|---|---|---|
| censo-y-campamento | 1:1–4:49 | 188 |
| pureza-nazareo-y-bendicion | 5:1–6:27 | 58 |
| ofrendas-y-levitas | 7:1–8:26 | 115 |
| pascua-y-partida | 9:1–10:36 | 59 |
| quejas-en-el-desierto | 11:1–12:16 | 51 |
| los-espias | 13:1–14:45 | 78 |
| core | 15:1–16:50 | 91 |
| sacerdocio-y-vaca-roja | 17:1–19:22 | 67 |
| cades-y-serpiente | 20:1–21:35 | 64 |
| balaam | 22:1–24:25 | 96 |
| baal-peor | 25:1–25:18 | 18 |
| segundo-censo-y-sucesion | 26:1–27:23 | 88 |
| fiestas-y-votos | 28:1–30:16 | 87 |
| tierra-al-este-y-reparto | 31:1–36:13 | 228 |

Temas: censo, sacerdocio, santidad, queja, juicio, provision, bendicion, tierra.

## Deuteronomio — relatos

| slug | rango | versos |
|---|---|---|
| desde-horeb-hasta-moab | 1:1–3:29 | 112 |
| llamado-a-obedecer | 4:1–4:49 | 49 |
| decalogo-y-shema | 5:1–6:25 | 58 |
| pueblo-apartado | 7:1–8:20 | 46 |
| becerro-y-nuevas-tablas | 9:1–10:22 | 51 |
| un-santuario | 11:1–12:32 | 64 |
| fidelidad-y-diezmos | 13:1–14:29 | 47 |
| ano-sabatico-y-fiestas | 15:1–16:22 | 45 |
| autoridades | 17:1–18:22 | 42 |
| justicia-y-guerra | 19:1–21:23 | 64 |
| leyes-sociales | 22:1–25:19 | 96 |
| primicias-y-pacto | 26:1–26:19 | 19 |
| bendiciones-y-maldiciones | 27:1–30:20 | 143 |
| josue-y-muerte-de-moises | 31:1–34:12 | 123 |

Temas: memoria, ley, pacto, fidelidad, tierra, justicia, fiestas, sucesion.

## Josué — relatos

| slug | rango | versos |
|---|---|---|
| comision-de-josue | 1:1–1:18 | 18 |
| rahab-y-los-espias | 2:1–2:24 | 24 |
| cruce-del-jordan | 3:1–4:24 | 41 |
| gilgal | 5:1–5:15 | 15 |
| jerico | 6:1–6:27 | 27 |
| acan-y-hai | 7:1–8:35 | 61 |
| gabaon-y-sur | 9:1–10:43 | 70 |
| norte-y-reyes | 11:1–12:24 | 47 |
| tierra-restante-y-caleb | 13:1–14:15 | 48 |
| reparto-de-juda | 15:1–15:63 | 63 |
| reparto-de-jose | 16:1–17:18 | 28 |
| reparto-del-resto | 18:1–19:51 | 79 |
| refugio-y-levitas | 20:1–21:45 | 54 |
| altar-y-pacto-en-siquem | 22:1–24:33 | 83 |

Temas: llamado, fe, pacto, conquista, juicio, tierra, santuario, fidelidad.

## Jueces — relatos

| slug | rango | versos |
|---|---|---|
| conquista-incompleta | 1:1–2:5 | 41 |
| el-ciclo | 2:6–3:6 | 24 |
| otniel-ehud-y-samgar | 3:7–3:31 | 25 |
| debora-y-barac | 4:1–5:31 | 55 |
| llamado-de-gedeon | 6:1–7:25 | 65 |
| gedeon-y-el-efod | 8:1–8:35 | 35 |
| abimelec | 9:1–9:57 | 57 |
| jefte | 10:1–12:15 | 73 |
| nacimiento-de-sanson | 13:1–13:25 | 25 |
| sanson-y-timnat | 14:1–15:20 | 40 |
| sanson-y-dalila | 16:1–16:31 | 31 |
| micas-y-dan | 17:1–18:31 | 44 |
| el-levita-en-guibea | 19:1–19:30 | 30 |
| guerra-contra-benjamin | 20:1–21:25 | 73 |

Temas: ciclo, liberacion, idolatria, juicio, liderazgo, violencia, fe, anarquia.

## Rut — relatos

| slug | rango | versos |
|---|---|---|
| hambre-en-moab | 1:1–1:5 | 5 |
| rut-se-queda | 1:6–1:18 | 13 |
| regreso-a-belen | 1:19–1:22 | 4 |
| rut-espiga | 2:1–2:16 | 16 |
| noemi-y-el-pariente | 2:17–2:23 | 7 |
| la-era | 3:1–3:18 | 18 |
| la-puerta | 4:1–4:12 | 12 |
| matrimonio-y-linaje | 4:13–4:22 | 10 |

Temas: fidelidad, providencia, redencion, familia, extranjeria, bondad, cosecha, linaje.

## 1 Samuel — relatos

| slug | rango | versos |
|---|---|---|
| nacimiento-de-samuel | 1:1–2:11 | 39 |
| el-llamado-de-samuel | 2:12–3:21 | 46 |
| el-arca-capturada | 4:1–7:2 | 57 |
| mizpa-y-el-rey | 7:3–8:22 | 37 |
| saul-ungido | 9:1–10:27 | 54 |
| jabes-y-reino | 11:1–12:25 | 40 |
| guerra-contra-filisteos | 13:1–14:52 | 75 |
| saul-rechazado | 15:1–15:35 | 35 |
| david-ungido | 16:1–16:23 | 23 |
| david-y-goliat | 17:1–17:58 | 58 |
| celos-de-saul | 18:1–20:42 | 96 |
| david-huye | 21:1–23:29 | 67 |
| david-en-el-desierto | 24:1–26:25 | 91 |
| la-caida-de-saul | 27:1–31:13 | 92 |

Temas: llamado, sacerdocio, realeza, rechazo, alianza, guerra, providencia, fidelidad.

## 2 Samuel — relatos

| slug | rango | versos |
|---|---|---|
| lamento-por-saul | 1:1–1:27 | 27 |
| rey-en-hebron | 2:1–4:12 | 83 |
| rey-en-jerusalen | 5:1–5:25 | 25 |
| el-arca-a-sion | 6:1–6:23 | 23 |
| pacto-con-david | 7:1–7:29 | 29 |
| victorias-y-mefiboset | 8:1–9:13 | 31 |
| guerra-contra-amon | 10:1–10:19 | 19 |
| betseba-y-urias | 11:1–12:31 | 58 |
| amnon-y-tamar | 13:1–13:39 | 39 |
| absalon-vuelve | 14:1–14:33 | 33 |
| rebelion-de-absalon | 15:1–18:33 | 122 |
| regreso-y-seba | 19:1–20:26 | 69 |
| hambre-y-gigantes | 21:1–21:22 | 22 |
| cantico-y-censo | 22:1–24:25 | 115 |

Temas: realeza, pacto, presencia, pecado, juicio, familia, guerra, misericordia.

## 1 Reyes — relatos

| slug | rango | versos |
|---|---|---|
| salomon-rey | 1:1–2:46 | 99 |
| sabiduria-de-salomon | 3:1–4:34 | 62 |
| construccion-del-templo | 5:1–7:51 | 107 |
| dedicacion-del-templo | 8:1–8:66 | 66 |
| reina-de-saba | 9:1–10:29 | 57 |
| caida-de-salomon | 11:1–11:43 | 43 |
| division-del-reino | 12:1–12:33 | 33 |
| jeroboam-y-el-profeta | 13:1–14:31 | 65 |
| reyes-hasta-acab | 15:1–16:34 | 68 |
| elias-y-la-viuda | 17:1–17:24 | 24 |
| elias-en-el-carmelo | 18:1–18:46 | 46 |
| elias-en-horeb | 19:1–19:21 | 21 |
| acab-y-ben-adad | 20:1–20:43 | 43 |
| nabot-y-muerte-de-acab | 21:1–22:53 | 82 |

Temas: realeza, sabiduria, templo, pacto, idolatria, profecia, juicio, provision.

## 2 Reyes — relatos

| slug | rango | versos |
|---|---|---|
| elias-y-eliseo | 1:1–2:25 | 43 |
| guerra-contra-moab | 3:1–3:27 | 27 |
| milagros-de-eliseo | 4:1–4:44 | 44 |
| naaman | 5:1–5:27 | 27 |
| samaria-sitiada | 6:1–7:20 | 53 |
| hazael-y-los-reyes | 8:1–8:29 | 29 |
| jehu | 9:1–10:36 | 73 |
| atalia-y-joas | 11:1–12:21 | 42 |
| muerte-de-eliseo | 13:1–14:29 | 54 |
| caida-de-samaria | 15:1–17:41 | 99 |
| ezequias-y-senaquerib | 18:1–20:21 | 95 |
| manases | 21:1–21:26 | 26 |
| josias | 22:1–23:37 | 57 |
| caida-de-jerusalen | 24:1–25:30 | 50 |

Temas: profecia, milagro, realeza, idolatria, juicio, reforma, exilio, guerra.

## 1 Crónicas — relatos

| slug | rango | versos |
|---|---|---|
| de-adam-a-israel | 1:1–1:54 | 54 |
| casa-de-david | 2:1–3:24 | 79 |
| juda-y-simeon | 4:1–4:43 | 43 |
| tribus-del-este-y-levi | 5:1–6:81 | 107 |
| resto-de-israel | 7:1–9:44 | 124 |
| muerte-de-saul | 10:1–10:14 | 14 |
| david-rey | 11:1–12:40 | 87 |
| el-arca-a-jerusalen | 13:1–16:43 | 103 |
| pacto-con-david | 17:1–17:27 | 27 |
| guerras-de-david | 18:1–20:8 | 44 |
| el-censo | 21:1–21:30 | 30 |
| levitas-y-turnos | 22:1–26:32 | 145 |
| oficiales-y-salomon | 27:1–28:21 | 55 |
| ofrenda-y-oracion | 29:1–29:30 | 30 |

Temas: linaje, realeza, culto, pacto, templo, guerra, juicio, sucesion.

## 2 Crónicas — relatos

| slug | rango | versos |
|---|---|---|
| sabiduria-y-templo | 1:1–5:14 | 88 |
| dedicacion-del-templo | 6:1–7:22 | 64 |
| gloria-de-salomon | 8:1–9:31 | 49 |
| division-y-roboam | 10:1–12:16 | 58 |
| abias-y-asa | 13:1–16:14 | 70 |
| josafat | 17:1–20:37 | 101 |
| joram-y-atalia | 21:1–23:21 | 53 |
| joas | 24:1–24:27 | 27 |
| amasias-y-ozias | 25:1–26:23 | 51 |
| jotam-y-acaz | 27:1–28:27 | 36 |
| reforma-de-ezequias | 29:1–31:21 | 84 |
| ezequias-y-senaquerib | 32:1–32:33 | 33 |
| manases-y-josias | 33:1–35:27 | 85 |
| caida-y-ciro | 36:1–36:23 | 23 |

Temas: templo, realeza, reforma, idolatria, juicio, guerra, pacto, exilio.

## Esdras — relatos

| slug | rango | versos |
|---|---|---|
| decreto-de-ciro | 1:1–1:11 | 11 |
| los-que-volvieron | 2:1–2:70 | 70 |
| altar-y-cimiento | 3:1–3:13 | 13 |
| la-oposicion | 4:1–4:24 | 24 |
| el-templo-terminado | 5:1–6:22 | 39 |
| esdras-llega | 7:1–7:28 | 28 |
| el-viaje | 8:1–8:36 | 36 |
| matrimonios-mixtos | 9:1–10:44 | 59 |

Temas: retorno, templo, culto, oposicion, ley, pacto, providencia, santidad.

## Nehemías — relatos

| slug | rango | versos |
|---|---|---|
| oracion-de-nehemias | 1:1–1:11 | 11 |
| comision-e-inspeccion | 2:1–2:20 | 20 |
| los-constructores | 3:1–3:32 | 32 |
| oposicion-al-muro | 4:1–4:23 | 23 |
| injusticia-social | 5:1–5:19 | 19 |
| el-muro-terminado | 6:1–6:19 | 19 |
| los-que-volvieron | 7:1–7:73 | 73 |
| la-ley-leida | 8:1–8:18 | 18 |
| la-confesion | 9:1–9:38 | 38 |
| el-pacto-sellado | 10:1–10:39 | 39 |
| habitantes-de-jerusalen | 11:1–11:36 | 36 |
| dedicacion-del-muro | 12:1–12:47 | 47 |
| las-reformas | 13:1–13:31 | 31 |

Temas: muro, oracion, oposicion, ley, pacto, justicia, liderazgo, pueblo.

## Ester — relatos

| slug | rango | versos |
|---|---|---|
| vasti-depuesta | 1:1–1:22 | 22 |
| ester-reina | 2:1–2:23 | 23 |
| el-decreto-de-aman | 3:1–3:15 | 15 |
| el-ayuno-de-ester | 4:1–4:17 | 17 |
| el-primer-banquete | 5:1–5:14 | 14 |
| mardoqueo-honrado | 6:1–6:14 | 14 |
| la-caida-de-aman | 7:1–7:10 | 10 |
| purim | 8:1–10:3 | 52 |

Temas: realeza, providencia, amenaza, valor, inversion, fiesta, identidad, salvacion.

## Job — relatos

| slug | rango | versos |
|---|---|---|
| las-pruebas | 1:1–2:13 | 35 |
| lamento-de-job | 3:1–3:26 | 26 |
| elifaz-y-job | 4:1–7:21 | 99 |
| bildad-y-job | 8:1–10:22 | 79 |
| zofar-y-job | 11:1–14:22 | 95 |
| segundo-elifaz | 15:1–17:16 | 73 |
| segundo-bildad | 18:1–19:29 | 50 |
| segundo-zofar | 20:1–21:34 | 63 |
| tercer-ciclo | 22:1–27:23 | 115 |
| poema-de-la-sabiduria | 28:1–28:28 | 28 |
| defensa-final | 29:1–31:40 | 96 |
| eliud | 32:1–37:24 | 165 |
| jehova-responde | 38:1–41:34 | 129 |
| restauracion | 42:1–42:17 | 17 |

Temas: sufrimiento, integridad, retribucion, amistad, sabiduria, creacion, teofania, esperanza.

## Salmos — relatos

| slug | rango | versos |
|---|---|---|
| dichosos-y-rey | 1:1–8:9 | 82 |
| confianza-de-david | 9:1–18:50 | 147 |
| tora-y-angustia | 19:1–31:24 | 187 |
| perdon-y-cierre | 32:1–41:13 | 200 |
| hijos-de-core | 42:1–49:20 | 114 |
| asaf-y-david | 50:1–60:12 | 151 |
| cierre-del-libro-ii | 61:1–72:20 | 201 |
| libro-iii | 73:1–89:52 | 358 |
| moises-y-el-reino | 90:1–100:5 | 135 |
| cierre-del-libro-iv | 101:1–106:48 | 186 |
| accion-de-gracias | 107:1–118:29 | 199 |
| el-salmo-de-la-ley | 119:1–119:176 | 176 |
| canticos-de-ascenso | 120:1–134:3 | 101 |
| aleluya-final | 135:1–150:6 | 225 |

Temas: alabanza, lamento, confianza, rey, ley, creacion, sion, sabiduria.

NTV une Sal 47:9-10; el extractor copia 47:9 a 47:10.

Si NTV/DHH/TLA omiten una clave RVR (texto crítico), el extractor marca la celda como omitida.

## Eclesiastés — relatos

| slug | rango | versos |
|---|---|---|
| todo-es-vanidad | 1:1–1:18 | 18 |
| el-experimento | 2:1–2:26 | 26 |
| tiempo-para-todo | 3:1–3:22 | 22 |
| opresion-y-compania | 4:1–4:16 | 16 |
| votos-y-riqueza | 5:1–6:12 | 32 |
| mejor-que | 7:1–8:17 | 46 |
| muerte-y-necedad | 9:1–10:20 | 38 |
| el-epilogo | 11:1–12:14 | 24 |

Temas: vanidad, sabiduria, tiempo, trabajo, placer, temor, muerte, juicio.

## Cantares — relatos

| slug | rango | versos |
|---|---|---|
| invitacion-al-amor | 1:1–1:17 | 17 |
| la-primavera | 2:1–2:17 | 17 |
| busqueda-y-cortejo | 3:1–3:11 | 11 |
| huerto-cerrado | 4:1–4:16 | 16 |
| abre-a-mi-amada | 5:1–5:16 | 16 |
| unica-es-mi-paloma | 6:1–6:13 | 13 |
| danza-de-sulamita | 7:1–7:13 | 13 |
| el-sello-del-amor | 8:1–8:14 | 14 |

Temas: amor, deseo, busqueda, belleza, jardin, union, exclusividad, sello.

## Isaías — relatos

| slug | rango | versos |
|---|---|---|
| juicio-de-juda | 1:1–5:30 | 115 |
| llamado-y-emmanuel | 6:1–12:6 | 137 |
| caida-de-babilonia | 13:1–14:32 | 54 |
| oraculos-a-las-naciones | 15:1–23:18 | 135 |
| la-tierra-desolada | 24:1–27:13 | 69 |
| ayes-sobre-efraim | 28:1–33:24 | 139 |
| edom-y-el-desierto | 34:1–35:10 | 27 |
| ezequias-y-senaquerib | 36:1–39:8 | 90 |
| consuelen-a-mi-pueblo | 40:1–44:28 | 141 |
| ciros | 45:1–48:22 | 75 |
| el-siervo | 49:1–53:12 | 87 |
| venid-a-las-aguas | 54:1–55:13 | 30 |
| justicia-y-ayuno | 56:1–59:21 | 68 |
| sion-y-cielos-nuevos | 60:1–66:24 | 125 |

Temas: juicio, llamado, esperanza, naciones, rey, siervo, consuelo, sion.

## Jeremías — relatos

| slug | rango | versos |
|---|---|---|
| el-llamado | 1:1–1:19 | 19 |
| apostasia-de-juda | 2:1–6:30 | 154 |
| el-sermon-del-templo | 7:1–10:25 | 107 |
| el-pacto-roto | 11:1–13:27 | 67 |
| sequia-y-lamento | 14:1–17:27 | 91 |
| el-alfarero | 18:1–20:18 | 56 |
| contra-los-reyes | 21:1–24:10 | 94 |
| setenta-anos | 25:1–29:32 | 133 |
| libro-de-consuelo | 30:1–33:26 | 134 |
| el-rollo-y-los-recabitas | 34:1–36:32 | 73 |
| el-sitio | 37:1–39:18 | 67 |
| gedalias-y-egipto | 40:1–45:5 | 104 |
| oraculos-a-las-naciones | 46:1–51:64 | 231 |
| caida-de-jerusalen | 52:1–52:34 | 34 |

Temas: juicio, llamado, pacto, templo, lamento, esperanza, naciones, exilio.

## Lamentaciones — relatos

| slug | rango | versos |
|---|---|---|
| sion-sola | 1:1–1:11 | 11 |
| no-hay-consolador | 1:12–1:22 | 11 |
| la-ira-del-senor | 2:1–2:22 | 22 |
| el-hombre-afligido | 3:1–3:20 | 20 |
| nuevas-cada-manana | 3:21–3:39 | 19 |
| examinenos | 3:40–3:66 | 27 |
| el-oro-oscurecido | 4:1–4:22 | 22 |
| restauranos | 5:1–5:22 | 22 |

Temas: lamento, sion, ira, esperanza, fidelidad, pecado, hambre, oracion.

## Ezequiel — relatos

| slug | rango | versos |
|---|---|---|
| el-carro-de-gloria | 1:1–3:27 | 65 |
| senales-contra-jerusalen | 4:1–7:27 | 75 |
| la-gloria-parte | 8:1–11:25 | 76 |
| destierro-y-falsos | 12:1–14:23 | 74 |
| alegorias-de-jerusalen | 15:1–17:24 | 95 |
| cada-uno-por-si | 18:1–20:49 | 95 |
| la-espada-y-la-olla | 21:1–24:27 | 139 |
| naciones-cercanas | 25:1–28:26 | 100 |
| egipto | 29:1–32:32 | 97 |
| atalaya-y-pastores | 33:1–34:31 | 64 |
| huesos-secos | 35:1–37:28 | 81 |
| gog-y-magog | 38:1–39:29 | 52 |
| el-templo-nuevo | 40:1–43:27 | 122 |
| el-rio-y-la-ciudad | 44:1–48:35 | 138 |

Temas: gloria, llamado, juicio, idolatria, naciones, restauracion, templo, esperanza.

## Daniel — relatos

| slug | rango | versos |
|---|---|---|
| en-babilonia | 1:1–1:21 | 21 |
| el-sueno-de-la-estatua | 2:1–2:49 | 49 |
| el-horno-de-fuego | 3:1–3:30 | 30 |
| el-arbol-y-la-locura | 4:1–4:37 | 37 |
| la-escritura-en-la-pared | 5:1–5:31 | 31 |
| el-foso-de-los-leones | 6:1–6:28 | 28 |
| las-cuatro-bestias | 7:1–7:28 | 28 |
| el-carnero-y-el-macho | 8:1–8:27 | 27 |
| las-setenta-semanas | 9:1–9:27 | 27 |
| el-hombre-vestido-de-lino | 10:1–10:21 | 21 |
| reyes-del-norte-y-sur | 11:1–11:45 | 45 |
| el-tiempo-del-fin | 12:1–12:13 | 13 |

Temas: fidelidad, sabiduria, soberania, idolatria, juicio, vision, oracion, reino.

## Oseas — relatos

| slug | rango | versos |
|---|---|---|
| gomer-y-los-hijos | 1:1–1:11 | 11 |
| la-esposa-infiel | 2:1–2:23 | 23 |
| gomer-redimida | 3:1–3:5 | 5 |
| pleito-contra-israel | 4:1–4:19 | 19 |
| juicio-de-efrain | 5:1–5:15 | 15 |
| volvamos-al-senor | 6:1–6:11 | 11 |
| el-corazon-de-efrain | 7:1–7:16 | 16 |
| sembraron-viento | 8:1–8:14 | 14 |
| dias-de-castigo | 9:1–9:17 | 17 |
| la-vid-vacia | 10:1–10:15 | 15 |
| cuando-israel-era-nino | 11:1–11:12 | 12 |
| jacob-y-efrain | 12:1–12:14 | 14 |
| no-hay-salvador | 13:1–13:16 | 16 |
| sanare-su-rebelion | 14:1–14:9 | 9 |

Temas: pacto, infidelidad, idolatria, juicio, conocimiento, misericordia, retorno, restauracion.

## Joel — relatos

| slug | rango | versos |
|---|---|---|
| la-plaga-de-langostas | 1:1–1:12 | 12 |
| lamento-y-ayuno | 1:13–1:20 | 8 |
| el-ejercito-del-senor | 2:1–2:11 | 11 |
| rasgad-el-corazon | 2:12–2:17 | 6 |
| los-anos-de-la-langosta | 2:18–2:27 | 10 |
| derramare-mi-espiritu | 2:28–2:32 | 5 |
| valle-de-josafat | 3:1–3:16 | 16 |
| sion-habitada | 3:17–3:21 | 5 |

Temas: plaga, lamento, dia-del-senor, arrepentimiento, restauracion, espiritu, naciones, sion.

## Amós — relatos

| slug | rango | versos |
|---|---|---|
| oraculos-a-las-naciones | 1:1–2:16 | 31 |
| el-leon-ruge | 3:1–3:15 | 15 |
| vacas-de-basan | 4:1–4:13 | 13 |
| buscadme-y-vivid | 5:1–5:27 | 27 |
| los-confiados-de-sion | 6:1–6:14 | 14 |
| plomada-y-amasias | 7:1–7:17 | 17 |
| canasta-de-verano | 8:1–8:14 | 14 |
| tabernaculo-de-david | 9:1–9:15 | 15 |

Temas: naciones, juicio, justicia, opresion, culto, pacto, vision, restauracion.

## Abdías — relatos

| slug | rango | versos |
|---|---|---|
| el-aguila-de-edom | 1:1–1:4 | 4 |
| saqueadores-y-aliados | 1:5–1:7 | 3 |
| sabios-de-teman | 1:8–1:9 | 2 |
| violencia-contra-jacob | 1:10–1:11 | 2 |
| el-dia-de-tu-hermano | 1:12–1:14 | 3 |
| dia-del-senor | 1:15–1:16 | 2 |
| fuego-en-jacob | 1:17–1:18 | 2 |
| el-reino-del-senor | 1:19–1:21 | 3 |

Temas: orgullo, edom, juicio, traicion, hermano, dia-del-senor, sion, reino.

## Jonás — relatos

| slug | rango | versos |
|---|---|---|
| huida-a-tarsis | 1:1–1:3 | 3 |
| la-tempestad | 1:4–1:10 | 7 |
| al-mar | 1:11–1:16 | 6 |
| oracion-en-el-pez | 1:17–2:10 | 11 |
| segunda-llamada | 3:1–3:4 | 4 |
| ninive-se-arrepiente | 3:5–3:10 | 6 |
| la-ira-de-jonas | 4:1–4:4 | 4 |
| la-calabacera | 4:5–4:11 | 7 |

Temas: llamado, huida, mar, oracion, arrepentimiento, misericordia, naciones, ira.

## Miqueas — relatos

| slug | rango | versos |
|---|---|---|
| juicio-sobre-samaria | 1:1–1:16 | 16 |
| ay-de-los-opresores | 2:1–2:13 | 13 |
| sion-arada | 3:1–3:12 | 12 |
| el-monte-del-senor | 4:1–4:13 | 13 |
| de-belen | 5:1–5:15 | 15 |
| que-pide-el-senor | 6:1–6:8 | 8 |
| balanzas-enganosas | 6:9–6:16 | 8 |
| quien-como-tu | 7:1–7:20 | 20 |

Temas: juicio, opresion, sion, resto, rey, pacto, humildad, perdon.

## Nahúm — relatos

| slug | rango | versos |
|---|---|---|
| el-senor-celoso | 1:1–1:8 | 8 |
| buenas-nuevas-a-juda | 1:9–1:15 | 7 |
| el-asalto | 2:1–2:7 | 7 |
| el-cubil-del-leon | 2:8–2:13 | 6 |
| ciudad-de-sangre | 3:1–3:7 | 7 |
| como-no-amon | 3:8–3:13 | 6 |
| langostas-y-mercaderes | 3:14–3:17 | 4 |
| no-hay-alivio | 3:18–3:19 | 2 |

Temas: ira, juicio, ninive, guerra, consuelo, soberania, violencia, caida.

## Habacuc — relatos

| slug | rango | versos |
|---|---|---|
| la-queja | 1:1–1:4 | 4 |
| los-caldeos | 1:5–1:11 | 7 |
| por-que-callas | 1:12–1:17 | 6 |
| sobre-el-atalaya | 2:1–2:5 | 5 |
| ayes-del-opresor | 2:6–2:14 | 9 |
| el-templo-en-silencio | 2:15–2:20 | 6 |
| oracion-de-habacuc | 3:1–3:15 | 15 |
| aunque-la-higuera | 3:16–3:19 | 4 |

Temas: queja, injusticia, naciones, fe, juicio, idolatria, teofania, gozo.

## Sofonías — relatos

| slug | rango | versos |
|---|---|---|
| juicio-sobre-juda | 1:1–1:6 | 6 |
| el-dia-cercano | 1:7–1:13 | 7 |
| el-dia-grande | 1:14–1:18 | 5 |
| buscad-a-jehova | 2:1–2:3 | 3 |
| contra-las-naciones | 2:4–2:15 | 12 |
| ay-de-la-ciudad | 3:1–3:8 | 8 |
| el-remanente | 3:9–3:13 | 5 |
| canta-hija-de-sion | 3:14–3:20 | 7 |

Temas: idolatria, dia-del-senor, juicio, humildad, naciones, remanente, sion, restauracion.

## Hageo — relatos

| slug | rango | versos |
|---|---|---|
| casas-artesonadas | 1:1–1:6 | 6 |
| meditad-vuestros-caminos | 1:7–1:11 | 5 |
| el-pueblo-obedece | 1:12–1:15 | 4 |
| sed-fuertes | 2:1–2:5 | 5 |
| la-gloria-postrera | 2:6–2:9 | 4 |
| pueblo-impuro | 2:10–2:14 | 5 |
| desde-este-dia | 2:15–2:19 | 5 |
| zorobabel-sello | 2:20–2:23 | 4 |

Temas: templo, descuido, juicio, obediencia, presencia, gloria, santidad, esperanza.

## Zacarías — relatos

| slug | rango | versos |
|---|---|---|
| volved-a-mi | 1:1–1:6 | 6 |
| entre-los-arrayanes | 1:7–1:17 | 11 |
| el-cordel-de-medir | 1:18–2:13 | 17 |
| josue-el-sacerdote | 3:1–3:10 | 10 |
| el-candelero | 4:1–4:14 | 14 |
| el-rollo-y-el-efa | 5:1–5:11 | 11 |
| carros-y-coronas | 6:1–6:15 | 15 |
| el-ayuno | 7:1–7:14 | 14 |
| sion-habitada | 8:1–8:23 | 23 |
| el-rey-humilde | 9:1–9:17 | 17 |
| juda-y-efrain | 10:1–10:12 | 12 |
| los-dos-pastores | 11:1–11:17 | 17 |
| el-traspasado | 12:1–13:9 | 23 |
| el-senor-viene | 14:1–14:21 | 21 |

Temas: retorno, vision, templo, sacerdocio, rey, sion, pastores, naciones.

## Malaquías — relatos

| slug | rango | versos |
|---|---|---|
| os-he-amado | 1:1–1:5 | 5 |
| ofrendas-contaminadas | 1:6–1:14 | 9 |
| contra-los-sacerdotes | 2:1–2:9 | 9 |
| infidelidad-y-repudio | 2:10–2:16 | 7 |
| el-mensajero | 2:17–3:6 | 7 |
| el-diezmo | 3:7–3:12 | 6 |
| los-que-temen | 3:13–3:18 | 6 |
| el-dia-y-elias | 4:1–4:6 | 6 |

Temas: amor, culto, sacerdocio, pacto, mensajero, diezmo, temor, dia-del-senor.

## Mateo — relatos

| slug | rango | versos |
|---|---|---|
| nacimiento-e-infancia | 1:1–2:23 | 48 |
| bautismo-y-desierto | 3:1–4:25 | 42 |
| el-sermon-del-monte | 5:1–7:29 | 111 |
| milagros-y-autoridad | 8:1–9:38 | 72 |
| mision-de-los-doce | 10:1–10:42 | 42 |
| oposicion | 11:1–12:50 | 80 |
| las-parabolas | 13:1–13:58 | 58 |
| panes-y-fariseos | 14:1–16:12 | 87 |
| confesion-y-transfiguracion | 16:13–17:27 | 43 |
| la-comunidad | 18:1–18:35 | 35 |
| camino-a-jerusalen | 19:1–20:34 | 64 |
| templo-y-controversias | 21:1–23:39 | 131 |
| el-discurso-del-olivo | 24:1–25:46 | 97 |
| pasion-y-resurreccion | 26:1–28:20 | 161 |

Temas: reino, discipulado, milagro, oposicion, parabolas, templo, juicio, cruz.

## Marcos — relatos

| slug | rango | versos |
|---|---|---|
| el-principio | 1:1–1:45 | 45 |
| controversias-en-galilea | 2:1–3:35 | 63 |
| las-parabolas | 4:1–4:41 | 41 |
| poder-sobre-el-caos | 5:1–5:43 | 43 |
| rechazo-y-los-doce | 6:1–6:56 | 56 |
| lo-puro-y-lo-impuro | 7:1–7:37 | 37 |
| panes-y-el-cristo | 8:1–8:38 | 38 |
| transfiguracion-y-servicio | 9:1–9:50 | 50 |
| camino-a-jerusalen | 10:1–10:52 | 52 |
| entrada-y-templo | 11:1–11:33 | 33 |
| controversias-en-el-templo | 12:1–12:44 | 44 |
| el-discurso-del-olivo | 13:1–13:37 | 37 |
| la-pasion | 14:1–15:47 | 119 |
| la-resurreccion | 16:1–16:20 | 20 |

Temas: reino, discipulado, milagro, oposicion, parabolas, templo, cruz, resurreccion.

## Lucas — relatos

| slug | rango | versos |
|---|---|---|
| anuncios-y-nacimiento | 1:1–2:52 | 132 |
| bautista-y-desierto | 3:1–4:44 | 82 |
| llamado-y-sermon | 5:1–6:49 | 88 |
| fe-y-perdon | 7:1–8:56 | 106 |
| los-doce-y-la-cruz | 9:1–9:62 | 62 |
| el-buen-samaritano | 10:1–10:42 | 42 |
| oracion-y-controversia | 11:1–12:59 | 113 |
| arrepentimiento-y-banquete | 13:1–14:35 | 70 |
| los-perdidos | 15:1–16:31 | 63 |
| fe-y-el-reino | 17:1–18:43 | 80 |
| jerico-y-jerusalen | 19:1–19:48 | 48 |
| templo-y-el-olivo | 20:1–21:38 | 85 |
| la-pasion | 22:1–23:56 | 127 |
| la-resurreccion | 24:1–24:53 | 53 |

Temas: reino, discipulado, milagro, misericordia, parabolas, templo, cruz, resurreccion.

## Juan — relatos

| slug | rango | versos |
|---|---|---|
| el-verbo | 1:1–1:51 | 51 |
| cana-y-el-templo | 2:1–2:25 | 25 |
| nicodemo-y-el-bautista | 3:1–3:36 | 36 |
| la-samaritana | 4:1–4:54 | 54 |
| el-paralitico | 5:1–5:47 | 47 |
| el-pan-de-vida | 6:1–6:71 | 71 |
| en-la-fiesta | 7:1–8:59 | 112 |
| el-ciego | 9:1–9:41 | 41 |
| el-buen-pastor | 10:1–10:42 | 42 |
| lazaro | 11:1–11:57 | 57 |
| la-hora | 12:1–12:50 | 50 |
| el-cenaculo | 13:1–17:26 | 155 |
| la-pasion | 18:1–19:42 | 82 |
| la-resurreccion | 20:1–21:25 | 56 |

Temas: vida, senales, fe, luz, pastor, oposicion, cruz, resurreccion.

## Hechos — relatos

| slug | rango | versos |
|---|---|---|
| pentecostes | 1:1–2:47 | 73 |
| el-cojo-y-el-sanedrin | 3:1–4:37 | 63 |
| ananias-y-los-apostoles | 5:1–5:42 | 42 |
| esteban | 6:1–7:60 | 75 |
| felipe | 8:1–8:40 | 40 |
| conversion-de-saulo | 9:1–9:43 | 43 |
| cornelio | 10:1–11:30 | 78 |
| herodes-y-la-mision | 12:1–14:28 | 105 |
| el-concilio | 15:1–15:41 | 41 |
| filipos-y-atenas | 16:1–17:34 | 74 |
| corinto-y-efeso | 18:1–19:41 | 69 |
| camino-a-jerusalen | 20:1–21:40 | 78 |
| defensa-de-pablo | 22:1–26:32 | 151 |
| roma | 27:1–28:31 | 75 |

Temas: espiritu, testimonio, iglesia, conversion, gentiles, mision, persecucion, roma.

## Romanos — relatos

| slug | rango | versos |
|---|---|---|
| ira-de-dios | 1:1–1:32 | 32 |
| el-juez | 2:1–2:29 | 29 |
| nadie-es-justo | 3:1–3:20 | 20 |
| fe-de-abraham | 3:21–4:25 | 36 |
| paz-con-dios | 5:1–5:21 | 21 |
| muertos-al-pecado | 6:1–6:23 | 23 |
| la-ley-y-el-pecado | 7:1–7:25 | 25 |
| el-espiritu | 8:1–8:39 | 39 |
| israel-y-la-eleccion | 9:1–9:33 | 33 |
| la-palabra-esta-cerca | 10:1–10:21 | 21 |
| el-olivo | 11:1–11:36 | 36 |
| culto-racional | 12:1–13:14 | 35 |
| debiles-y-fuertes | 14:1–14:23 | 23 |
| mision-y-saludos | 15:1–16:27 | 60 |

Temas: evangelio, pecado, fe, gracia, espiritu, israel, vida, iglesia.

## 1 Corintios — relatos

| slug | rango | versos |
|---|---|---|
| divisiones | 1:1–1:31 | 31 |
| sabiduria-de-dios | 2:1–3:23 | 39 |
| apostoles-y-juicio | 4:1–4:21 | 21 |
| inmoralidad | 5:1–6:20 | 33 |
| matrimonio | 7:1–7:40 | 40 |
| idolos | 8:1–8:13 | 13 |
| derechos-del-apostol | 9:1–9:27 | 27 |
| israel-y-la-copa | 10:1–10:33 | 33 |
| velo-y-cena | 11:1–11:34 | 34 |
| dones | 12:1–12:31 | 31 |
| el-amor | 13:1–13:13 | 13 |
| lenguas-y-profecia | 14:1–14:40 | 40 |
| la-resurreccion | 15:1–15:58 | 58 |
| ofrenda-y-saludos | 16:1–16:24 | 24 |

Temas: unidad, sabiduria, santidad, libertad, cuerpo, dones, amor, resurreccion.

## 2 Corintios — relatos

| slug | rango | versos |
|---|---|---|
| consuelo-en-afliccion | 1:1–2:17 | 41 |
| el-ministerio-nuevo | 3:1–4:18 | 36 |
| reconciliacion | 5:1–6:18 | 39 |
| gozo-y-arrepentimiento | 7:1–7:16 | 16 |
| la-ofrenda | 8:1–9:15 | 39 |
| armas-espirituales | 10:1–10:18 | 18 |
| el-necio | 11:1–12:21 | 54 |
| pruebaos | 13:1–13:14 | 14 |

Temas: consuelo, ministerio, reconciliacion, ofrenda, autoridad, debilidad, gloria, integridad.

## Gálatas — relatos

| slug | rango | versos |
|---|---|---|
| otro-evangelio | 1:1–1:24 | 24 |
| el-concilio-y-antioquia | 2:1–2:21 | 21 |
| la-fe-de-abraham | 3:1–3:14 | 14 |
| la-ley-y-la-promesa | 3:15–3:29 | 15 |
| herederos | 4:1–4:20 | 20 |
| agar-y-sara | 4:21–4:31 | 11 |
| libertad | 5:1–5:26 | 26 |
| la-cruz | 6:1–6:18 | 18 |

Temas: evangelio, fe, ley, libertad, espiritu, promesa, cruz, gracia.

## Efesios — relatos

| slug | rango | versos |
|---|---|---|
| bendicion-espiritual | 1:1–1:14 | 14 |
| oracion-por-sabiduria | 1:15–1:23 | 9 |
| de-muerte-a-vida | 2:1–2:22 | 22 |
| el-misterio | 3:1–3:21 | 21 |
| un-solo-cuerpo | 4:1–4:16 | 16 |
| el-hombre-nuevo | 4:17–5:21 | 37 |
| matrimonio-y-casa | 5:22–6:9 | 21 |
| la-armadura | 6:10–6:24 | 15 |

Temas: eleccion, gracia, unidad, misterio, cuerpo, santidad, casa, guerra.

## Filipenses — relatos

| slug | rango | versos |
|---|---|---|
| cautiverio-y-gozo | 1:1–1:18 | 18 |
| vivir-es-cristo | 1:19–1:30 | 12 |
| la-humillacion | 2:1–2:18 | 18 |
| timoteo-y-epafrodito | 2:19–2:30 | 12 |
| perdida-y-ganancia | 3:1–3:11 | 11 |
| la-meta | 3:12–3:21 | 10 |
| gozo-y-paz | 4:1–4:9 | 9 |
| contentamiento | 4:10–4:23 | 14 |

Temas: gozo, cristo, humildad, unidad, carrera, paz, contentamiento, comunion.

## Colosenses — relatos

| slug | rango | versos |
|---|---|---|
| oracion-y-gracias | 1:1–1:14 | 14 |
| el-primogenito | 1:15–1:29 | 15 |
| plenitud-en-cristo | 2:1–2:15 | 15 |
| no-seais-juzgados | 2:16–2:23 | 8 |
| buscad-lo-de-arriba | 3:1–3:17 | 17 |
| la-casa | 3:18–3:25 | 8 |
| oracion-y-sabiduria | 4:1–4:6 | 6 |
| saludos | 4:7–4:18 | 12 |

Temas: cristo, plenitud, sabiduria, libertad, vida, casa, oracion, misterio.

## 1 Tesalonicenses — relatos

| slug | rango | versos |
|---|---|---|
| fe-amor-esperanza | 1:1–1:10 | 10 |
| el-ministerio | 2:1–2:16 | 16 |
| el-deseo-de-veros | 2:17–3:13 | 17 |
| santidad | 4:1–4:12 | 12 |
| los-que-durmieron | 4:13–4:18 | 6 |
| el-dia-del-senor | 5:1–5:11 | 11 |
| exhortaciones | 5:12–5:22 | 11 |
| salutacion-final | 5:23–5:28 | 6 |

Temas: fe, ministerio, santidad, esperanza, venida, amor, exhortacion, consuelo.

## 2 Tesalonicenses — relatos

| slug | rango | versos |
|---|---|---|
| gracias-y-gloria | 1:1–1:5 | 5 |
| justo-juicio | 1:6–1:12 | 7 |
| no-os-movais | 2:1–2:5 | 5 |
| el-inicuo | 2:6–2:12 | 7 |
| firmeza | 2:13–2:17 | 5 |
| orad-por-nosotros | 3:1–3:5 | 5 |
| el-que-no-trabaja | 3:6–3:12 | 7 |
| no-os-canseis | 3:13–3:18 | 6 |

Temas: juicio, venida, engano, firmeza, trabajo, oracion, paz, gloria.

## 1 Timoteo — relatos

| slug | rango | versos |
|---|---|---|
| la-sana-doctrina | 1:1–1:11 | 11 |
| pablo-y-timoteo | 1:12–1:20 | 9 |
| oracion-y-modestia | 2:1–2:15 | 15 |
| obispos-y-diaconos | 3:1–3:16 | 16 |
| apostasia-y-ejercicio | 4:1–4:16 | 16 |
| viudas-y-ancianos | 5:1–5:25 | 25 |
| piedad-y-contentamiento | 6:1–6:10 | 10 |
| pelea-la-buena-batalla | 6:11–6:21 | 11 |

Temas: doctrina, oracion, liderazgo, piedad, familia, contentamiento, batalla, testimonio.

## 2 Timoteo — relatos

| slug | rango | versos |
|---|---|---|
| el-don-y-el-valor | 1:1–1:7 | 7 |
| no-te-averguences | 1:8–1:18 | 11 |
| soldado-y-atleta | 2:1–2:13 | 13 |
| obrero-aprobado | 2:14–2:26 | 13 |
| los-ultimos-dias | 3:1–3:9 | 9 |
| toda-la-escritura | 3:10–3:17 | 8 |
| predica-la-palabra | 4:1–4:8 | 8 |
| la-ultima-hora | 4:9–4:22 | 14 |

Temas: don, valor, discipulado, escritura, apostasia, ministerio, corona, fidelidad.

## Tito — relatos

| slug | rango | versos |
|---|---|---|
| pablo-a-tito | 1:1–1:4 | 4 |
| ancianos-en-creta | 1:5–1:9 | 5 |
| los-de-la-circuncision | 1:10–1:16 | 7 |
| conducta-en-casa | 2:1–2:10 | 10 |
| la-gracia-aparecio | 2:11–2:15 | 5 |
| las-buenas-obras | 3:1–3:8 | 8 |
| herejias-y-division | 3:9–3:11 | 3 |
| despedida-en-creta | 3:12–3:15 | 4 |

Temas: encargo, liderazgo, doctrina, conducta, gracia, obras, herejia, esperanza.

## Filemón — relatos

| slug | rango | versos |
|---|---|---|
| pablo-prisionero | 1:1–1:3 | 3 |
| tu-amor-y-fe | 1:4–1:7 | 4 |
| por-amor-te-ruego | 1:8–1:11 | 4 |
| onesimo-mi-hijo | 1:12–1:14 | 3 |
| para-siempre | 1:15–1:16 | 2 |
| cargalo-a-mi-cuenta | 1:17–1:19 | 3 |
| refresca-mi-corazon | 1:20–1:22 | 3 |
| los-companeros | 1:23–1:25 | 3 |

Temas: prision, amor, intercesion, reconciliacion, fraternidad, deuda, hospitalidad, comunion.

## Hebreos — relatos

| slug | rango | versos |
|---|---|---|
| el-hijo | 1:1–1:14 | 14 |
| tan-grande-salvacion | 2:1–2:18 | 18 |
| moises-y-el-desierto | 3:1–3:19 | 19 |
| el-reposo | 4:1–4:16 | 16 |
| sumo-sacerdote | 5:1–5:14 | 14 |
| ir-adelante | 6:1–6:20 | 20 |
| melquisedec | 7:1–7:28 | 28 |
| nuevo-pacto | 8:1–8:13 | 13 |
| sangre-del-pacto | 9:1–9:28 | 28 |
| una-vez | 10:1–10:18 | 18 |
| no-dejemos | 10:19–10:39 | 21 |
| por-la-fe | 11:1–11:40 | 40 |
| la-carrera | 12:1–12:29 | 29 |
| sacrificio-de-alabanza | 13:1–13:25 | 25 |

Temas: hijo, sacerdote, pacto, fe, reposo, sangre, perseverancia, esperanza.

## Santiago — relatos

| slug | rango | versos |
|---|---|---|
| gozo-en-pruebas | 1:1–1:12 | 12 |
| tentacion-y-palabra | 1:13–1:27 | 15 |
| no-acepcion-de-personas | 2:1–2:13 | 13 |
| fe-y-obras | 2:14–2:26 | 13 |
| la-lengua | 3:1–3:12 | 12 |
| sabiduria-de-arriba | 3:13–4:12 | 18 |
| no-os-glorieis | 4:13–5:6 | 11 |
| paciencia-y-oracion | 5:7–5:20 | 14 |

Temas: pruebas, palabra, fe, obras, lengua, sabiduria, justicia, oracion.

## 1 Pedro — relatos

| slug | rango | versos |
|---|---|---|
| esperanza-viva | 1:1–1:12 | 12 |
| sed-santos | 1:13–1:25 | 13 |
| piedras-vivas | 2:1–2:10 | 10 |
| siervos-y-ejemplo | 2:11–2:25 | 15 |
| en-casa-y-en-mal | 3:1–3:22 | 22 |
| el-fin-se-acerca | 4:1–4:19 | 19 |
| pastores-y-grey | 5:1–5:7 | 7 |
| el-adversario | 5:8–5:14 | 7 |

Temas: esperanza, santidad, pueblo, sufrimiento, ejemplo, hogar, pastoreo, vigilancia.

## 2 Pedro — relatos

| slug | rango | versos |
|---|---|---|
| preciosas-promesas | 1:1–1:11 | 11 |
| testigos-oculares | 1:12–1:21 | 10 |
| falsos-maestros | 2:1–2:10 | 10 |
| balaam-y-tinieblas | 2:11–2:22 | 12 |
| burladores | 3:1–3:7 | 7 |
| mil-anos | 3:8–3:10 | 3 |
| nuevos-cielos | 3:11–3:13 | 3 |
| creced-en-gracia | 3:14–3:18 | 5 |

Temas: promesas, testimonio, apostasia, juicio, venida, paciencia, creacion, crecimiento.

## 1 Juan — relatos

| slug | rango | versos |
|---|---|---|
| el-verbo-de-vida | 1:1–1:10 | 10 |
| abogado-y-mandamiento | 2:1–2:14 | 14 |
| no-ameis-al-mundo | 2:15–2:29 | 15 |
| hijos-de-dios | 3:1–3:12 | 12 |
| amarnos-unos-a-otros | 3:13–3:24 | 12 |
| probad-los-espiritus | 4:1–4:6 | 6 |
| dios-es-amor | 4:7–4:21 | 15 |
| el-testimonio | 5:1–5:21 | 21 |

Temas: vida, luz, amor, mundo, hijos, espiritus, testimonio, confianza.

## 2 Juan — relatos

| slug | rango | versos |
|---|---|---|
| el-anciano-a-la-senora | 1:1–1:3 | 3 |
| andando-en-verdad | 1:4–1:6 | 3 |
| muchos-enganadores | 1:7–1:8 | 2 |
| permanece-en-la-doctrina | 1:9–1:11 | 3 |
| tinta-y-papel | 1:12 | 1 |
| saludo-de-los-hijos | 1:13 | 1 |

Temas: verdad, amor, mandamiento, engano, doctrina, hospitalidad, gozo, comunion.

## 3 Juan — relatos

| slug | rango | versos |
|---|---|---|
| el-anciano-a-gaio | 1:1–1:4 | 4 |
| hospedaje-a-los-hermanos | 1:5–1:8 | 4 |
| diotrefes | 1:9–1:10 | 2 |
| no-imites-lo-malo | 1:11 | 1 |
| demetrio | 1:12 | 1 |
| tinta-y-pluma | 1:13–1:15 | 3 |

Temas: verdad, prosperidad, hospitalidad, orgullo, testimonio, paz, comunion, imitacion.

## Judas — relatos

| slug | rango | versos |
|---|---|---|
| contendiendo-por-la-fe | 1:1–1:4 | 4 |
| israel-angeles-sodoma | 1:5–1:7 | 3 |
| como-cain | 1:8–1:11 | 4 |
| manchas-en-vuestros-agapes | 1:12–1:13 | 2 |
| profecia-de-enoc | 1:14–1:16 | 3 |
| en-el-amor-de-dios | 1:17–1:21 | 5 |
| a-unos-salvad | 1:22–1:23 | 2 |
| al-que-es-poderoso | 1:24–1:25 | 2 |

Temas: fe, juicio, apostasia, profecia, amor, misericordia, gloria, guardia.

## Apocalipsis — relatos

| slug | rango | versos |
|---|---|---|
| el-que-vive | 1:1–1:20 | 20 |
| efeso-a-pergamo | 2:1–2:17 | 17 |
| tiatira-a-laodicea | 2:18–3:22 | 34 |
| el-trono-y-el-cordero | 4:1–5:14 | 25 |
| los-sellos | 6:1–7:17 | 34 |
| las-trompetas | 8:1–9:21 | 34 |
| el-librito-y-los-testigos | 10:1–11:19 | 30 |
| la-mujer-y-el-dragon | 12:1–13:18 | 35 |
| la-cosecha | 14:1–14:20 | 20 |
| las-siete-copas | 15:1–16:21 | 29 |
| babilonia | 17:1–18:24 | 42 |
| las-bodas-y-el-jinete | 19:1–19:21 | 21 |
| el-milenio | 20:1–20:15 | 15 |
| cielos-nuevos | 21:1–22:21 | 48 |

Temas: vision, iglesias, trono, juicio, testimonio, bestia, babilonia, esperanza.

## Conteos de dist

`páginas = 1 + libros_publicados + secciones`

| Tras publicar | Páginas |
|---|---|
| PRO + GEN relatos | 29 |
| + ejes GEN | 37 |
| + EXO | 58 |
| + LEV | 81 |
| + NUM | 104 |
| + DEU | 127 |
| + JOS | 150 |
| + JDG | 173 |
| + RUT | 190 |
| + 1SA | 213 |
| + 2SA | 236 |
| + 1KI | 259 |
| + 2KI | 282 |
| + 1CH | 305 |
| + 2CH | 328 |
| + EZR | 345 |
| + NEH | 367 |
| + EST | 384 |
| + JOB | 407 |
| + PSA | 430 |
| + ECC | 447 |
| + SNG | 464 |
| + ISA | 487 |
| + JER | 510 |
| + LAM | 527 |
| + EZK | 550 |
| + DAN | 571 |
| + HOS | 594 |
| + JOL | 611 |
| + AMO | 628 |
| + OBA | 645 |
| + JON | 662 |
| + MIC | 679 |
| + NAM | 696 |
| + HAB | 713 |
| + ZEP | 730 |
| + HAG | 747 |
| + ZEC | 770 |
| + MAL | 787 |
| + MAT | 810 |
| + MRK | 833 |
| + LUK | 856 |
| + JHN | 879 |
| + ACT | 902 |
| + ROM | 925 |
| + 1CO | 948 |
| + 2CO | 965 |
| + GAL | 982 |
| + EPH | 999 |
| + PHP | 1016 |
| + COL | 1033 |
| + 1TH | 1050 |
| + 2TH | 1067 |
| + 1TI | 1084 |
| + 2TI | 1101 |
| + TIT | 1118 |
| + PHM | 1135 |
| + HEB | 1158 |
| + JAS | 1175 |
| + 1PE | 1192 |
| + 2PE | 1209 |
| + 1JN | 1226 |
| + 2JN | 1241 |
| + 3JN | 1256 |
| + JUD | 1273 |
| + REV | 1296 |

Canon de 66 cerrado. No queda siguiente libro.
