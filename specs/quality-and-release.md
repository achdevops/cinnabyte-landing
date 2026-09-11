# Calidad y publicación

Estado: **Vigente**.

## Ejecución local

Desde la raíz del repositorio:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:4173`. No validar el sitio abriendo `index.html` con `file://`, porque puede ocultar diferencias del servidor estático.

## Comprobaciones rápidas

```sh
git diff --check
node --check assets/site.js
rg 'logo_01|Mega CinnaByte|1\.400|\$UY 280|\$UY 420' index.html assets README.md specs
```

El último comando debe devolver cero coincidencias relevantes en contenido vigente. Las referencias históricas claramente rotuladas pueden existir en un ADR.

## Matriz funcional

Pedidos mínimos:

| Producto | Cantidad | Entrega          |     Total |
| -------- | -------: | ---------------- | --------: |
| Classic  |        1 | Retiro           |   610 UYU |
| DDL      |        1 | Maldonado centro |   650 UYU |
| DDL      |        2 | Punta del Este   | 1.380 UYU |

Comprobar además:

- Cada botón “Lo quiero” preselecciona el sabor correcto.
- Chocolate no aparece en el selector ni tiene CTA de pedido.
- Cantidades `0`, negativas, decimales, vacías y superiores a `99` no abren WhatsApp.
- Nombre con solo espacios falla.
- Dirección con solo espacios falla en ambas entregas.
- Retiro oculta y deshabilita dirección.
- El mensaje lleva el total correcto y codifica tildes, ampersands y saltos de línea.
- La prueba no envía el mensaje: interceptar `window.open` o cerrar la pestaña antes de enviar.

## Matriz visual y accesible

Revisar anchos 320, 390, 768, 1024 y 1440 px:

- Sin scroll horizontal.
- Header y logo no colisionan con el CTA ni el menú.
- CTA principal visible en el primer viewport móvil 390 × 844.
- Fotos cargadas, sin distorsión y sin saltos notables.
- Carrusel muestra una imagen y responde a botones, teclado y swipe.
- Diálogos abren, cierran con `Escape` y restauran foco.
- Orden de tabulación lógico, foco visible y enlace para saltar al contenido.
- Contenido legible al 200% de zoom y con movimiento reducido.
- Sin errores en consola ni respuestas 404 para recursos locales.

## Rendimiento y SEO

- Confirmar `<title>`, descripción, `lang="es-UY"`, viewport, favicon y un solo `h1`.
- No cargar imágenes no visibles sin `loading="lazy"`, salvo contenido prioritario.
- Mantener poster y `preload="metadata"` en el video.
- Evitar agregar scripts de terceros en el camino crítico.
- Si se incorporan analítica o cookies, definir consentimiento, privacidad y propietario de datos antes de publicar.

## GitHub Pages y entornos

- `CNAME` vigente: `dev.cinnabyte.uy`.
- Según la operación actual, `develop` publica desarrollo.
- `feat/ui` contiene la evolución previa a producción.
- Dominio, rama y workflow de producción: **pendientes de definición**.

No cambiar `CNAME`, configuración DNS, rama de Pages ni publicar producción como parte de una mejora ordinaria. La publicación requiere una instrucción explícita y una revisión previa del diff, recursos, enlaces, formulario y configuración del repositorio.

## Definition of Done

Una mejora está lista cuando:

1. Cumple la especificación y conserva las reglas comerciales.
2. No introduce errores, recursos faltantes ni desbordes responsive.
3. Las pruebas proporcionales al cambio pasan.
4. Documentación y ADR se actualizan si cambió una decisión duradera.
5. El diff no contiene archivos temporales, capturas de QA o secretos.
6. Se informa claramente qué se verificó y qué sigue pendiente de publicación.
