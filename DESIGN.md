# Arcano01 — Manual de diseño

Sistema visual del proyecto, derivado de la referencia **Paper Haven**: papel crema, tipografía
editorial con serif de display, acento dorado/bronce y mucho aire. La sensación buscada es la de una
librería cálida, no la de un dashboard.

Todos los tokens viven en un solo lugar: el bloque `@theme` de
[app/src/styles/global.css](app/src/styles/global.css). Nada de colores sueltos en los componentes.

---

## 1. Paleta

### Superficies

| Token | Hex | Uso |
| --- | --- | --- |
| `--color-surface` | `#faf7f0` | Fondo base de toda la app (crema papel). |
| `--color-surface-alt` | `#f4efe4` | Bloques hundidos, arcos del hero, franjas de sección. |
| `--color-sidebar` | `#ede7da` | Sidebar, paneles laterales, drawer móvil. |
| `--color-card` | `#fffdf9` | Tarjetas, headers, inputs (blanco cálido, nunca `#fff` puro). |

### Acento

| Token | Hex | Uso |
| --- | --- | --- |
| `--color-accent` | `#a9812e` | Botones primarios, links activos, referencias bíblicas, contadores. |
| `--color-accent-strong` | `#8f6c24` | Hover/active del acento. |
| `--color-accent-soft` | `#f0e7d3` | Fondos de chips, badges e íconos de tema. |

### Texto

| Token | Hex | Uso |
| --- | --- | --- |
| `--color-text` | `#403a2b` | Títulos y texto bíblico primario (RVR). |
| `--color-text-soft` | `#6b6455` | Cuerpo secundario, traducciones de apoyo. |
| `--color-muted` | `#9a9384` | Etiquetas, contadores, texto de estado. |

### Estructura y notas

| Token | Hex | Uso |
| --- | --- | --- |
| `--color-line` | `#e3dccb` | Bordes de tarjetas, separadores principales. |
| `--color-line-soft` | `#ece5d6` | Separadores internos, divisiones entre traducciones. |
| `--color-note` | `#f7efdc` | Fondo de las notas de estudio (reemplaza al ámbar de Tailwind). |
| `--color-note-line` | `#e6d5ae` | Borde de notas. |
| `--color-note-text` | `#7a5c1d` | Texto y etiqueta de notas. |

**Regla:** ningún componente usa la escala `slate-*` ni `amber-*` de Tailwind. Los grises fríos
rompen la calidez del papel.

### Colores de portada por grupo canónico

Cada grupo del canon tiene un par (base, profundo) para las portadas CSS de
[app/src/components/BookCover.astro](app/src/components/BookCover.astro). Todos son tonos cálidos
saturados a media, para que 66 portadas juntas se lean como una biblioteca y no como un arcoíris.

| Grupo | Base | Profundo |
| --- | --- | --- |
| `pentateuco` | `#8a6a3b` | `#5f4724` |
| `historicos` | `#9c5a3c` | `#6d3a25` |
| `poeticos` | `#6f7355` | `#4b4f38` |
| `profetas-mayores` | `#7c5a52` | `#523a34` |
| `profetas-menores` | `#a1803f` | `#6f5626` |
| `evangelios` | `#8d5147` | `#5e332c` |
| `hechos` | `#96703f` | `#664a26` |
| `epistolas-paulinas` | `#5f6b6a` | `#3f4948` |
| `epistolas-generales` | `#7a6a4e` | `#524734` |
| `apocalipsis` | `#5b4a42` | `#3a2f29` |

---

## 2. Tipografía

| Token | Familia | Uso |
| --- | --- | --- |
| `--font-display` | **Playfair Display** (400/500/600/700, con itálica) | Títulos, nombres de libros, portadas, hero, marca textual. |
| `--font-sans` | **Inter** (400/500/600/700) | UI, chips, navegación, texto bíblico y notas. |

Reglas:

- Los títulos de display usan `font-display` con `tracking` normal o negativo (`-0.01em`); nunca en
  mayúsculas.
- Las etiquetas pequeñas (`Libro`, `Tema seleccionado`) van en Inter, `text-xs`,
  `uppercase tracking-wider`, color `--color-muted`.
- El texto bíblico va en Inter `text-sm leading-relaxed`: se lee mejor en bloques largos que un
  serif.
- El logo A01 no usa ninguna de las dos: dentro del split-flap lleva su propia sans ultra-bold
  condensada (ver sección 4).

---

## 3. Forma, sombra y espaciado

- **Radios:** `rounded-2xl` (16px) para tarjetas, `rounded-3xl` (24px) para paneles y arcos,
  `rounded-full` para chips y botones. Las portadas de libro llevan `rounded-r-lg` y esquinas
  izquierdas casi rectas para imitar el lomo.
- **Sombras:** siempre cálidas, nunca negras.
  `shadow-[0_1px_2px_rgba(84,68,40,0.06)]` para reposo y
  `shadow-[0_12px_28px_-12px_rgba(84,68,40,0.28)]` para hover/elevación.
- **Bordes:** 1px `--color-line`. En estados activos se refuerza con `ring-1` del mismo color.
- **Espaciado:** múltiplos de 4. Padding de tarjeta `p-4`/`p-5`, de panel `p-6`/`p-8`.

---

## 4. Marca: el logo split-flap

El logo es el monograma **A01** sobre tres fichas de reloj de solapa (split-flap), en blanco roto
con glifos casi negros (`#1c1a17`) y una línea divisoria horizontal a media altura. No lleva el texto
"ARQUITECTURA · DISEÑO · INNOVACIÓN" del PNG original.

Implementado en [app/src/components/LogoFlip.astro](app/src/components/LogoFlip.astro):

- CSS 3D puro (`perspective` + `rotateX`) más Web Animations API. Sin librerías de flip clock.
- Cada ficha cicla caracteres al azar y se asienta escalonadamente en `A` → `0` → `1`.
- Corre una sola vez por carga de página; con `prefers-reduced-motion: reduce` aparece ya resuelto.
- Tamaños: `sm` (header interno), `md` (default), `lg` (hero del home).

---

## 5. Íconos

**Phosphor** vía `astro-icon` + `@iconify-json/ph`. Trazo fino, geometría redondeada: acompaña al
serif sin competir. Se renderizan como SVG inline en build, cero JavaScript en el cliente.

```astro
import { Icon } from 'astro-icon/components'
<Icon name="ph:book-open" class="h-5 w-5" />
```

Set base usado en la app: `ph:list`, `ph:x`, `ph:caret-left`, `ph:caret-right`,
`ph:magnifying-glass`, `ph:book-open`, `ph:bookmark-simple`, `ph:note-pencil`, `ph:arrow-right`.

Los íconos de tema que vienen en la taxonomía (`tema.icono`) son emoji del dataset. **Nunca se
muestran en color:** la utilidad `.icono-tinta` los pasa a tinta bronce monocroma con un filtro
(`grayscale` + `sepia` + `hue-rotate`). El filtro va en un span propio dentro del chip, nunca en el
chip mismo, porque afectaría también su fondo `--color-accent-soft`.

---

## 6. Movimiento

Tres mecanismos, todos anulados por `prefers-reduced-motion: reduce`:

1. **Entre páginas:** View Transitions de Astro (`ClientRouter` en
   [app/src/components/Layout.astro](app/src/components/Layout.astro)) con fade de 220ms. Al elegir
   un libro o un tema, la página sale y entra en fade.
2. **Entrada de contenido:** utilidad `.fade-up` (fade + 8px de desplazamiento vertical, 420ms). Con
   `.fade-stagger` en el contenedor, cada hijo directo hereda un `animation-delay` incremental de
   40ms hasta el duodécimo.
3. **Hover:** solo `transform` y `box-shadow`, 180ms, `ease-out`. Nada de cambios de layout.

El único movimiento con personalidad propia es el logo; el resto del sitio es discreto.

---

## 7. Home tipo biblioteca

La portada replica la estructura de Paper Haven:

- Header con logo animado, navegación y buscador.
- Hero con título en Playfair y tres portadas destacadas sobre arcos `--color-surface-alt`.
- Una fila horizontal por grupo canónico, con scroll-snap y flechas: la lectura "Netflix de la
  Biblia".
- Los libros no publicados se muestran en la misma fila, desaturados (`opacity` + `grayscale`
  parcial) y con badge `Próximo`, sin link.
