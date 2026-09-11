# ADR-0002 — Pedido asistido por WhatsApp

- Estado: Aceptada
- Fecha: 2026-09-11

## Contexto

La disponibilidad, el pago y la entrega requieren coordinación humana durante el lanzamiento. Un checkout completo agregaría complejidad antes de validar el volumen operativo.

## Decisión

El formulario calcula el total y prepara un mensaje dirigido a `59897316401`. La persona revisa y envía el mensaje, y Cinnabyte confirma el pedido durante la conversación.

## Consecuencias

- El negocio conserva control manual sobre capacidad y horarios.
- El sitio no almacena datos personales ni procesa pagos.
- Abrir WhatsApp no equivale a una venta confirmada.
- La medición y trazabilidad dependen de la operación de WhatsApp.

## Condiciones para revisarla

Revisar cuando la coordinación manual produzca errores, demoras u oportunidades perdidas suficientes para justificar carrito, agenda, inventario o pagos integrados.
