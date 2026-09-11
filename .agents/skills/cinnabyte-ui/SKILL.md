---
name: cinnabyte-ui
description: Mejorar la interfaz de Cinnabyte Landing cuando la tarea afecta branding, layout, componentes, responsive, carrusel, video o accesibilidad, preservando su stack estático y las reglas visuales del proyecto.
---

# Cinnabyte UI

Usar esta habilidad para cambios visuales o de interacción en el onepage.

## Contexto requerido

Leer antes de editar:

- [../../../specs/brand-and-content.md](../../../specs/brand-and-content.md)
- [../../../specs/ux-accessibility.md](../../../specs/ux-accessibility.md)
- [../../../specs/technical-architecture.md](../../../specs/technical-architecture.md)
- [../../../specs/assets-and-media.md](../../../specs/assets-and-media.md) si se modifican imágenes, logo o video.

## Trabajo

- Preservar HTML semántico, CSS mobile-first y JavaScript nativo.
- Reutilizar los tokens de `:root`; cualquier nuevo token debe tener función clara y documentada.
- Mantener White/Cream como superficies dominantes y reservar los acentos según la especificación de marca.
- Mantener una sola imagen visible en el carrusel, sin autoplay y con botones, teclado y swipe.
- Diseñar primero para 320–390 px y comprobar después los breakpoints existentes.
- Conservar foco visible, `prefers-reduced-motion`, nombres accesibles y jerarquía de encabezados.

## Validación

Aplicar la matriz visual de [../../../specs/quality-and-release.md](../../../specs/quality-and-release.md). Para cambios de controles, verificar también teclado, foco y zoom. No publicar como parte de la validación.
