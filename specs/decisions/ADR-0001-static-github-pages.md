# ADR-0001 — Landing estática en GitHub Pages

- Estado: Aceptada
- Fecha: 2026-09-11

## Contexto

El lanzamiento necesita una onepage rápida, fácil de desplegar y con contenido comercial acotado. El pedido se completa mediante WhatsApp y no requiere cuentas, inventario ni pagos dentro del sitio.

## Decisión

Mantener HTML, CSS y JavaScript nativos, sin compilación ni framework, y publicar mediante GitHub Pages.

## Consecuencias

- Cualquier servidor estático puede ejecutar el sitio.
- El costo y la superficie de mantenimiento son bajos.
- Los datos comerciales aparecen en HTML y JavaScript y requieren sincronización explícita.
- No existe administración de catálogo, persistencia ni lógica segura de servidor.

## Condiciones para revisarla

Revisar cuando el negocio necesite inventario, pagos, agenda, administración frecuente por personas no técnicas o contenido que ya no pueda mantenerse con seguridad en archivos estáticos.
