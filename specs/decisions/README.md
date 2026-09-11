# Registro de decisiones de arquitectura

Los ADR conservan el contexto de decisiones que afectan a más de una tarea. Son inmutables como registro: si una decisión cambia, crear un ADR nuevo que marque al anterior como reemplazado.

## Índice

| ADR                                            | Estado   | Decisión                                           |
| ---------------------------------------------- | -------- | -------------------------------------------------- |
| [ADR-0001](ADR-0001-static-github-pages.md)    | Aceptada | Mantener landing estática en GitHub Pages          |
| [ADR-0002](ADR-0002-whatsapp-orders.md)        | Aceptada | Usar WhatsApp como cierre asistido del pedido      |
| [ADR-0003](ADR-0003-brand-system.md)           | Aceptada | Centralizar marca en tokens y logo transparente    |
| [ADR-0004](ADR-0004-instagram-profile-card.md) | Aceptada | Usar una tarjeta local para el perfil de Instagram |

## Plantilla

Crear archivos `ADR-NNNN-titulo-breve.md` con:

```markdown
# ADR-NNNN — Título

- Estado: Propuesta | Aceptada | Reemplazada por ADR-NNNN
- Fecha: AAAA-MM-DD

## Contexto

## Decisión

## Consecuencias

## Condiciones para revisarla
```
