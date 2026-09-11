# ADR-0004 — Tarjeta local para el perfil de Instagram

- Estado: Aceptada
- Fecha: 2026-09-11

## Contexto

Cinnabyte recibe consultas y pedidos por `@cinnabyte.uy` y necesita darle visibilidad en el footer. Instagram ofrece embeds orientados a publicaciones individuales; un perfil completo dentro de un iframe no constituye una integración estable para esta landing y agregaría carga y tratamiento de terceros.

## Decisión

Mostrar un frame propio y compacto con el handle, la ubicación, una explicación de que se aceptan consultas y pedidos por mensaje directo y un enlace al perfil. Mantener además enlaces textuales en el footer. No cargar iframe, SDK ni script de Meta.

## Consecuencias

- El bloque siempre renderiza con el branding del sitio y no depende de que Instagram permita mostrarse dentro de un iframe.
- La landing no agrega cookies, scripts ni solicitudes de contenido social al cargar la página.
- El contenido del perfil no se actualiza automáticamente; la persona accede a Instagram para ver publicaciones y escribir.
- Si se desea mostrar una publicación, deberá seleccionarse una URL pública concreta y evaluar por separado privacidad, rendimiento y fallback.

## Condiciones para revisarla

Revisar si Instagram ofrece un embed oficial estable para perfiles, si el negocio necesita mostrar publicaciones concretas o si adopta una plataforma social administrada con consentimiento y política de privacidad.
