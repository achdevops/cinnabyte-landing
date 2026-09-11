# UX, responsive y accesibilidad

Estado: **Vigente**.

## Objetivo de experiencia

La persona debe entender qué es Cinnabyte, qué puede comprar, cuánto cuesta y cómo pedirlo sin aprender una interfaz nueva. El camino principal es Hero → Sabores → Pedido → revisión en WhatsApp.

## Requisitos responsive

- Soportar desde 320 px sin scroll horizontal.
- Mantener el CTA “Pedir por WhatsApp” visible en el primer viewport móvil de referencia de 390 × 844 px.
- En móvil, navegación compacta mediante diálogo; en escritorio, navegación visible.
- Las tarjetas forman una columna en móvil y tres columnas desde 768 px.
- El formulario usa una columna en móvil y agrupa campos solamente cuando existe espacio real.
- Las áreas táctiles principales tienen al menos 44 × 44 px.
- Evitar textos esenciales dentro de imágenes, excepto el flyer que tiene alternativa textual completa.

## Navegación y foco

- El enlace “Saltar al contenido” es el primer control enfocable.
- Todo funciona con teclado.
- `Escape` cierra los diálogos y devuelve el foco al activador nativo de `<dialog>`.
- El indicador de foco es visible sobre fondos White, Cream y Espresso.
- El orden del DOM coincide con el orden visual y de lectura.
- Los anchors consideran el header fijo mediante `scroll-padding-top`.

## Carrusel de Experiencia

- Muestra exactamente una diapositiva.
- Contiene solo sixpacks actualmente disponibles: Classic y DDL.
- No avanza automáticamente.
- Admite botones anterior/siguiente, flechas izquierda/derecha y deslizamiento horizontal de 50 px o más.
- El gesto vertical continúa desplazando la página.
- El estado anuncia posición y nombre sin convertir cada cambio en ruido visual.
- Al agregar o retirar un sabor, actualizar `aria-label`, numeración y textos alternativos.

## Video

- Está debajo del mensaje y de los CTAs del Hero.
- Tiene controles nativos, `muted`, `playsinline`, poster y `preload="metadata"`.
- No se reproduce automáticamente.
- Incluye enlace alternativo al archivo dentro del fallback del elemento `<video>`.

## Formulario

- Las etiquetas permanecen visibles; los placeholders son ejemplos, no sustitutos.
- Los campos obligatorios usan validación nativa y reglas adicionales para valores con espacios.
- El resumen tiene `aria-live="polite"` y muestra cajas, rolls, precio y entrega antes de abrir WhatsApp.
- Al elegir entrega aparece la dirección; al elegir retiro se oculta y deshabilita.
- Los mensajes de error usan `role="alert"`.
- La aclaración indica que WhatsApp se abre para revisar y enviar y que la confirmación ocurre en la conversación.

## Contenido y medios accesibles

- Un solo `h1`; jerarquía de encabezados sin saltos arbitrarios.
- `alt` describe el producto mostrado y evita repetir “imagen de”.
- Logos enlazados tienen nombre accesible por `alt` o por el enlace.
- Íconos decorativos se ocultan con `aria-hidden`.
- No depender únicamente de Pink, Mint o Cinnamon para comunicar estado.
- Respetar `prefers-reduced-motion`.
- El frame de Instagram debe conservar el nombre del perfil, explicar que acepta consultas y pedidos, y ofrecer un enlace externo con área táctil mínima de 44 px.

## Criterios mínimos de aceptación

- Sin errores JavaScript ni recursos locales 404.
- Sin desbordamiento a 320, 390, 768, 1024 y 1440 px.
- Carrusel con una sola imagen visible y controlable sin mouse.
- Logo transparente y proporcionado en header y footer.
- Contraste WCAG AA para texto normal y controles. El Pink exacto se usa con texto Espresso, cuya relación de contraste es suficiente; evitar texto blanco pequeño sobre Pink.
- El flujo de pedido se completa con zoom al 200% y teclado.
