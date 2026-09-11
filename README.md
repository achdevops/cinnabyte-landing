# Cinnabyte landing

Onepage estática para GitHub Pages, sin instalación ni compilación. Cambios de lanzamiento en `feat/ui`.

## Vista local

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Abrir http://127.0.0.1:4173.

## Contenido y archivos

- `index.html`: textos, secciones, fotografías, opciones del formulario y video. Las secciones están identificadas por `hero`, `experiencia`, `sabores`, `nosotros` y `pedido`.
- `assets/cb-logo-new-v1.webp` y `assets/favicon.png`: versiones web del logo original `images/branding/cb-logo-new-v1`, conservando sus proporciones.
- El carrusel de Experiencia muestra un sixpack a la vez (Classic o DDL). Navegación con botones, flechas del teclado y deslizamiento horizontal en móvil; sin avance automático.
- `assets/styles.css`: colores, tipografía y diseño responsivo.
- `assets/site.js`: catálogo `PRODUCTS`, entregas `DELIVERY`, cálculo del total y número `WHATSAPP_NUMBER`.
- `assets/*.webp`: versiones optimizadas de las imágenes finales disponibles en `images/`. Los PNG originales se conservan.
- `videos/cinna-video-02.mp4`: video promocional. Para cambiarlo, actualizar el `source` y el enlace alternativo en `index.html`, y su portada `assets/video-poster.jpg`. Tiene controles y reproducción manual.
- `assets/proceso-pedido.svg`: flyer editable del proceso, usado como miniatura y ampliado en un diálogo accesible. Incluye precios, zonas y contacto; mantenerlos sincronizados con el formulario.

## Oferta de lanzamiento

| Producto       | Presentación                           | Precio     |
| -------------- | -------------------------------------- | ---------- |
| Classic        | Caja de 6 rolls del mismo sabor        | 610 UYU    |
| Dulce de Leche | Caja de 6 rolls del mismo sabor        | 650 UYU    |
| Chocolate      | Próximamente, no disponible para pedir | Sin precio |

Se elige un sabor por pedido y entre 1 y 99 cajas. Retiro o entrega en **Maldonado centro gratis**. Envío a **Punta del Este: 80 UYU por pedido**, sin multiplicar por caja. Para las entregas se solicita dirección.

El resumen muestra subtotal implícito en cantidad × precio y total con entrega. El mensaje a WhatsApp detalla precio por caja, subtotal, costo de entrega, total, nombre, dirección si corresponde y nota. Destino: **097 316 401** (`59897316401`). El usuario revisa y envía el mensaje; la disponibilidad, el pago y el horario se confirman en la conversación. No se guarda información personal en la web.

Al modificar precios, actualizar `PRODUCTS` en JavaScript, las tarjetas y opciones del formulario en HTML, la descripción SEO y el flyer. Al habilitar un sabor, agregarlo también al catálogo y al selector; chocolate no debe habilitarse solo cambiando su tarjeta.

## Comprobación antes de publicar

- Verificar encabezado, botones, video, imágenes y formulario en móvil y escritorio.
- Confirmar que cada botón de sabor preseleccione su sixpack.
- Probar Classic × 1 con retiro: **610 UYU**; DDL × 1 con entrega en Maldonado centro: **650 UYU**; DDL × 2 a Punta del Este: **1.380 UYU**.
- Verificar nombre obligatorio, cajas enteras de 1 a 99, entrega obligatoria y dirección solo para entregas.
- Revisar el mensaje de WhatsApp sin necesidad de enviarlo.
- Abrir y cerrar el flyer y la navegación móvil con teclado y Escape.

`CNAME` conserva el dominio existente de desarrollo. Esta revisión no modifica la configuración de Pages ni publica producción. Para publicar, incluir `index.html`, `assets/` completos y los recursos existentes que referencia la página en la rama elegida para despliegue.
