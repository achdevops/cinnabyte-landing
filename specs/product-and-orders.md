# Producto y pedidos

Estado: **Vigente**.

## Oferta de lanzamiento

| Clave técnica       | Nombre visible | Presentación               |     Precio | Estado       |
| ------------------- | -------------- | -------------------------- | ---------: | ------------ |
| `classic`           | Classic        | Sixpack de 6 rolls Classic |    610 UYU | Disponible   |
| `ddl`               | Dulce de Leche | Sixpack de 6 rolls DDL     |    650 UYU | Disponible   |
| Sin clave comprable | Chocolate      | Sabor futuro               | Sin precio | Próximamente |

Reglas comerciales:

- Cada caja contiene seis rolls del mismo sabor.
- El formulario permite de 1 a 99 cajas enteras.
- No hay unidades sueltas, sixpacks mixtos, personalización de sabores ni carrito.
- Chocolate puede aparecer como adelanto visual, pero no debe estar en `PRODUCTS`, el selector del formulario ni un enlace con `data-product`.
- Los precios se expresan como `610 UYU`, no con símbolos ambiguos de dólar.

## Entrega

| Clave técnica | Nombre                      | Costo por pedido | Requiere dirección |
| ------------- | --------------------------- | ---------------: | ------------------ |
| `retiro`      | Retiro en Maldonado centro  |            0 UYU | No                 |
| `maldonado`   | Entrega en Maldonado centro |            0 UYU | Sí                 |
| `punta`       | Envío a Punta del Este      |           80 UYU | Sí                 |

El costo de Punta del Este se suma una vez al pedido. Fórmula vigente:

```text
subtotal = precio_del_sixpack × cantidad_de_cajas
total = subtotal + costo_de_entrega
rolls = cantidad_de_cajas × 6
```

Ejemplos de aceptación:

| Pedido                               | Total esperado |
| ------------------------------------ | -------------: |
| Classic × 1, retiro                  |        610 UYU |
| DDL × 1, entrega en Maldonado centro |        650 UYU |
| DDL × 2, envío a Punta del Este      |      1.380 UYU |

## Flujo de WhatsApp

- Número internacional para `wa.me`: `59897316401`.
- Número visible: `097 316 401`.
- El botón abre una pestaña nueva con el texto codificado en la URL.
- El mensaje debe incluir nombre, producto, cantidad de cajas, cantidad de rolls, precio por caja, subtotal, forma de entrega, costo de entrega, total, dirección cuando corresponda y nota cuando exista.
- El texto final solicita coordinar disponibilidad, pago y horario.
- Abrir WhatsApp no envía ni confirma el pedido. Mantener visible esa aclaración.
- Si la ventana no se abre, mostrar el enlace alternativo preparado por `#whatsapp-fallback`.

## Validación y privacidad

- Obligatorios: nombre no vacío, producto disponible, cantidad entera entre 1 y 99 y forma de entrega.
- La dirección es obligatoria para `maldonado` y `punta`, y queda deshabilitada para `retiro`.
- La nota es opcional y tiene un máximo de 1000 caracteres.
- El sitio no persiste datos, no usa cookies y no transmite el formulario a un backend.
- No incorporar información de pago, tarjetas ni datos sensibles al formulario o al mensaje.

## Checklist de sincronización comercial

Al cambiar un precio, sabor, zona, tarifa, teléfono o presentación, revisar en el mismo cambio:

1. `PRODUCTS`, `DELIVERY` y `WHATSAPP_NUMBER` en `assets/site.js`.
2. Tarjetas, selector, textos de entrega, fallback sin JavaScript y footer en `index.html`.
3. Descripción SEO y textos promocionales que mencionen precio o disponibilidad.
4. `assets/proceso-pedido.svg`.
5. Este documento y los casos de [quality-and-release.md](quality-and-release.md).
6. Cualquier nuevo botón `data-product` y el carrusel si cambia la oferta disponible.

No introducir una segunda fuente de precios en JSON o Markdown mientras el sitio siga siendo estático. Si el negocio adopta inventario o administración de catálogo, registrar primero la migración de la fuente canónica mediante un ADR.
