# Roadmap de crecimiento

Estado: **Propuestas, no autorizadas**. Este documento sirve para evaluar próximos pasos sin convertir ideas en requisitos actuales.

## Principio de evolución

Escalar cuando una necesidad operativa o comercial repetida lo justifique. Cada etapa debe resolver un problema medible, conservar el flujo vigente durante la transición y definir propiedad, costo y mantenimiento.

## Etapa 0 — MVP actual

- Landing estática.
- Dos sixpacks disponibles.
- Pedido asistido por WhatsApp.
- Confirmación, pago y coordinación manual.
- Sin inventario ni captura persistente de datos.

Indicadores manuales recomendados: consultas recibidas, pedidos confirmados, producto elegido, zona de entrega, ticket promedio, cancelaciones y preguntas frecuentes. Registrar solo lo necesario y proteger datos personales.

## Etapa 1 — Operación y descubrimiento

Posibles mejoras:

- Horarios o ventanas de producción verificados.
- Preguntas frecuentes, ingredientes y alérgenos aprobados por el negocio.
- Metadata social, Open Graph, datos estructurados y Search Console.
- Métricas de conversión respetuosas de privacidad, con responsable y política definida.
- Fuente única editable para catálogo si los cambios de precio y disponibilidad se vuelven frecuentes.

Señal para avanzar: modificaciones comerciales frecuentes o dificultad para medir de dónde provienen los pedidos.

## Etapa 2 — Catálogo y capacidad

Posibles mejoras:

- Nuevos sabores y disponibilidad por fecha.
- Cajas mixtas, si producción confirma que son operativamente viables.
- Agenda de retiro y zonas de reparto.
- Panel simple para catálogo, cupos y cierres de pedidos.
- Integración con hoja o base operativa con autenticación y auditoría.

Señal para avanzar: errores de inventario, sobreventa o tiempo elevado coordinando pedidos manualmente.

## Etapa 3 — Ecommerce

Posibles mejoras:

- Carrito, checkout, pagos locales y comprobantes.
- Cálculo de cobertura y tarifa por dirección.
- Estados de pedido y notificaciones transaccionales.
- Políticas de privacidad, términos, cancelación y tratamiento de datos.
- Observabilidad, backups y soporte operativo.

Señal para avanzar: volumen estable que justifique costos de plataforma y reducción comprobable del trabajo manual. Evaluar proveedores por compatibilidad con Uruguay, comisiones, conciliación, soporte, accesibilidad y control de datos.

## Etapa 4 — Coffee shop y comunidad

Posibles mejoras:

- Carta del local, horarios y ubicación.
- Eventos, talleres, fidelidad y comunidad.
- Pedido anticipado y consumo en local.
- Integración de inventario entre producción, ecommerce y punto de venta.

## Decisiones requeridas antes de escalar

Cada iniciativa debe definir:

| Dimensión   | Pregunta                                           |
| ----------- | -------------------------------------------------- |
| Objetivo    | ¿Qué problema del cliente o de operación resuelve? |
| Métrica     | ¿Cómo se sabrá si funcionó?                        |
| Propietario | ¿Quién mantiene contenido, datos y soporte?        |
| Costo       | ¿Qué comisiones y costos recurrentes agrega?       |
| Privacidad  | ¿Qué datos captura, por qué y por cuánto tiempo?   |
| Riesgo      | ¿Qué pasa si el servicio externo falla?            |
| Migración   | ¿Cómo convive o reemplaza el pedido por WhatsApp?  |
| Reversión   | ¿Cómo se vuelve al flujo anterior?                 |

No agregar integraciones anticipadamente. Cuando una iniciativa pase a ejecución, crear su especificación propia y un ADR antes de seleccionar tecnología.
