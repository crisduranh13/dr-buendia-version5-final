# Reporte de implementación — Dr. Diego Buendia V4

Fecha: 3 de noviembre de 2026.

Actualización posterior solicitada: retrato `5-IMAGEN-DR-BUENDIA.webp`, 22 tratamientos en acordeones accesibles y eliminación del bloque de formación/cédulas/aviso informativo del footer. Esta petición sustituye los criterios iniciales de foto y tratamientos siempre desplegados. Trabajo exclusivamente local; sin deploy, push ni commits nuevos.

## Respaldo y estado inicial

- Rama inicial: `main`.
- Commit base: `824640682246f918aeec0baac875c23c68f12475`.
- Rama de trabajo: `feat/doctor-buendia-redesign-v4`.
- Etiqueta: `backup/pre-buendia-v4-20261103`.
- Antes de editar se generó y verificó el bundle en `/private/tmp/drbuendia-pre-v4-20261103-140651`.
- Copia duradera, también verificada: `/Users/crisduranh/Desktop/drbuendia-backups/pre-v4-20261103-140651`.
- `repository.bundle` contiene el historial y las referencias originales. `untracked-files.tar.gz` contiene el prompt y las cinco imágenes que estaban sin seguimiento. `worktree.patch` e `index.patch` están vacíos porque no existían cambios en archivos seguidos.
- Se compararon mediante SHA-256 los seis archivos previos con el archivo de respaldo: siguen intactos.

Restauración segura en otra carpeta, sin sobrescribir este trabajo:

```sh
git clone --branch main /Users/crisduranh/Desktop/drbuendia-backups/pre-v4-20261103-140651/repository.bundle /Users/crisduranh/Desktop/drbuendia-restaurado-v4
tar -xzf /Users/crisduranh/Desktop/drbuendia-backups/pre-v4-20261103-140651/untracked-files.tar.gz -C /Users/crisduranh/Desktop/drbuendia-restaurado-v4
```

La carpeta de destino debe ser nueva. Esta copia recupera el commit base y los archivos que todavía no tenían commit.

## Diagnóstico y arquitectura

Stack existente conservado: Next.js 14.2.5, App Router, React 18, TypeScript, Tailwind, npm y lucide-react. No se añadieron dependencias ni se modificó el lockfile.

La portada, navegación, perfil, consultorios, contacto, footer y diálogo estaban en `components/DemoDrDiegoBuendia.tsx`; `app/page.tsx` lo componía y `app/layout.tsx` definía fuentes y metadatos. Las imágenes se sirven desde `public/images`, mediante URLs `/images/...`.

El contenido clínico se separó en `data/care-areas.ts` y se renderiza mediante `components/CareAreas.tsx`, un componente de servidor compartido. Se pasa como contenido al componente interactivo, para mantener textos presentes en el HTML y evitar cargar el dataset clínico en el JavaScript del cliente.

## Implementación visual y funcional

- Barra superior con los números exactos; acciones compactas y clicables en móvil.
- Encabezado sticky con logo, anchors reales, CTA y menú móvil con estado accesible, cierre al navegar y soporte de Escape.
- Hero con todos los textos editoriales exactos, composición tipográfica nueva y CTAs de WhatsApp y urgencias.
- Video de YouTube `LI5insKWPN0` intacto: misma URL, autoplay, mute, loop, playlist, playsinline, iframe, recorte responsive, imagen de respaldo y overlays.
- Biografía narrativa, firma, credenciales, viñetas y distribución conservadas. Retrato actualizado a `5-IMAGEN-DR-BUENDIA.webp`, con recorte superior para conservar el rostro. Una sola viñeta nueva: «Más de 20 años de ejercicio profesional.»
- Áreas con imágenes editoriales alternadas, padecimientos individuales sin iconos ni fotografías y tratamientos diferenciados mediante fondo azul tenue. Las descripciones de tratamientos se despliegan completas en sus acordeones, cerrados inicialmente. Los padecimientos permanecen visibles.
- Mano y muñeca conserva juntos cada padecimiento y su manejo, incluida la distinción textual entre De Quervain y dedo en resorte.
- Consultorios y direcciones exactas; mapas y búsquedas de Google Maps existentes conservados. CTA de cita en ambos consultorios.
- Cierre «Agende una consulta», números, correo, footer actualizado. El bloque adicional de formación, cédulas y aviso informativo fue retirado por petición posterior.
- Enlaces reales existentes de Facebook, Instagram y TikTok conservados.
- Metadatos y canonical actualizados; H1 único, jerarquía de encabezados, alt, enlace para saltar al contenido, focus visible, márgenes de scroll y movimiento reducido.
- Interfaz y texto del aviso de privacidad conservados. Se mantiene su bloqueo de scroll y retorno del foco.

## Integridad editorial

| Área | Padecimientos | Tratamientos |
| --- | ---: | ---: |
| Traumatología | 8 | 7 |
| Ortopedia | 7 | 7 |
| Cirugía de Columna | 7 | 8 |
| Total | 22 | 22 |

Mano y muñeca añade **5 entradas completas con su manejo asociado**, dentro de Ortopedia. Total de entradas clínicas renderizadas: **49**.

La comprobación automática contrasta el HTML visible con **92 bloques editoriales en orden**, directamente contra el prompt, además de comprobar los elementos preservados. Los 22 tratamientos usan acordeones con botones nativos, `aria-expanded` y `aria-controls`, expansión/cierre de 300 ms y movimiento reducido. El texto íntegro permanece en el HTML. Los padecimientos y las cinco entradas de Mano y muñeca permanecen visibles y sin cambios.

## Assets verificados

| Ruta | Resolución | Uso |
| --- | --- | --- |
| `/images/1-TRAUMATOLOGIA.webp` | 1672 × 941 | Traumatología |
| `/images/2-ORTOPEDIA.webp` | 1672 × 941 | Ortopedia |
| `/images/3-ORTOPEDIA-mano.webp` | 1672 × 941 | Mano y muñeca |
| `/images/4-CIRUGIA.webp` | 1672 × 941 | Cirugía de Columna |
| `/images/5-IMAGEN-DR-BUENDIA.webp` | 854 × 1280 | Retrato del perfil profesional, según la corrección posterior del propietario |

No se duplicaron imágenes, buscaron fotografías ni generaron nuevos assets. Las imágenes de áreas usan `next/image`, recorte cover y tamaños responsive.

## Pruebas y resultados

- `npm run lint -- --no-cache`: correcto, sin advertencias ni errores. Se añadió la configuración ESLint de Next.js porque no existía.
- `npm run typecheck`: correcto.
- `NEXT_DIST_DIR=.next-redesign-v4 npm run build`: correcto; página prerenderizada estáticamente. Primera carga de JavaScript: 99.6 kB según Next.js.
- `NEXT_DIST_DIR=.next-redesign-v4 npm run test:content`: correcto sobre el HTML de producción.
- `npm run test:content -- /private/tmp/buendia-v4-rendered.html`: correcto sobre la respuesta HTTP local.
- `git diff --check`: correcto.
- Servidor local: HTTP 200.
- Chrome: revisión visual a 360, 390, 768 y 1440 px. Medición del DOM: `scrollWidth` coincide exactamente con cada ancho; 49 entradas clínicas presentes. Sin imágenes rotas detectadas.
- Menú móvil: apertura, navegación a Áreas de atención y cierre comprobados a 390 px.
- Privacidad a 360 px: apertura y cierre comprobados; `dialog.open === false` al cerrar y foco devuelto a «Aviso de Privacidad».
- Video observado como fondo en móvil; bloque del iframe comparado literalmente con el original.
- Mapas de ambos hospitales cargaron en Chrome. Destinos conservados, sin place IDs inventados.

Existe otro servidor Next.js en el puerto 3000. Para evitar colisiones con su `.next`, las pruebas finales usaron `.next-redesign-v4`. `NEXT_DIST_DIR` es opcional: sin esa variable se conserva el comportamiento habitual. Next.js añadió la ruta de tipos correspondiente a `tsconfig.json`.

El primer intento de build aislado falló al descargar Google Fonts por la restricción de red del sandbox. Se repitió con acceso a red y terminó correctamente. Se detuvieron los servidores de prueba propios; el servidor previo no se detuvo.

Para repetir las comprobaciones sin interferir con otro servidor:

```sh
npm run lint
npm run typecheck
NEXT_DIST_DIR=.next-redesign-v4 npm run build
NEXT_DIST_DIR=.next-redesign-v4 npm run test:content
NEXT_DIST_DIR=.next-redesign-v4 npm run start -- --hostname 127.0.0.1 --port 3100
```

## Archivos modificados o creados

- `.gitignore`: exclusión de salida aislada y caché de TypeScript.
- `.eslintrc.json`: configuración de lint.
- `app/globals.css`: diseño responsive, navegación, áreas, contacto y accesibilidad.
- `app/layout.tsx`: SEO y canonical.
- `app/page.tsx`: composición del contenido de servidor.
- `components/DemoDrDiegoBuendia.tsx`: navegación, hero, viñeta del perfil, consultorios, contacto y footer.
- `components/CareAreas.tsx`: módulos editoriales y listas clínicas compartidas.
- `data/care-areas.ts`: transcripción clínica íntegra y tipada, sin cambios en el ajuste posterior.
- `components/TreatmentAccordion.tsx`: tarjeta accesible con apertura y cierre independientes.
- `next.config.js`: salida de compilación opcional para verificación aislada.
- `package.json`: comandos de typecheck y comprobación editorial.
- `tsconfig.json`: inclusión adicional de tipos de la salida aislada.
- `scripts/verify-redesign.mjs`: comprobación de integridad editorial y elementos preservados.
- `REPORTE_REDISENO_V4.md`: este reporte.

El prompt y las cinco imágenes eran archivos previos sin seguimiento. No fueron modificados ni añadidos al índice Git. No hay commits, pushes ni despliegues realizados por esta tarea.

## Pendientes de revisión del propietario

- Aprobar visualmente el rediseño, sus recortes y el ritmo de lectura de las áreas extensas.
- La biografía previa menciona formación en el IMSS, membresía de North American Spine Society y dos maestrías; la fuente editorial nueva no confirma estas menciones y enumera otras membresías. Se conservaron por instrucción expresa, sin sustituciones silenciosas. No se detectó una contradicción directa que justificara borrarlas. Confirmar estos datos antes de una futura revisión editorial.
- No se incorporó JSON-LD nuevo: no existía infraestructura previa y se mantuvo el alcance conservador de datos estructurados.

## Comprobaciones del ajuste posterior

- Respaldo adicional del estado anterior a estos ajustes: `/private/tmp/drbuendia-pre-ajustes-acordeon-20261103.tar.gz`.
- Lint sin advertencias, TypeScript, build aislado, integridad editorial y `git diff --check`: correctos.
- HTML de producción: 22 botones de tratamiento inicialmente cerrados y sus paneles asociados mediante IDs únicos.
- Comparación con el respaldo: componente de padecimientos, Mano y muñeca, navegación, consultorios y contacto sin cambios.
- Sin dependencias nuevas, deploy ni push.
- La prueba nativa adicional de teclado en Chrome terminó por timeout del controlador; no se considera verificación de interacción completada. Los botones conservan el comportamiento nativo de teclado y queda pendiente corroborarlo manualmente en el navegador.

## Segunda mejora visual de Tratamientos

Se amplió el componente existente, sin reconstruir el acordeón ni modificar `CareAreas.tsx`, el dataset médico o las demás secciones.

- Hover de escritorio: azul clínico claro, título y borde azules, elevación de 4 px, sombra difusa, línea inferior de izquierda a derecha y giro sutil del indicador.
- Abierto: azul profundo de la identidad (`--clinical-blue`), título blanco, signo menos animado a partir del Plus existente, mayor espacio interior y línea lateral de acento.
- Descripciones completas en Fraunces cursiva editorial, 17 px en escritorio y 16 px en móvil; los títulos conservan su tipografía.
- Transiciones de 300 ms para color, expansión y contenido. Aparición inicial de 350 ms con un desfase de 70 ms entre columnas.
- La aparición se prepara únicamente para tarjetas fuera de pantalla. Cada observador se desconecta tras la primera entrada; las tarjetas inicialmente visibles y el HTML sin JavaScript permanecen visibles.
- Hover limitado a puntero preciso; en táctil se conserva el mismo botón y su apertura/cierre. Focus visible, ARIA y botones semánticos intactos. Movimiento reducido desactiva transiciones, desplazamientos y aparición escalonada.
- Contraste calculado sobre el fondo activo: título 11.53:1 y descripción 9.73:1.

Comprobaciones: lint sin advertencias, TypeScript, build, integridad editorial (92 bloques), `git diff --check` y HTTP 200 correctos. Primera carga de JavaScript según Next.js: 99.8 kB. Comparación con el respaldo confirma contenido, estructura de áreas y estilos de las otras secciones intactos.

Se observó el hover y el foco en Chrome de escritorio. El controlador nativo agotó su tiempo de espera al intentar completar la inspección del estado abierto y la interacción móvil; esa parte de la revisión visual queda pendiente y no se considera aprobada automáticamente.

Respaldo de esta iteración: `/private/tmp/drbuendia-pre-tratamientos-premium-20261103.tar.gz`.

El build queda servido para revisión en `http://127.0.0.1:3100`, con salida aislada `.next-redesign-v4`. Se mantiene el servidor local por petición expresa del propietario. Sin nuevas dependencias, push ni deploy.
