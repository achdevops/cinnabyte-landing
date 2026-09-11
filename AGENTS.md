# Guía para agentes — Cinnabyte Landing

Este archivo es la puerta de entrada obligatoria para cualquier agente que trabaje en este repositorio. Antes de editar, leer [specs/README.md](specs/README.md) y solamente las especificaciones relacionadas con la tarea.

## Estado del proyecto

- Sitio onepage estático, en español de Uruguay, publicado con GitHub Pages.
- Rama de trabajo actual: `feat/ui`.
- `develop` publica el entorno de desarrollo en `https://dev.cinnabyte.uy` mediante `CNAME`.
- La rama y el dominio definitivos de producción todavía no están documentados. No modificar `CNAME`, workflows, ramas ni publicación sin una instrucción explícita.
- No hay proceso de compilación ni dependencias de runtime: `index.html`, `assets/styles.css` y `assets/site.js` deben funcionar directamente en un servidor estático.

## Fuentes canónicas

| Tema                                  | Fuente                                                                                          |
| ------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Producto, precios y entregas          | [specs/product-and-orders.md](specs/product-and-orders.md) y las constantes de `assets/site.js` |
| Marca, colores, tipografía y voz      | [specs/brand-and-content.md](specs/brand-and-content.md)                                        |
| Arquitectura, archivos y convenciones | [specs/technical-architecture.md](specs/technical-architecture.md)                              |
| UX, responsive y accesibilidad        | [specs/ux-accessibility.md](specs/ux-accessibility.md)                                          |
| Recursos gráficos y video             | [specs/assets-and-media.md](specs/assets-and-media.md)                                          |
| Validación y publicación              | [specs/quality-and-release.md](specs/quality-and-release.md)                                    |
| Evolución del negocio                 | [specs/growth-roadmap.md](specs/growth-roadmap.md)                                              |
| Decisiones que no deben redescubrirse | [specs/decisions/README.md](specs/decisions/README.md)                                          |

Si la documentación y el código discrepan, comprobar cuál cambió más recientemente. No resolver la diferencia en silencio: actualizar en la misma tarea la fuente canónica, sus representaciones visibles y las pruebas afectadas.

## Reglas que no deben romperse

1. Los únicos productos comprables son sixpacks Classic por 610 UYU y Dulce de Leche por 650 UYU. Chocolate se comunica como “Próximamente”, sin precio ni acción de compra.
2. Cada caja contiene seis rolls de un único sabor. No se ofrecen unidades sueltas ni cajas mixtas.
3. Retiro y entrega en Maldonado centro son gratis. El envío a Punta del Este suma 80 UYU por pedido, una sola vez, sin multiplicarlo por caja.
4. WhatsApp usa `59897316401` en las URLs y se muestra como `097 316 401`. La web prepara el mensaje; la persona debe revisarlo y enviarlo. No afirmar que el pedido queda confirmado automáticamente.
5. El logo principal es `images/branding/cb-logo-new-v1`, con transparencia. Sus derivados web son `assets/cb-logo-new-v1.webp` y `assets/favicon.png`.
6. El carrusel de Experiencia muestra un solo sixpack a la vez, no avanza automáticamente y permite botones, teclado y gesto horizontal.
7. Mantener el CTA de pedido visible en el primer viewport móvil, navegación por teclado, movimiento reducido y ausencia de scroll horizontal desde 320 px.
8. No agregar frameworks, gestores de paquetes, analítica, cookies, backend, checkout, persistencia ni servicios externos sin justificar la necesidad y recibir una instrucción que amplíe el alcance.

## Flujo de trabajo

1. Revisar `git status` y preservar cambios existentes.
2. Leer la especificación del área. Para tareas recurrentes usar la habilidad local correspondiente en `.agents/skills/`.
3. Hacer cambios pequeños y mantener HTML semántico, CSS mobile-first y JavaScript sin dependencias.
4. Si cambia una regla comercial, actualizar todos los puntos indicados en [specs/product-and-orders.md](specs/product-and-orders.md).
5. Ejecutar las comprobaciones de [specs/quality-and-release.md](specs/quality-and-release.md).
6. Documentar nuevas decisiones duraderas con un ADR en `specs/decisions/`.

## Habilidades locales

- [cinnabyte-ui](.agents/skills/cinnabyte-ui/SKILL.md): layout, componentes, branding, responsive y accesibilidad.
- [cinnabyte-commerce](.agents/skills/cinnabyte-commerce/SKILL.md): catálogo, precios, entregas, totales y WhatsApp.
- [cinnabyte-content](.agents/skills/cinnabyte-content/SKILL.md): textos comerciales, nombres, tono y consistencia.
- [cinnabyte-growth](.agents/skills/cinnabyte-growth/SKILL.md): evolución técnica y comercial sin romper el MVP.

Estas habilidades son instrucciones versionadas con el repositorio. No conceden autorización para publicar, comprar servicios, enviar mensajes ni modificar sistemas externos.
