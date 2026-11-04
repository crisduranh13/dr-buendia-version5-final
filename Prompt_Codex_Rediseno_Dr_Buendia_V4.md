# PROMPT ÚNICO PARA CODEX — DR. DIEGO BUENDÍA / REDISEÑO V4

Actúa como ingeniero frontend senior y diseñador UI/UX experto en sitios médicos. Trabaja directamente en ESTE repositorio abierto en VS Code. Tu tarea es implementar cuidadosamente el rediseño solicitado, usando como fuente de verdad el contenido editorial íntegro incluido más abajo. No supongas que el proyecto es Next.js: inspecciona package.json, estructura, framework, gestor de dependencias y convenciones. Usa las capacidades disponibles del stack existente; NO migres ni reescribas el proyecto para cambiar a Next.js. Si ya utiliza Next.js, aprovecha sus primitivas apropiadas (por ejemplo next/image); de lo contrario usa sus equivalentes.

## FASE 0 — RESPALDO REAL Y DIAGNÓSTICO (OBLIGATORIOS ANTES DE EDITAR)
1. Ejecuta `git status --short`, identifica branch y commit actual, y revisa el proyecto. NO sobrescribas ni descartes cambios sin guardar.
2. Crea una rama de trabajo `feat/doctor-buendia-redesign-v4` si no existe; si existe, crea un nombre alternativo único. Registra el commit base en el reporte.
3. Antes de tocar archivos, realiza un respaldo recuperable del estado actual: crea una etiqueta Git de respaldo si es seguro y no colisiona (por ejemplo `backup/pre-buendia-v4-YYYYMMDD`), y/o genera un archivo bundle Git verificado fuera del árbol de trabajo. El backup de Git no incluye cambios no confirmados: si hay modificaciones o archivos nuevos, respáldalos también sin hacer commits silenciosos ni perder su contenido. Si el repositorio no tiene Git o no puedes garantizar una copia segura, DETENTE antes de modificar y explica el bloqueo.
4. Lista archivos clave, componentes de hero, navegación, perfil, servicios, consultorios, contactos, estilos y assets. Inspecciona `/images`, `public/images`, o la ruta real que exista. Verifica existencia y resolución de cinco archivos webp (exactos, sensibles a mayúsculas/minúsculas): `1-TRAUMATOLOGIA.webp`, `2-ORTOPEDIA.webp`, `3-ORTOPEDIA-mano.webp`, `4-CIRUGIA.webp`, `5-IMAGEN-DR-BUENDIA.webp`. No dupliques assets si la ruta ya sirve. Si falta alguna imagen, reporta el nombre y usa un fallback existente sin inventar rutas.
5. Identifica y preserva el VIDEO DE FONDO DEL HERO (fuente, reproducción, overlay, comportamiento móvil) y la interfaz de aviso de privacidad. No cambies ni elimines este video.
6. Revisa las referencias y enlaces actuales a WhatsApp, teléfono, Google Maps y redes. NO alteres enlaces funcionales sin razón.

## OBJETIVO Y ALCANCE
No es un sitio nuevo desde cero: moderniza la web manteniendo el lenguaje de marca y componentes que funcionan. Prioriza diseño premium, sobrio, humano, de confianza clínica, accesibilidad y rendimiento móvil. Evita una apariencia de documento Word, tablas clínicas, exceso de tarjetas repetidas o efectos exagerados. Respeta estrictamente la fuente editorial, sin agregar promesas de resultados médicos, técnicas ni acreditaciones no proporcionadas.

### A. HEADER / NAVEGACIÓN
- Añade una barra superior fina y responsiva con `Urgencias 24 horas: 55 1048 9471 · Citas por WhatsApp: 55 5199 6805`. En desktop ambas acciones clicables (tel: y wa.me respectivamente); en móvil quepa sin romper layout: mostrar acciones claras `Agendar por WhatsApp` y `Llamar a urgencias`, accesibles y clicables.
- Preserva el logo funcional y la identidad existente. Menú: `Perfil profesional`, `Áreas de atención`, `Consultorios y citas`; botón destacado `Agendar consulta`. Navegación por anchors hacia secciones reales, considerando encabezado sticky.
- En móvil ofrece menú apropiado, sin saturar el encabezado ni duplicar CTAs de forma invasiva.

### B. HERO
- MANTENER intacto el video actual y su comportamiento. Actualizar el copy EXACTAMENTE según el apartado 2 de la fuente: línea superior, título `Traumatología, Ortopedia y Cirugía de Columna`, subtítulo, ubicación de consultorios y 2 CTAs `Agendar consulta` y `Urgencias 24 horas`.
- Rediseñar solo composición tipográfica, gradientes/overlay y espaciados si mejora la legibilidad sobre el mismo video; revisar desktop y móvil. No cambiar por una imagen fija.

### C. PERFIL PROFESIONAL
- Por decisión editorial del propietario, CONSERVAR la biografía narrativa de la web actual, su imagen, firma, maquetación y sus viñetas, NO sustituir todo por ficha técnica del Word. Añadir únicamente una viñeta `Más de 20 años de ejercicio profesional.` (si ya hay formulación equivalente en una viñeta, no duplicar).
- Sí es conveniente corregir inconsistencias verificables de datos objetivos al comparar con la fuente (nombre, cedulas, certificaciones), pero NO borrar credenciales actuales ni inventar nuevas; ante contradicción, dejar constancia para revisión y no realizar reemplazo silencioso. Si se requieren datos del Word para pie o meta, usar los allí proporcionados.

### D. NUEVA ARQUITECTURA DE ÁREAS DE ATENCIÓN — PRIORIDAD MÁXIMA
- Sustituye las secciones sueltas actuales de `Padecimientos` y `Procedimientos` por una sección cohesiva `Áreas de atención`, con texto introductorio exacto del Word y 3 grandes áreas con estos assets y en este orden:
  1. `Traumatología` → `1-TRAUMATOLOGIA.webp`.
  2. `Ortopedia` → `2-ORTOPEDIA.webp`, incluyendo subsección `Mano y muñeca` → `3-ORTOPEDIA-mano.webp`.
  3. `Cirugía de Columna` → `4-CIRUGIA.webp`.
- Cada área comienza con un módulo editorial visual que aprovecha la imagen, título grande y texto exacto; imágenes de proporción agradable, responsive, recorte `object-fit: cover` razonable y alt descriptivo. Alternar composición para ritmo visual si conviene.
- Por cada área, mostrar `Padecimientos` como subtítulo destacado. Cada padecimiento debe aparecer INDIVIDUALMENTE, con su NOMBRE literal y su DESCRIPCIÓN completa según la fuente. NO iconos ni imágenes para padecimientos. Diseño editorial con numeración sutil opcional, separadores, tipografía refinada, fondos ligeros/hover, microinteracciones discretas, sin ocultar información detrás de hover. Distribución 1 columna móvil y 2 columnas escritorio cuando se lea correctamente. Mantener longitud completa de textos, sin truncar.
- Mostrar luego `Tratamientos` como subtítulo destacado. Cada tratamiento y descripción deben aparecer completos, individualizados, con tarjetas o filas diferenciadas, quizá iconografía general coherente, opcional y discreta (reutilizar biblioteca de iconos ya instalada; NO inventar iconos anatómicos específicos). No convertir tratamientos en una tabla. Diferenciar visualmente tratamientos de padecimientos.
- Cada área lleva los CTAs indicados en la fuente. CTA principal a WhatsApp, urgencias por `tel:`. No añadir afirmaciones de curación garantizada.
- EXCEPCIÓN IMPORTANTE: En `Mano y muñeca`, el Word mezcla en cada entrada descripción del padecimiento y posibilidades de tratamiento. Mantén esa asociación bajo cada título, sin fragmentar oraciones arbitrariamente; se puede crear una presentación de entradas/casos dentro de Ortopedia con dos bloques semánticos `Padecimiento` y `Manejo` si el texto lo permite sin reescribir el contenido. Mantén todas las entidades y frases del documento, incluida distinción entre De Quervain y dedo en resorte. No inventes tratamientos separados.
- Usa data-driven React/TS (arrays de objetos con `slug`, `title`, `description`, `conditions`, `treatments`, `image` si el proyecto es React), componentes compartidos y keys únicas. Conserva contenido visible para SEO (evitar renderizado exclusivamente interactivo). No añadas dependencias pesadas.

### E. CONSULTORIOS Y CITAS
- Conservar estructura atractiva, tarjetas/mapas y links funcionales actuales; actualizar nombres y direcciones EXACTAS, consultorios y CTA usando la sección 5 del Word.
- Conservar mapa embebido o enlaces externos existentes si funcionan. Para WhatsApp usar `https://wa.me/525551996805` (número para citas). Urgencias `tel:+525510489471`. Enlaces de mapas a destinos correctos sin inventar place IDs.
- En CTA de cierre conservar personalidad del diseño actual, actualizando el texto a `Agende una consulta` y su subtítulo del Word. Actualizar números de consultorio y correo.

### F. FOOTER Y SEO
- Mantener el pie de página actual, pero completar datos verificables de sección 6: nombre, áreas, formación/cédulas cuando corresponda, aviso informativo, derechos y enlaces a privacidad. Incluir redes solo si hay URLs reales existentes; NO crear links `#` ni inventar cuentas.
- Actualiza título/metadescripción, H1 único, jerarquía H2/H3, alt, canonical si existe, y JSON-LD MedicalPhysician/Physician solo si ya hay infraestructura de datos estructurados o es seguro hacerlo, sin datos inventados. No afirmar procedimientos no indicados.
- Respetar preferencias de movimiento reducido, focus visible, contraste, semántica, enlaces accesibles y scroll margins. Probar móvil 360/390 px, tablet 768 px, desktop 1440 px; verificar que ninguna tarjeta desborde, que el header no tape anchors, el video no dificulte leer, las imágenes carguen y los botones funcionen.

## RESTRICCIONES IMPORTANTES
- No modificar el back/video del hero, ni rediseñar innecesariamente la biografía.
- NO generar ni buscar otras fotografías. Usar las cinco imágenes webp locales existentes; NO usar imágenes de relleno ni componentes con iconos en los padecimientos.
- No resumir, parafrasear, omitir, reordenar ni alterar textos clínicos de la fuente, salvo ajustes tipográficos no semánticos (espacios/acentos solo con motivo verificable). Fuente de verdad para todas las secciones salvo la BIO expresamente exceptuada.
- No introducir frameworks ni librerías sin justificación. No exponer claves ni servicios. No desplegar, no hacer push remoto y no tocar producción sin autorización.
- Al terminar, corre el lint/typecheck/build disponibles y repara fallos provocados. Proporciona reporte: backup y forma de restauración, archivos modificados, resumen visual, número de padecimientos/tratamientos por área, rutas de assets verificadas, pruebas y asuntos pendientes de decisión.
- Implementa ahora; no te quedes solo en análisis. Si hay conflicto editorial o falta un asset crítico, informa y actúa conservadoramente en lo demás.

---

# FUENTE EDITORIAL INTEGRAL (WORD RECIBIDO, ACTUALIZADO AL 27 OCTUBRE 2026)

El siguiente contenido proviene del documento suministrado por el cliente. Cuando una celda dice `Foto` o `Mapa`, se refiere a asset o representación visual y no a texto visible. El documento está a continuación transcrito en orden para que puedas trabajar sin requerir el archivo .docx dentro del repo. Se preservan las descripciones originales.

Contenido web del Dr. Diego Buendia

Actualizado al 27 de octubre de 2026

1. Barra superior y menú

**Barra superior**
Urgencias 24 horas: 55 1048 9471     ·     Citas por WhatsApp: 55 5199 6805

**Logo**

**Menú**
Perfil profesional  ·  Áreas de atención  ·  Consultorios y citas

**Botón**
Agendar consulta

**Celular**
Agendar por WhatsApp     ·     Llamar a urgencias

2. Encabezado

**Línea superior**
Dr. Diego Eduardo Buendia Valdez  ·  Ciudad de México

**Título**
Traumatología, Ortopedia y Cirugía de Columna

**Subtítulo**
Diagnóstico y tratamiento de lesiones, dolor articular y problemas de columna. Opciones quirúrgicas y no quirúrgicas.

**Consultorios**
Consulta en Hospital MAC Periférico Sur y Hospital Ángeles Universidad.

**Botones**
Agendar consulta     ·     Urgencias 24 horas

3. Perfil profesional

**Foto del doctor**
5-IMAGEN-DR-BUENDIA.webp

**Título**
Perfil profesional

**Nombre**
Dr. Diego Eduardo Buendia Valdez

**Presentación**
Especialista en Ortopedia y Traumatología, con alta especialidad en Cirugía de Columna Vertebral.

**Formación**
Médico Cirujano. Universidad Nacional Autónoma de México (UNAM). Cédula profesional 5492834.
Especialidad en Ortopedia y Traumatología. UNAM, sede Hospital General Dr. Manuel Gea González. Cédula de especialidad 7440114.
Alta especialidad en Cirugía de Columna Vertebral. UNAM.

**Certificación**
Certificado por el Consejo Mexicano de Ortopedia y Traumatología, registro 1034217.

**Trayectoria institucional**
Más de 20 años de ejercicio profesional en instituciones públicas y privadas.

**Actividad y membresías**
Docente, conferencista y autor de investigaciones y capítulos de libros de su especialidad. Miembro de la Asociación Mexicana de Cirujanos de Columna y AO Spine.

4. Áreas de atención

**Título**
Áreas de atención

**Texto**
Atención de lesiones y enfermedades de huesos, articulaciones, músculos, tendones y columna vertebral. La elección del tratamiento depende del diagnóstico y de las condiciones del paciente. Puede incluir medidas no quirúrgicas o cirugía.

Traumatología

**Foto**
1-TRAUMATOLOGIA.webp

**Título**
Traumatología

**Texto**
Atención de lesiones por caídas, accidentes y actividad deportiva.

### Padecimientos

### Fracturas. Roturas de un hueso por caídas, golpes o accidentes, que pueden causar dolor, hinchazón y dificultad para mover la zona.
Fracturas de cadera y por fragilidad. Fracturas por caídas leves en huesos debilitados, con frecuencia por osteoporosis; pueden afectar cadera, muñeca, hombro o columna.
Esguinces. Lesiones de los ligamentos que estabilizan una articulación, generalmente por una torcedura, que pueden causar dolor, inflamación e inestabilidad.
Luxaciones. Pérdida de la posición normal de los huesos de una articulación, que puede provocar dolor intenso y dificultad para moverla.
Lesiones de ligamentos y meniscos. Daño en las estructuras que estabilizan y amortiguan la rodilla, que puede causar dolor, bloqueo o sensación de inestabilidad.
Lesiones de tendones. Lesiones de los tejidos que unen el músculo al hueso, que pueden producir dolor, debilidad y limitación del movimiento.
Lesiones deportivas y por sobrecarga. Lesiones por golpes, giros, esfuerzos repetidos o sobrecarga durante la actividad física, incluidas fracturas por estrés y desgarros musculares.
Secuelas de fracturas. Fracturas que no han unido adecuadamente o consolidaron en mala posición, con posibles molestias, deformidad o limitación para moverse.

### Tratamientos

**Tratamiento conservador**
Inmovilización con yeso, férula o bota, medicamentos y rehabilitación, según la lesión.

**Fijación de fracturas**
Alineación y estabilización del hueso con placas, tornillos, clavos o fijadores externos, según la fractura.

**Reducción de luxaciones**
Colocación de la articulación en su posición mediante maniobras médicas. Las luxaciones recurrentes pueden requerir estabilización quirúrgica.

**Cirugía de ligamentos**
Reparación o reconstrucción de ligamentos, como el cruzado anterior de la rodilla o los del tobillo.

**Cirugía de meniscos**
Reparación mediante sutura o retiro parcial del tejido lesionado por artroscopia, según el caso.

**Reparación de tendones**
Reparación del manguito rotador, tendón de Aquiles, bíceps o tendones de la rodilla, según la lesión.

**Corrección de secuelas**
Corrección de la alineación y nueva fijación; en algunos casos se utiliza injerto óseo.

**Botones**
Agendar consulta     ·     Llamar a urgencias

Ortopedia

**Foto**
2-ORTOPEDIA.webp

**Título**
Ortopedia

**Texto**
Atención del dolor, desgaste, rigidez y limitación del movimiento en rodilla, cadera, hombro, codo, mano y muñeca.

### Padecimientos

### Artrosis. Desgaste del cartílago de las articulaciones que puede causar dolor, rigidez y dificultad para moverse, especialmente en rodilla, cadera o manos.
Lesiones del cartílago. Daño localizado en el tejido que recubre los extremos de los huesos, que puede producir dolor, inflamación o bloqueo articular.
Tendinopatías. Alteraciones de los tendones por sobrecarga, lesión o desgaste, que pueden causar dolor y limitar el movimiento de la zona afectada.
Bursitis. Inflamación de las bolsas que reducen el roce entre tejidos alrededor de las articulaciones, que puede causar dolor y sensibilidad.
Deformidades de huesos y articulaciones. Cambios en la alineación de huesos o articulaciones, congénitos o adquiridos, que pueden afectar el movimiento y la distribución de cargas.
Osteonecrosis. Daño de una parte del hueso por disminución de su riego sanguíneo, que puede afectar la articulación y provocar dolor.
Infecciones de hueso y articulación. Infecciones que afectan el hueso, las articulaciones o los implantes y que requieren atención oportuna para limitar el daño de los tejidos.

### Tratamientos

**Artroscopia**
Uso de una cámara e instrumentos por pequeñas incisiones para tratar lesiones articulares. Incluye reparación o estimulación del cartílago en casos seleccionados.

**Reemplazo articular**
Sustitución de superficies articulares por una prótesis de rodilla, cadera u hombro. Incluye cirugía de revisión de prótesis previas, según el caso.

**Osteotomía**
Corte controlado del hueso para modificar su alineación y la distribución de cargas.

**Limpieza quirúrgica**
Retiro del tejido infectado y tratamiento con antibióticos. Puede requerir retiro o recambio de implantes.

**Cirugía asistida**
Navegación o asistencia robótica para planear y colocar implantes en procedimientos seleccionados.

**Infiltraciones y bloqueos**
Aplicación de medicamento en zonas específicas como parte del manejo del dolor y la inflamación.

**Medicamentos y rehabilitación**
Manejo del dolor y la inflamación, coordinado con fisioterapia y ejercicio terapéutico.

### Mano y muñeca

**Foto**
3-ORTOPEDIA-mano.webp

**Texto**
Consulta por dolor, hormigueo, adormecimiento o pérdida de fuerza en la mano y la muñeca.

**Síndrome del túnel del carpo**
Compresión del nervio mediano en la muñeca, que puede causar hormigueo, adormecimiento y pérdida de fuerza en la mano.
Puede tratarse con férula, medicamentos, infiltración o liberación quirúrgica, según el caso.

**Lesiones de tendones y ligamentos**
Daño en los tejidos que mueven y estabilizan la mano y la muñeca, que puede causar dolor o limitar su función.
Manejo con inmovilización y rehabilitación, o reparación quirúrgica según el tipo de lesión.

**De Quervain y dedo en resorte**
De Quervain. Inflamación de la vaina de los tendones del pulgar en la muñeca, que puede causar dolor al moverlo o sujetar objetos.
Dedo en resorte. Alteración de la vaina de los tendones flexores que puede hacer que un dedo se atore, duela o se bloquee al moverse.
Su manejo puede incluir férula, medicamentos, infiltración o liberación quirúrgica.

**Fracturas de mano y muñeca**
Roturas de los huesos de la muñeca, la mano o los dedos, que pueden causar dolor, hinchazón y dificultad para moverlos.
Inmovilización o fijación quirúrgica, según la estabilidad y el desplazamiento de la fractura.

**Quistes sinoviales**
Bultos benignos llenos de líquido que pueden aparecer en la muñeca y causar molestias o limitar el movimiento.
Cuando requieren tratamiento, puede indicarse aspiración o retiro quirúrgico.

**Botón**
Agendar consulta

Cirugía de Columna

**Foto**

**Título**
Cirugía de Columna

**Texto**
Diagnóstico y tratamiento del dolor de espalda o cuello, con o sin molestias en brazos o piernas, hormigueo o pérdida de fuerza.

### Padecimientos

### Hernia de disco. Desplazamiento de parte del disco intervertebral que puede comprimir un nervio y provocar dolor, hormigueo, adormecimiento o pérdida de fuerza.
Enfermedad degenerativa del disco y dolor lumbar crónico. Desgaste de los discos y las articulaciones de la columna, que puede acompañarse de dolor persistente, rigidez y limitación para las actividades.
Estenosis del canal lumbar o cervical. Estrechamiento del espacio por donde pasan los nervios o la médula espinal, que puede causar dolor, debilidad o dificultad para caminar.
Espondilolistesis. Desplazamiento de una vértebra sobre otra, que puede provocar dolor de espalda y molestias en las piernas cuando existe compresión nerviosa.
Escoliosis, cifosis y otras deformidades. Alteraciones de la curvatura de la columna que pueden asociarse con dolor, desequilibrio postural o dificultad para realizar algunas actividades.
Fracturas y lesiones vertebrales. Lesiones de las vértebras por accidentes o fragilidad del hueso, que pueden causar dolor y, en algunos casos, afectar los nervios.
Infecciones y tumores de columna. Procesos infecciosos o lesiones tumorales de la columna que requieren diagnóstico y atención coordinada con otras especialidades, según cada caso.

### Tratamientos

**Tratamiento conservador**
Rehabilitación, medicamentos y bloqueos o infiltraciones guiadas por imagen, según el caso.

**Cirugía de mínima invasión**
Accesos pequeños, con microscopio, endoscopio o navegación, según el caso.

**Microdiscectomía**
Retiro con microscopio del fragmento de disco que comprime una raíz nerviosa.

**Descompresión**
Liberación de nervios o médula espinal comprimidos por hueso, ligamento o disco.

**Fusión vertebral**
Unión de vértebras con injerto óseo e implantes para estabilizar la columna.

**Cirugía de escoliosis y cifosis**
Corrección y estabilización de la curvatura, con planeación individual del procedimiento.

**Fijación de fracturas**
Fijación de fracturas inestables con tornillos y barras.

**Vertebroplastia y cifoplastia**
Procedimientos de cementación vertebral en casos seleccionados de fracturas por osteoporosis.

**Botón**
Agendar consulta

5. Consultorios y citas

**Título**
Consultorios y citas

### Hospital MAC Periférico Sur

**Dirección**
Torre II, piso 8, consultorio 822
Periférico Sur 5246, col. Pedregal de Carrasco, Coyoacán, C.P. 04700, Ciudad de México

**Mapa**

**Botones**
Agendar consulta     ·     Cómo llegar

### Hospital Ángeles Universidad

**Dirección**
Consultorio 5010
Avenida Universidad 1080, col. Xoco, Benito Juárez, C.P. 03339, Ciudad de México

**Mapa**

**Botones**
Agendar consulta     ·     Cómo llegar

### Citas

**Título**
Agende una consulta
Consulte las opciones de tratamiento para su lesión o padecimiento.

**Datos**
WhatsApp para citas: 55 5199 6805
Teléfonos de consultorio: 55 5199 6805  ·  55 5424 1489  ·  55 4333 7869
Urgencias 24 horas: 55 1048 9471
Correo: drdiegobuendia@gmail.com

6. Pie de página

**Logo**

**Nombre**
Dr. Diego Eduardo Buendia Valdez
Traumatología  ·  Ortopedia  ·  Cirugía de Columna  ·  Ciudad de México

**Formación y cédulas**
Médico Cirujano y especialista en Ortopedia y Traumatología por la UNAM.
Cédula profesional 5492834  ·  Cédula de especialidad 7440114
Alta especialidad en Cirugía de Columna Vertebral. UNAM.

**Redes**
@DrDiegoBuendia  ·  Facebook  ·  Instagram  ·  TikTok

**Enlaces**
Aviso de privacidad

**Aviso informativo**
Este sitio ofrece información general y no sustituye una consulta médica. La indicación de cada tratamiento depende del diagnóstico y de las condiciones del paciente.

**Derechos**
© 2026 Dr. Diego Eduardo Buendia Valdez. Todos los derechos reservados.

IMÁGENES QUE YA CREE CHATGPT

En /images

1-TRAUMATOLOGIA.webp

2-ORTOPEDIA.webp

3-ORTOPEDIA-mano.webp

4-CIRUGIA.webp

5-IMAGEN-DR-BUENDIA.webp

---

## CRITERIOS DE ACEPTACIÓN PARA ENTREGAR
1. Backup creado ANTES de editar; rama de trabajo confirmada; no perder cambios previos.
2. Hero conserva su video y lleva los nuevos textos y CTAs.
3. Perfil previo permanece reconocible y añade una sola viñeta de 20 años.
4. Las cuatro agrupaciones visuales (Traumatología, Ortopedia, Mano y muñeca, Cirugía de Columna) usan sus imágenes exactas; el perfil usa imagen actual o webp previsto si ya es apropiado.
5. NINGÚN padecimiento ni tratamiento del documento se omite; todos se leen sin abrir modales, el contenido no queda cortado.
6. Los dos números principales funcionan desde móvil: citas WhatsApp 55 5199 6805, urgencias por llamada 55 1048 9471. Datos de hospitales y consultorios actualizados.
7. Los cambios respetan accesibilidad, SEO básico, diseño responsivo y rendimiento; el build termina sin errores introducidos por el trabajo.
8. Entregar resumen de diferencias, pruebas y puntos que requieren mi aprobación visual. NO hacer despliegue ni push.
