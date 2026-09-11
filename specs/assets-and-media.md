# Recursos visuales y multimedia

Estado: **Vigente**.

## Logo

- Fuente maestra: `images/branding/cb-logo-new-v1`.
- Formato real: PNG RGBA de 2073 × 758 px, aunque el archivo fuente no tiene extensión.
- Contiene transparencia; no aplanar contra blanco ni agregar un rectángulo dentro del archivo.
- Derivado de interfaz: `assets/cb-logo-new-v1.webp`, ancho 660 px, con alpha.
- Derivado de icono: `assets/favicon.png`, ancho 192 px, con alpha.
- Mantener relación de aspecto y `height: auto`.
- En el footer Espresso, el componente añade una superficie Cream para que la línea inferior oscura del logo sea legible.

Cuando cambie el logo maestro, regenerar ambos derivados y verificar visualmente header, navegación móvil, footer y pestaña del navegador.

## Fotografías activas

| Uso                | Archivo web                                   |
| ------------------ | --------------------------------------------- |
| Roll Classic       | `assets/cb-classic-roll.webp`                 |
| Roll DDL           | `assets/cb-ddl-roll.webp`                     |
| Adelanto Chocolate | `assets/cb-choco-roll.webp`                   |
| Sixpack Classic    | `assets/cb-classic-sixpack-roll-logo-v2.webp` |
| Sixpack DDL        | `assets/cb-ddl-sixpack-roll-logo-v2.webp`     |

Los originales se conservan en `images/`, `images/logo/` e `images/v2/`. Algunos archivos muestran sabores no disponibles; su presencia en el repositorio no autoriza publicarlos en la oferta actual.

Convenciones:

- Publicar WebP optimizado y conservar el original.
- Procurar un ancho máximo cercano a 900 px para las fotos usadas en cards y carrusel, salvo una necesidad de resolución demostrable.
- Usar calidad suficiente para glaseados y texturas, evitando archivos excesivos para una onepage.
- Mantener encuadre coherente entre sabores del mismo componente.
- El texto alternativo describe lo visible y el sabor, no decisiones de marketing.
- No presentar imágenes generadas o retocadas como producto real si difieren de lo que recibirá el cliente.

## Video

- Video vigente: `videos/cinna-video-02.mp4`.
- Poster vigente: `assets/video-poster.jpg`.
- El poster debe provenir del video o representar fielmente su contenido.
- Mantener la proporción 16:9 y controles nativos.
- `videos/cinna-video-01.mp4` permanece disponible como alternativa, pero cambiar el video requiere revisar poster, fallback y rendimiento móvil.

## Flyer

- Fuente editable y recurso publicado: `assets/proceso-pedido.svg`.
- Se usa como miniatura y dentro de un diálogo ampliado.
- Debe mantener precios, teléfono, zonas y tarifas sincronizados con el formulario.
- El `<img>` que lo presenta contiene un `alt` equivalente a sus cuatro pasos.
- Su paleta debe usar los colores de [brand-and-content.md](brand-and-content.md).

## Recursos heredados

`images/` incluye versiones antiguas, propuestas y sabores futuros. No eliminarlas ni reemplazarlas en bloque durante una tarea de UI. Antes de depurar recursos, comprobar referencias con `rg`, confirmar qué originales deben archivarse y registrar la política elegida.
