---
name: cinnabyte-commerce
description: Modificar el flujo comercial de Cinnabyte Landing cuando cambian sabores, sixpacks, precios, cantidades, entregas, totales o el mensaje de WhatsApp, manteniendo sincronizadas todas las representaciones del pedido.
---

# Cinnabyte Commerce

Usar esta habilidad para cualquier cambio que pueda alterar lo que una persona compra o el total que ve.

## Contexto requerido

Leer:

- [../../../specs/product-and-orders.md](../../../specs/product-and-orders.md)
- [../../../specs/quality-and-release.md](../../../specs/quality-and-release.md)
- [../../../specs/decisions/ADR-0002-whatsapp-orders.md](../../../specs/decisions/ADR-0002-whatsapp-orders.md)

## Trabajo

- Tratar `PRODUCTS`, `DELIVERY` y `WHATSAPP_NUMBER` de `assets/site.js` como definición ejecutable.
- Actualizar en el mismo cambio tarjetas, formulario, SEO, flyer, footer, documentación y pruebas afectados.
- Mantener precios en UYU, cajas de seis del mismo sabor y tarifa de entrega por pedido, salvo que la instrucción cambie explícitamente esas reglas.
- Evitar habilitar un producto mediante una sola tarjeta: debe existir de forma consistente en catálogo, selector, resumen y mensaje.
- Preservar validación, fallback, codificación segura del mensaje y ausencia de persistencia.

## Validación

Probar la matriz comercial completa y valores inválidos sin enviar mensajes reales. Confirmar que el texto diga que la disponibilidad, el pago y el horario se coordinan por WhatsApp.
