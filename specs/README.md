# Especificaciones de Cinnabyte Landing

Esta carpeta conserva el conocimiento estable del producto para que personas y agentes puedan retomar el proyecto sin reconstruir decisiones desde el historial de Git o conversaciones anteriores.

## Cómo usar estas especificaciones

1. Empezar por [AGENTS.md](../AGENTS.md).
2. Leer solamente los documentos del área que se va a modificar.
3. Tratar las secciones marcadas como **Vigente** como requisitos actuales.
4. Tratar lo contenido en [growth-roadmap.md](growth-roadmap.md) como propuestas, no como trabajo autorizado.
5. Cuando una decisión cambie, actualizar la especificación, el código y el ADR relacionado en el mismo cambio.

## Mapa documental

| Documento                                              | Responde a                                                          |
| ------------------------------------------------------ | ------------------------------------------------------------------- |
| [product-and-orders.md](product-and-orders.md)         | ¿Qué se vende, cuánto cuesta y cómo se entrega?                     |
| [brand-and-content.md](brand-and-content.md)           | ¿Cómo se ve, habla y nombra Cinnabyte?                              |
| [technical-architecture.md](technical-architecture.md) | ¿Cómo está construido y dónde se cambia cada cosa?                  |
| [ux-accessibility.md](ux-accessibility.md)             | ¿Cómo debe comportarse en dispositivos y tecnologías de asistencia? |
| [assets-and-media.md](assets-and-media.md)             | ¿Qué logo, fotos y videos son válidos y cómo se optimizan?          |
| [quality-and-release.md](quality-and-release.md)       | ¿Qué se comprueba antes de entregar o publicar?                     |
| [growth-roadmap.md](growth-roadmap.md)                 | ¿Cómo puede escalar el sitio y el negocio por etapas?               |
| [decisions/README.md](decisions/README.md)             | ¿Por qué se tomaron las decisiones estructurales vigentes?          |

## Propiedad de la información

Evitar repetir datos mutables en nuevos documentos. Los precios y costos de entrega tienen su definición ejecutable en `PRODUCTS` y `DELIVERY` dentro de `assets/site.js`; [product-and-orders.md](product-and-orders.md) explica el contrato y enumera todos sus consumidores. Los tokens visuales se definen en `:root` de `assets/styles.css`; [brand-and-content.md](brand-and-content.md) explica cómo usarlos.

Última consolidación documental: 11 de septiembre de 2026, sobre la rama `feat/ui`.
