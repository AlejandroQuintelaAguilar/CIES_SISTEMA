# Demo Funcional Refinada - Sistema Educativo Institucional CIES (Gestión 2026)

Prototipo interactivo actualizado con los **instrumentos normativos y de calidad oficiales de CIES**:
- **Tablero de Monitoreo Programático** (`SGC-Visional-MAM-6 o11`, vigencia 2026).
- **Planilla de Asistencia Diaria Oficial** (`SGC-Apoyo-ABS-3-pp3`).
- **Procedimientos de Gestión de la Calidad:** Información SSSR (`SGC-Misional-E-1`), Orientación SSSR (`SGC-Misional-E-4`) y Sensibilización (`SGC-Misional-E-3`).
- **Marco Legal Boliviano:** Ley 348 (Vida Libre de Violencia) y Ley 3729 (Prevención VIH/SIDA).

---

## 🚀 ¿Cómo abrir la demo?

1. No requiere instalación de bases de datos ni dependencias en el servidor.
2. Abre directamente el archivo [`DEMO/index.html`](file:///c:/Users/USUARIO/Documents/CIES/DEMO/index.html) con tu navegador habitual (Edge, Chrome, Firefox).
3. Para restablecer o actualizar a los datos oficiales más recientes, haz clic en el botón rojo **"Restablecer datos oficiales"** en la parte inferior del menú lateral izquierdo.

---

## 📌 Novedades y Lógica de Negocio Incorporada

### 1. Tablero de Monitoreo 2026
- Fórmulas de cumplimiento porcentual automatizadas: `% Cumplimiento = (Logro Actual / Meta Anual) * 100`.
- Indicadores reales: Sensibilización al entorno, Pruebas de VIH con tira reactiva, Consultas a jóvenes (Urbana/Rural, Nuevos/Antiguos), y Capacitación docente.

### 2. Participantes (Planilla Oficial CIES)
- Incorporación de las **5 identidades de género oficiales**: *Femenino, Masculino, Trans femenino, Trans masculino, Otros*.
- Rangos de edad normativos: *10 a 14, 15 a 19, 20 a 24, > 24 años*.
- Asignación por las **9 oficinas regionales** del país (LP, EA, CBBA, SCZ, SU, TJA, PTS, OR, BENI).

### 3. Categorías Oficiales de Planillas y Registros
Se estructuraron las **6 categorías institucionales oficiales** de CIES:
1. 📋 **Planilla de Asistencia y Alimentación (`SGC-Apoyo-ABS-3-pp3`):** Registro de asistencia diaria con entrega de materiales y control de 4 comidas (RM, AL, RT, CE).
2. 💰 **Planilla de Entrega de Viáticos (`Encuentros CIES`):** Control presupuestario de estipendios y pasajes a maestras/os y líderes.
3. 💻 **Registro de Actividades Virtuales (`Zoom/Meet`):** Asistencia en línea con tiempo de permanencia.
4. 📢 **Registro de Información Sala / Comunidad (`SGC-Misional-E-1-ff2`):** Charlas breves clasificadas por tema SSSR.
5. 👥 **Registro Informativo Par a Par (`Red Tú Decides`):** Sesiones exclusivas entre jóvenes.
6. 🔍 **Planilla de Supervisión Técnica (`SGC-Misional-E-1-ff5`):** Acompañamiento pedagógico y evaluación técnica in situ.
- *Filtro dinámico:* Selector en la cabecera para listar por categoría específica o ver todas.

### 4. Orientación SSSR & Protocolos de Salud
- **Tamizaje de Violencia (Ley 348):** Detección mediante las 3 preguntas normativas; si es positivo activa alerta visual de ruta institucional.
- **Pruebas Rápidas de VIH (Ley 3729):** Tira reactiva con consentimiento informado pre y post atención.
- **Códigos temáticos oficiales:** PF, ITS, PAP/CA, DS y DR, SXL, VBG, SMI, VIH-SIDA, APA.

### 5. Categorías Oficiales de Digitalización de Evidencias
El repositorio seguro permite subir y clasificar respaldos digitales según los **7 tipos de evidencias institucionales**:
1. 📋 **Planilla de Asistencia Firmada (`SGC-Apoyo-ABS-3-pp3`):** Escaneos de planillas físicas con firmas originales de participantes y educador/a.
2. 💰 **Comprobante / Planilla de Viáticos y Pasajes:** Recibos y planillas de descargo financiero firmadas.
3. 📸 **Evidencia Fotográfica de Actividad:** Fotografías de talleres, ferias y grupos focales con geolocalización o cartel oficial.
4. 📝 **Acta / Minuta de Coordinación o Convenio:** Acuerdos institucionales con directores de Unidades Educativas, Sedes o Gobiernos Municipales.
5. 📊 **Tablero / Reporte Programático Oficial:** Archivos Excel consolidados con avances cuantitativos mensuales.
6. 🩺 **Consentimiento Informado / Ficha Clínica:** Formatos firmados para aplicación de pruebas rápidas (VIH) o atenciones clínicas bajo confidencialidad.
7. 🔍 **Ficha de Supervisión Técnica In Situ:** Evaluaciones metodológicas realizadas por el equipo de coordinación.
- *Filtro dinámico y buscador:* Filtrado en tiempo real por categoría de evidencia y buscador por nombre de archivo, usuario o módulo vinculado.

### 6. Seguimiento a Procesos Formativos (Maestros y Estudiantes)
El Tablero de Mando incorpora el monitoreo de los dos ciclos educativos clave de CIES:
- 🧑‍🏫 **Seguimiento a Maestras y Maestros (EIS):**
  - **Docentes Capacitados:** Total de profesores formados en talleres pedagógicos CIES.
  - **Docentes Activos en Aula:** Profesores que aplican activamente la Educación Integral en Sexualidad en sus cursos.
  - **Tasa de Activación:** Proporción de profesores que replican la formación.
- 🎓 **Ciclos Formativos de Estudiantes y Jóvenes:**
  - **Iniciaron Formación:** Participantes que asisten a la sesión inicial (Sesión 1 / Pre-test).
  - **Culminaron Formación:** Estudiantes que completaron las 3 sesiones reglamentarias y aprobaron el Post-test de conocimientos.
  - **Tasa de Culminación:** Porcentaje de retención y finalización exitosa del proceso formativo.

### 7. Evaluación de Impacto Pedagógico (Pre-Test, Post-Test y Ganancia $\Delta$)
Basado en el procedimiento de calidad **Sensibilización SSSR (`SGC-Misional-E-3`)** para procesos formativos ($\ge 9$ horas pedagógicas o 3 sesiones):
- 📝 **Pre-Test (Línea Base):** Aplicado al iniciar la primera sesión para medir los conocimientos previos del grupo e identificar mitos o debilidades temáticas.
- 🎯 **Post-Test (Resultado Formativo):** Aplicado al culminar la tercera sesión con el mismo rigor temático para calificar la adquisición de conocimientos ($\ge 70\%$ para certificación).
- 📈 **Ganancia Neta de Conocimiento ($\Delta$):** Cálculo automático del impacto pedagógico mediante la fórmula:
  $$\Delta = \text{Promedio Post-Test} - \text{Promedio Pre-Test}$$
- ⭐ **Encuesta de Satisfacción Metodológica:** Calificación del facilitador/a, materiales y metodología en escala 1 a 5 estrellas.
- 💻 **Modal de Evaluación Integrado en Actividades:**
  - En la tabla de actividades, la columna **Impacto (Pre/Post)** muestra una insignia con el delta logrado (ej. `📈 +46% Δ (3)`) o un botón interactivo `+ Evaluar`.
  - Permite seleccionar participantes vinculados, calificar sus pruebas Pre y Post de 0 a 100, registrar su satisfacción y ver en tiempo real el resumen de impacto del taller.

### 8. Validación y Control Superior de Documentos (Check Admin & Orientador)
Para garantizar la calidad de las evidencias y evitar registros no conformes en auditorías de calidad SGC:
- 🛡️ **Roles Validador / Control Superior:**
  - **Admin (Administrador / Coordinador Nacional):** Otorga la aprobación final y financiera de los documentos institucionales (`✓✓ Aprobado Admin`).
  - **Orientador/a SSSR (Miembro Superior Técnico):** Valida la exactitud metodológica, técnica y clínica de los consentimientos, fichas y planillas (`✓ Validado Orientador`).
- 🔘 **Mecanismo de Doble Check:**
  - **Check Rápido Institucional:** Botón `✓ Check` en línea para aprobar directamente como Admin en un solo clic.
  - **Modal de Control y Dictamen (`modal-validar-documento`):** Permite cambiar el estado a *Aprobado Admin*, *Validado Orientador*, *Observado* (para solicitar subsanación de firmas o sellos ilegibles) o *Pendiente*, adjuntando notas técnicas de retroalimentación.
- 📊 **Panel de Control y Filtros:**
  - Tarjetas KPI en vivo con el conteo de evidencias *Totales, Aprobadas por Admin, Validadas por Orientador y Pendientes de Check*.
  - Filtro dinámico cruzado por categoría oficial y estado de validación.

### 9. Informes Narrativos Mensuales y Semestrales (18 Hojas Técnicas y Carga de Archivos)
Estructuración del sistema para el reporte cualitativo y cuantitativo institucional:
- 📅 **Informes Narrativos Mensuales:**
  - Registran el avance de metas mes a mes por oficina regional (La Paz, El Alto, Cochabamba, Sucre, etc.).
  - Describen la ejecución de talleres, sesiones de orientación, réplicas docentes y pruebas de VIH.
- 📑 **Informes Semestrales Consolidados (IPPF / CIES):**
  - Consolidan las **18 hojas técnicas** de servicios de salud sexual y reproductiva (`SGC-Apoyo-ABS-3` e IPPF).
  - Incluyen análisis de desviaciones, lecciones aprendidas y cumplimiento presupuestario.
- 📤 **Módulo de Subida y Registro de Archivos:**
  - Permite cargar matrices Excel (`.xlsx`), informes ejecutivos Word (`.docx`) y versiones escaneadas oficiales en PDF.
  - Al registrarse, el informe se custodia en el repositorio institucional y se clasifica por periodicidad, regional y estado de aprobación.
  - Filtros cruzados en tiempo real por frecuencia (`Mensual`, `Semestral`, `Gestión`) y por Regional (`LP`, `EA`, `CBBA`, `SCZ`, `SU`, `TJA`, `PTS`, `OR`, `BENI`, `Nacional`).

### 10. Formato Oficial de Supervisión Técnica: Guía de Sesión de Orientación (`SGC-Misional-E-4-ii1`)
Integración formal del instrumento de auditoría in situ y aseguramiento de la calidad:
- 📄 **Documento Base Oficial:** [`1 Guia Supervision Sesion Orientacion.xlsx`](file:///C:/Users/USUARIO/Documents/CIES/Documentacion/PROCEDIMIENTO%20ORIENTACION/Procedimiento%20Orientaci%F3n%20SSSR/REGISTRO/1%20Guia%20Supervision%20Sesion%20Orientacion.xlsx) (Código SGC: `SGC-Misional-E-4-ii1`, Vigencia: 12/06/2020).
- 🔍 **Propósito de Calidad:**
  - Aplicado por Coordinadores/as y Miembros Superiores para evaluar el desempeño del orientador/a durante la atención individual.
  - **Sección A (Planeamiento):** Verificación de programación y consentimiento previo del usuario/a para la supervisión.
  - **Sección B (Preparación):** Privacidad física/acústica, material de apoyo y sistema de referencia interna.
  - **Sección C (Seguimiento):** Encuadre, explicación obligatoria del derecho a la confidencialidad, contención emocional y escucha activa ante violencia (Ley 348).
- 📊 **Evaluación Comparativa Longitudinal:**
  - Contraste entre la *1ra Supervisión* y la *2da Supervisión* con escala (*Sí, No, Debe mejorar, No aplica, En proceso*), tareas acordadas y firmas de ambas partes.
- 💻 **Acciones Disponibles en la Plataforma:**
  - **Panel 4 (Orientación SSSR & Violencia):** Tarjeta destacada con acceso a la rúbrica completa (`modal-rubrica-supervision`), descarga de la plantilla oficial y botón de subida directa.
  - **Panel 7 (Digitalización de Evidencias):** Categoría oficial específica y registro aprobado del formato matriz custodio.

---

### 11. Módulo de Autenticación Formal y Alta de Usuarios en 4 Pasos (Login & Wizard CIES 2026)
Implementación integral de la pantalla institucional de acceso y registro (Módulo 8 - Administración del Sistema):
- 🔐 **Pantalla de Inicio de Sesión Institucional (Tono Formal y Seguro):**
  - Diseño plano, sobrio y rigurosamente institucional sin degradados (*estilo corporativo CIES sin degradé*).
  - Encabezado oficial con identificación de *Sistema Educativo Institucional*, normativa *Gestión Operativa 2026* y certificación *ISO 9001:2015 SGC*.
  - Admite ingreso por correo institucional (`admin@cies.org.bo`) o código de usuario (`@rgomez`).
  - Clave institucional con alternador de visibilidad (mostrar/ocultar) y aviso formal de acceso restringido a personal acreditado.
  - Checkbox para mantener sesión institucional activa en la estación de trabajo.
  - Sin accesos directos informales para garantizar la autenticidad de la demostración.
- 🔄 **Formulario de Alta Secuencial en 3 Pasos (Wizard con Botón "Siguiente" y Validaciones):**
  - **Barra de Progreso y Stepper Institucional:** Indicador numerado en 3 etapas (*1. Datos Personales, 2. Institucionales, 3. Acceso al Sistema*) con cálculo de avance porcentual (*33%, 66%, 100%*) y estados visuales (activo, completado con check, pendiente).
  - **Paso 1: Datos Personales:**
    - Nombres y Apellidos completos de filiación civil.
    - Cédula de Identidad con Complemento y Extensión (número principal, complemento SEGIP opcional por homonimia ej. `1A` y selector departamental: `LP`, `CBBA`, `SCZ`, `CH`, `OR`, `PTS`, `TJA`, `BENI`, `PND`, `EXT`). Formato resultante: `4829102-1A LP` o `4829102 LP`.
    - Procedencia geográfica y de radicatoria (municipio, ciudad o comunidad de origen/residencia, con autocompletado y catálogo nacional, ej. *La Paz, El Alto, Cochabamba - Cercado, Santa Cruz de la Sierra*).
    - Correo electrónico institucional validado contra duplicidad.
    - Celular de contacto laboral (validación estricta de exactamente 8 dígitos numéricos, ej. `71234567`, con máscara y sanitización en tiempo real).
    - *Navegación:* Botón formal `Siguiente: Datos Institucionales →` con validación de obligatoriedad y formato.
  - **Paso 2: Datos Institucionales (con Asignación Automática de Módulos y Permisos):**
    - Cargo(s) formal(es) en la institución (con autocompletado y personalización libre).
    - Área / Programa de dependencia (*EIS, SSSR, Red Tú Decides, Monitoreo y SGC, Gerencia, Incidencia Política*).
    - Sede (9 Regionales CIES u Oficina Central Nacional).
    - **Asignación Multi-Cargo / Multi-Rol Oficial:** Permite seleccionar **uno o más cargos simultáneamente** (por ejemplo: *Responsable Regional* y *Educador*). La interfaz presenta un panel interactivo con tarjetas de selección organizadas bajo los títulos normativos de la institución (*Gerencia, Responsable educativo, Equipo Educativo y Operativo, Administración*).
    - **Cálculo y Asignación Automática Combinada:**
      - Los módulos habilitados corresponden a la **unión de módulos** de todos los cargos elegidos (ej. un usuario con *Responsable Regional* y *Educador* accede a *Dashboard, Participantes, Actividades y Digitalización*, manteniendo ocultos los módulos no asignados).
      - Las facultades operativas (*Exportar, Validar SGC, Supervisar*) se fusionan automáticamente sumando las atribuciones de todos los cargos seleccionados.
      - Si el usuario posee **exclusivamente** el cargo de *Responsable Educativo* (Nacional o Regional), sus módulos permanecen estrictamente circunscritos a *Participantes* y *Actividades*.
    - Responsable / Superior inmediato asignado.
    - **Contrato Institucional (PDF):** Carga opcional del documento de contrato laboral firmado en formato `.pdf` (validación de extensión si se adjunta, límite de 10 MB e indicador en vivo de verificación).
    - *Navegación:* Botones `← Anterior: Datos Personales` y `Siguiente: Acceso al Sistema →`.
  - **Paso 3: Acceso al Sistema (Finalización y Alta):**
    - Nombre de usuario oficial sugerido automáticamente a partir de nombres o correo (editable, ej. `@rgomez`).
    - Fecha de creación institucional automática y de solo lectura.
    - Contraseña y confirmación con validador de coincidencia y longitud mínima.
    - *Navegación:* Botones `← Anterior: Datos Institucionales` y `Finalizar Registro y Crear Cuenta`. Al finalizar, se crea la cuenta, se le asignan los permisos correspondientes y se accede directamente al entorno de trabajo CIES.
- 🏷️ **Catálogo y Agrupación Jerárquica de Roles CIES (al seleccionar):**
  - **Administración:**
    1. `Administrador`
  - **Gerencia (título):**
    2. `Gerente Nacional de Proyectos`
    3. `Director ejecutivo CIES`
    4. `Gerencia`
  - **Responsable educativo (título):**
    5. `Responsable Nacional` (Módulos autorizados: *Actividades Educativas* y *Participantes*)
    6. `Responsable Regional` (Módulos autorizados: *Actividades Educativas* y *Participantes*)
  - **Equipo Educativo y Operativo:**
    7. `Facilitador`
    8. `Responsable del Programa`
    9. `Investigadora Educadora`
    10. `Asistente Educador`
    11. `Orientador` (Módulo autorizado exclusivo: *Orientación SSSR & Violencia*)
- 🔑 **Cuentas Preconfiguradas para Pruebas Rápidas (11 Roles Oficiales, Clave `cies2026` o `admin`):**
  1. `admin@cies.org.bo` (`@admin`) — **Administrador** (La Paz)
  2. `director@cies.org.bo` (`@rvargas`) — **Director ejecutivo CIES** (Nacional)
  3. `proyectos@cies.org.bo` (`@vquiroga`) — **Gerente Nacional de Proyectos** (Nacional)
  4. `gerencia@cies.org.bo` (`@msuarez`) — **Gerencia** (Nacional)
  5. `blinares@cies.org.bo` (`@blinares`) — **Responsable Nacional** (Nacional)
  6. `pguzman@cies.org.bo` (`@pguzman`) — **Responsable Regional y Educador** (Cochabamba) — Perfil Multi-Cargo de Demostración
  7. `apaz@cies.org.bo` (`@apaz`) — **Facilitador** (La Paz)
  8. `fsoto@cies.org.bo` (`@fsoto`) — **Responsable del Programa** (La Paz)
  9. `grojas@cies.org.bo` (`@grojas`) — **Investigadora Educadora** (Santa Cruz)
  10. `cmendez@cies.org.bo` (`@cmendez`) — **Asistente Educador** (Tarija)
  11. `mmorales@cies.org.bo` (`@mmorales`) — **Orientador** (El Alto)

- 🏷️ **Diferenciación y Vista de Pantalla por Rol ("Esta es la pantalla de: [Rol Asignado]"):**
  - **Indicador Superior Fijo (Header):** Bloque permanente en la cabecera que enmarca `"Esta es la pantalla de: [Rol asignado]"` con el color y distintivo oficial de cada rol.
  - **Banner Superior Institucional de Contexto:** Presenta el nombre del funcionario, regional, descripción del alcance de su rol, su enfoque metodológico y el total de módulos autorizados.
  - **Ocultación Total en el Menú Lateral:** Los módulos no asignados al rol quedan completamente ocultos del menú lateral junto a sus encabezados de sección vacíos, de modo que el funcionario únicamente visualiza las herramientas a las que tiene acceso legítimo (como si los demás módulos no existiesen).
  - **Modal de Cambio Rápido ("Cambiar Rol"):** Permite al evaluador saltar entre cualquiera de los 11 roles en 1 clic para contrastar inmediatamente las diferencias visuales y operativas.

### 12. Vista Exclusiva de Actividades para Responsable Educativo Regional
Al ingresar con el rol **Responsable Regional** (`Lic. Pedro Guzmán`, Regional Cochabamba):
- 🏢 **Despacho de Supervisión Educativa (`actividades-regional-banner`):**
  - Banner institucional superior en tonos verde azulado (*teal*) exclusivo para el Responsable Regional.
  - Título y descripción oficial con código normativo **`SGC-Misional-E-1-ff5`** (Supervisión Técnica In Situ).
- 📊 **4 Tarjetas KPI en Vivo de la Jurisdicción Regional:**
  1. *Planillas en Jurisdicción:* Total de talleres y eventos reportados en Cochabamba (`CBBA`).
  2. *Asistentes Alcanzados:* Beneficiarios directos en la sede regional.
  3. *Supervisiones In Situ:* Conteo de planillas de supervisión técnica realizadas a facilitadores.
  4. *Ganancia Pedagógica Media ($\Delta$):* Promedio de impacto Pre-Test vs Post-Test en los talleres de la regional.
- 🎛️ **Conmutador de Jurisdicción y Acciones Rápidas:**
  - Botón selector: **`📍 Solo mi Regional (CBBA)`** (filtra por defecto solo actividades de su departamento) vs **`🌐 Todo el País`** (amplía la vista a nivel nacional).
  - Botón: **`+ Nueva Supervisión In Situ`** para emitir directamente la planilla `SGC-Misional-E-1-ff5` con los datos de supervisión del Responsable prellenados.
- 🏷️ **Insignias de Sede en la Tabla:** Columna de Sede/Regional con distintivo resaltado para identificar a primera vista las actividades bajo cobertura regional directa.

### 13. Procesos Educativos Integrales (Documento General y Regla de 33 Horas Progresiva)
- 🎓 **Creación Inicial del Proceso con su Documento General:**
  - Al registrar una actividad y marcar `¿Es un Proceso Educativo Integral?`, el sistema permite dar de alta la actividad formalmente asociada a su **Documento General** (código, título y archivo PDF/respaldo) con 0 horas iniciales, sin forzar la carga inmediata de todos los talleres.
- 🌱 **Incorporación Progresiva de Talleres Paso a Paso:**
  - Los talleres no se exigen de golpe; se van registrando poco a poco conforme se desarrollan en terreno en las unidades educativas hasta cumplir la meta institucional de **33 horas pedagógicas**.
  - **Botón `+ Registrar Taller`:** Disponible tanto en cada fila de la tabla de Actividades como dentro del modal de detalle curricular.
- ➕ **Modal Dedicado (`modal-agregar-taller-proceso`):**
  - Permite ingresar cada sesión con: Nombre del taller/módulo, Fecha de ejecución, Carga horaria (horas), Facilitador/a responsable y Resumen/Observaciones.
  - **Proyección de Horas en Tiempo Real:** Muestra el acumulado actual antes del taller y la proyección de carga resultante al guardarlo (ej. $0 \rightarrow 8 \rightarrow 16 \rightarrow 24 \rightarrow 33 \text{ hrs}$).
- ⏱️ **Monitor de Horas y Meta de 33 Horas:**
  - Barra de progreso dinámica porcentual:
    $$\text{Progreso} = \left(\frac{\sum \text{Horas Talleres}}{33}\right) \times 100\%$$
  - *En desarrollo ($< 33\text{ hrs}$):* Insignia ámbar indicando las horas acumuladas y las horas faltantes (ej. `⏳ 8 / 33 hrs`).
  - *Meta cumplida ($= 33\text{ hrs}$):* Insignia verde esmeralda con check (`✓ 33 hrs Cumplidas`).
- 📂 **Documentos de Respaldo Específicos por Taller:**
  - Cada taller individual admite adjuntar sus propios respaldos documentales independientes:
    1. **Documento de Planificación del Taller:** Plan de sesión pedagógica, guía metodológica o carta descriptiva específica de la temática (.pdf, .docx, .xlsx).
    2. **Lista de Participantes (Documento):** Planilla de firmas escaneada, lista oficial de asistencia en PDF o nómina de participantes en Excel (.pdf, .xlsx, .jpg, .png).
  - Ambos documentos se pueden adjuntar tanto al registrar el taller como editándolo posteriormente mediante el botón `✏️ Editar Taller y Documentos`.
  - En la vista curricular (`modal-detalle-proceso`) se visualizan como insignias técnicas interactivas (`📄 Planificación` y `👥 Participantes`) con el nombre del archivo de respaldo.
- 🔄 **Navegación Fluida entre "Editar Actividad" y "Ver Módulos y Doc.":**
  - Al pulsar **"Editar"** en cualquier actividad registrada como Proceso Educativo, se habilitan botones destacados de acceso directo rotulados **"🎓 Editar Talleres (Ver Módulos y Doc.)"** en tres ubicaciones clave de la ventana de edición:
    1. **Cabecera superior:** Junto al botón de cerrar.
    2. **Controles de la sección curricular:** Junto al botón `+ Agregar Taller al Proceso`.
    3. **Pie del formulario:** En la barra inferior junto a los botones de guardado.
  - Al hacer clic en este botón, el sistema transfiere al usuario inmediatamente a la vista curricular y documental **"Ver Módulos y Doc."** (`modal-detalle-proceso`), permitiéndole desglosar o editar las 33 horas pedagógicas, sustituir las guías de planificación o renovar las listas de participantes sin pasos intermedios.
- 🔍 **Modal de Detalle Curricular (`modal-detalle-proceso`):**
  - Muestra la tarjeta del Documento General de respaldo, la barra de progreso formativo, el desglose de todos los talleres ejecutados con sus facilitadores, los documentos de planificación y listas de asistencia adjuntas, y opciones para editar o eliminar sesiones.

### 14. Sistema Ampliado de Pre-Test y Post-Test (Enlaces Oficiales, Página Pública y Acta de Calificaciones)
Normativa institucional **`SGC-Misional-E-3`** (Evaluación de Impacto Pedagógico en Actividades y Talleres):
- 🌐 **Página Pública Independiente para Estudiantes (`DEMO/evaluacion.html`):**
  - Página web totalmente separada del sistema administrativo, diseñada para ser abierta directamente por los estudiantes desde sus teléfonos móviles o computadoras (`evaluacion.html?tipo=pre&actId=...` y `evaluacion.html?tipo=post&actId=...`).
  - **Experiencia de Uso Exclusivo y Seguro:**
    - CERO barras laterales, CERO menús administrativos, CERO accesos a la base de datos o listas de usuarios.
    - Los estudiantes solo ven el encabezado del taller y el cuestionario correspondiente a su prueba.
- 🔗 **Dos Enlaces Digitales Oficiales e Independientes:**
  - Dentro de la vista de evaluación de cada taller (`modal-evaluacion-test`), se disponen dos tarjetas interactivas de enlace digital:
    1. **Enlace Pre-Test (Línea Base Inicial):** Genera la URL pública directa a `evaluacion.html?tipo=pre&actId=...`.
    2. **Enlace Post-Test (Evaluación de Salida):** Genera la URL pública directa a `evaluacion.html?tipo=post&actId=...`.
  - Cada tarjeta cuenta con caja de texto de enlace de solo lectura, botón de un clic para **`📋 Copiar Enlace`** al portapapeles, botón **`Abrir Página Pública ↗`** (que abre la página en una nueva pestaña) y acceso directo para ver la lista de calificaciones acumuladas.
- ✍️ **Formulario del Estudiante (Sin Opciones Extrañas):**
  - Se adapta dinámicamente con estética y códigos cromáticos institucionales (Azul para Pre-Test y Esmeralda para Post-Test).
  - Captura Nombres, Apellidos y Cédula de Identidad (CI).
  - Cuestionario de 5 preguntas temáticas oficiales CIES (20 pts cada una = 100 pts) con opción de selección clara sobre salud sexual y reproductiva (doble protección, Ley 348, PAE en 72 hrs, Ley 3729 para VIH y enfoque EIS).
  - Botón: **`✓ Enviar mi Evaluación (Finalizar Test)`**.
- 📊 **Resultados Inmediatos: Nota Personal y Acta de Calificaciones:**
  - Al completar el test, la página pública guarda la calificación de forma sincronizada en la base compartida (`CIES_DEMO_DB_V10`) y muestra de inmediato:
    - **Tarjeta de Calificación del Estudiante:** Puntaje obtenido sobre 100 con insignia (*✓ Aprobado / Competente $\ge 70\text{ pts}$* o *⏳ En Refuerzo Pedagógico $< 70\text{ pts}$*).
    - **Lista Oficial de Participantes y sus Notas:** Tabla completa con posición numerada, nombre del participante (con distintivo *Tú* para el estudiante actual), CI, nota obtenida y estado de aprobación.
    - **Métricas del Taller:** Total evaluados, promedio general de calificaciones, aprobados y en refuerzo.

---

### 15. Sistema de Prerregistro Previo al Inicio (`SGC-Apoyo-ABS-1-pr1`)

Para proyectar con precisión la cantidad de participantes antes del inicio de cualquier actividad formativa, taller o proceso educativo:

- 📋 **Formulario Público de Prerregistro ([`preregistro.html`](file:///c:/Users/USUARIO/Documents/CIES/DEMO/preregistro.html)):**
  - **Página de uso público y exclusivo:** Diseñada para que los estudiantes o beneficiarios se inscriban antes del evento desde cualquier celular, tablet o computadora sin elementos administrativos ni menús del sistema interno.
  - **Acceso por enlace directo:** `preregistro.html?actId=<id_actividad>`, que carga automáticamente el título, fecha, sede y facilitador responsable del evento.
  - **Campos de recolección de datos:**
    1. Nombre Completo.
    2. Cédula de Identidad (CI).
    3. Celular / WhatsApp (con validación de 8 dígitos para Bolivia).
    4. Edad y Género.
    5. Rol / Ocupación (Estudiante de Secundaria, Universitario/a, Docente, Líder Juvenil Red Tú Decides, etc.).
    6. Unidad Educativa o Institución de procedencia.
    7. Estado de asistencia (Confirmada / Por confirmar).
    8. Comentarios o requerimientos específicos (accesibilidad, refrigerio).
  - **Ticket Digital de Preinscripción:** Al confirmar el registro, se entrega de inmediato un comprobante digital institucional con el número de cupo (#X), datos del evento y estado de confirmación.
  - **Conteo en Vivo:** Los participantes visualizan cuántas personas se han preinscrito hasta el momento.

- 🎛️ **Gestión y Control de Prerregistro en el Sistema Principal ([`index.html`](file:///c:/Users/USUARIO/Documents/CIES/DEMO/index.html)):**
  - **Indicador Visual en Tabla de Actividades:** Cada fila de la tabla muestra tanto el conteo oficial de asistencia como una etiqueta interactiva en vivo: `📋 X preinscritos`.
  - **Botón `📋 Prerregistro`:** Abre la ventana modal de gestión técnica (`modal-preregistro-actividad`).
  - **Tablero de Control de Aforo Previo:**
    - Cuatro tarjetas de métricas: *Total Preinscritos*, *Confirmados*, *Por Confirmar* y *Cupo Actual en Planilla*.
    - Caja de enlace de difusión con botones de **`📋 Copiar Enlace`** y **`Abrir Página Pública ↗`**.
  - **Nómina y Contacto Directo:**
    - Tabla detallada con nombre, CI, teléfono, rol e institución.
    - Botón de enlace directo a **WhatsApp** (`wa.me/591...`) para contacto directo y reconfirmación previa de asistencia.
    - Botón interactivo para alternar el estado (*✓ Confirmado* / *⏳ Por Confirmar*).
    - Pestaña para **Preinscribir Participante Manualmente** para registrar inscritos que avisaron por llamada, mensaje o lista física.
  - **🚀 Traspaso Inteligente a Planilla Oficial:**
    - Botón de un solo clic que transfiere a los participantes con asistencia confirmada al conteo oficial de la actividad (`participantesCount`) y registra automáticamente sus perfiles en el padrón general de participantes (`db.participantes`) sin duplicados.

---

### 16. Flujo de Creación de Actividades: Selección Presupuestaria y Desglose Dinámico de Gastos

Al registrar una actividad o planilla en el sistema ([`index.html`](file:///c:/Users/USUARIO/Documents/CIES/DEMO/index.html)):

- 💰 **Paso 1: Decisión Inicial de Ejecución Presupuestaria:**
  - Al abrir el modal de registro (`modal-actividad`), el primer campo visible es una tarjeta interactiva destacada:
    - 🟢 **Con Ejecución Presupuestaria:** La actividad cuenta con asignación de recursos, viáticos, refrigerios/alimentación o fondos de proyecto institucional.
    - ⚪ **Sin Ejecución Presupuestaria:** Actividad sin costo financiero directo (alianzas comunitarias, apoyo interinstitucional, réplicas voluntarias en aula).
- 📊 **Desglose Dinámico de Tipos de Gastos (Cuando tiene Presupuesto):**
  - Al seleccionar **"Con Ejecución Presupuestaria"**, se despliega automáticamente la sección interactiva `Desglose de Tipos de Gastos`:
    - **Nombre / Concepto del Gasto:** Campo de texto libre para detallar el concepto (ej: *"Refrigerios para 30 participantes"*, *"Alquiler de salón municipal"*, *"Pasajes intermunicipales"*).
    - **Tipo de Gasto:** Selector de categorías oficiales:
      - *Alimentación y Refrigerios*
      - *Transporte y Pasajes*
      - *Viáticos y Estipendios*
      - *Material de Escritorio y Didáctico*
      - *Alquiler de Salón / Espacio*
      - *Servicios Técnicos / Honorarios*
      - *Imprevistos / Otros Gastos*
    - **Cuánto es (Bs.):** Entrada numérica con prefijo monetario en Bolivianos.
    - **Acción:** Botón de eliminación directa de la fila con confirmación en tiempo real.
    - **Botón `+ Añadir Tipo de Gasto`:** Permite agregar tantas líneas de gasto como requiera el evento.
  - **Cálculo de Total en Tiempo Real:** Al pie de la tabla se calcula de manera inmediata y reactiva la suma de todos los gastos: **Total Gastos: Bs. [TOTAL]**.
  - Si se conmuta a *"Sin Ejecución Presupuestaria"*, la sección se oculta automáticamente y el total se resetea a Bs. 0.00.
- 🏷️ **Visualización en Tabla de Actividades:**
  - En la tabla de actividades se despliega junto al título una insignia con el total presupuestado: `🟢 Con Presupuesto (Bs. 1.850,00)` o `⚪ Sin Presupuesto`.

---

### 17. Formulario de Prerregistro / Preinscripción Opcional

- 📋 **Carácter Opcional del Prerregistro:**
  - El formulario de prerregistro es una herramienta de apoyo **opcional** para planificar con anticipación la asistencia y aforo de participantes antes de iniciar la actividad.
  - **Sin bloqueos obligatorios:** Los facilitadores pueden registrar talleres (`+ Registrar Taller`) o aplicar evaluaciones (`+ Evaluar / Pre-Test`) de forma directa, sin obligatoriedad de contar con registros previos si el grupo ya está conformado en terreno.
- 🌐 **Página Pública de Preinscripción:**
  - Sigue disponible el enlace público ([`preregistro.html`](file:///c:/Users/USUARIO/Documents/CIES/DEMO/preregistro.html)) para difusión en redes sociales o WhatsApp, permitiendo auto-inscripción de interesados.
  - La tabla principal muestra la etiqueta `📋 0 preinscritos (Opcional)` o `✓ X preinscritos (Opcional)`, permitiendo abrir la gestión y traspaso a la nómina oficial en cualquier momento.

---

### 18. Espacio de Trabajo de Actividad por Pasos (Activity Workspace: Flujo Oficial de 4 Pasos)

Para transformar la experiencia de gestión y guiar el flujo formativo integral de forma secuencial, estructurada y visual:

- 🗂️ **Adaptación Dinámica de la Barra Lateral Izquierda (`sidebar-nav-actividad`):**
  - Al pulsar sobre cualquier actividad de la tabla principal o hacer clic en el botón **`🚀 Abrir Flujo`**, la barra lateral izquierda conmuta automáticamente del menú general a un **Menú Contextual de la Actividad Seleccionada**:
    - **Botón `← Menú General`:** Permite regresar de inmediato a la lista general de planillas.
    - **Mini-tarjeta de Actividad:** Muestra el código asignado (`ACT-XX`), estado presupuestario (`🟢 Con Presupuesto` / `⚪ Sin Presupuesto`), título, sede y regional.
    - **Indicador de Paso:** Muestra el progreso actual (`Paso X de 4`).
    - **4 Pestañas Interactivas con Badges en Tiempo Real:**
      1. **`1. Creación & Datos`:** Parámetros base de la actividad y modalidad formativa.
      2. **`2. Pre-registro`:** Control de aforo previo y total de preinscritos (`X pre`).
      3. **`3. Talleres & Planificador`:** Carga horaria acumulativa hacia las 33 horas (`X/33h`) y consolidación presupuestaria.
      4. **`4. Evaluaciones`:** Pruebas diagnósticas Pre-Test y evaluación final Post-Test (`X eval`).

- 🧭 **Panel Principal de Espacio de Trabajo (`#panel-actividad-workspace`):**
  - **Barra Superior de Contexto:** Migas de pan (*breadcrumbs*), insignias institucionales de regional, presupuesto total consolidado y horas cumplidas, con título destacado, sede y fecha.
  - **Stepper Horizontal:** 4 botones tipo *pills* sincronizados en dos vías con la barra lateral izquierda, con numeración, tildes de avance completado (`✓`) y una **Barra de Progreso del Flujo** (25%, 50%, 75%, 100%).
  - **Vistas Especializadas para Cada Paso:**
    - **Paso 1 (Creación & Datos Base):** Configuración de parámetros oficiales SGC (título, categoría de planilla, subproceso, área urbana/rural, regional, unidad educativa, aforo previsto, facilitador responsable y servicios de refrigerio/alimentación).
    - **Paso 2 (Pre-registro Opcional):** Caja de enlace público para difusión masiva (`preregistro.html`), 4 tarjetas de aforo previo, nómina con enlace directo a WhatsApp, botón de alternancia de confirmación, registro manual rápido y botón de traspaso directo a la nómina oficial.
    - **Paso 3 (Talleres & Planificador Oficial - 33 Horas y Presupuesto por Taller):** 
      - Gestión integral del Proceso Educativo con su Documento General de respaldo.
      - **Medidor de 33 Horas:** Barra de avance en tiempo real ($X / 33\text{ hrs}$) con insignia de cumplimiento.
      - **Presupuesto Consolidado Reactivo:** Muestra el total de recursos en Bs., computado automáticamente a partir de la suma de presupuestos individuales de cada taller.
      - **Tabla de Talleres con Acceso al Planificador Oficial:** Botón interactivo para ver y editar el planificador institucional CIES de cada sesión.
    - **Paso 4 (Evaluaciones Pre/Post con Bloqueo de 33 Horas):** 
      - Enlace digital público para **Pre-Test** (abierto desde el inicio).
      - **Post-Test estrictamente bloqueado:** Si el proceso acumula menos de 33 horas, el Post-Test se bloquea mostrando un aviso normativo en ámbar y controles desactivados. Al alcanzar las 33 horas en el Paso 3, se desbloquea automáticamente.
      - Cuatro métricas de impacto (Promedio Pre, Post, Ganancia Delta y Satisfacción) y tabla consolidada de calificaciones.

---

### 19. Modelo Oficial CIES: Creación Automática de Proceso + Taller 1 y Planificador Líderes 5_4_24

Basado en el documento institucional oficial [`planificador Lideres 5_4_24.docx`](file:///C:/Users/USUARIO/Documents/CIES/Documentacion/planificador%20Lideres%205_4_24.docx):

- ⚡ **Creación Automática de Proceso y Taller 1:**
  - Al pulsar el botón **"Registrar Nueva Planilla"** en la barra superior y guardar los datos iniciales, el sistema crea en un solo paso:
    1. El **Proceso Educativo Integral** con meta reglamentaria de 33 horas pedagógicas.
    2. El primer taller (**Taller 1: Capacitación con Líderes Juveniles - Toma de Decisiones y Plan de Vida**) con 3 horas iniciales, preconfigurado con el plan curricular y metodológico oficial.
  - Al crearse, redirige de inmediato al facilitador al **Paso 3 (Talleres & Planificador)** para iniciar su trabajo en terreno.

- 💰 **Presupuesto Estrictamente por Taller (Sin Presupuesto General):**
  - Siguiendo la normativa financiera institucional, **no existe un presupuesto general** a nivel de proceso.
  - Cada taller gestiona su propia solicitud de gasto detallada en las **6 partidas presupuestarias normativas CIES**:
    1. *Salón / Espacio de Capacitación*
    2. *Alimentación y Refrigerios* (Ej. Refrigerios participantes y facilitador = Bs. 325.00)
    3. *Pasajes y Transporte* (Ej. Pasajes locales de movilización = Bs. 386.90)
    4. *Viáticos y Estipendios*
    5. *Material Didáctico e Insumos*
    6. *Otros (Fotocopias, Papelería y Varios)*
  - El presupuesto total del proceso educativo es el **resultado reactivo y automático de la suma de los presupuestos de sus talleres individuales** ($\sum \text{Presupuesto Talleres} = \text{Presupuesto Total Proceso}$).

- 📋 **Modal del Planificador Oficial CIES Líderes 5_4_24 (`modal-planificador-oficial`):**
  - Réplica digital exacta del formato Word oficial de CIES:
    - **Memorándum Institucional de Solicitud de Gasto:** Gerente Regional CIES La Paz (A), Jefa Administrativa (VÍA 1), Coordinadora Componente Educativo (VÍA 2), Responsable Área Educativa (DE), Referencia y Código Oficial (`CIES EDU. EA / RFS 15/2024`), y Fecha oficial.
    - **Identificación de la Actividad:** Nombre del taller, Carga horaria (hrs), Lugar / Unidad Educativa, Modalidad y N° de Participantes previstos.
    - **Objetivo General y Específicos:** Competencias formativas en habilidades para la vida y salud sexual y reproductiva.
    - **Metodología, Grupo Meta y Resultados Esperados:** Enfoque activo-participativo y metas de impacto.
    - **Cronograma y Matriz Didáctica en 6 Columnas Dinámicas:** Filas dinámicas con *Hora, Tema, Contenido, Actividad o Técnica, Recursos y Materiales, Facilitador/a Responsable*. Incluye botones para añadir o eliminar filas del cronograma en tiempo real.
    - **Presupuesto por Taller:** Tabla de las 6 partidas oficiales con cálculo automático de totales en tiempo real al tipear.
    - **Bloque de 4 Firmas de Validación SGC:** Solicitante (Resp. Área Educativa), V°B° Técnico (Coord. Educativo), V°B° Administrativo (Jefatura Adm.) y Aprobación Final (Gerencia Regional CIES).
    - **Botón de Impresión y Exportación:** Función de impresión profesional formateada para descargo administrativo y auditoría.

- 🔒 **Regla Normativa de Bloqueo del Post-Test (33 Horas):**
  - Para asegurar la rigurosidad pedagógica, el Post-Test está **estrictamente bloqueado** hasta que el acumulado de talleres en el Paso 3 alcance las **33 horas pedagógicas**.
  - Si un proceso tiene menos de 33 horas (ej. 3 hrs tras crearse), la caja del Post-Test en el Paso 4 muestra una insignia de restricción `🔒 2. Post-Test (Bloqueado hasta 33h)`, un aviso explicativo en ámbar y botones deshabilitados.
  - Al registrar los talleres subsecuentes hasta completar las 33 horas, el Post-Test se desbloquea de inmediato (`✓ 2. Post-Test de Cierre (Habilitado)`), activando los enlaces públicos de salida para los estudiantes.

---

### 20. Arquitectura de Talleres en 3 Fases (Planificación, Ejecución, Documentación) y Navegación por Acordeón Lateral

Siguiendo la directriz metodológica y operativa de CIES, cada taller dentro de un Proceso Educativo Integral (33 horas) se gestiona de forma autónoma a través de **3 fases secuenciales**, estructuradas en el menú lateral izquierdo mediante un **acordeón dinámico por taller**:

- 📂 **Menú Lateral con Acordeón por Taller (`#sidebar-talleres-accordion`):**
  - Cada taller registrado en el proceso cuenta con su propia tarjeta desplegable/plegable (*accordion header*).
  - Muestra el número de taller, título, carga horaria (ej. `3h`) y presupuesto asignado.
  - Al desplegar un taller, se subdivide en los 3 grupos de trabajo:
    1. **`📋 Fase 1: Planificación`**
    2. **`⚡ Fase 2: Ejecución`**
    3. **`📁 Fase 3: Documentación`**
  - Además, el menú lateral incluye dos secciones a nivel de proceso:
    - **`🌐 Visión Proceso (33h)`**: Resumen acumulativo de horas, presupuesto total, lista de talleres y gestión del Documento General.
    - **`🎓 Cierre & Post-Test (33h)`**: Evaluación final de salida y certificación, bloqueada estrictamente hasta alcanzar las 33 horas.

- 📝 **Fase 1: Planificación (Planificador Oficial CIES Líderes 5_4_24):**
  - Toda la planilla y formulación pedagógica oficial queda integrada en esta fase.
  - **Memorándum Institucional de Solicitud de Gasto:** Dirigido a Gerencia Regional CIES, Vía Jefatura Administrativa y Coordinación Educativa, con código de referencia oficial (`CIES EDU. EA / RFS 15/2024`).
  - **Identificación y Objetivos:** Objetivo general, objetivos específicos, metodología, grupo meta y resultados esperados.
  - **Matriz Didáctica y Cronograma en 6 Columnas Dinámicas:** Filas interactivas con *Hora, Tema, Contenido, Actividad o Técnica, Recursos y Materiales, Facilitador/a*.
  - **Presupuesto Autónomo por Taller (6 Partidas Oficiales):** Salón, Alimentación, Pasajes, Viáticos, Materiales y Otros. El total se recalcula en tiempo real al tipear.
  - **Firmas SGC e Impresión:** 4 bloques de firma institucional y botón de impresión profesional directa.

- ⚡ **Fase 2: Ejecución (Aforo, Asistencia en Aula y Logística de Alimentación):**
  - **Prerregistro y Difusión:** Enlace público (`preregistro.html`), código de difusión, métricas de inscritos (Total, Confirmados, Por Confirmar, Cupo).
  - **Nómina con Enlace a WhatsApp:** Contacto directo en un clic para reconfirmación y alternancia de asistencia confirmada.
  - **Traspaso Inteligente:** Migración de inscritos confirmados al conteo oficial del taller y padrón general.
  - **Servicios de Aula y Alimentación:** Control in situ de entrega de materiales didácticos y las 4 comidas reglamentarias (`RM: Refrigerio Mañana`, `AL: Almuerzo`, `RT: Refrigerio Tarde`, `CE: Cena`).
  - **Operatividad Focalizada:** Enfocada estrictamente en el desarrollo y control del aula, sin interferencias de evaluaciones ni resúmenes globales.

- 📁 **Fase 3: Documentación (Respaldos Físicos, Rendición Financiera y Validación SGC):**
  - **Planilla de Asistencia Escaneada (`SGC-Apoyo-ABS-3-pp3`):** Carga y visualización de archivo PDF firmado en aula por participantes y facilitador.
  - **Rendición de Cuentas y Descargos de Gasto:**
    - Comparador financiero en vivo: *Presupuesto Planificado* vs *Total Rendido en Descargos* vs *Diferencia/Saldo*.
    - Tabla dinámica de descargos con *Concepto, Partida vinculada, Monto en Bs., N° de Recibo/Factura y Acción*.
    - Botón para agregar y eliminar descargos con recálculo automático.
  - **Registro Fotográfico de Evidencias:** Carga de fotografías del taller en terreno.
  - **Dictamen de Calidad SGC:** Semáforo de estado (*Pendiente de Revisión, Validado por Orientador, Aprobado por Auditoría Admin, Observado con Correcciones*) con registro del auditor/a, fecha y observaciones técnicas.

- 🔗 **Navegación e Interconexión Completa:**
  - Stepper contextual superior que muestra el taller activo y permite saltar estrictamente entre las 3 fases del taller.
  - Botones inferiores de navegación guiada: `Ir a Fase 2: Ejecución →`, `Ir a Fase 3: Documentación →`, y `Finalizar Taller y Volver a Lista`.
  - Persistencia total e inmediata en `localStorage` sincronizada en tiempo real.

---

### 21. Acceso Directo de Nueva Planilla / Registro al Planificador Oficial (Nuevo Proceso o Proceso Existente)

Para agilizar el flujo de trabajo en terreno y alinear la plataforma con la práctica operativa:

- ⚡ **Acceso Directo Unificado ("Nueva Planilla / Planificador Oficial"):**
  - Al pulsar el botón principal **"Nueva Planilla / Planificador Oficial"** en el panel de Actividades (o al pulsar `+ Registrar Nuevo Taller` en cualquier parte del sistema), se abre directamente el modal institucional:
    **`modal-nuevo-planificador-oficial`** (Formato CIES *Líderes 5_4_24*).
  - Ya no se requiere pasar por formularios genéricos; el facilitador accede directamente al instrumento pedagógico y financiero.

- 🔀 **Selector de Destino del Taller (Nuevo Proceso vs. Proceso Existente):**
  - En la parte superior del formulario, el facilitador puede decidir en 1 clic:
    1. 🟢 **Crear en un NUEVO Proceso Educativo (33 Horas):**
       - Da de alta un nuevo proceso educativo con su meta reglamentaria de 33 horas.
       - Configura: Título del Proceso, Categoría de Planilla, Subproceso, Sede Regional y Unidad Educativa/Lugar.
       - Establece este taller como la **Sesión 1** del nuevo proceso.
    2. 🔵 **Añadir a un Proceso YA CREADO:**
       - Despliega una lista con todos los procesos educativos existentes en el sistema, mostrando su código (`ACT-XX`), horas acumuladas hacia las 33h, total de talleres y regional.
       - Al seleccionar el proceso existente, el sistema autocompleta la sede, regional y numera automáticamente el nuevo taller (ej. *Taller 2*, *Taller 3*...).

- 📋 **Formulación Integral del Taller en Formato Líderes 5_4_24:**
  - **Identificación:** Título del taller, fecha de ejecución, carga horaria (horas), modalidad y aforo de participantes.
  - **Memorándum de Solicitud de Gasto Oficial:** Destinatarios institucionales (Gerente Regional CIES, Jefatura Administrativa, Coordinación Educativa), Solicitante, Objeto y Código de Referencia normativo adaptado a la regional (`CIES EDU. [REGIONAL] / RFS 15/2024`).
  - **Objetivos Didácticos:** Objetivo general, objetivos específicos, metodología y resultados esperados prellenados con el modelo oficial.
  - **Matriz Didáctica y Cronograma en 6 Columnas:** Tabla dinámica de sesión formativa con filas editables (*Hora, Tema, Contenido, Actividad/Técnica, Recursos, Facilitador/a*) y botón para añadir/eliminar filas.
  - **Presupuesto Autónomo en las 6 Partidas CIES:** Salón, Alimentación, Pasajes, Viáticos, Materiales y Otros, con cálculo reactivo de total en tiempo real.

- 🚀 **Redirección Inmediata a la Fase 1:**
  - Al presionar **`Crear Planificador Oficial y Abrir Taller (3 Fases) →`**:
    - El sistema guarda los datos en `localStorage`.
    - Transfiere inmediatamente al facilitador al **Espacio de Trabajo (Workspace)** del proceso (nuevo o existente).
    - Despliega el acordeón del taller creado y lo posiciona directamente en su **Fase 1: Planificación**, listo para su posterior **Fase 2: Ejecución** y **Fase 3: Documentación**.

---

### 22. Aislamiento Estricto de Fases de Taller vs. Nivel Proceso (Visión 33h y Pre/Post-Test)

Para garantizar total claridad operativa al facilitador y evitar sobrecarga cognitiva o confusión de alcances entre un taller individual y el proceso completo:

- 🎯 **Aislamiento Total al Ver las Fases de un Taller:**
  - Al ingresar a cualquiera de las 3 fases de un taller (`1. Planificación`, `2. Ejecución`, `3. Documentación`), la interfaz presenta **única y exclusivamente la información propia de ese taller**.
  - **No se visualiza la "Visión del Proceso (33h)"** en las fases del taller ni en su barra superior.
  - **No se visualizan las evaluaciones "Pre-Test" ni "Post-Test"** dentro de las fases del taller.
  - La barra superior contextual (`#ws-context-taller-header`) contiene un stepper limpio de **exactamente 3 pastillas (`grid-cols-1 sm:grid-cols-3`)**:
    - `1. Planificación` (Formato Líderes 5_4_24, cronograma y presupuesto).
    - `2. Ejecución` (Aforo, asistencia, materiales y 4 comidas).
    - `3. Documentación` (Planilla escaneada, descargos y dictamen SGC).

- 🌐 **Nivel Proceso: Resguardado en el Menú Lateral:**
  - Las herramientas a nivel global del proceso se consultan de manera dedicada desde el menú lateral izquierdo:
    - **`🌐 Visión Proceso (33h)`**: Medidor de avance de horas hacia las 33h reglamentarias, sumatoria presupuestaria acumulada ($\sum$ talleres), repositorio de Documento General del proceso y lista global de talleres. Al ingresar aquí, la barra contextual de taller se oculta automáticamente.
    - **`🎓 Cierre & Post-Test (33h)`**: Módulo exclusivo de evaluación pedagógica que consolida el **Pre-Test de Diagnóstico Inicial**, el **Post-Test Final de Certificación** (bloqueado hasta completar las 33h), la métrica de ganancia de conocimiento ($\Delta$) y la nómina de notas consolidada.

---

### 23. Exportación Oficial a PDF y WORD (.doc) para cada Planilla y Taller

En cumplimiento del requerimiento para respaldo físico, firmas presenciales y auditorías de calidad del Sistema de Gestión de la Calidad (SGC) de CIES, se implementó el motor de exportación dual a formatos **PDF** y **WORD (`.doc`)**:

- 📄 **Exportación a PDF (Vista Previa de Impresión y Guardado):**
  - Genera una vista de impresión oficial con márgenes, encabezados de CIES Salud Sexual y Reproductiva, tablas normativas, firmas de responsabilidad y estilos tipográficos adaptados a papel membretado o estándar.
  - Incluye barra superior de control con botón directo para abrir el diálogo de impresión del navegador (`window.print()`), permitiendo seleccionar **"Guardar como PDF"** o enviar directamente a la impresora institucional.
  - Oculta automáticamente elementos de navegación o botones interactivos gracias a reglas `@media print`.

- 📝 **Exportación a WORD (`.doc` Nativo):**
  - Genera un archivo `.doc` completo utilizando formato HTML Word XML con encabezado Office (`urn:schemas-microsoft-com:office:word`), definición de página tamaño Carta (`size: letter; margin: 1.8cm`) y codificación UTF-8 con Byte Order Mark (`\ufeff`) para garantizar la correcta visualización de caracteres en español (acentos, tildes, eñes) en cualquier versión de Microsoft Word, LibreOffice Writer o Google Docs.
  - No requiere librerías externas pesadas ni servidores backend: la descarga se realiza de forma instantánea en el navegador del usuario mediante `Blob` nativo.

- 📍 **Puntos de Acceso para Exportar Cada Planilla:**
  1. **En la Tabla General de Actividades y Planillas (`#panel-actividades`):**
     - Cada fila dispone de botones directos **`📄 PDF`** y **`📝 Word`** en la columna de Acciones para exportar inmediatamente la planilla o proceso correspondiente sin necesidad de abrir el formulario.
  2. **En la Fase 1: Planificación del Taller (Espacio de Trabajo):**
     - Botones **`📄 Exportar a PDF`** y **`📝 Exportar a WORD`** ubicados tanto en la cabecera superior de la fase como en el panel de acciones al pie de la página.
     - Exporta el modelo oficial *Planificador Oficial Líderes 5_4_24* con memorándum, matriz cronológica didáctica de 6 columnas, presupuesto desagregado en 6 partidas y los 4 casilleros oficiales de firmas CIES.
  3. **En el Modal de Planificador Oficial (`#modal-planificador-oficial`):**
     - Botones de exportación rápida en cabecera y pie para descargar la versión editada en PDF o Word.
  4. **En el Modal de Nueva Planilla / Planificador Oficial (`#modal-nuevo-planificador-oficial`):**
     - Botones al pie del modal que permiten exportar la planificación antes o después de guardarla.
  5. **En el Modal de Registro de Actividad / Planilla General (`#modal-actividad`):**
     - Botones de exportación que generan la **Planilla de Asistencia Diaria y Control de Alimentación (`SGC-Apoyo-ABS-3-pp3`)** con los participantes inscritos, checkboxes de los 4 servicios alimentarios (RM, AL, RT, CE) y casilleros de firmas.

---

### 24. Control de Aprobación Institucional y Subida de Documento Aprobado (Requisito Previo a Fase 2: Ejecución)

En estricta concordancia con el Sistema de Gestión de la Calidad (SGC) de CIES y el flujo de autorización de gasto:

- ⏳ **Flujo de Espera de Aprobación:**
  - Una vez formulada la planificación y exportado el documento oficial (PDF/Word), el taller entra en estado **"⏳ En Espera de Aprobación"**.
  - **La Fase 2 (Ejecución en Terreno) permanece bloqueada** hasta que la Gerencia Regional CIES y la Jefatura Administrativa otorguen el visto bueno y se suba el documento formal firmado.

- 📤 **Espacio Exclusivo de Carga en Fase 1 (Sección 1.6):**
  - Se eliminó el bloque de rayas decorativas de firmas en pantalla; toda la validación se centraliza en la carga del documento real firmado:
    - **Carga de Archivo Digital / Escaneado:** Acepta PDF, Word o imágenes con firmas presenciales/digitales.
    - **Metadatos de Autorización:** Código/N° de aprobación formal, fecha de visto bueno e instancia aprobatoria (Gerencia Regional CIES, Jefatura Administrativa, etc.).
    - **Acceso Directo para Demostración:** Botón `⚡ Simular Planificador Firmado` para pruebas ágiles en terreno o auditorías demo.

- 🔒 **Mecanismos de Protección e Interacción:**
  - **Botón de Avance Condicionado:** El botón al pie de la Fase 1 muestra `⏳ En Espera de Aprobación (Fase 2 Bloqueada)` mientras no exista documento aprobado. Al hacer clic, abre un modal explicativo con opciones de espera o subida inmediata.
  - **Pastilla Superior Contextual:** La pastilla de Fase 2 (`#ws-pill-fase-ejecucion`) muestra un candado `🔒 En Espera • Requiere Doc Aprobado`. Al intentar ingresar sin documento, alerta al facilitador y lo redirige a la sección de carga.
  - **Navegación Lateral (Acordeón):** El submenú del taller exhibe la insignia `🔒 Espera` en la Fase 2 hasta que se adjunte el documento.
  - **Desbloqueo Automático:** Al adjuntar el archivo aprobado, el taller pasa a `✓ Aprobado & Autorizado`, la pastilla cambia a verde `✓ Habilitada` y el botón inferior se transforma en `Continuar a Fase 2 (Habilitada) →`.


---

### 25. Auto-Registro Móvil con Firma Táctil por Taller (`DEMO/asistencia.html`)

Para agilizar el registro en aula y garantizar la validez en auditorías del Sistema de Gestión de la Calidad (SGC):

- 📱 **Portal Web Móvil Independiente ([`asistencia.html`](file:///c:/Users/USUARIO/Documents/CIES/DEMO/asistencia.html)):**
  - Página ligera y responsiva para teléfonos móviles, sin barras de menú ni opciones administrativas.
  - Se accede mediante enlace directo o código QR parametrizado por sesión: `asistencia.html?actId=<id_actividad>&tallerId=<id_taller>`.

- ⚡ **Paso 1: Búsqueda Rápida por Cédula de Identidad (CI):**
  - El estudiante ingresa su número de carnet (ej. `4829102 LP`).
  - **Estudiante Recurrente:** Si ya participó en un taller previo o se preinscribió, el sistema lo reconoce al instante (*"¡Hola María Elena Quispe Mamani!"*), autocompleta su colegio, rol, edad y género, y muestra su avance en los módulos del proceso formativo.
  - **Estudiante Nuevo:** Si no figura en el padrón, se despliega un formulario ágil para ingresar sus datos personales y de contacto.

- ✍️ **Paso 2: Firma Táctil Digital (Canvas):**
  - Lienzo táctil interactivo en pantalla donde el participante estampa su firma con el dedo o lápiz digital.
  - Valida obligatoriedad de la firma y permite borrar/repetir en caso de error.

- 🎟️ **Paso 3: Ticket Digital y Horas Acumuladas:**
  - Al enviar, muestra un ticket digital con su hora exacta de check-in, visualización de su firma registrada y su avance hacia la meta reglamentaria (ej. `3 / 33 hrs completadas`).
  - Botón para registrar a otro compañero en el mismo teléfono.

- 🖥️ **Gestión en el Sistema Administrativo ([`index.html`](file:///c:/Users/USUARIO/Documents/CIES/DEMO/index.html)):**
  - **Fase 2 (Ejecución):** Sección destacada con enlace parametrizado, botón para copiar y modal de **Código QR gigante** para proyectar en pizarra o pantalla de aula (`modal-qr-asistencia-taller`).
  - **Nómina en Vivo del Taller:** Tabla interactiva con los estudiantes que marcaron asistencia móvil, su hora exacta de llegada y botón interactivo `✓ Firma Touch` para auditar el trazo registrado (`modal-vista-previa-firma`).
  - **Exportación Oficial (`SGC-Apoyo-ABS-3-pp3`):** Al descargar la planilla oficial en Word o PDF, los estudiantes que firmaron en el celular tienen su firma digital estampada automáticamente en la casilla correspondiente.


---

### 26. Digitalización de Planilla a Mano con Visor Dual Asistido (Opción C - `SGC-Apoyo-ABS-3-pp3`)

Diseñado especialmente para contextos educativos o comunitarios en Bolivia donde los estudiantes no cuentan con smartphones en aula, no disponen de conexión a internet o donde la normativa escolar exige firmas físicas con bolígrafo:

- 🔀 **Selector de Modalidad en Fase 2 (Ejecución en Terreno):**
  - Dos pestañas operativas en la cabecera de Fase 2:
    - **`[📱 Opción A: Auto-Registro Móvil con QR]`**: Enfoque 100% digital paperless con firma táctil en pantalla.
    - **`[📋 Opción C: Digitalización de Planilla a Mano]`**: Enfoque tradicional de planilla física con bolígrafo + digitalización y punteo asistido en pantalla dividida.

- 📄 **Descarga de Planilla Oficial en Blanco para Imprimir:**
  - Botón **`📄 Descargar Planilla para Imprimir`**: Genera la planilla oficial `SGC-Apoyo-ABS-3-pp3` en PDF lista para imprimir, con el membrete institucional de CIES, los datos del taller/facilitador, la nómina de inscritos previa y renglones en blanco para participantes imprevistos con casillas de firma a mano y 4 servicios de alimentación (RM, AL, RT, CE).

- 🔍 **Visor Dual de Digitalización en Pantalla Dividida (`#modal-visor-dual-digitalizacion`):**
  - **Columna Izquierda (Documento Físico Escaneado):**
    - Despliega la reproducción vectorial de alta fidelidad o la fotografía/escaneo de la planilla física `SGC-Apoyo-ABS-3-pp3`.
    - Presenta membrete CIES, sello húmedo institucional *"CIES COMPONENTE EDUCATIVO - COTEJADO"*, firmas manuscritas simuladas por estudiante, marcas de refrigerios y firmas de facilitador y coordinación.
    - Controles de zoom fluidos (`🔍 +`, `🔍 -`, `1:1`), scroll bidireccional y botón **`Subir otra foto`** para que el facilitador cargue su propia foto tomada con el celular.
  - **Columna Derecha (Lista de Cotejo Asistido y Rápido):**
    - Nómina ordenada de los participantes del taller con casillas de verificación individual y atajo **`Marcar Todos`**.
    - Buscador reactivo en tiempo real por nombre, carnet de identidad o procedencia.
    - Selectores independientes para los 4 servicios de alimentación recibidos: `[RM]` Refrigerio Mañana, `[AL]` Almuerzo, `[RT]` Refrigerio Tarde, `[CE]` Cena.
    - Contador dinámico en vivo: `X de 25 cotejados`.
    - Botón **`+ Agregar alumno no listado`** para incorporar en el acto a estudiantes que firmaron en la hoja física y no estaban preinscritos.

- 💾 **Custodia y Archivo Automático en el SGC:**
  - Al pulsar **`💾 Guardar Asistencias Cotejadas y Archivar en SGC`**:
    1. Registra las asistencias físicas verificadas en la base de datos del taller.
    2. Actualiza el aforo real de asistentes del taller en ejecución.
    3. Vincula y archiva el archivo (`Planilla_Firmas_Fisicas_Cotejada.pdf`) en el repositorio central de **Digitalización de Documentos SGC** con estado `✓ Validado Orientador`.
    4. Notifica al facilitador mediante toast de confirmación y actualiza en tiempo real la tabla de cotejo físico en Fase 2.


---

### 27. Carnets / Credenciales con QR Individual & Escáner del Educador (Opción B - `SGC-Apoyo-ABS-3-pp3`)

Esta modalidad resuelve el escenario donde los estudiantes **no cuentan con smartphone** en el aula, pero la institución desea un control **100% digital, ágil y sin digitación manual de nombres**:

- 🪪 **Generación de Credenciales / Carnets Oficiales en PDF para Imprimir:**
  - Botón **`🖨️ Descargar PDF de Carnets con QR para Imprimir`**: Genera un documento PDF institucional con credenciales recortables (formato credencial / badge CIES, 6 por hoja tamaño Carta).
  - Cada credencial incluye:
    - Logotipo y membrete: *"CIES SALUD SEXUAL Y REPRODUCTIVA • REGIONAL EL ALTO"*.
    - Título: *"PROCESO FORMATIVO • LÍDERES JUVENILES (33 HORAS)"*.
    - Nombre del estudiante en negrita, Carnet de Identidad (CI), Rol, Procedencia y Código único SGC (`CIES-LID-2024-001`).
    - **Código QR individual de alta resolución** generado localmente en el navegador (`CIES-PART:<id>:<ci>`).
    - Casillero de 5 sesiones (`T1: Plan Vida`, `T2: Anticoncep.`, `T3: Prevención`, `T4: Liderazgo`, `T5: Incidencia`) para sellar o marcar.
    - Leyenda normativa: *"Válido para Registro de Asistencia y Control de Alimentación • SGC-Apoyo-ABS-3-pp3"*.

- 📷 **Escáner Web en Tiempo Real para el Educador (`#modal-escaner-qr-educador`):**
  - Botón **`📷 Iniciar Escáner de Cámara QR (Educador)`**: Abre un visor de escaneo que activa la cámara web del celular, tablet o laptop del facilitador mediante *HTML5 WebRTC* (`navigator.mediaDevices.getUserMedia`).
  - **Doble Motor de Detección 100% Web:** Utiliza la API nativa del navegador `BarcodeDetector` (Chromium/Android) con respaldo offline mediante `jsQR.min.js`, sin necesidad de servidores ni conexión a internet.
  - **Efecto Láser Visual y Audio Chime:** Incorpora una línea láser animada en pantalla y emite un pitido de confirmación instantáneo (*Web Audio API* a 880Hz) al reconocer el código.
  - **Banner de Confirmación Inmediata:** Despliega el nombre, CI, hora exacta de check-in y asignación automática del refrigerio vespertino (`✓ RT`).
  - **Soporte de Lector Óptico USB / Teclado:** Incluye campo de entrada rápida compatible con pistolas lectoras de código de barras USB ($15 USD) o digitación manual del CI.

- ⚡ **Simulación Rápida para Demostración al Cliente:**
  - Fila interactiva de botones con los nombres de los estudiantes (*María Elena Quispe*, *Carlos Andrés Mendoza*, *Alex Flores*, etc.) y botón **`⚡ Simular 5 en Ráfaga`**, permitiendo demostrar el flujo de escaneo al cliente sin necesidad de disponer de una cámara física ni imprimir papel en la reunión.

- 📊 **Trazabilidad y Sincronización en el Reporte Oficial SGC:**
  - Los estudiantes escaneados se incorporan automáticamente a la nómina de asistencia del taller con su hora exacta.
  - Al exportar la Planilla Oficial de Asistencia (`SGC-Apoyo-ABS-3-pp3`) en PDF o Word, se estampa el sello institucional `✓ QR Credencial (Hora)` en la columna de firmas para auditorías ISO 9001:2015.


---

### 28. Tablero Oficial Completo (20 Indicadores SGC-Visional-MAM-6 o11) y Conmutador Regional (La Paz, Oruro, Potosí y Nacional)

Integración completa del instrumento normativo institucional de calidad vigente desde el 30/03/2026:

- 📊 **Matriz Oficial Completa de 20 Indicadores:**
  - Estructuración exacta de las 73 filas y subcategorías oficiales del instrumento:
    - **Indicadores Mensuales (Gris):** Orientaciones SSSR (Ind 1), Información en Sala de Espera (Ind 2), Pruebas de VIH con tira reactiva compartidas con área médica (Ind 3), Consultas Jóvenes en clínicas y unidades móviles (Ind 4), e Información Par a Par Red Tú Decides (Ind 7).
    - **Indicadores de Proceso Concluido (Celeste):** Jóvenes líderes capacitados (Ind 5), Maestros capacitados (Ind 8), Escolares que Inician EIS con Pre-test (Ind 10A) y Culminan con Post-test (Ind 10B), Sensibilización al Entorno Familiar (Ind 11), Formación en Incidencia Política (Ind 13), Ejecución de Incidencia (Ind 14), Planes elaborados (Ind 15), Políticas públicas aprobadas (Ind 16), Formación en Auditoría Social (Ind 17), Ejecución de Auditoría Social (Ind 18), Planes de Auditoría Social AIDA/EIS (Ind 19), y Planes de Fortalecimiento o Centros Certificados (Ind 20).
    - **Indicadores de Promedio Mensual Activo (Naranja Suave):**
      - *Jóvenes líderes activos (Ind 6):* Promedio sobre 11 meses (Febrero a Diciembre; excluye Enero por receso). Mínimo 4 actividades/mes.
      - *Docentes líderes activos en aula (Ind 9):* Promedio sobre 9 meses escolares bolivianos (Febrero a Mayo y Julio a Noviembre; excluye Enero, Junio y Diciembre).
      - *Unidades Educativas intervenidas (Ind 12):* Promedio sobre 9 meses escolares bolivianos.

- 🏙️ **Experiencia Diferenciada por Rol (Regional vs. Responsable Nacional):**
  - **Usuarios Regionales (La Paz, Oruro, Potosí, etc.):**
    - Al ingresar al sistema con su rol regional (ej. *Responsable Regional La Paz*, *Responsable Regional Oruro*, *Responsable Regional Potosí*, *Educador*), la interfaz se circunscribe automáticamente a su **jurisdicción territorial**.
    - La cabecera muestra la insignia fija institucional: `📍 Región Asignada: [Nombre de Ciudad] ([CÓDIGO])`.
    - Todas las metas anuales POA, avances mensuales, KPIs y widgets reflejan exclusivamente los datos de su departamento.
  - **Responsable Nacional y Cargos de Dirección (Director Ejecutivo, Gerente de Proyectos, Administrador):**
    - Disponen de un **Selector de Región / Ciudad** interactivo en la cabecera:
      - `🌐 Nacional (Consolidado País)`: Computa y consolida automáticamente la sumatoria de las 9 regionales.
      - `📍 La Paz (Sede Central)`
      - `📍 Oruro (Regional Oruro - Enfoque Urbano)`
      - `📍 Potosí (Regional Potosí - Enfoque Urbano)`
      - `📍 Cochabamba`, `📍 Santa Cruz`, `📍 El Alto`, `📍 Sucre`, `📍 Tarija`, `📍 Beni`.
    - Barra de **Pastillas de Salto Rápido** (`[🌐 Nacional]`, `[📍 La Paz]`, `[📍 Oruro]`, `[📍 Potosí]`, `[📍 Cochabamba]`, etc.) para conmutar entre ciudades en 1 solo clic.

- 🎛️ **Herramientas Operativas del Tablero:**
  - **Filtros por Tipo SGC:** Selector de pestañas para ver *Todos (20)*, *Mensuales (Gris)*, *De Proceso (Celeste)* y *Promedios (Naranja)*.
  - **Buscador Reactivo:** Búsqueda en tiempo real por código (`IND-01` a `IND-20`), temática o palabra clave.
  - **Visor Horizontal de 12 Meses (`modal-ver-meses-indicador`):** Botón `📅 Ver 12 Meses` para auditar la ejecución de Enero a Diciembre y contrastar con la meta.
  - **Editor y Registro Mensual (`modal-editar-logro-mes`):** Permite ingresar o simular el logro alcanzado mes a mes con recálculo dinámico en vivo y justificaciones SGC.
  - **Ficha Técnica Oficial ISO 9001 (`modal-ficha-tecnica-indicador`):** Botón `ℹ️ Ficha SGC` con el desglose de código normativo `SGC-Visional-MAM-6 o11`, metodología de cálculo, meses excluidos y respaldos documentales exigibles en auditoría.
  - **Exportación Oficial a Excel:** Botón `📊 Exportar Excel` que descarga la matriz completa en formato `.csv` con codificación UTF-8 BOM, lista para abrirse en Microsoft Excel con todas las fórmulas y notas oficiales.


---

### 29. Panel Ejecutivo de Gerencia Nacional: Metas Desglosadas a Nivel Bolivia y Auditoría Aislada por Regional

Diseñado a la medida de la **Gerencia Nacional de Proyectos** y la **Dirección Institucional**, estructurando el panel principal (`#panel-dashboard`) en dos modalidades operativas complementarias:

- 🇧🇴 **Modo 1: Consolidado General Nivel Bolivia (Metas Desglosadas y Totales):**
  - **Hero Macro (Nivel Bolivia):** Bloque ejecutivo superior con la **Meta Anual General Nivel Bolivia**, el **Logro Acumulado País** y el **Porcentaje de Avance General (%)** con barra de progreso reactiva.
  - **Matriz de Metas Desglosadas Nivel Bolivia (73 subcategorías):** Cada indicador estratégico presenta **todas sus metas desglosadas visibles** comparadas individualmente contra su meta respectiva, logro alcanzado y avance porcentual:
    - *Líderes activos:* Área Urbana nuevos, Área Urbana antiguos, Área Rural nuevos, Área Rural antiguos, y **TOTAL Líderes activos** resaltado.
    - *Consultas a jóvenes:* Clínicas/policonsultorios, Unidades móviles y **TOTAL**.
    - *Docentes capacitados y activos:* Desglose por nivel (Primaria/Secundaria) y área (Urbana/Rural) con sus **TOTALES**.
    - *Ciclos de estudiantes:* Pre-test (Inician) vs Post-test (Culminan) con sus desgloses y **TOTALES**.
    - *Incidencia Política y Auditoría Social:* Desgloses urbanos y rurales con sus metas y **TOTALES**.
  - **Distribución Departamental del País:** Cuadro comparativo de las 9 sedes departamentales (La Paz, Oruro, Potosí, Cochabamba, Santa Cruz, El Alto, Sucre, Tarija, Beni) con acordeón desplegable individual de metas por sede, botón global de expansión y acceso directo **"Auditar Mes a Mes"**.

- 🏢 **Modo 2: Auditoría Regional Aislada (Avance Mes a Mes e Informes):**
  - **Selector Aislado de Sedes:** Permite al Gerente Nacional aislar en un solo clic la información de cualquier ciudad (`La Paz`, `Oruro`, `Potosí`, `Cochabamba`, `Santa Cruz`, `El Alto`, `Sucre`, `Tarija`, `Beni`) sin interferencia de otros departamentos.
  - **Ficha Ejecutiva de la Regional:** Muestra la Meta Anual de la Regional, Logro Total alcanzado, % Avance Departamental y Total de Informes radicados.
  - **Sub-pestaña 1: Matriz de Avance Mes a Mes (Enero a Diciembre):** Cuadrícula completa de los 12 meses para todas las metas desglosadas de esa regional, permitiendo auditar con exactitud el comportamiento cronológico de la sede.
  - **Sub-pestaña 2: Expediente de Informes Oficiales (18 Hojas Técnicas):** Repositorio de los informes narrativos y técnicos presentados por esa regional, con autor, período, archivo adjunto (.xlsx/.docx) y resumen técnico de ejecución.

- 🔄 **Acceso y Conmutación de Roles:**
  - Al iniciar sesión como **Gerente Nacional de Proyectos** (`Lic. Valeria Quiroga`, `proyectos@cies.org.bo`, clave `cies2026`) o **Gerencia** (`Lic. Marcelo Suárez`), el sistema abre automáticamente esta vista estratégica.
  - El usuario **Administrador** dispone del botón de alternancia (`[ 🏢 Vista Gerente Nacional ]` / `[ 🔄 Ver Vista Operativa SGC ]`) para auditar ambas perspectivas.

---

### 30. Cuadrícula Oficial Mes a Mes (Enero a Diciembre) en los Tableros de Cada Regional (Réplica Exacta Sheet2 Excel)

En total consonancia con el instrumento oficial `SGC-Visional-MAM-6 o11` (Hoja `Registro de datos` del archivo Excel `01.10.26. TABLERO DE MONITOREO PROGRAMÁTICO.xlsx`), el **Tablero Operativo de cada Regional** (`#dashboard-standard-view`) ahora presenta de manera directa e inmersiva la **matriz completa dividida en las 12 columnas mensuales**:

- 📅 **Estructura Tabular de 20 Columnas con Desplazamiento Fluido:**
  - `#` (Correlativo oficial 1 a 20).
  - `Tipo SGC` (Insignia normativa: *Mensual*, *De Proceso*, *Promedio*).
  - `Indicador Oficial y Desagregación` (Subcategorías urbanas/rurales y filas de TOTAL).
  - `Meta Anual (POA)` y `Meta Mens/Proc`.
  - **12 Columnas Mensuales:** `Ene`, `Feb`, `Mar`, `Abr`, `May`, `Jun`, `Jul`, `Ago`, `Sep`, `Oct`, `Nov`, `Dic`.
  - `Logro Actual` (Cálculo normativo según modelo SGC).
  - `% Avance` (Semáforo de cumplimiento institucional).
  - `Acciones` (Editor de meses y Ficha Técnica ISO 9001).

- 🏷️ **Desglose Multinivel y Totales:**
  - Cada indicador que contiene desagregaciones (ej. *Líderes activos*, *Consultas a jóvenes*, *Docentes capacitados y activos*, *Escolares iniciados/culminados*, *Incidencia política*, *Auditoría social*) despliega sus subcategorías individuales (`↳ Área urbana nuevos`, `↳ Área rural antiguos`, etc.) con sus valores mensuales y su respectiva fila de **`TOTAL`** destacada en azul institucional con borde reforzado.

- ⏸️ **Sombreado Normativo de Meses Excluidos:**
  - En los indicadores calculados por promedio, las celdas de meses inhábiles o de receso escolar boliviano se diferencian visualmente con un tono tenue y la marca explicativa `—` (`title="Mes no computable según norma técnica SGC"`):
    - *Indicador 6 (Líderes activos):* Excluye Enero (11 meses computables).
    - *Indicadores 9 (Docentes activos) y 12 (Unidades Educativas):* Excluyen Enero, Junio y Diciembre (9 meses computables).

- ✏️ **Interacción y Edición Rápida:**
  - Botón directo de edición mensual (`abrirEditarLogroMes`) en cada subfila y fila total para registrar o ajustar datos operativos.
  - Columnas fijas (*sticky headers* y columnas fijas `#` e *Indicador*) para mantener la orientación visual durante el desplazamiento horizontal en cualquier pantalla o resolución.

---

### 31. Distribución Departamental con Desglose en Vivo (Líderes Urbanos, Rurales, Totales y Metas Territoriales)

En el panel de **Gerencia Nacional** (`#panel-dashboard`), la tabla **"Distribución Departamental del País"** cuenta con un motor de acordeón reactivo de alta fidelidad:

- 🗂️ **Acordeón Departamental por Región:**
  - Cada sede (`La Paz`, `Oruro`, `Potosí`, `Cochabamba`, `Santa Cruz`, `El Alto`, `Sucre`, `Tarija`, `Beni`) presenta su fila ejecutiva consolidada y un botón de alternancia `[ ▼ Desglosar ]` / `[ ▲ Ocultar ]`.
  - Botón global en cabecera: **`[ ▼ Expandir Todas las Regiones ]`** para desplegar u ocultar simultáneamente los 9 departamentos sin recargar la página.

- 👥 **Desglose Especial de Líderes y Lideresas Activos (Ind 1):**
  - Al expandir cualquier departamento, se despliega de inmediato el bloque de líderes con:
    - `↳ Líderes activos: Área urbana (nuevos)`
    - `↳ Líderes activos: Área urbana (antiguos)`
    - `🏙️ SUBTOTAL LÍDERES URBANOS [SEDE]` (Suma urbana, meta regional, logro, % y barra).
    - `↳ Líderes activos: Área rural (nuevos)`
    - `↳ Líderes activos: Área rural (antiguos)`
    - `🌾 SUBTOTAL LÍDERES RURALES [SEDE]` (Suma rural, meta regional, logro, % y barra).
    - `⭐ TOTAL LÍDERES ACTIVOS • SEDE [CIUDAD]` (Consolidado departamental del indicador).

- 📊 **Desglose Completo de Metas Estratégicas:**
  - Asimismo, se listan las submetas ejecutadas en esa sede: consultas jóvenes (clínicas/móviles), docentes capacitados y activos (primaria/secundaria, urbana/rural), estudiantes (iniciados/culminados), incidencia política y auditoría social.
  - Cada subfila mantiene su **Meta Anual POA departamental**, su **Logro alcanzado** y su **% de Avance** con semáforo de colores oficial.
