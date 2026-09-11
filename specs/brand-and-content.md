# Marca y contenido

Estado: **Vigente**.

## Posicionamiento

Cinnabyte combina pastelería artesanal y cultura digital con una personalidad fresca y cercana. El producto y la historia humana tienen prioridad; las referencias geek aportan carácter sin convertir la marca en una parodia tecnológica.

Promesa central:

> Cinnamon rolls artesanales, horneados cada día y terminados con un glaseado que merece su propio update.

Conceptos de marca aprobados:

- `Un byte dulce. Cero bugs.`
- `ROLLS · COFFEE · CODE · GOOD VIBES`
- `Código, café y canela.`
- `Fresh batches deployed daily.`
- `Freshly baked. Digitally inspired.`

Usar frases nuevas con moderación y solamente cuando aporten información o una llamada a la acción.

## Naming y ortografía

| Concepto          | Forma preferida                                          |
| ----------------- | -------------------------------------------------------- |
| Marca             | Cinnabyte                                                |
| Producto genérico | cinnamon roll / roll; plural: cinnamon rolls / rolls     |
| Sabor base        | Classic                                                  |
| Sabor local       | Dulce de Leche; `DDL` solo donde el espacio sea limitado |
| Presentación      | sixpack / sixpacks                                       |
| Moneda            | UYU                                                      |
| Creadora          | Hiro                                                     |
| Ubicaciones       | Maldonado centro; Punta del Este                         |
| Canal             | WhatsApp                                                 |

El español es rioplatense y usa voseo: `elegí`, `completá`, `prepará`, `disfrutá`. Evitar mezclar `tú` y `vos`, escribir `Dulce de leche` con distintas mayúsculas en el mismo contexto o presentar `Byte` como nombre genérico de cada producto si genera confusión comercial.

## Voz

- Cálida, directa y breve.
- Artesanal: habla de tiempo, manos, horno, aroma, tradición y compartir.
- Digital: usa referencias como byte, bugs o update de forma puntual.
- Honesta: nunca promete disponibilidad, horario o entrega antes de confirmarlos por WhatsApp.
- Local: comunica Maldonado y expresiones naturales de Uruguay sin exagerar modismos.

No usar urgencia falsa, contadores, stock inventado, descuentos no confirmados, testimonios ficticios ni afirmaciones de salud. Para alérgenos o ingredientes, publicar solamente información verificada por la responsable del negocio.

## Identidad visual

Los tokens ejecutables están en `:root` de `assets/styles.css`.

| Token          | Nombre     | Hex       | Función                                   |
| -------------- | ---------- | --------- | ----------------------------------------- |
| `--cinna-mint` | Cinna Mint | `#74D69C` | Botones secundarios, badges e información |
| `--byte-pink`  | Byte Pink  | `#FF3E86` | CTA principal, precios y promociones      |
| `--cinnamon`   | Cinnamon   | `#C66A32` | Detalles gastronómicos e iconografía      |
| `--espresso`   | Espresso   | `#211713` | Texto, títulos, Experiencia y footer      |
| `--cream`      | Cream      | `#FFF7EE` | Fondo cálido alternativo                  |
| `--white`      | White      | `#FFFFFF` | Fondo principal y cards                   |

Distribución visual orientativa: 60% White/Cream, 20% Espresso, 10% Mint, 7% Pink y 3% Cinnamon. Es una guía de composición, no una medición automática.

Reglas de aplicación:

- Grandes superficies: White o Cream. Espresso se reserva para Experiencia y footer.
- Pink identifica conversión y venta. Sobre Pink, el texto pequeño usa Espresso para conservar contraste.
- Mint comunica estados disponibles, navegación secundaria e información.
- Cinnamon conecta con el producto mediante líneas, íconos y detalles pequeños.
- Evitar fondos completos Pink o Mint y gradientes decorativos que compitan con las fotos.
- Los estados no dependen exclusivamente del color: siempre tienen texto, etiqueta o icono comprensible.

## Tipografía y forma

- Familia: Space Grotesk desde Google Fonts, con fallback `system-ui, sans-serif`.
- Títulos: 700.
- Botones y subtítulos: 600.
- Cuerpo: 400–500.
- Fraunces puede evaluarse en el futuro solo para citas editoriales; requiere una decisión explícita antes de incorporarla.
- Bordes redondeados moderados: botones 12 px, cards y formularios alrededor de 18 px.
- Favorecer aire, jerarquías claras y fotografías grandes del producto.

## Contenido estable del onepage

Orden vigente:

1. Hero con mensaje, CTA de pedido y CTA de sabores.
2. Video promocional centrado.
3. Tres valores de la propuesta.
4. Experiencia con carrusel de sixpacks disponibles.
5. Sabores: Classic, DDL y Chocolate próximamente.
6. Historia de Hiro y tradición familiar.
7. Pedido, condiciones de entrega, flyer y formulario.
8. Footer con sabores, contacto, Instagram y ubicación.

Mantener un único `h1`. Cada sección principal debe tener un `h2` asociado mediante `aria-labelledby` cuando corresponda.
