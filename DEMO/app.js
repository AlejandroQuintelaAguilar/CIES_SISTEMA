/**
 * Demo Funcional V2 - Sistema Educativo Institucional CIES
 * Lógica de negocio refinada a partir de los instrumentos oficiales 2026:
 * - Tablero de Monitoreo Programático (SGC-Visional-MAM-6 o11)
 * - Planilla de Asistencia Diaria Oficial (SGC-Apoyo-ABS-3-pp3)
 * - Procedimientos Misionales de Información, Orientación y Sensibilización CIES.
 */

// Datos iniciales de demostración con terminología y variables normativas CIES
const INITIAL_DATA = {
  regionales: [
    { codigo: "LP", nombre: "La Paz" },
    { codigo: "EA", nombre: "El Alto" },
    { codigo: "CBBA", nombre: "Cochabamba" },
    { codigo: "SCZ", nombre: "Santa Cruz" },
    { codigo: "SU", nombre: "Sucre" },
    { codigo: "TJA", nombre: "Tarija" },
    { codigo: "PTS", nombre: "Potosí" },
    { codigo: "OR", nombre: "Oruro" },
    { codigo: "BENI", nombre: "Beni" }
  ],
  participantes: [
    { id: 1, nombres: "María Elena", apellidos: "Quispe Mamani", ci: "4829102 LP", edad: 19, rangoEdad: "15 a 19", genero: "Femenino", cargoOcupacion: "Lideresa Red Tú Decides", procedencia: "Distrito 4 - El Alto", regional: "EA", telefono: "71234567", fechaRegistro: "2026-09-12", estadoFormacion: "Culminado", activoEnAula: true },
    { id: 2, nombres: "Carlos Andrés", apellidos: "Mendoza Rojas", ci: "6910293 CB", edad: 22, rangoEdad: "20 a 24", genero: "Masculino", cargoOcupacion: "Estudiante Universitario", procedencia: "Cercado", regional: "CBBA", telefono: "72345678", fechaRegistro: "2026-09-15", estadoFormacion: "Iniciado", activoEnAula: false },
    { id: 3, nombres: "Alex", apellidos: "Flores Choque", ci: "5829103 SC", edad: 17, rangoEdad: "15 a 19", genero: "Trans masculino", cargoOcupacion: "Líder Comunitario", procedencia: "Plan 3000", regional: "SCZ", telefono: "73456789", fechaRegistro: "2026-09-20", estadoFormacion: "En Proceso", activoEnAula: true },
    { id: 4, nombres: "Javier Gonzalo", apellidos: "Ramos Gutiérrez", ci: "3920194 LP", edad: 28, rangoEdad: "> 24", genero: "Masculino", cargoOcupacion: "Profesor de Secundaria", procedencia: "U.E. República de Francia", regional: "LP", telefono: "74567890", fechaRegistro: "2026-09-22", estadoFormacion: "Culminado", activoEnAula: true },
    { id: 5, nombres: "Luciana", apellidos: "Aruquipa Torrez", ci: "7102938 LP", edad: 14, rangoEdad: "10 a 14", genero: "Femenino", cargoOcupacion: "Estudiante de Secundaria", procedencia: "U.E. Simón Bolívar", regional: "LP", telefono: "75678901", fechaRegistro: "2026-09-26", estadoFormacion: "Iniciado", activoEnAula: false },
    { id: 6, nombres: "Prof. Rosario", apellidos: "Paredes Beltrán", ci: "2839102 CB", edad: 35, rangoEdad: "> 24", genero: "Femenino", cargoOcupacion: "Maestra de Primaria", procedencia: "U.E. Avaroa", regional: "CBBA", telefono: "76543210", fechaRegistro: "2026-09-28", estadoFormacion: "Culminado", activoEnAula: true },
    { id: 7, nombres: "Prof. Marco Antonio", apellidos: "Vargas Soliz", ci: "3482910 LP", edad: 42, rangoEdad: "> 24", genero: "Masculino", cargoOcupacion: "Maestro de Secundaria", procedencia: "U.E. Bolívar", regional: "LP", telefono: "77891234", fechaRegistro: "2026-09-29", estadoFormacion: "Culminado", activoEnAula: false }
  ],
  actividades: [
    { 
      id: 10, 
      categoriaPlanilla: "Planilla de Asistencia y Alimentación (SGC-Apoyo-ABS-3-pp3)", 
      conEjecucionPresupuestaria: true,
      totalPresupuesto: 711.90,
      totalHoras: 3,
      titulo: "Capacitación con Líderes Juveniles: Toma de Decisiones y Plan de Vida", 
      tipo: "Capacitación con Líderes Juveniles", 
      modalidad: "Presencial Abierto",
      area: "Urbana", 
      unidadEducativa: "CIES El Alto - Rincón Juvenil", 
      regional: "EA", 
      fecha: "2024-04-05", 
      responsable: "Lic. Viviana Segales Sumi", 
      participantesCount: 25, 
      materialDistribuido: "Papel tamaño oficio, marcadores delgados, bolígrafos, papelógrafos, tarjetas de cartulina", 
      refManana: false, almuerzo: false, refTarde: true, cena: false, 
      estado: "En Ejecución",
      esProcesoEducativo: true,
      documentoGeneral: {
        titulo: "Plan Metodológico y Curricular de Capacitación con Líderes Juveniles (33 Horas)",
        archivo: "planificador Lideres 5_4_24.docx"
      },
      talleres: [
        {
          id: 101,
          titulo: "Taller 1: Toma de Decisiones y Plan de Vida (Capacitación Líderes)",
          fecha: "2024-04-05",
          horas: 3,
          facilitador: "Lic. Viviana Segales Sumi",
          modalidad: "Presencial Abierto",
          lugar: "CIES El Alto - Rincón Juvenil",
          participantes: 25,
          docPlanificacion: "planificador Lideres 5_4_24.docx",
          docAsistencia: "Planilla_Firmas_Lideres_5_4_24.pdf",
          observaciones: "Taller oficial CIES EDU. EA / RFS 15/2024 con memorándum de solicitud de gasto.",
          presupuestoDetalle: {
            salon: 0.00,
            alimentacion: 325.00,
            pasajes: 386.90,
            viaticos: 0.00,
            materiales: 0.00,
            otros: 0.00,
            total: 711.90
          },
          planificadorOficial: {
            memorandum: {
              a: "Dr. Fernando Álvarez Fuentes - GERENTE REGIONAL CIES LA PAZ",
              via1: "Lic. María Uzeda Romero - JEFA ADMINISTRATIVA CIES LA PAZ",
              via2: "Lic. Gloria O. Arauco Lima - COORDINADORA COMPONENTE EDUCATIVO CIES LA PAZ",
              de: "Lic. Viviana Segales Sumi - RESPONSABLE AREA EDUCATIVA CIES EL ALTO",
              ref: "SOLICITUD DE GASTO - CAPACITACION",
              codigoRef: "CIES EDU. EA / RFS 15/2024",
              fecha: "La Paz, 4 de Abril de 2024"
            },
            objetivoGeneral: "Fortalecer habilidades y destrezas para desarrollar una vida sana, plena e integral de su salud sexual y salud reproductiva.",
            objetivosEspecificos: "1. Reconocer, relacionar y aplicar las destrezas sobre la toma de decisiones y la asertividad para la vivencia de la sexualidad y el cuidado de la salud.\n2. Fortalecer al análisis de cada uno de los pasos de la toma de decisiones.\n3. Integrar las herramientas aplicadas durante el proceso de formación, en la construcción de su plan de vida para su realización personal.\n4. Reflexionar acerca de las limitaciones para cumplir con el plan de vida de manera que no se convierta en un sentimiento de frustración, sino como herramienta flexible y susceptible a ser modificable.",
            metodologia: "Activa- participativa",
            datosGrupo: "Hombres y mujeres adolescentes y jóvenes, de unidades educativas, institutos y Universidades de El Alto",
            resultadosEsperados: "• Se logrará reconocer, relacionar y aplicar las destrezas sobre la toma de decisiones y la asertividad para la vivencia de la sexualidad y el cuidado de la salud.\n• Se logrará fortalecer al análisis de cada uno de los pasos de la toma de decisiones.\n• Se logrará integrar las herramientas aplicadas durante el proceso de formación, en la construcción de su plan de vida para su realización personal.\n• Se logrará reflexionar acerca de las limitaciones para cumplir con el plan de vida de manera que no se convierta en frustración sino en resiliencia.",
            participantes: 25,
            cronograma: [
              { hora: "15:00 - 15:15", tema: "Inscripción", contenido: "Los participantes se registrarán en la planilla de asistencia", tecnica: "Registro", recursos: "Planilla de Asistencia", responsable: "Viviana Segales" },
              { hora: "15:15 - 15:45", tema: "Actividad energizante", contenido: "Dinámica grupal introductoria de activación y confianza", tecnica: "“Florencia”", recursos: "Ninguno", responsable: "Viviana Segales" },
              { hora: "15:45 - 16:45", tema: "TOMA DE DECISIONES", contenido: "Dividir en cuatro grupos (Guerreros, Cazadores, Sabios, Agricultores) en simulación de isla desierta y alianza para viaje por mar.", tecnica: "“Salvando la vida”", recursos: "Papel tamaño oficio, marcadores delgados, bolígrafo", responsable: "Viviana Segales" },
              { hora: "16:45 - 17:45", tema: "PLAN DE VIDA", contenido: "Distribución de matriz de proyección hacia el 2030, facilitación guiada y orientación sobre metas individuales.", tecnica: "“El año 2030”", recursos: "Papelógrafos, marcadores gruesos, hojas tamaño oficio", responsable: "Viviana Segales" },
              { hora: "17:45 - 18:00", tema: "Cierre", contenido: "Conclusiones, acuerdos conjuntos y evaluación participativa.", tecnica: "Lluvia de ideas", recursos: "Tarjetas de cartulina", responsable: "Viviana Segales" }
            ]
          },
          ejecucion: {
            refManana: false,
            almuerzo: false,
            refTarde: true,
            cena: false,
            materialDistribuido: "Papel tamaño oficio, marcadores delgados, bolígrafos, papelógrafos, tarjetas de cartulina",
            participantesAsistentes: 25,
            preTestPromedio: 58
          },
          documentacion: {
            docAsistencia: "Planilla_Firmas_Lideres_5_4_24.pdf",
            descargosGastos: [
              { concepto: "Refrigerios vespertinos (Pastelería y jugos naturales 25 pers.)", partida: "Alimentación y Refrigerios", monto: 325.00, comprobante: "Factura N° 10482 - Pastelería Ideal" },
              { concepto: "Pasajes de traslado urbano e interciudad (Líderes de unidades educativas)", partida: "Pasajes y Transporte", monto: 386.90, comprobante: "Recibo N° 452 - Sindicato Mixto El Alto" }
            ],
            fotos: ["Dinamica_SalvandoLaVida.jpg", "Grupo_PlanVida_2030.jpg"],
            estadoSGC: "Validado Orientador",
            validador: "Lic. Miriam Morales (Orientador/a SSSR)",
            fechaValidacion: "2024-04-06",
            notasValidacion: "Planilla física firmada por los 25 participantes cotejada con la lista de pre-registro y recibos de descargo archivados."
          }
        }
      ]
    },
    { 
      id: 1, 
      categoriaPlanilla: "Planilla de Asistencia y Alimentación (SGC-Apoyo-ABS-3-pp3)", 
      conEjecucionPresupuestaria: true,
      totalPresupuesto: 1850,
      gastos: [
        { nombre: "Refrigerios para 28 participantes (4 sesiones)", tipo: "Alimentación y Refrigerios", monto: 840 },
        { nombre: "Fotocopias cartillas DSR y fichas metodológicas", tipo: "Material de Escritorio y Didáctico", monto: 350 },
        { nombre: "Estipendios / Viáticos locales de movilización", tipo: "Viáticos y Estipendios", monto: 460 },
        { nombre: "Imprevistos y papelería complementaria", tipo: "Imprevistos / Otros Gastos", monto: 200 }
      ],
      titulo: "Taller: Derechos Sexuales y Reproductivos en el Aula", 
      tipo: "Capacitación a Docentes", 
      area: "Urbana", 
      unidadEducativa: "U.E. Simón Bolívar", 
      regional: "LP", 
      fecha: "2026-09-18", 
      responsable: "Lic. Andrea Paz", 
      participantesCount: 28, 
      materialDistribuido: "Guías pedagógicas, cartillas DSR", 
      refManana: true, almuerzo: true, refTarde: true, cena: false, 
      estado: "Finalizado",
      esProcesoEducativo: true,
      documentoGeneral: {
        titulo: "Programa Curricular y Plan Formativo en Derechos Sexuales y Reproductivos 2026",
        archivo: "Plan_Formativo_DSR_2026.pdf"
      },
      totalHoras: 33,
      talleres: [
        { id: 1, titulo: "Módulo 1: Marco Normativo y Derechos Sexuales y Reproductivos", fecha: "2026-09-18", horas: 8, facilitador: "Lic. Andrea Paz", docPlanificacion: "Plan_Sesion_Mod1_Derechos_Sexuales.pdf", docAsistencia: "Planilla_Firmas_Mod1_U_E_SimonBolivar.pdf" },
        { id: 2, titulo: "Módulo 2: Enfoque de Género y Prevención de Violencia (Ley 348)", fecha: "2026-09-22", horas: 8, facilitador: "Lic. Andrea Paz", docPlanificacion: "Plan_Sesion_Mod2_Ley348.pdf", docAsistencia: "Planilla_Firmas_Mod2_U_E_SimonBolivar.pdf" },
        { id: 3, titulo: "Módulo 3: Métodos Anticonceptivos y Prevención de ITS/VIH", fecha: "2026-09-25", horas: 8, facilitador: "Lic. Andrea Paz", docPlanificacion: "Guia_Didactica_Mod3_Anticoncepcion_ITS.pdf", docAsistencia: "Planilla_Firmas_Mod3_U_E_SimonBolivar.pdf" },
        { id: 4, titulo: "Módulo 4: Estrategias Pedagógicas y Réplicas en Aula", fecha: "2026-09-28", horas: 9, facilitador: "Lic. Andrea Paz", docPlanificacion: "Carta_Descriptiva_Mod4_Replicas_Aula.pdf", docAsistencia: "Planilla_Firmas_Mod4_Evaluacion_Final.pdf" }
      ]
    },
    { 
      id: 2, 
      categoriaPlanilla: "Planilla de Asistencia y Alimentación (SGC-Apoyo-ABS-3-pp3)", 
      conEjecucionPresupuestaria: true, 
      totalPresupuesto: 620,
      gastos: [
        { nombre: "Refrigerio para padres y tutores (3 sesiones)", tipo: "Alimentación y Refrigerios", monto: 450 },
        { nombre: "Folletería de crianza positiva", tipo: "Material de Escritorio y Didáctico", monto: 170 }
      ],
      titulo: "Sensibilización al Entorno Familiar (Padres y Tutores)", 
      tipo: "Sensibilización Entorno (3 sesiones)", 
      area: "Rural", 
      unidadEducativa: "U.E. Achocalla Central", 
      regional: "EA", 
      fecha: "2026-09-25", 
      responsable: "Lic. Miriam Morales", 
      participantesCount: 32, 
      materialDistribuido: "Folletería crianza positiva y SSR", 
      refManana: true, almuerzo: false, refTarde: true, cena: false, 
      estado: "Finalizado" 
    },
    { 
      id: 3, 
      categoriaPlanilla: "Registro Informativo Par a Par (Red Tú Decides)", 
      conEjecucionPresupuestaria: false, 
      totalPresupuesto: 0,
      gastos: [],
      titulo: "Actividad Informativa Par a Par: Prevención de ITS", 
      tipo: "Información Par a Par (Red Tú Decides)", 
      area: "Urbana", 
      unidadEducativa: "Plaza Central 16 de Julio", 
      regional: "EA", 
      fecha: "2026-10-05", 
      responsable: "Líder Juvenil María Quispe", 
      participantesCount: 45, 
      materialDistribuido: "Preservativos y trípticos", 
      refManana: false, almuerzo: false, refTarde: true, cena: false, 
      estado: "Planificado" 
    },
    { 
      id: 4, 
      categoriaPlanilla: "Planilla de Entrega de Viáticos (Encuentros CIES)", 
      conEjecucionPresupuestaria: true, 
      totalPresupuesto: 5200,
      gastos: [
        { nombre: "Viáticos y estipendios a 50 docentes", tipo: "Viáticos y Estipendios", monto: 4000 },
        { nombre: "Alimentación completa (Desayuno, Almuerzo, Cena)", tipo: "Alimentación y Refrigerios", monto: 1200 }
      ],
      titulo: "Planilla de Viáticos y Pasajes: Encuentro Docente 2026", 
      tipo: "Entrega de Viáticos y Estipendios", 
      area: "Urbana", 
      unidadEducativa: "Auditorio CIES Central", 
      regional: "LP", 
      fecha: "2026-10-12", 
      responsable: "Admin", 
      participantesCount: 50, 
      materialDistribuido: "Estipendios y rendición de cuentas", 
      refManana: true, almuerzo: true, refTarde: true, cena: true, 
      estado: "Planificado" 
    },
    { 
      id: 5, 
      categoriaPlanilla: "Registro de Actividades Virtuales (Zoom/Meet)", 
      conEjecucionPresupuestaria: false, 
      totalPresupuesto: 0,
      gastos: [],
      titulo: "Webinar: Prevención del Embarazo en Adolescentes", 
      tipo: "Sesión Virtual en Línea", 
      area: "Urbana", 
      unidadEducativa: "Plataforma Zoom CIES", 
      regional: "LP", 
      fecha: "2026-09-29", 
      responsable: "Lic. Andrea Paz", 
      participantesCount: 65, 
      materialDistribuido: "Material digital descargable", 
      refManana: false, almuerzo: false, refTarde: false, cena: false, 
      estado: "Finalizado" 
    },
    { 
      id: 6, 
      categoriaPlanilla: "Registro de Información Sala / Comunidad (SGC-Misional-E-1-ff2)", 
      conEjecucionPresupuestaria: false, 
      totalPresupuesto: 0,
      gastos: [],
      titulo: "Charlas Informativas en Sala de Espera de Clínica", 
      tipo: "Información en Sala de Espera", 
      area: "Urbana", 
      unidadEducativa: "Clínica CIES El Alto", 
      regional: "EA", 
      fecha: "2026-09-30", 
      responsable: "Lic. Miriam Morales", 
      participantesCount: 40, 
      materialDistribuido: "Trípticos temáticos PF e ITS", 
      refManana: false, almuerzo: false, refTarde: false, cena: false, 
      estado: "Finalizado" 
    },
    { 
      id: 7, 
      categoriaPlanilla: "Planilla de Supervisión Técnica (SGC-Misional-E-1-ff5)", 
      conEjecucionPresupuestaria: true, 
      totalPresupuesto: 480,
      gastos: [
        { nombre: "Transporte local técnico de supervisión in situ", tipo: "Transporte y Pasajes", monto: 200 },
        { nombre: "Refrigerio de coordinación técnica", tipo: "Alimentación y Refrigerios", monto: 180 },
        { nombre: "Impresión de fichas e instrumentos SGC", tipo: "Material de Escritorio y Didáctico", monto: 100 }
      ],
      titulo: "Supervisión Técnica In Situ a Líderes Juveniles", 
      tipo: "Supervisión y Control de Calidad", 
      area: "Urbana", 
      unidadEducativa: "Red de Salud Distrito 4", 
      regional: "CBBA", 
      fecha: "2026-10-02", 
      responsable: "Lic. Pedro Guzmán", 
      participantesCount: 6, 
      materialDistribuido: "Guía de supervisión pedagógica", 
      refManana: true, almuerzo: false, refTarde: false, cena: false, 
      estado: "Finalizado" 
    },
    { 
      id: 8, 
      categoriaPlanilla: "Planilla de Asistencia y Alimentación (SGC-Apoyo-ABS-3-pp3)", 
      conEjecucionPresupuestaria: true,
      totalPresupuesto: 2150,
      gastos: [
        { nombre: "Refrigerios taller docentes (4 jornadas)", tipo: "Alimentación y Refrigerios", monto: 1100 },
        { nombre: "Guías metodológicas y rotafolios didácticos", tipo: "Material de Escritorio y Didáctico", monto: 650 },
        { nombre: "Pasajes de traslado facilitadores", tipo: "Transporte y Pasajes", monto: 400 }
      ],
      titulo: "Taller Departamental: Fortalecimiento Pedagógico en EIS", 
      tipo: "Capacitación a Docentes", 
      area: "Urbana", 
      unidadEducativa: "U.E. Avaroa Cochabamba", 
      regional: "CBBA", 
      fecha: "2026-10-08", 
      responsable: "Prof. Rosario Paredes Beltrán", 
      participantesCount: 30, 
      materialDistribuido: "Guías metodológicas EIS y rotafolios", 
      refManana: true, almuerzo: true, refTarde: true, cena: false, 
      estado: "Finalizado",
      esProcesoEducativo: true,
      documentoGeneral: {
        titulo: "Plan de Fortalecimiento Pedagógico Docente en EIS - Regional Cochabamba",
        archivo: "Plan_Departamental_EIS_CBBA_2026.pdf"
      },
      totalHoras: 33,
      talleres: [
        { id: 1, titulo: "Taller 1: Fundamentos de la Educación Integral en Sexualidad", fecha: "2026-10-08", horas: 8, facilitador: "Prof. Rosario Paredes Beltrán" },
        { id: 2, titulo: "Taller 2: Metodología Didáctica y Dinámicas Participativas", fecha: "2026-10-10", horas: 8, facilitador: "Prof. Rosario Paredes Beltrán" },
        { id: 3, titulo: "Taller 3: Abordaje de Prevención de Embarazo en Adolescentes", fecha: "2026-10-12", horas: 8, facilitador: "Lic. Pedro Guzmán" },
        { id: 4, titulo: "Taller 4: Planificación de Réplicas en Aula y Evaluación Pre/Post", fecha: "2026-10-14", horas: 9, facilitador: "Lic. Pedro Guzmán" }
      ]
    },
    { 
      id: 9, 
      categoriaPlanilla: "Planilla de Supervisión Técnica (SGC-Misional-E-1-ff5)", 
      conEjecucionPresupuestaria: true, 
      totalPresupuesto: 350,
      gastos: [
        { nombre: "Transporte in situ y materiales de supervisión", tipo: "Transporte y Pasajes", monto: 350 }
      ],
      titulo: "Supervisión Pedagógica y de Calidad a Taller EIS - Cercado", 
      tipo: "Supervisión y Control de Calidad", 
      area: "Urbana", 
      unidadEducativa: "U.E. Bolívar Cochabamba", 
      regional: "CBBA", 
      fecha: "2026-10-09", 
      responsable: "Lic. Pedro Guzmán", 
      participantesCount: 18, 
      materialDistribuido: "Fichas de supervisión y rúbrica SGC", 
      refManana: true, almuerzo: false, refTarde: false, cena: false, 
      estado: "Finalizado" 
    }
  ],
  orientadores: [
    { id: 1, orientador: "Lic. Miriam Morales", participante: "María Elena Quispe Mamani", area: "Urbana", tipoUsuario: "Nuevo", codigoTema: "PF", tipoConsulta: "Planificación Familiar (PF)", pruebaVIH: "No realizada", tamizajeViolencia: "Negativo", modalidad: "Presencial", fecha: "2026-09-21", notas: "Orientación en métodos modernos y entrega de preservativos." },
    { id: 2, orientador: "Lic. Miriam Morales", participante: "Carlos Andrés Mendoza", area: "Urbana", tipoUsuario: "Antiguo", codigoTema: "VIH-SIDA", tipoConsulta: "Prevención ITS / VIH", pruebaVIH: "Sí - Tira reactiva (No reactiva)", tamizajeViolencia: "Negativo", modalidad: "Presencial", fecha: "2026-09-24", notas: "Consejería pre y post prueba consentida bajo Ley 3729." },
    { id: 3, orientador: "Lic. Pedro Guzmán", participante: "Luciana Aruquipa Torrez", area: "Rural", tipoUsuario: "Nuevo", codigoTema: "VBG", tipoConsulta: "Violencia Basada en Género (VBG)", pruebaVIH: "No realizada", tamizajeViolencia: "Positivo (Activada Ley 348)", modalidad: "Presencial", fecha: "2026-09-29", notas: "Detección temprana de violencia psicológica. Se deriva a defensoría conforme a Ley 348." }
  ],
  incidencia: [
    { id: 1, estrategia: "Mesa Técnica Interinstitucional para la Ley de Juventudes", lider: "Red Jóvenes Tú Decides", ambito: "Municipal", normativa: "Ley Municipal de Juventudes 045", estado: "En Proceso", fecha: "2026-09-28" },
    { id: 2, estrategia: "Auditoría Social de Calidad en Servicios de SSR Amigables", lider: "Comité de Auditoría CIES", ambito: "Red de Salud Local", normativa: "Norma Técnica de Calidad CIES", estado: "Concluida", fecha: "2026-09-10" },
    { id: 3, estrategia: "Incorporación de ESI en la Planificación Anual Escolar", lider: "Comité de Maestros CIES", ambito: "Departamental", normativa: "Resolución Ministerial SSR", estado: "Propuesta enviada", fecha: "2026-09-30" }
  ],
  tableroMetas2026: [
    { id: 1, codigo: "IND-01", indicador: "Sensibilización al entorno del adolescente y joven", metaAnual: 1200, enero: 95, febrero: 110, marzo: 130, abril: 105, mayo: 125, junio: 140, julio: 90, agosto: 115, septiembre: 130, octubre: 0, noviembre: 0, diciembre: 0 },
    { id: 2, codigo: "IND-02", indicador: "N° de pruebas de VIH realizadas con tira reactiva", metaAnual: 450, enero: 30, febrero: 38, marzo: 42, abril: 35, mayo: 40, junio: 45, julio: 28, agosto: 35, septiembre: 40, octubre: 0, noviembre: 0, diciembre: 0 },
    { id: 3, codigo: "IND-03", indicador: "N° de consultas jóvenes - Área Urbana (Nuevos)", metaAnual: 600, enero: 48, febrero: 55, marzo: 62, abril: 50, mayo: 58, junio: 65, julio: 40, agosto: 52, septiembre: 60, octubre: 0, noviembre: 0, diciembre: 0 },
    { id: 4, codigo: "IND-04", indicador: "N° de consultas jóvenes - Área Rural (Nuevos)", metaAnual: 300, enero: 20, febrero: 25, marzo: 30, abril: 22, mayo: 28, junio: 32, julio: 18, agosto: 24, septiembre: 28, octubre: 0, noviembre: 0, diciembre: 0 },
    { id: 5, codigo: "IND-05A", indicador: "N° de maestras/os capacitados en EIS (Primaria/Secundaria)", metaAnual: 350, enero: 0, febrero: 40, marzo: 55, abril: 30, mayo: 45, junio: 50, julio: 10, agosto: 35, septiembre: 40, octubre: 0, noviembre: 0, diciembre: 0 },
    { id: 6, codigo: "IND-05B", indicador: "N° de maestras/os activos aplicando réplicas en aula", metaAnual: 280, enero: 0, febrero: 25, marzo: 42, abril: 24, mayo: 36, junio: 40, julio: 8, agosto: 28, septiembre: 32, octubre: 0, noviembre: 0, diciembre: 0 },
    { id: 7, codigo: "IND-06", indicador: "N° de Unidades Educativas intervenidas", metaAnual: 25, enero: 2, febrero: 3, marzo: 4, abril: 2, mayo: 3, junio: 4, julio: 1, agosto: 2, septiembre: 3, octubre: 0, noviembre: 0, diciembre: 0 },
    { id: 8, codigo: "IND-07A", indicador: "N° de estudiantes que iniciaron procesos de formación", metaAnual: 1500, enero: 120, febrero: 140, marzo: 160, abril: 130, mayo: 150, junio: 170, julio: 100, agosto: 140, septiembre: 160, octubre: 0, noviembre: 0, diciembre: 0 },
    { id: 9, codigo: "IND-07B", indicador: "N° de estudiantes que culminaron formación (3 sesiones + Post-test)", metaAnual: 1250, enero: 95, febrero: 115, marzo: 135, abril: 110, mayo: 128, junio: 145, julio: 85, agosto: 120, septiembre: 138, octubre: 0, noviembre: 0, diciembre: 0 }
  ],
  informes: [
    { 
      id: 1, 
      codigo: "INF-2026-M09", 
      titulo: "Informe Narrativo Mensual - Septiembre 2026 (Regional La Paz)", 
      periodicidad: "Mensual", 
      periodo: "Septiembre 2026", 
      regional: "LP", 
      autor: "Lic. Andrea Paz", 
      tipo: "Informe Narrativo Mensual (18 Hojas Técnicas)", 
      estado: "Aprobado", 
      archivo: "Informe_Narrativo_Mensual_LaPaz_Sep2026.xlsx", 
      peso: "1.4 MB",
      resumen: "Ejecución al 105% en sensibilización escolar y 42 pruebas rápidas de VIH aplicadas."
    },
    { 
      id: 2, 
      codigo: "INF-2026-M08", 
      titulo: "Informe Narrativo Mensual - Agosto 2026 (Regional Cochabamba)", 
      periodicidad: "Mensual", 
      periodo: "Agosto 2026", 
      regional: "CBBA", 
      autor: "Lic. Carlos Mendoza", 
      tipo: "Informe Narrativo Mensual (18 Hojas Técnicas)", 
      estado: "Aprobado", 
      archivo: "Informe_Narrativo_Mensual_CBBA_Ago2026.xlsx", 
      peso: "1.2 MB",
      resumen: "Conclusión de ciclos formativos en 3 U.E. periurbanas con post-test aprobado."
    },
    { 
      id: 3, 
      codigo: "INF-2026-M07", 
      titulo: "Informe Narrativo Mensual - Julio 2026 (Regional El Alto)", 
      periodicidad: "Mensual", 
      periodo: "Julio 2026", 
      regional: "EA", 
      autor: "Lic. Miriam Morales", 
      tipo: "Informe Narrativo Mensual (18 Hojas Técnicas)", 
      estado: "Aprobado", 
      archivo: "Informe_Narrativo_Mensual_ElAlto_Jul2026.xlsx", 
      peso: "980 KB",
      resumen: "Atención individual de orientación y tamizajes de violencia Ley 348."
    },
    { 
      id: 4, 
      codigo: "INF-2026-SEM1", 
      titulo: "Informe Narrativo Semestral SE 2026 - Regional Sucre", 
      periodicidad: "Semestral", 
      periodo: "Enero - Junio 2026", 
      regional: "SU", 
      autor: "Lic. Pedro Guzmán", 
      tipo: "Informe Semestral Oficial (18 Hojas)", 
      estado: "Aprobado", 
      archivo: "5. Inf. narra semestral SE 2026 SUCRE jun.xlsx", 
      peso: "2.8 MB",
      resumen: "Consolidación de las 18 hojas técnicas de servicios educativos y auditoría SGC."
    },
    { 
      id: 5, 
      codigo: "INF-2026-SEM1-NAC", 
      titulo: "Consolidado Nacional Semestral 2026 (IPPF / CIES)", 
      periodicidad: "Semestral", 
      periodo: "Enero - Junio 2026", 
      regional: "Nacional", 
      autor: "Admin", 
      tipo: "Informe Semestral Consolidado (IPPF)", 
      estado: "Aprobado", 
      archivo: "Consolidado_Nacional_Semestral_CIES_2026.xlsx", 
      peso: "4.5 MB",
      resumen: "Reporte institucional de indicadores clave a la Federación Internacional de Planificación Familiar."
    },
    { 
      id: 6, 
      codigo: "PLAN-2026-ENC", 
      titulo: "Planificación Encuentro Maestras y Maestros 2026", 
      periodicidad: "Gestión", 
      periodo: "Gestión 2026", 
      regional: "Nacional", 
      autor: "Equipo Educativo CIES", 
      tipo: "Planificación de Taller", 
      estado: "Vigente", 
      archivo: "1 Planificacion Encuentro Maestras-os 2026.doc", 
      peso: "650 KB",
      resumen: "Guía metodológica, cronograma y presupuesto de estipendios para docentes."
    },
    { 
      id: 7, 
      codigo: "INF-2026-TEC01", 
      titulo: "Informe Técnico de Encuentro con Profesores 2026", 
      periodicidad: "Gestión", 
      periodo: "Marzo 2026", 
      regional: "LP", 
      autor: "Lic. Andrea Paz", 
      tipo: "Informe Técnico de Cierre", 
      estado: "Aprobado", 
      archivo: "3 Informe técnico encuentro profesores 2026.doc", 
      peso: "820 KB",
      resumen: "Evaluación de réplicas en aula de los 25 maestros capacitados."
    }
  ],
  digitalizacion: [
    { id: 1, nombre: "Planilla_Firmada_Taller_Docentes_18Sep.pdf", tipo: "Planilla de Asistencia Firmada (SGC-Apoyo-ABS-3-pp3)", peso: "2.4 MB", subidoPor: "Lic. Andrea Paz", fecha: "2026-09-18", modulo: "Actividades Educativas", estadoValidacion: "Validado Orientador", validadoPor: "Lic. Miriam Morales (Orientador/a SSSR)", fechaValidacion: "2026-09-19", observacionValidacion: "Planilla física con 25 firmas completas y cotejada conforme a formato SGC" },
    { id: 2, nombre: "Comprobante_Viaticos_Encuentro_Docente_2026.pdf", tipo: "Comprobante / Planilla de Viáticos y Pasajes", peso: "1.1 MB", subidoPor: "Admin", fecha: "2026-10-01", modulo: "Actividades Educativas", estadoValidacion: "Aprobado Admin", validadoPor: "Admin", fechaValidacion: "2026-10-01", observacionValidacion: "Recibos y firmas de entrega de estipendios conforme al presupuesto aprobado" },
    { id: 3, nombre: "Fotografias_Taller_Sensibilizacion_Achocalla.zip", tipo: "Evidencia Fotográfica de Actividad", peso: "14.5 MB", subidoPor: "Lic. Miriam Morales", fecha: "2026-09-25", modulo: "Actividades Educativas", estadoValidacion: "Pendiente", validadoPor: "-", fechaValidacion: "-", observacionValidacion: "Pendiente de revisión de calidad fotográfica y carteles institucionales" },
    { id: 4, nombre: "Acta_Acuerdo_Mesa_Tecnica_Juventudes.pdf", tipo: "Acta / Minuta de Coordinación o Convenio", peso: "850 KB", subidoPor: "Admin", fecha: "2026-09-28", modulo: "Incidencia Política", estadoValidacion: "Aprobado Admin", validadoPor: "Admin", fechaValidacion: "2026-09-29", observacionValidacion: "Acta suscrita con la Mesa Técnica de Juventudes validada legalmente" },
    { id: 5, nombre: "Tablero_Monitoreo_Programatico_Consolidado_Sep2026.xlsx", tipo: "Tablero / Reporte Programático Oficial", peso: "58.1 KB", subidoPor: "Admin", fecha: "2026-10-01", modulo: "Monitoreo Programático", estadoValidacion: "Aprobado Admin", validadoPor: "Admin", fechaValidacion: "2026-10-02", observacionValidacion: "Consolidación de indicadores de avance mensual 100% cotejada" },
    { id: 6, nombre: "Consentimientos_Pruebas_Rapidas_VIH_Sep2026.pdf", tipo: "Consentimiento Informado / Ficha Clínica", peso: "3.2 MB", subidoPor: "Lic. Miriam Morales", fecha: "2026-09-24", modulo: "Orientación SSSR", estadoValidacion: "Validado Orientador", validadoPor: "Lic. Miriam Morales (Orientador/a SSSR)", fechaValidacion: "2026-09-25", observacionValidacion: "Consentimientos informados firmados bajo reserva y confidencialidad (Ley 3729)" },
    { id: 7, nombre: "Ficha_Supervision_InSitu_RedTuDecides_Oct2026.pdf", tipo: "Ficha de Supervisión Técnica In Situ", peso: "1.8 MB", subidoPor: "Admin", fecha: "2026-10-02", modulo: "Actividades Educativas", estadoValidacion: "Pendiente", validadoPor: "-", fechaValidacion: "-", observacionValidacion: "Ficha técnica recién cargada, en espera de revisión por el miembro superior" },
    { id: 8, nombre: "1 Guia Supervision Sesion Orientacion.xlsx", tipo: "Guía de Supervisión de Sesión (SGC-Misional-E-4-ii1)", peso: "37.6 KB", subidoPor: "Admin", fecha: "2026-10-02", modulo: "Orientación SSSR", estadoValidacion: "Aprobado Admin", validadoPor: "Admin", fechaValidacion: "2026-10-02", observacionValidacion: "Formato matriz oficial SGC-Misional-E-4-ii1 homologado para supervisión técnica in situ de orientadores/as CIES." }
  ],
  evaluacionesPrePost: [
    { id: 1, actividadId: 1, participanteNombre: "Javier Gonzalo Ramos Gutiérrez", ci: "3920194 LP", preTest: 40, postTest: 88, satisfaccion: 95, estado: "Culminado" },
    { id: 2, actividadId: 1, participanteNombre: "Prof. Rosario Paredes Beltrán", ci: "2839102 CB", preTest: 48, postTest: 92, satisfaccion: 98, estado: "Culminado" },
    { id: 3, actividadId: 1, participanteNombre: "Prof. Marco Antonio Vargas Soliz", ci: "3482910 LP", preTest: 38, postTest: 84, satisfaccion: 90, estado: "Culminado" },
    { id: 4, actividadId: 2, participanteNombre: "María Elena Quispe Mamani", ci: "4829102 LP", preTest: 45, postTest: 85, satisfaccion: 92, estado: "Culminado" },
    { id: 5, actividadId: 2, participanteNombre: "Luciana Aruquipa Torrez", ci: "7102938 LP", preTest: 35, postTest: 80, satisfaccion: 95, estado: "Culminado" },
    { id: 6, actividadId: 2, participanteNombre: "Carlos Andrés Mendoza Rojas", ci: "6910293 CB", preTest: 50, postTest: 75, satisfaccion: 88, estado: "Culminado" },
    { id: 7, actividadId: 3, participanteNombre: "Alex Flores Choque", ci: "5829103 SC", preTest: 42, postTest: 90, satisfaccion: 96, estado: "Culminado" },
    { id: 8, actividadId: 8, participanteNombre: "Prof. Rosario Paredes Beltrán", ci: "2839102 CB", preTest: 44, postTest: 88, satisfaccion: 96, estado: "Culminado" },
    { id: 9, actividadId: 8, participanteNombre: "Carlos Andrés Mendoza Rojas", ci: "6910293 CB", preTest: 52, postTest: 90, satisfaccion: 94, estado: "Culminado" }
  ],
  preregistros: [
    { id: 1, actividadId: 1, nombre: "Camila Belén Rocha Fernández", ci: "8392019 LP", celular: "71234567", edad: 21, genero: "F", rol: "Estudiante Universitario/a", institucion: "Universidad Mayor de San Andrés (UMSA)", confirmado: true, asistenciaConfirmada: true, comentarios: "Interesada en réplicas con jóvenes universitarios", fecha: "2026-10-02 09:30" },
    { id: 2, actividadId: 1, nombre: "Jhonny Alex Choque Quispe", ci: "9102938 LP", celular: "76543210", edad: 23, genero: "M", rol: "Líder Juvenil / Red Tú Decides", institucion: "Red Tú Decides La Paz", confirmado: true, asistenciaConfirmada: true, comentarios: "", fecha: "2026-10-03 14:15" },
    { id: 3, actividadId: 1, nombre: "Daniela Paola Mendoza Torrico", ci: "7829104 LP", celular: "72091823", edad: 20, genero: "F", rol: "Estudiante Universitario/a", institucion: "UMSA - Psicología", confirmado: false, asistenciaConfirmada: false, comentarios: "Pendiente confirmar permiso universitario", fecha: "2026-10-04 11:00" },
    { id: 4, actividadId: 2, nombre: "Mateo Ignacio Siles Heredia", ci: "6718290 CB", celular: "73489012", edad: 16, genero: "M", rol: "Estudiante de Secundaria", institucion: "Colegio Calama", confirmado: true, asistenciaConfirmada: true, comentarios: "", fecha: "2026-10-04 16:40" },
    { id: 5, actividadId: 8, nombre: "Valeria Andrea Castro Morales", ci: "5910283 CB", celular: "74019283", edad: 17, genero: "F", rol: "Estudiante de Secundaria", institucion: "U.E. Sucre", confirmado: true, asistenciaConfirmada: true, comentarios: "", fecha: "2026-10-05 10:20" }
  ],
  asistenciasTalleres: [
    {
      id: 1,
      actividadId: 10,
      tallerId: 101,
      ci: "4829102 LP",
      nombre: "María Elena Quispe Mamani",
      nombres: "María Elena Quispe Mamani",
      celular: "71234567",
      telefono: "71234567",
      edad: 19,
      genero: "Femenino",
      rol: "Lideresa Red Tú Decides",
      institucion: "Distrito 4 - El Alto",
      fechaHora: "2024-04-05 15:10",
      horaExacta: "15:10",
      firmaDataUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='55'><path d='M15 35 Q35 10 55 32 T95 20 T145 40' stroke='%230f172a' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>"
    },
    {
      id: 2,
      actividadId: 10,
      tallerId: 101,
      ci: "6910293 CB",
      nombre: "Carlos Andrés Mendoza Rojas",
      nombres: "Carlos Andrés Mendoza Rojas",
      celular: "72345678",
      telefono: "72345678",
      edad: 22,
      genero: "Masculino",
      rol: "Estudiante Universitario",
      institucion: "Cercado",
      fechaHora: "2024-04-05 15:12",
      horaExacta: "15:12",
      firmaDataUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='55'><path d='M10 30 Q45 8 65 28 T105 18 T150 35' stroke='%230f172a' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>"
    },
    {
      id: 3,
      actividadId: 1,
      tallerId: 1,
      ci: "8392019 LP",
      nombre: "Camila Belén Rocha Fernández",
      nombres: "Camila Belén Rocha Fernández",
      celular: "71234567",
      telefono: "71234567",
      edad: 21,
      genero: "Femenino",
      rol: "Estudiante Universitario/a",
      institucion: "UMSA - Psicología",
      fechaHora: "2026-09-18 08:35",
      horaExacta: "08:35",
      firmaDataUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='55'><path d='M20 40 Q50 12 80 35 T120 12 T150 30' stroke='%230f172a' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>"
    }
  ],
  usuarios: [
    { id: 1, nombre: "Admin General", username: "admin", email: "admin@cies.org.bo", password: "cies2026", ci: "4829101 LP", procedencia: "La Paz", regional: "LP", roles: ["Administrador"], rol: "Administrador", cargo: "Administrador del Sistema", estado: "Activo" },
    { id: 2, nombre: "Dr. Roberto Vargas", username: "rvargas", email: "director@cies.org.bo", password: "cies2026", ci: "2839102 LP", procedencia: "La Paz", regional: "Nacional", roles: ["Director ejecutivo CIES"], rol: "Director ejecutivo CIES", cargo: "Director Ejecutivo CIES", estado: "Activo" },
    { id: 3, nombre: "Lic. Valeria Quiroga", username: "vquiroga", email: "proyectos@cies.org.bo", password: "cies2026", ci: "3482910 LP", procedencia: "La Paz", regional: "Nacional", roles: ["Gerente Nacional de Proyectos"], rol: "Gerente Nacional de Proyectos", cargo: "Gerente Nacional de Proyectos", estado: "Activo" },
    { id: 4, nombre: "Lic. Andrea Paz", username: "apaz", email: "apaz@cies.org.bo", password: "cies2026", ci: "4829103 LP", procedencia: "La Paz", regional: "LP", roles: ["Educador"], rol: "Educador", cargo: "Educadora Comunitaria", estado: "Activo" },
    { id: 5, nombre: "Lic. Miriam Morales", username: "mmorales", email: "mmorales@cies.org.bo", password: "cies2026", ci: "5910294 LP", procedencia: "El Alto", regional: "EA", roles: ["Orientador"], rol: "Orientador", cargo: "Orientadora SSSR", estado: "Activo" },
    { id: 6, nombre: "Lic. Pedro Guzmán", username: "pguzman", email: "pguzman@cies.org.bo", password: "cies2026", ci: "6910293 CBBA", procedencia: "Cochabamba - Cercado", regional: "CBBA", roles: ["Responsable Regional", "Educador"], rol: "Responsable Regional y Educador", cargo: "Responsable Regional y Educador", modulos: ["Dashboard", "Participantes", "Actividades", "Digitalizacion"], permisosAdicionales: ["exportar", "validar_sgc", "supervisar"], estado: "Activo" },
    { id: 7, nombre: "Lic. Gabriela Rojas", username: "grojas", email: "grojas@cies.org.bo", password: "cies2026", ci: "5829103 SCZ", procedencia: "Santa Cruz de la Sierra", regional: "SCZ", roles: ["Investigadora Educadora"], rol: "Investigadora Educadora", cargo: "Investigadora Educadora", estado: "Activo" },
    { id: 8, nombre: "Lic. Fernando Soto", username: "fsoto", email: "fsoto@cies.org.bo", password: "cies2026", ci: "7102938 LP", procedencia: "La Paz", regional: "LP", roles: ["Responsable del Programa"], rol: "Responsable del Programa", cargo: "Responsable del Programa EIS", estado: "Activo" },
    { id: 9, nombre: "Lic. Carlos Méndez", username: "cmendez", email: "cmendez@cies.org.bo", password: "cies2026", ci: "4920194 TJA", procedencia: "Tarija", regional: "TJA", roles: ["Asistente Educador"], rol: "Asistente Educador", cargo: "Asistente Educador", estado: "Activo" },
    { id: 10, nombre: "Lic. Beatriz Linares", username: "blinares", email: "blinares@cies.org.bo", password: "cies2026", ci: "3920194 LP", procedencia: "La Paz", regional: "Nacional", roles: ["Responsable Nacional"], rol: "Responsable Nacional", cargo: "Responsable Nacional Educativo", modulos: ["Participantes", "Actividades"], permisosAdicionales: ["exportar", "validar_sgc", "supervisar"], estado: "Activo" },
    { id: 11, nombre: "Lic. Marcelo Suárez", username: "msuarez", email: "gerencia@cies.org.bo", password: "cies2026", ci: "6102938 LP", procedencia: "La Paz", regional: "Nacional", roles: ["Gerencia"], rol: "Gerencia", cargo: "Supervisor Gerencial", estado: "Activo" }
  ]
};

// Carga y guardado local
function getDB() {
  const data = localStorage.getItem("CIES_DEMO_DB_V10");
  if (!data) {
    localStorage.setItem("CIES_DEMO_DB_V10", JSON.stringify(INITIAL_DATA));
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }
  const db = JSON.parse(data);
  let updated = false;
  if (db.usuarios && Array.isArray(db.usuarios)) {
    // Si la lista de usuarios existente es la versión previa, sincronizar con el catálogo oficial de roles
    INITIAL_DATA.usuarios.forEach(initU => {
      const idx = db.usuarios.findIndex(u => u.email === initU.email || u.id === initU.id);
      if (idx === -1) {
        db.usuarios.push(initU);
        updated = true;
      } else {
        if (!db.usuarios[idx].username) {
          db.usuarios[idx].username = initU.username;
          updated = true;
        }
        if (!db.usuarios[idx].procedencia && initU.procedencia) {
          db.usuarios[idx].procedencia = initU.procedencia;
          updated = true;
        }
        if (!db.usuarios[idx].ci && initU.ci) {
          db.usuarios[idx].ci = initU.ci;
          updated = true;
        }
        if (initU.id === 6) { // Pedro Guzmán: Responsable Regional y Educador
          db.usuarios[idx].roles = initU.roles;
          db.usuarios[idx].rol = initU.rol;
          db.usuarios[idx].cargo = initU.cargo;
          db.usuarios[idx].modulos = initU.modulos;
          db.usuarios[idx].permisosAdicionales = initU.permisosAdicionales;
          updated = true;
        } else if (initU.id === 10) { // Beatriz Linares: Responsable Nacional
          db.usuarios[idx].roles = initU.roles;
          db.usuarios[idx].rol = initU.rol;
          db.usuarios[idx].cargo = initU.cargo;
          db.usuarios[idx].modulos = initU.modulos;
          db.usuarios[idx].permisosAdicionales = initU.permisosAdicionales;
          updated = true;
        } else if (!db.usuarios[idx].roles && initU.roles) {
          db.usuarios[idx].roles = initU.roles;
          updated = true;
        }
      }
    });
    db.usuarios.forEach(u => {
      if (!u.password) {
        u.password = "cies2026";
        updated = true;
      }
    });
  }

  // Sincronizar sedes regionales y actividades oficiales
  if (db.actividades && Array.isArray(db.actividades)) {
    INITIAL_DATA.actividades.forEach(initA => {
      const idx = db.actividades.findIndex(a => a.id === initA.id);
      if (idx === -1) {
        if (initA.id === 10) {
          db.actividades.unshift(initA);
        } else {
          db.actividades.push(initA);
        }
        updated = true;
      } else {
        if (!db.actividades[idx].regional) {
          db.actividades[idx].regional = initA.regional;
          updated = true;
        }
        if (db.actividades[idx].conEjecucionPresupuestaria === undefined) {
          db.actividades[idx].conEjecucionPresupuestaria = (initA.conEjecucionPresupuestaria !== undefined) ? initA.conEjecucionPresupuestaria : true;
          updated = true;
        }
        if (db.actividades[idx].gastos === undefined && initA.gastos) {
          db.actividades[idx].gastos = JSON.parse(JSON.stringify(initA.gastos));
          db.actividades[idx].totalPresupuesto = initA.totalPresupuesto || 0;
          updated = true;
        }
        if (initA.esProcesoEducativo && !db.actividades[idx].esProcesoEducativo) {
          db.actividades[idx].esProcesoEducativo = initA.esProcesoEducativo;
          db.actividades[idx].documentoGeneral = initA.documentoGeneral;
          db.actividades[idx].talleres = initA.talleres;
          db.actividades[idx].totalHoras = initA.totalHoras;
          updated = true;
        }
        // Asegurar que la actividad 10 mantenga su formato oficial CIES Líderes 5_4_24 con las 3 fases (Planificación, Ejecución, Documentación)
        if (initA.id === 10 && (!db.actividades[idx].talleres || !db.actividades[idx].talleres[0] || !db.actividades[idx].talleres[0].planificadorOficial || !db.actividades[idx].talleres[0].ejecucion || !db.actividades[idx].talleres[0].documentacion)) {
          db.actividades[idx].talleres = JSON.parse(JSON.stringify(initA.talleres));
          db.actividades[idx].totalPresupuesto = initA.totalPresupuesto;
          db.actividades[idx].totalHoras = initA.totalHoras;
          db.actividades[idx].documentoGeneral = initA.documentoGeneral;
          updated = true;
        }
      }
    });

    // Auto-sanación de aforos de talleres si fueron sobreescritos accidentalmente por conteos de asistencia
    db.actividades.forEach(act => {
      const aforoPlanificado = act.participantesCount || 25;
      if (act.talleres && Array.isArray(act.talleres)) {
        act.talleres.forEach(t => {
          if (!t.aforo || t.aforo < 10) {
            t.aforo = aforoPlanificado;
            updated = true;
          }
          if (!t.participantes || t.participantes < 10) {
            t.participantes = t.aforo || aforoPlanificado;
            updated = true;
          }
        });
      }
    });
  }

  // Sincronizar evaluaciones Pre/Post
  if (db.evaluacionesPrePost && Array.isArray(db.evaluacionesPrePost)) {
    INITIAL_DATA.evaluacionesPrePost.forEach(initE => {
      const idx = db.evaluacionesPrePost.findIndex(e => e.id === initE.id);
      if (idx === -1) {
        db.evaluacionesPrePost.push(initE);
        updated = true;
      }
    });
  }

  // Sincronizar prerregistros previos al inicio
  if (!db.preregistros || !Array.isArray(db.preregistros)) {
    db.preregistros = INITIAL_DATA.preregistros ? JSON.parse(JSON.stringify(INITIAL_DATA.preregistros)) : [];
    updated = true;
  } else {
    INITIAL_DATA.preregistros.forEach(initP => {
      const idx = db.preregistros.findIndex(p => p.id === initP.id);
      if (idx === -1) {
        db.preregistros.push(initP);
        updated = true;
      }
    });
  }

  // Sincronizar asistencias de talleres con firmas touch
  if (!db.asistenciasTalleres || !Array.isArray(db.asistenciasTalleres)) {
    db.asistenciasTalleres = INITIAL_DATA.asistenciasTalleres ? JSON.parse(JSON.stringify(INITIAL_DATA.asistenciasTalleres)) : [];
    updated = true;
  } else {
    (INITIAL_DATA.asistenciasTalleres || []).forEach(initA => {
      const idx = db.asistenciasTalleres.findIndex(a => a.id === initA.id);
      if (idx === -1) {
        db.asistenciasTalleres.push(initA);
        updated = true;
      }
    });
  }

  if (updated) {
    localStorage.setItem("CIES_DEMO_DB_V10", JSON.stringify(db));
  }
  return db;
}

function saveDB(db) {
  localStorage.setItem("CIES_DEMO_DB_V10", JSON.stringify(db));
  renderCurrentView();
  updateDashboardKPIs();
}

function resetDatabase() {
  if (confirm("¿Restablecer la base de datos a los datos iniciales normativos de CIES 2026?")) {
    localStorage.setItem("CIES_DEMO_DB_V10", JSON.stringify(INITIAL_DATA));
    showToast("Datos restablecidos con la configuración oficial CIES 2026", "info");
    const curr = getCurrentUser();
    if (curr) {
      const match = INITIAL_DATA.usuarios.find(u => u.id === curr.id) || INITIAL_DATA.usuarios[0];
      setCurrentUser(match);
      updateAuthUI();
    }
    renderCurrentView();
    updateDashboardKPIs();
  }
}

// =============================================================
// GESTIÓN DE SESIÓN Y AUTENTICACIÓN (LOGIN DEMO CIES 2026)
// =============================================================
let currentUser = null;

function getInitials(name) {
  if (!name) return "CI";
  const clean = name.replace(/^Lic\.\s*|^Dr\.\s*|^Dra\.\s*|^Prof\.\s*|^Ing\.\s*/i, "").trim();
  const parts = clean.split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return clean.substring(0, 2).toUpperCase();
}

function getRoleColor(rol) {
  if (!rol) return "bg-blue-600 text-white";
  const r = rol.toLowerCase();
  if (r.includes("administrador")) return "bg-blue-600 text-white";
  if (r.includes("director ejecutivo")) return "bg-purple-700 text-white";
  if (r.includes("gerente nacional") || r.includes("gerencia")) return "bg-purple-600 text-white";
  if (r.includes("responsable nacional")) return "bg-teal-700 text-white";
  if (r.includes("responsable regional")) return "bg-teal-600 text-white";
  if (r.includes("responsable del programa")) return "bg-emerald-600 text-white";
  if (r.includes("educador") || r.includes("facilitador")) return "bg-indigo-600 text-white";
  if (r.includes("investigadora")) return "bg-cyan-600 text-white";
  if (r.includes("asistente")) return "bg-sky-600 text-white";
  if (r.includes("orientador")) return "bg-rose-600 text-white";
  if (r.includes("monitoreo")) return "bg-emerald-600 text-white";
  return "bg-slate-700 text-white";
}

// Catálogo normativo CIES de Roles y sus Presets de Permisos
const ROLE_PRESETS = {
  "Administrador": {
    badge: "bg-blue-600 text-white",
    modulos: ["Dashboard", "Participantes", "Actividades", "Orientadores", "Incidencia", "Informes", "Digitalizacion", "Administracion"],
    permisos: ["exportar", "validar_sgc", "editar_registros", "supervisar"]
  },
  "Gerencia": {
    badge: "bg-purple-600 text-white",
    modulos: ["Dashboard", "Participantes", "Actividades", "Orientadores", "Incidencia", "Informes", "Digitalizacion"],
    permisos: ["exportar", "validar_sgc", "supervisar"]
  },
  "Gerente Nacional de Proyectos": {
    badge: "bg-purple-600 text-white",
    modulos: ["Dashboard", "Participantes", "Actividades", "Orientadores", "Incidencia", "Informes", "Digitalizacion"],
    permisos: ["exportar", "validar_sgc", "supervisar"]
  },
  "Director ejecutivo CIES": {
    badge: "bg-purple-700 text-white",
    modulos: ["Dashboard", "Participantes", "Actividades", "Orientadores", "Incidencia", "Informes", "Digitalizacion", "Administracion"],
    permisos: ["exportar", "validar_sgc", "editar_registros", "supervisar"]
  },
  "Responsable Nacional": {
    badge: "bg-teal-700 text-white",
    modulos: ["Participantes", "Actividades"],
    permisos: ["exportar", "validar_sgc", "supervisar"]
  },
  "Responsable Regional": {
    badge: "bg-teal-600 text-white",
    modulos: ["Participantes", "Actividades"],
    permisos: ["exportar", "validar_sgc", "supervisar"]
  },
  "Educador": {
    badge: "bg-indigo-600 text-white",
    modulos: ["Dashboard", "Participantes", "Actividades", "Digitalizacion"],
    permisos: ["exportar"]
  },
  "Facilitador": {
    badge: "bg-indigo-600 text-white",
    modulos: ["Dashboard", "Participantes", "Actividades", "Digitalizacion"],
    permisos: ["exportar"]
  },
  "Responsable del Programa": {
    badge: "bg-teal-600 text-white",
    modulos: ["Dashboard", "Participantes", "Actividades", "Orientadores", "Informes", "Digitalizacion"],
    permisos: ["exportar", "validar_sgc"]
  },
  "Investigadora Educadora": {
    badge: "bg-cyan-600 text-white",
    modulos: ["Dashboard", "Participantes", "Actividades", "Digitalizacion"],
    permisos: ["exportar"]
  },
  "Asistente Educador": {
    badge: "bg-sky-600 text-white",
    modulos: ["Dashboard", "Participantes", "Actividades", "Digitalizacion"],
    permisos: ["exportar"]
  },
  "Orientador": {
    badge: "bg-rose-600 text-white",
    modulos: ["Dashboard", "Participantes", "Orientadores", "Digitalizacion"],
    permisos: ["exportar", "validar_sgc"]
  }
};

// Detalles institucionales y enfoque por rol para diferenciación visual en pantalla
const ROLE_DETAILS = {
  "Administrador": {
    descripcion: "Control total del sistema, parametrización de variables, auditoría SGC ISO 9001, administración de usuarios y acceso irrestricto a todos los módulos.",
    enfoque: "Auditoría & Control Total",
    panelInicio: "dashboard"
  },
  "Director ejecutivo CIES": {
    descripcion: "Máxima dirección institucional: visión estratégica global, cumplimiento de metas institucionales de país y toma de decisiones ejecutivas.",
    enfoque: "Dirección Estratégica",
    panelInicio: "dashboard"
  },
  "Gerente Nacional de Proyectos": {
    descripcion: "Dirección operativa de proyectos nacionales, cumplimiento de convenios con cooperantes y seguimiento a indicadores multirregionales.",
    enfoque: "Gestión de Proyectos",
    panelInicio: "dashboard"
  },
  "Gerencia": {
    descripcion: "Supervisión institucional gerencial, evaluación de rendimiento programático y cumplimiento de compromisos institucionales.",
    enfoque: "Supervisión Gerencial",
    panelInicio: "dashboard"
  },
  "Responsable Nacional": {
    descripcion: "Supervisión técnica de actividades educativas y control de participantes a nivel nacional.",
    enfoque: "Supervisión Educativa Nacional",
    panelInicio: "actividades"
  },
  "Responsable Regional": {
    descripcion: "Supervisión territorial in situ de actividades educativas y control de participantes a nivel regional.",
    enfoque: "Supervisión Educativa Regional",
    panelInicio: "actividades"
  },
  "Educador": {
    descripcion: "Gestión educativa en aula y comunidad: registro de participantes EIS, planillas de asistencia (SGC-Apoyo-ABS-3-pp3) y evaluación Pre/Post.",
    enfoque: "Ejecución Educativa en Aula",
    panelInicio: "actividades"
  },
  "Facilitador": {
    descripcion: "Gestión educativa en aula y comunidad: registro de participantes EIS, planillas de asistencia (SGC-Apoyo-ABS-3-pp3) y evaluación Pre/Post.",
    enfoque: "Ejecución Educativa en Aula",
    panelInicio: "actividades"
  },
  "Responsable del Programa": {
    descripcion: "Coordinación de programas temáticos específicos (EIS, SSRR, Red Tú Decides), monitoreo de réplicas docentes e informes de alcance.",
    enfoque: "Coordinación Pedagógica",
    panelInicio: "actividades"
  },
  "Investigadora Educadora": {
    descripcion: "Investigación metodológica, aplicación de pruebas pedagógicas, sistematización de evidencias y talleres formativos EIS.",
    enfoque: "Investigación Pedagógica",
    panelInicio: "actividades"
  },
  "Asistente Educador": {
    descripcion: "Apoyo operativo en talleres educativos, control de firmas de participantes, logística de refrigerios y respaldo de campo.",
    enfoque: "Apoyo Operativo Educativo",
    panelInicio: "participantes"
  },
  "Orientador": {
    descripcion: "Atención individual y confidencial en SSSR, tamizaje de violencia (Ley 348), pruebas rápidas de VIH (Ley 3729) y validación técnica de evidencias.",
    enfoque: "Atención Individual SSSR & Validación",
    panelInicio: "orientadores"
  }
};

// Extraer lista limpia de roles a partir de un usuario o cadena compuesta (ej. "Responsable Regional y Educador")
function extractRolesList(userOrRol) {
  if (!userOrRol) return [];
  if (Array.isArray(userOrRol)) {
    return Array.from(new Set(userOrRol.flatMap(item => extractRolesList(item))));
  }
  if (typeof userOrRol === "object") {
    if (Array.isArray(userOrRol.roles) && userOrRol.roles.length > 0) {
      return Array.from(new Set(userOrRol.roles.flatMap(item => extractRolesList(item))));
    }
    return extractRolesList(userOrRol.rol);
  }
  if (typeof userOrRol === "string") {
    const raw = userOrRol.trim();
    if (!raw) return [];
    if (ROLE_PRESETS[raw]) return [raw];

    const knownKeys = Object.keys(ROLE_PRESETS).sort((a, b) => b.length - a.length);
    const matched = [];
    let lower = raw.toLowerCase();
    for (const k of knownKeys) {
      if (lower.includes(k.toLowerCase())) {
        matched.push(k);
        lower = lower.replace(k.toLowerCase(), " ");
      }
    }
    if (matched.length > 0) return Array.from(new Set(matched));
    return raw.split(/\s*(?:y|\/|,|;|\+)\s*/i).filter(Boolean);
  }
  return [];
}

// Obtener la unión ordenada de módulos permitidos según uno o más roles asignados
function getCombinedRoleModules(roles) {
  const roleList = extractRolesList(roles);
  if (roleList.length === 0) return ["Dashboard", "Participantes", "Actividades"];

  // Si el usuario ÚNICAMENTE es Responsable Nacional o Responsable Regional (sin otro cargo), restringir exclusivamente
  const onlyRespEducativo = roleList.every(r => {
    const lr = r.toLowerCase();
    return lr.includes("responsable nacional") || lr.includes("responsable regional") || lr.includes("responsable educativo");
  });
  if (onlyRespEducativo) {
    return ["Participantes", "Actividades"];
  }

  const modulesSet = new Set();
  roleList.forEach(r => {
    const preset = getRolePreset(r);
    if (preset && Array.isArray(preset.modulos)) {
      preset.modulos.forEach(m => modulesSet.add(m));
    }
  });

  const standardOrder = ["Dashboard", "Participantes", "Actividades", "Orientadores", "Incidencia", "Informes", "Digitalizacion", "Administracion"];
  const res = standardOrder.filter(m => modulesSet.has(m));
  return res.length > 0 ? res : ["Participantes", "Actividades"];
}

// Obtener la unión de permisos permitidos según uno o más roles asignados
function getCombinedRolePermissions(roles) {
  const roleList = extractRolesList(roles);
  if (roleList.length === 0) return ["exportar"];

  const permSet = new Set();
  roleList.forEach(r => {
    const preset = getRolePreset(r);
    if (preset && Array.isArray(preset.permisos)) {
      preset.permisos.forEach(p => permSet.add(p));
    }
  });
  return Array.from(permSet);
}

function getRoleDetails(rol) {
  if (!rol) return ROLE_DETAILS["Educador"] || ROLE_DETAILS["Facilitador"];
  const roles = extractRolesList(rol);
  if (roles.length > 1) {
    const enfoques = roles.map(r => {
      const d = ROLE_DETAILS[r] || getRolePreset(r);
      return d.enfoque || r;
    }).filter(Boolean);
    return {
      descripcion: `Perfil institucional multi-cargo CIES (${roles.join(" y ")}). Permite supervisión y ejecución pedagógica combinada.`,
      enfoque: enfoques.join(" | "),
      panelInicio: "actividades"
    };
  }
  for (const key of Object.keys(ROLE_DETAILS)) {
    if (rol.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(rol.toLowerCase())) {
      return ROLE_DETAILS[key];
    }
  }
  return {
    descripcion: "Acceso a funciones operativas y seguimiento pedagógico en el Sistema Educativo CIES.",
    enfoque: "Operativo Institucional",
    panelInicio: "actividades"
  };
}

function getRoleAllowedModules(rol) {
  return getCombinedRoleModules(rol);
}

function isModuleAllowedForUser(panelId, user) {
  if (!user) return true;
  const userRoles = extractRolesList(user.roles || user.rol);
  if (userRoles.some(r => r.includes("Administrador") || r.includes("Director ejecutivo"))) return true;

  const allowedMods = (user.modulos && user.modulos.length > 0)
    ? user.modulos
    : getCombinedRoleModules(userRoles);

  const panelToModName = {
    "dashboard": "Dashboard",
    "participantes": "Participantes",
    "actividades": "Actividades",
    "orientadores": "Orientadores",
    "incidencia": "Incidencia",
    "informes": "Informes",
    "digitalizacion": "Digitalizacion",
    "administracion": "Administracion"
  };
  const modName = panelToModName[panelId];
  if (!modName) return true;
  return allowedMods.some(m => m.toLowerCase().includes(modName.toLowerCase()) || modName.toLowerCase().includes(m.toLowerCase()));
}

function getRolePreset(role) {
  if (!role) return ROLE_PRESETS["Educador"] || ROLE_PRESETS["Facilitador"];
  if (ROLE_PRESETS[role]) return ROLE_PRESETS[role];
  for (const key of Object.keys(ROLE_PRESETS)) {
    if (role.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(role.toLowerCase())) {
      return ROLE_PRESETS[key];
    }
  }
  return {
    badge: "bg-slate-700 text-white",
    modulos: ["Dashboard", "Participantes", "Actividades", "Digitalizacion"],
    permisos: ["exportar"]
  };
}

function handleRolePresetChange(role) {
  handleRolesCheckboxChange();
}

// -------------------------------------------------------------
// CONTROLADORES DE SELECCIÓN MÚLTIPLE DE CARGOS Y ROLES
// -------------------------------------------------------------
function getSelectedRegisterRoles() {
  const checkboxes = document.querySelectorAll('input[name="reg-roles"]:checked');
  return Array.from(checkboxes).map(cb => cb.value);
}

function handleRolesCheckboxChange() {
  const roles = getSelectedRegisterRoles();
  const counterEl = document.getElementById("reg-roles-counter");
  const badgesEl = document.getElementById("reg-selected-roles-badges");
  const modulesEl = document.getElementById("reg-auto-modules-list");
  const permsEl = document.getElementById("reg-auto-perms-list");
  const hiddenRolInput = document.getElementById("reg-rol");
  const cargoInput = document.getElementById("reg-cargo");

  // Resaltado visual interactivo de tarjetas seleccionadas
  document.querySelectorAll('.role-checkbox-card').forEach(card => {
    const input = card.querySelector('input[type="checkbox"]');
    if (input && input.checked) {
      card.classList.add("border-blue-600", "bg-blue-50/70", "ring-1", "ring-blue-500");
      card.classList.remove("border-slate-200");
    } else {
      card.classList.remove("border-blue-600", "bg-blue-50/70", "ring-1", "ring-blue-500");
      card.classList.add("border-slate-200");
    }
  });

  if (counterEl) {
    if (roles.length === 0) {
      counterEl.textContent = "Ningún cargo seleccionado";
      counterEl.className = "text-[10px] text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full font-bold border border-rose-200";
    } else if (roles.length === 1) {
      counterEl.textContent = "1 cargo asignado";
      counterEl.className = "text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full font-bold border border-blue-200";
    } else {
      counterEl.textContent = `${roles.length} cargos combinados`;
      counterEl.className = "text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold border border-emerald-200";
    }
  }

  const combinedRolStr = roles.join(" y ");
  if (hiddenRolInput) hiddenRolInput.value = combinedRolStr;

  // Sugerir automáticamente en cargo si no fue editado manualmente
  if (cargoInput && (!cargoInput.dataset.manual || cargoInput.dataset.manual === "false")) {
    cargoInput.value = combinedRolStr;
  }

  if (badgesEl) {
    if (roles.length === 0) {
      badgesEl.innerHTML = '<span class="text-rose-500 italic text-[11px]">Debe seleccionar al menos un cargo</span>';
    } else {
      badgesEl.innerHTML = roles.map(r => {
        const preset = getRolePreset(r);
        return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold ${preset.badge} shadow-xs">
          ${r}
          <button type="button" onclick="toggleRoleCheckbox('${r}', false)" class="hover:text-rose-200 ml-0.5 font-black leading-none cursor-pointer" title="Quitar cargo">&times;</button>
        </span>`;
      }).join(" ");
    }
  }

  const modules = getCombinedRoleModules(roles);
  const perms = getCombinedRolePermissions(roles);

  if (modulesEl) {
    modulesEl.textContent = modules.length > 0 ? modules.join(", ") : "Ninguno";
  }
  if (permsEl) {
    permsEl.textContent = perms.length > 0 ? perms.join(", ") : "Ninguno";
  }
}

function toggleRoleCheckbox(roleName, checked) {
  const cb = document.querySelector(`input[name="reg-roles"][value="${roleName}"]`);
  if (cb) {
    cb.checked = checked;
    handleRolesCheckboxChange();
  }
}

function getSelectedUsrRoles() {
  const checkboxes = document.querySelectorAll('input[name="usr-roles"]:checked');
  return Array.from(checkboxes).map(cb => cb.value);
}

function handleUsrRolesCheckboxChange() {
  const roles = getSelectedUsrRoles();
  const counterEl = document.getElementById("usr-roles-counter");
  const hiddenInput = document.getElementById("usr-rol");

  if (counterEl) {
    if (roles.length === 0) {
      counterEl.textContent = "0 cargos";
      counterEl.className = "text-[10px] text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full font-bold";
    } else if (roles.length === 1) {
      counterEl.textContent = "1 cargo";
      counterEl.className = "text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full font-bold";
    } else {
      counterEl.textContent = `${roles.length} cargos combinados`;
      counterEl.className = "text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold";
    }
  }

  if (hiddenInput) {
    hiddenInput.value = roles.join(" y ");
  }
}

// Funciones auxiliares para autocompletar usuario y alternar visibilidad de contraseña
let userEditedUsername = false;

function handleUsernameManualEdit() {
  userEditedUsername = true;
}

function handleNameInput() {
  if (userEditedUsername) return;
  const nombres = document.getElementById("reg-nombres")?.value.trim() || "";
  const apellidos = document.getElementById("reg-apellidos")?.value.trim() || "";
  const usernameInput = document.getElementById("reg-username");
  if (!usernameInput) return;

  if (nombres && apellidos) {
    const firstLetter = nombres.split(/\s+/)[0][0].toLowerCase();
    const firstLastName = apellidos.split(/\s+/)[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
    usernameInput.value = `${firstLetter}${firstLastName}`;
  } else if (nombres) {
    usernameInput.value = nombres.split(/\s+/)[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
  }
}

function handleEmailInput(input) {
  if (userEditedUsername) return;
  const usernameInput = document.getElementById("reg-username");
  if (!usernameInput) return;
  if (!usernameInput.value && input.value && input.value.includes("@")) {
    const prefix = input.value.split("@")[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9._-]/g, "");
    usernameInput.value = prefix;
  }
}

function handlePhoneInput(input) {
  if (!input) return;
  input.value = input.value.replace(/\D/g, "").slice(0, 8);
}

function handleContractPdfChange(input) {
  const infoEl = document.getElementById("reg-contrato-info");
  if (!input || !input.files || input.files.length === 0) {
    if (infoEl) infoEl.innerHTML = "(Opcional) Adjunte el archivo escaneado o digital del contrato firmado en formato PDF";
    return;
  }
  const file = input.files[0];
  const isPdf = file.name.toLowerCase().endsWith(".pdf") || file.type === "application/pdf";
  if (!isPdf) {
    showRegisterError("El archivo seleccionado no es un documento PDF válido. Por favor seleccione un archivo en formato .pdf.");
    input.value = "";
    if (infoEl) infoEl.innerHTML = '<span class="text-rose-600 font-semibold">Archivo no válido: seleccione un documento PDF (.pdf)</span>';
    return;
  }

  const maxBytes = 10 * 1024 * 1024;
  if (file.size > maxBytes) {
    showRegisterError("El documento excede el tamaño máximo permitido de 10 MB.");
    input.value = "";
    if (infoEl) infoEl.innerHTML = '<span class="text-rose-600 font-semibold">El archivo supera el límite de 10 MB</span>';
    return;
  }

  const sizeKb = (file.size / 1024).toFixed(1);
  if (infoEl) {
    infoEl.innerHTML = `<span class="text-emerald-700 font-semibold flex items-center gap-1.5">
      <svg class="w-3.5 h-3.5 text-emerald-600 shrink-0 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
      Documento PDF verificado: <strong>${file.name}</strong> (${sizeKb} KB)
    </span>`;
  }
}

function toggleRegPassword(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (!input) return;
  if (input.type === "password") {
    input.type = "text";
    if (icon) icon.classList.add("text-blue-600");
  } else {
    input.type = "password";
    if (icon) icon.classList.remove("text-blue-600");
  }
}

function getCurrentUser() {
  if (currentUser) {
    if (!currentUser.modulos || currentUser.modulos.length === 0) {
      currentUser.modulos = getCombinedRoleModules(currentUser.roles || currentUser.rol);
    }
    return currentUser;
  }
  const raw = localStorage.getItem("CIES_AUTH_USER") || sessionStorage.getItem("CIES_AUTH_USER");
  if (raw) {
    try {
      currentUser = JSON.parse(raw);
      if (!currentUser.modulos || currentUser.modulos.length === 0) {
        currentUser.modulos = getCombinedRoleModules(currentUser.roles || currentUser.rol);
      }
      return currentUser;
    } catch (e) {
      console.error("Error al leer usuario de sesión:", e);
      return null;
    }
  }
  return null;
}

function setCurrentUser(user, remember = true) {
  currentUser = user;
  if (remember) {
    localStorage.setItem("CIES_AUTH_USER", JSON.stringify(user));
    sessionStorage.removeItem("CIES_AUTH_USER");
  } else {
    sessionStorage.setItem("CIES_AUTH_USER", JSON.stringify(user));
    localStorage.removeItem("CIES_AUTH_USER");
  }
}

function clearCurrentUser() {
  currentUser = null;
  localStorage.removeItem("CIES_AUTH_USER");
  sessionStorage.removeItem("CIES_AUTH_USER");
}

function checkAuth() {
  const user = getCurrentUser();
  const loginScreen = document.getElementById("login-screen");
  const appLayout = document.getElementById("app-layout");

  if (!user) {
    if (loginScreen) loginScreen.classList.remove("hidden");
    if (appLayout) appLayout.classList.add("hidden");
    return false;
  }

  if (loginScreen) loginScreen.classList.add("hidden");
  if (appLayout) appLayout.classList.remove("hidden");
  updateAuthUI();
  return true;
}

function updateAuthUI() {
  const user = getCurrentUser();
  if (!user) return;

  const initials = getInitials(user.nombre);
  const roleColor = getRoleColor(user.rol);
  const roleDetails = getRoleDetails(user.rol);

  // 1. Indicador Principal Superior en el Header: "Esta es la pantalla de: [Rol Asignado]"
  const headerPantallaRol = document.getElementById("header-pantalla-rol-badge");
  if (headerPantallaRol) {
    headerPantallaRol.textContent = user.rol;
    headerPantallaRol.className = `px-2.5 py-0.5 rounded-lg text-xs font-extrabold text-white ${roleColor} shadow-xs whitespace-nowrap uppercase tracking-wider`;
  }

  // 2. Banner Superior de Diferenciación por Rol
  const bannerAvatar = document.getElementById("banner-rol-avatar");
  const bannerNombre = document.getElementById("banner-rol-nombre");
  const bannerFuncionario = document.getElementById("banner-rol-funcionario");
  const bannerRegional = document.getElementById("banner-rol-regional");
  const bannerDesc = document.getElementById("banner-rol-descripcion");
  const bannerEnfoque = document.getElementById("banner-rol-enfoque");
  const bannerModulosCount = document.getElementById("banner-rol-modulos-count");

  if (bannerAvatar) {
    bannerAvatar.textContent = initials;
    bannerAvatar.className = `w-12 h-12 rounded-xl ${roleColor} text-white flex items-center justify-center font-extrabold text-base shrink-0 shadow-sm`;
  }
  if (bannerNombre) {
    bannerNombre.textContent = user.rol;
    bannerNombre.className = `px-3 py-1 rounded-lg text-xs sm:text-sm font-extrabold text-white ${roleColor} tracking-wide shadow-xs`;
  }
  if (bannerFuncionario) bannerFuncionario.textContent = user.nombre;
  if (bannerRegional) bannerRegional.textContent = user.regional || user.sede || "Oficina Central";
  if (bannerDesc) bannerDesc.textContent = roleDetails.descripcion;
  if (bannerEnfoque) bannerEnfoque.textContent = roleDetails.enfoque;

  const allowedMods = (user.modulos && user.modulos.length > 0)
    ? user.modulos
    : getRoleAllowedModules(user.rol);
  if (bannerModulosCount) bannerModulosCount.textContent = allowedMods.length;

  // 3. Header Usuario (perfil a la derecha)
  const headerAvatar = document.getElementById("header-user-avatar");
  const headerName = document.getElementById("header-user-name");
  const headerRole = document.getElementById("header-user-role");
  const headerRegional = document.getElementById("header-user-regional");

  if (headerAvatar) {
    headerAvatar.textContent = initials;
    headerAvatar.className = `w-8 h-8 rounded-full ${roleColor} flex items-center justify-center font-bold text-xs shrink-0 shadow-sm`;
  }
  if (headerName) headerName.textContent = user.nombre;
  if (headerRole) headerRole.textContent = user.rol;
  if (headerRegional) headerRegional.textContent = user.regional || user.sede || "LP";

  // 4. Sidebar Perfil
  const sideAvatar = document.getElementById("sidebar-user-avatar");
  const sideName = document.getElementById("sidebar-user-name");
  const sideRole = document.getElementById("sidebar-user-role");

  if (sideAvatar) {
    sideAvatar.textContent = initials;
    sideAvatar.className = `w-7 h-7 rounded-full ${roleColor} font-bold text-xs flex items-center justify-center shrink-0`;
  }
  if (sideName) sideName.textContent = user.nombre;
  if (sideRole) sideRole.textContent = user.rol;

  // 5. Ocultar completamente los módulos no permitidos para el rol (como si no existiesen)
  document.querySelectorAll(".nav-link").forEach(btn => {
    const pId = btn.getAttribute("data-panel");
    const allowed = isModuleAllowedForUser(pId, user);

    const oldBadge = btn.querySelector(".nav-role-lock");
    if (oldBadge) oldBadge.remove();

    if (allowed) {
      btn.classList.remove("hidden", "opacity-40", "cursor-not-allowed");
      btn.removeAttribute("title");
    } else {
      btn.classList.add("hidden");
    }
  });

  // Ocultar encabezados de grupos del menú si todos sus módulos hijos están ocultos
  const navGroups = [
    { headerId: "nav-group-metas", panels: ["dashboard"] },
    { headerId: "nav-group-misional", panels: ["participantes", "actividades", "orientadores", "incidencia"] },
    { headerId: "nav-group-documental", panels: ["informes", "digitalizacion", "administracion"] }
  ];

  navGroups.forEach(g => {
    const headerEl = document.getElementById(g.headerId);
    if (headerEl) {
      const anyAllowed = g.panels.some(p => isModuleAllowedForUser(p, user));
      if (anyAllowed) {
        headerEl.classList.remove("hidden");
      } else {
        headerEl.classList.add("hidden");
      }
    }
  });

  // 6. Configuración de Vista de Supervisión para Responsable Educativo (Nacional y Regional)
  const regionalBanner = document.getElementById("actividades-regional-banner");
  const isResponsableRegional = (user.rol || "").toLowerCase().includes("responsable regional");
  const isResponsableNacional = (user.rol || "").toLowerCase().includes("responsable nacional");
  const isResponsableEducativo = isResponsableRegional || isResponsableNacional || (user.rol || "").toLowerCase().includes("responsable educativo");

  if (regionalBanner) {
    if (isResponsableEducativo) {
      regionalBanner.classList.remove("hidden");
      const userReg = user.regional || user.sede || (isResponsableNacional ? "Nacional" : "CBBA");
      const regNameMap = {
        "LP": "La Paz (LP)",
        "EA": "El Alto (EA)",
        "CBBA": "Cochabamba (CBBA)",
        "SCZ": "Santa Cruz (SCZ)",
        "SU": "Sucre (SU)",
        "TJA": "Tarija (TJA)",
        "PTS": "Potosí (PTS)",
        "OR": "Oruro (OR)",
        "BENI": "Beni (BENI)",
        "Nacional": "Oficina Central Nacional"
      };
      const regLabel = regNameMap[userReg] || `${userReg}`;
      const regBannerTitle = document.getElementById("reg-banner-nombre-regional");
      const tagRegActiva = document.getElementById("tag-regional-activa");
      const bannerTitleEl = document.getElementById("reg-banner-titulo-rol");
      const bannerDescEl = document.getElementById("reg-banner-desc-rol");

      if (regBannerTitle) regBannerTitle.textContent = regLabel;
      if (tagRegActiva) tagRegActiva.textContent = userReg;
      if (bannerTitleEl) {
        bannerTitleEl.textContent = isResponsableNacional
          ? "Vista de Supervisión del Responsable Educativo Nacional"
          : "Vista de Supervisión del Responsable Educativo Regional";
      }
      if (bannerDescEl) {
        bannerDescEl.textContent = isResponsableNacional
          ? "Supervisión metodológica y técnica nacional de actividades educativas y fiscalización de planillas en las 9 oficinas regionales."
          : "Monitoreo territorial in situ de facilitadores, fiscalización de planillas de asistencia y control del impacto pedagógico en su departamento.";
      }
    } else {
      regionalBanner.classList.add("hidden");
    }
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById("login-email");
  const passInput = document.getElementById("login-password");
  const rememberInput = document.getElementById("login-remember");
  const errorAlert = document.getElementById("login-error-alert");

  const loginVal = emailInput.value.trim().toLowerCase();
  const passVal = passInput.value.trim();
  const remember = rememberInput ? rememberInput.checked : true;

  if (errorAlert) errorAlert.classList.add("hidden");

  const db = getDB();
  // Buscar usuario por correo institucional, nombre de usuario (@username) o nombre exacto
  const user = db.usuarios.find(u => {
    const userEmail = (u.email || "").toLowerCase();
    const userPrefix = userEmail.split("@")[0];
    const username = (u.username || "").toLowerCase();
    const userNombre = (u.nombre || "").toLowerCase();
    return userEmail === loginVal || userPrefix === loginVal || username === loginVal || userNombre === loginVal;
  });

  if (!user) {
    showLoginError("El correo institucional o usuario ingresado no existe en el sistema CIES. Puedes crear una cuenta nueva con el botón de abajo.");
    return;
  }

  if (user.estado === "Inactivo") {
    showLoginError("Esta cuenta institucional se encuentra inactiva. Comunícate con el Administrador / Coordinador CIES.");
    return;
  }

  // Validación de contraseña:
  // Acepta la contraseña del usuario, la clave general de demo 'cies2026', o 'admin' para la cuenta de administrador.
  const isValidPass =
    passVal === (user.password || "cies2026") ||
    passVal === "cies2026" ||
    (user.email === "admin@cies.org.bo" && (passVal === "admin" || passVal === "admin123"));

  if (!isValidPass) {
    showLoginError("Contraseña incorrecta. (Nota: Para la demostración puedes usar la clave: <strong>cies2026</strong> o <strong>admin</strong>).");
    return;
  }

  // Éxito en autenticación
  setCurrentUser(user, remember);
  checkAuth();
  const roleDetails = getRoleDetails(user.rol);
  const targetPanel = (roleDetails && roleDetails.panelInicio && isModuleAllowedForUser(roleDetails.panelInicio, user))
    ? roleDetails.panelInicio
    : "dashboard";
  navigateTo(targetPanel);
  showToast(`¡Bienvenido/a al Sistema CIES! Esta es la pantalla de: ${user.rol}`, "success");
}

function showLoginError(msg) {
  const errorAlert = document.getElementById("login-error-alert");
  const errorText = document.getElementById("login-error-text");
  if (errorAlert && errorText) {
    errorText.innerHTML = msg;
    errorAlert.classList.remove("hidden");
  }
}

let currentRegisterStep = 1;

function goToRegisterStep(targetStep) {
  const alertEl = document.getElementById("register-error-alert");
  if (alertEl) alertEl.classList.add("hidden");

  // Validaciones rigurosas cuando se avanza hacia un paso posterior
  if (targetStep > currentRegisterStep) {
    if (currentRegisterStep === 1) {
      const nombres = (document.getElementById("reg-nombres")?.value || "").trim();
      const apellidos = (document.getElementById("reg-apellidos")?.value || "").trim();
      const ci = (document.getElementById("reg-ci")?.value || "").trim();
      const procedencia = (document.getElementById("reg-procedencia")?.value || "").trim();
      const email = (document.getElementById("reg-email")?.value || "").trim().toLowerCase();
      const telefono = (document.getElementById("reg-telefono")?.value || "").trim();

      if (!nombres) {
        showRegisterError("Por favor ingrese los Nombres del funcionario.");
        document.getElementById("reg-nombres")?.focus();
        return;
      }
      if (!apellidos) {
        showRegisterError("Por favor ingrese los Apellidos del funcionario.");
        document.getElementById("reg-apellidos")?.focus();
        return;
      }
      const ciNumero = (document.getElementById("reg-ci")?.value || "").trim();
      const ciExt = (document.getElementById("reg-ci-ext")?.value || "").trim();

      if (!ciNumero) {
        showRegisterError("Por favor ingrese el número de Cédula de Identidad.");
        document.getElementById("reg-ci")?.focus();
        return;
      }
      if (!ciExt) {
        showRegisterError("Por favor seleccione la extensión departamental de la Cédula de Identidad.");
        document.getElementById("reg-ci-ext")?.focus();
        return;
      }
      if (!procedencia) {
        showRegisterError("Por favor ingrese la Procedencia del funcionario (ej. La Paz, El Alto, Cercado, etc.).");
        document.getElementById("reg-procedencia")?.focus();
        return;
      }
      if (!email || !email.includes("@") || !email.includes(".")) {
        showRegisterError("Por favor ingrese un Correo Electrónico Institucional válido (ej. usuario@cies.org.bo).");
        document.getElementById("reg-email")?.focus();
        return;
      }
      const cleanTel = telefono.replace(/\D/g, "");
      if (!cleanTel || cleanTel.length !== 8) {
        showRegisterError("El número de celular debe contener exactamente 8 dígitos numéricos (ej. 71234567).");
        document.getElementById("reg-telefono")?.focus();
        return;
      }

      const db = getDB();
      const existeEmail = db.usuarios.some(u => (u.email || "").toLowerCase() === email);
      if (existeEmail) {
        showRegisterError(`El correo institucional "<strong>${email}</strong>" ya se encuentra registrado en el sistema.`);
        document.getElementById("reg-email")?.focus();
        return;
      }
    } else if (currentRegisterStep === 2) {
      const cargo = (document.getElementById("reg-cargo")?.value || "").trim();
      const area = (document.getElementById("reg-area")?.value || "").trim();
      const sede = (document.getElementById("reg-sede")?.value || "").trim();
      const superior = (document.getElementById("reg-superior")?.value || "").trim();
      const selectedRoles = getSelectedRegisterRoles();

      if (!cargo) {
        showRegisterError("Por favor especifique el Cargo Institucional formal.");
        document.getElementById("reg-cargo")?.focus();
        return;
      }
      if (!area) {
        showRegisterError("Por favor seleccione el Área o Programa institucional de dependencia.");
        document.getElementById("reg-area")?.focus();
        return;
      }
      if (!sede) {
        showRegisterError("Por favor seleccione la Sede o Regional CIES correspondiente.");
        document.getElementById("reg-sede")?.focus();
        return;
      }
      if (selectedRoles.length === 0) {
        showRegisterError("Por favor seleccione al menos un Cargo / Rol Institucional para el funcionario.");
        return;
      }
      if (!superior) {
        showRegisterError("Por favor indique el Responsable o Superior Inmediato de supervisión.");
        document.getElementById("reg-superior")?.focus();
        return;
      }

      const contratoInput = document.getElementById("reg-contrato-pdf");
      const hasContrato = contratoInput && contratoInput.files && contratoInput.files.length > 0;
      if (hasContrato) {
        const file = contratoInput.files[0];
        const isPdf = file.name.toLowerCase().endsWith(".pdf") || file.type === "application/pdf";
        if (!isPdf) {
          showRegisterError("El documento de contrato adjunto debe ser obligatoriamente un archivo en formato PDF (.pdf).");
          contratoInput?.focus();
          return;
        }
      }

      handleRolesCheckboxChange();
    } else if (currentRegisterStep === 3) {
      const username = (document.getElementById("reg-username")?.value || "").trim().toLowerCase();
      const password = document.getElementById("reg-password")?.value || "";
      const passwordConfirm = document.getElementById("reg-password-confirm")?.value || "";

      if (!username || username.length < 3) {
        showRegisterError("El Nombre de Usuario debe contener al menos 3 caracteres.");
        document.getElementById("reg-username")?.focus();
        return;
      }

      const db = getDB();
      const existeUser = db.usuarios.some(u => (u.username || "").toLowerCase() === username);
      if (existeUser) {
        showRegisterError(`El nombre de usuario "<strong>@${username}</strong>" ya se encuentra asignado. Por favor elija otro.`);
        document.getElementById("reg-username")?.focus();
        return;
      }

      if (!password || password.length < 4) {
        showRegisterError("La contraseña institucional debe contener al menos 4 caracteres.");
        document.getElementById("reg-password")?.focus();
        return;
      }

      if (password !== passwordConfirm) {
        showRegisterError("Las contraseñas no coinciden. Por favor verifique ambos campos.");
        document.getElementById("reg-password-confirm")?.focus();
        return;
      }
    }
  }

  currentRegisterStep = targetStep;

  // Alternar visibilidad de los pasos
  for (let s = 1; s <= 3; s++) {
    const stepEl = document.getElementById(`reg-step-${s}`);
    const indicatorEl = document.getElementById(`step-indicator-${s}`);

    if (stepEl) {
      if (s === targetStep) {
        stepEl.classList.remove("hidden");
      } else {
        stepEl.classList.add("hidden");
      }
    }

    if (indicatorEl) {
      if (s < targetStep) {
        indicatorEl.className = "p-2 rounded-lg border border-slate-700 bg-slate-800 text-emerald-300 font-medium transition-all";
        indicatorEl.innerHTML = `<span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] mr-1.5 font-bold">✓</span><span class="hidden sm:inline">${getStepLabel(s)}</span><span class="sm:hidden">${getStepShortLabel(s)}</span>`;
      } else if (s === targetStep) {
        indicatorEl.className = "p-2 rounded-lg border border-blue-600 bg-blue-50 text-blue-900 font-bold shadow-sm transition-all";
        indicatorEl.innerHTML = `<span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] mr-1.5 font-black">${s}</span><span class="hidden sm:inline">${getStepLabel(s)}</span><span class="sm:hidden">${getStepShortLabel(s)}</span>`;
      } else {
        indicatorEl.className = "p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 font-medium transition-all";
        indicatorEl.innerHTML = `<span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-600 text-[10px] mr-1.5 font-bold">${s}</span><span class="hidden sm:inline">${getStepLabel(s)}</span><span class="sm:hidden">${getStepShortLabel(s)}</span>`;
      }
    }
  }

  // Actualizar rastreador
  const trackerLabel = document.getElementById("step-tracker-label");
  const trackerPercent = document.getElementById("step-tracker-percent");
  const trackerData = [
    { label: "Paso 1 de 3: Filiación e Identificación Personal", pct: "33%" },
    { label: "Paso 2 de 3: Dependencia y Cargo Institucional CIES", pct: "66%" },
    { label: "Paso 3 de 3: Credenciales y Seguridad de Acceso", pct: "100%" }
  ];

  if (trackerLabel && trackerData[targetStep - 1]) {
    trackerLabel.textContent = trackerData[targetStep - 1].label;
  }
  if (trackerPercent && trackerData[targetStep - 1]) {
    trackerPercent.textContent = `Avance: ${trackerData[targetStep - 1].pct}`;
  }

  const container = document.getElementById("register-view-container");
  if (container) container.scrollTop = 0;
}

function getStepLabel(step) {
  switch (step) {
    case 1: return "Datos Personales";
    case 2: return "Institucionales";
    case 3: return "Acceso al Sistema";
    default: return "";
  }
}

function getStepShortLabel(step) {
  switch (step) {
    case 1: return "Personal";
    case 2: return "Institución";
    case 3: return "Acceso";
    default: return "";
  }
}

function showRegisterView() {
  const wrapper = document.getElementById("auth-card-wrapper");
  const loginView = document.getElementById("login-view-container");
  const registerView = document.getElementById("register-view-container");
  const loginAlert = document.getElementById("login-error-alert");
  const regAlert = document.getElementById("register-error-alert");

  if (wrapper) {
    wrapper.classList.remove("max-w-lg");
    wrapper.classList.add("max-w-2xl");
  }

  if (loginAlert) loginAlert.classList.add("hidden");
  if (regAlert) regAlert.classList.add("hidden");

  if (loginView) loginView.classList.add("hidden");
  if (registerView) registerView.classList.remove("hidden");

  const fechaInput = document.getElementById("reg-fecha-creacion");
  if (fechaInput) {
    const hoy = new Date();
    fechaInput.value = hoy.toISOString().split("T")[0];
  }

  // Inicializar selección con Educador por defecto si no hay ninguno seleccionado
  const selected = getSelectedRegisterRoles();
  if (selected.length === 0) {
    const defaultCb = document.querySelector('input[name="reg-roles"][value="Educador"]');
    if (defaultCb) defaultCb.checked = true;
  }
  handleRolesCheckboxChange();

  userEditedUsername = false;

  goToRegisterStep(1);

  const regNombres = document.getElementById("reg-nombres");
  if (regNombres) regNombres.focus();
}

function showLoginView() {
  const wrapper = document.getElementById("auth-card-wrapper");
  const loginView = document.getElementById("login-view-container");
  const registerView = document.getElementById("register-view-container");
  const loginAlert = document.getElementById("login-error-alert");
  const regAlert = document.getElementById("register-error-alert");

  if (wrapper) {
    wrapper.classList.remove("max-w-2xl", "max-w-3xl");
    wrapper.classList.add("max-w-lg");
  }

  if (loginAlert) loginAlert.classList.add("hidden");
  if (regAlert) regAlert.classList.add("hidden");

  if (registerView) registerView.classList.add("hidden");
  if (loginView) loginView.classList.remove("hidden");

  const loginEmail = document.getElementById("login-email");
  if (loginEmail) loginEmail.focus();
}

function showRegisterError(msg) {
  const alertEl = document.getElementById("register-error-alert");
  const textEl = document.getElementById("register-error-text");
  if (alertEl && textEl) {
    textEl.innerHTML = msg;
    alertEl.classList.remove("hidden");
  }
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const alertEl = document.getElementById("register-error-alert");
  if (alertEl) alertEl.classList.add("hidden");

  // 1. Datos Personales
  const nombres = document.getElementById("reg-nombres")?.value.trim() || "";
  const apellidos = document.getElementById("reg-apellidos")?.value.trim() || "";
  const ciNumero = document.getElementById("reg-ci")?.value.trim() || "";
  const ciComp = (document.getElementById("reg-ci-comp")?.value || "").trim().toUpperCase();
  const ciExt = document.getElementById("reg-ci-ext")?.value.trim() || "LP";
  const procedencia = document.getElementById("reg-procedencia")?.value.trim() || "";

  let ciLimpio = ciNumero.replace(new RegExp(`\\s+${ciExt}$`, 'i'), '').trim();
  if (ciComp) {
    const cleanComp = ciComp.replace(/^-/, '');
    ciLimpio = ciLimpio.replace(new RegExp(`[- ]?${cleanComp}$`, 'i'), '').trim();
  }
  const ci = ciComp 
    ? `${ciLimpio}-${ciComp.replace(/^-/, '')} ${ciExt}`.trim()
    : `${ciLimpio} ${ciExt}`.trim();
  const email = document.getElementById("reg-email")?.value.trim().toLowerCase() || "";
  const telefono = document.getElementById("reg-telefono")?.value.trim() || "";

  // 2. Datos Institucionales
  const cargo = document.getElementById("reg-cargo")?.value.trim() || "";
  const area = document.getElementById("reg-area")?.value || "";
  const sede = document.getElementById("reg-sede")?.value || "LP";
  const rol = document.getElementById("reg-rol")?.value || "Facilitador";
  const superior = document.getElementById("reg-superior")?.value.trim() || "";
  const contratoInput = document.getElementById("reg-contrato-pdf");
  let contratoPdfNombre = "";
  if (contratoInput && contratoInput.files && contratoInput.files.length > 0) {
    contratoPdfNombre = contratoInput.files[0].name;
  }

  // 3. Acceso al Sistema
  const username = document.getElementById("reg-username")?.value.trim().toLowerCase() || "";
  const fechaCreacion = document.getElementById("reg-fecha-creacion")?.value || new Date().toISOString().split("T")[0];
  const password = document.getElementById("reg-password")?.value || "";
  const passwordConfirm = document.getElementById("reg-password-confirm")?.value || "";

  // Validaciones completas
  if (!nombres || !apellidos || !email || !ciNumero || !procedencia || !cargo || !username) {
    showRegisterError("Por favor complete todos los campos requeridos (*) en cada sección.");
    return;
  }

  const cleanTel = telefono.replace(/\D/g, "");
  if (!cleanTel || cleanTel.length !== 8) {
    goToRegisterStep(1);
    showRegisterError("El número de celular debe contener exactamente 8 dígitos numéricos (ej. 71234567).");
    document.getElementById("reg-telefono")?.focus();
    return;
  }

  if (password !== passwordConfirm) {
    showRegisterError("Las contraseñas no coinciden. Por favor verifique ambos campos.");
    return;
  }

  if (password.length < 4) {
    showRegisterError("La contraseña debe tener al menos 4 caracteres.");
    return;
  }

  if (username.length < 3) {
    showRegisterError("El nombre de usuario debe tener al menos 3 caracteres.");
    return;
  }

  const db = getDB();
  const existeEmail = db.usuarios.some(u => (u.email || "").toLowerCase() === email);
  if (existeEmail) {
    showRegisterError(`El correo institucional "<strong>${email}</strong>" ya se encuentra registrado. Inicie sesión con sus credenciales.`);
    return;
  }

  const existeUser = db.usuarios.some(u => (u.username || "").toLowerCase() === username);
  if (existeUser) {
    showRegisterError(`El nombre de usuario "<strong>@${username}</strong>" ya está en uso. Por favor elija otro.`);
    return;
  }

  // 4. Asignación automática de Módulos y Permisos según los Cargos / Roles seleccionados
  const selectedRoles = getSelectedRegisterRoles();
  const rolesList = selectedRoles.length > 0 ? selectedRoles : extractRolesList(rol);
  const finalRolStr = rolesList.length > 0 ? rolesList.join(" y ") : (rol || "Educador");
  const modulos = getCombinedRoleModules(rolesList);
  const permisosAdicionales = getCombinedRolePermissions(rolesList);

  const newUser = {
    id: Date.now(),
    nombre: `${nombres} ${apellidos}`.trim(),
    nombres: nombres,
    apellidos: apellidos,
    ci: ci,
    procedencia: procedencia,
    email: email,
    telefono: cleanTel,
    cargo: cargo || finalRolStr,
    area: area,
    regional: sede,
    sede: sede,
    roles: rolesList,
    rol: finalRolStr,
    superior: superior,
    contratoPdf: contratoPdfNombre || null,
    username: username,
    password: password,
    fechaCreacion: fechaCreacion,
    modulos: modulos,
    permisosAdicionales: permisosAdicionales,
    estado: "Activo"
  };

  db.usuarios.push(newUser);
  saveDB(db);

  document.getElementById("form-register").reset();
  const contratoInfoEl = document.getElementById("reg-contrato-info");
  if (contratoInfoEl) contratoInfoEl.innerHTML = "(Opcional) Adjunte el archivo escaneado o digital del contrato firmado en formato PDF";
  goToRegisterStep(1);
  showLoginView();

  setCurrentUser(newUser, true);
  checkAuth();
  const roleDetails = getRoleDetails(newUser.rol);
  const targetPanel = (roleDetails && roleDetails.panelInicio && isModuleAllowedForUser(roleDetails.panelInicio, newUser))
    ? roleDetails.panelInicio
    : "dashboard";
  navigateTo(targetPanel);
  showToast(`¡Usuario institucional creado! Módulos y permisos asignados automáticamente para: ${newUser.rol}`, "success");
}

function quickLoginDemo(userId) {
  const db = getDB();
  const user = db.usuarios.find(u => u.id === userId);
  if (!user) {
    showToast("Perfil de usuario no encontrado", "warning");
    return;
  }

  const emailInput = document.getElementById("login-email");
  const passInput = document.getElementById("login-password");
  if (emailInput) emailInput.value = user.email;
  if (passInput) passInput.value = user.password || "cies2026";

  setCurrentUser(user, true);
  checkAuth();
  navigateTo("dashboard");
  showToast(`Ingreso exitoso como: ${user.nombre} (${user.rol})`, "success");
}

function logout() {
  if (confirm("¿Estás seguro de que deseas cerrar sesión en el Sistema CIES?")) {
    clearCurrentUser();
    const loginAlert = document.getElementById("login-error-alert");
    if (loginAlert) loginAlert.classList.add("hidden");
    const regAlert = document.getElementById("register-error-alert");
    if (regAlert) regAlert.classList.add("hidden");
    showLoginView();
    closeModal("modal-switch-user");
    checkAuth();
    showToast("Has cerrado sesión en el Sistema Educativo CIES", "info");
  }
}

function togglePasswordVisibility() {
  const input = document.getElementById("login-password");
  const eyeOpen = document.getElementById("pass-eye-open");
  const eyeClosed = document.getElementById("pass-eye-closed");
  if (!input) return;

  if (input.type === "password") {
    input.type = "text";
    if (eyeOpen) eyeOpen.classList.add("hidden");
    if (eyeClosed) eyeClosed.classList.remove("hidden");
  } else {
    input.type = "password";
    if (eyeOpen) eyeOpen.classList.remove("hidden");
    if (eyeClosed) eyeClosed.classList.add("hidden");
  }
}

function openSwitchUserModal() {
  const modal = document.getElementById("modal-switch-user");
  const container = document.getElementById("switch-user-list");
  if (!modal || !container) return;

  const db = getDB();
  const curr = getCurrentUser();

  const groups = [
    { title: "Administración", roles: ["Administrador"] },
    { title: "Gerencia", roles: ["Gerente Nacional de Proyectos", "Director ejecutivo CIES", "Gerencia"] },
    { title: "Responsable educativo", roles: ["Responsable Nacional", "Responsable Regional"] },
    { title: "Equipo Educativo y Operativo", roles: ["Facilitador", "Responsable del Programa", "Investigadora Educadora", "Asistente Educador", "Orientador"] }
  ];

  let html = "";
  const renderedIds = new Set();

  groups.forEach(g => {
    const list = db.usuarios.filter(u => g.roles.some(r => (u.rol || "").toLowerCase().includes(r.toLowerCase()) || r.toLowerCase().includes((u.rol || "").toLowerCase())));
    if (list.length === 0) return;

    html += `
      <div class="pt-2 pb-1 first:pt-0">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[11px] font-bold text-slate-600 uppercase tracking-wider">${g.title}</span>
          <span class="text-[10px] text-slate-400 font-medium">${list.length} perfil(es)</span>
        </div>
        <div class="space-y-2">
    `;

    list.forEach(u => {
      renderedIds.add(u.id);
      const isCurrent = curr && curr.id === u.id;
      const initials = getInitials(u.nombre);
      const roleColor = getRoleColor(u.rol);

      html += `
        <div class="p-3 rounded-xl border ${isCurrent ? 'border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/20' : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'} transition-all flex items-center justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-9 h-9 rounded-xl ${roleColor} font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
              ${initials}
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <p class="text-xs font-bold text-slate-800 truncate">${u.nombre}</p>
                ${isCurrent ? '<span class="px-1.5 py-0.2 text-[9px] font-bold bg-blue-600 text-white rounded-full">En uso</span>' : ''}
              </div>
              <p class="text-[11px] text-slate-500 truncate">${u.rol} • Reg: ${u.regional || 'Nacional'}${u.procedencia ? ` • 📍 ${u.procedencia}` : ''}</p>
              <p class="text-[10px] text-slate-400 font-mono">${u.email}</p>
            </div>
          </div>
          <div>
            ${isCurrent
              ? '<span class="text-xs text-blue-600 font-bold px-2 py-1">Actual</span>'
              : `<button onclick="switchUserTo(${u.id})" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors cursor-pointer">Cambiar</button>`
            }
          </div>
        </div>
      `;
    });

    html += `</div></div>`;
  });

  // Otros usuarios o creados dinámicamente que no hayan entrado en los grupos anteriores
  const rest = db.usuarios.filter(u => !renderedIds.has(u.id));
  if (rest.length > 0) {
    html += `
      <div class="pt-2 pb-1">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Otros Perfiles</span>
          <span class="text-[10px] text-slate-400 font-medium">${rest.length} perfil(es)</span>
        </div>
        <div class="space-y-2">
    `;
    rest.forEach(u => {
      const isCurrent = curr && curr.id === u.id;
      const initials = getInitials(u.nombre);
      const roleColor = getRoleColor(u.rol);
      html += `
        <div class="p-3 rounded-xl border ${isCurrent ? 'border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/20' : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'} transition-all flex items-center justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-9 h-9 rounded-xl ${roleColor} font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
              ${initials}
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <p class="text-xs font-bold text-slate-800 truncate">${u.nombre}</p>
                ${isCurrent ? '<span class="px-1.5 py-0.2 text-[9px] font-bold bg-blue-600 text-white rounded-full">En uso</span>' : ''}
              </div>
              <p class="text-[11px] text-slate-500 truncate">${u.rol} • Reg: ${u.regional || 'Nacional'}${u.procedencia ? ` • 📍 ${u.procedencia}` : ''}</p>
              <p class="text-[10px] text-slate-400 font-mono">${u.email}</p>
            </div>
          </div>
          <div>
            ${isCurrent
              ? '<span class="text-xs text-blue-600 font-bold px-2 py-1">Actual</span>'
              : `<button onclick="switchUserTo(${u.id})" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors cursor-pointer">Cambiar</button>`
            }
          </div>
        </div>
      `;
    });
    html += `</div></div>`;
  }

  container.innerHTML = html;
  modal.classList.remove("hidden");
}

function switchUserTo(userId) {
  const db = getDB();
  const user = db.usuarios.find(u => u.id === userId);
  if (!user) return;

  if (user.estado === "Inactivo") {
    showToast("No se puede cambiar a un usuario inactivo", "warning");
    return;
  }

  setCurrentUser(user, true);
  closeModal("modal-switch-user");
  updateAuthUI();

  // Si el panel actual no está permitido para el nuevo rol, cambiar a su panel preferente
  const roleDetails = getRoleDetails(user.rol);
  if (!isModuleAllowedForUser(currentPanel, user)) {
    const target = (roleDetails && roleDetails.panelInicio && isModuleAllowedForUser(roleDetails.panelInicio, user))
      ? roleDetails.panelInicio
      : "dashboard";
    navigateTo(target);
  } else {
    renderCurrentView();
  }

  showToast(`Esta es la pantalla de: ${user.rol} (${user.nombre})`, "success");
}

// Navegación de paneles
let currentPanel = "dashboard";

function navigateTo(panelId) {
  const user = getCurrentUser();
  if (user && !isModuleAllowedForUser(panelId, user)) {
    showToast(`Acceso restringido: El módulo no está habilitado para la pantalla del rol "${user.rol}".`, "warning");
    return;
  }

  currentPanel = panelId;

  document.querySelectorAll(".nav-link").forEach(btn => {
    if (btn.getAttribute("data-panel") === panelId) {
      btn.classList.add("bg-blue-700", "text-white", "font-semibold");
      btn.classList.remove("text-slate-300", "hover:bg-slate-800");
    } else {
      btn.classList.remove("bg-blue-700", "text-white", "font-semibold");
      btn.classList.add("text-slate-300", "hover:bg-slate-800");
    }
  });

  document.querySelectorAll(".content-panel").forEach(panel => panel.classList.add("hidden"));
  const activeSection = document.getElementById(`panel-${panelId}`);
  if (activeSection) activeSection.classList.remove("hidden");

  const mobileSidebar = document.getElementById("sidebar");
  if (window.innerWidth < 1024 && mobileSidebar && !mobileSidebar.classList.contains("-translate-x-full")) {
    mobileSidebar.classList.add("-translate-x-full");
  }

  renderCurrentView();
}

function renderCurrentView() {
  switch (currentPanel) {
    case "dashboard":
      updateDashboardKPIs();
      renderTableroOficial();
      break;
    case "participantes":
      renderParticipantes();
      break;
    case "actividades":
      renderActividades();
      break;
    case "actividad-workspace":
      if (currentWorkspaceActId) {
        const faseActual = currentWorkspaceFase || (currentWorkspaceStep === 2 ? 'ejecucion' : (currentWorkspaceStep === 3 ? 'documentacion' : (currentWorkspaceStep === 4 ? 'proceso_resumen' : (currentWorkspaceStep === 5 ? 'proceso_cierre' : 'planificacion'))));
        irAFaseTaller(currentWorkspaceTallerId, faseActual, false);
      } else {
        navigateTo("actividades");
      }
      break;
    case "incidencia":
      renderIncidencia();
      break;
    case "orientadores":
      renderOrientadores();
      break;
    case "informes":
      renderInformes();
      break;
    case "digitalizacion":
      renderDigitalizacion();
      break;
    case "administracion":
      renderUsuarios();
      break;
  }
}

// -------------------------------------------------------------
// PANEL 1: TABLERO / MONITOREO PROGRAMÁTICO 2026
// -------------------------------------------------------------
function updateDashboardKPIs() {
  const db = getDB();

  const elPart = document.getElementById("kpi-participantes");
  const elAct = document.getElementById("kpi-actividades");
  const elOri = document.getElementById("kpi-orientadores");
  const elVih = document.getElementById("kpi-vih");
  const elDoc = document.getElementById("kpi-archivos");

  if (elPart) elPart.innerText = db.participantes.length;
  if (elAct) elAct.innerText = db.actividades.length;
  if (elOri) elOri.innerText = db.orientadores.length;
  
  const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

  // Total de pruebas de VIH registradas en el tablero
  const vihItem = db.tableroMetas2026.find(i => i.codigo === "IND-02");
  if (elVih && vihItem) {
    const totalVih = meses.reduce((sum, m) => sum + (vihItem[m] || 0), 0);
    elVih.innerText = totalVih;
  }
  if (elDoc) elDoc.innerText = db.digitalizacion.length;

  // -------------------------------------------------------------
  // EFICACIA FORMATIVA: SEGUIMIENTO A DOCENTES
  // -------------------------------------------------------------
  const docCapItem = db.tableroMetas2026.find(i => i.codigo === "IND-05A");
  const docActItem = db.tableroMetas2026.find(i => i.codigo === "IND-05B");
  const totalDocCap = docCapItem ? meses.reduce((sum, m) => sum + (docCapItem[m] || 0), 0) : 0;
  const totalDocAct = docActItem ? meses.reduce((sum, m) => sum + (docActItem[m] || 0), 0) : 0;

  const elDocCap = document.getElementById("kpi-docentes-capacitados");
  const elDocAct = document.getElementById("kpi-docentes-activos");
  const elDocTasa = document.getElementById("kpi-docentes-tasa");
  if (elDocCap) elDocCap.innerText = totalDocCap;
  if (elDocAct) elDocAct.innerText = totalDocAct;
  if (elDocTasa) {
    const tasa = totalDocCap > 0 ? Math.round((totalDocAct / totalDocCap) * 100) : 0;
    elDocTasa.innerText = `${tasa}% Activos en Aula`;
  }

  // -------------------------------------------------------------
  // EFICACIA FORMATIVA: SEGUIMIENTO A ESTUDIANTES Y JÓVENES
  // -------------------------------------------------------------
  const estIniItem = db.tableroMetas2026.find(i => i.codigo === "IND-07A");
  const estCulItem = db.tableroMetas2026.find(i => i.codigo === "IND-07B");
  const totalEstIni = estIniItem ? meses.reduce((sum, m) => sum + (estIniItem[m] || 0), 0) : 0;
  const totalEstCul = estCulItem ? meses.reduce((sum, m) => sum + (estCulItem[m] || 0), 0) : 0;

  const elEstIni = document.getElementById("kpi-estudiantes-iniciados");
  const elEstCul = document.getElementById("kpi-estudiantes-culminados");
  const elEstTasa = document.getElementById("kpi-estudiantes-tasa");
  if (elEstIni) elEstIni.innerText = totalEstIni;
  if (elEstCul) elEstCul.innerText = totalEstCul;
  if (elEstTasa) {
    const tasaEst = totalEstIni > 0 ? Math.round((totalEstCul / totalEstIni) * 100) : 0;
    elEstTasa.innerText = `${tasaEst}% Culminados`;
  }

  // Actividades recientes
  const recentContainer = document.getElementById("dashboard-recent-activities");
  if (recentContainer) {
    recentContainer.innerHTML = db.actividades.slice(0, 3).map(act => `
      <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
        <div>
          <p class="font-medium text-slate-800 text-sm">${act.titulo}</p>
          <p class="text-xs text-slate-500">${act.fecha} • Área: <span class="font-semibold text-slate-700">${act.area}</span> • ${act.unidadEducativa}</p>
        </div>
        <span class="px-2.5 py-1 text-xs rounded-full font-medium ${
          act.estado === 'Finalizado' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
        }">${act.estado}</span>
      </div>
    `).join("");
  }
}

function renderTableroOficial() {
  const db = getDB();
  const tbody = document.getElementById("table-tablero-oficial");
  if (!tbody) return;

  const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

  tbody.innerHTML = db.tableroMetas2026.map(item => {
    const logroActual = meses.reduce((sum, m) => sum + (item[m] || 0), 0);
    const pct = item.metaAnual > 0 ? Math.round((logroActual / item.metaAnual) * 100) : 0;
    
    // Color según porcentaje
    let badgeColor = "bg-rose-100 text-rose-800";
    let barColor = "bg-rose-500";
    if (pct >= 70 && pct < 90) {
      badgeColor = "bg-amber-100 text-amber-800";
      barColor = "bg-amber-500";
    } else if (pct >= 90) {
      badgeColor = "bg-emerald-100 text-emerald-800";
      barColor = "bg-emerald-500";
    }

    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
        <td class="py-3 px-4 font-mono text-xs text-blue-700 font-semibold">${item.codigo}</td>
        <td class="py-3 px-4 font-medium text-slate-900">${item.indicador}</td>
        <td class="py-3 px-4 text-slate-700 font-semibold text-right">${item.metaAnual}</td>
        <td class="py-3 px-4 text-blue-700 font-bold text-right">${logroActual}</td>
        <td class="py-3 px-4 text-right">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${badgeColor}">${pct}%</span>
        </td>
        <td class="py-3 px-4 w-36">
          <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div class="${barColor} h-2 rounded-full" style="width: ${Math.min(pct, 100)}%"></div>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

// -------------------------------------------------------------
// PANEL 2: PARTICIPANTES (Campos SGC-Apoyo-ABS-3-pp3)
// -------------------------------------------------------------
function renderParticipantes(search = "") {
  const db = getDB();
  const tbody = document.getElementById("table-participantes");
  if (!tbody) return;

  const filtered = db.participantes.filter(p => {
    const full = `${p.nombres} ${p.apellidos} ${p.ci} ${p.procedencia} ${p.cargoOcupacion} ${p.estadoFormacion || ''}`.toLowerCase();
    return full.includes(search.toLowerCase());
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center py-6 text-slate-400">No se encontraron participantes registrados.</td></tr>`;
    return;
  }

  const getEstadoBadge = (estado, activo) => {
    let badge = "";
    if (estado === "Culminado") {
      badge = '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">🎓 Culminado</span>';
    } else if (estado === "En Proceso") {
      badge = '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">⏳ En Proceso</span>';
    } else if (estado === "Iniciado") {
      badge = '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">🌱 Iniciado</span>';
    } else {
      badge = '<span class="px-2 py-0.5 text-xs font-semibold rounded bg-slate-100 text-slate-600">Asistencia</span>';
    }

    if (activo) {
      badge += '<span class="ml-1.5 px-2 py-0.5 text-[10px] font-bold rounded-full bg-teal-100 text-teal-800 border border-teal-200" title="Activo en réplicas / aula">✓ Activo</span>';
    }
    return badge;
  };

  tbody.innerHTML = filtered.map(p => `
    <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td class="py-3 px-4 font-medium text-slate-900">${p.nombres} ${p.apellidos}</td>
      <td class="py-3 px-4 text-slate-600 font-mono text-xs">${p.ci}</td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 text-xs bg-slate-100 text-slate-700 rounded font-medium">${p.rangoEdad}</span>
        <span class="text-xs text-slate-400">(${p.edad} a)</span>
      </td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 text-xs rounded-full font-medium ${
          p.genero.includes('Trans') ? 'bg-purple-100 text-purple-800' :
          p.genero === 'Femenino' ? 'bg-pink-100 text-pink-800' : 'bg-blue-100 text-blue-800'
        }">${p.genero}</span>
      </td>
      <td class="py-3 px-4 text-slate-600 font-medium text-xs">${p.cargoOcupacion}</td>
      <td class="py-3 px-4 text-slate-600 text-xs">${p.procedencia} (${p.regional})</td>
      <td class="py-3 px-4 whitespace-nowrap">${getEstadoBadge(p.estadoFormacion, p.activoEnAula)}</td>
      <td class="py-3 px-4 text-right space-x-2 whitespace-nowrap">
        <button onclick="editParticipante(${p.id})" class="text-blue-600 hover:text-blue-800 text-xs font-semibold py-1 px-2 rounded hover:bg-blue-50">Editar</button>
        <button onclick="deleteParticipante(${p.id})" class="text-rose-600 hover:text-rose-800 text-xs font-semibold py-1 px-2 rounded hover:bg-rose-50">Eliminar</button>
      </td>
    </tr>
  `).join("");
}

function openModalParticipante(item = null) {
  const modal = document.getElementById("modal-participante");
  const form = document.getElementById("form-participante");
  form.reset();

  if (item) {
    document.getElementById("modal-part-title").innerText = "Editar Participante";
    document.getElementById("part-id").value = item.id;
    document.getElementById("part-nombres").value = item.nombres;
    document.getElementById("part-apellidos").value = item.apellidos;
    document.getElementById("part-ci").value = item.ci;
    document.getElementById("part-edad").value = item.edad;
    document.getElementById("part-rango").value = item.rangoEdad;
    document.getElementById("part-genero").value = item.genero;
    document.getElementById("part-cargo").value = item.cargoOcupacion;
    document.getElementById("part-procedencia").value = item.procedencia;
    document.getElementById("part-regional").value = item.regional || "LP";
    document.getElementById("part-telefono").value = item.telefono || "";
    document.getElementById("part-estado-formacion").value = item.estadoFormacion || "Iniciado";
    document.getElementById("part-activo-aula").checked = !!item.activoEnAula;
  } else {
    document.getElementById("modal-part-title").innerText = "Registrar Nuevo Participante (Planilla Oficial CIES)";
    document.getElementById("part-id").value = "";
    document.getElementById("part-estado-formacion").value = "Iniciado";
    document.getElementById("part-activo-aula").checked = false;
  }
  modal.classList.remove("hidden");
}

function saveParticipante(e) {
  e.preventDefault();
  const db = getDB();
  const idVal = document.getElementById("part-id").value;
  const edad = parseInt(document.getElementById("part-edad").value) || 0;
  
  // Calcular rango institucional CIES
  let rango = "10 a 14";
  if (edad >= 15 && edad <= 19) rango = "15 a 19";
  else if (edad >= 20 && edad <= 24) rango = "20 a 24";
  else if (edad > 24) rango = "> 24";

  const item = {
    id: idVal ? parseInt(idVal) : Date.now(),
    nombres: document.getElementById("part-nombres").value.trim(),
    apellidos: document.getElementById("part-apellidos").value.trim(),
    ci: document.getElementById("part-ci").value.trim(),
    edad: edad,
    rangoEdad: document.getElementById("part-rango").value || rango,
    genero: document.getElementById("part-genero").value,
    cargoOcupacion: document.getElementById("part-cargo").value.trim(),
    procedencia: document.getElementById("part-procedencia").value.trim(),
    regional: document.getElementById("part-regional").value,
    telefono: document.getElementById("part-telefono").value.trim(),
    estadoFormacion: document.getElementById("part-estado-formacion").value,
    activoEnAula: document.getElementById("part-activo-aula").checked,
    fechaRegistro: new Date().toISOString().split("T")[0]
  };

  if (idVal) {
    const idx = db.participantes.findIndex(p => p.id === parseInt(idVal));
    if (idx !== -1) db.participantes[idx] = item;
    showToast("Participante actualizado con éxito", "success");
  } else {
    db.participantes.unshift(item);
    showToast("Participante guardado según formato oficial CIES", "success");
  }

  saveDB(db);
  closeModal("modal-participante");
}

function editParticipante(id) {
  const db = getDB();
  const item = db.participantes.find(p => p.id === id);
  if (item) openModalParticipante(item);
}

function deleteParticipante(id) {
  if (confirm("¿Deseas eliminar este registro de participante?")) {
    const db = getDB();
    db.participantes = db.participantes.filter(p => p.id !== id);
    saveDB(db);
    showToast("Participante eliminado", "warning");
  }
}

// -------------------------------------------------------------
// PANEL 3: ACTIVIDADES Y CONTROL DE ASISTENCIA / MATERIAL
// -------------------------------------------------------------
let filtroSoloRegionalActividades = true;

function toggleFiltroSoloRegional(soloRegional) {
  filtroSoloRegionalActividades = soloRegional;
  const btnReg = document.getElementById("btn-toggle-filtro-regional");
  const btnNac = document.getElementById("btn-toggle-filtro-nacional");
  if (btnReg && btnNac) {
    if (soloRegional) {
      btnReg.className = "px-3 py-1.5 text-xs font-bold rounded-lg bg-teal-600 text-white shadow-xs transition-all";
      btnNac.className = "px-3 py-1.5 text-xs font-semibold rounded-lg text-slate-600 hover:text-slate-900 transition-all";
    } else {
      btnReg.className = "px-3 py-1.5 text-xs font-semibold rounded-lg text-slate-600 hover:text-slate-900 transition-all";
      btnNac.className = "px-3 py-1.5 text-xs font-bold rounded-lg bg-teal-600 text-white shadow-xs transition-all";
    }
  }
  renderActividades();
}

function openModalNuevaSupervisionRegional() {
  const user = getCurrentUser();
  openModalActividad();
  const titleEl = document.getElementById("modal-act-title");
  if (titleEl) titleEl.innerText = "Nueva Planilla de Supervisión Técnica In Situ (SGC-Misional-E-1-ff5)";
  const catEl = document.getElementById("act-categoria");
  if (catEl) catEl.value = "Planilla de Supervisión Técnica (SGC-Misional-E-1-ff5)";
  const tipoEl = document.getElementById("act-tipo");
  if (tipoEl) tipoEl.value = "Supervisión y Control de Calidad";
  if (user) {
    const respEl = document.getElementById("act-responsable");
    if (respEl) respEl.value = user.nombre;
    const regEl = document.getElementById("act-regional");
    if (regEl) regEl.value = user.regional || user.sede || "CBBA";
  }
  const matEl = document.getElementById("act-material");
  if (matEl) matEl.value = "Guía de Supervisión Pedagógica y Ficha Técnica SGC";
}

// -------------------------------------------------------------
// GESTIÓN DE PROCESOS EDUCATIVOS INTEGRALES (NORMATIVA 33 HORAS)
// -------------------------------------------------------------
let talleresProcesoTemp = [];

let currentDetalleProcesoId = null;

function toggleProcesoEducativo(checked) {
  const section = document.getElementById("section-proceso-educativo");
  const modalCard = document.getElementById("modal-act-card");
  const headerBadge = document.getElementById("badge-proceso-horas-header");
  const idVal = document.getElementById("act-id")?.value;
  const btnTop = document.getElementById("btn-top-editar-talleres");
  const btnSec = document.getElementById("btn-sec-editar-talleres");
  const btnFooter = document.getElementById("btn-footer-editar-talleres");

  if (checked) {
    if (section) section.classList.remove("hidden");
    if (modalCard) {
      modalCard.classList.remove("max-w-xl");
      modalCard.classList.add("max-w-3xl");
    }
    if (headerBadge) headerBadge.classList.remove("hidden");
    if (idVal) {
      if (btnTop) btnTop.classList.remove("hidden");
      if (btnSec) btnSec.classList.remove("hidden");
      if (btnFooter) btnFooter.classList.remove("hidden");
    }
    renderTalleresProcesoInputs();
    recalcularHorasProceso();
  } else {
    if (section) section.classList.add("hidden");
    if (modalCard) {
      modalCard.classList.remove("max-w-3xl");
      modalCard.classList.add("max-w-xl");
    }
    if (headerBadge) headerBadge.classList.add("hidden");
    if (btnTop) btnTop.classList.add("hidden");
    if (btnSec) btnSec.classList.add("hidden");
    if (btnFooter) btnFooter.classList.add("hidden");
  }
}

function irAVerModulosYDocDesdeEdicion() {
  const idVal = document.getElementById("act-id")?.value;
  if (!idVal) {
    showToast("Guarda primero la actividad base para asignarle su código y acceder a Ver Módulos y Doc.", "warning");
    return;
  }
  closeModal("modal-actividad");
  verDetalleProceso(parseInt(idVal));
}

function handleProcesoArchivoChange(input) {
  const infoEl = document.getElementById("proc-doc-archivo-info");
  const nombreHidden = document.getElementById("proc-doc-archivo-nombre");
  if (input && input.files && input.files.length > 0) {
    const file = input.files[0];
    const sizeKb = (file.size / 1024).toFixed(1);
    if (nombreHidden) nombreHidden.value = file.name;
    if (infoEl) {
      infoEl.innerHTML = `<span class="text-indigo-700 font-bold">📄 ${file.name} (${sizeKb} KB)</span>`;
    }
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderTalleresProcesoInputs() {
  const tbody = document.getElementById("lista-talleres-proceso");
  if (!tbody) return;

  if (talleresProcesoTemp.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="p-4 text-center">
          <div class="p-3.5 bg-indigo-50/80 rounded-xl border border-indigo-200 text-left max-w-xl mx-auto shadow-2xs">
            <div class="flex items-start gap-2.5">
              <span class="text-base">🌱</span>
              <div>
                <p class="font-bold text-xs text-indigo-950 mb-0.5">Creación Progresiva del Proceso Educativo</p>
                <p class="text-[11px] text-slate-600 leading-relaxed">
                  Al guardar esta actividad se creará el proceso formalmente con su <strong>Documento General</strong>. Los distintos talleres se irán registrando y sumando poco a poco conforme se ejecuten en terreno hasta cumplir la meta de <strong>33 horas pedagógicas</strong>.
                </p>
                <div class="mt-2.5 flex items-center gap-2">
                  <button type="button" onclick="agregarFilaTallerProceso()" class="px-2.5 py-1 bg-white hover:bg-indigo-50 text-indigo-700 text-[11px] font-bold rounded-lg border border-indigo-200 shadow-2xs cursor-pointer">
                    + Agregar Taller Inicial Ahora
                  </button>
                  <button type="button" onclick="cargarPlantilla33Horas()" class="text-[10px] text-indigo-600 hover:text-indigo-800 font-semibold underline cursor-pointer">
                    ⚡ Cargar Plantilla Modelo (Opcional)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    `;
    recalcularHorasProceso();
    return;
  }

  tbody.innerHTML = talleresProcesoTemp.map((t, idx) => `
    <tr class="hover:bg-indigo-50/40 transition-colors">
      <td class="py-2 px-3 font-bold text-slate-500">${idx + 1}</td>
      <td class="py-2 px-2">
        <input type="text" value="${escapeHtml(t.titulo || '')}" placeholder="Nombre del taller / módulo"
          oninput="actualizarTallerProcesoCampo(${idx}, 'titulo', this.value)"
          class="w-full text-xs p-1.5 border border-slate-300 rounded focus:ring-1 focus:ring-indigo-500 font-medium">
        <div class="mt-1 grid grid-cols-2 gap-1 text-[10px]">
          <input type="text" value="${escapeHtml(t.docPlanificacion || '')}" placeholder="📄 Plan: plan.pdf"
            oninput="actualizarTallerProcesoCampo(${idx}, 'docPlanificacion', this.value)"
            class="text-[10px] p-1 border border-blue-200 bg-blue-50/50 rounded text-blue-900 truncate" title="Archivo de Planificación del Taller">
          <input type="text" value="${escapeHtml(t.docAsistencia || '')}" placeholder="👥 Lista: firmas.pdf"
            oninput="actualizarTallerProcesoCampo(${idx}, 'docAsistencia', this.value)"
            class="text-[10px] p-1 border border-emerald-200 bg-emerald-50/50 rounded text-emerald-900 truncate" title="Lista de Participantes / Asistencia">
        </div>
      </td>
      <td class="py-2 px-2">
        <input type="date" value="${t.fecha || ''}"
          onchange="actualizarTallerProcesoCampo(${idx}, 'fecha', this.value)"
          class="w-full text-xs p-1.5 border border-slate-300 rounded focus:ring-1 focus:ring-indigo-500 font-mono">
      </td>
      <td class="py-2 px-2 text-right">
        <input type="number" min="0.5" max="33" step="0.5" value="${t.horas || 0}"
          oninput="actualizarTallerProcesoCampo(${idx}, 'horas', this.value)"
          class="w-full text-xs p-1.5 border border-slate-300 rounded text-right font-extrabold text-indigo-900 focus:ring-1 focus:ring-indigo-500">
      </td>
      <td class="py-2 px-2">
        <input type="text" value="${escapeHtml(t.facilitador || '')}" placeholder="Docente / Facilitador"
          oninput="actualizarTallerProcesoCampo(${idx}, 'facilitador', this.value)"
          class="w-full text-xs p-1.5 border border-slate-300 rounded focus:ring-1 focus:ring-indigo-500">
      </td>
      <td class="py-2 px-2 text-center">
        <button type="button" onclick="eliminarFilaTallerProceso(${idx})" class="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Eliminar taller">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </td>
    </tr>
  `).join("");

  recalcularHorasProceso();
}

function agregarFilaTallerProceso() {
  const user = getCurrentUser();
  const defaultDate = document.getElementById("act-fecha")?.value || new Date().toISOString().split("T")[0];
  const num = talleresProcesoTemp.length + 1;
  talleresProcesoTemp.push({
    id: Date.now() + Math.random(),
    titulo: `Taller ${num}: Módulo Temático de Formación`,
    fecha: defaultDate,
    horas: 8,
    facilitador: user ? user.nombre : "Facilitador/a CIES",
    docPlanificacion: null,
    docAsistencia: null
  });
  renderTalleresProcesoInputs();
}

function eliminarFilaTallerProceso(idx) {
  talleresProcesoTemp.splice(idx, 1);
  renderTalleresProcesoInputs();
}

function actualizarTallerProcesoCampo(idx, campo, valor) {
  if (!talleresProcesoTemp[idx]) return;
  if (campo === "horas") {
    talleresProcesoTemp[idx][campo] = parseFloat(valor) || 0;
    recalcularHorasProceso();
  } else {
    talleresProcesoTemp[idx][campo] = valor;
  }
}

function recalcularHorasProceso() {
  const suma = talleresProcesoTemp.reduce((acc, t) => acc + (parseFloat(t.horas) || 0), 0);
  const sumaEl = document.getElementById("proc-horas-suma");
  const progEl = document.getElementById("proc-horas-progreso");
  const iconEl = document.getElementById("proc-horas-status-icon");
  const msgEl = document.getElementById("proc-horas-mensaje");
  const cardIndicador = document.getElementById("indicador-horas-33");
  const headerBadge = document.getElementById("badge-proceso-horas-header");

  if (sumaEl) sumaEl.textContent = suma;

  const pct = Math.min(Math.round((suma / 33) * 100), 100);
  if (progEl) {
    progEl.style.width = `${pct}%`;
  }

  if (headerBadge) {
    headerBadge.textContent = `${suma} / 33 hrs`;
    if (suma === 33) {
      headerBadge.className = "shrink-0 px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300";
    } else if (suma === 0) {
      headerBadge.className = "shrink-0 px-2.5 py-1 rounded-lg text-xs font-black bg-slate-100 text-slate-700 border border-slate-200";
    } else {
      headerBadge.className = "shrink-0 px-2.5 py-1 rounded-lg text-xs font-black bg-amber-100 text-amber-800 border border-amber-200";
    }
  }

  if (suma === 0) {
    if (cardIndicador) cardIndicador.className = "inline-flex items-center gap-2 px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200";
    if (progEl) progEl.className = "bg-indigo-300 h-2 rounded-full transition-all duration-300";
    if (iconEl) iconEl.textContent = "🌱";
    if (msgEl) {
      msgEl.className = "text-[11px] text-slate-600 font-medium";
      msgEl.textContent = "Proceso formativo en inicio. Se crearán los talleres progresivamente hasta sumar 33 horas.";
    }
  } else if (suma === 33) {
    if (cardIndicador) cardIndicador.className = "inline-flex items-center gap-2 px-3 py-1 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300";
    if (progEl) progEl.className = "bg-emerald-500 h-2 rounded-full transition-all duration-300";
    if (iconEl) iconEl.textContent = "✓";
    if (msgEl) {
      msgEl.className = "text-[11px] text-emerald-700 font-bold flex items-center gap-1";
      msgEl.innerHTML = `<svg class="w-3.5 h-3.5 text-emerald-600 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Carga horaria completa: 33 horas reglamentarias cumplidas con precisión normativa.`;
    }
  } else if (suma < 33) {
    const faltan = 33 - suma;
    if (cardIndicador) cardIndicador.className = "inline-flex items-center gap-2 px-3 py-1 rounded-xl text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200";
    if (progEl) progEl.className = "bg-amber-500 h-2 rounded-full transition-all duration-300";
    if (iconEl) iconEl.textContent = "⚠️";
    if (msgEl) {
      msgEl.className = "text-[11px] text-amber-700 font-medium";
      msgEl.textContent = `Avance: ${suma} hrs. Faltan ${faltan} hora(s) para completar las 33 horas pedagógicas obligatorias.`;
    }
  } else {
    const exceso = suma - 33;
    if (cardIndicador) cardIndicador.className = "inline-flex items-center gap-2 px-3 py-1 rounded-xl text-xs font-bold bg-rose-50 text-rose-800 border border-rose-200";
    if (progEl) progEl.className = "bg-rose-500 h-2 rounded-full transition-all duration-300";
    if (iconEl) iconEl.textContent = "❌";
    if (msgEl) {
      msgEl.className = "text-[11px] text-rose-700 font-bold";
      msgEl.textContent = `La carga horaria ingresada (${suma} hrs) supera el límite normativo de 33 horas por ${exceso} hora(s).`;
    }
  }
}

function cargarPlantilla33Horas() {
  const user = getCurrentUser();
  const baseDate = document.getElementById("act-fecha")?.value || new Date().toISOString().split("T")[0];
  const resp = user ? user.nombre : "Facilitador/a CIES";

  talleresProcesoTemp = [
    { 
      id: 1, 
      titulo: "Módulo 1: Fundamentos y Marco Normativo de Derechos Sexuales y Reproductivos", 
      fecha: baseDate, 
      horas: 8, 
      facilitador: resp,
      docPlanificacion: "Guia_Metodologica_Mod1_DSR.pdf",
      docAsistencia: "Planilla_Firmas_Participantes_Mod1.pdf"
    },
    { 
      id: 2, 
      titulo: "Módulo 2: Prevención de Violencias Basadas en Género y Ley 348 en el Ámbito Educativo", 
      fecha: baseDate, 
      horas: 8, 
      facilitador: resp,
      docPlanificacion: "Guia_Metodologica_Mod2_Ley348.pdf",
      docAsistencia: "Planilla_Firmas_Participantes_Mod2.pdf"
    },
    { 
      id: 3, 
      titulo: "Módulo 3: Métodos Modernos de Anticoncepción y Prevención de ITS/VIH", 
      fecha: baseDate, 
      horas: 8, 
      facilitador: resp,
      docPlanificacion: "Guia_Metodologica_Mod3_ITS_VIH.pdf",
      docAsistencia: "Planilla_Firmas_Participantes_Mod3.pdf"
    },
    { 
      id: 4, 
      titulo: "Módulo 4: Estrategias Pedagógicas Didácticas, Réplicas en Aula y Evaluación Pre/Post", 
      fecha: baseDate, 
      horas: 9, 
      facilitador: resp,
      docPlanificacion: "Guia_Metodologica_Mod4_Didactica.pdf",
      docAsistencia: "Planilla_Firmas_Participantes_Mod4.pdf"
    }
  ];

  const docTituloInput = document.getElementById("proc-doc-titulo");
  if (docTituloInput && !docTituloInput.value) {
    docTituloInput.value = "Plan Curricular y Metodológico de Formación Integral en Sexualidad 2026";
  }
  const docInfo = document.getElementById("proc-doc-archivo-info");
  const docHidden = document.getElementById("proc-doc-archivo-nombre");
  if (docInfo && (!docHidden || !docHidden.value)) {
    if (docHidden) docHidden.value = "Plan_Curricular_EIS_33Horas_CIES.pdf";
    docInfo.innerHTML = '<span class="text-indigo-700 font-bold">📄 Plan_Curricular_EIS_33Horas_CIES.pdf (Plantilla oficial)</span>';
  }

  renderTalleresProcesoInputs();
  showToast("Plantilla oficial de 4 talleres cargada con documentos base (Total: 33 hrs)", "info");
}

function verDetalleProceso(actividadId) {
  const db = getDB();
  const act = db.actividades.find(a => a.id === actividadId);
  if (!act) return;

  currentDetalleProcesoId = actividadId;

  const modal = document.getElementById("modal-detalle-proceso");
  if (!modal) return;

  const titEl = document.getElementById("det-proc-titulo");
  const subEl = document.getElementById("det-proc-subtitulo");
  const docTitEl = document.getElementById("det-proc-doc-titulo");
  const docArchEl = document.getElementById("det-proc-doc-archivo");
  const countEl = document.getElementById("det-proc-conteo-talleres");
  const totalHorasEl = document.getElementById("det-proc-total-horas");
  const tbody = document.getElementById("det-proc-tabla-talleres");
  const editBtn = document.getElementById("btn-det-proc-editar");
  const btnAgregarTaller = document.getElementById("btn-det-proc-agregar-taller");
  const badgeProgreso = document.getElementById("det-proc-badge-progreso");
  const progTexto = document.getElementById("det-proc-progreso-texto");
  const progBarra = document.getElementById("det-proc-progreso-barra");
  const progMensaje = document.getElementById("det-proc-progreso-mensaje");

  if (titEl) titEl.textContent = act.titulo;
  if (subEl) subEl.textContent = `Proceso Educativo Integral • Sede: ${act.unidadEducativa} (${act.regional || 'CBBA'})`;
  if (docTitEl) docTitEl.textContent = (act.documentoGeneral && act.documentoGeneral.titulo) ? act.documentoGeneral.titulo : "Plan Formativo Integral CIES";
  if (docArchEl) docArchEl.textContent = (act.documentoGeneral && act.documentoGeneral.archivo) ? act.documentoGeneral.archivo : "documento_general_proceso.pdf";

  const talleres = act.talleres || [];
  const horasAcumuladas = act.totalHoras || talleres.reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);
  const pct = Math.min(Math.round((horasAcumuladas / 33) * 100), 100);

  if (countEl) countEl.textContent = `${talleres.length} Talleres / Módulos vinculados`;
  if (totalHorasEl) totalHorasEl.textContent = `${horasAcumuladas} hrs`;

  if (progTexto) progTexto.textContent = `${horasAcumuladas} / 33 hrs (${pct}%)`;
  if (progBarra) {
    progBarra.style.width = `${pct}%`;
    progBarra.className = horasAcumuladas >= 33
      ? "bg-emerald-500 h-2.5 rounded-full transition-all duration-300"
      : "bg-indigo-600 h-2.5 rounded-full transition-all duration-300";
  }

  if (badgeProgreso) {
    if (horasAcumuladas >= 33) {
      badgeProgreso.className = "px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0";
      badgeProgreso.textContent = `✓ 33 hrs Cumplidas`;
    } else {
      badgeProgreso.className = "px-2.5 py-1 rounded-lg text-xs font-black bg-amber-100 text-amber-800 border border-amber-300 shrink-0";
      badgeProgreso.textContent = `⏳ ${horasAcumuladas} / 33 hrs (En desarrollo)`;
    }
  }

  if (progMensaje) {
    if (horasAcumuladas >= 33) {
      progMensaje.innerHTML = `<span class="text-emerald-700 font-bold">¡Meta horaria cumplida! Este proceso cuenta con las 33 horas reglamentarias para su acreditación institucional.</span>`;
    } else {
      const faltan = 33 - horasAcumuladas;
      progMensaje.textContent = `Restan ${faltan} horas pedagógicas para completar el proceso. Puedes ir registrando cada sesión conforme se ejecute.`;
    }
  }

  if (btnAgregarTaller) {
    btnAgregarTaller.onclick = () => abrirModalAgregarTallerProceso(act.id);
  }

  if (tbody) {
    if (talleres.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-6 text-slate-400">
            <p class="font-medium">No se han registrado talleres para este proceso todavía.</p>
            <p class="text-[11px] text-slate-400 mt-1">Pulsa <strong>"+ Registrar Taller"</strong> para añadir la primera sesión con su planificación y lista de participantes.</p>
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = talleres.map((t, idx) => `
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="py-2.5 px-3 font-bold text-slate-400">${idx + 1}</td>
          <td class="py-2.5 px-3 font-medium text-slate-800">
            <div>${escapeHtml(t.titulo)}</div>
            ${t.observaciones ? `<div class="text-[10px] text-slate-400 font-normal italic mt-0.5">${escapeHtml(t.observaciones)}</div>` : ''}
          </td>
          <td class="py-2.5 px-3 text-slate-600 font-mono text-[11px] whitespace-nowrap">${t.fecha || '-'}</td>
          <td class="py-2.5 px-3 text-right font-extrabold text-indigo-700 whitespace-nowrap">${t.horas} hrs</td>
          <td class="py-2.5 px-3 space-y-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              ${t.docPlanificacion ? `
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200" title="Documento de Planificación: ${escapeHtml(t.docPlanificacion)}">
                  <span>📄</span>
                  <span class="truncate max-w-[140px]">${escapeHtml(t.docPlanificacion)}</span>
                </span>
              ` : `
                <span class="text-[10px] text-slate-400 italic">📄 Sin plan adjunto</span>
              `}
            </div>
            <div class="flex items-center gap-1.5 flex-wrap">
              ${t.docAsistencia ? `
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200" title="Lista de Participantes: ${escapeHtml(t.docAsistencia)}">
                  <span>👥</span>
                  <span class="truncate max-w-[140px]">${escapeHtml(t.docAsistencia)}</span>
                </span>
              ` : `
                <span class="text-[10px] text-slate-400 italic">👥 Sin lista de firmas</span>
              `}
            </div>
          </td>
          <td class="py-2.5 px-3 text-slate-600 whitespace-nowrap">${escapeHtml(t.facilitador || '-')}</td>
          <td class="py-2.5 px-2 text-center whitespace-nowrap">
            <button onclick="abrirModalAgregarTallerProceso(${act.id}, ${t.id})" class="p-1 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded transition-colors cursor-pointer mr-1" title="Editar taller o adjuntar documentos">
              <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            </button>
            <button onclick="eliminarTallerDeProcesoExistente(${act.id}, ${t.id})" class="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Eliminar taller de este proceso">
              <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join("");
    }
  }

  if (editBtn) {
    editBtn.onclick = () => {
      closeModal("modal-detalle-proceso");
      editActividad(act.id);
    };
  }

  modal.classList.remove("hidden");
}

function handleTallerArchivoAdjunto(input, tipo) {
  if (!input || !input.files || input.files.length === 0) return;
  const file = input.files[0];
  const sizeKb = (file.size / 1024).toFixed(1);
  if (tipo === "planificacion") {
    const hidden = document.getElementById("add-taller-doc-planificacion-nombre");
    const info = document.getElementById("add-taller-doc-planificacion-info");
    if (hidden) hidden.value = file.name;
    if (info) info.innerHTML = `<span class="text-blue-700 font-bold">📄 ${escapeHtml(file.name)} (${sizeKb} KB)</span>`;
  } else if (tipo === "asistencia") {
    const hidden = document.getElementById("add-taller-doc-asistencia-nombre");
    const info = document.getElementById("add-taller-doc-asistencia-info");
    if (hidden) hidden.value = file.name;
    if (info) info.innerHTML = `<span class="text-emerald-700 font-bold">👥 ${escapeHtml(file.name)} (${sizeKb} KB)</span>`;
  }
}

function tienePreinscripcionActividad(actividadId) {
  const db = getDB();
  const act = db.actividades.find(a => a.id === actividadId);
  if (!act) return false;
  const preCount = (db.preregistros || []).filter(pr => pr.actividadId === actividadId).length;
  return preCount > 0;
}

function abrirModalAgregarTallerProceso(actividadId, tallerId = null) {
  const db = getDB();
  const act = db.actividades.find(a => a.id === actividadId);
  if (!act) {
    showToast("No se encontró la actividad seleccionada", "warning");
    return;
  }

  // Preinscripción es opcional: el facilitador puede registrar talleres directamente

  const user = getCurrentUser();
  const modal = document.getElementById("modal-agregar-taller-proceso");
  if (!modal) return;

  const idActInput = document.getElementById("add-taller-actividad-id");
  const idTallerInput = document.getElementById("add-taller-id");
  const modalTit = document.getElementById("modal-add-taller-titulo");
  const subEl = document.getElementById("modal-add-taller-subtitulo");
  const titInput = document.getElementById("add-taller-titulo");
  const fechaInput = document.getElementById("add-taller-fecha");
  const horasInput = document.getElementById("add-taller-horas");
  const facInput = document.getElementById("add-taller-facilitador");
  const obsInput = document.getElementById("add-taller-observaciones");
  const btnSubmitTexto = document.getElementById("btn-submit-taller-texto");

  const docPlanInput = document.getElementById("add-taller-doc-planificacion");
  const docPlanHidden = document.getElementById("add-taller-doc-planificacion-nombre");
  const docPlanInfo = document.getElementById("add-taller-doc-planificacion-info");

  const docAsisInput = document.getElementById("add-taller-doc-asistencia");
  const docAsisHidden = document.getElementById("add-taller-doc-asistencia-nombre");
  const docAsisInfo = document.getElementById("add-taller-doc-asistencia-info");

  if (idActInput) idActInput.value = actividadId;
  if (subEl) subEl.textContent = `${act.titulo} (${act.unidadEducativa})`;

  if (docPlanInput) docPlanInput.value = "";
  if (docAsisInput) docAsisInput.value = "";

  const talleres = act.talleres || [];

  if (tallerId) {
    // Modo Edición / Adjuntar Documentos a taller existente
    const t = talleres.find(item => item.id === tallerId);
    if (!t) return;

    if (idTallerInput) idTallerInput.value = t.id;
    if (modalTit) modalTit.textContent = "Editar Taller y Documentos de Respaldo";
    if (btnSubmitTexto) btnSubmitTexto.textContent = "Guardar Cambios del Taller";

    if (titInput) titInput.value = t.titulo || "";
    if (fechaInput) fechaInput.value = t.fecha || new Date().toISOString().split("T")[0];
    if (horasInput) horasInput.value = t.horas || 8;
    if (facInput) facInput.value = t.facilitador || (user ? user.nombre : "Facilitador/a CIES");
    if (obsInput) obsInput.value = t.observaciones || "";

    if (docPlanHidden) docPlanHidden.value = t.docPlanificacion || "";
    if (docPlanInfo) {
      docPlanInfo.innerHTML = t.docPlanificacion
        ? `<span class="text-blue-700 font-bold">📄 ${escapeHtml(t.docPlanificacion)}</span>`
        : "Sin archivo de planificación adjunto";
    }

    if (docAsisHidden) docAsisHidden.value = t.docAsistencia || "";
    if (docAsisInfo) {
      docAsisInfo.innerHTML = t.docAsistencia
        ? `<span class="text-emerald-700 font-bold">👥 ${escapeHtml(t.docAsistencia)}</span>`
        : "Sin archivo de asistencia adjunto";
    }
  } else {
    // Modo Nuevo Taller
    if (idTallerInput) idTallerInput.value = "";
    if (modalTit) modalTit.textContent = "Registrar Taller en Proceso Educativo";
    if (btnSubmitTexto) btnSubmitTexto.textContent = "Guardar Taller en el Proceso";

    const horasActuales = act.totalHoras || talleres.reduce((s, item) => s + (parseFloat(item.horas) || 0), 0);
    const faltan = Math.max(0, 33 - horasActuales);

    const numTaller = talleres.length + 1;
    if (titInput) titInput.value = `Taller ${numTaller}: Módulo Temático de Formación`;
    if (fechaInput) fechaInput.value = new Date().toISOString().split("T")[0];
    if (horasInput) horasInput.value = faltan > 0 ? Math.min(8, faltan) : 8;
    if (facInput) facInput.value = user ? user.nombre : (act.responsable || "Facilitador/a CIES");
    if (obsInput) obsInput.value = "";

    if (docPlanHidden) docPlanHidden.value = "";
    if (docPlanInfo) docPlanInfo.textContent = "Sin archivo de planificación adjunto";

    if (docAsisHidden) docAsisHidden.value = "";
    if (docAsisInfo) docAsisInfo.textContent = "Sin archivo de asistencia adjunto";
  }

  actualizarProyeccionTallerModal();
  modal.classList.remove("hidden");
}

function actualizarProyeccionTallerModal() {
  const idActVal = document.getElementById("add-taller-actividad-id")?.value;
  if (!idActVal) return;

  const db = getDB();
  const act = db.actividades.find(a => a.id === parseInt(idActVal));
  if (!act) return;

  const idTallerVal = document.getElementById("add-taller-id")?.value;
  const talleres = act.talleres || [];
  let baseHoras = 0;

  if (idTallerVal) {
    baseHoras = talleres
      .filter(t => t.id !== parseInt(idTallerVal))
      .reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);
  } else {
    baseHoras = act.totalHoras || talleres.reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);
  }

  const inputHoras = parseFloat(document.getElementById("add-taller-horas")?.value) || 0;
  const proyectado = baseHoras + inputHoras;

  const acumEl = document.getElementById("add-taller-acumulado-actual");
  const proyEl = document.getElementById("add-taller-proyeccion");

  if (acumEl) acumEl.textContent = `${baseHoras} / 33 hrs`;
  if (proyEl) {
    if (proyectado === 33) {
      proyEl.className = "text-xs font-black text-emerald-700";
      proyEl.innerHTML = `${proyectado} / 33 hrs (✓ Meta cumplida)`;
    } else if (proyectado > 33) {
      proyEl.className = "text-xs font-black text-rose-700";
      proyEl.innerHTML = `${proyectado} / 33 hrs (⚠️ Excede meta)`;
    } else {
      proyEl.className = "text-xs font-black text-indigo-900";
      proyEl.textContent = `${proyectado} / 33 hrs`;
    }
  }
}

function guardarNuevoTallerIndividual(event) {
  event.preventDefault();
  const idActVal = document.getElementById("add-taller-actividad-id")?.value;
  if (!idActVal) return;

  const db = getDB();
  const act = db.actividades.find(a => a.id === parseInt(idActVal));
  if (!act) {
    showToast("No se pudo identificar la actividad", "error");
    return;
  }

  const tallerIdVal = document.getElementById("add-taller-id")?.value;
  const titulo = document.getElementById("add-taller-titulo")?.value.trim();
  const fecha = document.getElementById("add-taller-fecha")?.value;
  const horas = parseFloat(document.getElementById("add-taller-horas")?.value) || 0;
  const facilitador = document.getElementById("add-taller-facilitador")?.value.trim();
  const observaciones = document.getElementById("add-taller-observaciones")?.value.trim();

  const docPlanNombre = document.getElementById("add-taller-doc-planificacion-nombre")?.value.trim() || null;
  const docAsisNombre = document.getElementById("add-taller-doc-asistencia-nombre")?.value.trim() || null;

  if (!titulo || !fecha || horas <= 0 || !facilitador) {
    showToast("Por favor complete los campos obligatorios del taller (*)", "warning");
    return;
  }

  if (!act.talleres) act.talleres = [];

  if (tallerIdVal) {
    const idx = act.talleres.findIndex(t => t.id === parseInt(tallerIdVal));
    if (idx !== -1) {
      act.talleres[idx].titulo = titulo;
      act.talleres[idx].fecha = fecha;
      act.talleres[idx].horas = horas;
      act.talleres[idx].facilitador = facilitador;
      act.talleres[idx].observaciones = observaciones;
      if (docPlanNombre) act.talleres[idx].docPlanificacion = docPlanNombre;
      if (docAsisNombre) act.talleres[idx].docAsistencia = docAsisNombre;
    }
  } else {
    const nuevoTaller = {
      id: Date.now(),
      titulo,
      fecha,
      horas,
      facilitador,
      observaciones,
      docPlanificacion: docPlanNombre || "planificador Lideres 5_4_24.docx",
      docAsistencia: docAsisNombre,
      presupuestoDetalle: {
        salon: 0.00,
        alimentacion: 0.00,
        pasajes: 0.00,
        viaticos: 0.00,
        materiales: 0.00,
        otros: 0.00,
        total: 0.00
      },
      planificadorOficial: {
        memorandum: {
          a: "Dr. Fernando Álvarez Fuentes - GERENTE REGIONAL CIES LA PAZ",
          via1: "Lic. María Uzeda Romero - JEFA ADMINISTRATIVA CIES LA PAZ",
          via2: "Lic. Gloria O. Arauco Lima - COORDINADORA COMPONENTE EDUCATIVO CIES LA PAZ",
          de: `${facilitador} - RESPONSABLE AREA EDUCATIVA CIES ${act.regional || 'EA'}`,
          ref: `SOLICITUD DE GASTO - CAPACITACION (${titulo})`,
          codigoRef: "CIES EDU. EA / RFS 15/2024",
          fecha: fecha
        },
        objetivoGeneral: "Fortalecer habilidades y destrezas para desarrollar una vida sana, plena e integral de su salud sexual y salud reproductiva.",
        objetivosEspecificos: "1. Reconocer, relacionar y aplicar las destrezas para la vivencia de la sexualidad y el cuidado de la salud.\n2. Fortalecer al análisis de la toma de decisiones.\n3. Integrar las herramientas aplicadas en la construcción de su plan de vida.\n4. Reflexionar acerca de las metas personales y resiliencia.",
        metodologia: "Activa- participativa",
        datosGrupo: "Adolescentes y jóvenes de unidades educativas e institutos",
        resultadosEsperados: "Desarrollo de competencias para el cuidado de la salud sexual y reproductiva.",
        participantes: act.participantesCount || 25,
        cronograma: [
          { hora: "08:30 - 09:00", tema: "Inscripción", contenido: "Registro de firmas en planilla de asistencia oficial", tecnica: "Registro", recursos: "Planilla de asistencia", responsable: facilitador },
          { hora: "09:00 - 10:30", tema: titulo, contenido: observaciones || "Desarrollo metodológico interactivo", tecnica: "Dinámica grupal", recursos: "Papelógrafos, marcadores", responsable: facilitador },
          { hora: "10:30 - 11:30", tema: "Cierre y Evaluación", contenido: "Conclusiones y acuerdos", tecnica: "Lluvia de ideas", recursos: "Tarjetas", responsable: facilitador }
        ]
      }
    };
    act.talleres.push(nuevoTaller);
  }

  act.totalHoras = act.talleres.reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);
  act.totalPresupuesto = act.talleres.reduce((sum, t) => sum + (t.presupuestoDetalle ? parseFloat(t.presupuestoDetalle.total || 0) : (parseFloat(t.presupuesto) || 0)), 0);

  saveDB(db);
  closeModal("modal-agregar-taller-proceso");

  const actionMsg = tallerIdVal ? "actualizado" : "registrado";
  if (act.totalHoras === 33) {
    showToast(`¡Taller ${actionMsg}! Proceso ha completado sus 33 horas reglamentarias.`, "success");
  } else if (act.totalHoras < 33) {
    showToast(`Taller ${actionMsg} con éxito. Acumulado: ${act.totalHoras} / 33 hrs (faltan ${33 - act.totalHoras} hrs).`, "info");
  } else {
    showToast(`Taller ${actionMsg}. Total: ${act.totalHoras} hrs (supera las 33 hrs normativas).`, "warning");
  }

  renderActividades();

  const detModal = document.getElementById("modal-detalle-proceso");
  if (detModal && !detModal.classList.contains("hidden") && currentDetalleProcesoId === act.id) {
    verDetalleProceso(act.id);
  }

  if (typeof currentWorkspaceActId !== "undefined" && currentWorkspaceActId === act.id) {
    actualizarBadgesSidebarWorkspace(act);
    renderWorkspacePaso3();
    if (typeof currentWorkspaceStep !== "undefined" && currentWorkspaceStep === 4) {
      renderWorkspacePaso4();
    }
  }
}

function eliminarTallerDeProcesoExistente(actividadId, tallerId) {
  const db = getDB();
  const act = db.actividades.find(a => a.id === actividadId);
  if (!act || !act.talleres) return;

  const taller = act.talleres.find(t => t.id === tallerId);
  const nombreTaller = taller ? taller.titulo : "este taller";

  if (!confirm(`¿Estás seguro de que deseas eliminar "${nombreTaller}" del proceso educativo?`)) {
    return;
  }

  act.talleres = act.talleres.filter(t => t.id !== tallerId);
  act.totalHoras = act.talleres.reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);

  saveDB(db);
  showToast(`Taller eliminado. Total acumulado: ${act.totalHoras} / 33 hrs`, "info");
  renderActividades();
  verDetalleProceso(act.id);

  if (typeof currentWorkspaceActId !== "undefined" && currentWorkspaceActId === act.id) {
    actualizarBadgesSidebarWorkspace(act);
    if (typeof currentWorkspaceStep !== "undefined" && currentWorkspaceStep === 4) renderWorkspacePaso4();
  }
}

function renderActividades(search = "") {
  const db = getDB();
  const tbody = document.getElementById("table-actividades");
  if (!tbody) return;

  const user = getCurrentUser();
  const isResponsableRegional = user && ((user.rol || "").toLowerCase().includes("responsable regional") || (user.rol || "").toLowerCase().includes("responsable educativo regional"));
  const userRegional = (user && (user.regional || user.sede)) ? (user.regional || user.sede) : "CBBA";

  // Actualizar KPIs de la Regional si corresponde
  if (isResponsableRegional) {
    const regActs = db.actividades.filter(a => (a.regional || "LP") === userRegional);
    const kpiPlanillas = document.getElementById("kpi-reg-planillas");
    const kpiAsistentes = document.getElementById("kpi-reg-asistentes");
    const kpiSupervisiones = document.getElementById("kpi-reg-supervisiones");
    const kpiImpacto = document.getElementById("kpi-reg-impacto");

    if (kpiPlanillas) kpiPlanillas.textContent = regActs.length;
    if (kpiAsistentes) kpiAsistentes.textContent = regActs.reduce((s, a) => s + (parseInt(a.participantesCount) || 0), 0);
    if (kpiSupervisiones) kpiSupervisiones.textContent = regActs.filter(a => (a.categoriaPlanilla || "").includes("Supervisión")).length;

    const regActIds = regActs.map(a => a.id);
    const regEvals = (db.evaluacionesPrePost || []).filter(e => regActIds.includes(e.actividadId));
    if (kpiImpacto) {
      if (regEvals.length > 0) {
        const avgPre = Math.round(regEvals.reduce((s, e) => s + e.preTest, 0) / regEvals.length);
        const avgPost = Math.round(regEvals.reduce((s, e) => s + e.postTest, 0) / regEvals.length);
        const delta = avgPost - avgPre;
        kpiImpacto.textContent = `+${delta}%`;
      } else {
        kpiImpacto.textContent = "+0%";
      }
    }
  }

  const filterCat = document.getElementById("filter-categoria-planilla")?.value || "";

  const filtered = db.actividades.filter(a => {
    const txt = `${a.titulo} ${a.responsable} ${a.unidadEducativa} ${a.tipo} ${a.categoriaPlanilla || ''} ${a.regional || ''}`.toLowerCase();
    const matchesSearch = txt.includes(search.toLowerCase());
    const matchesCat = !filterCat || a.categoriaPlanilla === filterCat;

    let matchesReg = true;
    if (isResponsableRegional && filtroSoloRegionalActividades) {
      matchesReg = (a.regional || "LP") === userRegional;
    }

    return matchesSearch && matchesCat && matchesReg;
  });

  if (filtered.length === 0) {
    const msg = (isResponsableRegional && filtroSoloRegionalActividades)
      ? `No se encontraron planillas o actividades en tu sede regional (${userRegional}) para el filtro actual. Puedes pulsar "🌐 Todo el País" para explorar actividades a nivel nacional.`
      : `No se encontraron planillas o actividades para el filtro seleccionado.`;
    tbody.innerHTML = `<tr><td colspan="9" class="text-center py-6 text-slate-400 font-medium">${msg}</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(a => {
    const cat = a.categoriaPlanilla || "Planilla de Asistencia y Alimentación (SGC-Apoyo-ABS-3-pp3)";
    let badgeStyle = "bg-blue-100 text-blue-800 border-blue-200";
    let shortName = "📋 Asistencia y Alim.";
    if (cat.includes("Viáticos")) {
      badgeStyle = "bg-emerald-100 text-emerald-800 border-emerald-200";
      shortName = "💰 Entrega Viáticos";
    } else if (cat.includes("Virtuales")) {
      badgeStyle = "bg-purple-100 text-purple-800 border-purple-200";
      shortName = "💻 Act. Virtuales";
    } else if (cat.includes("Sala / Comunidad")) {
      badgeStyle = "bg-amber-100 text-amber-800 border-amber-200";
      shortName = "📢 Sala / Comunidad";
    } else if (cat.includes("Par a Par")) {
      badgeStyle = "bg-indigo-100 text-indigo-800 border-indigo-200";
      shortName = "👥 Red Par a Par";
    } else if (cat.includes("Supervisión")) {
      badgeStyle = "bg-teal-100 text-teal-800 border-teal-200 font-bold";
      shortName = "🔍 Supervisión CIES";
    }

    // Calcular métricas Pre/Post del taller
    const evals = (db.evaluacionesPrePost || []).filter(e => e.actividadId === a.id);
    let evalBadge = "";
    if (evals.length > 0) {
      const avgPre = Math.round(evals.reduce((s, e) => s + e.preTest, 0) / evals.length);
      const avgPost = Math.round(evals.reduce((s, e) => s + e.postTest, 0) / evals.length);
      const delta = avgPost - avgPre;
      evalBadge = `
        <button onclick="openModalEvaluacion(${a.id})" class="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition-colors shadow-sm cursor-pointer" title="Ver resultados Pre-Test (${avgPre}%) y Post-Test (${avgPost}%)">
          <span>📈 +${delta}% Δ</span>
          <span class="text-[10px] text-indigo-500 font-normal">(${evals.length})</span>
        </button>
      `;
    } else {
      evalBadge = `
        <button onclick="openModalEvaluacion(${a.id})" class="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer">
          <span>+ Evaluar</span>
        </button>
      `;
    }

    const regCodigo = a.regional || "LP";
    const isRegionalMatch = user && userRegional === regCodigo;

    return `
      <tr class="border-b border-slate-100 hover:bg-blue-50/50 transition-colors cursor-pointer group" onclick="abrirEspacioTrabajoActividad(${a.id}, 1)">
        <td class="py-3 px-4">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold border ${badgeStyle}">
            ${shortName}
          </span>
          <div class="text-[10px] text-slate-400 truncate max-w-[170px]" title="${cat}">${cat}</div>
        </td>
        <td class="py-3 px-4 font-medium text-slate-900">
          <div class="flex items-center gap-2 flex-wrap">
            <button type="button" onclick="event.stopPropagation(); abrirEspacioTrabajoActividad(${a.id}, 1)" class="font-bold text-slate-900 hover:text-blue-600 text-left cursor-pointer group-hover:text-blue-600 transition-colors">
              ${a.titulo}
            </button>
            ${(a.conEjecucionPresupuestaria !== false) 
              ? `<button type="button" onclick="event.stopPropagation(); abrirEspacioTrabajoActividad(${a.id}, 3)" class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 cursor-pointer transition-colors shadow-2xs" title="Paso 3: Ver desglose de gastos y total"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Con Presupuesto${(a.totalPresupuesto !== undefined && a.totalPresupuesto > 0) ? ` (Bs. ${Number(a.totalPresupuesto).toLocaleString('es-BO', {minimumFractionDigits: 2, maximumFractionDigits: 2})})` : ''}</button>`
              : `<button type="button" onclick="event.stopPropagation(); abrirEspacioTrabajoActividad(${a.id}, 3)" class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 cursor-pointer transition-colors shadow-2xs" title="Paso 3: Actividad sin presupuesto (Clic para habilitar)"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Sin Presupuesto</button>`
            }
          </div>
          ${a.esProcesoEducativo ? `
            <div class="mt-1 flex items-center gap-1.5 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-extrabold ${(a.totalHoras || 0) >= 33 ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-amber-100 text-amber-800 border border-amber-300'}">
                <span>🎓 Proceso Educativo</span>
                <span class="font-mono">(${(a.totalHoras || 0)} / 33 hrs)</span>
              </span>
              <button onclick="event.stopPropagation(); abrirEspacioTrabajoActividad(${a.id}, 4)" class="text-[10px] font-bold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer">
                Ver ${(a.talleres || []).length} Módulos y Doc. →
              </button>
              <button onclick="event.stopPropagation(); abrirEspacioTrabajoActividad(${a.id}, 4)" class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 transition-colors cursor-pointer" title="Registrar un nuevo taller en este proceso">
                <span>+ Registrar Taller</span>
              </button>
            </div>
          ` : ''}
          <div class="text-xs text-slate-400 mt-0.5">Material: ${a.materialDistribuido || 'Sin material especificado'}</div>
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 text-xs bg-slate-100 text-slate-700 rounded font-medium">${a.tipo}</span>
        </td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="px-2 py-0.5 text-xs rounded font-semibold ${a.area === 'Urbana' ? 'bg-cyan-50 text-cyan-800' : 'bg-emerald-50 text-emerald-800'}">${a.area}</span>
            <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${isRegionalMatch ? 'bg-teal-100 text-teal-800 border border-teal-200' : 'bg-slate-100 text-slate-700 border border-slate-200'}">${regCodigo}</span>
          </div>
          <div class="text-[11px] text-slate-500 mt-0.5">${a.unidadEducativa}</div>
        </td>
        <td class="py-3 px-4 text-slate-600 text-xs font-mono">${a.fecha}</td>
        <td class="py-3 px-4">
          <div class="text-slate-700 font-semibold text-xs">${a.participantesCount} pers. (oficial)</div>
          ${(() => {
            const preList = (db.preregistros || []).filter(pr => pr.actividadId === a.id);
            const preCount = preList.length;
            const preConf = preList.filter(pr => pr.confirmado !== false && pr.asistenciaConfirmada !== false).length;
            if (preCount === 0) {
              return `
                <button onclick="event.stopPropagation(); abrirEspacioTrabajoActividad(${a.id}, 2)" class="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 transition-colors cursor-pointer shadow-2xs" title="Paso 2: Gestionar prerregistro opcional">
                  <span>📋 0 preinscritos (Opcional)</span>
                </button>
              `;
            } else {
              return `
                <button onclick="event.stopPropagation(); abrirEspacioTrabajoActividad(${a.id}, 2)" class="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors cursor-pointer" title="Paso 2: Preinscripción (${preConf} confirmados de ${preCount})">
                  <span>✓ ${preCount} preinscritos</span>
                </button>
              `;
            }
          })()}
        </td>
        <td class="py-3 px-4">
          <div class="flex gap-1 text-[11px]">
            <span title="Refrigerio Mañana" class="px-1.5 py-0.5 rounded ${a.refManana ? 'bg-blue-100 text-blue-700 font-bold' : 'bg-slate-100 text-slate-400'}">RM</span>
            <span title="Almuerzo" class="px-1.5 py-0.5 rounded ${a.almuerzo ? 'bg-emerald-100 text-emerald-700 font-bold' : 'bg-slate-100 text-slate-400'}">AL</span>
            <span title="Refrigerio Tarde" class="px-1.5 py-0.5 rounded ${a.refTarde ? 'bg-amber-100 text-amber-700 font-bold' : 'bg-slate-100 text-slate-400'}">RT</span>
            <span title="Cena" class="px-1.5 py-0.5 rounded ${a.cena ? 'bg-purple-100 text-purple-700 font-bold' : 'bg-slate-100 text-slate-400'}">CE</span>
          </div>
        </td>
        <td class="py-3 px-4 text-center whitespace-nowrap">
          <div onclick="event.stopPropagation(); abrirEspacioTrabajoActividad(${a.id}, 5)" class="cursor-pointer inline-block" title="Paso 5: Ver evaluaciones y notas">
            ${evalBadge}
          </div>
        </td>
        <td class="py-3 px-4 text-right space-x-1.5 whitespace-nowrap">
          <button onclick="event.stopPropagation(); abrirEspacioTrabajoActividad(${a.id}, 1)" class="text-blue-600 hover:text-blue-800 text-xs font-bold py-1 px-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 cursor-pointer shadow-2xs inline-flex items-center gap-1" title="Abrir espacio de trabajo y flujo completo por pasos">
            <span>🚀 Abrir Flujo</span>
          </button>
          <button onclick="event.stopPropagation(); exportarPlanillaPorId(${a.id}, 'pdf')" class="text-rose-700 hover:text-rose-900 text-xs font-bold py-1 px-2 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 cursor-pointer inline-flex items-center gap-1" title="Exportar Planilla a PDF">
            <span>📄 PDF</span>
          </button>
          <button onclick="event.stopPropagation(); exportarPlanillaPorId(${a.id}, 'word')" class="text-blue-700 hover:text-blue-900 text-xs font-bold py-1 px-2 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 cursor-pointer inline-flex items-center gap-1" title="Exportar Planilla a Word (.doc)">
            <span>📝 Word</span>
          </button>
          <button onclick="event.stopPropagation(); editActividad(${a.id})" class="text-slate-600 hover:text-slate-800 text-xs font-semibold py-1 px-2 rounded hover:bg-slate-100 cursor-pointer">Editar</button>
          <button onclick="event.stopPropagation(); deleteActividad(${a.id})" class="text-rose-600 hover:text-rose-800 text-xs font-semibold py-1 px-2 rounded hover:bg-rose-50 cursor-pointer">Eliminar</button>
        </td>
      </tr>
    `;
  }).join("");
}

// -------------------------------------------------------------
// GESTIÓN DINÁMICA DE TIPOS DE GASTOS Y PRESUPUESTO OPERATIVO
// -------------------------------------------------------------
let gastosActividadTemp = [];

const TIPOS_DE_GASTOS_OPCIONES = [
  "Alimentación y Refrigerios",
  "Transporte y Pasajes",
  "Viáticos y Estipendios",
  "Material de Escritorio y Didáctico",
  "Alquiler de Salón / Espacio",
  "Servicios Técnicos / Honorarios",
  "Imprevistos / Otros Gastos"
];

function renderGastosInputs() {
  const tbody = document.getElementById("lista-gastos-actividad");
  if (!tbody) return;

  if (gastosActividadTemp.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="py-5 px-4 text-center text-slate-400 bg-slate-50/50">
          <p class="font-medium text-xs text-slate-600 mb-0.5">No hay gastos añadidos a esta actividad.</p>
          <p class="text-[11px] text-slate-400 mb-2">Pulsa <strong>"+ Añadir Tipo de Gasto"</strong> para desglosar el presupuesto operativo.</p>
          <button type="button" onclick="agregarFilaGasto()" class="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-2xs cursor-pointer">
            + Añadir Primer Gasto
          </button>
        </td>
      </tr>
    `;
    recalcularTotalGastos();
    return;
  }

  tbody.innerHTML = gastosActividadTemp.map((g, idx) => `
    <tr class="hover:bg-emerald-50/30 transition-colors">
      <td class="py-2 px-3 font-bold text-slate-500 text-center">${idx + 1}</td>
      <td class="py-2 px-2">
        <input type="text" value="${escapeHtml(g.nombre || '')}" placeholder="Ej: Refrigerio para participantes, Pasajes..."
          oninput="actualizarGastoTemp(${idx}, 'nombre', this.value)"
          class="w-full text-xs p-1.5 border border-slate-300 rounded focus:ring-1 focus:ring-emerald-500 font-medium">
      </td>
      <td class="py-2 px-2">
        <select onchange="actualizarGastoTemp(${idx}, 'tipo', this.value)"
          class="w-full text-xs p-1.5 border border-slate-300 rounded focus:ring-1 focus:ring-emerald-500 bg-white font-medium text-slate-700">
          ${TIPOS_DE_GASTOS_OPCIONES.map(opt => `
            <option value="${opt}" ${g.tipo === opt ? 'selected' : ''}>${opt}</option>
          `).join('')}
        </select>
      </td>
      <td class="py-2 px-2 text-right">
        <div class="relative rounded-md shadow-2xs">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <span class="text-slate-400 text-xs font-mono font-bold">Bs.</span>
          </div>
          <input type="number" step="0.01" min="0" value="${g.monto !== undefined && g.monto !== null ? g.monto : ''}" placeholder="0.00"
            oninput="actualizarGastoTemp(${idx}, 'monto', this.value)"
            class="w-full text-xs pl-8 pr-2 py-1.5 border border-slate-300 rounded text-right font-mono font-bold text-emerald-900 focus:ring-1 focus:ring-emerald-500">
        </div>
      </td>
      <td class="py-2 px-2 text-center">
        <button type="button" onclick="eliminarFilaGasto(${idx})" class="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Eliminar gasto">
          <svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </td>
    </tr>
  `).join("");

  recalcularTotalGastos();
}

function agregarFilaGasto() {
  gastosActividadTemp.push({
    nombre: "",
    tipo: TIPOS_DE_GASTOS_OPCIONES[0],
    monto: 0
  });
  renderGastosInputs();
}

function eliminarFilaGasto(idx) {
  gastosActividadTemp.splice(idx, 1);
  renderGastosInputs();
}

function actualizarGastoTemp(idx, field, value) {
  if (!gastosActividadTemp[idx]) return;
  if (field === 'monto') {
    gastosActividadTemp[idx].monto = parseFloat(value) || 0;
    recalcularTotalGastos();
  } else {
    gastosActividadTemp[idx][field] = value;
  }
}

function recalcularTotalGastos() {
  const total = gastosActividadTemp.reduce((sum, g) => sum + (parseFloat(g.monto) || 0), 0);
  const display = document.getElementById("act-total-gastos-display");
  const hidden = document.getElementById("act-total-gastos");
  if (display) {
    display.innerText = `Bs. ${total.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  if (hidden) {
    hidden.value = total;
  }
}

function handleEjecucionPresupuestariaChange(conPresupuesto) {
  const cardSi = document.getElementById("card-ejec-si");
  const cardNo = document.getElementById("card-ejec-no");
  const badge = document.getElementById("badge-ejec-presupuestaria");
  const seccionGastos = document.getElementById("seccion-gastos-presupuesto");
  const modalCard = document.getElementById("modal-act-card");

  if (conPresupuesto) {
    if (cardSi) {
      cardSi.className = "flex items-start gap-2.5 p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50/50 cursor-pointer transition-all shadow-2xs";
    }
    if (cardNo) {
      cardNo.className = "flex items-start gap-2.5 p-3 rounded-xl border-2 border-slate-200 bg-white cursor-pointer hover:bg-slate-50 transition-all shadow-2xs";
    }
    if (badge) {
      badge.textContent = "Con Presupuesto";
      badge.className = "px-2 py-0.5 rounded text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300";
    }
    if (seccionGastos) {
      seccionGastos.classList.remove("hidden");
    }
    if (modalCard) {
      modalCard.classList.remove("max-w-xl");
      modalCard.classList.add("max-w-3xl");
    }
    renderGastosInputs();
  } else {
    if (cardSi) {
      cardSi.className = "flex items-start gap-2.5 p-3 rounded-xl border-2 border-slate-200 bg-white cursor-pointer hover:bg-slate-50 transition-all shadow-2xs";
    }
    if (cardNo) {
      cardNo.className = "flex items-start gap-2.5 p-3 rounded-xl border-2 border-slate-600 bg-slate-100 cursor-pointer transition-all shadow-2xs";
    }
    if (badge) {
      badge.textContent = "Sin Presupuesto";
      badge.className = "px-2 py-0.5 rounded text-[10px] font-black bg-slate-200 text-slate-700 border border-slate-300";
    }
    if (seccionGastos) {
      seccionGastos.classList.add("hidden");
    }
    const chkProc = document.getElementById("act-es-proceso");
    if ((!chkProc || !chkProc.checked) && modalCard) {
      modalCard.classList.remove("max-w-3xl");
      modalCard.classList.add("max-w-xl");
    }
  }
}

function openModalActividad(item = null) {
  if (!item) {
    openModalNuevoPlanificadorOficial();
    return;
  }

  const modal = document.getElementById("modal-actividad");
  const form = document.getElementById("form-actividad");
  form.reset();

  if (item) {
    document.getElementById("modal-act-title").innerText = "Editar Planilla / Actividad";
    document.getElementById("act-id").value = item.id;

    const conEjec = item.conEjecucionPresupuestaria !== false;
    const rSi = document.getElementById("act-ejec-si");
    const rNo = document.getElementById("act-ejec-no");
    if (rSi) rSi.checked = conEjec;
    if (rNo) rNo.checked = !conEjec;

    gastosActividadTemp = (item.gastos && Array.isArray(item.gastos)) ? JSON.parse(JSON.stringify(item.gastos)) : [];
    handleEjecucionPresupuestariaChange(conEjec);

    document.getElementById("act-categoria").value = item.categoriaPlanilla || "Planilla de Asistencia y Alimentación (SGC-Apoyo-ABS-3-pp3)";
    document.getElementById("act-titulo").value = item.titulo;
    document.getElementById("act-tipo").value = item.tipo;
    document.getElementById("act-area").value = item.area;
    document.getElementById("act-ue").value = item.unidadEducativa;
    document.getElementById("act-fecha").value = item.fecha;
    document.getElementById("act-responsable").value = item.responsable;
    document.getElementById("act-participantes").value = item.participantesCount;
    document.getElementById("act-material").value = item.materialDistribuido;
    document.getElementById("act-ref-m").checked = item.refManana;
    document.getElementById("act-almuerzo").checked = item.almuerzo;
    document.getElementById("act-ref-t").checked = item.refTarde;
    document.getElementById("act-cena").checked = item.cena;
    document.getElementById("act-estado").value = item.estado;
    const regEl = document.getElementById("act-regional");
    if (regEl) regEl.value = item.regional || "CBBA";

    const esProc = !!item.esProcesoEducativo;
    const chkProc = document.getElementById("act-es-proceso");
    if (chkProc) chkProc.checked = esProc;
    const docTitEl = document.getElementById("proc-doc-titulo");
    if (docTitEl) docTitEl.value = (item.documentoGeneral && item.documentoGeneral.titulo) || "";
    const docArchHidden = document.getElementById("proc-doc-archivo-nombre");
    if (docArchHidden) docArchHidden.value = (item.documentoGeneral && item.documentoGeneral.archivo) || "";
    const docInfo = document.getElementById("proc-doc-archivo-info");
    if (docInfo) {
      if (item.documentoGeneral && item.documentoGeneral.archivo) {
        docInfo.innerHTML = `<span class="text-indigo-700 font-bold">📄 ${item.documentoGeneral.archivo}</span>`;
      } else {
        docInfo.textContent = "Documento metodológico base o plan de capacitación";
      }
    }
    talleresProcesoTemp = item.talleres ? JSON.parse(JSON.stringify(item.talleres)) : [];
    toggleProcesoEducativo(esProc);

    const btnTop = document.getElementById("btn-top-editar-talleres");
    const btnSec = document.getElementById("btn-sec-editar-talleres");
    const btnFooter = document.getElementById("btn-footer-editar-talleres");
    if (esProc) {
      if (btnTop) btnTop.classList.remove("hidden");
      if (btnSec) btnSec.classList.remove("hidden");
      if (btnFooter) btnFooter.classList.remove("hidden");
    } else {
      if (btnTop) btnTop.classList.add("hidden");
      if (btnSec) btnSec.classList.add("hidden");
      if (btnFooter) btnFooter.classList.add("hidden");
    }
  } else {
    document.getElementById("modal-act-title").innerText = "Registrar Nueva Planilla (Formato CIES)";
    document.getElementById("act-id").value = "";

    const rSi = document.getElementById("act-ejec-si");
    const rNo = document.getElementById("act-ejec-no");
    if (rSi) rSi.checked = true;
    if (rNo) rNo.checked = false;

    gastosActividadTemp = [];
    handleEjecucionPresupuestariaChange(true);

    document.getElementById("act-categoria").value = "Planilla de Asistencia y Alimentación (SGC-Apoyo-ABS-3-pp3)";
    document.getElementById("act-fecha").value = new Date().toISOString().split("T")[0];
    const regEl = document.getElementById("act-regional");
    const user = getCurrentUser();
    if (regEl) regEl.value = (user && (user.regional || user.sede)) ? (user.regional || user.sede) : "CBBA";

    const chkProc = document.getElementById("act-es-proceso");
    if (chkProc) chkProc.checked = false;
    const docTitEl = document.getElementById("proc-doc-titulo");
    if (docTitEl) docTitEl.value = "";
    const docArchHidden = document.getElementById("proc-doc-archivo-nombre");
    if (docArchHidden) docArchHidden.value = "";
    const docInfo = document.getElementById("proc-doc-archivo-info");
    if (docInfo) docInfo.textContent = "Documento metodológico base o plan de capacitación";
    talleresProcesoTemp = [];
    toggleProcesoEducativo(false);

    const btnTop = document.getElementById("btn-top-editar-talleres");
    const btnSec = document.getElementById("btn-sec-editar-talleres");
    const btnFooter = document.getElementById("btn-footer-editar-talleres");
    if (btnTop) btnTop.classList.add("hidden");
    if (btnSec) btnSec.classList.add("hidden");
    if (btnFooter) btnFooter.classList.add("hidden");
  }
  modal.classList.remove("hidden");
}

function saveActividad(e) {
  e.preventDefault();
  const db = getDB();
  const idVal = document.getElementById("act-id").value;
  const user = getCurrentUser();

  if (idVal) {
    // Modo Edición de Actividad existente
    const idx = db.actividades.findIndex(a => a.id === parseInt(idVal));
    if (idx !== -1) {
      const act = db.actividades[idx];
      act.categoriaPlanilla = document.getElementById("act-categoria").value;
      act.titulo = document.getElementById("act-titulo").value.trim();
      act.tipo = document.getElementById("act-tipo").value;
      act.area = document.getElementById("act-area").value;
      act.regional = document.getElementById("act-regional")?.value || act.regional || "EA";
      act.unidadEducativa = document.getElementById("act-ue").value.trim();
      act.fecha = document.getElementById("act-fecha").value;
      act.responsable = document.getElementById("act-responsable").value.trim();
      act.participantesCount = parseInt(document.getElementById("act-participantes").value) || 25;
      act.materialDistribuido = document.getElementById("act-material").value.trim();
      act.refManana = document.getElementById("act-ref-m")?.checked ?? false;
      act.almuerzo = document.getElementById("act-almuerzo")?.checked ?? false;
      act.refTarde = document.getElementById("act-ref-t")?.checked ?? false;
      act.cena = document.getElementById("act-cena")?.checked ?? false;
      act.estado = document.getElementById("act-estado").value;
      
      saveDB(db);
      closeModal("modal-actividad");
      showToast("Planilla actualizada con éxito", "success");
      renderActividades();
    }
    return;
  }

  // MODO CREACIÓN AUTOMÁTICA: PROCESO EDUCATIVO + TALLER 1 CON FORMATO LÍDERES 5_4_24
  const actTitulo = document.getElementById("act-titulo").value.trim();
  const actCategoria = document.getElementById("act-categoria").value;
  const actTipo = document.getElementById("act-tipo").value.trim() || "Capacitación a Líderes Juveniles";
  const actModalidad = document.getElementById("act-modalidad")?.value || "Presencial Abierto";
  const actArea = document.getElementById("act-area").value;
  const actRegional = document.getElementById("act-regional")?.value || (user ? (user.regional || user.sede) : "EA") || "EA";
  const actUe = document.getElementById("act-ue").value.trim() || "CIES El Alto - Rincón Juvenil";
  const actFecha = document.getElementById("act-fecha").value || new Date().toISOString().split("T")[0];
  const actResponsable = document.getElementById("act-responsable").value.trim() || "Lic. Viviana Segales Sumi";
  const actParticipantes = parseInt(document.getElementById("act-participantes").value) || 25;
  const actMaterial = document.getElementById("act-material").value.trim() || "Planilla de asistencia, cartulinas, marcadores, papelógrafos";
  const actEstado = document.getElementById("act-estado").value || "En Ejecución";

  const nuevoId = Date.now();
  const taller1Id = nuevoId + 1;

  // Taller 1 generado automáticamente con el formato oficial de planificador Líderes 5_4_24.docx
  const taller1 = {
    id: taller1Id,
    titulo: "Taller 1: Capacitación con Líderes Juveniles - Toma de Decisiones y Plan de Vida",
    fecha: actFecha,
    horas: 3,
    facilitador: actResponsable,
    modalidad: actModalidad,
    lugar: actUe,
    participantes: actParticipantes,
    docPlanificacion: "planificador Lideres 5_4_24.docx",
    docAsistencia: "Planilla_Firmas_Taller1_5_4_24.pdf",
    observaciones: "Taller inicial del proceso formativo de 33 horas. Solicitud de gasto y planificación oficial CIES EDU. EA / RFS 15/2024.",
    presupuestoDetalle: {
      salon: 0.00,
      alimentacion: 325.00,
      pasajes: 386.90,
      viaticos: 0.00,
      materiales: 0.00,
      otros: 0.00,
      total: 711.90
    },
    planificadorOficial: {
      memorandum: {
        a: "Dr. Fernando Álvarez Fuentes - GERENTE REGIONAL CIES LA PAZ",
        via1: "Lic. María Uzeda Romero - JEFA ADMINISTRATIVA CIES LA PAZ",
        via2: "Lic. Gloria O. Arauco Lima - COORDINADORA COMPONENTE EDUCATIVO CIES LA PAZ",
        de: `${actResponsable} - RESPONSABLE AREA EDUCATIVA CIES ${actRegional}`,
        ref: "SOLICITUD DE GASTO - CAPACITACION",
        codigoRef: "CIES EDU. EA / RFS 15/2024",
        fecha: "La Paz, 4 de Abril de 2024"
      },
      objetivoGeneral: "Fortalecer habilidades y destrezas para desarrollar una vida sana, plena e integral de su salud sexual y salud reproductiva.",
      objetivosEspecificos: "1. Reconocer, relacionar y aplicar las destrezas sobre la toma de decisiones y la asertividad para la vivencia de la sexualidad y el cuidado de la salud.\n2. Fortalecer al análisis de cada uno de los pasos de la toma de decisiones.\n3. Integrar las herramientas aplicadas durante el proceso de formación, en la construcción de su plan de vida para su realización personal.\n4. Reflexionar acerca de las limitaciones para cumplir con el plan de vida de manera que no se convierta en un sentimiento de frustración, sino como herramienta flexible y susceptible a ser modificable.",
      metodologia: "Activa- participativa",
      datosGrupo: "Hombres y mujeres adolescentes y jóvenes, de unidades educativas, institutos y Universidades de El Alto",
      resultadosEsperados: "• Se logrará reconocer, relacionar y aplicar las destrezas sobre la toma de decisiones y la asertividad para la vivencia de la sexualidad y el cuidado de la salud.\n• Se logrará fortalecer al análisis de cada uno de los pasos de la toma de decisiones.\n• Se logrará integrar las herramientas aplicadas durante el proceso de formación, en la construcción de su plan de vida para su realización personal.\n• Se logrará reflexionar acerca de las limitaciones para cumplir con el plan de vida de manera que no se convierta en frustración sino en resiliencia.",
      participantes: actParticipantes,
      cronograma: [
        { hora: "15:00 - 15:15", tema: "Inscripción", contenido: "Los participantes se registrarán en la planilla de asistencia", tecnica: "Registro", recursos: "Planilla de Asistencia", responsable: actResponsable },
        { hora: "15:15 - 15:45", tema: "Actividad energizante", contenido: "Dinámica grupal introductoria de integración y confianza", tecnica: "“Florencia”", recursos: "Ninguno", responsable: actResponsable },
        { hora: "15:45 - 16:45", tema: "TOMA DE DECISIONES", contenido: "Dividir en cuatro grupos: Guerreros, Cazadores, Sabios, Agricultores en simulación de isla desierta y alianza para viaje por mar.", tecnica: "“Salvando la vida”", recursos: "Papel tamaño oficio, marcadores delgados, bolígrafo", responsable: actResponsable },
        { hora: "16:45 - 17:45", tema: "PLAN DE VIDA", contenido: "Distribución de matriz de proyección hacia el 2030, facilitación guiada y reflexión sobre metas personales y proyecto de vida.", tecnica: "“El año 2030”", recursos: "Papelógrafos, marcadores gruesos, hojas tamaño oficio", responsable: actResponsable },
        { hora: "17:45 - 18:00", tema: "Cierre", contenido: "Conclusiones, acuerdos conjuntos y evaluación participativa.", tecnica: "Lluvia de ideas", recursos: "Tarjetas de cartulina", responsable: actResponsable }
      ]
    }
  };

  const nuevoItem = {
    id: nuevoId,
    titulo: actTitulo,
    categoriaPlanilla: actCategoria,
    tipo: actTipo,
    modalidad: actModalidad,
    area: actArea,
    regional: actRegional,
    unidadEducativa: actUe,
    fecha: actFecha,
    responsable: actResponsable,
    participantesCount: actParticipantes,
    materialDistribuido: actMaterial,
    refManana: document.getElementById("act-ref-m")?.checked ?? false,
    almuerzo: document.getElementById("act-almuerzo")?.checked ?? true,
    refTarde: document.getElementById("act-ref-t")?.checked ?? true,
    cena: document.getElementById("act-cena")?.checked ?? false,
    estado: actEstado,
    esProcesoEducativo: true,
    conEjecucionPresupuestaria: true,
    totalPresupuesto: 711.90,
    totalHoras: 3,
    documentoGeneral: {
      titulo: "Plan Metodológico y Curricular de Capacitación con Líderes Juveniles (33 Horas)",
      archivo: "planificador Lideres 5_4_24.docx"
    },
    talleres: [taller1],
    gastos: []
  };

  db.actividades.unshift(nuevoItem);
  saveDB(db);
  closeModal("modal-actividad");
  renderActividades();

  showToast(`¡Planilla creada con éxito! Se generó el Proceso Educativo con su Taller 1 oficial (3 hrs, Bs. 711.90).`, "success");

  // Abrir inmediatamente el Workspace en el Paso 3 (Talleres & Planificador)
  abrirEspacioTrabajoActividad(nuevoItem.id, 3);
}

function editActividad(id) {
  const db = getDB();
  const item = db.actividades.find(a => a.id === id);
  if (item) openModalActividad(item);
}

function deleteActividad(id) {
  if (confirm("¿Deseas eliminar este registro de actividad?")) {
    const db = getDB();
    db.actividades = db.actividades.filter(a => a.id !== id);
    saveDB(db);
    showToast("Actividad eliminada", "warning");
  }
}

// -------------------------------------------------------------
// EVALUACIÓN DE IMPACTO PEDAGÓGICO: PRE-TEST & POST-TEST (SGC-Misional-E-3)
// -------------------------------------------------------------
let currentEvaluacionActId = null;
let currentTestTipo = 'pre';
let currentTestActId = null;
let currentTestModoCalificacion = 'preguntas';

function openModalEvaluacion(actividadId) {
  const db = getDB();
  const act = db.actividades.find(a => a.id === actividadId);
  if (!act) return;

  // Preinscripción es opcional: no bloquea las evaluaciones de participantes
  currentEvaluacionActId = actividadId;

  document.getElementById("eval-actividad-id").value = act.id;
  document.getElementById("eval-taller-subtitulo").innerText = 
    `Taller: "${act.titulo}" • Responsable: ${act.responsable} • Fecha: ${act.fecha} • Sede: ${act.unidadEducativa} (${act.area})`;

  // Llenar selector de participantes
  const selectPart = document.getElementById("eval-participante-select");
  if (selectPart) {
    selectPart.innerHTML = '<option value="">-- Seleccionar de la nómina --</option>' +
      db.participantes.map(p => `
        <option value="${p.nombres} ${p.apellidos}" data-ci="${p.ci}">${p.nombres} ${p.apellidos} (${p.ci} - ${p.cargoOcupacion || 'Participante'})</option>
      `).join("");
  }

  // Reset inputs
  document.getElementById("eval-input-pre").value = "";
  document.getElementById("eval-input-post").value = "";

  renderEvaluacionesModal(act.id);
  const modal = document.getElementById("modal-evaluacion-test");
  if (modal) modal.classList.remove("hidden");
}

function renderEvaluacionesModal(actividadId) {
  const db = getDB();
  const evals = (db.evaluacionesPrePost || []).filter(e => e.actividadId === actividadId);
  const tbody = document.getElementById("table-evaluaciones-participantes");

  // Actualizar enlaces oficiales hacia la página pública independiente (evaluacion.html)
  const fullUrl = window.location.href.split('?')[0].split('#')[0];
  const basePath = fullUrl.substring(0, fullUrl.lastIndexOf('/') + 1);
  const linkPre = `${basePath}evaluacion.html?tipo=pre&actId=${actividadId}`;
  const linkPost = `${basePath}evaluacion.html?tipo=post&actId=${actividadId}`;

  const inputPre = document.getElementById("eval-link-pre-input");
  const inputPost = document.getElementById("eval-link-post-input");
  if (inputPre) inputPre.value = linkPre;
  if (inputPost) inputPost.value = linkPost;

  const countPre = evals.filter(e => e.preTest !== null && e.preTest !== undefined && e.preTest !== "").length;
  const countPost = evals.filter(e => e.postTest !== null && e.postTest !== undefined && e.postTest !== "").length;
  const elCountPre = document.getElementById("eval-count-pre");
  const elCountPost = document.getElementById("eval-count-post");
  if (elCountPre) elCountPre.textContent = countPre;
  if (elCountPost) elCountPost.textContent = countPost;

  if (!tbody) return;

  if (evals.length === 0) {
    document.getElementById("eval-stat-pre").innerText = "0%";
    document.getElementById("eval-stat-post").innerText = "0%";
    document.getElementById("eval-stat-delta").innerText = "+0%";
    document.getElementById("eval-stat-satisfaccion").innerText = "0%";
    tbody.innerHTML = `<tr><td colspan="6" class="py-6 text-center text-slate-400">Aún no se registraron evaluaciones Pre-Test / Post-Test para este taller.</td></tr>`;
    return;
  }

  const avgPre = Math.round(evals.reduce((s, e) => s + e.preTest, 0) / evals.length);
  const avgPost = Math.round(evals.reduce((s, e) => s + e.postTest, 0) / evals.length);
  const delta = avgPost - avgPre;
  const avgSat = Math.round(evals.reduce((s, e) => s + (e.satisfaccion || 90), 0) / evals.length);

  document.getElementById("eval-stat-pre").innerText = `${avgPre}%`;
  document.getElementById("eval-stat-post").innerText = `${avgPost}%`;
  document.getElementById("eval-stat-delta").innerText = `${delta >= 0 ? '+' : ''}${delta}%`;
  document.getElementById("eval-stat-satisfaccion").innerText = `${avgSat}%`;

  tbody.innerHTML = evals.map(e => {
    const diff = e.postTest - e.preTest;
    const aprobado = e.postTest >= 70;
    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3">
          <p class="font-bold text-slate-800">${e.participanteNombre}</p>
          <p class="text-[10px] text-slate-400 font-mono">${e.ci || 'Sin CI'}</p>
        </td>
        <td class="py-2.5 px-3 text-center font-mono font-semibold text-blue-700">${e.preTest}%</td>
        <td class="py-2.5 px-3 text-center font-mono font-bold text-emerald-700">${e.postTest}%</td>
        <td class="py-2.5 px-3 text-center">
          <span class="px-2 py-0.5 rounded-full text-xs font-bold ${diff >= 0 ? 'bg-purple-100 text-purple-800' : 'bg-rose-100 text-rose-800'}">
            ${diff >= 0 ? '+' : ''}${diff}%
          </span>
        </td>
        <td class="py-2.5 px-3 text-center">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold ${aprobado ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
            ${aprobado ? '✓ Aprobado / Culminado' : '⏳ En Refuerzo'}
          </span>
        </td>
        <td class="py-2.5 px-3 text-right">
          <button onclick="deleteEvaluacionRow(${e.id})" class="text-rose-600 hover:text-rose-800 font-semibold text-xs hover:underline">Quitar</button>
        </td>
      </tr>
    `;
  }).join("");
}

function handleSaveEvaluacionRow(e) {
  e.preventDefault();
  const db = getDB();
  const actId = parseInt(document.getElementById("eval-actividad-id").value);
  const partSelect = document.getElementById("eval-participante-select");
  const partNombre = partSelect.value;
  const partCI = partSelect.options[partSelect.selectedIndex]?.getAttribute("data-ci") || "";
  const pre = parseInt(document.getElementById("eval-input-pre").value) || 0;
  const post = parseInt(document.getElementById("eval-input-post").value) || 0;

  if (!partNombre) {
    alert("Por favor selecciona un participante de la nómina.");
    return;
  }

  if (!db.evaluacionesPrePost) db.evaluacionesPrePost = [];

  const existingIdx = db.evaluacionesPrePost.findIndex(ev => ev.actividadId === actId && ev.participanteNombre === partNombre);
  const newRow = {
    id: existingIdx !== -1 ? db.evaluacionesPrePost[existingIdx].id : Date.now(),
    actividadId: actId,
    participanteNombre: partNombre,
    ci: partCI,
    preTest: pre,
    postTest: post,
    satisfaccion: Math.floor(Math.random() * 10) + 90, // 90% a 100% de satisfacción
    estado: post >= 70 ? "Culminado" : "En Proceso"
  };

  if (existingIdx !== -1) {
    db.evaluacionesPrePost[existingIdx] = newRow;
    showToast(`Nota actualizada para ${partNombre}`, "info");
  } else {
    db.evaluacionesPrePost.push(newRow);
    showToast(`Evaluación guardada (Δ: ${post - pre >= 0 ? '+' : ''}${post - pre}%)`, "success");
  }

  saveDB(db);
  renderEvaluacionesModal(actId);
  renderActividades();

  document.getElementById("eval-input-pre").value = "";
  document.getElementById("eval-input-post").value = "";
}

function deleteEvaluacionRow(evalId) {
  if (confirm("¿Deseas eliminar este registro de evaluación?")) {
    const db = getDB();
    const evalItem = (db.evaluacionesPrePost || []).find(e => e.id === evalId);
    const actId = evalItem ? evalItem.actividadId : null;

    db.evaluacionesPrePost = (db.evaluacionesPrePost || []).filter(e => e.id !== evalId);
    saveDB(db);
    showToast("Evaluación eliminada", "warning");

    if (actId) renderEvaluacionesModal(actId);
    renderActividades();
  }
}

function copiarLinkEvaluacion(tipo) {
  const inputId = tipo === 'pre' ? "eval-link-pre-input" : "eval-link-post-input";
  const input = document.getElementById(inputId);
  if (!input) return;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(input.value).then(() => {
      showToast(`¡Enlace del Formulario ${tipo === 'pre' ? 'Pre-Test' : 'Post-Test'} copiado al portapapeles!`, "success");
    }).catch(() => {
      input.select();
      document.execCommand("copy");
      showToast(`¡Enlace copiado al portapapeles!`, "success");
    });
  } else {
    input.select();
    document.execCommand("copy");
    showToast(`¡Enlace copiado al portapapeles!`, "success");
  }
}

function abrirFormularioEvaluacionPorLink(tipo, actId = null) {
  const db = getDB();
  const targetActId = actId || currentEvaluacionActId || (db.actividades[0] ? db.actividades[0].id : 1);
  const fullUrl = window.location.href.split('?')[0].split('#')[0];
  const basePath = fullUrl.substring(0, fullUrl.lastIndexOf('/') + 1);
  const url = `${basePath}evaluacion.html?tipo=${tipo}&actId=${targetActId}`;
  window.open(url, "_blank");
}

function abrirModalInternoEvaluacion(tipo, actId = null) {
  const db = getDB();
  const targetActId = actId || currentEvaluacionActId || (db.actividades[0] ? db.actividades[0].id : 1);
  const act = db.actividades.find(a => a.id === targetActId);
  if (!act) return;

  currentTestTipo = tipo;
  currentTestActId = targetActId;
  currentTestModoCalificacion = 'preguntas';

  // Configurar estilo y encabezado dinámico
  const modalHeader = document.getElementById("test-modal-header");
  const iconBadge = document.getElementById("test-modal-icon-badge");
  const titleEl = document.getElementById("test-modal-title");
  const badgeEl = document.getElementById("test-modal-badge");
  const subEl = document.getElementById("test-modal-subtitulo");
  const submitBtn = document.getElementById("btn-submit-finalizar-test");

  if (tipo === 'pre') {
    if (modalHeader) modalHeader.className = "p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 sticky top-0 z-10";
    if (iconBadge) {
      iconBadge.className = "w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm";
      iconBadge.textContent = "📋";
    }
    if (titleEl) titleEl.textContent = "Formulario de Evaluación Inicial (Pre-Test)";
    if (badgeEl) {
      badgeEl.className = "px-2 py-0.5 rounded text-[10px] font-black bg-blue-100 text-blue-800 border border-blue-200";
      badgeEl.textContent = "Línea Base";
    }
    if (submitBtn) {
      submitBtn.className = "px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs cursor-pointer flex items-center gap-1.5 transition-colors";
      submitBtn.innerHTML = "<span>✓ Finalizar Pre-Test y Guardar Nota</span>";
    }
  } else {
    if (modalHeader) modalHeader.className = "p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-teal-50 sticky top-0 z-10";
    if (iconBadge) {
      iconBadge.className = "w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm";
      iconBadge.textContent = "🎯";
    }
    if (titleEl) titleEl.textContent = "Formulario de Evaluación de Salida (Post-Test)";
    if (badgeEl) {
      badgeEl.className = "px-2 py-0.5 rounded text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-200";
      badgeEl.textContent = "Evaluación Final";
    }
    if (submitBtn) {
      submitBtn.className = "px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs cursor-pointer flex items-center gap-1.5 transition-colors";
      submitBtn.innerHTML = "<span>✓ Finalizar Post-Test y Guardar Nota</span>";
    }
  }

  if (subEl) subEl.textContent = `Taller: "${act.titulo}" • Sede: ${act.unidadEducativa} (${act.regional || 'CBBA'})`;

  // Llenar datalist de participantes sugeridos
  const datalist = document.getElementById("test-lista-participantes-sugeridos");
  if (datalist) {
    datalist.innerHTML = db.participantes.map(p => `
      <option value="${p.nombres} ${p.apellidos}" data-ci="${p.ci}">${p.ci} - ${p.cargoOcupacion || 'Participante'}</option>
    `).join("");
  }

  // Resetear campos
  const formEl = document.getElementById("form-test-evaluacion");
  if (formEl) formEl.reset();

  const nombreInput = document.getElementById("test-form-nombre");
  const ciInput = document.getElementById("test-form-ci");
  const directInput = document.getElementById("test-form-nota-directa");
  if (nombreInput) nombreInput.value = "";
  if (ciInput) ciInput.value = "";
  if (directInput) directInput.value = "";

  cambiarModoCalificacionTest('preguntas');
  calcularNotaDeCuestionarioTest();
  actualizarNotaPreviewDirecta();

  // Ocultar alerta de último registro al abrir nuevo
  const alertEl = document.getElementById("test-alerta-ultimo-registro");
  if (alertEl) alertEl.classList.add("hidden");

  // Actualizar conteo de la pestaña de notas
  actualizarConteoPestanaNotas();

  // Mostrar en vista formulario
  cambiarPestanaTestModal('formulario');

  // Abrir modal
  const modal = document.getElementById("modal-formulario-test-publico");
  if (modal) modal.classList.remove("hidden");
}

function handleTestParticipanteSeleccion(val) {
  if (!val) return;
  const db = getDB();
  const match = db.participantes.find(p => `${p.nombres} ${p.apellidos}`.toLowerCase() === val.trim().toLowerCase());
  if (match) {
    const ciInput = document.getElementById("test-form-ci");
    if (ciInput) ciInput.value = match.ci;
  }
}

function cambiarPestanaTestModal(pestana) {
  const vistaForm = document.getElementById("test-vista-formulario");
  const vistaRes = document.getElementById("test-vista-resultados");
  const tabForm = document.getElementById("tab-btn-formulario-test");
  const tabRes = document.getElementById("tab-btn-resultados-test");

  const activeBorderClass = currentTestTipo === 'pre' ? "border-blue-600 text-blue-700" : "border-emerald-600 text-emerald-700";

  if (pestana === 'formulario') {
    if (vistaForm) vistaForm.classList.remove("hidden");
    if (vistaRes) vistaRes.classList.add("hidden");
    if (tabForm) {
      tabForm.className = `px-3.5 py-2 font-bold text-xs border-b-2 ${activeBorderClass} transition-colors cursor-pointer flex items-center gap-1.5`;
    }
    if (tabRes) {
      tabRes.className = "px-3.5 py-2 font-semibold text-xs border-b-2 border-transparent text-slate-500 hover:text-slate-700 transition-colors cursor-pointer flex items-center gap-1.5";
    }
  } else {
    if (vistaForm) vistaForm.classList.add("hidden");
    if (vistaRes) vistaRes.classList.remove("hidden");
    if (tabRes) {
      tabRes.className = `px-3.5 py-2 font-bold text-xs border-b-2 ${activeBorderClass} transition-colors cursor-pointer flex items-center gap-1.5`;
    }
    if (tabForm) {
      tabForm.className = "px-3.5 py-2 font-semibold text-xs border-b-2 border-transparent text-slate-500 hover:text-slate-700 transition-colors cursor-pointer flex items-center gap-1.5";
    }
    mostrarResultadosTest(currentTestTipo, currentTestActId);
  }
}

function cambiarModoCalificacionTest(modo) {
  currentTestModoCalificacion = modo;
  const bloquePreg = document.getElementById("test-bloque-preguntas");
  const bloqueDir = document.getElementById("test-bloque-nota-directa");
  const btnPreg = document.getElementById("btn-modo-preguntas");
  const btnDir = document.getElementById("btn-modo-directo");

  if (modo === 'preguntas') {
    if (bloquePreg) bloquePreg.classList.remove("hidden");
    if (bloqueDir) bloqueDir.classList.add("hidden");
    if (btnPreg) btnPreg.className = "px-2.5 py-1 rounded bg-indigo-600 text-white cursor-pointer transition-colors";
    if (btnDir) btnDir.className = "px-2.5 py-1 rounded text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors";
    calcularNotaDeCuestionarioTest();
  } else {
    if (bloquePreg) bloquePreg.classList.add("hidden");
    if (bloqueDir) bloqueDir.classList.remove("hidden");
    if (btnDir) btnDir.className = "px-2.5 py-1 rounded bg-indigo-600 text-white cursor-pointer transition-colors";
    if (btnPreg) btnPreg.className = "px-2.5 py-1 rounded text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors";
    actualizarNotaPreviewDirecta();
  }
}

function calcularNotaDeCuestionarioTest() {
  let puntos = 0;
  for (let i = 1; i <= 5; i++) {
    const radios = document.getElementsByName(`test-q${i}`);
    for (const r of radios) {
      if (r.checked && r.value === 'correcta') {
        puntos += 20;
      }
    }
  }
  const scoreEl = document.getElementById("test-calc-score");
  if (scoreEl) scoreEl.textContent = puntos;
  return puntos;
}

function actualizarNotaPreviewDirecta() {
  const val = parseInt(document.getElementById("test-form-nota-directa")?.value);
  const preview = document.getElementById("test-preview-badge-nota");
  if (!preview) return;
  if (isNaN(val)) {
    preview.textContent = "Ingresa una calificación";
    preview.className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-600";
  } else if (val >= 70) {
    preview.textContent = `✓ Aprobado / Competente (${val} pts)`;
    preview.className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300";
  } else {
    preview.textContent = `⏳ En Refuerzo Pedagógico (${val} pts)`;
    preview.className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300";
  }
}

function finalizarYGuardarTestFormulario(e) {
  e.preventDefault();
  const db = getDB();
  const targetActId = currentTestActId || currentEvaluacionActId;
  const act = db.actividades.find(a => a.id === targetActId);
  if (!act) return;

  const nombreVal = document.getElementById("test-form-nombre")?.value.trim();
  const ciVal = document.getElementById("test-form-ci")?.value.trim();

  if (!nombreVal) {
    showToast("Por favor ingresa el nombre del participante", "warning");
    return;
  }

  let nota = 0;
  if (currentTestModoCalificacion === 'preguntas') {
    nota = calcularNotaDeCuestionarioTest();
  } else {
    nota = parseInt(document.getElementById("test-form-nota-directa")?.value) || 0;
  }

  if (!db.evaluacionesPrePost) db.evaluacionesPrePost = [];

  const existingIdx = db.evaluacionesPrePost.findIndex(ev => ev.actividadId === targetActId && ev.participanteNombre.toLowerCase() === nombreVal.toLowerCase());
  
  if (existingIdx !== -1) {
    if (currentTestTipo === 'pre') {
      db.evaluacionesPrePost[existingIdx].preTest = nota;
    } else {
      db.evaluacionesPrePost[existingIdx].postTest = nota;
      db.evaluacionesPrePost[existingIdx].estado = nota >= 70 ? "Culminado" : "En Proceso";
    }
    if (ciVal) db.evaluacionesPrePost[existingIdx].ci = ciVal;
    showToast(`Nota de ${currentTestTipo === 'pre' ? 'Pre-Test' : 'Post-Test'} actualizada para ${nombreVal} (${nota} pts)`, "info");
  } else {
    const newRow = {
      id: Date.now() + Math.random(),
      actividadId: targetActId,
      participanteNombre: nombreVal,
      ci: ciVal || "Sin CI",
      preTest: currentTestTipo === 'pre' ? nota : null,
      postTest: currentTestTipo === 'post' ? nota : null,
      satisfaccion: Math.floor(Math.random() * 10) + 90,
      estado: currentTestTipo === 'post' ? (nota >= 70 ? "Culminado" : "En Proceso") : "En Proceso"
    };
    db.evaluacionesPrePost.push(newRow);
    showToast(`¡Test finalizado con éxito! ${nombreVal}: ${nota} pts`, "success");
  }

  saveDB(db);

  // Actualizar banner de éxito
  const alertEl = document.getElementById("test-alerta-ultimo-registro");
  const msgEl = document.getElementById("test-mensaje-ultimo-reg");
  if (alertEl) alertEl.classList.remove("hidden");
  if (msgEl) {
    msgEl.textContent = `¡${currentTestTipo === 'pre' ? 'Pre-Test' : 'Post-Test'} finalizado! ${nombreVal} obtuvo una nota de ${nota}/100 pts.`;
  }

  // Actualizar conteos y paneles de fondo
  actualizarConteoPestanaNotas();
  renderEvaluacionesModal(targetActId);
  renderActividades();

  if (typeof currentWorkspaceActId !== "undefined" && currentWorkspaceActId === targetActId) {
    actualizarBadgesSidebarWorkspace(act);
    if (typeof currentWorkspaceStep !== "undefined" && currentWorkspaceStep === 5) renderWorkspacePaso5();
  }

  // Cambiar a la vista de lista de calificaciones con cada participante y su nota
  cambiarPestanaTestModal('resultados');
}

function mostrarResultadosTest(tipo, actId) {
  const db = getDB();
  const targetId = actId || currentTestActId || currentEvaluacionActId || (db.actividades[0] ? db.actividades[0].id : 1);
  const evals = (db.evaluacionesPrePost || []).filter(e => e.actividadId === targetId);

  // Filtrar participantes que tienen nota registrada en este test
  const participantesConNota = evals.filter(e => {
    const nota = tipo === 'pre' ? e.preTest : e.postTest;
    return nota !== null && nota !== undefined && nota !== "";
  });

  const total = participantesConNota.length;
  const notas = participantesConNota.map(e => tipo === 'pre' ? e.preTest : e.postTest);
  const promedio = total > 0 ? Math.round(notas.reduce((s, n) => s + n, 0) / total) : 0;
  const aprobados = participantesConNota.filter(e => (tipo === 'pre' ? e.preTest : e.postTest) >= 70).length;
  const refuerzo = total - aprobados;

  const totalEl = document.getElementById("test-res-total-participantes");
  const promEl = document.getElementById("test-res-promedio");
  const aprEl = document.getElementById("test-res-aprobados");
  const refEl = document.getElementById("test-res-refuerzo");
  const tbody = document.getElementById("test-res-tabla-participantes");

  if (totalEl) totalEl.textContent = total;
  if (promEl) promEl.textContent = `${promedio} pts`;
  if (aprEl) aprEl.textContent = aprobados;
  if (refEl) refEl.textContent = refuerzo;

  const tabConteo = document.getElementById("test-tab-conteo-notas");
  if (tabConteo) tabConteo.textContent = total;

  if (!tbody) return;

  if (participantesConNota.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-6 text-slate-400 font-medium">
          Aún no se han registrado calificaciones para el <strong>${tipo === 'pre' ? 'Pre-Test' : 'Post-Test'}</strong> en este taller.
          <br>
          <button type="button" onclick="cambiarPestanaTestModal('formulario')" class="mt-2 px-3 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-lg text-xs cursor-pointer">
            + Llenar el primer formulario ahora
          </button>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = participantesConNota.map((e, idx) => {
    const nota = tipo === 'pre' ? e.preTest : e.postTest;
    const esAprobado = nota >= 70;
    const colorBarra = esAprobado ? "bg-emerald-500" : "bg-amber-500";
    const badgeColor = esAprobado
      ? "bg-emerald-100 text-emerald-800 border-emerald-300"
      : "bg-amber-100 text-amber-800 border-amber-300";
    const estadoTexto = esAprobado ? "✓ Aprobado / Competente" : "⏳ En Refuerzo Pedagógico";

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-bold text-slate-400 text-xs">${idx + 1}</td>
        <td class="py-2.5 px-3 font-bold text-slate-800">
          <div>${escapeHtml(e.participanteNombre)}</div>
        </td>
        <td class="py-2.5 px-3 text-slate-500 font-mono text-[11px] whitespace-nowrap">${escapeHtml(e.ci || 'Sin CI')}</td>
        <td class="py-2.5 px-3 text-center whitespace-nowrap">
          <div class="inline-flex items-center gap-1.5 font-black text-sm ${esAprobado ? 'text-emerald-700' : 'text-amber-700'}">
            <span>${nota}</span>
            <span class="text-[10px] text-slate-400 font-normal">/ 100</span>
          </div>
          <div class="w-20 mx-auto bg-slate-100 h-1.5 rounded-full overflow-hidden mt-0.5">
            <div class="${colorBarra} h-full rounded-full" style="width: ${nota}%"></div>
          </div>
        </td>
        <td class="py-2.5 px-3 text-center whitespace-nowrap">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${badgeColor}">
            ${estadoTexto}
          </span>
        </td>
        <td class="py-2.5 px-2 text-center whitespace-nowrap">
          <button type="button" onclick="eliminarNotaParticipanteTest(${e.id})" class="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Quitar calificación">
            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function actualizarConteoPestanaNotas() {
  const db = getDB();
  const targetId = currentTestActId || currentEvaluacionActId;
  if (!targetId) return;
  const evals = (db.evaluacionesPrePost || []).filter(e => e.actividadId === targetId);
  const count = evals.filter(e => {
    const n = currentTestTipo === 'pre' ? e.preTest : e.postTest;
    return n !== null && n !== undefined && n !== "";
  }).length;
  const tabConteo = document.getElementById("test-tab-conteo-notas");
  if (tabConteo) tabConteo.textContent = count;
}

function verResultadosTestModal(tipo, actId = null) {
  abrirModalInternoEvaluacion(tipo, actId);
  cambiarPestanaTestModal('resultados');
}

function copiarListaNotasTexto() {
  const db = getDB();
  const targetId = currentTestActId || currentEvaluacionActId;
  const act = db.actividades.find(a => a.id === targetId);
  const evals = (db.evaluacionesPrePost || []).filter(e => e.actividadId === targetId);

  const participantesConNota = evals.filter(e => {
    const nota = currentTestTipo === 'pre' ? e.preTest : e.postTest;
    return nota !== null && nota !== undefined && nota !== "";
  });

  if (participantesConNota.length === 0) {
    showToast("No hay calificaciones para copiar en este test", "info");
    return;
  }

  const tituloTest = currentTestTipo === 'pre' ? "PRE-TEST (LÍNEA BASE)" : "POST-TEST (EVALUACIÓN DE SALIDA)";
  let texto = `*ACTA DE CALIFICACIONES CIES - ${tituloTest}*\n`;
  texto += `Taller: ${act ? act.titulo : 'Capacitación CIES'}\n`;
  texto += `Fecha: ${act ? act.fecha : new Date().toLocaleDateString()}\n`;
  texto += `Total Evaluados: ${participantesConNota.length}\n`;
  texto += `----------------------------------------\n`;
  
  participantesConNota.forEach((e, idx) => {
    const nota = currentTestTipo === 'pre' ? e.preTest : e.postTest;
    const est = nota >= 70 ? "APROBADO" : "EN REFUERZO";
    texto += `${idx + 1}. ${e.participanteNombre} (CI: ${e.ci || '-'}) -> ${nota}/100 pts [${est}]\n`;
  });
  texto += `----------------------------------------\n`;
  const notas = participantesConNota.map(e => currentTestTipo === 'pre' ? e.preTest : e.postTest);
  const avg = Math.round(notas.reduce((s, n) => s + n, 0) / notas.length);
  texto += `Promedio General del Grupo: ${avg}/100 pts\n`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto).then(() => {
      showToast("¡Lista de notas copiada al portapapeles!", "success");
    }).catch(() => {
      showToast("Error al copiar al portapapeles", "warning");
    });
  } else {
    showToast("¡Lista de notas generada!", "info");
  }
}

function eliminarNotaParticipanteTest(evalId) {
  if (!confirm("¿Deseas quitar esta calificación de la lista?")) return;
  const db = getDB();
  const idx = (db.evaluacionesPrePost || []).findIndex(e => e.id === evalId);
  if (idx !== -1) {
    if (currentTestTipo === 'pre') {
      db.evaluacionesPrePost[idx].preTest = null;
    } else {
      db.evaluacionesPrePost[idx].postTest = null;
    }
    if ((db.evaluacionesPrePost[idx].preTest === null || db.evaluacionesPrePost[idx].preTest === undefined) &&
        (db.evaluacionesPrePost[idx].postTest === null || db.evaluacionesPrePost[idx].postTest === undefined)) {
      db.evaluacionesPrePost.splice(idx, 1);
    }
    saveDB(db);
    showToast("Calificación removida de la nómina", "info");
    mostrarResultadosTest(currentTestTipo, currentTestActId);
    renderEvaluacionesModal(currentTestActId);
    renderActividades();
  }
}

// =============================================================
// GESTIÓN DE PRERREGISTRO PREVIO AL INICIO (SGC-Apoyo-ABS-1-pr1)
// =============================================================
let currentPreregistroActId = null;

function abrirModalPreregistro(actividadId) {
  const db = getDB();
  const act = db.actividades.find(a => a.id === actividadId);
  if (!act) {
    showToast("No se encontró la actividad seleccionada", "warning");
    return;
  }

  currentPreregistroActId = actividadId;

  // Actualizar subtítulo del modal
  const subEl = document.getElementById("prereg-modal-subtitulo");
  if (subEl) {
    subEl.textContent = `Actividad: ${act.titulo} • ${act.unidadEducativa} (${act.regional || 'CBBA'})`;
  }

  // Generar URL pública para compartir
  const loc = window.location.href.split('#')[0].split('?')[0];
  const baseUrl = loc.substring(0, loc.lastIndexOf('/') + 1);
  const publicUrl = `${baseUrl}preregistro.html?actId=${actividadId}`;
  const inputLink = document.getElementById("prereg-link-input");
  if (inputLink) {
    inputLink.value = publicUrl;
  }

  cambiarPestanaPreregistro('lista');
  renderModalPreregistro(actividadId);

  const modal = document.getElementById("modal-preregistro-actividad");
  if (modal) modal.classList.remove("hidden");
}

function renderModalPreregistro(actividadId) {
  const db = getDB();
  const act = db.actividades.find(a => a.id === actividadId);
  if (!act) return;

  const lista = (db.preregistros || []).filter(p => p.actividadId === actividadId);
  const total = lista.length;
  const confirmados = lista.filter(p => p.confirmado !== false && p.asistenciaConfirmada !== false).length;
  const pendientes = total - confirmados;
  const pct = total > 0 ? Math.round((confirmados / total) * 100) : 0;

  // Actualizar métricas
  const statTotal = document.getElementById("prereg-stat-total");
  const statConf = document.getElementById("prereg-stat-confirmados");
  const statPct = document.getElementById("prereg-stat-pct-confirmados");
  const statPend = document.getElementById("prereg-stat-pendientes");
  const statPlanilla = document.getElementById("prereg-stat-planilla-actual");
  const conteoTab = document.getElementById("prereg-conteo-tab");

  if (statTotal) statTotal.textContent = total;
  if (statConf) statConf.textContent = confirmados;
  if (statPct) statPct.textContent = `${pct}% confirmación`;
  if (statPend) statPend.textContent = pendientes;
  if (statPlanilla) statPlanilla.textContent = `${act.participantesCount || 0} pers.`;
  if (conteoTab) conteoTab.textContent = total;

  // Renderizar tabla de preinscritos
  const tbody = document.getElementById("tabla-preregistros-body");
  if (!tbody) return;

  if (lista.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center py-8 text-slate-400">
          <p class="font-semibold text-slate-600">Aún no hay participantes preinscritos para esta actividad.</p>
          <p class="text-[11px] text-slate-400 mt-1 max-w-md mx-auto">
            Comparte el enlace público de arriba con los estudiantes o utiliza la pestaña <strong>"➕ Preinscribir Participante Manualmente"</strong> para registrar a quienes confirmaron con anticipación.
          </p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = lista.map((p, idx) => {
    const isConf = p.confirmado !== false && p.asistenciaConfirmada !== false;
    const cleanCel = (p.celular || "").replace(/\D/g, "");
    const waLink = cleanCel.length >= 8 ? `https://wa.me/591${cleanCel}` : null;

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-bold text-slate-400">${idx + 1}</td>
        <td class="py-2.5 px-3">
          <div class="font-bold text-slate-900">${escapeHtml(p.nombre)}</div>
          <div class="text-[11px] text-slate-400">
            ${p.edad ? `${p.edad} años` : ''} 
            ${p.genero ? `• ${p.genero === 'F' ? 'Fem' : p.genero === 'M' ? 'Masc' : p.genero}` : ''}
            ${p.comentarios ? `• <span class="italic text-slate-500">"${escapeHtml(p.comentarios)}"</span>` : ''}
          </div>
        </td>
        <td class="py-2.5 px-3 font-mono font-bold text-slate-700 whitespace-nowrap">${escapeHtml(p.ci)}</td>
        <td class="py-2.5 px-3 whitespace-nowrap">
          <div class="flex items-center gap-1.5 font-mono text-slate-700">
            <span>${escapeHtml(p.celular)}</span>
            ${waLink ? `
              <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:text-emerald-800 p-0.5 hover:bg-emerald-50 rounded" title="Enviar WhatsApp directo">
                <svg class="w-3.5 h-3.5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
            ` : ''}
          </div>
        </td>
        <td class="py-2.5 px-3">
          <div class="font-medium text-slate-800">${escapeHtml(p.rol || '-')}</div>
          <div class="text-[10px] text-slate-400 truncate max-w-[150px]" title="${escapeHtml(p.institucion || '')}">${escapeHtml(p.institucion || '-')}</div>
        </td>
        <td class="py-2.5 px-3 text-center whitespace-nowrap">
          <button type="button" onclick="toggleConfirmacionPreregistro(${p.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border transition-colors cursor-pointer ${
            isConf 
              ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100' 
              : 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
          }" title="Haz clic para alternar el estado de confirmación de asistencia">
            <span>${isConf ? '✓ Confirmado' : '⏳ Por Confirmar'}</span>
          </button>
        </td>
        <td class="py-2.5 px-2 text-center whitespace-nowrap">
          <button type="button" onclick="eliminarPreregistro(${p.id})" class="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Eliminar este prerregistro">
            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function cambiarPestanaPreregistro(tab) {
  const tabLista = document.getElementById("tab-prereg-lista");
  const tabNuevo = document.getElementById("tab-prereg-nuevo");
  const vistaLista = document.getElementById("vista-prereg-lista");
  const vistaNuevo = document.getElementById("vista-prereg-nuevo");

  if (!tabLista || !tabNuevo || !vistaLista || !vistaNuevo) return;

  if (tab === 'lista') {
    tabLista.className = "px-3.5 py-2 font-bold text-xs border-b-2 border-amber-600 text-amber-900 transition-colors cursor-pointer flex items-center gap-1.5";
    tabNuevo.className = "px-3.5 py-2 font-semibold text-xs border-b-2 border-transparent text-slate-500 hover:text-slate-700 transition-colors cursor-pointer flex items-center gap-1.5";
    vistaLista.classList.remove("hidden");
    vistaNuevo.classList.add("hidden");
  } else {
    tabNuevo.className = "px-3.5 py-2 font-bold text-xs border-b-2 border-amber-600 text-amber-900 transition-colors cursor-pointer flex items-center gap-1.5";
    tabLista.className = "px-3.5 py-2 font-semibold text-xs border-b-2 border-transparent text-slate-500 hover:text-slate-700 transition-colors cursor-pointer flex items-center gap-1.5";
    vistaNuevo.classList.remove("hidden");
    vistaLista.classList.add("hidden");
    document.getElementById("manual-pre-nombre")?.focus();
  }
}

function copiarLinkPreregistro() {
  const input = document.getElementById("prereg-link-input");
  if (!input || !input.value) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(input.value).then(() => {
      showToast("¡Enlace de prerregistro copiado al portapapeles!", "success");
    }).catch(() => {
      input.select();
      document.execCommand("copy");
      showToast("¡Enlace copiado!", "success");
    });
  } else {
    input.select();
    document.execCommand("copy");
    showToast("¡Enlace copiado!", "success");
  }
}

function abrirPaginaPublicaPreregistro() {
  const input = document.getElementById("prereg-link-input");
  if (input && input.value) {
    window.open(input.value, "_blank");
  }
}

function guardarPreregistroManual(event) {
  event.preventDefault();
  if (!currentPreregistroActId) return;

  const nombre = document.getElementById("manual-pre-nombre")?.value.trim() || "";
  const ci = document.getElementById("manual-pre-ci")?.value.trim() || "";
  const celular = document.getElementById("manual-pre-celular")?.value.trim() || "";
  const edad = parseInt(document.getElementById("manual-pre-edad")?.value) || null;
  const genero = document.getElementById("manual-pre-genero")?.value || "F";
  const rol = document.getElementById("manual-pre-rol")?.value || "Estudiante de Secundaria";
  const institucion = document.getElementById("manual-pre-institucion")?.value.trim() || "";
  const confirmado = document.getElementById("manual-pre-confirmado")?.checked ?? true;

  if (!nombre || !ci || !celular) {
    showToast("Por favor complete nombre, CI y celular", "warning");
    return;
  }

  const db = getDB();
  if (!db.preregistros) db.preregistros = [];

  const ahora = new Date();
  const fechaHora = ahora.toLocaleDateString() + " " + ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Si ya existe por CI en esta actividad, actualizar
  const idx = db.preregistros.findIndex(p => p.actividadId === currentPreregistroActId && (p.ci || "").toLowerCase() === ci.toLowerCase());
  if (idx !== -1) {
    db.preregistros[idx].nombre = nombre;
    db.preregistros[idx].celular = celular;
    db.preregistros[idx].edad = edad;
    db.preregistros[idx].genero = genero;
    db.preregistros[idx].rol = rol;
    db.preregistros[idx].institucion = institucion;
    db.preregistros[idx].confirmado = confirmado;
    db.preregistros[idx].asistenciaConfirmada = confirmado;
    showToast(`Prerregistro de "${nombre}" actualizado con éxito`, "info");
  } else {
    db.preregistros.push({
      id: Date.now(),
      actividadId: currentPreregistroActId,
      nombre,
      ci,
      celular,
      edad,
      genero,
      rol,
      institucion,
      confirmado,
      asistenciaConfirmada: confirmado,
      comentarios: "",
      fecha: fechaHora
    });
    showToast(`Participante "${nombre}" preinscrito correctamente`, "success");
  }

  saveDB(db);

  document.getElementById("form-preregistro-manual")?.reset();
  cambiarPestanaPreregistro('lista');
  renderModalPreregistro(currentPreregistroActId);
  renderActividades();
}

function toggleConfirmacionPreregistro(preregistroId) {
  const db = getDB();
  const idx = (db.preregistros || []).findIndex(p => p.id === preregistroId);
  if (idx !== -1) {
    const estadoActual = db.preregistros[idx].confirmado !== false && db.preregistros[idx].asistenciaConfirmada !== false;
    const nuevoEstado = !estadoActual;
    db.preregistros[idx].confirmado = nuevoEstado;
    db.preregistros[idx].asistenciaConfirmada = nuevoEstado;
    saveDB(db);

    const txt = nuevoEstado ? "Asistencia confirmada" : "Marcado como por confirmar";
    showToast(txt, "info");
    renderModalPreregistro(currentPreregistroActId);
    renderActividades();
  }
}

function eliminarPreregistro(preregistroId) {
  if (!confirm("¿Deseas eliminar este registro previo de participante?")) return;
  const db = getDB();
  db.preregistros = (db.preregistros || []).filter(p => p.id !== preregistroId);
  saveDB(db);
  showToast("Prerregistro eliminado de la nómina previa", "warning");
  renderModalPreregistro(currentPreregistroActId);
  renderActividades();
}

function traspasarPreregistrosAAsistenciaOficial() {
  if (!currentPreregistroActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentPreregistroActId);
  if (!act) return;

  const lista = (db.preregistros || []).filter(p => p.actividadId === currentPreregistroActId);
  const confirmados = lista.filter(p => p.confirmado !== false && p.asistenciaConfirmada !== false);

  if (confirmados.length === 0) {
    showToast("No hay participantes con asistencia confirmada para traspasar", "warning");
    return;
  }

  const msg = `¿Deseas traspasar los ${confirmados.length} participantes confirmados a la planilla oficial de "${act.titulo}"?\n\n• El conteo oficial de la actividad se actualizará a ${confirmados.length} asistentes.\n• Quienes no estén en el padrón general se incorporarán automáticamente.`;
  if (!confirm(msg)) return;

  // 1. Actualizar el conteo de la actividad
  act.participantesCount = confirmados.length;

  // 2. Opcionalmente incorporar al padrón general de participantes si no existen
  if (!db.participantes) db.participantes = [];
  let nuevosIncorporados = 0;

  confirmados.forEach(c => {
    const existe = db.participantes.some(p => (p.ci || "").toLowerCase() === (c.ci || "").toLowerCase());
    if (!existe) {
      db.participantes.unshift({
        id: Date.now() + Math.floor(Math.random() * 1000),
        nombre: c.nombre,
        ci: c.ci,
        celular: c.celular || "",
        edad: c.edad || 20,
        genero: c.genero || "F",
        area: act.area || "Urbana",
        unidadEducativa: c.institucion || act.unidadEducativa,
        rol: c.rol || "Participante Taller",
        estadoFormacion: "En Formación",
        activoEnAula: true,
        fechaRegistro: new Date().toISOString().split("T")[0]
      });
      nuevosIncorporados++;
    }
  });

  saveDB(db);
  showToast(`¡Traspaso exitoso! Planilla actualizada a ${confirmados.length} personas (${nuevosIncorporados} nuevos perfiles registrados en padrón).`, "success");

  renderModalPreregistro(currentPreregistroActId);
  renderActividades();
  if (typeof renderParticipantes === "function") renderParticipantes();
}

// =============================================================
// ESPACIO DE TRABAJO DE ACTIVIDAD POR PASOS (WORKSPACE)
// =============================================================
let currentWorkspaceActId = null;
let currentWorkspaceTallerId = null;
let currentWorkspaceFase = 'planificacion'; // 'planificacion' | 'ejecucion' | 'documentacion' | 'proceso_resumen' | 'proceso_cierre'
let expandedTallerAccordionId = null;
let wsPlanifCronogramaTemp = [];
let wsGastosTemp = [];
let currentWorkspaceStep = 1;

function abrirEspacioTrabajoActividad(actividadId, tallerId = null, fase = 'planificacion') {
  const db = getDB();
  const act = db.actividades.find(a => a.id === actividadId);
  if (!act) {
    showToast("No se encontró la actividad seleccionada", "warning");
    return;
  }

  // Asegurar que act.talleres exista y tenga al menos 1 taller inicial estructurado en 3 fases
  if (!act.talleres || !Array.isArray(act.talleres) || act.talleres.length === 0) {
    act.talleres = [
      {
        id: Date.now(),
        titulo: act.titulo || "Taller 1: Formación Pedagógica",
        fecha: act.fecha || new Date().toISOString().split("T")[0],
        horas: act.totalHoras || 3,
        facilitador: act.responsable || "Facilitador CIES",
        modalidad: "Presencial Abierto",
        lugar: act.unidadEducativa || "Sede CIES",
        participantes: act.participantesCount || 25,
        presupuestoDetalle: {
          salon: 0.00,
          alimentacion: (act.totalPresupuesto && act.totalPresupuesto > 0) ? act.totalPresupuesto : 325.00,
          pasajes: 0.00,
          viaticos: 0.00,
          materiales: 0.00,
          otros: 0.00,
          total: (act.totalPresupuesto && act.totalPresupuesto > 0) ? act.totalPresupuesto : 325.00
        },
        planificadorOficial: {
          memorandum: {
            a: "Dr. Fernando Álvarez Fuentes - GERENTE REGIONAL CIES LA PAZ",
            via1: "Lic. María Uzeda Romero - JEFA ADMINISTRATIVA CIES LA PAZ",
            via2: "Lic. Gloria O. Arauco Lima - COORDINADORA COMPONENTE EDUCATIVO CIES LA PAZ",
            de: `${act.responsable || 'Responsable CIES'} - RESPONSABLE AREA EDUCATIVA`,
            ref: "SOLICITUD DE GASTO - CAPACITACION",
            codigoRef: "CIES EDU. / RFS 2026",
            fecha: act.fecha || new Date().toISOString().split("T")[0]
          },
          objetivoGeneral: "Fortalecer habilidades y destrezas para desarrollar una vida sana, plena e integral de su salud sexual y salud reproductiva.",
          objetivosEspecificos: "1. Fortalecer el análisis de la toma de decisiones y derechos sexuales y reproductivos.\n2. Integrar las herramientas pedagógicas en el plan de vida de los participantes.",
          metodologia: "Activa - participativa",
          datosGrupo: "Población meta de unidades educativas y organizaciones juveniles",
          resultadosEsperados: "• Se logrará reconocer y aplicar destrezas sobre salud sexual y derechos reproductivos.",
          participantes: act.participantesCount || 25,
          cronograma: [
            { hora: "08:30 - 09:00", tema: "Inscripción", contenido: "Registro de firmas en planilla de asistencia física", tecnica: "Registro", recursos: "Planilla SGC", responsable: act.responsable || "Facilitador" },
            { hora: "09:00 - 10:30", tema: "Desarrollo Temático", contenido: "Presentación participativa y debate guiado", tecnica: "Exposición dialógica", recursos: "Papelógrafos, marcadores", responsable: act.responsable || "Facilitador" },
            { hora: "10:30 - 11:30", tema: "Conclusiones y Cierre", contenido: "Plenaria grupal y acuerdos", tecnica: "Lluvia de ideas", recursos: "Tarjetas", responsable: act.responsable || "Facilitador" }
          ]
        },
        ejecucion: {
          refManana: !!act.refManana,
          almuerzo: !!act.almuerzo,
          refTarde: !!act.refTarde,
          cena: !!act.cena,
          materialDistribuido: act.materialDistribuido || "Cartillas informativas y rotafolios",
          participantesAsistentes: act.participantesCount || 25,
          preTestPromedio: 60
        },
        documentacion: {
          docAsistencia: "Planilla_Firmas_Oficial.pdf",
          descargosGastos: [
            { concepto: "Alimentación y Refrigerios", partida: "Alimentación y Refrigerios", monto: (act.totalPresupuesto || 325), comprobante: "Factura N° 101" }
          ],
          fotos: ["Registro_Aula_1.jpg"],
          estadoSGC: "Validado Orientador",
          validador: "Lic. Miriam Morales (Orientador/a SSSR)",
          fechaValidacion: new Date().toISOString().split("T")[0],
          notasValidacion: "Planilla y descargos cotejados."
        }
      }
    ];
    saveDB(db);
  }

  currentWorkspaceActId = actividadId;

  // Soporte flexible para el orden de parámetros (actId, tallerId, fase) o (actId, fase, tallerId)
  if (typeof tallerId === "string" && (tallerId === 'planificacion' || tallerId === 'ejecucion' || tallerId === 'documentacion' || tallerId === 'proceso_resumen' || tallerId === 'proceso_cierre')) {
    const tempFase = tallerId;
    tallerId = (typeof fase === "number") ? fase : null;
    fase = tempFase;
  }

  // Si tallerId no fue provisto o es un número paso antiguo (1, 2, 3, 4, 5)
  if (typeof tallerId === "number" && tallerId <= 5 && !act.talleres.some(t => t.id === tallerId)) {
    if (tallerId === 1) fase = 'planificacion';
    else if (tallerId === 2) fase = 'ejecucion';
    else if (tallerId === 3) fase = 'documentacion';
    else if (tallerId === 4) fase = 'proceso_resumen';
    else if (tallerId === 5) fase = 'proceso_cierre';
    tallerId = act.talleres[0].id;
  }

  let tallerSeleccionado = act.talleres.find(t => t.id === tallerId);
  if (!tallerSeleccionado) {
    tallerSeleccionado = act.talleres[0];
  }
  currentWorkspaceTallerId = tallerSeleccionado.id;
  currentWorkspaceFase = fase || 'planificacion';
  expandedTallerAccordionId = tallerSeleccionado.id;

  // 1. Alternar barra lateral izquierda
  const navGlobal = document.getElementById("sidebar-nav-global");
  const navActividad = document.getElementById("sidebar-nav-actividad");
  if (navGlobal) navGlobal.classList.add("hidden");
  if (navActividad) navActividad.classList.remove("hidden");

  // 2. Renderizar sidebar de actividad y header
  renderSidebarActividad(act);
  actualizarHeaderWorkspace(act);

  // 3. Cambiar a vista 'actividad-workspace'
  navigateTo("actividad-workspace");

  // 4. Ir a la fase seleccionada
  irAFaseTaller(currentWorkspaceTallerId, currentWorkspaceFase);
}

function cerrarEspacioTrabajoActividad() {
  currentWorkspaceActId = null;
  currentWorkspaceTallerId = null;
  currentWorkspaceFase = 'planificacion';

  // Restaurar barra lateral global
  const navGlobal = document.getElementById("sidebar-nav-global");
  const navActividad = document.getElementById("sidebar-nav-actividad");
  if (navGlobal) navGlobal.classList.remove("hidden");
  if (navActividad) navActividad.classList.add("hidden");

  // Volver a la lista general de actividades
  navigateTo("actividades");
}

function actualizarHeaderWorkspace(act) {
  if (!act) return;
  const wsCat = document.getElementById("ws-breadcrumb-cat");
  const wsBadgeId = document.getElementById("ws-header-badge-id");
  const wsBadgeReg = document.getElementById("ws-header-badge-reg");
  const wsBadgePres = document.getElementById("ws-header-badge-pres");
  const wsBadgeHoras = document.getElementById("ws-header-badge-horas");
  const wsHeaderTit = document.getElementById("ws-header-titulo");
  const wsHeaderSede = document.getElementById("ws-header-sede");
  const wsHeaderResp = document.getElementById("ws-header-resp");
  const wsHeaderFecha = document.getElementById("ws-header-fecha");

  if (wsCat) wsCat.textContent = act.categoriaPlanilla || "Planilla Oficial CIES (SGC Líderes 5_4_24)";
  if (wsBadgeId) wsBadgeId.textContent = `ACT-${String(act.id).slice(-3)}`;
  if (wsBadgeReg) wsBadgeReg.textContent = act.regional || "EA";

  const talleres = act.talleres || [];
  const hrs = talleres.reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);
  const totalPres = talleres.reduce((sum, t) => sum + (t.presupuestoDetalle ? parseFloat(t.presupuestoDetalle.total || 0) : (parseFloat(t.presupuesto) || 0)), 0);

  if (wsBadgePres) {
    wsBadgePres.textContent = `Presupuesto Consolidado: Bs. ${Number(totalPres).toLocaleString('es-BO', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    wsBadgePres.className = "px-2.5 py-0.5 rounded text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300";
  }

  if (wsBadgeHoras) {
    wsBadgeHoras.textContent = `${hrs} / 33 hrs`;
    wsBadgeHoras.className = hrs >= 33
      ? "px-2.5 py-0.5 rounded text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300"
      : "px-2.5 py-0.5 rounded text-xs font-black bg-indigo-100 text-indigo-800 border border-indigo-200";
  }

  if (wsHeaderTit) wsHeaderTit.textContent = act.titulo;
  if (wsHeaderSede) wsHeaderSede.textContent = act.unidadEducativa || "-";
  if (wsHeaderResp) wsHeaderResp.textContent = act.responsable || "-";
  if (wsHeaderFecha) wsHeaderFecha.textContent = act.fecha || "-";
}

function renderSidebarActividad(act) {
  if (!act) return;

  // Mini-tarjeta
  const sbIdBadge = document.getElementById("sb-act-id-badge");
  const sbPresBadge = document.getElementById("sb-act-presupuesto-badge");
  const sbTitulo = document.getElementById("sb-act-titulo");
  const sbSede = document.getElementById("sb-act-sede");
  const sbRegional = document.getElementById("sb-act-regional");

  if (sbIdBadge) sbIdBadge.textContent = `ACT-${String(act.id).slice(-3)}`;
  if (sbTitulo) sbTitulo.textContent = act.titulo;
  if (sbSede) sbSede.textContent = act.unidadEducativa || "-";
  if (sbRegional) sbRegional.textContent = act.regional || "EA";

  const talleres = act.talleres || [];
  const hrs = talleres.reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);
  const totalPres = talleres.reduce((sum, t) => sum + (t.presupuestoDetalle ? parseFloat(t.presupuestoDetalle.total || 0) : (parseFloat(t.presupuesto) || 0)), 0);

  if (sbPresBadge) {
    sbPresBadge.textContent = `Bs. ${Number(totalPres).toLocaleString('es-BO', {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;
    sbPresBadge.className = "px-1.5 py-0.5 rounded text-[9px] font-black bg-emerald-900/60 text-emerald-300 border border-emerald-700/60";
  }

  // Visión Proceso botón
  const btnResumen = document.getElementById("sb-btn-proceso-resumen");
  const badgeHoras = document.getElementById("sb-badge-horas-num");
  if (badgeHoras) badgeHoras.textContent = `${hrs}/33h`;
  if (btnResumen) {
    if (currentWorkspaceFase === 'proceso_resumen') {
      btnResumen.className = "w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all border cursor-pointer bg-indigo-600 text-white border-indigo-500 shadow-sm";
    } else {
      btnResumen.className = "w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all border cursor-pointer bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700/60 shadow-2xs";
    }
  }

  // Conteo de talleres
  const talleresCount = document.getElementById("sb-talleres-count");
  if (talleresCount) talleresCount.textContent = `${talleres.length} taller${talleres.length === 1 ? '' : 'es'}`;

  // Acordeón de talleres subdividido en 3 fases: Planificación, Ejecución, Documentación
  const accordionContainer = document.getElementById("sidebar-talleres-accordion");
  if (accordionContainer) {
    accordionContainer.innerHTML = talleres.map((t, idx) => {
      const isExpanded = (expandedTallerAccordionId === t.id);
      const isTallerActive = (currentWorkspaceTallerId === t.id && (currentWorkspaceFase === 'planificacion' || currentWorkspaceFase === 'ejecucion' || currentWorkspaceFase === 'documentacion'));
      const tPres = t.presupuestoDetalle ? (parseFloat(t.presupuestoDetalle.total) || 0) : (parseFloat(t.presupuesto) || 0);

      const isPlanifActive = (currentWorkspaceTallerId === t.id && currentWorkspaceFase === 'planificacion');
      const isEjecActive = (currentWorkspaceTallerId === t.id && currentWorkspaceFase === 'ejecucion');
      const isDocActive = (currentWorkspaceTallerId === t.id && currentWorkspaceFase === 'documentacion');

      return `
        <div class="rounded-xl border ${isTallerActive ? 'border-blue-500/80 bg-slate-800/90' : 'border-slate-700/50 bg-slate-800/40'} overflow-hidden transition-all shadow-2xs">
          <!-- Cabecera del Taller en Acordeón -->
          <button type="button" onclick="toggleAcordeonTaller(${t.id})" class="w-full p-2.5 flex items-center justify-between text-left cursor-pointer hover:bg-slate-800 transition-colors">
            <div class="flex items-center gap-2 min-w-0 pr-1">
              <span class="w-5 h-5 rounded-md ${isTallerActive ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'} font-bold text-[10px] flex items-center justify-center shrink-0">
                ${idx + 1}
              </span>
              <div class="min-w-0">
                <span class="text-xs font-bold text-white block truncate leading-tight">${escapeHtml(t.titulo || `Taller ${idx + 1}`)}</span>
                <span class="text-[10px] text-slate-400 block font-mono">
                  ${t.horas} hrs • Bs. ${tPres.toLocaleString('es-BO', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
            </div>
            <div class="flex items-center gap-1 shrink-0">
              <span class="text-[11px] text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-blue-400 font-bold' : ''}">▼</span>
            </div>
          </button>

          <!-- Submenú de las 3 Fases del Taller (Planificación, Ejecución, Documentación) -->
          ${isExpanded ? `
            <div class="px-2 pb-2.5 pt-1 space-y-1 bg-slate-900/60 border-t border-slate-700/40">
              <!-- Fase 1: Planificación -->
              <button type="button" onclick="irAFaseTaller(${t.id}, 'planificacion')" class="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                isPlanifActive 
                  ? 'bg-blue-600 text-white font-bold shadow-xs' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
              }">
                <span class="w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center shrink-0 ${isPlanifActive ? 'bg-white/20 text-white' : 'bg-blue-900/60 text-blue-300'}">1</span>
                <div class="min-w-0 flex-1 text-left">
                  <span class="block truncate leading-tight">Planificación & Presupuesto</span>
                  <span class="block text-[9px] ${isPlanifActive ? 'text-blue-100' : 'text-slate-400'} truncate font-mono">Formato 5_4_24 • 6 partidas</span>
                </div>
              </button>

              <!-- Fase 2: Ejecución -->
              <button type="button" onclick="irAFaseTaller(${t.id}, 'ejecucion')" class="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                isEjecActive 
                  ? 'bg-amber-600 text-white font-bold shadow-xs' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
              }">
                <span class="w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center shrink-0 ${isEjecActive ? 'bg-white/20 text-white' : 'bg-amber-900/60 text-amber-300'}">2</span>
                <div class="min-w-0 flex-1 text-left">
                  <div class="flex items-center justify-between gap-1">
                    <span class="block truncate leading-tight">Ejecución en Terreno</span>
                    ${!tallerTieneDocumentoAprobado(t) ? '<span class="text-[8px] px-1 py-0.5 rounded bg-amber-950/80 text-amber-300 font-bold font-mono">🔒 Espera</span>' : '<span class="text-[8px] px-1 py-0.5 rounded bg-emerald-950/80 text-emerald-300 font-bold font-mono">✓</span>'}
                  </div>
                  <span class="block text-[9px] ${isEjecActive ? 'text-amber-100' : 'text-slate-400'} truncate font-mono">
                    ${tallerTieneDocumentoAprobado(t) ? 'Pre-registro, aula & 4 comidas' : 'Requiere doc aprobado'}
                  </span>
                </div>
              </button>

              <!-- Fase 3: Documentación -->
              <button type="button" onclick="irAFaseTaller(${t.id}, 'documentacion')" class="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                isDocActive 
                  ? 'bg-teal-600 text-white font-bold shadow-xs' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
              }">
                <span class="w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center shrink-0 ${isDocActive ? 'bg-white/20 text-white' : 'bg-teal-900/60 text-teal-300'}">3</span>
                <div class="min-w-0 flex-1 text-left">
                  <span class="block truncate leading-tight">Documentación & SGC</span>
                  <span class="block text-[9px] ${isDocActive ? 'text-teal-100' : 'text-slate-400'} truncate font-mono">Firmas PDF, rendición & visto bueno</span>
                </div>
              </button>
            </div>
          ` : ''}
        </div>
      `;
    }).join("");
  }

  // Botón de Cierre y Post-Test
  const btnCierre = document.getElementById("sb-btn-proceso-post-test");
  const cierreIcon = document.getElementById("sb-cierre-icon");
  const cierreSub = document.getElementById("sb-cierre-sub");
  const cierreBadge = document.getElementById("sb-cierre-badge");

  if (hrs >= 33) {
    if (cierreIcon) {
      cierreIcon.textContent = "🎓";
      cierreIcon.className = "w-6 h-6 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0";
    }
    if (cierreSub) cierreSub.textContent = "Habilitado reglamentario";
    if (cierreBadge) {
      cierreBadge.textContent = "✓ 33h";
      cierreBadge.className = "text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/60 font-bold";
    }
    if (btnCierre) {
      if (currentWorkspaceFase === 'proceso_cierre') {
        btnCierre.className = "w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all border cursor-pointer bg-emerald-600 text-white border-emerald-500 shadow-sm";
      } else {
        btnCierre.className = "w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all border cursor-pointer bg-slate-800/80 hover:bg-slate-800 text-emerald-300 border-emerald-500/40 shadow-2xs";
      }
    }
  } else {
    if (cierreIcon) {
      cierreIcon.textContent = "🔒";
      cierreIcon.className = "w-6 h-6 rounded-lg bg-amber-900/60 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0";
    }
    if (cierreSub) cierreSub.textContent = `Bloqueado (${hrs}/33h)`;
    if (cierreBadge) {
      cierreBadge.textContent = `${hrs}/33h`;
      cierreBadge.className = "text-[9px] px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700/60 font-bold";
    }
    if (btnCierre) {
      if (currentWorkspaceFase === 'proceso_cierre') {
        btnCierre.className = "w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all border cursor-pointer bg-amber-800/80 text-white border-amber-600 shadow-sm";
      } else {
        btnCierre.className = "w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all border cursor-pointer bg-slate-800/60 hover:bg-slate-800 text-slate-300 border-slate-700/40 shadow-2xs";
      }
    }
  }
}

function toggleAcordeonTaller(tallerId) {
  if (expandedTallerAccordionId === tallerId) {
    expandedTallerAccordionId = (currentWorkspaceTallerId === tallerId) ? null : tallerId;
  } else {
    expandedTallerAccordionId = tallerId;
    if (currentWorkspaceTallerId !== tallerId) {
      irAFaseTaller(tallerId, 'planificacion');
      return;
    }
  }
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  renderSidebarActividad(act);
}

function irAFaseTaller(tallerId, fase, shouldScroll = true) {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  let taller = talleres.find(t => t.id === tallerId);
  if (!taller) {
    taller = talleres[0];
  }
  currentWorkspaceTallerId = taller.id;
  expandedTallerAccordionId = taller.id;

  // REGLA SGC CIES: ANTES DE IR A FASE 2 (EJECUCIÓN EN TERRENO) SE DEBE ESPERAR LA APROBACIÓN Y SUBIR EL DOCUMENTO APROBADO
  if (fase === 'ejecucion' && !tallerTieneDocumentoAprobado(taller)) {
    currentWorkspaceFase = 'planificacion';
    currentWorkspaceStep = 1;
    abrirModalEsperaAprobacion(taller);
    showToast("⚠️ Espera de Aprobación: Debes subir el documento de planificación aprobado antes de ir a la Fase 2 de Ejecución.", "warning");
    fase = 'planificacion';
    setTimeout(() => {
      const sec = document.getElementById("ws-sec-doc-aprobado");
      if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  }

  currentWorkspaceFase = fase || 'planificacion';
  if (currentWorkspaceFase === 'planificacion') currentWorkspaceStep = 1;
  else if (currentWorkspaceFase === 'ejecucion') currentWorkspaceStep = 2;
  else if (currentWorkspaceFase === 'documentacion') currentWorkspaceStep = 3;
  else if (currentWorkspaceFase === 'proceso_resumen') currentWorkspaceStep = 4;
  else if (currentWorkspaceFase === 'proceso_cierre') currentWorkspaceStep = 5;

  // Mostrar u ocultar la barra de pestañas del taller según corresponda:
  // Solo se muestra cuando se está viendo una fase del taller (planificación, ejecución, documentación)
  // No se muestra al ver la Visión del Proceso (33h) ni el Cierre con Pre/Post-Test
  const tallerHeader = document.getElementById("ws-context-taller-header");
  const esFaseTaller = (fase === 'planificacion' || fase === 'ejecucion' || fase === 'documentacion');

  if (tallerHeader) {
    if (esFaseTaller) {
      tallerHeader.classList.remove("hidden");
    } else {
      tallerHeader.classList.add("hidden");
    }
  }

  // Actualizar contexto en la barra del taller activo
  const ctxTag = document.getElementById("ws-context-taller-tag");
  const ctxTitle = document.getElementById("ws-context-taller-title");
  const ctxHoras = document.getElementById("ws-context-taller-horas");
  const ctxPres = document.getElementById("ws-context-taller-presupuesto");
  const tIndex = talleres.findIndex(t => t.id === taller.id);
  const tPres = taller.presupuestoDetalle ? (parseFloat(taller.presupuestoDetalle.total) || 0) : (parseFloat(taller.presupuesto) || 0);

  if (ctxTag) ctxTag.textContent = `Taller ${tIndex + 1}`;
  if (ctxTitle) ctxTitle.textContent = taller.titulo;
  if (ctxHoras) ctxHoras.textContent = `${taller.horas} hrs`;
  if (ctxPres) ctxPres.textContent = `Bs. ${tPres.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  // Actualizar Pills de Fase (Estrictamente las 3 fases del taller)
  actualizarPillsFase(fase);

  // Ocultar todas las vistas y mostrar la activa
  const views = [
    { id: "ws-view-taller-fase-planificacion", key: "planificacion" },
    { id: "ws-view-taller-fase-ejecucion", key: "ejecucion" },
    { id: "ws-view-taller-fase-documentacion", key: "documentacion" },
    { id: "ws-view-proceso-resumen", key: "proceso_resumen" },
    { id: "ws-view-proceso-cierre", key: "proceso_cierre" }
  ];

  views.forEach(v => {
    const el = document.getElementById(v.id);
    if (el) {
      if (v.key === fase) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    }
  });

  // Renderizar la vista activa
  if (fase === 'planificacion') renderFasePlanificacion();
  else if (fase === 'ejecucion') renderFaseEjecucion();
  else if (fase === 'documentacion') renderFaseDocumentacion();
  else if (fase === 'proceso_resumen') renderProcesoResumen();
  else if (fase === 'proceso_cierre') renderProcesoCierre();

  // Actualizar sidebar
  renderSidebarActividad(act);
  actualizarHeaderWorkspace(act);

  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function irAFaseActual(fase) {
  irAFaseTaller(currentWorkspaceTallerId, fase);
}

function irAProcesoResumen() {
  irAFaseTaller(currentWorkspaceTallerId, 'proceso_resumen');
}

function irACierrePostTest() {
  irAFaseTaller(currentWorkspaceTallerId, 'proceso_cierre');
}

function actualizarPillsFase(fase) {
  const pillPlan = document.getElementById("ws-pill-fase-planificacion");
  const pillEjec = document.getElementById("ws-pill-fase-ejecucion");
  const pillDoc = document.getElementById("ws-pill-fase-documentacion");

  const baseInactive = "ws-fase-pill flex items-center gap-2 p-2.5 rounded-xl border transition-all text-left bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 cursor-pointer";

  if (pillPlan) {
    pillPlan.className = (fase === 'planificacion')
      ? "ws-fase-pill flex items-center gap-2 p-2.5 rounded-xl border transition-all text-left bg-blue-50 border-blue-500 text-blue-900 shadow-2xs cursor-pointer"
      : baseInactive;
  }
  if (pillEjec) {
    pillEjec.className = (fase === 'ejecucion')
      ? "ws-fase-pill flex items-center gap-2 p-2.5 rounded-xl border transition-all text-left bg-amber-50 border-amber-500 text-amber-900 shadow-2xs cursor-pointer"
      : baseInactive;
  }
  if (pillDoc) {
    pillDoc.className = (fase === 'documentacion')
      ? "ws-fase-pill flex items-center gap-2 p-2.5 rounded-xl border transition-all text-left bg-teal-50 border-teal-500 text-teal-900 shadow-2xs cursor-pointer"
      : baseInactive;
  }

  // Reflejar estado de aprobación en el subtítulo y número de la pastilla de Fase 2
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  const taller = (act?.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  const aprobado = tallerTieneDocumentoAprobado(taller);

  const subEjec = document.getElementById("ws-pill-sub-ejec");
  const numEjec = document.getElementById("ws-pill-num-ejec");
  if (subEjec) {
    subEjec.innerHTML = aprobado
      ? `<span class="text-emerald-700 font-semibold">✓ Habilitada</span> • Pre-registro & Aula`
      : `<span class="text-amber-700 font-bold">🔒 En Espera</span> • Requiere Doc Aprobado`;
  }
  if (numEjec) {
    if (!aprobado && fase !== 'ejecucion') {
      numEjec.className = "w-6 h-6 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 border border-amber-300";
      numEjec.textContent = "🔒";
      numEjec.title = "Fase 2 en espera: Requiere documento de planificación aprobado";
    } else {
      numEjec.className = (fase === 'ejecucion')
        ? "w-6 h-6 rounded-lg bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0"
        : "w-6 h-6 rounded-lg bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0";
      numEjec.textContent = "2";
      numEjec.title = "";
    }
  }
}

function actualizarBadgesSidebarWorkspace(act) {
  if (!act) return;
  renderSidebarActividad(act);
  actualizarHeaderWorkspace(act);
}

// Compatibilidad con llamadas previas
function irAPasoActividad(numeroPaso) {
  if (numeroPaso === 1) irAFaseActual('planificacion');
  else if (numeroPaso === 2) irAFaseActual('ejecucion');
  else if (numeroPaso === 3) irAFaseActual('documentacion');
  else if (numeroPaso === 4) irAProcesoResumen();
  else if (numeroPaso === 5) irACierrePostTest();
}

// -------------------------------------------------------------
// FASE 1: PLANIFICACIÓN & PRESUPUESTO DEL TALLER (FORMATO LÍDERES 5_4_24)
// -------------------------------------------------------------
function renderFasePlanificacion() {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  let taller = talleres.find(t => t.id === currentWorkspaceTallerId);
  if (!taller) {
    taller = talleres[0];
    if (taller) currentWorkspaceTallerId = taller.id;
  }
  if (!taller) return;

  // 1.1 Identificación General
  const titEl = document.getElementById("ws-planif-titulo");
  const fecEl = document.getElementById("ws-planif-fecha");
  const hrsEl = document.getElementById("ws-planif-horas");
  const facEl = document.getElementById("ws-planif-facilitador");
  const partEl = document.getElementById("ws-planif-participantes");
  const lugEl = document.getElementById("ws-planif-lugar");
  const modEl = document.getElementById("ws-planif-modalidad");
  const obsEl = document.getElementById("ws-planif-observaciones");

  if (titEl) titEl.value = taller.titulo || "";
  if (fecEl) fecEl.value = taller.fecha || act.fecha || new Date().toISOString().split("T")[0];
  if (hrsEl) hrsEl.value = taller.horas || 3;
  if (facEl) facEl.value = taller.facilitador || act.responsable || "";
  if (partEl) partEl.value = taller.participantes || (taller.planificadorOficial && taller.planificadorOficial.participantes) || act.participantesCount || 25;
  if (lugEl) lugEl.value = taller.lugar || act.unidadEducativa || "CIES El Alto - Rincón Juvenil";
  if (modEl) modEl.value = taller.modalidad || "Presencial Abierto";
  if (obsEl) obsEl.value = taller.observaciones || "";

  // 1.2 Memorándum de Solicitud de Gasto (5_4_24)
  const memo = (taller.planificadorOficial && taller.planificadorOficial.memorandum) || {};
  const memoA = document.getElementById("ws-planif-memo-a");
  const memoDe = document.getElementById("ws-planif-memo-de");
  const memoVia1 = document.getElementById("ws-planif-memo-via1");
  const memoVia2 = document.getElementById("ws-planif-memo-via2");
  const memoRef = document.getElementById("ws-planif-memo-ref");
  const memoCod = document.getElementById("ws-planif-memo-cod");
  const memoFecha = document.getElementById("ws-planif-memo-fecha");

  if (memoA) memoA.value = memo.a || "Dr. Fernando Álvarez Fuentes - GERENTE REGIONAL CIES LA PAZ";
  if (memoDe) memoDe.value = memo.de || `${taller.facilitador || act.responsable} - RESPONSABLE AREA EDUCATIVA CIES ${act.regional || 'EA'}`;
  if (memoVia1) memoVia1.value = memo.via1 || "Lic. María Uzeda Romero - JEFA ADMINISTRATIVA CIES LA PAZ";
  if (memoVia2) memoVia2.value = memo.via2 || "Lic. Gloria O. Arauco Lima - COORDINADORA COMPONENTE EDUCATIVO CIES LA PAZ";
  if (memoRef) memoRef.value = memo.ref || "SOLICITUD DE GASTO - CAPACITACION";
  if (memoCod) memoCod.value = memo.codigoRef || "CIES EDU. EA / RFS 15/2024";
  if (memoFecha) memoFecha.value = memo.fecha || "La Paz, 4 de Abril de 2024";

  // 1.3 Objetivos & Metodología
  const planif = taller.planificadorOficial || {};
  const objGen = document.getElementById("ws-planif-obj-general");
  const objEsp = document.getElementById("ws-planif-obj-especificos");
  const metEl = document.getElementById("ws-planif-metodologia");
  const resEl = document.getElementById("ws-planif-resultados");

  if (objGen) objGen.value = planif.objetivoGeneral || "Fortalecer habilidades y destrezas para desarrollar una vida sana, plena e integral de su salud sexual y salud reproductiva.";
  if (objEsp) objEsp.value = planif.objetivosEspecificos || "1. Reconocer, relacionar y aplicar las destrezas sobre la toma de decisiones y la asertividad para la vivencia de la sexualidad y el cuidado de la salud.\n2. Fortalecer al análisis de cada uno de los pasos de la toma de decisiones.\n3. Integrar las herramientas aplicadas durante el proceso de formación, en la construcción de su plan de vida para su realización personal.\n4. Reflexionar acerca de las limitaciones para cumplir con el plan de vida de manera que no se convierta en frustración sino en resiliencia.";
  if (metEl) metEl.value = planif.metodologia || "Activa- participativa";
  if (resEl) resEl.value = planif.resultadosEsperados || "• Se logrará reconocer, relacionar y aplicar las destrezas sobre la toma de decisiones y la asertividad para la vivencia de la sexualidad y el cuidado de la salud.\n• Se logrará fortalecer al análisis de cada uno de los pasos de la toma de decisiones.\n• Se logrará integrar las herramientas aplicadas durante el proceso de formación, en la construcción de su plan de vida para su realización personal.\n• Se logrará reflexionar acerca de las limitaciones para cumplir con el plan de vida de manera que no se convierta en frustración sino en resiliencia.";

  // 1.4 Matriz Didáctica Dinámica (6 Columnas)
  wsPlanifCronogramaTemp = (planif.cronograma && Array.isArray(planif.cronograma) && planif.cronograma.length > 0)
    ? JSON.parse(JSON.stringify(planif.cronograma))
    : [
        { hora: "15:00 - 15:15", tema: "Inscripción", contenido: "Los participantes se registrarán en la planilla de asistencia", tecnica: "Registro", recursos: "Planilla de Asistencia", responsable: taller.facilitador || "Viviana Segales" },
        { hora: "15:15 - 15:45", tema: "Actividad energizante", contenido: "Dinámica grupal introductoria de activación y confianza", tecnica: "“Florencia”", recursos: "Ninguno", responsable: taller.facilitador || "Viviana Segales" },
        { hora: "15:45 - 16:45", tema: "TOMA DE DECISIONES", contenido: "Dividir en cuatro grupos (Guerreros, Cazadores, Sabios, Agricultores) en simulación de isla desierta y alianza para viaje por mar.", tecnica: "“Salvando la vida”", recursos: "Papel tamaño oficio, marcadores delgados, bolígrafo", responsable: taller.facilitador || "Viviana Segales" },
        { hora: "16:45 - 17:45", tema: "PLAN DE VIDA", contenido: "Distribución de matriz de proyección hacia el 2030, facilitación guiada y orientación sobre metas individuales.", tecnica: "“El año 2030”", recursos: "Papelógrafos, marcadores gruesos, hojas tamaño oficio", responsable: taller.facilitador || "Viviana Segales" },
        { hora: "17:45 - 18:00", tema: "Cierre", contenido: "Conclusiones, acuerdos conjuntos y evaluación participativa.", tecnica: "Lluvia de ideas", recursos: "Tarjetas de cartulina", responsable: taller.facilitador || "Viviana Segales" }
      ];
  renderCronogramaPlanifVista();

  // 1.5 Presupuesto por Taller (6 Partidas Oficiales en Bs.)
  const pres = taller.presupuestoDetalle || {};
  const inSalon = document.getElementById("ws-planif-pres-salon");
  const inAlim = document.getElementById("ws-planif-pres-alimentacion");
  const inPas = document.getElementById("ws-planif-pres-pasajes");
  const inViat = document.getElementById("ws-planif-pres-viaticos");
  const inMat = document.getElementById("ws-planif-pres-materiales");
  const inOtr = document.getElementById("ws-planif-pres-otros");

  if (inSalon) inSalon.value = pres.salon !== undefined ? pres.salon : 0.00;
  if (inAlim) inAlim.value = pres.alimentacion !== undefined ? pres.alimentacion : 325.00;
  if (inPas) inPas.value = pres.pasajes !== undefined ? pres.pasajes : 386.90;
  if (inViat) inViat.value = pres.viaticos !== undefined ? pres.viaticos : 0.00;
  if (inMat) inMat.value = pres.materiales !== undefined ? pres.materiales : 0.00;
  if (inOtr) inOtr.value = pres.otros !== undefined ? pres.otros : 0.00;

  recalcularPresupuestoPlanifEnVista();
  renderDocAprobadoEnPlanificacion(taller);
}

function renderCronogramaPlanifVista() {
  const tbody = document.getElementById("ws-planif-cronograma-tbody");
  if (!tbody) return;

  tbody.innerHTML = wsPlanifCronogramaTemp.map((row, idx) => `
    <tr class="hover:bg-slate-50 transition-colors">
      <td class="py-2 px-2.5">
        <input type="text" value="${escapeHtml(row.hora || '')}" oninput="actualizarFilaCronogramaPlanifVista(${idx}, 'hora', this.value)" placeholder="15:00 - 16:00" class="w-full text-xs p-1 border border-slate-300 rounded font-mono">
      </td>
      <td class="py-2 px-2.5">
        <input type="text" value="${escapeHtml(row.tema || '')}" oninput="actualizarFilaCronogramaPlanifVista(${idx}, 'tema', this.value)" placeholder="Tema" class="w-full text-xs p-1 border border-slate-300 rounded font-bold text-slate-800">
      </td>
      <td class="py-2 px-2.5">
        <textarea rows="2" oninput="actualizarFilaCronogramaPlanifVista(${idx}, 'contenido', this.value)" placeholder="Contenido desarrollado..." class="w-full text-xs p-1 border border-slate-300 rounded">${escapeHtml(row.contenido || '')}</textarea>
      </td>
      <td class="py-2 px-2.5">
        <input type="text" value="${escapeHtml(row.tecnica || '')}" oninput="actualizarFilaCronogramaPlanifVista(${idx}, 'tecnica', this.value)" placeholder="Técnica / Dinámica" class="w-full text-xs p-1 border border-slate-300 rounded">
      </td>
      <td class="py-2 px-2.5">
        <input type="text" value="${escapeHtml(row.recursos || '')}" oninput="actualizarFilaCronogramaPlanifVista(${idx}, 'recursos', this.value)" placeholder="Recursos / Materiales" class="w-full text-xs p-1 border border-slate-300 rounded">
      </td>
      <td class="py-2 px-2.5">
        <input type="text" value="${escapeHtml(row.responsable || '')}" oninput="actualizarFilaCronogramaPlanifVista(${idx}, 'responsable', this.value)" placeholder="Facilitador" class="w-full text-xs p-1 border border-slate-300 rounded">
      </td>
      <td class="py-2 px-2 text-center">
        <button type="button" onclick="eliminarFilaCronogramaPlanifVista(${idx})" class="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Quitar fila">
          &times;
        </button>
      </td>
    </tr>
  `).join("");
}

function agregarFilaCronogramaPlanifVista() {
  const respDef = document.getElementById("ws-planif-facilitador")?.value || "Viviana Segales";
  wsPlanifCronogramaTemp.push({
    hora: "18:00 - 18:30",
    tema: "Nuevo Módulo / Tema",
    contenido: "Descripción didáctica y desarrollo de contenidos",
    tecnica: "Dinámica participativa",
    recursos: "Material de escritorio",
    responsable: respDef
  });
  renderCronogramaPlanifVista();
}

function eliminarFilaCronogramaPlanifVista(index) {
  if (index >= 0 && index < wsPlanifCronogramaTemp.length) {
    wsPlanifCronogramaTemp.splice(index, 1);
    renderCronogramaPlanifVista();
  }
}

function actualizarFilaCronogramaPlanifVista(index, campo, valor) {
  if (wsPlanifCronogramaTemp[index]) {
    wsPlanifCronogramaTemp[index][campo] = valor;
  }
}

function recalcularPresupuestoPlanifEnVista() {
  const pSalon = parseFloat(document.getElementById("ws-planif-pres-salon")?.value) || 0;
  const pAlim = parseFloat(document.getElementById("ws-planif-pres-alimentacion")?.value) || 0;
  const pPas = parseFloat(document.getElementById("ws-planif-pres-pasajes")?.value) || 0;
  const pViat = parseFloat(document.getElementById("ws-planif-pres-viaticos")?.value) || 0;
  const pMat = parseFloat(document.getElementById("ws-planif-pres-materiales")?.value) || 0;
  const pOtr = parseFloat(document.getElementById("ws-planif-pres-otros")?.value) || 0;

  const total = pSalon + pAlim + pPas + pViat + pMat + pOtr;

  const disp = document.getElementById("ws-planif-pres-total-display");
  const hid = document.getElementById("ws-planif-pres-total-input");

  if (disp) disp.textContent = `Bs. ${total.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (hid) hid.value = total;

  return total;
}

function guardarFasePlanificacion(e) {
  e.preventDefault();
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;

  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  const tIdx = talleres.findIndex(t => t.id === currentWorkspaceTallerId);
  if (tIdx === -1) return;

  const taller = talleres[tIdx];

  // Identificación
  taller.titulo = document.getElementById("ws-planif-titulo")?.value.trim() || taller.titulo;
  taller.fecha = document.getElementById("ws-planif-fecha")?.value || taller.fecha;
  taller.horas = parseFloat(document.getElementById("ws-planif-horas")?.value) || taller.horas || 3;
  taller.facilitador = document.getElementById("ws-planif-facilitador")?.value.trim() || taller.facilitador;
  taller.participantes = parseInt(document.getElementById("ws-planif-participantes")?.value) || 25;
  taller.lugar = document.getElementById("ws-planif-lugar")?.value.trim() || taller.lugar;
  taller.modalidad = document.getElementById("ws-planif-modalidad")?.value || "Presencial Abierto";
  taller.observaciones = document.getElementById("ws-planif-observaciones")?.value.trim() || "";

  // Presupuesto 6 partidas
  const pSalon = parseFloat(document.getElementById("ws-planif-pres-salon")?.value) || 0;
  const pAlim = parseFloat(document.getElementById("ws-planif-pres-alimentacion")?.value) || 0;
  const pPas = parseFloat(document.getElementById("ws-planif-pres-pasajes")?.value) || 0;
  const pViat = parseFloat(document.getElementById("ws-planif-pres-viaticos")?.value) || 0;
  const pMat = parseFloat(document.getElementById("ws-planif-pres-materiales")?.value) || 0;
  const pOtr = parseFloat(document.getElementById("ws-planif-pres-otros")?.value) || 0;
  const totalTaller = pSalon + pAlim + pPas + pViat + pMat + pOtr;

  taller.presupuestoDetalle = {
    salon: pSalon,
    alimentacion: pAlim,
    pasajes: pPas,
    viaticos: pViat,
    materiales: pMat,
    otros: pOtr,
    total: totalTaller
  };
  taller.presupuesto = totalTaller;

  // Planificador Oficial 5_4_24
  taller.planificadorOficial = {
    memorandum: {
      a: document.getElementById("ws-planif-memo-a")?.value || "",
      via1: document.getElementById("ws-planif-memo-via1")?.value || "",
      via2: document.getElementById("ws-planif-memo-via2")?.value || "",
      de: document.getElementById("ws-planif-memo-de")?.value || "",
      ref: document.getElementById("ws-planif-memo-ref")?.value || "",
      codigoRef: document.getElementById("ws-planif-memo-cod")?.value || "",
      fecha: document.getElementById("ws-planif-memo-fecha")?.value || ""
    },
    objetivoGeneral: document.getElementById("ws-planif-obj-general")?.value || "",
    objetivosEspecificos: document.getElementById("ws-planif-obj-especificos")?.value || "",
    metodologia: document.getElementById("ws-planif-metodologia")?.value || "Activa- participativa",
    datosGrupo: taller.planificadorOficial?.datosGrupo || "Hombres y mujeres adolescentes y jóvenes",
    resultadosEsperados: document.getElementById("ws-planif-resultados")?.value || "",
    participantes: taller.participantes,
    cronograma: JSON.parse(JSON.stringify(wsPlanifCronogramaTemp))
  };

  // Recalcular métricas consolidadas del proceso
  act.totalHoras = talleres.reduce((acc, t) => acc + (parseFloat(t.horas) || 0), 0);
  act.totalPresupuesto = talleres.reduce((sum, t) => sum + (t.presupuestoDetalle ? parseFloat(t.presupuestoDetalle.total || 0) : (parseFloat(t.presupuesto) || 0)), 0);

  // Metadatos de documento aprobado si existen
  if (taller.documentoAprobado) {
    taller.documentoAprobado.codigo = document.getElementById("ws-planif-doc-cod-input")?.value.trim() || taller.documentoAprobado.codigo || "";
    taller.documentoAprobado.fecha = document.getElementById("ws-planif-doc-fecha-input")?.value || taller.documentoAprobado.fecha || "";
    taller.documentoAprobado.instancia = document.getElementById("ws-planif-doc-instancia-input")?.value || taller.documentoAprobado.instancia || "Gerencia Regional CIES";
  }

  saveDB(db);

  // Actualizar contexto y vistas
  renderSidebarActividad(act);
  actualizarHeaderWorkspace(act);
  const ctxTit = document.getElementById("ws-context-taller-tit");
  if (ctxTit) ctxTit.textContent = taller.titulo;
  renderActividades();

  showToast(`¡Fase 1 (Planificación & Presupuesto) guardada! Presupuesto de esta sesión: Bs. ${totalTaller.toFixed(2)}`, "success");
}

// -------------------------------------------------------------
// CONTROL NORMATIVO SGC: ESPERA DE APROBACIÓN Y SUBIDA DE DOCUMENTO
// REQUISITO PREVIO INDISPENSABLE PARA PASAR A FASE 2: EJECUCIÓN
// -------------------------------------------------------------

function tallerTieneDocumentoAprobado(taller) {
  if (!taller) return false;
  if (taller.documentoAprobado && taller.documentoAprobado.archivo && taller.documentoAprobado.archivo.trim() !== '') {
    return true;
  }
  // Si tiene docPlanificacion asignado de seed data (solo si no está marcado explícitamente en espera)
  if (taller.docPlanificacion && !taller.enEsperaAprobacion) {
    return true;
  }
  return false;
}

function renderDocAprobadoEnPlanificacion(taller) {
  const vacioBox = document.getElementById("ws-planif-doc-vacio-box");
  const cargadoBox = document.getElementById("ws-planif-doc-cargado-box");
  const badgeEstado = document.getElementById("ws-planif-doc-estado-badge");
  const alertaEspera = document.getElementById("ws-planif-doc-alerta-espera");
  const btnContinuar = document.getElementById("ws-btn-continuar-fase2");

  const inputCod = document.getElementById("ws-planif-doc-cod-input");
  const inputFecha = document.getElementById("ws-planif-doc-fecha-input");
  const inputInst = document.getElementById("ws-planif-doc-instancia-input");

  if (!taller) return;

  const estaAprobado = tallerTieneDocumentoAprobado(taller);
  const doc = taller.documentoAprobado || (estaAprobado ? {
    archivo: taller.docPlanificacion || "Planificador_Oficial_Aprobado.pdf",
    fecha: taller.fecha || new Date().toISOString().split("T")[0],
    instancia: "Gerencia Regional CIES",
    codigo: `APROB-CIES-EA-2024-${String(taller.id).slice(-3)}`,
    estado: "Aprobado"
  } : null);

  if (estaAprobado && doc) {
    if (vacioBox) vacioBox.classList.add("hidden");
    if (cargadoBox) cargadoBox.classList.remove("hidden");

    const nomEl = document.getElementById("ws-planif-doc-nombre-archivo");
    const fecEl = document.getElementById("ws-planif-doc-fecha");
    const instEl = document.getElementById("ws-planif-doc-instancia");
    const codEl = document.getElementById("ws-planif-doc-codigo");

    if (nomEl) nomEl.textContent = doc.archivo || "Planificador_Oficial_Aprobado.pdf";
    if (fecEl) fecEl.textContent = doc.fecha || taller.fecha || "-";
    if (instEl) instEl.textContent = doc.instancia || "Gerencia Regional CIES";
    if (codEl) codEl.textContent = doc.codigo || `APROB-CIES-EA-2024-${String(taller.id).slice(-3)}`;

    if (badgeEstado) {
      badgeEstado.className = "px-2 py-0.5 rounded text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300";
      badgeEstado.textContent = "✓ Aprobado & Autorizado";
    }
    if (alertaEspera) {
      alertaEspera.className = "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200";
      alertaEspera.innerHTML = "<span>✓ Fase 2 Habilitada</span>";
    }

    if (inputCod) inputCod.value = doc.codigo || "";
    if (inputFecha) inputFecha.value = doc.fecha || taller.fecha || "";
    if (inputInst) inputInst.value = doc.instancia || "Gerencia Regional CIES";

    if (btnContinuar) {
      btnContinuar.className = "flex-1 sm:flex-initial px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2";
      btnContinuar.innerHTML = "<span>Continuar a Fase 2 (Habilitada) →</span>";
      btnContinuar.title = "La planificación cuenta con documento aprobado. Haz clic para avanzar a la Fase 2.";
    }
  } else {
    if (vacioBox) vacioBox.classList.remove("hidden");
    if (cargadoBox) cargadoBox.classList.add("hidden");

    if (badgeEstado) {
      badgeEstado.className = "px-2 py-0.5 rounded text-[10px] font-black bg-amber-100 text-amber-800 border border-amber-300";
      badgeEstado.textContent = "⏳ En Espera de Aprobación";
    }
    if (alertaEspera) {
      alertaEspera.className = "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200";
      alertaEspera.innerHTML = "<span>⚠️ Fase 2 en Espera</span>";
    }

    if (inputCod) inputCod.value = "";
    if (inputFecha) inputFecha.value = "";
    if (inputInst) inputInst.value = "Gerencia Regional CIES";

    if (btnContinuar) {
      btnContinuar.className = "flex-1 sm:flex-initial px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2";
      btnContinuar.innerHTML = "<span>⏳ En Espera de Aprobación (Fase 2 Bloqueada)</span>";
      btnContinuar.title = "Atención: Se debe subir el documento aprobado antes de continuar a Fase 2.";
    }
  }
}

function handleWsDocAprobadoChange(input) {
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  if (input && input.files && input.files.length > 0) {
    const file = input.files[0];
    const db = getDB();
    const act = db.actividades.find(a => a.id === currentWorkspaceActId);
    if (!act) return;

    const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
    if (!taller) return;

    const cod = document.getElementById("ws-planif-doc-cod-input")?.value.trim() || `APROB-CIES-${act.regional || 'EA'}-2024-${String(taller.id).slice(-3)}`;
    const fecha = document.getElementById("ws-planif-doc-fecha-input")?.value || new Date().toISOString().split("T")[0];
    const instancia = document.getElementById("ws-planif-doc-instancia-input")?.value || "Gerencia Regional CIES";

    taller.documentoAprobado = {
      archivo: file.name,
      fecha: fecha,
      instancia: instancia,
      codigo: cod,
      estado: "Aprobado"
    };
    taller.docPlanificacion = file.name;
    taller.enEsperaAprobacion = false;

    saveDB(db);
    renderDocAprobadoEnPlanificacion(taller);
    actualizarPillsFase('planificacion');
    renderSidebarActividad(act);
    showToast(`¡Documento oficial "${file.name}" cargado! La Fase 2 de Ejecución ha sido formalmente habilitada.`, "success");
  }
}

function simularSubidaDocAprobado() {
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  if (!taller) return;

  const cod = `APROB-CIES-${act.regional || 'EA'}-2024-${String(taller.id).slice(-3)}`;
  const fecha = new Date().toISOString().split("T")[0];
  const instancia = document.getElementById("ws-planif-doc-instancia-input")?.value || "Gerencia Regional CIES";
  const nombreArch = `Planificador_Oficial_${taller.titulo.replace(/[^a-zA-Z0-9]/g, '_')}_Aprobado_Firmado.pdf`;

  taller.documentoAprobado = {
    archivo: nombreArch,
    fecha: fecha,
    instancia: instancia,
    codigo: cod,
    estado: "Aprobado"
  };
  taller.docPlanificacion = nombreArch;
  taller.enEsperaAprobacion = false;

  saveDB(db);
  renderDocAprobadoEnPlanificacion(taller);
  actualizarPillsFase('planificacion');
  renderSidebarActividad(act);
  showToast(`✓ Documento oficial aprobado "${nombreArch}" adjuntado. ¡Fase 2 de Ejecución habilitada!`, "success");
}

function quitarDocAprobado() {
  if (!confirm("¿Deseas retirar el documento aprobado y devolver este taller a estado 'En Espera de Aprobación'?\n\nAl retirar el documento, la Fase 2 de Ejecución volverá a quedar bloqueada de acuerdo a normas SGC.")) return;
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  if (!taller) return;

  taller.documentoAprobado = null;
  taller.docPlanificacion = null;
  taller.enEsperaAprobacion = true;

  saveDB(db);
  renderDocAprobadoEnPlanificacion(taller);
  actualizarPillsFase('planificacion');
  renderSidebarActividad(act);
  showToast("Documento retirado. El taller ha vuelto al estado 'En Espera de Aprobación'.", "warning");
}

function verDescargarDocAprobado() {
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  const taller = (act?.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  if (!taller) return;

  const arch = (taller.documentoAprobado && taller.documentoAprobado.archivo) || taller.docPlanificacion || "Planificador_Oficial_Aprobado.pdf";
  const datos = obtenerDatosPlanificadorDesdeVista();
  datos.titulo = `[DOCUMENTO APROBADO] ${taller.titulo}`;
  const html = generarHtmlContenidoPlanificador(datos);
  exportarDocumentoPDF(html, arch);
}

function actualizarMetaDocAprobado(campo, valor) {
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  if (!taller) return;

  if (!taller.documentoAprobado) taller.documentoAprobado = {};
  taller.documentoAprobado[campo] = valor;
  saveDB(db);
}

function intentarIrAFase2() {
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  if (!taller) return;

  if (!tallerTieneDocumentoAprobado(taller)) {
    abrirModalEsperaAprobacion(taller);
    return;
  }

  irAFaseActual('ejecucion');
}

function abrirModalEsperaAprobacion(taller) {
  const modal = document.getElementById("modal-espera-aprobacion");
  if (!modal) return;

  const titEl = document.getElementById("modal-espera-taller-tit");
  const hrsEl = document.getElementById("modal-espera-taller-hrs");
  const presEl = document.getElementById("modal-espera-taller-pres");

  const pres = taller.presupuestoDetalle ? (parseFloat(taller.presupuestoDetalle.total) || 0) : (parseFloat(taller.presupuesto) || 0);

  if (titEl) titEl.textContent = taller.titulo || "Taller Formativo";
  if (hrsEl) hrsEl.textContent = `${taller.horas} horas pedagógicas`;
  if (presEl) presEl.textContent = `Bs. ${pres.toFixed(2)}`;

  modal.classList.remove("hidden");
}

function irASubirDocAprobadoDesdeModal() {
  closeModal("modal-espera-aprobacion");
  if (currentWorkspaceFase !== 'planificacion') {
    irAFaseActual('planificacion');
  }
  setTimeout(() => {
    const sec = document.getElementById("ws-sec-doc-aprobado");
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const input = document.getElementById("ws-planif-input-doc-aprobado");
    if (input) input.click();
  }, 200);
}

function simularAprobacionYContinuar() {
  closeModal("modal-espera-aprobacion");
  simularSubidaDocAprobado();
  setTimeout(() => {
    irAFaseActual('ejecucion');
  }, 300);
}

// -------------------------------------------------------------
// MOTOR OFICIAL DE EXPORTACIÓN A PDF Y WORD PARA CADA PLANILLA
// FORMATOS OFICIALES CIES (PLANIFICADOR LÍDERES 5_4_24 Y SGC-APOYO-ABS-3-PP3)
// -------------------------------------------------------------

function descargarDocumentoWord(htmlBody, nombreArchivo) {
  const wordHeader = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" 
          xmlns:w="urn:schemas-microsoft-com:office:word" 
          xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <title>${escapeHtml(nombreArchivo)}</title>
      <!--[if gte mso 9]>
      <xml>
        <w:WordDocument>
          <w:View>Print</w:View>
          <w:Zoom>100</w:Zoom>
          <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
      </xml>
      <![endif]-->
      <style>
        @page {
          size: letter;
          margin: 1.8cm 1.8cm 1.8cm 1.8cm;
          mso-page-orientation: portrait;
        }
        body {
          font-family: 'Calibri', 'Arial', sans-serif;
          font-size: 11pt;
          color: #111;
          line-height: 1.35;
        }
        .header {
          text-align: center;
          border-bottom: 2pt solid #003366;
          padding-bottom: 6pt;
          margin-bottom: 12pt;
        }
        .header h1 {
          font-size: 14pt;
          margin: 0;
          color: #003366;
          font-weight: bold;
          text-transform: uppercase;
        }
        .header p {
          margin: 2pt 0;
          font-size: 9pt;
          color: #555;
        }
        .memo-box {
          border: 1pt solid #718096;
          padding: 8pt;
          margin-bottom: 12pt;
          background-color: #f8fafc;
          font-size: 9.5pt;
        }
        .memo-row {
          margin-bottom: 3pt;
        }
        .memo-row strong {
          display: inline-block;
          width: 60pt;
          color: #003366;
        }
        h2 {
          font-size: 10.5pt;
          text-transform: uppercase;
          background-color: #003366;
          color: white;
          padding: 4pt 6pt;
          margin: 10pt 0 4pt 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 4pt;
          margin-bottom: 10pt;
          font-size: 9pt;
        }
        th, td {
          border: 1pt solid #718096;
          padding: 4pt 6pt;
          vertical-align: top;
        }
        th {
          background-color: #edf2f7;
          text-align: left;
          font-weight: bold;
          color: #1a202c;
        }
        .text-right { text-align: right; }
        .text-center { text-align: center; }
        .signatures-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 30pt;
          border: none;
        }
        .signatures-table td {
          border: none;
          text-align: center;
          vertical-align: top;
          padding: 6pt 4pt;
          font-size: 8.5pt;
        }
        .sig-box {
          border-top: 1pt solid #333;
          margin: 0 8pt;
          padding-top: 4pt;
        }
      </style>
    </head>
    <body>
      ${htmlBody}
    </body>
    </html>
  `;
  const blob = new Blob(['\ufeff', wordHeader], {
    type: 'application/msword;charset=utf-8'
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  const cleanName = (nombreArchivo || "Planilla_CIES").replace(/[^a-zA-Z0-9_\-\.]/g, "_");
  link.download = cleanName.endsWith('.doc') ? cleanName : `${cleanName}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
  showToast(`¡Planilla descargada en formato Word (.doc)!`, "success");
}

function exportarDocumentoPDF(htmlBody, tituloDocumento) {
  const win = window.open("", "_blank");
  if (!win) {
    showToast("Por favor habilita las ventanas emergentes en tu navegador para ver y guardar el PDF.", "warning");
    return;
  }
  win.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>${escapeHtml(tituloDocumento)}</title>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10.5pt; color: #111; margin: 25px; line-height: 1.4; }
        .header { text-align: center; border-bottom: 2px solid #003366; padding-bottom: 8px; margin-bottom: 14px; }
        .header h1 { font-size: 14pt; margin: 0; color: #003366; text-transform: uppercase; font-weight: 800; }
        .header p { margin: 2px 0; font-size: 9pt; color: #555; }
        .memo-box { border: 1px solid #cbd5e1; padding: 10px; margin-bottom: 14px; background-color: #f8fafc; font-size: 9.5pt; border-radius: 6px; }
        .memo-row { margin-bottom: 4px; }
        .memo-row strong { display: inline-block; width: 65px; color: #1e3a8a; }
        h2 { font-size: 10.5pt; text-transform: uppercase; background: #003366; color: white; padding: 5px 10px; margin: 12px 0 6px 0; border-radius: 4px; }
        table { width: 100%; border-collapse: collapse; margin-top: 6px; margin-bottom: 12px; font-size: 9pt; }
        th, td { border: 1px solid #94a3b8; padding: 5px 8px; vertical-align: top; }
        th { background: #f1f5f9; text-align: left; font-weight: bold; color: #0f172a; }
        .text-right { text-align: right; }
        .text-center { text-align: center; }
        .signatures { margin-top: 35px; display: flex; justify-content: space-between; text-align: center; font-size: 9pt; }
        .sig-line { border-top: 1px solid #333; width: 22%; padding-top: 5px; }
        @media print {
          body { margin: 12mm; }
          .no-print { display: none !important; }
        }
      </style>
    </head>
    <body>
      <div class="no-print" style="margin-bottom: 16px; padding: 12px 16px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <strong style="color: #1e40af; font-size: 12pt;">Vista Previa de Planilla Oficial CIES (PDF / Impresión)</strong>
          <p style="margin: 3px 0 0 0; font-size: 9pt; color: #3b82f6;">Para guardarla en PDF, selecciona la opción <strong>"Guardar como PDF"</strong> en la ventana de impresión.</p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button onclick="window.print()" style="padding: 9px 18px; background: #003366; color: white; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; font-size: 11pt;">
            🖨️ Guardar PDF / Imprimir
          </button>
          <button onclick="window.close()" style="padding: 9px 14px; background: #e2e8f0; color: #334155; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; font-size: 11pt;">
            Cerrar
          </button>
        </div>
      </div>
      ${htmlBody}
    </body>
    </html>
  `);
  win.document.close();
  showToast("Vista de exportación a PDF generada con éxito", "info");
}

function generarHtmlContenidoPlanificador(datos) {
  const cronogramaRows = (datos.cronograma && Array.isArray(datos.cronograma) && datos.cronograma.length > 0)
    ? datos.cronograma.map(r => `
        <tr>
          <td width="15%" class="text-center font-mono">${escapeHtml(r.hora || '')}</td>
          <td width="18%"><strong>${escapeHtml(r.tema || '')}</strong></td>
          <td>${escapeHtml(r.contenido || '').replace(/\n/g, '<br>')}</td>
          <td width="16%">${escapeHtml(r.tecnica || '')}</td>
          <td width="18%">${escapeHtml(r.recursos || '')}</td>
          <td width="15%">${escapeHtml(r.responsable || '')}</td>
        </tr>
      `).join("")
    : `<tr><td colspan="6" class="text-center">Sin filas registradas en el cronograma.</td></tr>`;

  const pres = datos.presupuesto || {};
  const sSalon = parseFloat(pres.salon || 0).toFixed(2);
  const sAlim = parseFloat(pres.alimentacion || 0).toFixed(2);
  const sPas = parseFloat(pres.pasajes || 0).toFixed(2);
  const sViat = parseFloat(pres.viaticos || 0).toFixed(2);
  const sMat = parseFloat(pres.materiales || 0).toFixed(2);
  const sOtr = parseFloat(pres.otros || 0).toFixed(2);
  const sTot = parseFloat(pres.total || 0).toFixed(2);

  return `
    <div class="header">
      <h1>CIES SALUD SEXUAL Y REPRODUCTIVA</h1>
      <p>SISTEMA DE GESTIÓN DE LA CALIDAD • SGC ISO 9001</p>
      <p>COMPONENTE EDUCATIVO • PLANIFICADOR Y SOLICITUD DE GASTO (FORMATO LÍDERES 5_4_24)</p>
    </div>

    <div class="memo-box">
      <div class="memo-row"><strong>A:</strong> ${escapeHtml(datos.a || 'Dr. Fernando Álvarez Fuentes - GERENTE REGIONAL CIES LA PAZ')}</div>
      <div class="memo-row"><strong>VIA:</strong> ${escapeHtml(datos.via1 || 'Lic. María Uzeda Romero - JEFA ADMINISTRATIVA CIES LA PAZ')}</div>
      <div class="memo-row"><strong>VIA:</strong> ${escapeHtml(datos.via2 || 'Lic. Gloria O. Arauco Lima - COORDINADORA COMPONENTE EDUCATIVO CIES LA PAZ')}</div>
      <div class="memo-row"><strong>DE:</strong> ${escapeHtml(datos.de || 'RESPONSABLE AREA EDUCATIVA CIES')}</div>
      <div class="memo-row"><strong>REF:</strong> ${escapeHtml(datos.ref || 'SOLICITUD DE GASTO - CAPACITACION')} (${escapeHtml(datos.codigoRef || 'CIES EDU. EA / RFS 15/2024')})</div>
      <div class="memo-row"><strong>FECHA:</strong> ${escapeHtml(datos.fecha || '')}</div>
    </div>

    <h2>1. IDENTIFICACIÓN GENERAL DEL TALLER</h2>
    <table>
      <tr><th width="28%">Nombre del Taller:</th><td><strong>${escapeHtml(datos.titulo || '')}</strong></td></tr>
      <tr><th>Responsable / Facilitador(a):</th><td>${escapeHtml(datos.facilitador || '')}</td></tr>
      <tr><th>Modalidad:</th><td>${escapeHtml(datos.modalidad || 'Presencial Abierto')}</td></tr>
      <tr><th>Lugar / Sede:</th><td>${escapeHtml(datos.lugar || '')}</td></tr>
      <tr><th>Fecha y Carga Horaria:</th><td>Fecha: ${escapeHtml(datos.fechaTaller || '')} • <strong>${escapeHtml(datos.horas || '3')} horas pedagógicas</strong></td></tr>
      <tr><th>Participantes Previstos:</th><td>${escapeHtml(datos.participantes || '25')} participantes</td></tr>
    </table>

    <h2>2. OBJETIVOS PEDAGÓGICOS</h2>
    <div style="margin-bottom: 8pt;">
      <strong>Objetivo General:</strong><br>
      <p style="margin: 3pt 0 8pt 0;">${escapeHtml(datos.objGeneral || '').replace(/\n/g, '<br>')}</p>
      <strong>Objetivos Específicos:</strong><br>
      <p style="margin: 3pt 0 0 0;">${escapeHtml(datos.objEspecificos || '').replace(/\n/g, '<br>')}</p>
    </div>

    <h2>3. METODOLOGÍA Y GRUPO META</h2>
    <p><strong>Metodología:</strong> ${escapeHtml(datos.metodologia || 'Activa- participativa')}</p>
    ${datos.datosGrupo ? `<p><strong>Grupo Meta:</strong> ${escapeHtml(datos.datosGrupo)}</p>` : ''}

    <h2>4. MATRIZ DIDÁCTICA Y CRONOGRAMA DE SESIÓN (6 COLUMNAS)</h2>
    <table>
      <thead>
        <tr>
          <th width="15%">Hora</th>
          <th width="18%">Tema</th>
          <th>Contenido Desarrollado</th>
          <th width="16%">Actividad / Técnica</th>
          <th width="18%">Recursos</th>
          <th width="15%">Responsable</th>
        </tr>
      </thead>
      <tbody>
        ${cronogramaRows}
      </tbody>
    </table>

    <h2>5. RESULTADOS ESPERADOS</h2>
    <p>${escapeHtml(datos.resultados || '').replace(/\n/g, '<br>')}</p>

    <h2>6. PRESUPUESTO POR TALLER (6 PARTIDAS NORMATIVAS CIES EN BS.)</h2>
    <table>
      <thead>
        <tr>
          <th width="8%" class="text-center">#</th>
          <th>Partida Presupuestaria Oficial CIES</th>
          <th width="30%" class="text-right">Monto Solicitado (Bs.)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="text-center">1</td><td>Salón y Espacios</td><td class="text-right">${sSalon} Bs.</td></tr>
        <tr><td class="text-center">2</td><td>Alimentación y Refrigerios</td><td class="text-right">${sAlim} Bs.</td></tr>
        <tr><td class="text-center">3</td><td>Pasajes y Transporte de Traslado</td><td class="text-right">${sPas} Bs.</td></tr>
        <tr><td class="text-center">4</td><td>Viáticos y Estipendios</td><td class="text-right">${sViat} Bs.</td></tr>
        <tr><td class="text-center">5</td><td>Materiales Didácticos e Insumos</td><td class="text-right">${sMat} Bs.</td></tr>
        <tr><td class="text-center">6</td><td>Otros (Fotocopias, Papelería y Varios)</td><td class="text-right">${sOtr} Bs.</td></tr>
      </tbody>
      <tfoot>
        <tr style="font-weight: bold; background-color: #f1f5f9;">
          <td colspan="2" class="text-right">TOTAL PRESUPUESTO DEL TALLER:</td>
          <td class="text-right"><strong>Bs. ${sTot}</strong></td>
        </tr>
      </tfoot>
    </table>

    <table class="signatures-table" style="width: 100%; border-collapse: collapse; margin-top: 30pt; border: none;">
      <tr style="border: none;">
        <td style="border: none; width: 25%; text-align: center; vertical-align: top;">
          <div style="border-top: 1pt solid #333; margin: 0 8pt; padding-top: 4pt;">
            <strong>Solicitante</strong><br>
            <span style="font-size: 8pt; color: #555;">Resp. Área Educativa</span>
          </div>
        </td>
        <td style="border: none; width: 25%; text-align: center; vertical-align: top;">
          <div style="border-top: 1pt solid #333; margin: 0 8pt; padding-top: 4pt;">
            <strong>V° B° Técnico</strong><br>
            <span style="font-size: 8pt; color: #555;">Coord. Componente Educativo</span>
          </div>
        </td>
        <td style="border: none; width: 25%; text-align: center; vertical-align: top;">
          <div style="border-top: 1pt solid #333; margin: 0 8pt; padding-top: 4pt;">
            <strong>V° B° Administrativo</strong><br>
            <span style="font-size: 8pt; color: #555;">Jefatura Administrativa</span>
          </div>
        </td>
        <td style="border: none; width: 25%; text-align: center; vertical-align: top;">
          <div style="border-top: 1pt solid #333; margin: 0 8pt; padding-top: 4pt;">
            <strong>Aprobación Final</strong><br>
            <span style="font-size: 8pt; color: #555;">Gerencia Regional CIES</span>
          </div>
        </td>
      </tr>
    </table>
  `;
}

function generarHtmlContenidoPlanillaAsistencia(act, listaParticipantes) {
  const db = getDB();
  const parts = (listaParticipantes && listaParticipantes.length > 0)
    ? listaParticipantes
    : [
        { nombres: "Javier Gonzalo", apellidos: "Ramos Gutiérrez", ci: "3920194 LP", edad: 21, genero: "M", cargoOcupacion: "Estudiante Universitario", telefono: "71234567" },
        { nombres: "Prof. Rosario", apellidos: "Paredes Beltrán", ci: "2839102 CB", edad: 38, genero: "F", cargoOcupacion: "Docente Secundaria", telefono: "72345678" },
        { nombres: "María Elena", apellidos: "Quispe Mamani", ci: "4829102 LP", edad: 19, genero: "F", cargoOcupacion: "Líder Juvenil", telefono: "73456789" },
        { nombres: "Carlos Andrés", apellidos: "Mendoza Rojas", ci: "6910293 CB", edad: 22, genero: "M", cargoOcupacion: "Estudiante", telefono: "74567890" },
        { nombres: "Camila Belén", apellidos: "Rocha Fernández", ci: "8392019 LP", edad: 20, genero: "F", cargoOcupacion: "Líder Red Tú Decides", telefono: "75678901" }
      ];

  const rows = parts.map((p, idx) => {
    const pCi = (p.ci || '').trim().toLowerCase();
    const matchAsist = (db.asistenciasTalleres || []).find(a => 
      a.actividadId === act.id && 
      (a.ci || '').trim().toLowerCase() === pCi
    );
    let celdaFirma = "";
    if (matchAsist) {
      if (matchAsist.firmaDataUrl) {
        celdaFirma = `<div style="text-align: center;"><img src="${matchAsist.firmaDataUrl}" style="max-height: 20pt; max-width: 90px; vertical-align: middle;" alt="Firma"><br><span style="font-size: 6.5pt; color: #059669; font-family: monospace;">✓ Touch (${escapeHtml(matchAsist.horaExacta || '')})</span></div>`;
      } else if (matchAsist.metodo === "Escaner QR Credencial" || matchAsist.qrCodigo) {
        celdaFirma = `<div style="text-align: center;"><span style="font-size: 11pt;">🪪</span><br><span style="font-size: 6.5pt; color: #6d28d9; font-weight: bold; font-family: monospace;">✓ QR Credencial<br>(${escapeHtml(matchAsist.horaExacta || '')})</span></div>`;
      }
    }

    return `
      <tr>
        <td class="text-center font-mono">${idx + 1}</td>
        <td><strong>${escapeHtml(`${p.nombres || ''} ${p.apellidos || ''}`.trim() || p.nombre || 'Participante')}</strong></td>
        <td class="text-center font-mono">${escapeHtml(p.ci || '-')}</td>
        <td class="text-center">${escapeHtml(String(p.edad || '-'))}</td>
        <td class="text-center">${escapeHtml((p.genero || 'F')[0].toUpperCase())}</td>
        <td>${escapeHtml(p.cargoOcupacion || p.rol || 'Participante')}</td>
        <td class="font-mono text-center">${escapeHtml(p.telefono || p.celular || '-')}</td>
        <td style="height: 24pt;">${celdaFirma}</td>
      </tr>
    `;
  }).join("");

  let fillerRows = "";
  if (parts.length < 15) {
    for (let i = parts.length + 1; i <= 15; i++) {
      fillerRows += `
        <tr>
          <td class="text-center font-mono" style="color: #999;">${i}</td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td style="height: 22pt;"></td>
        </tr>
      `;
    }
  }

  const rmCheck = act.refManana ? "☑" : "☐";
  const alCheck = act.almuerzo ? "☑" : "☐";
  const rtCheck = act.refTarde ? "☑" : "☐";
  const ceCheck = act.cena ? "☑" : "☐";

  return `
    <div class="header">
      <h1>CIES SALUD SEXUAL Y REPRODUCTIVA</h1>
      <p>SISTEMA DE GESTIÓN DE LA CALIDAD • PROCEDIMIENTO SGC-APOYO-ABS-3</p>
      <p><strong>PLANILLA DE ASISTENCIA DIARIA Y CONTROL DE ALIMENTACIÓN (SGC-Apoyo-ABS-3-pp3)</strong></p>
    </div>

    <div class="memo-box">
      <table style="width: 100%; border: none; margin: 0;">
        <tr style="border: none;">
          <td style="border: none; padding: 2pt;" width="60%"><strong>Actividad / Evento:</strong> ${escapeHtml(act.titulo || 'Taller Formativo')}</td>
          <td style="border: none; padding: 2pt;" width="40%"><strong>Código / Regional:</strong> ACT-${String(act.id).slice(-3)} • ${escapeHtml(act.regional || 'EA')}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none; padding: 2pt;"><strong>Lugar / Unidad Educativa:</strong> ${escapeHtml(act.unidadEducativa || '-')}</td>
          <td style="border: none; padding: 2pt;"><strong>Fecha:</strong> ${escapeHtml(act.fecha || '')}</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none; padding: 2pt;"><strong>Facilitador/a Responsable:</strong> ${escapeHtml(act.responsable || '-')}</td>
          <td style="border: none; padding: 2pt;"><strong>Aforo Previsto:</strong> ${act.participantesCount || parts.length} participantes</td>
        </tr>
        <tr style="border: none;">
          <td style="border: none; padding: 2pt;" colspan="2">
            <strong>Servicios de Alimentación Otorgados:</strong> 
            &nbsp; ${rmCheck} Refrigerio Mañana (RM) &nbsp;&nbsp; ${alCheck} Almuerzo (AL) &nbsp;&nbsp; ${rtCheck} Refrigerio Tarde (RT) &nbsp;&nbsp; ${ceCheck} Cena (CE)
          </td>
        </tr>
      </table>
    </div>

    <h2>NÓMINA DE ASISTENCIA Y FIRMAS DE RECEPCIÓN</h2>
    <table>
      <thead>
        <tr>
          <th width="5%" class="text-center">#</th>
          <th>Nombre Completo del Participante</th>
          <th width="14%" class="text-center">C.I.</th>
          <th width="6%" class="text-center">Edad</th>
          <th width="6%" class="text-center">Gén.</th>
          <th width="20%">Rol / Ocupación</th>
          <th width="14%" class="text-center">Celular</th>
          <th width="15%" class="text-center">Firma de Asistencia</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
        ${fillerRows}
      </tbody>
    </table>

    <table class="signatures-table" style="width: 100%; border: none; margin-top: 35pt;">
      <tr style="border: none;">
        <td style="border: none; width: 45%; text-align: center;">
          <div style="border-top: 1pt solid #333; margin: 0 25pt; padding-top: 5pt;">
            <strong>${escapeHtml(act.responsable || 'Facilitador/a Responsable')}</strong><br>
            <span style="font-size: 8.5pt; color: #555;">Firma y Sello del Facilitador/a</span>
          </div>
        </td>
        <td style="border: none; width: 10%;"></td>
        <td style="border: none; width: 45%; text-align: center;">
          <div style="border-top: 1pt solid #333; margin: 0 25pt; padding-top: 5pt;">
            <strong>Control y Validación de Calidad SGC</strong><br>
            <span style="font-size: 8.5pt; color: #555;">Coordinación Regional CIES</span>
          </div>
        </td>
      </tr>
    </table>
  `;
}

// -------------------------------------------------------------
// CONTROLADORES DE EXPORTACIÓN DIRECTA POR VISTA Y MODAL
// -------------------------------------------------------------

function obtenerDatosPlanificadorDesdeVista() {
  const tit = document.getElementById("ws-planif-titulo")?.value || "Planificador de Taller CIES";
  const a = document.getElementById("ws-planif-memo-a")?.value || "";
  const via1 = document.getElementById("ws-planif-memo-via1")?.value || "";
  const via2 = document.getElementById("ws-planif-memo-via2")?.value || "";
  const de = document.getElementById("ws-planif-memo-de")?.value || "";
  const ref = document.getElementById("ws-planif-memo-ref")?.value || "";
  const cod = document.getElementById("ws-planif-memo-cod")?.value || "";
  const fecha = document.getElementById("ws-planif-memo-fecha")?.value || "";

  const resp = document.getElementById("ws-planif-facilitador")?.value || "";
  const mod = document.getElementById("ws-planif-modalidad")?.value || "";
  const lug = document.getElementById("ws-planif-lugar")?.value || "";
  const fTaller = document.getElementById("ws-planif-fecha")?.value || "";
  const hrs = document.getElementById("ws-planif-horas")?.value || "";
  const part = document.getElementById("ws-planif-participantes")?.value || "";

  const objGen = document.getElementById("ws-planif-obj-general")?.value || "";
  const objEsp = document.getElementById("ws-planif-obj-especificos")?.value || "";
  const met = document.getElementById("ws-planif-metodologia")?.value || "";
  const res = document.getElementById("ws-planif-resultados")?.value || "";

  const pSalon = document.getElementById("ws-planif-pres-salon")?.value || "0.00";
  const pAlim = document.getElementById("ws-planif-pres-alimentacion")?.value || "325.00";
  const pPas = document.getElementById("ws-planif-pres-pasajes")?.value || "386.90";
  const pViat = document.getElementById("ws-planif-pres-viaticos")?.value || "0.00";
  const pMat = document.getElementById("ws-planif-pres-materiales")?.value || "0.00";
  const pOtr = document.getElementById("ws-planif-pres-otros")?.value || "0.00";
  const pTot = document.getElementById("ws-planif-pres-total-input")?.value || "711.90";

  return {
    titulo: tit,
    a, via1, via2, de, ref, codigoRef: cod, fecha,
    facilitador: resp,
    modalidad: mod,
    lugar: lug,
    fechaTaller: fTaller,
    horas: hrs,
    participantes: part,
    objGeneral: objGen,
    objEspecificos: objEsp,
    metodologia: met,
    resultados: res,
    cronograma: (typeof wsPlanifCronogramaTemp !== "undefined" && Array.isArray(wsPlanifCronogramaTemp)) ? wsPlanifCronogramaTemp : [],
    presupuesto: {
      salon: pSalon,
      alimentacion: pAlim,
      pasajes: pPas,
      viaticos: pViat,
      materiales: pMat,
      otros: pOtr,
      total: pTot
    }
  };
}

function exportarPlanificadorVistaPDF() {
  const datos = obtenerDatosPlanificadorDesdeVista();
  const html = generarHtmlContenidoPlanificador(datos);
  exportarDocumentoPDF(html, `Planificador_${datos.titulo.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`);
}

function exportarPlanificadorVistaWord() {
  const datos = obtenerDatosPlanificadorDesdeVista();
  const html = generarHtmlContenidoPlanificador(datos);
  descargarDocumentoWord(html, `Planificador_${datos.titulo.replace(/[^a-zA-Z0-9]/g, '_')}.doc`);
}

function exportarPlanificadorModalPDF() {
  const a = document.getElementById("planif-memo-a")?.value || "";
  const via1 = document.getElementById("planif-memo-via1")?.value || "";
  const via2 = document.getElementById("planif-memo-via2")?.value || "";
  const de = document.getElementById("planif-memo-de")?.value || "";
  const ref = document.getElementById("planif-memo-ref")?.value || "";
  const fecha = document.getElementById("planif-memo-fecha")?.value || "";

  const tit = document.getElementById("planif-ident-titulo")?.value || "Planificador Oficial Líderes 5_4_24";
  const resp = document.getElementById("planif-ident-responsable")?.value || "";
  const mod = document.getElementById("planif-ident-modalidad")?.value || "";
  const lug = document.getElementById("planif-ident-lugar")?.value || "";
  const fTaller = document.getElementById("planif-ident-fecha")?.value || "";
  const hrs = document.getElementById("planif-ident-horas")?.value || "3";
  const part = document.getElementById("planif-ident-participantes")?.value || "25";

  const objGen = document.getElementById("planif-obj-general")?.value || "";
  const objEsp = document.getElementById("planif-obj-especificos")?.value || "";
  const met = document.getElementById("planif-metodologia")?.value || "";
  const grupo = document.getElementById("planif-grupo")?.value || "";
  const res = document.getElementById("planif-resultados")?.value || "";

  const pSalon = document.getElementById("planif-pres-salon")?.value || "0.00";
  const pAlim = document.getElementById("planif-pres-alim")?.value || "325.00";
  const pPas = document.getElementById("planif-pres-pasajes")?.value || "386.90";
  const pViat = document.getElementById("planif-pres-viaticos")?.value || "0.00";
  const pMat = document.getElementById("planif-pres-materiales")?.value || "0.00";
  const pOtr = document.getElementById("planif-pres-otros")?.value || "0.00";
  const pTot = document.getElementById("planif-pres-total-input")?.value || "711.90";

  const datos = {
    titulo: tit,
    a, via1, via2, de, ref, codigoRef: "CIES EDU. EA / RFS 15/2024", fecha,
    facilitador: resp,
    modalidad: mod,
    lugar: lug,
    fechaTaller: fTaller,
    horas: hrs,
    participantes: part,
    objGeneral: objGen,
    objEspecificos: objEsp,
    metodologia: met,
    datosGrupo: grupo,
    resultados: res,
    cronograma: (typeof cronogramaPlanificadorTemp !== "undefined" && Array.isArray(cronogramaPlanificadorTemp)) ? cronogramaPlanificadorTemp : [],
    presupuesto: {
      salon: pSalon,
      alimentacion: pAlim,
      pasajes: pPas,
      viaticos: pViat,
      materiales: pMat,
      otros: pOtr,
      total: pTot
    }
  };

  const html = generarHtmlContenidoPlanificador(datos);
  exportarDocumentoPDF(html, `Planificador_Oficial_${tit.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`);
}

function exportarPlanificadorModalWord() {
  const a = document.getElementById("planif-memo-a")?.value || "";
  const via1 = document.getElementById("planif-memo-via1")?.value || "";
  const via2 = document.getElementById("planif-memo-via2")?.value || "";
  const de = document.getElementById("planif-memo-de")?.value || "";
  const ref = document.getElementById("planif-memo-ref")?.value || "";
  const fecha = document.getElementById("planif-memo-fecha")?.value || "";

  const tit = document.getElementById("planif-ident-titulo")?.value || "Planificador Oficial Líderes 5_4_24";
  const resp = document.getElementById("planif-ident-responsable")?.value || "";
  const mod = document.getElementById("planif-ident-modalidad")?.value || "";
  const lug = document.getElementById("planif-ident-lugar")?.value || "";
  const fTaller = document.getElementById("planif-ident-fecha")?.value || "";
  const hrs = document.getElementById("planif-ident-horas")?.value || "3";
  const part = document.getElementById("planif-ident-participantes")?.value || "25";

  const objGen = document.getElementById("planif-obj-general")?.value || "";
  const objEsp = document.getElementById("planif-obj-especificos")?.value || "";
  const met = document.getElementById("planif-metodologia")?.value || "";
  const grupo = document.getElementById("planif-grupo")?.value || "";
  const res = document.getElementById("planif-resultados")?.value || "";

  const pSalon = document.getElementById("planif-pres-salon")?.value || "0.00";
  const pAlim = document.getElementById("planif-pres-alim")?.value || "325.00";
  const pPas = document.getElementById("planif-pres-pasajes")?.value || "386.90";
  const pViat = document.getElementById("planif-pres-viaticos")?.value || "0.00";
  const pMat = document.getElementById("planif-pres-materiales")?.value || "0.00";
  const pOtr = document.getElementById("planif-pres-otros")?.value || "0.00";
  const pTot = document.getElementById("planif-pres-total-input")?.value || "711.90";

  const datos = {
    titulo: tit,
    a, via1, via2, de, ref, codigoRef: "CIES EDU. EA / RFS 15/2024", fecha,
    facilitador: resp,
    modalidad: mod,
    lugar: lug,
    fechaTaller: fTaller,
    horas: hrs,
    participantes: part,
    objGeneral: objGen,
    objEspecificos: objEsp,
    metodologia: met,
    datosGrupo: grupo,
    resultados: res,
    cronograma: (typeof cronogramaPlanificadorTemp !== "undefined" && Array.isArray(cronogramaPlanificadorTemp)) ? cronogramaPlanificadorTemp : [],
    presupuesto: {
      salon: pSalon,
      alimentacion: pAlim,
      pasajes: pPas,
      viaticos: pViat,
      materiales: pMat,
      otros: pOtr,
      total: pTot
    }
  };

  const html = generarHtmlContenidoPlanificador(datos);
  descargarDocumentoWord(html, `Planificador_Oficial_${tit.replace(/[^a-zA-Z0-9]/g, '_')}.doc`);
}

function exportarNuevoPlanificadorPDF() {
  const tit = document.getElementById("np-taller-titulo")?.value || "Taller Formativo CIES";
  const a = document.getElementById("np-memo-a")?.value || "";
  const de = document.getElementById("np-memo-de")?.value || "";
  const via1 = document.getElementById("np-memo-via1")?.value || "";
  const via2 = document.getElementById("np-memo-via2")?.value || "";
  const ref = document.getElementById("np-memo-ref")?.value || "";
  const cod = document.getElementById("np-memo-cod")?.value || "";
  const fecha = document.getElementById("np-memo-fecha")?.value || "";

  const resp = document.getElementById("np-taller-facilitador")?.value || "";
  const mod = document.getElementById("np-taller-modalidad")?.value || "";
  const lug = document.getElementById("np-taller-lugar")?.value || "";
  const fTaller = document.getElementById("np-taller-fecha")?.value || "";
  const hrs = document.getElementById("np-taller-horas")?.value || "3";
  const part = document.getElementById("np-taller-participantes")?.value || "25";

  const objGen = document.getElementById("np-obj-general")?.value || "";
  const objEsp = document.getElementById("np-obj-especificos")?.value || "";
  const met = document.getElementById("np-metodologia")?.value || "";
  const res = document.getElementById("np-resultados")?.value || "";

  const pSalon = document.getElementById("np-pres-salon")?.value || "0.00";
  const pAlim = document.getElementById("np-pres-alimentacion")?.value || "325.00";
  const pPas = document.getElementById("np-pres-pasajes")?.value || "386.90";
  const pViat = document.getElementById("np-pres-viaticos")?.value || "0.00";
  const pMat = document.getElementById("np-pres-materiales")?.value || "0.00";
  const pOtr = document.getElementById("np-pres-otros")?.value || "0.00";
  const pTot = (parseFloat(pSalon) + parseFloat(pAlim) + parseFloat(pPas) + parseFloat(pViat) + parseFloat(pMat) + parseFloat(pOtr)).toFixed(2);

  const datos = {
    titulo: tit,
    a, via1, via2, de, ref, codigoRef: cod, fecha,
    facilitador: resp,
    modalidad: mod,
    lugar: lug,
    fechaTaller: fTaller,
    horas: hrs,
    participantes: part,
    objGeneral: objGen,
    objEspecificos: objEsp,
    metodologia: met,
    resultados: res,
    cronograma: (typeof cronogramaNuevoPlanificadorTemp !== "undefined" && Array.isArray(cronogramaNuevoPlanificadorTemp)) ? cronogramaNuevoPlanificadorTemp : [],
    presupuesto: {
      salon: pSalon,
      alimentacion: pAlim,
      pasajes: pPas,
      viaticos: pViat,
      materiales: pMat,
      otros: pOtr,
      total: pTot
    }
  };

  const html = generarHtmlContenidoPlanificador(datos);
  exportarDocumentoPDF(html, `Planificador_${tit.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`);
}

function exportarNuevoPlanificadorWord() {
  const tit = document.getElementById("np-taller-titulo")?.value || "Taller Formativo CIES";
  const a = document.getElementById("np-memo-a")?.value || "";
  const de = document.getElementById("np-memo-de")?.value || "";
  const via1 = document.getElementById("np-memo-via1")?.value || "";
  const via2 = document.getElementById("np-memo-via2")?.value || "";
  const ref = document.getElementById("np-memo-ref")?.value || "";
  const cod = document.getElementById("np-memo-cod")?.value || "";
  const fecha = document.getElementById("np-memo-fecha")?.value || "";

  const resp = document.getElementById("np-taller-facilitador")?.value || "";
  const mod = document.getElementById("np-taller-modalidad")?.value || "";
  const lug = document.getElementById("np-taller-lugar")?.value || "";
  const fTaller = document.getElementById("np-taller-fecha")?.value || "";
  const hrs = document.getElementById("np-taller-horas")?.value || "3";
  const part = document.getElementById("np-taller-participantes")?.value || "25";

  const objGen = document.getElementById("np-obj-general")?.value || "";
  const objEsp = document.getElementById("np-obj-especificos")?.value || "";
  const met = document.getElementById("np-metodologia")?.value || "";
  const res = document.getElementById("np-resultados")?.value || "";

  const pSalon = document.getElementById("np-pres-salon")?.value || "0.00";
  const pAlim = document.getElementById("np-pres-alimentacion")?.value || "325.00";
  const pPas = document.getElementById("np-pres-pasajes")?.value || "386.90";
  const pViat = document.getElementById("np-pres-viaticos")?.value || "0.00";
  const pMat = document.getElementById("np-pres-materiales")?.value || "0.00";
  const pOtr = document.getElementById("np-pres-otros")?.value || "0.00";
  const pTot = (parseFloat(pSalon) + parseFloat(pAlim) + parseFloat(pPas) + parseFloat(pViat) + parseFloat(pMat) + parseFloat(pOtr)).toFixed(2);

  const datos = {
    titulo: tit,
    a, via1, via2, de, ref, codigoRef: cod, fecha,
    facilitador: resp,
    modalidad: mod,
    lugar: lug,
    fechaTaller: fTaller,
    horas: hrs,
    participantes: part,
    objGeneral: objGen,
    objEspecificos: objEsp,
    metodologia: met,
    resultados: res,
    cronograma: (typeof cronogramaNuevoPlanificadorTemp !== "undefined" && Array.isArray(cronogramaNuevoPlanificadorTemp)) ? cronogramaNuevoPlanificadorTemp : [],
    presupuesto: {
      salon: pSalon,
      alimentacion: pAlim,
      pasajes: pPas,
      viaticos: pViat,
      materiales: pMat,
      otros: pOtr,
      total: pTot
    }
  };

  const html = generarHtmlContenidoPlanificador(datos);
  descargarDocumentoWord(html, `Planificador_${tit.replace(/[^a-zA-Z0-9]/g, '_')}.doc`);
}

function exportarPlanillaDesdeModalActividad(formato) {
  const tit = document.getElementById("act-titulo")?.value || "Planilla CIES";
  const cat = document.getElementById("act-categoria")?.value || "Planilla de Asistencia y Alimentación (SGC-Apoyo-ABS-3-pp3)";
  const ue = document.getElementById("act-ue")?.value || "-";
  const reg = document.getElementById("act-regional")?.value || "EA";
  const fecha = document.getElementById("act-fecha")?.value || "";
  const resp = document.getElementById("act-responsable")?.value || "";
  const partCount = parseInt(document.getElementById("act-participantes")?.value) || 25;
  const mat = document.getElementById("act-material")?.value || "";

  const refM = document.getElementById("act-ref-m")?.checked ?? false;
  const al = document.getElementById("act-almuerzo")?.checked ?? true;
  const refT = document.getElementById("act-ref-t")?.checked ?? true;
  const ce = document.getElementById("act-cena")?.checked ?? false;

  const db = getDB();
  const participantes = (db.participantes || []).slice(0, partCount);

  const actMock = {
    id: Date.now(),
    titulo: tit,
    categoriaPlanilla: cat,
    unidadEducativa: ue,
    regional: reg,
    fecha,
    responsable: resp,
    participantesCount: partCount,
    materialDistribuido: mat,
    refManana: refM,
    almuerzo: al,
    refTarde: refT,
    cena: ce
  };

  const html = generarHtmlContenidoPlanillaAsistencia(actMock, participantes);
  const cleanTit = tit.replace(/[^a-zA-Z0-9]/g, '_');

  if (formato === 'word') {
    descargarDocumentoWord(html, `Planilla_Asistencia_${cleanTit}.doc`);
  } else {
    exportarDocumentoPDF(html, `Planilla_Asistencia_${cleanTit}.pdf`);
  }
}

function exportarPlanillaPorId(actId, formato) {
  const db = getDB();
  const act = db.actividades.find(a => a.id === parseInt(actId));
  if (!act) {
    showToast("No se encontró la planilla seleccionada.", "error");
    return;
  }

  const cleanTit = (act.titulo || "Planilla").replace(/[^a-zA-Z0-9]/g, '_');

  // Si tiene talleres o es proceso formativo Líderes 5_4_24, exportar el planificador y la planilla
  if (act.esProcesoEducativo || (act.talleres && act.talleres.length > 0)) {
    const primerTaller = act.talleres[0];
    const planif = primerTaller.planificadorOficial || {};
    const memo = planif.memorandum || {};
    const pres = primerTaller.presupuestoDetalle || {};

    const datos = {
      titulo: primerTaller.titulo || act.titulo,
      a: memo.a || "Dr. Fernando Álvarez Fuentes - GERENTE REGIONAL CIES LA PAZ",
      via1: memo.via1 || "Lic. María Uzeda Romero - JEFA ADMINISTRATIVA CIES LA PAZ",
      via2: memo.via2 || "Lic. Gloria O. Arauco Lima - COORDINADORA COMPONENTE EDUCATIVO",
      de: memo.de || `${primerTaller.facilitador || act.responsable} - RESPONSABLE AREA EDUCATIVA CIES ${act.regional || 'EA'}`,
      ref: memo.ref || "SOLICITUD DE GASTO - CAPACITACION",
      codigoRef: memo.codigoRef || `CIES EDU. ${act.regional || 'EA'} / RFS 15/2024`,
      fecha: memo.fecha || primerTaller.fecha || act.fecha,
      facilitador: primerTaller.facilitador || act.responsable,
      modalidad: primerTaller.modalidad || "Presencial Abierto",
      lugar: primerTaller.lugar || act.unidadEducativa || "Sede CIES",
      fechaTaller: primerTaller.fecha || act.fecha,
      horas: primerTaller.horas || "3",
      participantes: primerTaller.participantes || act.participantesCount || 25,
      objGeneral: planif.objetivoGeneral || "Fortalecer habilidades y destrezas para desarrollar una vida sana, plena e integral de su salud sexual y salud reproductiva.",
      objEspecificos: planif.objetivosEspecificos || "1. Reconocer, relacionar y aplicar las destrezas sobre toma de decisiones y asertividad.\n2. Integrar herramientas en la construcción del plan de vida.",
      metodologia: planif.metodologia || "Activa- participativa",
      datosGrupo: planif.datosGrupo || `Adolescentes y jóvenes de ${act.unidadEducativa}`,
      resultados: planif.resultadosEsperados || "Desarrollo de competencias para el cuidado de la salud sexual y reproductiva.",
      cronograma: (planif.cronograma && planif.cronograma.length > 0) ? planif.cronograma : [
        { hora: "15:00 - 15:15", tema: "Inscripción", contenido: "Registro de firmas en planilla oficial", tecnica: "Registro", recursos: "Planilla", responsable: act.responsable },
        { hora: "15:15 - 16:45", tema: primerTaller.titulo, contenido: "Desarrollo didáctico participativo", tecnica: "Dinámica", recursos: "Papelógrafos", responsable: act.responsable },
        { hora: "16:45 - 18:00", tema: "Cierre y Evaluación", contenido: "Conclusiones y acuerdos", tecnica: "Lluvia de ideas", recursos: "Tarjetas", responsable: act.responsable }
      ],
      presupuesto: {
        salon: pres.salon !== undefined ? pres.salon : 0,
        alimentacion: pres.alimentacion !== undefined ? pres.alimentacion : (act.totalPresupuesto > 0 ? act.totalPresupuesto : 325),
        pasajes: pres.pasajes !== undefined ? pres.pasajes : 386.90,
        viaticos: pres.viaticos !== undefined ? pres.viaticos : 0,
        materiales: pres.materiales !== undefined ? pres.materiales : 0,
        otros: pres.otros !== undefined ? pres.otros : 0,
        total: pres.total !== undefined ? pres.total : (act.totalPresupuesto || 711.90)
      }
    };

    const htmlPlanificador = generarHtmlContenidoPlanificador(datos);

    // Obtener participantes vinculados a este proceso
    const preList = (db.preregistros || []).filter(p => p.actividadId === act.id);
    const listaParticipantes = preList.length > 0
      ? preList.map(p => ({
          nombres: p.nombre,
          ci: p.ci,
          edad: p.edad,
          genero: p.genero,
          cargoOcupacion: p.rol,
          telefono: p.celular
        }))
      : (db.participantes || []).slice(0, act.participantesCount || 25);

    const htmlAsistencia = generarHtmlContenidoPlanillaAsistencia(act, listaParticipantes);

    const htmlCompleto = `
      ${htmlPlanificador}
      <div style="page-break-before: always; margin-top: 40pt;"></div>
      ${htmlAsistencia}
    `;

    if (formato === 'word') {
      descargarDocumentoWord(htmlCompleto, `Planificador_Y_Asistencia_${cleanTit}.doc`);
    } else {
      exportarDocumentoPDF(htmlCompleto, `Planificador_Y_Asistencia_${cleanTit}.pdf`);
    }
    return;
  }

  // Actividad estándar (Asistencia Diaria SGC-Apoyo-ABS-3-pp3 u otras categorías)
  const preList = (db.preregistros || []).filter(p => p.actividadId === act.id);
  const listaParticipantes = preList.length > 0
    ? preList.map(p => ({
        nombres: p.nombre,
        ci: p.ci,
        edad: p.edad,
        genero: p.genero,
        cargoOcupacion: p.rol,
        telefono: p.celular
      }))
    : (db.participantes || []).slice(0, act.participantesCount || 25);

  const html = generarHtmlContenidoPlanillaAsistencia(act, listaParticipantes);

  if (formato === 'word') {
    descargarDocumentoWord(html, `Planilla_Oficial_${cleanTit}.doc`);
  } else {
    exportarDocumentoPDF(html, `Planilla_Oficial_${cleanTit}.pdf`);
  }
}

// Aliases para retrocompatibilidad
function imprimirPlanificadorVista() {
  exportarPlanificadorVistaPDF();
}

function imprimirPlanificadorOficial() {
  exportarPlanificadorModalPDF();
}

// Alias para compatibilidad con código antiguo
function renderWorkspacePaso1() {
  renderFasePlanificacion();
}

/// -------------------------------------------------------------
// FASE 2: EJECUCIÓN EN TERRENO (PRE-REGISTRO, AULA & 4 COMIDAS)
// -------------------------------------------------------------
function renderFaseEjecucion() {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  let taller = talleres.find(t => t.id === currentWorkspaceTallerId);
  if (!taller) {
    taller = talleres[0];
    if (taller) currentWorkspaceTallerId = taller.id;
  }
  if (!taller) return;

  const ejec = taller.ejecucion || {};

  const loc = window.location.href.split('#')[0].split('?')[0];
  const baseUrl = loc.substring(0, loc.lastIndexOf('/') + 1);

  // 2.0 Auto-Registro de Asistencia Móvil con Firma Touch (asistencia.html)
  const asistUrl = `${baseUrl}asistencia.html?actId=${act.id}&tallerId=${taller.id}`;
  const inputAsistLink = document.getElementById("ws-asist-link-input");
  if (inputAsistLink) inputAsistLink.value = asistUrl;

  const asistList = (db.asistenciasTalleres || []).filter(a => a.actividadId === act.id && a.tallerId === taller.id);
  const totalAsist = asistList.length;
  const totalFirmados = asistList.filter(a => a.firmaDataUrl).length;
  const aforoTaller = taller.participantes || act.participantesCount || 25;

  const statAsistTotal = document.getElementById("ws-stat-asist-total");
  const statAsistFirmados = document.getElementById("ws-stat-asist-firmados");
  const statAsistAforo = document.getElementById("ws-stat-asist-aforo");
  const conteoAsistBadge = document.getElementById("ws-conteo-asistencias-taller");

  if (statAsistTotal) statAsistTotal.textContent = totalAsist;
  if (statAsistFirmados) statAsistFirmados.textContent = totalFirmados;
  if (statAsistAforo) statAsistAforo.textContent = aforoTaller;
  if (conteoAsistBadge) conteoAsistBadge.textContent = `${totalAsist} registrado${totalAsist === 1 ? '' : 's'}`;

  const tbodyAsist = document.getElementById("ws-tabla-asistencias-taller-body");
  if (tbodyAsist) {
    if (asistList.length === 0) {
      tbodyAsist.innerHTML = `
        <tr>
          <td colspan="6" class="text-center py-6 text-slate-400">
            <p class="font-medium text-xs text-slate-600 mb-1">Aún no hay estudiantes que hayan marcado asistencia en este taller.</p>
            <p class="text-[11px] text-slate-400 mb-2">Proyecta el código QR o comparte el enlace móvil con los asistentes para iniciar el check-in.</p>
            <button type="button" onclick="abrirModalQrAsistenciaWs()" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-2xs cursor-pointer inline-flex items-center gap-1.5">
              <span>🔳 Proyectar Código QR en Pizarra</span>
            </button>
          </td>
        </tr>
      `;
    } else {
      tbodyAsist.innerHTML = asistList.map((a, idx) => `
        <tr class="hover:bg-emerald-50/50 transition-colors">
          <td class="py-2.5 px-3 font-bold text-slate-400 text-xs">${idx + 1}</td>
          <td class="py-2.5 px-3">
            <div class="font-bold text-slate-900">${escapeHtml(a.nombre || a.nombres)}</div>
            <div class="text-[10px] text-slate-400 font-mono">CI: ${escapeHtml(a.ci || '-')}</div>
          </td>
          <td class="py-2.5 px-3">
            <div class="font-medium text-slate-800">${escapeHtml(a.rol || 'Participante')}</div>
            <div class="text-[10px] text-slate-400 truncate max-w-[150px]">${escapeHtml(a.institucion || a.procedencia || '-')}</div>
          </td>
          <td class="py-2.5 px-3 text-center font-mono text-[11px] font-bold text-emerald-800">
            ${escapeHtml(a.horaExacta || (a.fechaHora ? a.fechaHora.split(' ')[1] : '-'))}
          </td>
          <td class="py-2.5 px-3 text-center">
            ${a.firmaDataUrl ? `
              <button type="button" onclick="verFirmaModal('${escapeHtml(a.firmaDataUrl)}', '${escapeHtml(a.nombre || a.nombres)}', '${escapeHtml(a.ci || '-')}')" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-[10px] font-bold transition-colors cursor-pointer shadow-2xs" title="Ver trazo de firma digital">
                <span>✓ Firma Touch</span>
              </button>
            ` : '<span class="text-slate-400 text-[10px]">Sin firma</span>'}
          </td>
          <td class="py-2.5 px-2 text-right whitespace-nowrap">
            <button type="button" onclick="eliminarAsistenciaTallerWs(${a.id})" class="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Eliminar registro de asistencia">
              <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join("");
    }
  }

  // 2.1 Enlace de Pre-registro público
  const publicUrl = `${baseUrl}preregistro.html?actId=${act.id}&tallerId=${taller.id}`;
  const inputLink = document.getElementById("ws-prereg-link-input");
  if (inputLink) inputLink.value = publicUrl;

  // Lista y métricas de preinscritos
  const preList = (db.preregistros || []).filter(p => p.actividadId === act.id);
  const total = preList.length;
  const confirmados = preList.filter(p => p.confirmado !== false && p.asistenciaConfirmada !== false).length;
  const pendientes = total - confirmados;
  const cupo = taller.participantes || act.participantesCount || 25;

  const statTotal = document.getElementById("ws-stat-pre-total");
  const statConf = document.getElementById("ws-stat-pre-conf");
  const statPend = document.getElementById("ws-stat-pre-pend");
  const statCupo = document.getElementById("ws-stat-pre-cupo");

  if (statTotal) statTotal.textContent = total;
  if (statConf) statConf.textContent = confirmados;
  if (statPend) statPend.textContent = pendientes;
  if (statCupo) statCupo.textContent = cupo;

  const tbody = document.getElementById("ws-tabla-preregistros-body");
  if (tbody) {
    if (preList.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" class="text-center py-6 text-slate-400">
            <p class="font-medium text-xs text-slate-600 mb-1">Aún no hay participantes preinscritos para esta actividad.</p>
            <p class="text-[11px] text-slate-400 mb-2">Comparte el enlace público con los participantes para conformar la lista previa.</p>
            <button type="button" onclick="copiarEnlacePreregistroWs()" class="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-lg shadow-2xs cursor-pointer">
              📋 Copiar Enlace de Difusión
            </button>
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = preList.map((p, idx) => {
        const isConf = p.confirmado !== false && p.asistenciaConfirmada !== false;
        const cleanCel = (p.celular || "").replace(/\D/g, "");
        const waLink = cleanCel.length >= 8 ? `https://wa.me/591${cleanCel}` : null;

        return `
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 font-bold text-slate-400 text-xs">${idx + 1}</td>
            <td class="py-2.5 px-3">
              <div class="font-bold text-slate-900">${escapeHtml(p.nombre || p.nombres)}</div>
              <div class="text-[10px] text-slate-400 font-mono">CI: ${escapeHtml(p.ci || 'Sin CI')}</div>
            </td>
            <td class="py-2.5 px-3">
              <div class="flex items-center gap-1.5 font-mono text-slate-700">
                <span>${escapeHtml(p.celular || '-')}</span>
                ${waLink ? `
                  <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:text-emerald-800 p-0.5 hover:bg-emerald-50 rounded" title="Enviar WhatsApp">
                    <svg class="w-3.5 h-3.5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  </a>
                ` : ''}
              </div>
            </td>
            <td class="py-2.5 px-3">
              <div class="font-medium text-slate-800">${escapeHtml(p.rol || p.rolInstitucion || '-')}</div>
              <div class="text-[10px] text-slate-400 truncate max-w-[150px]">${escapeHtml(p.institucion || act.unidadEducativa)}</div>
            </td>
            <td class="py-2.5 px-3 text-center whitespace-nowrap">
              <button type="button" onclick="toggleConfirmacionPreregistroWs(${p.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border transition-colors cursor-pointer ${
                isConf 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100' 
                  : 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
              }" title="Alternar confirmación de asistencia">
                <span>${isConf ? '✓ Confirmado' : '⏳ Por Confirmar'}</span>
              </button>
            </td>
            <td class="py-2.5 px-2 text-right whitespace-nowrap">
              <button type="button" onclick="eliminarPreregistroWs(${p.id})" class="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Eliminar participante">
                <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
            </td>
          </tr>
        `;
      }).join("");
    }
  }

  // 2.2 Servicios de Alimentación (4 Comidas) & Materiales
  const refM = document.getElementById("ws-ejec-ref-m");
  const alm = document.getElementById("ws-ejec-almuerzo");
  const refT = document.getElementById("ws-ejec-ref-t");
  const cena = document.getElementById("ws-ejec-cena");
  const matEl = document.getElementById("ws-ejec-material");

  if (refM) refM.checked = (ejec.refManana !== undefined) ? !!ejec.refManana : !!act.refManana;
  if (alm) alm.checked = (ejec.almuerzo !== undefined) ? !!ejec.almuerzo : !!act.almuerzo;
  if (refT) refT.checked = (ejec.refTarde !== undefined) ? !!ejec.refTarde : !!act.refTarde;
  if (cena) cena.checked = (ejec.cena !== undefined) ? !!ejec.cena : !!act.cena;
  if (matEl) matEl.value = ejec.materialDistribuido || act.materialDistribuido || "";

  // 2.3 Pre-Test Diagnóstico del Taller
  const preTestLink = `${baseUrl}evaluacion.html?tipo=pre&actId=${act.id}&tallerId=${taller.id}`;
  const preLinkInput = document.getElementById("ws-ejec-pre-link");
  if (preLinkInput) preLinkInput.value = preTestLink;

  // 2.4 Resumen del Modo Scanner de Credenciales QR (Opción B)
  renderModoScannerResumen();

  // 2.5 Resumen del Modo Dual de Firmas Físicas (Opción C)
  renderModoDualResumen();

  // 2.6 Preservar la pestaña de modalidad activa (Móvil, Scanner QR o Dual)
  if (typeof modoAsistenciaWsActual !== "undefined" && modoAsistenciaWsActual) {
    const btnMovil = document.getElementById("tab-modo-asist-movil");
    const btnScanner = document.getElementById("tab-modo-asist-scanner");
    const btnDual = document.getElementById("tab-modo-asist-dual");
    const secMovil = document.getElementById("sec-modo-asist-movil");
    const secScanner = document.getElementById("sec-modo-asist-scanner");
    const secDual = document.getElementById("sec-modo-asist-dual");

    const activeCls = (color) => `p-3 rounded-xl border-2 transition-all text-left flex items-start gap-3 bg-${color}-50 border-${color}-500 text-${color}-950 shadow-2xs cursor-pointer`;
    const inactiveCls = "p-3 rounded-xl border-2 transition-all text-left flex items-start gap-3 bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer";

    if (modoAsistenciaWsActual === "scanner") {
      if (btnScanner) btnScanner.className = activeCls("violet");
      if (btnMovil) btnMovil.className = inactiveCls;
      if (btnDual) btnDual.className = inactiveCls;
      if (secScanner) secScanner.classList.remove("hidden");
      if (secMovil) secMovil.classList.add("hidden");
      if (secDual) secDual.classList.add("hidden");
    } else if (modoAsistenciaWsActual === "dual") {
      if (btnDual) btnDual.className = activeCls("indigo");
      if (btnMovil) btnMovil.className = inactiveCls;
      if (btnScanner) btnScanner.className = inactiveCls;
      if (secDual) secDual.classList.remove("hidden");
      if (secMovil) secMovil.classList.add("hidden");
      if (secScanner) secScanner.classList.add("hidden");
    } else {
      if (btnMovil) btnMovil.className = activeCls("emerald");
      if (btnScanner) btnScanner.className = inactiveCls;
      if (btnDual) btnDual.className = inactiveCls;
      if (secMovil) secMovil.classList.remove("hidden");
      if (secScanner) secScanner.classList.add("hidden");
      if (secDual) secDual.classList.add("hidden");
    }
  }
}

function guardarFaseEjecucion(e) {
  e.preventDefault();
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;

  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  const tIdx = talleres.findIndex(t => t.id === currentWorkspaceTallerId);
  if (tIdx === -1) return;

  const taller = talleres[tIdx];
  if (!taller.ejecucion) taller.ejecucion = {};

  taller.ejecucion.refManana = document.getElementById("ws-ejec-ref-m")?.checked ?? false;
  taller.ejecucion.almuerzo = document.getElementById("ws-ejec-almuerzo")?.checked ?? false;
  taller.ejecucion.refTarde = document.getElementById("ws-ejec-ref-t")?.checked ?? false;
  taller.ejecucion.cena = document.getElementById("ws-ejec-cena")?.checked ?? false;
  taller.ejecucion.materialDistribuido = document.getElementById("ws-ejec-material")?.value.trim() || "";

  saveDB(db);
  showToast("¡Fase 2 (Ejecución en Terreno) guardada con éxito!", "success");
}

// -------------------------------------------------------------
// FUNCIONES DE AUTO-REGISTRO MÓVIL Y QR DE ASISTENCIA
// -------------------------------------------------------------
function copiarEnlaceAsistenciaWs() {
  const input = document.getElementById("ws-asist-link-input");
  if (!input || !input.value) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(input.value).then(() => {
      showToast("¡Enlace de auto-asistencia copiado al portapapeles!", "success");
    }).catch(() => {
      input.select();
      document.execCommand("copy");
      showToast("¡Enlace copiado!", "success");
    });
  } else {
    input.select();
    document.execCommand("copy");
    showToast("¡Enlace copiado!", "success");
  }
}

function abrirEnlaceAsistenciaWs() {
  const input = document.getElementById("ws-asist-link-input");
  if (input && input.value) {
    window.open(input.value, "_blank");
  }
}

function renderQrFallback(container, url) {
  const encodedUrl = encodeURIComponent(url);
  container.innerHTML = `
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodedUrl}" 
      alt="Código QR de Asistencia" class="w-60 h-60 mx-auto rounded-xl object-contain bg-white p-2"
      onerror="this.parentElement.innerHTML='<div class=\\'p-4 text-center text-slate-500 font-medium\\'>Escanea con tu cámara o abre el enlace en tu navegador:<br><strong class=\\'text-emerald-700 break-all text-xs font-mono block mt-2\\'>${url}</strong></div>'">
  `;
}

function abrirModalQrAsistenciaWs() {
  const input = document.getElementById("ws-asist-link-input");
  let url = (input && input.value) ? input.value : "";

  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId) || (db.actividades && db.actividades[0]);
  const taller = (act?.talleres || []).find(t => t.id === currentWorkspaceTallerId) || (act?.talleres && act.talleres[0]);

  if (!url) {
    const loc = window.location.href.split('#')[0].split('?')[0];
    const baseUrl = loc.substring(0, loc.lastIndexOf('/') + 1);
    const actId = act ? act.id : 10;
    const tallerId = taller ? taller.id : 101;
    url = `${baseUrl}asistencia.html?actId=${actId}&tallerId=${tallerId}`;
    if (input) input.value = url;
  }

  const titEl = document.getElementById("modal-qr-taller-tit");
  const subEl = document.getElementById("modal-qr-taller-sub");
  const urlEl = document.getElementById("modal-qr-url-txt");
  const qrContainer = document.getElementById("modal-qr-container");

  if (titEl) titEl.textContent = taller ? taller.titulo : (act ? act.titulo : "Taller CIES");
  if (subEl) subEl.textContent = `${act?.titulo || 'Proceso Educativo'} • ${act?.regional || 'EA'} (${taller?.horas || 3} hrs)`;
  if (urlEl) urlEl.textContent = url;

  if (qrContainer) {
    qrContainer.innerHTML = "";
    if (typeof QRCode !== "undefined") {
      try {
        new QRCode(qrContainer, {
          text: url,
          width: 230,
          height: 230,
          colorDark: "#0f172a",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      } catch (err) {
        console.warn("Fallo QRCode local, usando fallback:", err);
        renderQrFallback(qrContainer, url);
      }
    } else {
      renderQrFallback(qrContainer, url);
    }
  }

  openModal("modal-qr-asistencia-taller");
}

function verFirmaModal(firmaDataUrl, nombre, ci) {
  const imgEl = document.getElementById("modal-firma-img-full");
  const nomEl = document.getElementById("modal-firma-nombre");
  const ciEl = document.getElementById("modal-firma-ci");

  if (imgEl) imgEl.src = firmaDataUrl;
  if (nomEl) nomEl.textContent = nombre;
  if (ciEl) ciEl.textContent = `CI: ${ci}`;

  openModal("modal-vista-previa-firma");
}

function eliminarAsistenciaTallerWs(asistenciaId) {
  if (!confirm("¿Deseas eliminar este registro de asistencia de la nómina?")) return;
  const db = getDB();
  db.asistenciasTalleres = (db.asistenciasTalleres || []).filter(a => a.id !== asistenciaId);
  
  // Actualizar el conteo en el taller
  const act = (db.actividades || []).find(a => a.id === currentWorkspaceActId);
  if (act) {
    const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
    if (taller) {
      const rest = db.asistenciasTalleres.filter(a => a.actividadId === currentWorkspaceActId && a.tallerId === currentWorkspaceTallerId).length;
      if (!taller.ejecucion) taller.ejecucion = {};
      taller.ejecucion.participantesAsistentes = rest;
      if (!taller.aforo) taller.aforo = taller.participantes || act.participantesCount || 25;
      if (!taller.participantes || taller.participantes < 10) taller.participantes = taller.aforo;
    }
  }

  saveDB(db);
  showToast("Asistencia eliminada del taller", "warning");
  renderFaseEjecucion();
}

function copiarEnlacePreregistroWs() {
  const input = document.getElementById("ws-prereg-link-input");
  if (!input || !input.value) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(input.value).then(() => {
      showToast("¡Enlace de pre-registro copiado al portapapeles!", "success");
    }).catch(() => {
      input.select();
      document.execCommand("copy");
      showToast("¡Enlace copiado!", "success");
    });
  } else {
    input.select();
    document.execCommand("copy");
    showToast("¡Enlace copiado!", "success");
  }
}

function abrirEnlacePreregistroWs() {
  const input = document.getElementById("ws-prereg-link-input");
  if (input && input.value) {
    window.open(input.value, "_blank");
  }
}

function toggleConfirmacionPreregistroWs(preregistroId) {
  const db = getDB();
  const idx = (db.preregistros || []).findIndex(p => p.id === preregistroId);
  if (idx !== -1) {
    const estadoActual = db.preregistros[idx].confirmado !== false && db.preregistros[idx].asistenciaConfirmada !== false;
    const nuevoEstado = !estadoActual;
    db.preregistros[idx].confirmado = nuevoEstado;
    db.preregistros[idx].asistenciaConfirmada = nuevoEstado;
    saveDB(db);

    showToast(nuevoEstado ? "Asistencia confirmada" : "Marcado como por confirmar", "info");
    renderFaseEjecucion();
    renderActividades();
  }
}

function eliminarPreregistroWs(preregistroId) {
  if (!confirm("¿Deseas eliminar este registro previo de participante?")) return;
  const db = getDB();
  db.preregistros = (db.preregistros || []).filter(p => p.id !== preregistroId);
  saveDB(db);

  showToast("Prerregistro eliminado de la nómina previa", "warning");
  renderFaseEjecucion();
  renderActividades();
}

function traspasarPreregistrosDesdeWs() {
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  const taller = talleres.find(t => t.id === currentWorkspaceTallerId);
  if (!taller) return;

  const lista = (db.preregistros || []).filter(p => p.actividadId === currentWorkspaceActId);
  const confirmados = lista.filter(p => p.confirmado !== false && p.asistenciaConfirmada !== false);

  if (confirmados.length === 0) {
    showToast("No hay participantes con asistencia confirmada para traspasar", "warning");
    return;
  }

  const msg = `¿Deseas traspasar los ${confirmados.length} participantes confirmados a la nómina de aula de "${taller.titulo}"?\n\n• El aforo asistencial del taller se actualizará a ${confirmados.length} asistentes.\n• Quienes no figuren en el padrón general se incorporarán automáticamente.`;
  if (!confirm(msg)) return;

  if (!taller.ejecucion) taller.ejecucion = {};
  taller.ejecucion.participantesAsistentes = confirmados.length;
  if (!taller.aforo) taller.aforo = taller.participantes || act.participantesCount || 25;
  if (!taller.participantes || taller.participantes < 10) taller.participantes = taller.aforo;

  if (!db.participantes) db.participantes = [];
  let nuevosIncorporados = 0;

  confirmados.forEach(c => {
    const existe = db.participantes.some(p => (p.ci || "").toLowerCase() === (c.ci || "").toLowerCase());
    if (!existe) {
      db.participantes.unshift({
        id: Date.now() + Math.floor(Math.random() * 1000),
        nombres: c.nombre || c.nombres,
        apellidos: "",
        ci: c.ci,
        telefono: c.celular || "",
        edad: c.edad || 20,
        rangoEdad: "15 a 19",
        genero: c.genero || "Femenino",
        procedencia: act.regional || "CBBA",
        regional: act.regional || "CBBA",
        cargoOcupacion: c.rol || "Estudiante",
        estadoFormacion: "Iniciado",
        activoEnAula: true,
        fechaRegistro: new Date().toISOString().split("T")[0]
      });
      nuevosIncorporados++;
    }
  });

  saveDB(db);
  showToast(`¡Traspaso exitoso! Taller actualizado a ${confirmados.length} personas (${nuevosIncorporados} nuevos perfiles registrados en padrón general).`, "success");

  renderFaseEjecucion();
  renderSidebarActividad(act);
  renderActividades();
  if (typeof renderParticipantes === "function") renderParticipantes();
}

/// -------------------------------------------------------------
// OPCIÓN C: DIGITALIZACIÓN ASISTIDA & VISOR DUAL DE FIRMAS FÍSICAS (SGC-Apoyo-ABS-3-pp3)
// -------------------------------------------------------------

let modoAsistenciaWsActual = 'movil';
let visorDualZoom = 1.0;
let visorDualParticipantes = [];
let visorDualFiltro = "";
let visorDualFotoUrl = null;

const NOMBRES_EJEMPLO_LIDERES = [
  { nombre: "María Elena Quispe Mamani", ci: "4829102 LP", rol: "Lideresa Red Tú Decides", procedencia: "Distrito 4 - El Alto", edad: 19, genero: "F" },
  { nombre: "Carlos Andrés Mendoza Rojas", ci: "6910293 CB", rol: "Estudiante Universitario", procedencia: "Cercado", edad: 22, genero: "M" },
  { nombre: "Alex Flores Choque", ci: "5829103 SC", rol: "Líder Comunitario", procedencia: "Plan 3000", edad: 17, genero: "Trans masculino" },
  { nombre: "Javier Gonzalo Ramos Gutiérrez", ci: "3920194 LP", rol: "Profesor de Secundaria", procedencia: "U.E. República de Francia", edad: 28, genero: "M" },
  { nombre: "Luciana Aruquipa Torrez", ci: "7102938 LP", rol: "Estudiante de Secundaria", procedencia: "U.E. Simón Bolívar", edad: 14, genero: "F" },
  { nombre: "Prof. Rosario Paredes Beltrán", ci: "2839102 CB", rol: "Maestra de Primaria", procedencia: "U.E. Avaroa", edad: 35, genero: "F" },
  { nombre: "Prof. Marco Antonio Vargas Soliz", ci: "3482910 LP", rol: "Maestro de Secundaria", procedencia: "U.E. Bolívar", edad: 42, genero: "M" },
  { nombre: "Camila Belén Rocha Fernández", ci: "8392019 LP", rol: "Líder Red Tú Decides", procedencia: "Villa Adela - El Alto", edad: 20, genero: "F" },
  { nombre: "Brayan Rodrigo Condori Limachi", ci: "9102948 LP", rol: "Estudiante UPEA", procedencia: "Río Seco - El Alto", edad: 21, genero: "M" },
  { nombre: "Nayeli Abigail Ticona Mamani", ci: "6192049 LP", rol: "Promotora de Salud", procedencia: "Ciudad Satélite", edad: 18, genero: "F" },
  { nombre: "Kevin Alexander Huanca Apaza", ci: "7829103 LP", rol: "Líder Juvenil", procedencia: "Distrito 8 - Senkata", edad: 19, genero: "M" },
  { nombre: "Valeria Stefany Callisaya Poma", ci: "5910291 LP", rol: "Estudiante de Secundaria", procedencia: "U.E. Pedro D. Murillo", edad: 16, genero: "F" },
  { nombre: "Rodrigo Hernán Choque Tintaya", ci: "8492018 LP", rol: "Voluntario CIES", procedencia: "16 de Julio", edad: 23, genero: "M" },
  { nombre: "Daniela Paola Colque Quispe", ci: "7401928 LP", rol: "Estudiante de Enfermería", procedencia: "Villa Dolores", edad: 21, genero: "F" },
  { nombre: "Joel Mauricio Alarcón Cruz", ci: "6391028 LP", rol: "Líder Comunitario", procedencia: "Villa Tejada", edad: 20, genero: "M" },
  { nombre: "Giselle Noemí Loza Guachalla", ci: "9281930 LP", rol: "Promotora Escolar", procedencia: "U.E. Los Andes", edad: 17, genero: "F" },
  { nombre: "Fernando David Flores Mamani", ci: "7392018 LP", rol: "Estudiante Técnico", procedencia: "Alto Lima", edad: 22, genero: "M" },
  { nombre: "Karen Jimena Tarqui Quispe", ci: "8491029 LP", rol: "Líder Red Tú Decides", procedencia: "Ballivián", edad: 19, genero: "F" },
  { nombre: "Álvaro Sebastián Copa Rojas", ci: "6492018 LP", rol: "Estudiante Secundaria", procedencia: "U.E. Franz Tamayo", edad: 16, genero: "M" },
  { nombre: "Wendy Marisol Poma Chura", ci: "5829182 LP", rol: "Voluntaria Comunitaria", procedencia: "Distrito 5", edad: 20, genero: "F" },
  { nombre: "Christian Denis Machaca Ali", ci: "7291029 LP", rol: "Estudiante UMSA", procedencia: "La Portada", edad: 23, genero: "M" },
  { nombre: "Melany Andrea Yujra Ramos", ci: "9382019 LP", rol: "Promotora Juvenil", procedencia: "Mercedario", edad: 18, genero: "F" },
  { nombre: "Gustavo Adolfo Quisbert Nina", ci: "6291039 LP", rol: "Líder Juvenil", procedencia: "Cosmos 79", edad: 21, genero: "M" },
  { nombre: "Adriana Belén Sirpa Mendoza", ci: "8391028 LP", rol: "Estudiante Secundaria", procedencia: "U.E. España", edad: 17, genero: "F" },
  { nombre: "Jhonnatan Ariel Laura Huanca", ci: "7492010 LP", rol: "Voluntario CIES", procedencia: "San Roque", edad: 22, genero: "M" }
];

/// -------------------------------------------------------------
// OPCIÓN B: CARNETS CON QR INDIVIDUAL POR PARTICIPANTE & ESCÁNER DEL EDUCADOR
// -------------------------------------------------------------

let streamCamaraActual = null;
let animacionScannerId = null;
let camaraActualFacingMode = "environment";
let scannerPausado = false;

function reproducirBeepConfirmacion() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch (e) {}
}

function reproducirBeepAtencion() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.22);
  } catch (e) {}
}

function reproducirBeepError() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(220, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.28);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.28);
  } catch (e) {}
}

function cambiarModoAsistenciaWs(modo) {
  modoAsistenciaWsActual = modo;
  const btnMovil = document.getElementById("tab-modo-asist-movil");
  const btnScanner = document.getElementById("tab-modo-asist-scanner");
  const btnDual = document.getElementById("tab-modo-asist-dual");

  const secMovil = document.getElementById("sec-modo-asist-movil");
  const secScanner = document.getElementById("sec-modo-asist-scanner");
  const secDual = document.getElementById("sec-modo-asist-dual");

  const activeCls = (color) => `p-3 rounded-xl border-2 transition-all text-left flex items-start gap-3 bg-${color}-50 border-${color}-500 text-${color}-950 shadow-2xs cursor-pointer`;
  const inactiveCls = "p-3 rounded-xl border-2 transition-all text-left flex items-start gap-3 bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer";

  if (modo === "movil") {
    if (btnMovil) btnMovil.className = activeCls("emerald");
    if (btnScanner) btnScanner.className = inactiveCls;
    if (btnDual) btnDual.className = inactiveCls;

    if (secMovil) secMovil.classList.remove("hidden");
    if (secScanner) secScanner.classList.add("hidden");
    if (secDual) secDual.classList.add("hidden");
  } else if (modo === "scanner") {
    if (btnScanner) btnScanner.className = activeCls("violet");
    if (btnMovil) btnMovil.className = inactiveCls;
    if (btnDual) btnDual.className = inactiveCls;

    if (secScanner) secScanner.classList.remove("hidden");
    if (secMovil) secMovil.classList.add("hidden");
    if (secDual) secDual.classList.add("hidden");
    renderModoScannerResumen();
  } else {
    if (btnDual) btnDual.className = activeCls("indigo");
    if (btnMovil) btnMovil.className = inactiveCls;
    if (btnScanner) btnScanner.className = inactiveCls;

    if (secDual) secDual.classList.remove("hidden");
    if (secMovil) secMovil.classList.add("hidden");
    if (secScanner) secScanner.classList.add("hidden");
    renderModoDualResumen();
  }
}

function renderModoScannerResumen() {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  let taller = talleres.find(t => t.id === currentWorkspaceTallerId) || talleres[0];
  if (!taller) return;

  const nomina = obtenerNominaTallerParaDigitalizacion(act, taller);
  const asistList = (db.asistenciasTalleres || []).filter(a => a.actividadId === act.id && a.tallerId === taller.id);

  const totalEscaneados = asistList.length;
  const aforoTaller = Math.max((taller && taller.aforo) || 0, (taller && taller.participantes && taller.participantes >= 10 ? taller.participantes : 0), (act && act.participantesCount) || 0, 25);
  const totalRefrigerios = asistList.filter(a => a.refTarde || a.refManana || a.almuerzo || a.cena).length;
  const ultimo = asistList[0];

  const statTotal = document.getElementById("ws-stat-scan-total");
  const statAforo = document.getElementById("ws-stat-scan-aforo");
  const statRefrig = document.getElementById("ws-stat-scan-refrigerios");
  const statUltimo = document.getElementById("ws-stat-scan-ultimo");
  const badgeConteo = document.getElementById("ws-conteo-scan-badge");

  if (statTotal) statTotal.textContent = totalEscaneados;
  if (statAforo) statAforo.textContent = aforoTaller;
  if (statRefrig) statRefrig.textContent = totalRefrigerios;
  if (statUltimo) {
    if (ultimo) {
      statUltimo.textContent = `${ultimo.nombre} (${ultimo.horaExacta || ''})`;
      statUltimo.title = `${ultimo.nombre} - CI: ${ultimo.ci} - Hora: ${ultimo.horaExacta}`;
    } else {
      statUltimo.textContent = "Ninguno aún";
      statUltimo.title = "Aún no se han registrado escaneos en esta sesión";
    }
  }
  if (badgeConteo) {
    badgeConteo.textContent = `${totalEscaneados} escaneado${totalEscaneados === 1 ? '' : 's'}`;
  }

  // Renderizar las píldoras interactivas de simulación para la demo
  const pillsContainer = document.getElementById("ws-scanner-pills-simulacion");
  if (pillsContainer) {
    pillsContainer.innerHTML = nomina.slice(0, 8).map((p) => {
      const yaEsta = asistList.some(a => (a.participanteId === p.id) || ((a.ci || '').trim().toLowerCase() === (p.ci || '').trim().toLowerCase()));
      return `
        <button type="button" onclick="simularEscaneoCredencialQr(${p.id})" 
          class="px-3.5 sm:px-2.5 py-2.5 sm:py-1 rounded-xl sm:rounded-lg text-xs sm:text-[10px] font-bold border transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs min-h-[40px] sm:min-h-0 active:scale-95 ${yaEsta ? 'bg-emerald-100 text-emerald-950 border-emerald-400 font-black ring-1 ring-emerald-300' : 'bg-white hover:bg-violet-50 hover:border-violet-300 text-slate-700 border-slate-300'}"
          title="${yaEsta ? '✓ Ya escaneado (asistencia registrada)' : '⚡ Clic para simular escaneo del carnet de ' + escapeHtml(p.nombre)}">
          <span class="text-sm sm:text-xs">${yaEsta ? '✓' : '🪪'}</span>
          <span>${escapeHtml(p.nombre.split(' ').slice(0, 2).join(' '))}</span>
          <span class="font-mono text-[10px] sm:text-[9px] ${yaEsta ? 'text-emerald-700 font-bold' : 'text-slate-400'}">(${escapeHtml((p.ci || '').split(' ')[0])})</span>
        </button>
      `;
    }).join("") + `
      <span class="text-[10px] text-slate-500 font-medium self-center pl-1">
        • ${Math.max(0, nomina.length - 8)} más en la nómina inferior
      </span>
    `;
  }

  // Renderizar la tabla de nómina con estado de escaneo de carnet
  const tbody = document.getElementById("ws-tabla-scan-taller-body");
  if (tbody) {
    if (nomina.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-6 text-slate-400">
            <p class="font-medium text-xs text-slate-600 mb-1">Aún no hay participantes asignados a este taller.</p>
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = nomina.map((p, idx) => {
        const matchAsist = asistList.find(a => (a.participanteId === p.id) || ((a.ci || '').trim().toLowerCase() === (p.ci || '').trim().toLowerCase()));
        const isPresent = !!matchAsist;
        const codCarnet = `CIES-LID-2024-${String(idx + 1).padStart(3, '0')}`;

        return `
          <tr class="hover:bg-violet-50/40 transition-colors ${isPresent ? 'bg-violet-50/20' : ''}">
            <td class="py-2.5 px-3 font-bold text-slate-400 text-xs">${idx + 1}</td>
            <td class="py-2.5 px-3">
              <div class="font-bold text-slate-900">${escapeHtml(p.nombre || p.nombres)}</div>
              <div class="text-[10px] text-slate-400 font-mono">CI: ${escapeHtml(p.ci || 'Sin CI')}</div>
            </td>
            <td class="py-2.5 px-3 font-mono text-[10px]">
              <span class="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-bold">${codCarnet}</span>
            </td>
            <td class="py-2.5 px-3 text-center">
              ${isPresent ? `
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-violet-100 text-violet-800 border border-violet-200">
                  <span>✓ ${escapeHtml(matchAsist.horaExacta || 'Registrado')}</span>
                </span>
              ` : '<span class="text-slate-400 text-[10px]">--:--</span>'}
            </td>
            <td class="py-2.5 px-3 text-center">
              ${isPresent ? `
                <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <span>✓ Refrigerio RT</span>
                </span>
              ` : '<span class="text-slate-400 text-[10px]">Por entregar</span>'}
            </td>
            <td class="py-2.5 px-3 text-center">
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${isPresent ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-slate-100 text-slate-500 border border-slate-200'}">
                ${isPresent ? '✓ Presente' : '⏳ Pendiente'}
              </span>
            </td>
            <td class="py-2.5 px-3 text-right whitespace-nowrap">
              ${isPresent ? `
                <button type="button" onclick="eliminarAsistenciaScannerWs(${matchAsist.id})" class="text-rose-500 hover:text-rose-700 p-1.5 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer" title="Anular este registro de asistencia">
                  <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
              ` : `
                <button type="button" onclick="simularEscaneoCredencialQr(${p.id})" class="px-3.5 sm:px-2 py-2 sm:py-1 bg-violet-50 hover:bg-violet-100 active:bg-violet-200 text-violet-800 border border-violet-200 rounded-lg text-xs sm:text-[10px] font-black transition-all cursor-pointer min-h-[36px] sm:min-h-0 shadow-2xs sm:shadow-none" title="Marcar check-in por escáner">
                  <span>⚡ Escanear</span>
                </button>
              `}
            </td>
          </tr>
        `;
      }).join("");
    }
  }
}

function generarDataUrlQrParaParticipante(texto) {
  if (typeof QRCode !== "undefined") {
    try {
      const div = document.createElement("div");
      div.style.display = "none";
      document.body.appendChild(div);
      new QRCode(div, {
        text: texto,
        width: 120,
        height: 120,
        colorDark: "#003366",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
      let result = "";
      const canvas = div.querySelector("canvas");
      if (canvas) {
        result = canvas.toDataURL("image/png");
      } else {
        const img = div.querySelector("img");
        if (img && img.src) result = img.src;
      }
      document.body.removeChild(div);
      if (result) return result;
    } catch (e) {
      console.warn("Fallo generación local de QR en canvas:", e);
    }
  }
  return `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(texto)}`;
}

function generarHtmlCredencialesQrParticipantes(act, taller, nomina) {
  const tit = (taller && taller.titulo) || act.titulo || "Capacitación Líderes Juveniles";
  const regional = act.regional || "EA";
  const rows = nomina || [];

  const cardsHtml = rows.map((p, idx) => {
    const payload = `CIES-PART:${p.id}:${p.ci || 'SinCI'}:${(p.nombre || p.nombres || 'Lider').replace(/:/g, '')}`;
    const qrImg = generarDataUrlQrParaParticipante(payload);
    const cod = `CIES-LID-2024-${String(idx + 1).padStart(3, '0')}`;

    return `
      <div class="carnet-card">
        <div class="carnet-header">
          <div style="font-weight: 900; font-size: 10pt; color: #ffffff; letter-spacing: 0.5px;">CIES SALUD SEXUAL Y REPRODUCTIVA</div>
          <div style="font-size: 7.5pt; color: #bfdbfe; font-weight: 600;">COMPONENTE EDUCATIVO • REGIONAL ${regional}</div>
          <div style="font-size: 8pt; color: #fde047; font-weight: 800; text-transform: uppercase;">PROCESO FORMATIVO • LÍDERES JUVENILES (33 HORAS)</div>
        </div>
        <div class="carnet-body">
          <div class="carnet-info">
            <div style="font-size: 7pt; color: #64748b; font-weight: bold; text-transform: uppercase;">Líder Juvenil Participante:</div>
            <div style="font-size: 10.5pt; font-weight: 900; color: #0f172a; line-height: 1.2; margin-bottom: 4px;">
              ${escapeHtml(p.nombre || p.nombres || 'Participante')}
            </div>
            <table style="width: 100%; border: none; font-size: 8pt; margin: 0;">
              <tr style="border: none;">
                <td style="border: none; padding: 1px 0; color: #64748b; width: 45px;"><strong>C.I.:</strong></td>
                <td style="border: none; padding: 1px 0; font-family: monospace; font-weight: bold; color: #003366;">${escapeHtml(p.ci || 'Sin CI')}</td>
              </tr>
              <tr style="border: none;">
                <td style="border: none; padding: 1px 0; color: #64748b;"><strong>Rol:</strong></td>
                <td style="border: none; padding: 1px 0; color: #334155;">${escapeHtml(p.rol || 'Líder Juvenil')}</td>
              </tr>
              <tr style="border: none;">
                <td style="border: none; padding: 1px 0; color: #64748b;"><strong>Origen:</strong></td>
                <td style="border: none; padding: 1px 0; color: #334155;">${escapeHtml(p.procedencia || act.unidadEducativa || 'El Alto')}</td>
              </tr>
              <tr style="border: none;">
                <td style="border: none; padding: 1px 0; color: #64748b;"><strong>Código:</strong></td>
                <td style="border: none; padding: 1px 0; font-family: monospace; font-weight: bold; color: #15803d;">${cod}</td>
              </tr>
            </table>
          </div>
          <div class="carnet-qr">
            <img src="${qrImg}" alt="QR" style="width: 88px; height: 88px; border: 1px solid #cbd5e1; border-radius: 6px; padding: 2px; background: #fff; display: block; margin: 0 auto;">
            <span style="font-size: 6pt; font-weight: bold; color: #475569; display: block; margin-top: 2px; text-align: center;">ESCANEAR EN AULA</span>
          </div>
        </div>
        <div class="carnet-talleres">
          <div class="taller-box">T1: Plan Vida<br><span style="font-size: 6pt; color: #64748b;">[ &nbsp; ]</span></div>
          <div class="taller-box">T2: Anticoncep.<br><span style="font-size: 6pt; color: #64748b;">[ &nbsp; ]</span></div>
          <div class="taller-box">T3: Prevención<br><span style="font-size: 6pt; color: #64748b;">[ &nbsp; ]</span></div>
          <div class="taller-box">T4: Liderazgo<br><span style="font-size: 6pt; color: #64748b;">[ &nbsp; ]</span></div>
          <div class="taller-box">T5: Incidencia<br><span style="font-size: 6pt; color: #64748b;">[ &nbsp; ]</span></div>
        </div>
        <div class="carnet-footer">
          <span>Válido para Registro de Asistencia y Control de Alimentación • SGC-Apoyo-ABS-3-pp3</span>
        </div>
      </div>
    `;
  }).join("");

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Credenciales con QR - CIES Líderes Juveniles</title>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; color: #111; margin: 15px; background: #f8fafc; }
        .header { text-align: center; border-bottom: 2px solid #003366; padding-bottom: 8px; margin-bottom: 15px; }
        .header h1 { font-size: 13pt; margin: 0; color: #003366; text-transform: uppercase; font-weight: 900; }
        .header p { margin: 2px 0; font-size: 8.5pt; color: #555; }
        .instructions { background: #eff6ff; border: 1px dashed #3b82f6; padding: 8px 12px; border-radius: 6px; font-size: 8pt; margin-bottom: 15px; color: #1e40af; }
        .grid-carnets { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .carnet-card { border: 1.5px dashed #003366; border-radius: 8px; background: #ffffff; padding: 0; overflow: hidden; page-break-inside: avoid; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
        .carnet-header { background: #003366; color: white; padding: 6px 10px; text-align: center; }
        .carnet-body { display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; gap: 8px; }
        .carnet-info { flex: 1; }
        .carnet-qr { text-align: center; width: 95px; flex-shrink: 0; }
        .carnet-talleres { display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px; padding: 4px 10px; background: #f8fafc; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; text-align: center; font-size: 6.5pt; font-weight: bold; }
        .taller-box { border: 1px solid #cbd5e1; border-radius: 4px; padding: 2px 1px; background: #ffffff; }
        .carnet-footer { font-size: 6pt; color: #64748b; text-align: center; padding: 3px 6px; background: #ffffff; }
        @media print {
          body { margin: 8mm; background: #ffffff; }
          .no-print { display: none !important; }
          .carnet-card { border: 1px dashed #333; }
        }
      </style>
    </head>
    <body>
      <div class="no-print" style="margin-bottom: 14px; padding: 10px 14px; background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #166534; font-size: 11pt;">Credenciales con QR Oficiales CIES (PDF para Imprimir)</strong>
          <p style="margin: 2px 0 0 0; font-size: 8.5pt; color: #15803d;">Imprime en cartulina o papel tamaño Carta y recorta por las líneas punteadas. Cada QR es único por estudiante.</p>
        </div>
        <button onclick="window.print()" style="padding: 8px 16px; background: #003366; color: white; font-weight: bold; border: none; border-radius: 6px; cursor: pointer; font-size: 10pt;">
          🖨️ Guardar PDF / Imprimir
        </button>
      </div>

      <div class="header">
        <h1>CIES SALUD SEXUAL Y REPRODUCTIVA</h1>
        <p>SISTEMA DE GESTIÓN DE LA CALIDAD • PROCEDIMIENTO SGC-APOYO-ABS-3</p>
        <p><strong>CREDENCIALES Y FICHAS DE ASISTENCIA CON CÓDIGO QR PERSONAL (${rows.length} PARTICIPANTES)</strong></p>
      </div>

      <div class="instructions">
        ✂️ <strong>INSTRUCCIÓN PARA EL EQUIPO FACILITADOR:</strong> Recortar cada credencial por los bordes punteados y entregar a los participantes al inicio del ciclo de 33 horas. El educador utilizará la opción <strong>"📷 Iniciar Escáner de Cámara QR"</strong> en el sistema web para registrar la asistencia en segundos en cada sesión.
      </div>

      <div class="grid-carnets">
        ${cardsHtml}
      </div>
    </body>
    </html>
  `;
}

function descargarCredencialesQrPDF() {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  let taller = talleres.find(t => t.id === currentWorkspaceTallerId) || talleres[0];

  const nomina = obtenerNominaTallerParaDigitalizacion(act, taller);
  const html = generarHtmlCredencialesQrParticipantes(act, taller, nomina);
  const cleanTit = (act.titulo || "Actividad").replace(/[^a-zA-Z0-9]/g, '_');
  exportarDocumentoPDF(html, `Credenciales_Asistencia_QR_${cleanTit}.pdf`);
}

function abrirModalEscanerQrEducador() {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  let taller = talleres.find(t => t.id === currentWorkspaceTallerId) || talleres[0];

  const subEl = document.getElementById("modal-scanner-subtitulo");
  if (subEl) {
    subEl.textContent = `${act.regional || 'EA'} • ${taller?.titulo || act.titulo} • ${taller?.fecha || act.fecha}`;
  }

  const resBox = document.getElementById("scanner-resultado-box");
  if (resBox) resBox.classList.add("hidden");

  scannerPausado = false;
  openModal("modal-escaner-qr-educador");
  iniciarCamaraEscanerEducador();
}

function cerrarModalEscanerQrEducador() {
  detenerCamaraEscanerEducador();
  closeModal("modal-escaner-qr-educador");
}

function cambiarCamaraEscaner() {
  camaraActualFacingMode = (camaraActualFacingMode === "environment") ? "user" : "environment";
  detenerCamaraEscanerEducador();
  iniciarCamaraEscanerEducador();
}

async function iniciarCamaraEscanerEducador() {
  const video = document.getElementById("scanner-video-educador");
  if (!video) return;

  try {
    const constraints = {
      video: {
        facingMode: camaraActualFacingMode,
        width: { ideal: 640 },
        height: { ideal: 480 }
      }
    };
    streamCamaraActual = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = streamCamaraActual;
    video.setAttribute("playsinline", "true");
    await video.play();
    scannerPausado = false;
    animacionScannerId = requestAnimationFrame(escanearFrameVideo);
  } catch (err) {
    console.warn("No se pudo iniciar la cámara web:", err);
    showToast("No se pudo acceder a la cámara. Puedes ingresar el CI manualmente o usar la simulación.", "warning");
  }
}

function detenerCamaraEscanerEducador() {
  if (animacionScannerId) {
    cancelAnimationFrame(animacionScannerId);
    animacionScannerId = null;
  }
  if (streamCamaraActual) {
    streamCamaraActual.getTracks().forEach(track => track.stop());
    streamCamaraActual = null;
  }
}

function escanearFrameVideo() {
  const video = document.getElementById("scanner-video-educador");
  if (!video || !streamCamaraActual) return;

  if (video.readyState === video.HAVE_ENOUGH_DATA && !scannerPausado) {
    // 1. Probar con BarcodeDetector nativo si está disponible
    if ('BarcodeDetector' in window) {
      try {
        const detector = new BarcodeDetector({ formats: ['qr_code'] });
        detector.detect(video).then(barcodes => {
          if (barcodes && barcodes.length > 0 && !scannerPausado) {
            scannerPausado = true;
            procesarLecturaQrEducador(barcodes[0].rawValue);
            setTimeout(() => { scannerPausado = false; }, 2000);
          }
        }).catch(() => {});
      } catch (e) {}
    } 
    // 2. Fallback con jsQR
    else if (typeof jsQR !== "undefined") {
      let canvas = document.getElementById("scanner-temp-canvas");
      if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "scanner-temp-canvas";
        canvas.style.display = "none";
        document.body.appendChild(canvas);
      }
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert"
      });
      if (code && code.data && !scannerPausado) {
        scannerPausado = true;
        procesarLecturaQrEducador(code.data);
        setTimeout(() => { scannerPausado = false; }, 2000);
      }
    }
  }

  animacionScannerId = requestAnimationFrame(escanearFrameVideo);
}

function procesarLecturaQrEducador(codigoLeido) {
  if (!codigoLeido || !currentWorkspaceActId || !currentWorkspaceTallerId) return;

  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;
  const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  if (!taller) return;

  const nomina = obtenerNominaTallerParaDigitalizacion(act, taller);
  const str = String(codigoLeido).trim().toLowerCase();

  let part = null;

  // Formato CIES-PART:id:ci:nombre
  if (str.startsWith("cies-part:")) {
    const segments = str.split(":");
    const pId = parseInt(segments[1]);
    const pCi = (segments[2] || "").trim().toLowerCase();
    part = nomina.find(p => p.id === pId) || nomina.find(p => (p.ci || "").toLowerCase().includes(pCi));
  }

  // Buscar por coincidencia de CI
  if (!part) {
    part = nomina.find(p => {
      const ciClean = (p.ci || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      const strClean = str.replace(/[^a-z0-9]/g, "");
      return strClean.includes(ciClean) || ciClean.includes(strClean);
    });
  }

  // Buscar por coincidencia de Nombre
  if (!part) {
    part = nomina.find(p => str.includes((p.nombre || p.nombres || "").toLowerCase().trim()));
  }

  if (!part) {
    reproducirBeepError();
    showToast(`No se reconoció a un participante con el código: "${codigoLeido}"`, "warning");
    return;
  }

  if (!db.asistenciasTalleres) db.asistenciasTalleres = [];
  const yaRegistrado = db.asistenciasTalleres.some(a => 
    a.actividadId === act.id && 
    a.tallerId === taller.id && 
    (a.participanteId === part.id || (a.ci && a.ci.trim().toLowerCase() === (part.ci || "").trim().toLowerCase()))
  );

  const horaActual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (yaRegistrado) {
    reproducirBeepAtencion();
    mostrarBannerResultadoEscaner(part, "ya_registrado", horaActual);
    showToast(`El participante "${part.nombre}" ya tiene asistencia registrada.`, "info");
    return;
  }

  const nuevoRegistro = {
    id: Date.now(),
    actividadId: act.id,
    tallerId: taller.id,
    participanteId: part.id,
    nombre: part.nombre || part.nombres,
    nombres: part.nombre || part.nombres,
    ci: part.ci,
    rol: part.rol || "Líder Juvenil",
    institucion: part.procedencia || act.unidadEducativa,
    fechaHora: new Date().toISOString().replace('T', ' ').slice(0, 19),
    horaExacta: horaActual,
    metodo: "Escaner QR Credencial",
    qrCodigo: `CIES-PART:${part.id}:${part.ci}`,
    refManana: !!taller.ejecucion?.refManana,
    almuerzo: !!taller.ejecucion?.almuerzo,
    refTarde: taller.ejecucion?.refTarde !== undefined ? !!taller.ejecucion?.refTarde : true,
    cena: !!taller.ejecucion?.cena
  };

  db.asistenciasTalleres.unshift(nuevoRegistro);

  const totalAsist = db.asistenciasTalleres.filter(a => a.actividadId === act.id && a.tallerId === taller.id).length;
  if (!taller.ejecucion) taller.ejecucion = {};
  taller.ejecucion.participantesAsistentes = totalAsist;
  if (!taller.aforo) taller.aforo = taller.participantes || act.participantesCount || 25;
  if (!taller.participantes || taller.participantes < 10) taller.participantes = taller.aforo;

  saveDB(db);

  reproducirBeepConfirmacion();
  mostrarBannerResultadoEscaner(part, "exito", horaActual);
  showToast(`¡Check-in QR exitoso! ${part.nombre} (CI: ${part.ci}) - ${horaActual}`, "success");

  renderModoScannerResumen();
  renderFaseEjecucion();
}

function mostrarBannerResultadoEscaner(part, tipo, hora) {
  const box = document.getElementById("scanner-resultado-box");
  if (!box) return;

  if (tipo === "exito") {
    box.className = "p-3 rounded-xl border-2 border-emerald-400 bg-emerald-50 text-emerald-950 flex items-center justify-between gap-3 animate-pulse";
    box.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-lg shrink-0">✓</span>
        <div>
          <div class="font-black text-xs sm:text-sm text-emerald-950 flex items-center gap-2">
            <span>${escapeHtml(part.nombre || part.nombres)}</span>
            <span class="px-2 py-0.2 rounded-full text-[9px] bg-emerald-200 text-emerald-900 font-bold">PRESENTE</span>
          </div>
          <p class="text-[11px] text-emerald-800 mt-0.5">CI: ${escapeHtml(part.ci)} • ${escapeHtml(part.rol || 'Líder')} • Check-in: <strong>${hora}</strong></p>
        </div>
      </div>
      <span class="text-xs font-mono font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-lg border border-emerald-300 shrink-0">
        Refrigerio: ✓ RT
      </span>
    `;
  } else if (tipo === "ya_registrado") {
    box.className = "p-3 rounded-xl border-2 border-amber-400 bg-amber-50 text-amber-950 flex items-center justify-between gap-3";
    box.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="w-10 h-10 rounded-full bg-amber-500 text-white font-black flex items-center justify-center text-lg shrink-0">ℹ️</span>
        <div>
          <div class="font-black text-xs sm:text-sm text-amber-950">
            ${escapeHtml(part.nombre || part.nombres)} (Ya registrado)
          </div>
          <p class="text-[11px] text-amber-800 mt-0.5">Este participante ya fue escaneado anteriormente en esta sesión.</p>
        </div>
      </div>
      <span class="text-[10px] font-mono text-amber-800 bg-white px-2 py-1 rounded border border-amber-300">
        CI: ${escapeHtml(part.ci)}
      </span>
    `;
  }
  box.classList.remove("hidden");
}

function simularEscaneoCredencialQr(partId) {
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  const taller = (act?.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  const nomina = obtenerNominaTallerParaDigitalizacion(act, taller);
  const part = nomina.find(p => p.id === partId);
  if (!part) return;

  const payload = `CIES-PART:${part.id}:${part.ci}:${part.nombre}`;
  procesarLecturaQrEducador(payload);
}

function simularEscaneoRafaga(cantidad = 5) {
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  const taller = (act?.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  const nomina = obtenerNominaTallerParaDigitalizacion(act, taller);
  const asistList = (db.asistenciasTalleres || []).filter(a => a.actividadId === act.id && a.tallerId === taller.id);

  const pendientes = nomina.filter(p => !asistList.some(a => a.participanteId === p.id));
  if (pendientes.length === 0) {
    showToast("Todos los participantes ya tienen asistencia registrada.", "info");
    return;
  }

  const lote = pendientes.slice(0, cantidad);
  lote.forEach((p, idx) => {
    setTimeout(() => {
      simularEscaneoCredencialQr(p.id);
    }, idx * 300);
  });
}

function procesarInputScannerManual() {
  const input = document.getElementById("ws-scanner-manual-input");
  if (!input || !input.value.trim()) return;
  const val = input.value.trim();
  input.value = "";
  procesarLecturaQrEducador(val);
}

function handleEnterScannerManual(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    procesarInputScannerManual();
  }
}

function procesarCiDesdeModalEscaner() {
  const input = document.getElementById("modal-scanner-manual-ci");
  if (!input || !input.value.trim()) return;
  const val = input.value.trim();
  input.value = "";
  procesarLecturaQrEducador(val);
}

function eliminarAsistenciaScannerWs(asistenciaId) {
  if (!confirm("¿Deseas anular esta asistencia escaneada?")) return;
  const db = getDB();
  db.asistenciasTalleres = (db.asistenciasTalleres || []).filter(a => a.id !== asistenciaId);

  const act = (db.actividades || []).find(a => a.id === currentWorkspaceActId);
  if (act) {
    const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
    if (taller) {
      const rest = db.asistenciasTalleres.filter(a => a.actividadId === currentWorkspaceActId && a.tallerId === currentWorkspaceTallerId).length;
      if (!taller.ejecucion) taller.ejecucion = {};
      taller.ejecucion.participantesAsistentes = rest;
      if (!taller.aforo) taller.aforo = taller.participantes || act.participantesCount || 25;
      if (!taller.participantes || taller.participantes < 10) taller.participantes = taller.aforo;
    }
  }

  saveDB(db);
  showToast("Asistencia anulada de la nómina.", "info");
  renderModoScannerResumen();
  renderFaseEjecucion();
}



function obtenerNominaTallerParaDigitalizacion(act, taller) {
  if (taller && taller.asistenciasFisicasCotejadas && taller.asistenciasFisicasCotejadas.length >= 20) {
    return taller.asistenciasFisicasCotejadas;
  }

  const db = getDB();
  const preList = (db.preregistros || []).filter(p => p.actividadId === act.id);
  const partList = db.participantes || [];

  // Mantener siempre el aforo normativo completo del taller (mínimo 25 participantes según diseño SGC CIES)
  const aforo = Math.max(
    (act && act.participantesCount) || 0,
    (taller && taller.aforo) || 0,
    (taller && taller.participantes && taller.participantes >= 10 ? taller.participantes : 0),
    25
  );
  const nominaFinal = [];

  // 1. Agregar participantes de NOMBRES_EJEMPLO_LIDERES para asegurar alta fidelidad
  NOMBRES_EJEMPLO_LIDERES.slice(0, aforo).forEach((ej, idx) => {
    nominaFinal.push({
      id: idx + 1,
      nombre: ej.nombre,
      ci: ej.ci,
      rol: ej.rol,
      procedencia: ej.procedencia,
      edad: ej.edad,
      genero: ej.genero,
      verificado: true,
      refManana: (taller && taller.ejecucion && taller.ejecucion.refManana !== undefined) ? !!taller.ejecucion.refManana : !!act.refManana,
      almuerzo: (taller && taller.ejecucion && taller.ejecucion.almuerzo !== undefined) ? !!taller.ejecucion.almuerzo : !!act.almuerzo,
      refTarde: (taller && taller.ejecucion && taller.ejecucion.refTarde !== undefined) ? !!taller.ejecucion.refTarde : (act.refTarde !== undefined ? !!act.refTarde : true),
      cena: (taller && taller.ejecucion && taller.ejecucion.cena !== undefined) ? !!taller.ejecucion.cena : !!act.cena,
      renglonHoja: idx + 1
    });
  });

  return nominaFinal;
}

function renderModoDualResumen() {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  let taller = talleres.find(t => t.id === currentWorkspaceTallerId) || talleres[0];
  if (!taller) return;

  const nomina = obtenerNominaTallerParaDigitalizacion(act, taller);
  const totalCotejados = nomina.filter(p => p.verificado !== false).length;

  const statTotal = document.getElementById("ws-stat-dual-total");
  const statArchivo = document.getElementById("ws-stat-dual-archivo");
  const statEstado = document.getElementById("ws-stat-dual-estado");
  const conteoBadge = document.getElementById("ws-conteo-dual-taller");

  const nombreArchivo = (taller.documentacion && taller.documentacion.docAsistencia) || taller.docAsistencia || act.documentoGeneral?.archivo || "Planilla_Firmas_Lideres_5_4_24.pdf";

  if (statTotal) statTotal.textContent = totalCotejados;
  if (statArchivo) {
    statArchivo.textContent = nombreArchivo;
    statArchivo.title = nombreArchivo;
  }
  if (statEstado) {
    if (totalCotejados > 0) {
      statEstado.className = "inline-flex items-center gap-1 px-2 py-0.5 mt-1 rounded text-[11px] font-black bg-emerald-100 text-emerald-800 border border-emerald-200";
      statEstado.textContent = "✓ Validado Orientador";
    } else {
      statEstado.className = "inline-flex items-center gap-1 px-2 py-0.5 mt-1 rounded text-[11px] font-black bg-amber-100 text-amber-800 border border-amber-200";
      statEstado.textContent = "⏳ Pendiente Cotejo";
    }
  }
  if (conteoBadge) {
    conteoBadge.textContent = `${totalCotejados} cotejados`;
  }

  const tbody = document.getElementById("ws-tabla-dual-taller-body");
  if (tbody) {
    if (nomina.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" class="text-center py-6 text-slate-400">
            <p class="font-medium text-xs text-slate-600 mb-1">Aún no se ha realizado el cotejo de firmas físicas para este taller.</p>
            <p class="text-[11px] text-slate-400 mb-2">Abre el Visor Dual para cotejar la planilla manuscrita escaneada contra la nómina.</p>
            <button type="button" onclick="abrirVisorDualDigitalizacion()" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-2xs cursor-pointer inline-flex items-center gap-1.5">
              <span>🔍 Abrir Visor Dual</span>
            </button>
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = nomina.map((p, idx) => {
        const isVerif = p.verificado !== false;
        return `
          <tr class="hover:bg-indigo-50/40 transition-colors">
            <td class="py-2.5 px-3 font-bold text-slate-400 text-xs">${idx + 1}</td>
            <td class="py-2.5 px-3">
              <div class="font-bold text-slate-900">${escapeHtml(p.nombre || p.nombres)}</div>
              <div class="text-[10px] text-slate-400 font-mono">CI: ${escapeHtml(p.ci || 'Sin CI')}</div>
            </td>
            <td class="py-2.5 px-3">
              <div class="font-medium text-slate-800">${escapeHtml(p.rol || 'Participante')}</div>
              <div class="text-[10px] text-slate-400 truncate max-w-[150px]">${escapeHtml(p.procedencia || '-')}</div>
            </td>
            <td class="py-2.5 px-3 text-center whitespace-nowrap">
              <span class="inline-flex items-center gap-1 text-[9px] font-mono font-bold">
                <span class="${p.refManana ? 'text-emerald-700 bg-emerald-100' : 'text-slate-300 bg-slate-100'} px-1 py-0.2 rounded" title="Refrigerio Mañana">RM</span>
                <span class="${p.almuerzo ? 'text-emerald-700 bg-emerald-100' : 'text-slate-300 bg-slate-100'} px-1 py-0.2 rounded" title="Almuerzo">AL</span>
                <span class="${p.refTarde ? 'text-emerald-700 bg-emerald-100' : 'text-slate-300 bg-slate-100'} px-1 py-0.2 rounded" title="Refrigerio Tarde">RT</span>
                <span class="${p.cena ? 'text-emerald-700 bg-emerald-100' : 'text-slate-300 bg-slate-100'} px-1 py-0.2 rounded" title="Cena">CE</span>
              </span>
            </td>
            <td class="py-2.5 px-3 text-center">
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                <span>✍️ Reng. ${p.renglonHoja || (idx + 1)}</span>
              </span>
            </td>
            <td class="py-2.5 px-3 text-right">
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${isVerif ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-amber-100 text-amber-800 border border-amber-200'}">
                ${isVerif ? '✓ Cotejado' : '⏳ Pendiente'}
              </span>
            </td>
          </tr>
        `;
      }).join("");
    }
  }
}

function generarTrazoFirmaSvg(idx, x, y) {
  const styles = [
    (cx, cy) => `M ${cx} ${cy+6} Q ${cx+15} ${cy-16} ${cx+32} ${cy+4} T ${cx+55} ${cy-6} Q ${cx+75} ${cy+12} ${cx+95} ${cy-4} M ${cx-5} ${cy+12} Q ${cx+40} ${cy+16} ${cx+105} ${cy+8}`,
    (cx, cy) => `M ${cx} ${cy+5} C ${cx+10} ${cy-18} ${cx+25} ${cy-8} ${cx+35} ${cy+8} Q ${cx+55} ${cy-10} ${cx+75} ${cy+4} L ${cx+90} ${cy-12} M ${cx+8} ${cy+14} L ${cx+100} ${cy+12}`,
    (cx, cy) => `M ${cx+5} ${cy-4} Q ${cx+20} ${cy+18} ${cx+40} ${cy-12} Q ${cx+60} ${cy+12} ${cx+85} ${cy-6} Q ${cx+100} ${cy+14} ${cx+115} ${cy-4} M ${cx} ${cy+12} Q ${cx+60} ${cy+18} ${cx+110} ${cy+6}`,
    (cx, cy) => `M ${cx+10} ${cy+12} L ${cx+25} ${cy-14} L ${cx+40} ${cy+8} Q ${cx+60} ${cy-16} ${cx+80} ${cy+6} T ${cx+105} ${cy-8} M ${cx+15} ${cy+15} L ${cx+95} ${cy+13}`,
    (cx, cy) => `M ${cx} ${cy} C ${cx+15} ${cy-18} ${cx+30} ${cy+18} ${cx+50} ${cy-4} T ${cx+85} ${cy+8} Q ${cx+98} ${cy-14} ${cx+110} ${cy+4} M ${cx+5} ${cy+12} L ${cx+115} ${cy+10}`
  ];
  return styles[idx % styles.length](x, y);
}

function generarSvgPlanillaFisicaFirmada(act, taller, nomina) {
  const tit = (taller && taller.titulo) || act.titulo || "Capacitación Líderes Juveniles";
  const fecha = (taller && taller.fecha) || act.fecha || "2024-04-05";
  const lugar = (taller && taller.lugar) || act.unidadEducativa || "CIES El Alto - Rincón Juvenil";
  const facilitador = (taller && taller.facilitador) || act.responsable || "Lic. Viviana Segales Sumi";
  const regional = act.regional || "EA";

  const rows = (nomina || NOMBRES_EJEMPLO_LIDERES).slice(0, 25);
  const coloresTinta = ["#1e3a8a", "#172554", "#1d4ed8", "#0f172a", "#1e40af"];

  let filasSvg = "";
  const startY = 215;
  const rowHeight = 35;

  rows.forEach((p, idx) => {
    const y = startY + idx * rowHeight;
    const bgRow = (idx % 2 === 0) ? "#ffffff" : "#fbfcfe";
    const tinta = coloresTinta[idx % coloresTinta.length];
    const pathFirma = generarTrazoFirmaSvg(idx, 715, y + 14);

    filasSvg += `
      <!-- Fila ${idx + 1} -->
      <rect x="25" y="${y}" width="850" height="${rowHeight}" fill="${bgRow}" stroke="#cbd5e1" stroke-width="0.8"/>
      <!-- N° -->
      <text x="40" y="${y + 22}" font-family="monospace" font-size="10" font-weight="bold" fill="#64748b" text-anchor="middle">${idx + 1}</text>
      <line x1="55" y1="${y}" x2="55" y2="${y + rowHeight}" stroke="#cbd5e1" stroke-width="0.8"/>
      <!-- Nombre -->
      <text x="65" y="${y + 21}" font-family="'Segoe UI', Arial, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a">${escapeHtml(p.nombre || p.nombres || '')}</text>
      <line x1="285" y1="${y}" x2="285" y2="${y + rowHeight}" stroke="#cbd5e1" stroke-width="0.8"/>
      <!-- CI -->
      <text x="330" y="${y + 21}" font-family="monospace" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">${escapeHtml(p.ci || '')}</text>
      <line x1="375" y1="${y}" x2="375" y2="${y + rowHeight}" stroke="#cbd5e1" stroke-width="0.8"/>
      <!-- Edad -->
      <text x="395" y="${y + 21}" font-family="monospace" font-size="10" fill="#334155" text-anchor="middle">${p.edad || 18}</text>
      <line x1="415" y1="${y}" x2="415" y2="${y + rowHeight}" stroke="#cbd5e1" stroke-width="0.8"/>
      <!-- Sexo -->
      <text x="435" y="${y + 21}" font-family="monospace" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">${(p.genero || 'F')[0].toUpperCase()}</text>
      <line x1="455" y1="${y}" x2="455" y2="${y + rowHeight}" stroke="#cbd5e1" stroke-width="0.8"/>
      <!-- Comunidad / UE -->
      <text x="465" y="${y + 21}" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" fill="#475569">${escapeHtml(p.procedencia || 'El Alto')}</text>
      <line x1="635" y1="${y}" x2="635" y2="${y + rowHeight}" stroke="#cbd5e1" stroke-width="0.8"/>
      <!-- Comidas: RM, AL, RT, CE -->
      <text x="647" y="${y + 22}" font-family="monospace" font-size="10" fill="${p.refManana ? '#1e3a8a' : '#94a3b8'}" font-weight="${p.refManana ? 'bold' : 'normal'}" text-anchor="middle">${p.refManana ? '✓' : '-'}</text>
      <line x1="660" y1="${y}" x2="660" y2="${y + rowHeight}" stroke="#cbd5e1" stroke-width="0.8"/>
      <text x="672" y="${y + 22}" font-family="monospace" font-size="10" fill="${p.almuerzo ? '#1e3a8a' : '#94a3b8'}" font-weight="${p.almuerzo ? 'bold' : 'normal'}" text-anchor="middle">${p.almuerzo ? '✓' : '-'}</text>
      <line x1="685" y1="${y}" x2="685" y2="${y + rowHeight}" stroke="#cbd5e1" stroke-width="0.8"/>
      <text x="697" y="${y + 22}" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="bold" fill="${p.refTarde ? '#1e3a8a' : '#94a3b8'}" text-anchor="middle">${p.refTarde ? '✓' : '-'}</text>
      <line x1="710" y1="${y}" x2="710" y2="${y + rowHeight}" stroke="#cbd5e1" stroke-width="0.8"/>
      <text x="722" y="${y + 22}" font-family="monospace" font-size="10" fill="${p.cena ? '#1e3a8a' : '#94a3b8'}" font-weight="${p.cena ? 'bold' : 'normal'}" text-anchor="middle">${p.cena ? '✓' : '-'}</text>
      <line x1="735" y1="${y}" x2="735" y2="${y + rowHeight}" stroke="#cbd5e1" stroke-width="0.8"/>
      <!-- Trazo de Firma Manuscrita -->
      <path d="${pathFirma}" fill="none" stroke="${tinta}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/>
    `;
  });

  const totalHeight = startY + rows.length * rowHeight + 140;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 ${totalHeight}" width="820" height="auto" class="select-none block font-sans" style="background:#fcfbfa; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25);">
      <!-- Fondo de papel escaneado con textura suave -->
      <rect width="900" height="${totalHeight}" fill="#fdfcf9"/>
      
      <!-- Borde decorativo de hoja física -->
      <rect x="15" y="15" width="870" height="${totalHeight - 30}" fill="none" stroke="#e2e8f0" stroke-width="1"/>
      
      <!-- Cabecera Institucional Oficial CIES -->
      <rect x="25" y="25" width="850" height="70" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
      <line x1="25" y1="28" x2="875" y2="28" stroke="#003366" stroke-width="5"/>
      
      <text x="45" y="52" font-family="'Segoe UI', Arial, sans-serif" font-weight="900" font-size="15" fill="#003366">CIES SALUD SEXUAL Y REPRODUCTIVA</text>
      <text x="45" y="66" font-family="'Segoe UI', Arial, sans-serif" font-weight="600" font-size="9" fill="#475569">SISTEMA DE GESTIÓN DE LA CALIDAD • PROCEDIMIENTO SGC-APOYO-ABS-3</text>
      <text x="45" y="82" font-family="'Segoe UI', Arial, sans-serif" font-weight="800" font-size="11" fill="#0f172a">PLANILLA DE ASISTENCIA DIARIA Y CONTROL DE ALIMENTACIÓN</text>

      <!-- Cuadro de Código Oficial SGC -->
      <rect x="685" y="35" width="180" height="50" rx="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
      <text x="775" y="52" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="9.5" fill="#64748b">CÓDIGO DE REGISTRO</text>
      <text x="775" y="71" text-anchor="middle" font-family="monospace" font-weight="900" font-size="12" fill="#1e3a8a">SGC-Apoyo-ABS-3-pp3</text>

      <!-- Metadatos de la Actividad / Taller -->
      <rect x="25" y="102" width="850" height="72" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      
      <text x="40" y="120" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a">TEMA / TALLER:</text>
      <text x="140" y="120" font-family="'Segoe UI', Arial, sans-serif" font-size="10" font-weight="700" fill="#0f172a">${escapeHtml(tit)}</text>

      <text x="40" y="140" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a">REGIONAL:</text>
      <text x="110" y="140" font-family="monospace" font-size="10" font-weight="bold" fill="#0f172a">${regional}</text>

      <text x="170" y="140" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a">LUGAR:</text>
      <text x="220" y="140" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" fill="#0f172a">${escapeHtml(lugar)}</text>

      <text x="560" y="140" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a">FECHA:</text>
      <text x="610" y="140" font-family="monospace" font-size="10" font-weight="bold" fill="#0f172a">${fecha}</text>

      <text x="700" y="140" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a">AFORO:</text>
      <text x="755" y="140" font-family="monospace" font-size="10" font-weight="bold" fill="#0f172a">${rows.length} Estudiantes</text>

      <text x="40" y="160" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a">FACILITADOR(A):</text>
      <text x="145" y="160" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="700" fill="#0f172a">${escapeHtml(facilitador)}</text>

      <text x="560" y="160" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a">REF. EXPEDIENTE:</text>
      <text x="670" y="160" font-family="monospace" font-size="9.5" font-weight="bold" fill="#047857">CIES EDU. EA / RFS 15/2024</text>

      <!-- Sello CIES con Tinta Húmeda y Rotación Natural -->
      <g transform="translate(800, 138) rotate(-7)">
        <circle cx="0" cy="0" r="38" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-dasharray="4,2" opacity="0.85"/>
        <circle cx="0" cy="0" r="34" fill="none" stroke="#2563eb" stroke-width="1.2" opacity="0.85"/>
        <text x="0" y="-12" font-family="'Segoe UI', Arial, sans-serif" font-size="6.5" font-weight="900" fill="#1d4ed8" text-anchor="middle" opacity="0.9">CIES REPRODUCTIVA</text>
        <text x="0" y="1" font-family="monospace" font-size="8.5" font-weight="900" fill="#1e40af" text-anchor="middle" opacity="0.95">COTEJADO</text>
        <text x="0" y="11" font-family="monospace" font-size="7.5" font-weight="bold" fill="#1e40af" text-anchor="middle" opacity="0.95">05 ABR 2024</text>
        <text x="0" y="20" font-family="'Segoe UI', Arial, sans-serif" font-size="6" font-weight="bold" fill="#1d4ed8" text-anchor="middle" opacity="0.9">COMPONENTE EDUCATIVO</text>
      </g>

      <!-- Encabezados de la Tabla de Asistencia -->
      <rect x="25" y="180" width="850" height="35" fill="#003366" stroke="#003366" stroke-width="1"/>
      <text x="40" y="202" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">N°</text>
      <line x1="55" y1="180" x2="55" y2="215" stroke="#1e40af" stroke-width="1"/>

      <text x="170" y="202" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">NOMBRES Y APELLIDOS</text>
      <line x1="285" y1="180" x2="285" y2="215" stroke="#1e40af" stroke-width="1"/>

      <text x="330" y="202" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">C.I.</text>
      <line x1="375" y1="180" x2="375" y2="215" stroke="#1e40af" stroke-width="1"/>

      <text x="395" y="202" font-family="'Segoe UI', Arial, sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">EDAD</text>
      <line x1="415" y1="180" x2="415" y2="215" stroke="#1e40af" stroke-width="1"/>

      <text x="435" y="202" font-family="'Segoe UI', Arial, sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">SEXO</text>
      <line x1="455" y1="180" x2="455" y2="215" stroke="#1e40af" stroke-width="1"/>

      <text x="545" y="202" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">COMUNIDAD / COLEGIO / INST.</text>
      <line x1="635" y1="180" x2="635" y2="215" stroke="#1e40af" stroke-width="1"/>

      <!-- Subcolumnas Comidas -->
      <text x="647" y="202" font-family="'Segoe UI', Arial, sans-serif" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">RM</text>
      <line x1="660" y1="180" x2="660" y2="215" stroke="#1e40af" stroke-width="1"/>
      <text x="672" y="202" font-family="'Segoe UI', Arial, sans-serif" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">AL</text>
      <line x1="685" y1="180" x2="685" y2="215" stroke="#1e40af" stroke-width="1"/>
      <text x="697" y="202" font-family="'Segoe UI', Arial, sans-serif" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">RT</text>
      <line x1="710" y1="180" x2="710" y2="215" stroke="#1e40af" stroke-width="1"/>
      <text x="722" y="202" font-family="'Segoe UI', Arial, sans-serif" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">CE</text>
      <line x1="735" y1="180" x2="735" y2="215" stroke="#1e40af" stroke-width="1"/>

      <text x="802" y="202" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">FIRMA DEL PARTICIPANTE</text>

      <!-- Filas Dinámicas con Firmas y Cotejo -->
      ${filasSvg}

      <!-- Pie de Planilla: Firmas Institucionales y Sello -->
      <g transform="translate(0, ${startY + rows.length * rowHeight + 20})">
        <rect x="25" y="0" width="850" height="90" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        
        <!-- Firma Facilitador -->
        <g transform="translate(60, 10)">
          <path d="M 30 40 Q 60 10 90 35 T 140 25 Q 180 50 210 25 M 20 48 Q 120 54 220 44" fill="none" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="10" y1="52" x2="230" y2="52" stroke="#334155" stroke-width="1"/>
          <text x="120" y="66" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#0f172a">${escapeHtml(facilitador)}</text>
          <text x="120" y="78" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="8" fill="#64748b">RESPONSABLE COMPONENTE EDUCATIVO</text>
        </g>

        <!-- Sello de Recepción / Coordinación -->
        <g transform="translate(430, 10)">
          <path d="M 20 38 Q 50 15 80 40 T 130 20 Q 160 45 190 28 M 15 48 L 195 46" fill="none" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="10" y1="52" x2="210" y2="52" stroke="#334155" stroke-width="1"/>
          <text x="110" y="66" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#0f172a">Lic. Gloria O. Arauco Lima</text>
          <text x="110" y="78" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="8" fill="#64748b">COORDINADORA COMPONENTE EDUCATIVO CIES</text>
        </g>

        <!-- Certificado de Validación SGC -->
        <g transform="translate(665, 12)">
          <rect x="0" y="0" width="195" height="66" rx="4" fill="#f0fdf4" stroke="#86efac" stroke-width="1.2"/>
          <text x="97" y="18" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="9" font-weight="900" fill="#166534">AUDITORÍA SGC ISO 9001:2015</text>
          <text x="97" y="34" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#15803d">✓ COTEJO CONFORME</text>
          <text x="97" y="48" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="8" fill="#166534">25 Firmas Manuscritas Validadas</text>
          <text x="97" y="58" text-anchor="middle" font-family="monospace" font-size="7" fill="#64748b">ID: SGC-ABS-3-pp3-2024-04</text>
        </g>
      </g>
    </svg>
  `;
}

function generarHtmlPlanillaFisicaParaImprimir(act, taller, nomina) {
  const tit = (taller && taller.titulo) || act.titulo || "Capacitación con Líderes";
  const fecha = (taller && taller.fecha) || act.fecha || "";
  const lugar = (taller && taller.lugar) || act.unidadEducativa || "Sede CIES";
  const facilitador = (taller && taller.facilitador) || act.responsable || "Lic. Viviana Segales Sumi";
  const regional = act.regional || "EA";

  const rows = (nomina && nomina.length > 0) ? nomina : NOMBRES_EJEMPLO_LIDERES;
  
  let filasHtml = "";
  for (let i = 0; i < Math.max(rows.length, 25); i++) {
    const p = rows[i] || {};
    filasHtml += `
      <tr>
        <td class="text-center font-mono" style="font-size: 8.5pt;">${i + 1}</td>
        <td style="font-size: 9pt;"><strong>${escapeHtml(p.nombre || p.nombres || '')}</strong></td>
        <td class="text-center font-mono" style="font-size: 8.5pt;">${escapeHtml(p.ci || '')}</td>
        <td class="text-center" style="font-size: 8.5pt;">${escapeHtml(String(p.edad || ''))}</td>
        <td class="text-center" style="font-size: 8.5pt;">${escapeHtml((p.genero || '')[0] ? (p.genero[0].toUpperCase()) : '')}</td>
        <td style="font-size: 8.5pt;">${escapeHtml(p.procedencia || p.institucion || '')}</td>
        <td class="text-center font-mono" style="font-size: 8pt;">${escapeHtml(p.celular || p.telefono || '')}</td>
        <td class="text-center" style="width: 20px;"></td>
        <td class="text-center" style="width: 20px;"></td>
        <td class="text-center" style="width: 20px;"></td>
        <td class="text-center" style="width: 20px;"></td>
        <td style="height: 28pt; width: 140px; border-bottom: 1px dashed #64748b;"></td>
      </tr>
    `;
  }

  return `
    <div class="header">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #003366; padding-bottom: 6px; margin-bottom: 10px;">
        <div style="text-align: left;">
          <h1 style="font-size: 13pt; margin: 0; color: #003366; text-transform: uppercase; font-weight: 900;">CIES SALUD SEXUAL Y REPRODUCTIVA</h1>
          <p style="margin: 2px 0 0 0; font-size: 8.5pt; color: #475569;">SISTEMA DE GESTIÓN DE LA CALIDAD • PROCEDIMIENTO SGC-APOYO-ABS-3</p>
          <p style="margin: 2px 0 0 0; font-size: 10pt; font-weight: 800; color: #0f172a;">PLANILLA DE ASISTENCIA DIARIA Y CONTROL DE ALIMENTACIÓN</p>
        </div>
        <div style="border: 1.5px solid #003366; padding: 6px 12px; border-radius: 6px; text-align: center; background: #f8fafc;">
          <span style="font-size: 7.5pt; color: #64748b; font-weight: bold; display: block;">CÓDIGO DE REGISTRO</span>
          <span style="font-size: 11pt; color: #003366; font-family: monospace; font-weight: 900;">SGC-Apoyo-ABS-3-pp3</span>
        </div>
      </div>
    </div>

    <div class="memo-box" style="margin-bottom: 10px; padding: 8px; font-size: 8.5pt;">
      <table style="width: 100%; border: none; margin: 0;">
        <tr style="border: none;">
          <td style="border: none; padding: 2px 6px; width: 60%;">
            <strong>TEMA / ACTIVIDAD:</strong> ${escapeHtml(tit)}
          </td>
          <td style="border: none; padding: 2px 6px;">
            <strong>REGIONAL:</strong> ${escapeHtml(regional)}
          </td>
          <td style="border: none; padding: 2px 6px;">
            <strong>FECHA:</strong> ${escapeHtml(fecha)}
          </td>
        </tr>
        <tr style="border: none;">
          <td style="border: none; padding: 2px 6px;">
            <strong>LUGAR / UNIDAD EDUCATIVA:</strong> ${escapeHtml(lugar)}
          </td>
          <td style="border: none; padding: 2px 6px;" colspan="2">
            <strong>FACILITADOR(A):</strong> ${escapeHtml(facilitador)}
          </td>
        </tr>
      </table>
    </div>

    <table style="font-size: 8.5pt; border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background: #003366; color: white;">
          <th style="padding: 4px; border: 1px solid #003366; text-align: center; width: 25px;">N°</th>
          <th style="padding: 4px; border: 1px solid #003366;">Nombres y Apellidos</th>
          <th style="padding: 4px; border: 1px solid #003366; text-align: center; width: 75px;">C.I.</th>
          <th style="padding: 4px; border: 1px solid #003366; text-align: center; width: 35px;">Edad</th>
          <th style="padding: 4px; border: 1px solid #003366; text-align: center; width: 35px;">Sexo</th>
          <th style="padding: 4px; border: 1px solid #003366;">Colegio / Organización</th>
          <th style="padding: 4px; border: 1px solid #003366; text-align: center; width: 65px;">Teléfono</th>
          <th style="padding: 4px; border: 1px solid #003366; text-align: center; width: 22px;" title="Refrigerio Mañana">RM</th>
          <th style="padding: 4px; border: 1px solid #003366; text-align: center; width: 22px;" title="Almuerzo">AL</th>
          <th style="padding: 4px; border: 1px solid #003366; text-align: center; width: 22px;" title="Refrigerio Tarde">RT</th>
          <th style="padding: 4px; border: 1px solid #003366; text-align: center; width: 22px;" title="Cena">CE</th>
          <th style="padding: 4px; border: 1px solid #003366; text-align: center; width: 140px;">Firma del Participante</th>
        </tr>
      </thead>
      <tbody>
        ${filasHtml}
      </tbody>
    </table>

    <div style="margin-top: 30px; display: flex; justify-content: space-between; text-align: center; font-size: 8.5pt;">
      <div style="width: 30%; border-top: 1px solid #333; padding-top: 5px;">
        <strong>${escapeHtml(facilitador)}</strong><br>
        <span style="color: #64748b;">Firma y Sello Facilitador(a)</span>
      </div>
      <div style="width: 30%; border-top: 1px solid #333; padding-top: 5px;">
        <strong>Responsable Regional CIES</strong><br>
        <span style="color: #64748b;">V°B° Componente Educativo</span>
      </div>
      <div style="width: 30%; border-top: 1px solid #333; padding-top: 5px;">
        <strong>Sello Institucional CIES</strong><br>
        <span style="color: #64748b;">Custodia y Archivo SGC</span>
      </div>
    </div>
  `;
}

function descargarPlanillaFisicaEnBlancoPDF() {
  const db = getDB();
  const act = (db.actividades || []).find(a => a.id === currentWorkspaceActId);
  if (!act) {
    showToast("No se encontró la actividad seleccionada", "error");
    return;
  }
  const talleres = act.talleres || [];
  let taller = talleres.find(t => t.id === currentWorkspaceTallerId) || talleres[0] || {};

  const cleanTit = (act.titulo || "Taller").replace(/[^a-zA-Z0-9]/g, '_');
  const nomina = obtenerNominaTallerParaDigitalizacion(act, taller);

  const html = generarHtmlPlanillaFisicaParaImprimir(act, taller, nomina);
  exportarDocumentoPDF(html, `Planilla_Fisica_Imprimir_${cleanTit}_SGC-Apoyo-ABS-3-pp3.pdf`);
}

function abrirVisorDualDigitalizacion() {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  let taller = talleres.find(t => t.id === currentWorkspaceTallerId) || talleres[0];
  if (!taller) return;

  visorDualZoom = 1.0;
  visorDualFiltro = "";
  const filtroInput = document.getElementById("vd-filtro-participante");
  if (filtroInput) filtroInput.value = "";

  const subtitulo = document.getElementById("vd-subtitulo-taller");
  if (subtitulo) {
    subtitulo.textContent = `${act.regional || 'EA'} • ${taller.titulo || act.titulo} • ${taller.fecha || act.fecha} (${taller.lugar || act.unidadEducativa})`;
  }

  const nombreArchivoEl = document.getElementById("vd-nombre-archivo-hoja");
  const nombreDoc = (taller.documentacion && taller.documentacion.docAsistencia) || taller.docAsistencia || act.documentoGeneral?.archivo || `Planilla_Firmas_${(taller.titulo || 'Taller').slice(0, 15).replace(/\s+/g, '_')}_5_4_24.pdf`;
  if (nombreArchivoEl) nombreArchivoEl.textContent = nombreDoc;

  const nomina = obtenerNominaTallerParaDigitalizacion(act, taller);
  visorDualParticipantes = JSON.parse(JSON.stringify(nomina));

  const canvasWrapper = document.getElementById("vd-hoja-canvas-wrapper");
  if (canvasWrapper) {
    if (visorDualFotoUrl) {
      canvasWrapper.innerHTML = `<img src="${visorDualFotoUrl}" alt="Planilla Escaneada" class="max-w-none shadow-2xl rounded border border-slate-700 block" style="width: 820px; height: auto;">`;
    } else {
      canvasWrapper.innerHTML = generarSvgPlanillaFisicaFirmada(act, taller, visorDualParticipantes);
    }
  }

  actualizarTransformZoomHoja();
  renderListaCotejoVisorDual();
  openModal("modal-visor-dual-digitalizacion");
}

function cerrarVisorDual() {
  closeModal("modal-visor-dual-digitalizacion");
}

function ajustarZoomHojaFisica(delta) {
  visorDualZoom = Math.max(0.5, Math.min(2.5, visorDualZoom + delta));
  actualizarTransformZoomHoja();
}

function resetZoomHojaFisica() {
  visorDualZoom = 1.0;
  actualizarTransformZoomHoja();
}

function actualizarTransformZoomHoja() {
  const wrapper = document.getElementById("vd-hoja-canvas-wrapper");
  const badge = document.getElementById("vd-zoom-porcentaje");
  if (wrapper) {
    wrapper.style.transform = `scale(${visorDualZoom})`;
    wrapper.style.transformOrigin = "top center";
  }
  if (badge) {
    badge.textContent = `${Math.round(visorDualZoom * 100)}%`;
  }
}

function handleSubirFotoHojaFisica(input) {
  if (!input || !input.files || !input.files[0]) return;
  const file = input.files[0];
  const nombreEl = document.getElementById("vd-nombre-archivo-hoja");
  if (nombreEl) nombreEl.textContent = file.name;

  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      visorDualFotoUrl = e.target.result;
      const wrapper = document.getElementById("vd-hoja-canvas-wrapper");
      if (wrapper) {
        wrapper.innerHTML = `<img src="${visorDualFotoUrl}" alt="Planilla Escaneada" class="max-w-none shadow-2xl rounded border border-slate-700 block" style="width: 820px; height: auto;">`;
      }
      showToast("Imagen de planilla física cargada en el visor dual.", "info");
    };
    reader.readAsDataURL(file);
  } else {
    showToast(`Archivo "${file.name}" seleccionado para custodia digital SGC.`, "info");
  }
}

function toggleCheckParticipanteVisorDual(idx) {
  const item = visorDualParticipantes[idx];
  if (!item) return;
  item.verificado = !item.verificado;
  renderListaCotejoVisorDual();
}

function toggleComidaVisorDual(idx, comida) {
  const item = visorDualParticipantes[idx];
  if (!item) return;
  item[comida] = !item[comida];
  renderListaCotejoVisorDual();
}

function toggleSeleccionarTodosVisorDual() {
  const todosVerificados = visorDualParticipantes.length > 0 && visorDualParticipantes.every(p => p.verificado !== false);
  const nuevoEstado = !todosVerificados;
  visorDualParticipantes.forEach(p => p.verificado = nuevoEstado);
  renderListaCotejoVisorDual();
}

function filtrarListaVisorDual(query) {
  visorDualFiltro = (query || "").trim().toLowerCase();
  renderListaCotejoVisorDual();
}

function renderListaCotejoVisorDual() {
  const container = document.getElementById("vd-lista-cotejo-body");
  const badgeConteo = document.getElementById("vd-conteo-cotejados-badge");
  const btnToggleTodos = document.getElementById("vd-btn-toggle-todos");

  if (!container) return;

  const total = visorDualParticipantes.length;
  const cotejados = visorDualParticipantes.filter(p => p.verificado !== false).length;

  if (badgeConteo) {
    badgeConteo.textContent = `${cotejados} de ${total} cotejados`;
  }
  if (btnToggleTodos) {
    btnToggleTodos.textContent = (cotejados === total && total > 0) ? "Desmarcar Todos" : "Marcar Todos";
  }

  const filtrados = visorDualParticipantes.filter(p => {
    if (!visorDualFiltro) return true;
    const term = visorDualFiltro;
    return (
      (p.nombre && p.nombre.toLowerCase().includes(term)) ||
      (p.ci && p.ci.toLowerCase().includes(term)) ||
      (p.procedencia && p.procedencia.toLowerCase().includes(term)) ||
      (p.rol && p.rol.toLowerCase().includes(term))
    );
  });

  if (filtrados.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-slate-400">
        <p class="text-xs font-semibold">No se encontraron participantes que coincidan con "${escapeHtml(visorDualFiltro)}"</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtrados.map((p) => {
    const realIdx = visorDualParticipantes.indexOf(p);
    const isChecked = p.verificado !== false;

    return `
      <div class="p-2.5 rounded-xl border transition-all ${isChecked ? 'bg-indigo-50/40 border-indigo-200' : 'bg-slate-50 border-slate-200 opacity-60'}">
        <div class="flex items-start justify-between gap-2">
          <label class="flex items-start gap-2.5 cursor-pointer flex-1 select-none">
            <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleCheckParticipanteVisorDual(${realIdx})" 
              class="w-4 h-4 mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 cursor-pointer shrink-0">
            <div>
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-extrabold text-xs text-slate-900">${escapeHtml(p.nombre || p.nombres || '')}</span>
                <span class="text-[9px] font-mono font-bold bg-white px-1.5 py-0.2 rounded border border-slate-300 text-slate-700">CI: ${escapeHtml(p.ci || 'Sin CI')}</span>
                <span class="text-[9px] font-mono text-indigo-700 bg-indigo-100 px-1 rounded">Reng. ${p.renglonHoja || (realIdx + 1)}</span>
              </div>
              <p class="text-[10px] text-slate-500 mt-0.5">${escapeHtml(p.rol || 'Participante')} • ${escapeHtml(p.procedencia || 'CIES')}</p>
            </div>
          </label>
          <div class="flex items-center gap-1 shrink-0">
            <button type="button" onclick="toggleComidaVisorDual(${realIdx}, 'refManana')" title="Refrigerio Mañana" 
              class="px-1.5 py-0.5 rounded text-[9px] font-bold border transition-colors cursor-pointer ${p.refManana ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-100'}">
              RM
            </button>
            <button type="button" onclick="toggleComidaVisorDual(${realIdx}, 'almuerzo')" title="Almuerzo" 
              class="px-1.5 py-0.5 rounded text-[9px] font-bold border transition-colors cursor-pointer ${p.almuerzo ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-100'}">
              AL
            </button>
            <button type="button" onclick="toggleComidaVisorDual(${realIdx}, 'refTarde')" title="Refrigerio Tarde" 
              class="px-1.5 py-0.5 rounded text-[9px] font-bold border transition-colors cursor-pointer ${p.refTarde ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-100'}">
              RT
            </button>
            <button type="button" onclick="toggleComidaVisorDual(${realIdx}, 'cena')" title="Cena" 
              class="px-1.5 py-0.5 rounded text-[9px] font-bold border transition-colors cursor-pointer ${p.cena ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-100'}">
              CE
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function agregarParticipanteManualDesdeVisorDual() {
  const nombre = prompt("Ingresa el Nombre y Apellido del participante que firmó en la hoja física:");
  if (!nombre || !nombre.trim()) return;

  const ci = prompt("Ingresa el número de C.I. (con extensión, ej: 7492019 LP):", "");
  const institucion = prompt("Procedencia / Unidad Educativa / Organización:", "Comunidad / Colegio");

  const nuevoId = Date.now() + Math.floor(Math.random() * 1000);
  const nuevo = {
    id: nuevoId,
    nombre: nombre.trim(),
    ci: (ci || "Sin CI").trim(),
    rol: "Participante",
    procedencia: (institucion || "Comunidad").trim(),
    edad: 18,
    genero: "Femenino",
    verificado: true,
    refManana: false,
    almuerzo: false,
    refTarde: true,
    cena: false,
    renglonHoja: visorDualParticipantes.length + 1
  };

  visorDualParticipantes.push(nuevo);
  renderListaCotejoVisorDual();
  showToast(`Participante "${nuevo.nombre}" agregado y marcado como verificado.`, "info");
}

function guardarDigitalizacionVisorDual() {
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  const db = getDB();
  const act = (db.actividades || []).find(a => a.id === currentWorkspaceActId);
  if (!act) return;
  const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  if (!taller) return;

  // 1. Guardar la lista de cotejo en el taller
  taller.asistenciasFisicasCotejadas = JSON.parse(JSON.stringify(visorDualParticipantes));
  const cotejados = taller.asistenciasFisicasCotejadas.filter(p => p.verificado !== false);
  const totalCotejados = cotejados.length;

  if (!taller.ejecucion) taller.ejecucion = {};
  taller.ejecucion.participantesAsistentes = totalCotejados;
  if (!taller.aforo) taller.aforo = taller.participantes || act.participantesCount || 25;
  if (!taller.participantes || taller.participantes < 10) taller.participantes = taller.aforo;

  if (!taller.documentacion) taller.documentacion = {};
  taller.documentacion.docAsistencia = taller.documentacion.docAsistencia || `Planilla_Firmas_Fisicas_${(taller.titulo || 'Taller').slice(0, 15).replace(/\s+/g, '_')}_Cotejada.pdf`;
  taller.documentacion.estadoSGC = "Validado Orientador";
  taller.documentacion.fechaValidacion = new Date().toISOString().split("T")[0];
  taller.documentacion.notasValidacion = `Planilla física manuscrita cotejada mediante Visor Dual SGC (${totalCotejados} de ${visorDualParticipantes.length} participantes verificados con firma manuscrita y alimentación).`;

  // 2. Registrar en el repositorio institucional de digitalización SGC
  if (db.digitalizacion) {
    const nombreDoc = taller.documentacion.docAsistencia;
    const existeDoc = db.digitalizacion.find(d => d.nombre === nombreDoc);
    if (!existeDoc) {
      db.digitalizacion.unshift({
        id: Date.now(),
        nombre: nombreDoc,
        tipo: "Planilla de Asistencia Física (SGC-Apoyo-ABS-3-pp3)",
        peso: "1.4 MB",
        subidoPor: taller.facilitador || act.responsable || "Orientador de Campo",
        fecha: new Date().toISOString().split("T")[0],
        modulo: "Visor Dual Digitalización",
        estadoValidacion: "Validado Orientador",
        validadoPor: taller.facilitador || act.responsable || "Lic. Viviana Segales Sumi",
        fechaValidacion: new Date().toISOString().split("T")[0],
        observacionValidacion: `Planilla física de firmas manuscritas cotejada y digitalizada vía Visor Dual (${totalCotejados} firmas validadas)`
      });
    } else {
      existeDoc.estadoValidacion = "Validado Orientador";
      existeDoc.validadoPor = taller.facilitador || act.responsable || "Lic. Viviana Segales Sumi";
      existeDoc.fechaValidacion = new Date().toISOString().split("T")[0];
      existeDoc.observacionValidacion = `Planilla física actualizada vía Visor Dual (${totalCotejados} firmas validadas)`;
    }
  }

  saveDB(db);
  cerrarVisorDual();
  renderModoDualResumen();
  if (typeof renderFaseDocumentacion === "function") renderFaseDocumentacion();
  if (typeof renderSidebarActividad === "function") renderSidebarActividad(act);
  if (typeof renderActividades === "function") renderActividades();

  showToast(`¡Planilla física digitalizada con éxito! ${totalCotejados} firmas verificadas y archivadas en el SGC.`, "success");
}


// -------------------------------------------------------------
// FASE 3: DOCUMENTACIÓN, RENDICIÓN DE CUENTAS & SGC (POR TALLER)
// -------------------------------------------------------------
function renderFaseDocumentacion() {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  let taller = talleres.find(t => t.id === currentWorkspaceTallerId);
  if (!taller) {
    taller = talleres[0];
    if (taller) currentWorkspaceTallerId = taller.id;
  }
  if (!taller) return;

  const doc = taller.documentacion || {};

  // 3.1 Planilla física en PDF
  const archAsist = document.getElementById("ws-doc-archivo-asistencia");
  if (archAsist) {
    archAsist.textContent = doc.docAsistencia || taller.docAsistencia || `Planilla_Firmas_Taller_${taller.id}.pdf`;
  }

  // 3.2 Rendición de Cuentas cotejada vs Presupuesto Aprobado
  const tPres = taller.presupuestoDetalle ? (parseFloat(taller.presupuestoDetalle.total) || 0) : (parseFloat(taller.presupuesto) || 0);
  const dispPresAprobado = document.getElementById("ws-doc-presupuesto-aprobado");
  if (dispPresAprobado) {
    dispPresAprobado.textContent = `Bs. ${tPres.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  const descargos = doc.descargosGastos || [];
  const tbody = document.getElementById("ws-doc-gastos-tbody");
  if (tbody) {
    if (descargos.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" class="text-center py-5 text-slate-400">
            <p class="font-medium text-xs text-slate-600 mb-0.5">No se han registrado comprobantes de descargo para este taller.</p>
            <p class="text-[11px] text-slate-400">Utiliza el formulario de abajo para rendir facturas o recibos cotejados con el presupuesto aprobado (Bs. ${tPres.toFixed(2)}).</p>
          </td>
        </tr>
      `;
    } else {
      const sumRendido = descargos.reduce((s, g) => s + (parseFloat(g.monto) || 0), 0);
      const rowsHtml = descargos.map((g, idx) => `
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="py-2.5 px-3 font-semibold text-slate-800">${escapeHtml(g.concepto || '')}</td>
          <td class="py-2.5 px-3">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
              ${escapeHtml(g.partida || 'General')}
            </span>
          </td>
          <td class="py-2.5 px-3 font-mono font-bold text-right text-emerald-800">
            Bs. ${(parseFloat(g.monto) || 0).toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </td>
          <td class="py-2.5 px-3 text-slate-600 text-xs font-mono">${escapeHtml(g.comprobante || 'Recibo Oficial')}</td>
          <td class="py-2.5 px-2 text-center">
            <button type="button" onclick="eliminarDescargoGastoDoc(${idx})" class="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Eliminar descargo">
              &times;
            </button>
          </td>
        </tr>
      `).join("");

      const footerHtml = `
        <tr class="bg-emerald-50/80 font-bold border-t-2 border-emerald-300">
          <td colspan="2" class="py-2.5 px-3 text-right uppercase tracking-wider text-emerald-950 font-extrabold text-xs">
            TOTAL RENDIDO:
          </td>
          <td class="py-2.5 px-3 font-mono font-black text-right text-emerald-900 text-xs">
            Bs. ${sumRendido.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </td>
          <td colspan="2" class="py-2.5 px-3 text-left text-[11px] ${sumRendido <= tPres ? 'text-emerald-700 font-semibold' : 'text-rose-700 font-bold'}">
            ${sumRendido <= tPres ? `✓ Dentro del presupuesto (Saldo: Bs. ${(tPres - sumRendido).toFixed(2)})` : `⚠️ Excede en Bs. ${(sumRendido - tPres).toFixed(2)}`}
          </td>
        </tr>
      `;

      tbody.innerHTML = rowsHtml + footerHtml;
    }
  }

  // 3.3 Fotos de evidencia
  const fotosContainer = document.getElementById("ws-doc-fotos-container");
  if (fotosContainer) {
    const fotos = doc.fotos || ["Dinamica_Aula.jpg", "Grupo_Participantes.jpg"];
    fotosContainer.innerHTML = fotos.map(f => `
      <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
        <span class="text-2xl">📸</span>
        <p class="text-[10px] font-bold text-slate-700 truncate">${escapeHtml(f)}</p>
        <span class="text-[9px] text-emerald-600 font-semibold">✓ Verificada</span>
      </div>
    `).join("");
  }

  // 3.4 Visto Bueno y Validación SGC
  const estadoSel = document.getElementById("ws-doc-sgc-estado");
  const validadorIn = document.getElementById("ws-doc-sgc-validador");
  const notaIn = document.getElementById("ws-doc-sgc-nota");
  const badgeSGC = document.getElementById("ws-doc-sgc-badge");

  const est = doc.estadoSGC || "Validado Orientador";
  if (estadoSel) estadoSel.value = est;
  if (validadorIn) validadorIn.value = doc.validador || "Lic. Miriam Morales (Orientador/a SSSR)";
  if (notaIn) notaIn.value = doc.notasValidacion || "Planilla física firmada por los participantes cotejada con la lista de pre-registro y recibos de descargo archivados.";

  if (badgeSGC) {
    badgeSGC.textContent = est;
    if (est.includes("Validado") || est.includes("Aprobado")) {
      badgeSGC.className = "px-3 py-1 rounded-lg text-xs font-black bg-teal-600 text-white shadow-2xs";
    } else if (est.includes("Observado")) {
      badgeSGC.className = "px-3 py-1 rounded-lg text-xs font-black bg-rose-600 text-white shadow-2xs";
    } else {
      badgeSGC.className = "px-3 py-1 rounded-lg text-xs font-black bg-amber-600 text-white shadow-2xs";
    }
  }
}

function agregarDescargoGastoDoc(e) {
  e.preventDefault();
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;

  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  if (!taller) return;

  const concepto = document.getElementById("ws-descargo-concepto")?.value.trim() || "";
  const partida = document.getElementById("ws-descargo-partida")?.value || "Alimentación y Refrigerios";
  const monto = parseFloat(document.getElementById("ws-descargo-monto")?.value) || 0;

  if (!concepto || monto <= 0) {
    showToast("Por favor complete el concepto y un monto válido", "warning");
    return;
  }

  if (!taller.documentacion) taller.documentacion = {};
  if (!taller.documentacion.descargosGastos) taller.documentacion.descargosGastos = [];

  taller.documentacion.descargosGastos.push({
    id: Date.now(),
    concepto,
    partida,
    monto,
    comprobante: `Recibo N° ${Math.floor(Math.random() * 800) + 100} - CIES SGC`
  });

  saveDB(db);
  document.getElementById("ws-form-agregar-descargo")?.reset();
  showToast(`Descargo de Bs. ${monto.toFixed(2)} registrado para ${concepto}`, "success");
  renderFaseDocumentacion();
}

function eliminarDescargoGastoDoc(idx) {
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  if (!taller || !taller.documentacion || !taller.documentacion.descargosGastos) return;

  taller.documentacion.descargosGastos.splice(idx, 1);
  saveDB(db);
  showToast("Descargo eliminado", "info");
  renderFaseDocumentacion();
}

function handleWsDocAsistenciaChange(input) {
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;
  if (input && input.files && input.files.length > 0) {
    const file = input.files[0];
    const db = getDB();
    const act = db.actividades.find(a => a.id === currentWorkspaceActId);
    if (!act) return;

    const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
    if (!taller) return;

    if (!taller.documentacion) taller.documentacion = {};
    taller.documentacion.docAsistencia = file.name;
    taller.docAsistencia = file.name;
    saveDB(db);

    const archAsist = document.getElementById("ws-doc-archivo-asistencia");
    if (archAsist) archAsist.textContent = file.name;

    showToast(`Planilla de firmas "${file.name}" vinculada al taller`, "success");
  }
}

function guardarFaseDocumentacion(e) {
  e.preventDefault();
  if (!currentWorkspaceActId || !currentWorkspaceTallerId) return;

  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const taller = (act.talleres || []).find(t => t.id === currentWorkspaceTallerId);
  if (!taller) return;

  if (!taller.documentacion) taller.documentacion = {};
  taller.documentacion.estadoSGC = document.getElementById("ws-doc-sgc-estado")?.value || "Validado Orientador";
  taller.documentacion.validador = document.getElementById("ws-doc-sgc-validador")?.value.trim() || "";
  taller.documentacion.notasValidacion = document.getElementById("ws-doc-sgc-nota")?.value.trim() || "";
  taller.documentacion.fechaValidacion = new Date().toISOString().split("T")[0];

  saveDB(db);
  renderFaseDocumentacion();
  renderSidebarActividad(act);
  showToast("¡Dictamen y documentación SGC del taller guardados con éxito!", "success");
}

// -------------------------------------------------------------
// VISIÓN GENERAL DEL PROCESO FORMATIVO (33 HORAS PEDAGÓGICAS)
// -------------------------------------------------------------
function renderProcesoResumen() {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  // 1. Documento Curricular General de Respaldo
  const docTitEl = document.getElementById("ws-proc-doc-titulo");
  const docInfo = document.getElementById("ws-proc-doc-archivo-info");
  const docArchHidden = document.getElementById("ws-proc-doc-archivo-nombre");

  const archNombre = (act.documentoGeneral && act.documentoGeneral.archivo) ? act.documentoGeneral.archivo : "planificador Lideres 5_4_24.docx";
  if (docTitEl) docTitEl.value = (act.documentoGeneral && act.documentoGeneral.titulo) ? act.documentoGeneral.titulo : "Plan Curricular y Metodológico CIES (33 Horas)";
  if (docArchHidden) docArchHidden.value = archNombre;
  if (docInfo) {
    docInfo.innerHTML = `<span class="text-indigo-700 font-bold">📄 ${escapeHtml(archNombre)}</span>`;
  }

  // 2. Horas pedagógicas acumuladas
  const talleres = act.talleres || [];
  const horasAcumuladas = talleres.reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);
  act.totalHoras = horasAcumuladas;
  const pct = Math.min(Math.round((horasAcumuladas / 33) * 100), 100);

  const badgeProg = document.getElementById("ws-det-proc-badge-progreso");
  const msgProg = document.getElementById("ws-det-proc-progreso-mensaje");
  const txtProg = document.getElementById("ws-det-proc-progreso-texto");
  const barraProg = document.getElementById("ws-det-proc-progreso-barra");
  const countEl = document.getElementById("ws-det-proc-conteo-talleres");

  if (badgeProg) {
    if (horasAcumuladas >= 33) {
      badgeProg.className = "px-3 py-1 rounded-lg text-xs font-black bg-emerald-600 text-white shadow-2xs";
      badgeProg.textContent = "✓ 33 hrs Cumplidas";
    } else {
      badgeProg.className = "px-3 py-1 rounded-lg text-xs font-black bg-indigo-600 text-white shadow-2xs";
      badgeProg.textContent = `${horasAcumuladas} / 33 hrs`;
    }
  }

  if (msgProg) {
    if (horasAcumuladas >= 33) {
      msgProg.innerHTML = `<span class="text-emerald-700 font-bold">¡Meta horaria cumplida (33 hrs)! Este proceso formativo está formalmente habilitado para el Post-Test y la acreditación oficial CIES.</span>`;
    } else {
      const faltan = 33 - horasAcumuladas;
      msgProg.textContent = `Restan ${faltan} horas pedagógicas para completar el proceso de 33 horas. Cada taller suma sus horas y presupuesto de manera autónoma.`;
    }
  }

  if (txtProg) txtProg.textContent = `${horasAcumuladas} / 33 hrs (${pct}%)`;
  if (barraProg) {
    barraProg.style.width = `${pct}%`;
    barraProg.className = horasAcumuladas >= 33
      ? "bg-emerald-500 h-full rounded-full transition-all duration-300"
      : "bg-indigo-600 h-full rounded-full transition-all duration-300";
  }

  if (countEl) countEl.textContent = `${talleres.length} taller${talleres.length === 1 ? '' : 'es'} registrado${talleres.length === 1 ? '' : 's'}`;

  // 3. Presupuesto Consolidado del Proceso (Suma de cada taller)
  const totalPresupuestoCalculado = talleres.reduce((sum, t) => {
    if (t.presupuestoDetalle && t.presupuestoDetalle.total !== undefined) return sum + parseFloat(t.presupuestoDetalle.total);
    if (t.presupuesto !== undefined) return sum + (parseFloat(t.presupuesto) || 0);
    return sum;
  }, 0);
  act.totalPresupuesto = totalPresupuestoCalculado;

  const displayTotalPres = document.getElementById("ws-proc-total-presupuesto");
  if (displayTotalPres) {
    displayTotalPres.textContent = `Bs. ${totalPresupuestoCalculado.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  // 4. Tabla de Talleres con acceso directo a sus 3 Fases
  const tbody = document.getElementById("ws-det-proc-tabla-talleres");
  if (!tbody) return;

  if (talleres.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center py-6 text-slate-400">
          <p class="font-medium text-xs text-slate-600 mb-1">No se han registrado talleres para este proceso todavía.</p>
          <p class="text-[11px] text-slate-400 mb-2">Pulsa <strong>"+ Registrar Nuevo Taller (3 Fases)"</strong> para añadir una sesión formativa con su planificación y presupuesto oficial.</p>
          <button type="button" onclick="agregarNuevoTallerDesdeWorkspace()" class="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-2xs cursor-pointer">
            + Registrar Primer Taller
          </button>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = talleres.map((t, idx) => {
    const tPres = (t.presupuestoDetalle && t.presupuestoDetalle.total !== undefined)
      ? parseFloat(t.presupuestoDetalle.total)
      : (parseFloat(t.presupuesto) || 0);

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 font-bold text-slate-400 text-xs text-center">${idx + 1}</td>
        <td class="py-2.5 px-3 font-medium text-slate-800">
          <div class="font-bold text-slate-900">${escapeHtml(t.titulo)}</div>
          <div class="text-[10px] text-slate-400 font-normal mt-0.5 flex items-center gap-2">
            <span>📍 ${escapeHtml(t.lugar || act.unidadEducativa || '-')}</span>
            <span>• Modalidad: <strong class="text-slate-600">${escapeHtml(t.modalidad || 'Presencial Abierto')}</strong></span>
          </div>
        </td>
        <td class="py-2.5 px-3 text-slate-600 font-mono text-[11px] whitespace-nowrap">${t.fecha || '-'}</td>
        <td class="py-2.5 px-3 text-center font-extrabold text-indigo-700 whitespace-nowrap">${t.horas} hrs</td>
        <td class="py-2.5 px-3 text-slate-700 whitespace-nowrap text-xs font-medium">${escapeHtml(t.facilitador || '-')}</td>
        <td class="py-2.5 px-3 text-right whitespace-nowrap font-mono font-bold text-emerald-800">
          <span class="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
            Bs. ${tPres.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </td>
        <td class="py-2.5 px-3">
          <div class="flex items-center gap-1.5 flex-wrap">
            <button type="button" onclick="irAFaseTaller(${t.id}, 'planificacion')" class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 shadow-2xs cursor-pointer transition-colors" title="Ver Planificación y Presupuesto">
              1. Planificación
            </button>
            <button type="button" onclick="irAFaseTaller(${t.id}, 'ejecucion')" class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200 shadow-2xs cursor-pointer transition-colors" title="Ver Ejecución en Terreno">
              2. Ejecución
            </button>
            <button type="button" onclick="irAFaseTaller(${t.id}, 'documentacion')" class="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200 shadow-2xs cursor-pointer transition-colors" title="Ver Documentación y SGC">
              3. Documentación
            </button>
          </div>
        </td>
        <td class="py-2.5 px-2 text-right whitespace-nowrap">
          <button onclick="eliminarTallerProcesoDesdeWs(${t.id})" class="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Eliminar taller de este proceso">
            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

// -------------------------------------------------------------
// CONTROLADOR DEL PLANIFICADOR OFICIAL CIES (FORMATO LÍDERES 5_4_24)
// ACCESO DIRECTO PARA NUEVO PROCESO O AÑADIR A PROCESO EXISTENTE
// -------------------------------------------------------------
let destinoPlanificadorActual = 'nuevo';
let cronogramaNuevoPlanificadorTemp = [];

function openModalNuevoPlanificadorOficial(defaultActId = null) {
  const modal = document.getElementById("modal-nuevo-planificador-oficial");
  const form = document.getElementById("form-nuevo-planificador-oficial");
  if (!modal || !form) return;

  form.reset();

  const user = getCurrentUser();
  const today = new Date().toISOString().split("T")[0];
  const userRegional = (user && (user.regional || user.sede)) ? (user.regional || user.sede) : "EA";
  const userNombre = user ? user.nombre : "Lic. Viviana Segales Sumi";

  // Fecha por defecto
  const inputFecha = document.getElementById("np-taller-fecha");
  if (inputFecha) inputFecha.value = today;

  // Facilitador por defecto
  const inputFac = document.getElementById("np-taller-facilitador");
  if (inputFac) inputFac.value = userNombre;

  // Sede regional de nuevo proceso
  const selectReg = document.getElementById("np-proc-regional");
  if (selectReg) selectReg.value = userRegional;

  // Llenar selector de procesos existentes
  const db = getDB();
  const procesos = (db.actividades || []).filter(a => a.esProcesoEducativo || (a.talleres && a.talleres.length > 0));

  const selProc = document.getElementById("np-proc-existente-id");
  if (selProc) {
    if (procesos.length === 0) {
      selProc.innerHTML = `<option value="">(No hay procesos creados aún - selecciona Crear en un Nuevo Proceso)</option>`;
    } else {
      selProc.innerHTML = procesos.map(p => {
        const h = p.totalHoras || (p.talleres ? p.talleres.reduce((s,t) => s + (parseFloat(t.horas)||0), 0) : 0);
        const tCount = p.talleres ? p.talleres.length : 0;
        return `<option value="${p.id}">[ACT-${String(p.id).slice(-3)}] ${escapeHtml(p.titulo)} (${h}/33h • ${tCount} taller${tCount===1?'':'es'} • ${p.regional || 'EA'})</option>`;
      }).join("");
    }
  }

  // Cronograma oficial modelo Líderes 5_4_24
  cronogramaNuevoPlanificadorTemp = [
    { hora: "15:00 - 15:15", tema: "Inscripción", contenido: "Los participantes se registrarán en la planilla de asistencia oficial", tecnica: "Registro", recursos: "Planilla de Asistencia", responsable: userNombre },
    { hora: "15:15 - 15:45", tema: "Actividad energizante", contenido: "Dinámica grupal introductoria de integración y confianza entre pares", tecnica: "“Florencia”", recursos: "Ninguno", responsable: userNombre },
    { hora: "15:45 - 16:45", tema: "TOMA DE DECISIONES", contenido: "Dividir en cuatro grupos: Guerreros, Cazadores, Sabios, Agricultores en simulación de isla desierta y alianza para viaje por mar.", tecnica: "“Salvando la vida”", recursos: "Papel tamaño oficio, marcadores delgados, bolígrafo", responsable: userNombre },
    { hora: "16:45 - 17:45", tema: "PLAN DE VIDA", contenido: "Distribución de matriz de proyección hacia el 2030, facilitación guiada y reflexión sobre metas personales y proyecto de vida.", tecnica: "“El año 2030”", recursos: "Papelógrafos, marcadores gruesos, hojas tamaño oficio", responsable: userNombre },
    { hora: "17:45 - 18:00", tema: "Cierre", contenido: "Conclusiones, acuerdos conjuntos y evaluación participativa.", tecnica: "Lluvia de ideas", recursos: "Tarjetas de cartulina", responsable: userNombre }
  ];
  renderCronogramaNuevoPlanificador();

  // Partidas presupuestarias por defecto (Formato Líderes: 325 refrigerios + 386.90 pasajes = 711.90)
  const presSal = document.getElementById("np-pres-salon");
  const presAlim = document.getElementById("np-pres-alimentacion");
  const presPas = document.getElementById("np-pres-pasajes");
  const presViat = document.getElementById("np-pres-viaticos");
  const presMat = document.getElementById("np-pres-materiales");
  const presOtr = document.getElementById("np-pres-otros");

  if (presSal) presSal.value = "0.00";
  if (presAlim) presAlim.value = "325.00";
  if (presPas) presPas.value = "386.90";
  if (presViat) presViat.value = "0.00";
  if (presMat) presMat.value = "0.00";
  if (presOtr) presOtr.value = "0.00";
  recalcularPresupuestoNuevoPlanificador();

  // Actualizar memorándum con regional
  actualizarRegionalPlanificador(userRegional);

  // Decidir destino inicial
  if (defaultActId && procesos.some(p => p.id === parseInt(defaultActId))) {
    if (selProc) selProc.value = defaultActId;
    seleccionarDestinoPlanificador('existente');
    handleSelectProcesoExistente(defaultActId);
  } else if (procesos.length > 0 && defaultActId) {
    seleccionarDestinoPlanificador('existente');
    handleSelectProcesoExistente(selProc.value);
  } else {
    seleccionarDestinoPlanificador('nuevo');
  }

  modal.classList.remove("hidden");
}

function seleccionarDestinoPlanificador(tipo) {
  destinoPlanificadorActual = tipo;

  const cardNuevo = document.getElementById("card-destino-nuevo");
  const cardExistente = document.getElementById("card-destino-existente");
  const radioNuevo = document.getElementById("radio-destino-nuevo");
  const radioExistente = document.getElementById("radio-destino-existente");
  const secNuevo = document.getElementById("seccion-campos-nuevo-proceso");
  const secExistente = document.getElementById("seccion-campos-proceso-existente");
  const inputProcTitulo = document.getElementById("np-proc-titulo");
  const inputProcUe = document.getElementById("np-proc-ue");

  const db = getDB();
  const procesos = (db.actividades || []).filter(a => a.esProcesoEducativo || (a.talleres && a.talleres.length > 0));

  if (tipo === 'existente') {
    if (procesos.length === 0) {
      showToast("No existen procesos educativos creados aún. Debes crear primero un nuevo proceso.", "warning");
      seleccionarDestinoPlanificador('nuevo');
      return;
    }

    if (radioExistente) radioExistente.checked = true;
    if (radioNuevo) radioNuevo.checked = false;

    if (cardExistente) cardExistente.className = "p-3.5 rounded-xl border-2 border-blue-500 bg-blue-50/70 flex items-start gap-3 cursor-pointer shadow-2xs transition-all";
    if (cardNuevo) cardNuevo.className = "p-3.5 rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-50 flex items-start gap-3 cursor-pointer shadow-2xs transition-all";

    if (secNuevo) secNuevo.classList.add("hidden");
    if (secExistente) secExistente.classList.remove("hidden");

    if (inputProcTitulo) inputProcTitulo.removeAttribute("required");
    if (inputProcUe) inputProcUe.removeAttribute("required");

    const selProc = document.getElementById("np-proc-existente-id");
    if (selProc && selProc.value) {
      handleSelectProcesoExistente(selProc.value);
    }
  } else {
    // tipo === 'nuevo'
    if (radioNuevo) radioNuevo.checked = true;
    if (radioExistente) radioExistente.checked = false;

    if (cardNuevo) cardNuevo.className = "p-3.5 rounded-xl border-2 border-blue-500 bg-blue-50/70 flex items-start gap-3 cursor-pointer shadow-2xs transition-all";
    if (cardExistente) cardExistente.className = "p-3.5 rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-50 flex items-start gap-3 cursor-pointer shadow-2xs transition-all";

    if (secNuevo) secNuevo.classList.remove("hidden");
    if (secExistente) secExistente.classList.add("hidden");

    if (inputProcTitulo) {
      inputProcTitulo.setAttribute("required", "required");
      if (!inputProcTitulo.value) {
        inputProcTitulo.value = "Capacitación con Líderes Juveniles: Toma de Decisiones y Plan de Vida";
      }
    }
    if (inputProcUe) {
      inputProcUe.setAttribute("required", "required");
      if (!inputProcUe.value) {
        inputProcUe.value = "CIES El Alto - Rincón Juvenil";
      }
    }

    const inputTallerTit = document.getElementById("np-taller-titulo");
    if (inputTallerTit && (!inputTallerTit.value || inputTallerTit.value.startsWith("Taller "))) {
      inputTallerTit.value = "Taller 1: Capacitación con Líderes Juveniles - Toma de Decisiones y Plan de Vida";
    }

    const inputLugar = document.getElementById("np-taller-lugar");
    if (inputLugar && !inputLugar.value) {
      inputLugar.value = inputProcUe ? inputProcUe.value : "CIES El Alto - Rincón Juvenil";
    }
  }
}

function handleSelectProcesoExistente(procId) {
  if (!procId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === parseInt(procId));
  if (!act) return;

  const talleres = act.talleres || [];
  const totalHoras = act.totalHoras || talleres.reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);
  const nextNum = talleres.length + 1;

  const titInfo = document.getElementById("np-proc-existente-info-tit");
  const subInfo = document.getElementById("np-proc-existente-info-sub");
  const badgeHoras = document.getElementById("np-proc-existente-badge-horas");

  if (titInfo) titInfo.textContent = `[ACT-${String(act.id).slice(-3)}] ${act.titulo}`;
  if (subInfo) subInfo.textContent = `${talleres.length} taller${talleres.length === 1 ? '' : 'es'} registrado${talleres.length === 1 ? '' : 's'} • Sede: ${act.unidadEducativa || act.regional}`;
  if (badgeHoras) badgeHoras.textContent = `${totalHoras} / 33 hrs`;

  // Autocompletar título del taller sugerido
  const inputTallerTit = document.getElementById("np-taller-titulo");
  if (inputTallerTit) {
    inputTallerTit.value = `Taller ${nextNum}: Fortalecimiento de Habilidades y Prevención en Sexualidad`;
  }

  // Autocompletar lugar y facilitador
  const inputLugar = document.getElementById("np-taller-lugar");
  if (inputLugar) inputLugar.value = act.unidadEducativa || `Sede CIES ${act.regional}`;

  const inputFac = document.getElementById("np-taller-facilitador");
  if (inputFac && !inputFac.value) inputFac.value = act.responsable || "Facilitador/a CIES";

  // Sincronizar regional en el memo
  if (act.regional) actualizarRegionalPlanificador(act.regional);
}

function actualizarRegionalPlanificador(regional) {
  const codeBadge = document.getElementById("np-memo-cod-badge");
  const codeInput = document.getElementById("np-memo-cod");
  const memoA = document.getElementById("np-memo-a");
  const memoDe = document.getElementById("np-memo-de");
  const user = getCurrentUser();
  const facNombre = user ? user.nombre : "Lic. Viviana Segales Sumi";

  const nombresRegionales = {
    LP: "CIES LA PAZ",
    EA: "CIES EL ALTO",
    CBBA: "CIES COCHABAMBA",
    SCZ: "CIES SANTA CRUZ",
    SU: "CIES CHUQUISACA / SUCRE",
    TJA: "CIES TARIJA",
    PTS: "CIES POTOSÍ",
    OR: "CIES ORURO",
    BENI: "CIES BENI",
    Nacional: "OFICINA NACIONAL"
  };

  const regNom = nombresRegionales[regional] || `CIES ${regional}`;
  const codeStr = `CIES EDU. ${regional} / RFS 15/2024`;

  if (codeBadge) codeBadge.textContent = codeStr;
  if (codeInput) codeInput.value = codeStr;
  if (memoA) memoA.value = `Dr. Fernando Álvarez Fuentes - GERENTE REGIONAL ${regNom}`;
  if (memoDe) memoDe.value = `${facNombre} - RESPONSABLE AREA EDUCATIVA ${regNom}`;
}

function renderCronogramaNuevoPlanificador() {
  const tbody = document.getElementById("np-cronograma-tbody");
  if (!tbody) return;

  if (cronogramaNuevoPlanificadorTemp.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-4 text-center text-slate-400">
          Sin filas en el cronograma. Pulsa "+ Añadir Fila" para crear actividades.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = cronogramaNuevoPlanificadorTemp.map((row, idx) => `
    <tr class="hover:bg-slate-50 transition-colors">
      <td class="py-1.5 px-2">
        <input type="text" value="${escapeHtml(row.hora || '')}" placeholder="Hora (15:00)" oninput="cronogramaNuevoPlanificadorTemp[${idx}].hora = this.value" class="w-full text-xs p-1.5 border border-slate-300 rounded font-mono">
      </td>
      <td class="py-1.5 px-2">
        <input type="text" value="${escapeHtml(row.tema || '')}" placeholder="Tema" oninput="cronogramaNuevoPlanificadorTemp[${idx}].tema = this.value" class="w-full text-xs p-1.5 border border-slate-300 rounded font-semibold text-slate-800">
      </td>
      <td class="py-1.5 px-2">
        <input type="text" value="${escapeHtml(row.contenido || '')}" placeholder="Contenido formativo" oninput="cronogramaNuevoPlanificadorTemp[${idx}].contenido = this.value" class="w-full text-xs p-1.5 border border-slate-300 rounded">
      </td>
      <td class="py-1.5 px-2">
        <input type="text" value="${escapeHtml(row.tecnica || '')}" placeholder="Técnica / Dinámica" oninput="cronogramaNuevoPlanificadorTemp[${idx}].tecnica = this.value" class="w-full text-xs p-1.5 border border-slate-300 rounded">
      </td>
      <td class="py-1.5 px-2">
        <input type="text" value="${escapeHtml(row.recursos || '')}" placeholder="Recursos e insumos" oninput="cronogramaNuevoPlanificadorTemp[${idx}].recursos = this.value" class="w-full text-xs p-1.5 border border-slate-300 rounded">
      </td>
      <td class="py-1.5 px-2">
        <input type="text" value="${escapeHtml(row.responsable || '')}" placeholder="Facilitador/a" oninput="cronogramaNuevoPlanificadorTemp[${idx}].responsable = this.value" class="w-full text-xs p-1.5 border border-slate-300 rounded">
      </td>
      <td class="py-1.5 px-2 text-center">
        <button type="button" onclick="eliminarFilaCronogramaNuevoPlanificador(${idx})" class="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition-colors cursor-pointer" title="Eliminar fila">
          <svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </td>
    </tr>
  `).join("");
}

function agregarFilaCronogramaNuevoPlanificador() {
  const user = getCurrentUser();
  cronogramaNuevoPlanificadorTemp.push({
    hora: "18:00 - 18:30",
    tema: "Nuevo Módulo / Tema",
    contenido: "Contenido didáctico y conceptual a desarrollar en sesión",
    tecnica: "Dinámica participativa",
    recursos: "Hojas, marcadores, papelógrafos",
    responsable: user ? user.nombre : "Facilitador/a CIES"
  });
  renderCronogramaNuevoPlanificador();
}

function eliminarFilaCronogramaNuevoPlanificador(idx) {
  cronogramaNuevoPlanificadorTemp.splice(idx, 1);
  renderCronogramaNuevoPlanificador();
}

function recalcularPresupuestoNuevoPlanificador() {
  const salon = parseFloat(document.getElementById("np-pres-salon")?.value) || 0;
  const alimentacion = parseFloat(document.getElementById("np-pres-alimentacion")?.value) || 0;
  const pasajes = parseFloat(document.getElementById("np-pres-pasajes")?.value) || 0;
  const viaticos = parseFloat(document.getElementById("np-pres-viaticos")?.value) || 0;
  const materiales = parseFloat(document.getElementById("np-pres-materiales")?.value) || 0;
  const otros = parseFloat(document.getElementById("np-pres-otros")?.value) || 0;

  const total = salon + alimentacion + pasajes + viaticos + materiales + otros;
  const display = document.getElementById("np-presupuesto-total-display");
  if (display) {
    display.textContent = `Bs. ${total.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return total;
}

function guardarNuevoPlanificadorOficial(event) {
  event.preventDefault();

  const user = getCurrentUser();
  const db = getDB();

  // 1. Datos del Taller
  const tallerTitulo = document.getElementById("np-taller-titulo")?.value.trim() || "Taller Formativo CIES";
  const tallerHoras = parseFloat(document.getElementById("np-taller-horas")?.value) || 3;
  const tallerFecha = document.getElementById("np-taller-fecha")?.value || new Date().toISOString().split("T")[0];
  const tallerModalidad = document.getElementById("np-taller-modalidad")?.value || "Presencial Abierto";
  const tallerParticipantes = parseInt(document.getElementById("np-taller-participantes")?.value) || 25;
  const tallerFacilitador = document.getElementById("np-taller-facilitador")?.value.trim() || (user ? user.nombre : "Facilitador/a CIES");
  const tallerLugar = document.getElementById("np-taller-lugar")?.value.trim() || "Sede CIES";

  // 2. Memorándum Oficial
  const memoA = document.getElementById("np-memo-a")?.value.trim() || "";
  const memoDe = document.getElementById("np-memo-de")?.value.trim() || "";
  const memoVia1 = document.getElementById("np-memo-via1")?.value.trim() || "";
  const memoVia2 = document.getElementById("np-memo-via2")?.value.trim() || "";
  const memoRef = document.getElementById("np-memo-ref")?.value.trim() || "SOLICITUD DE GASTO - CAPACITACION";
  const memoCod = document.getElementById("np-memo-cod")?.value.trim() || "CIES EDU. EA / RFS 15/2024";
  const memoFecha = document.getElementById("np-memo-fecha")?.value.trim() || "";

  // 3. Objetivos y Metodología
  const objGeneral = document.getElementById("np-obj-general")?.value.trim() || "";
  const objEspecificos = document.getElementById("np-obj-especificos")?.value.trim() || "";
  const metodologia = document.getElementById("np-metodologia")?.value.trim() || "";
  const resultados = document.getElementById("np-resultados")?.value.trim() || "";

  // 4. Presupuesto Desglosado
  const presSalon = parseFloat(document.getElementById("np-pres-salon")?.value) || 0;
  const presAlim = parseFloat(document.getElementById("np-pres-alimentacion")?.value) || 0;
  const presPas = parseFloat(document.getElementById("np-pres-pasajes")?.value) || 0;
  const presViat = parseFloat(document.getElementById("np-pres-viaticos")?.value) || 0;
  const presMat = parseFloat(document.getElementById("np-pres-materiales")?.value) || 0;
  const presOtros = parseFloat(document.getElementById("np-pres-otros")?.value) || 0;
  const presTotal = presSalon + presAlim + presPas + presViat + presMat + presOtros;

  // 5. Clon del cronograma
  const cronogramaFinal = cronogramaNuevoPlanificadorTemp.map(r => ({ ...r }));

  const nuevoTallerId = Date.now();

  // Construir objeto Taller completo con sus 3 fases
  const nuevoTaller = {
    id: nuevoTallerId,
    titulo: tallerTitulo,
    fecha: tallerFecha,
    horas: tallerHoras,
    facilitador: tallerFacilitador,
    modalidad: tallerModalidad,
    lugar: tallerLugar,
    docPlanificacion: null,
    documentoAprobado: null,
    enEsperaAprobacion: true,
    docAsistencia: `Planilla_Firmas_${tallerTitulo.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
    observaciones: `Planificación y Solicitud de Gasto oficial ${memoCod}.`,
    presupuestoDetalle: {
      salon: presSalon,
      alimentacion: presAlim,
      pasajes: presPas,
      viaticos: presViat,
      materiales: presMat,
      otros: presOtros,
      total: presTotal
    },
    planificadorOficial: {
      memorandum: {
        a: memoA,
        via1: memoVia1,
        via2: memoVia2,
        de: memoDe,
        ref: memoRef,
        codigoRef: memoCod,
        fecha: memoFecha
      },
      objetivoGeneral: objGeneral,
      objetivosEspecificos: objEspecificos,
      metodologia: metodologia,
      datosGrupo: `Hombres y mujeres adolescentes y jóvenes de ${tallerLugar}`,
      resultadosEsperados: resultados,
      participantes: tallerParticipantes,
      cronograma: cronogramaFinal
    },
    ejecucion: {
      refManana: false,
      almuerzo: presAlim > 0,
      refTarde: presAlim > 0,
      cena: false,
      materialDistribuido: "Planilla de asistencia, cartulinas, marcadores, papelógrafos",
      participantesAsistentes: tallerParticipantes,
      preTestPromedio: 50.0,
      preTestCount: 15
    },
    documentacion: {
      docAsistencia: `Planilla_Firmas_${tallerTitulo.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
      descargosGastos: [
        {
          id: nuevoTallerId + 10,
          concepto: "Refrigerios y alimentación participantes",
          partida: "Alimentación y Refrigerios",
          monto: presAlim > 0 ? presAlim : 0,
          comprobante: "Recibo N° 0492"
        }
      ],
      fotos: [
        { id: nuevoTallerId + 20, archivo: "Registro_Fotografico_Sesion.jpg", estado: "Verificada" }
      ],
      estadoSGC: "Pendiente",
      validador: "Lic. Miriam Morales (Orientador/a SSSR)",
      fechaValidacion: tallerFecha,
      notasValidacion: "Planilla y descargos de gasto pendientes de revisión tras sesión en aula."
    }
  };

  if (destinoPlanificadorActual === 'existente') {
    const selProc = document.getElementById("np-proc-existente-id");
    const procId = selProc ? parseInt(selProc.value) : null;
    const act = (db.actividades || []).find(a => a.id === procId);

    if (!act) {
      showToast("No se encontró el proceso educativo seleccionado", "error");
      return;
    }

    if (!act.talleres) act.talleres = [];
    act.talleres.push(nuevoTaller);

    // Recalcular horas y presupuesto del proceso
    act.totalHoras = act.talleres.reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);
    act.totalPresupuesto = act.talleres.reduce((sum, t) => {
      const p = t.presupuestoDetalle ? t.presupuestoDetalle.total : (t.presupuesto || 0);
      return s + (parseFloat(p) || 0);
    }, 0);

    saveDB(db);
    closeModal("modal-nuevo-planificador-oficial");
    renderActividades();

    showToast(`¡Taller añadido con éxito al proceso "${act.titulo}" con su Planificador Oficial!`, "success");

    // Abrir inmediatamente el Workspace de la actividad en Fase 1: Planificación del nuevo taller
    abrirEspacioTrabajoActividad(act.id, nuevoTaller.id, 'planificacion');

  } else {
    // DESTINO === 'nuevo'
    const procTitulo = document.getElementById("np-proc-titulo")?.value.trim() || "Capacitación con Líderes Juveniles: Toma de Decisiones y Plan de Vida";
    const procCategoria = document.getElementById("np-proc-categoria")?.value || "Planilla de Asistencia y Alimentación (SGC-Apoyo-ABS-3-pp3)";
    const procSubproceso = document.getElementById("np-proc-subproceso")?.value || "Liderazgo Juvenil / Par a Par";
    const procRegional = document.getElementById("np-proc-regional")?.value || "EA";
    const procUe = document.getElementById("np-proc-ue")?.value.trim() || tallerLugar;

    const nuevaActividadId = Date.now();

    const nuevaActividad = {
      id: nuevaActividadId,
      titulo: procTitulo,
      categoriaPlanilla: procCategoria,
      tipo: procSubproceso,
      modalidad: tallerModalidad,
      area: "Urbana",
      regional: procRegional,
      unidadEducativa: procUe,
      fecha: tallerFecha,
      responsable: tallerFacilitador,
      participantesCount: tallerParticipantes,
      materialDistribuido: "Planilla de asistencia, cartulinas, marcadores, papelógrafos",
      refManana: false,
      almuerzo: presAlim > 0,
      refTarde: presAlim > 0,
      cena: false,
      estado: "En Ejecución",
      esProcesoEducativo: true,
      conEjecucionPresupuestaria: true,
      totalPresupuesto: presTotal,
      totalHoras: tallerHoras,
      documentoGeneral: {
        titulo: `Plan Metodológico y Curricular (33 Horas) - ${procTitulo}`,
        archivo: "planificador Lideres 5_4_24.docx"
      },
      talleres: [nuevoTaller],
      gastos: []
    };

    db.actividades.unshift(nuevaActividad);
    saveDB(db);
    closeModal("modal-nuevo-planificador-oficial");
    renderActividades();

    showToast(`¡Proceso Educativo creado con éxito y Taller 1 configurado con su Planificador Oficial!`, "success");

    // Abrir inmediatamente el Workspace de la actividad en Fase 1: Planificación del taller creado
    abrirEspacioTrabajoActividad(nuevaActividad.id, nuevoTaller.id, 'planificacion');
  }
}

function agregarNuevoTallerDesdeWorkspace() {
  if (currentWorkspaceActId) {
    openModalNuevoPlanificadorOficial(currentWorkspaceActId);
    return;
  }
  openModalNuevoPlanificadorOficial();
}

function eliminarTallerProcesoDesdeWs(tallerId) {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const talleres = act.talleres || [];
  if (talleres.length <= 1) {
    showToast("El proceso debe mantener al menos un taller registrado.", "warning");
    return;
  }

  if (!confirm("¿Deseas eliminar este taller del proceso educativo?")) return;

  act.talleres = talleres.filter(t => t.id !== tallerId);
  act.totalHoras = act.talleres.reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);
  act.totalPresupuesto = act.talleres.reduce((sum, t) => sum + (t.presupuestoDetalle ? parseFloat(t.presupuestoDetalle.total || 0) : (parseFloat(t.presupuesto) || 0)), 0);

  saveDB(db);
  showToast("Taller eliminado del proceso", "info");

  if (currentWorkspaceTallerId === tallerId) {
    currentWorkspaceTallerId = act.talleres[0].id;
  }

  if (currentWorkspaceFase === 'proceso_resumen') {
    renderProcesoResumen();
  } else {
    irAFaseTaller(currentWorkspaceTallerId, currentWorkspaceFase);
  }
  renderSidebarActividad(act);
  renderActividades();
}

function handleWsProcesoArchivoChange(input) {
  const infoEl = document.getElementById("ws-proc-doc-archivo-info");
  const nombreHidden = document.getElementById("ws-proc-doc-archivo-nombre");
  if (input && input.files && input.files.length > 0) {
    const file = input.files[0];
    const sizeKb = (file.size / 1024).toFixed(1);
    if (nombreHidden) nombreHidden.value = file.name;
    if (infoEl) {
      infoEl.innerHTML = `<span class="text-indigo-700 font-bold">📄 ${escapeHtml(file.name)} (${sizeKb} KB)</span>`;
    }

    if (currentWorkspaceActId) {
      const db = getDB();
      const act = db.actividades.find(a => a.id === currentWorkspaceActId);
      if (act) {
        if (!act.documentoGeneral) act.documentoGeneral = {};
        act.documentoGeneral.archivo = file.name;
        act.documentoGeneral.titulo = document.getElementById("ws-proc-doc-titulo")?.value.trim() || act.documentoGeneral.titulo;
        saveDB(db);
        showToast("Documento de respaldo curricular vinculado", "success");
      }
    }
  }
}

// -------------------------------------------------------------
// CIERRE DEL PROCESO & POST-TEST (BLOQUEO NORMATIVO DE 33 HORAS)
// -------------------------------------------------------------
function renderProcesoCierre() {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const fullUrl = window.location.href.split('?')[0].split('#')[0];
  const basePath = fullUrl.substring(0, fullUrl.lastIndexOf('/') + 1);
  const linkPre = `${basePath}evaluacion.html?tipo=pre&actId=${act.id}`;
  const linkPost = `${basePath}evaluacion.html?tipo=post&actId=${act.id}`;

  const preLinkInput = document.getElementById("ws-eval-pre-link");
  const postLinkInput = document.getElementById("ws-eval-post-link");
  if (preLinkInput) preLinkInput.value = linkPre;
  if (postLinkInput) postLinkInput.value = linkPost;

  // Bloqueo normativo si < 33 horas
  const talleres = act.talleres || [];
  const horasAcumuladas = talleres.reduce((s, t) => s + (parseFloat(t.horas) || 0), 0);

  const postBox = document.getElementById("ws-eval-post-box");
  const postBadge = document.getElementById("ws-eval-post-badge");
  const postBadgeSub = document.getElementById("ws-eval-post-badge-sub");
  const avisoBloqueo = document.getElementById("ws-eval-post-bloqueo-aviso");
  const avisoBloqueoTxt = document.getElementById("ws-eval-post-bloqueo-txt");
  const btnCopiarPost = document.getElementById("ws-eval-post-btn-copiar");
  const btnAbrirPost = document.getElementById("ws-eval-post-btn-abrir");

  if (horasAcumuladas < 33) {
    if (avisoBloqueo) {
      avisoBloqueo.classList.remove("hidden");
      if (avisoBloqueoTxt) {
        avisoBloqueoTxt.innerHTML = `Este proceso registra <strong>${horasAcumuladas} / 33 horas</strong> (restan ${33 - horasAcumuladas} hrs). Por disposición de la Dirección Educativa CIES, la prueba final de salida (Post-Test) solo se habilitará al completar las 33 horas reglamentarias.`;
      }
    }
    if (postBadge) {
      postBadge.className = "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-500 text-white";
      postBadge.textContent = "🔒 2. Post-Test (Bloqueado hasta 33h)";
    }
    if (postBadgeSub) {
      postBadgeSub.textContent = "Acceso Restringido";
      postBadgeSub.className = "text-[10px] text-amber-700 font-bold font-mono";
    }
    if (btnCopiarPost) {
      btnCopiarPost.disabled = true;
      btnCopiarPost.className = "px-3 py-2 bg-slate-300 text-slate-500 text-xs font-bold rounded-lg cursor-not-allowed shrink-0";
    }
    if (btnAbrirPost) {
      btnAbrirPost.disabled = true;
      btnAbrirPost.className = "px-2.5 py-2 bg-slate-100 border border-slate-300 text-slate-400 text-xs font-bold rounded-lg cursor-not-allowed shrink-0";
    }
  } else {
    if (avisoBloqueo) avisoBloqueo.classList.add("hidden");
    if (postBadge) {
      postBadge.className = "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white";
      postBadge.textContent = "✓ 2. Post-Test de Cierre (Habilitado)";
    }
    if (postBadgeSub) {
      postBadgeSub.textContent = "Página Pública Habilitada";
      postBadgeSub.className = "text-[10px] text-emerald-700 font-semibold font-mono";
    }
    if (btnCopiarPost) {
      btnCopiarPost.disabled = false;
      btnCopiarPost.className = "px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-2xs cursor-pointer shrink-0";
    }
    if (btnAbrirPost) {
      btnAbrirPost.disabled = false;
      btnAbrirPost.className = "px-2.5 py-2 bg-white border border-emerald-300 text-emerald-700 hover:bg-emerald-50 text-xs font-bold rounded-lg cursor-pointer shrink-0";
    }
  }

  // Evaluaciones y métricas
  const evals = (db.evaluacionesPrePost || []).filter(e => e.actividadId === act.id);
  const statPre = document.getElementById("ws-stat-eval-pre");
  const statPost = document.getElementById("ws-stat-eval-post");
  const statDelta = document.getElementById("ws-stat-eval-delta");
  const statSat = document.getElementById("ws-stat-eval-sat");

  if (evals.length === 0) {
    if (statPre) statPre.textContent = "0%";
    if (statPost) statPost.textContent = "0%";
    if (statDelta) statDelta.textContent = "+0%";
    if (statSat) statSat.textContent = "0%";
  } else {
    const avgPre = Math.round(evals.reduce((s, e) => s + (Number(e.preTest) || 0), 0) / evals.length);
    const avgPost = Math.round(evals.reduce((s, e) => s + (Number(e.postTest) || 0), 0) / evals.length);
    const delta = avgPost - avgPre;
    const avgSat = Math.round(evals.reduce((s, e) => s + (Number(e.satisfaccion) || 90), 0) / evals.length);

    if (statPre) statPre.textContent = `${avgPre}%`;
    if (statPost) statPost.textContent = `${avgPost}%`;
    if (statDelta) statDelta.textContent = `${delta >= 0 ? '+' : ''}${delta}%`;
    if (statSat) statSat.textContent = `${avgSat}%`;
  }

  const selectPart = document.getElementById("ws-eval-part-select");
  if (selectPart) {
    selectPart.innerHTML = '<option value="">-- Seleccionar participante para asentar notas --</option>' +
      db.participantes.map(p => `
        <option value="${p.nombres} ${p.apellidos}" data-ci="${p.ci}">${p.nombres} ${p.apellidos} (${p.ci} - ${p.cargoOcupacion || 'Participante'})</option>
      `).join("");
  }

  const tbody = document.getElementById("ws-eval-tabla-body");
  if (!tbody) return;

  if (evals.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-6 text-slate-400">
          <p class="font-medium text-xs text-slate-600 mb-1">Aún no se han registrado evaluaciones para este proceso.</p>
          <p class="text-[11px] text-slate-400 mb-2">Comparte los enlaces digitales con los participantes o asienta notas manualmente.</p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = evals.map(e => {
    const pre = e.preTest !== null && e.preTest !== undefined ? Number(e.preTest) : null;
    const post = e.postTest !== null && e.postTest !== undefined ? Number(e.postTest) : null;
    const diff = (post !== null && pre !== null) ? post - pre : null;
    const aprobado = post !== null ? post >= 70 : false;

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3">
          <p class="font-bold text-slate-800 text-xs">${escapeHtml(e.participanteNombre)}</p>
          <p class="text-[10px] text-slate-400 font-mono">${escapeHtml(e.ci || 'Sin CI')}</p>
        </td>
        <td class="py-2.5 px-3 text-center font-mono font-semibold text-blue-700">
          ${pre !== null ? `${pre}%` : '<span class="text-slate-400 font-normal italic">Sin rendir</span>'}
        </td>
        <td class="py-2.5 px-3 text-center font-mono font-bold text-emerald-700">
          ${post !== null ? `${post}%` : '<span class="text-slate-400 font-normal italic">Sin rendir</span>'}
        </td>
        <td class="py-2.5 px-3 text-center">
          ${diff !== null ? `
            <span class="px-2 py-0.5 rounded-full text-xs font-bold ${diff >= 0 ? 'bg-purple-100 text-purple-800' : 'bg-rose-100 text-rose-800'}">
              ${diff >= 0 ? '+' : ''}${diff}%
            </span>
          ` : '<span class="text-slate-400 text-xs">-</span>'}
        </td>
        <td class="py-2.5 px-3 text-center">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold ${aprobado ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-amber-100 text-amber-800 border border-amber-300'}">
            ${aprobado ? '✓ Aprobado / Culminado' : '⏳ En Refuerzo Pedagógico'}
          </span>
        </td>
        <td class="py-2.5 px-3 text-right">
          <button type="button" onclick="eliminarEvaluacionWs(${e.id})" class="text-rose-600 hover:text-rose-800 font-semibold text-xs hover:underline cursor-pointer">
            Quitar
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function copiarLinkEvaluacionWs(tipo) {
  const inputId = tipo === 'pre' ? "ws-eval-pre-link" : "ws-eval-post-link";
  const input = document.getElementById(inputId);
  if (!input) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(input.value).then(() => {
      showToast(`¡Enlace del ${tipo === 'pre' ? 'Pre-Test' : 'Post-Test'} copiado al portapapeles!`, "success");
    }).catch(() => {
      input.select();
      document.execCommand("copy");
      showToast("¡Enlace copiado!", "success");
    });
  } else {
    input.select();
    document.execCommand("copy");
    showToast("¡Enlace copiado!", "success");
  }
}

function abrirLinkEvaluacionWs(tipo) {
  if (!currentWorkspaceActId) return;
  const fullUrl = window.location.href.split('?')[0].split('#')[0];
  const basePath = fullUrl.substring(0, fullUrl.lastIndexOf('/') + 1);
  const url = `${basePath}evaluacion.html?tipo=${tipo}&actId=${currentWorkspaceActId}`;
  window.open(url, "_blank");
}

function guardarEvaluacionManualWs(e) {
  e.preventDefault();
  if (!currentWorkspaceActId) return;

  const db = getDB();
  const partSelect = document.getElementById("ws-eval-part-select");
  const partNombre = partSelect?.value || "";
  const partCI = partSelect?.options[partSelect.selectedIndex]?.getAttribute("data-ci") || "";
  const pre = parseInt(document.getElementById("ws-eval-input-pre")?.value) || 0;
  const post = parseInt(document.getElementById("ws-eval-input-post")?.value) || 0;

  if (!partNombre) {
    showToast("Por favor selecciona un participante de la nómina", "warning");
    return;
  }

  if (!db.evaluacionesPrePost) db.evaluacionesPrePost = [];

  const existingIdx = db.evaluacionesPrePost.findIndex(ev => ev.actividadId === currentWorkspaceActId && ev.participanteNombre === partNombre);
  const newRow = {
    id: existingIdx !== -1 ? db.evaluacionesPrePost[existingIdx].id : Date.now(),
    actividadId: currentWorkspaceActId,
    participanteNombre: partNombre,
    ci: partCI,
    preTest: pre,
    postTest: post,
    satisfaccion: Math.floor(Math.random() * 10) + 90,
    estado: post >= 70 ? "Culminado" : "En Proceso"
  };

  if (existingIdx !== -1) {
    db.evaluacionesPrePost[existingIdx] = newRow;
    showToast(`Notas actualizadas para ${partNombre}`, "info");
  } else {
    db.evaluacionesPrePost.push(newRow);
    showToast(`Evaluación guardada para ${partNombre} (Δ: ${post - pre >= 0 ? '+' : ''}${post - pre}%)`, "success");
  }

  saveDB(db);
  document.getElementById("ws-eval-input-pre").value = "";
  document.getElementById("ws-eval-input-post").value = "";

  renderProcesoCierre();
  renderActividades();
}

function eliminarEvaluacionWs(evalId) {
  if (!confirm("¿Deseas eliminar este registro de evaluación?")) return;
  const db = getDB();
  db.evaluacionesPrePost = (db.evaluacionesPrePost || []).filter(e => e.id !== evalId);
  saveDB(db);

  showToast("Evaluación eliminada", "warning");
  renderProcesoCierre();
  renderActividades();
}

// Modal Planificador Oficial (5_4_24) para compatibilidad
function abrirModalPlanificadorOficial(actividadId, tallerId) {
  abrirEspacioTrabajoActividad(actividadId, tallerId, 'planificacion');
}

function copiarEnlaceActividadActual() {
  if (!currentWorkspaceActId) return;
  const db = getDB();
  const act = db.actividades.find(a => a.id === currentWorkspaceActId);
  if (!act) return;

  const resumen = `Proceso CIES: ${act.titulo}\nSede: ${act.unidadEducativa} (${act.regional})\nPresupuesto: Bs. ${act.totalPresupuesto || 0}\nHoras: ${act.totalHoras || 0}/33 hrs`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(resumen);
    showToast("Resumen del proceso copiado al portapapeles", "success");
  }
}

// Compatibilidad con funciones previas
function renderWorkspacePaso2() { renderFaseEjecucion(); }
function renderWorkspacePaso3() { renderFaseDocumentacion(); }
function renderWorkspacePaso4() { renderProcesoResumen(); }
function renderWorkspacePaso5() { renderProcesoCierre(); }

// -------------------------------------------------------------
// PANEL 4: ORIENTADORES SSSR (Con Tamizaje Ley 348 y Pruebas VIH)
// -------------------------------------------------------------
function renderOrientadores(search = "") {
  const db = getDB();
  const tbody = document.getElementById("table-orientadores");
  if (!tbody) return;

  const filtered = db.orientadores.filter(o => {
    const txt = `${o.orientador} ${o.participante} ${o.tipoConsulta} ${o.codigoTema}`.toLowerCase();
    return txt.includes(search.toLowerCase());
  });

  tbody.innerHTML = filtered.map(o => `
    <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td class="py-3 px-4 font-medium text-slate-900">${o.orientador}</td>
      <td class="py-3 px-4 text-slate-800">
        <div>${o.participante}</div>
        <div class="text-[11px] text-slate-400">${o.area} • <span class="font-semibold text-slate-600">${o.tipoUsuario}</span></div>
      </td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 font-semibold rounded">${o.codigoTema}</span>
        <span class="text-xs text-slate-700 ml-1">${o.tipoConsulta}</span>
      </td>
      <td class="py-3 px-4 text-xs font-medium text-slate-700">${o.pruebaVIH}</td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 text-[11px] rounded-full font-semibold ${
          o.tamizajeViolencia.includes('Positivo') ? 'bg-rose-100 text-rose-800 animate-pulse' : 'bg-slate-100 text-slate-700'
        }">${o.tamizajeViolencia}</span>
      </td>
      <td class="py-3 px-4 text-slate-500 text-xs">${o.fecha}</td>
      <td class="py-3 px-4 text-right space-x-2">
        <button onclick="editOrientador(${o.id})" class="text-blue-600 hover:text-blue-800 text-xs font-semibold py-1 px-2 rounded hover:bg-blue-50">Editar</button>
        <button onclick="deleteOrientador(${o.id})" class="text-rose-600 hover:text-rose-800 text-xs font-semibold py-1 px-2 rounded hover:bg-rose-50">Eliminar</button>
      </td>
    </tr>
  `).join("");
}

function openModalOrientador(item = null) {
  const modal = document.getElementById("modal-orientador");
  const form = document.getElementById("form-orientador");
  form.reset();

  if (item) {
    document.getElementById("modal-ori-title").innerText = "Editar Sesión de Orientación SSSR";
    document.getElementById("ori-id").value = item.id;
    document.getElementById("ori-orientador").value = item.orientador;
    document.getElementById("ori-participante").value = item.participante;
    document.getElementById("ori-area").value = item.area;
    document.getElementById("ori-usuario-tipo").value = item.tipoUsuario;
    document.getElementById("ori-tema").value = item.codigoTema;
    document.getElementById("ori-vih").value = item.pruebaVIH;
    document.getElementById("ori-violencia").value = item.tamizajeViolencia;
    document.getElementById("ori-modalidad").value = item.modalidad;
    document.getElementById("ori-fecha").value = item.fecha;
    document.getElementById("ori-notas").value = item.notas;
  } else {
    document.getElementById("modal-ori-title").innerText = "Nueva Sesión de Orientación SSSR (SGC-Misional-E-4)";
    document.getElementById("ori-id").value = "";
    document.getElementById("ori-fecha").value = new Date().toISOString().split("T")[0];
  }
  modal.classList.remove("hidden");
}

function saveOrientador(e) {
  e.preventDefault();
  const db = getDB();
  const idVal = document.getElementById("ori-id").value;

  const temaSel = document.getElementById("ori-tema");
  const temaText = temaSel.options[temaSel.selectedIndex].text;

  const item = {
    id: idVal ? parseInt(idVal) : Date.now(),
    orientador: document.getElementById("ori-orientador").value.trim(),
    participante: document.getElementById("ori-participante").value.trim(),
    area: document.getElementById("ori-area").value,
    tipoUsuario: document.getElementById("ori-usuario-tipo").value,
    codigoTema: temaSel.value,
    tipoConsulta: temaText,
    pruebaVIH: document.getElementById("ori-vih").value,
    tamizajeViolencia: document.getElementById("ori-violencia").value,
    modalidad: document.getElementById("ori-modalidad").value,
    fecha: document.getElementById("ori-fecha").value,
    notas: document.getElementById("ori-notas").value.trim()
  };

  if (idVal) {
    const idx = db.orientadores.findIndex(o => o.id === parseInt(idVal));
    if (idx !== -1) db.orientadores[idx] = item;
    showToast("Orientación actualizada", "success");
  } else {
    db.orientadores.unshift(item);
    showToast("Orientación guardada en registro digital", "success");
  }

  saveDB(db);
  closeModal("modal-orientador");
}

function editOrientador(id) {
  const db = getDB();
  const item = db.orientadores.find(o => o.id === id);
  if (item) openModalOrientador(item);
}

function deleteOrientador(id) {
  if (confirm("¿Deseas eliminar este registro de orientación?")) {
    const db = getDB();
    db.orientadores = db.orientadores.filter(o => o.id !== id);
    saveDB(db);
    showToast("Registro eliminado", "warning");
  }
}

// -------------------------------------------------------------
// PANEL 5: INCIDENCIA Y AUDITORÍA SOCIAL
// -------------------------------------------------------------
function renderIncidencia(search = "") {
  const db = getDB();
  const tbody = document.getElementById("table-incidencia");
  if (!tbody) return;

  const filtered = db.incidencia.filter(i => {
    const txt = `${i.estrategia} ${i.lider} ${i.normativa} ${i.ambito}`.toLowerCase();
    return txt.includes(search.toLowerCase());
  });

  tbody.innerHTML = filtered.map(i => `
    <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td class="py-3 px-4 font-medium text-slate-900">${i.estrategia}</td>
      <td class="py-3 px-4 text-slate-700">${i.lider}</td>
      <td class="py-3 px-4"><span class="px-2 py-0.5 text-xs bg-slate-100 text-slate-700 rounded font-medium">${i.ambito}</span></td>
      <td class="py-3 px-4 text-slate-600 text-xs">${i.normativa}</td>
      <td class="py-3 px-4"><span class="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded font-semibold">${i.estado}</span></td>
      <td class="py-3 px-4 text-slate-500 text-xs">${i.fecha}</td>
      <td class="py-3 px-4 text-right space-x-2">
        <button onclick="editIncidencia(${i.id})" class="text-blue-600 hover:text-blue-800 text-xs font-semibold py-1 px-2 rounded hover:bg-blue-50">Editar</button>
        <button onclick="deleteIncidencia(${i.id})" class="text-rose-600 hover:text-rose-800 text-xs font-semibold py-1 px-2 rounded hover:bg-rose-50">Eliminar</button>
      </td>
    </tr>
  `).join("");
}

function openModalIncidencia(item = null) {
  const modal = document.getElementById("modal-incidencia");
  const form = document.getElementById("form-incidencia");
  form.reset();

  if (item) {
    document.getElementById("modal-inc-title").innerText = "Editar Estrategia de Incidencia";
    document.getElementById("inc-id").value = item.id;
    document.getElementById("inc-estrategia").value = item.estrategia;
    document.getElementById("inc-lider").value = item.lider;
    document.getElementById("inc-ambito").value = item.ambito;
    document.getElementById("inc-normativa").value = item.normativa;
    document.getElementById("inc-estado").value = item.estado;
    document.getElementById("inc-fecha").value = item.fecha;
  } else {
    document.getElementById("modal-inc-title").innerText = "Nueva Estrategia / Auditoría Social";
    document.getElementById("inc-id").value = "";
    document.getElementById("inc-fecha").value = new Date().toISOString().split("T")[0];
  }
  modal.classList.remove("hidden");
}

function saveIncidencia(e) {
  e.preventDefault();
  const db = getDB();
  const idVal = document.getElementById("inc-id").value;

  const item = {
    id: idVal ? parseInt(idVal) : Date.now(),
    estrategia: document.getElementById("inc-estrategia").value.trim(),
    lider: document.getElementById("inc-lider").value.trim(),
    ambito: document.getElementById("inc-ambito").value,
    normativa: document.getElementById("inc-normativa").value.trim(),
    estado: document.getElementById("inc-estado").value,
    fecha: document.getElementById("inc-fecha").value
  };

  if (idVal) {
    const idx = db.incidencia.findIndex(i => i.id === parseInt(idVal));
    if (idx !== -1) db.incidencia[idx] = item;
    showToast("Incidencia actualizada", "success");
  } else {
    db.incidencia.unshift(item);
    showToast("Estrategia registrada", "success");
  }

  saveDB(db);
  closeModal("modal-incidencia");
}

function editIncidencia(id) {
  const db = getDB();
  const item = db.incidencia.find(i => i.id === id);
  if (item) openModalIncidencia(item);
}

function deleteIncidencia(id) {
  if (confirm("¿Deseas eliminar este registro de incidencia?")) {
    const db = getDB();
    db.incidencia = db.incidencia.filter(i => i.id !== id);
    saveDB(db);
    showToast("Registro eliminado", "warning");
  }
}

// -------------------------------------------------------------
// PANEL 6: INFORMES OFICIALES
// -------------------------------------------------------------
function renderInformes() {
  const db = getDB();
  const allInfs = db.informes || [];

  // Actualizar métricas KPI de informes
  const kpiTotal = document.getElementById("kpi-inf-total");
  const kpiMensuales = document.getElementById("kpi-inf-mensuales");
  const kpiSemestrales = document.getElementById("kpi-inf-semestrales");
  const kpiAprobados = document.getElementById("kpi-inf-aprobados");

  if (kpiTotal) kpiTotal.innerText = allInfs.length;
  if (kpiMensuales) kpiMensuales.innerText = allInfs.filter(i => (i.periodicidad || "").toLowerCase().includes("mensual") || (i.tipo || "").toLowerCase().includes("mensual")).length;
  if (kpiSemestrales) kpiSemestrales.innerText = allInfs.filter(i => (i.periodicidad || "").toLowerCase().includes("semestral") || (i.tipo || "").toLowerCase().includes("semestral")).length;
  if (kpiAprobados) kpiAprobados.innerText = allInfs.filter(i => (i.estado || "").toLowerCase().includes("aprobado") || (i.estado || "").toLowerCase().includes("vigente")).length;

  const tbody = document.getElementById("table-informes");
  if (!tbody) return;

  const searchInput = document.getElementById("search-informes");
  const search = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const filterPer = document.getElementById("filter-periodicidad-informe");
  const perFiltro = filterPer ? filterPer.value : "";
  const filterReg = document.getElementById("filter-regional-informe");
  const regFiltro = filterReg ? filterReg.value : "";

  const filtered = allInfs.filter(inf => {
    const matchSearch = (inf.titulo || "").toLowerCase().includes(search) ||
                        (inf.codigo || "").toLowerCase().includes(search) ||
                        (inf.autor || "").toLowerCase().includes(search) ||
                        (inf.archivo || "").toLowerCase().includes(search);
    const matchPer = !perFiltro || (inf.periodicidad || "").toLowerCase().includes(perFiltro.toLowerCase()) || (inf.tipo || "").toLowerCase().includes(perFiltro.toLowerCase());
    const matchReg = !regFiltro || (inf.regional === regFiltro);
    return matchSearch && matchPer && matchReg;
  });

  const getFrecuenciaBadge = (inf) => {
    const p = (inf.periodicidad || "").toLowerCase();
    const t = (inf.tipo || "").toLowerCase();
    if (p.includes("mensual") || t.includes("mensual")) {
      return '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200"><span>📅</span> Mensual</span>';
    } else if (p.includes("semestral") || t.includes("semestral")) {
      return '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200"><span>📑</span> Semestral</span>';
    }
    return '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200"><span>📋</span> Gestión</span>';
  };

  const getFileIcon = (archivo = "") => {
    if (archivo.endsWith(".xlsx") || archivo.endsWith(".xls")) {
      return '<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">XLSX</span>';
    } else if (archivo.endsWith(".doc") || archivo.endsWith(".docx")) {
      return '<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">DOC</span>';
    }
    return '<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">PDF</span>';
  };

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="py-8 text-center text-slate-400 text-xs">
          No se encontraron informes que coincidan con los filtros seleccionados.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(inf => `
    <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td class="py-3 px-4 font-mono text-xs font-bold text-purple-700 whitespace-nowrap">${inf.codigo}</td>
      <td class="py-3 px-4 font-medium text-slate-900">
        <div>${inf.titulo}</div>
        <div class="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
          ${getFileIcon(inf.archivo)}
          <span class="font-mono text-[11px] text-slate-600 truncate max-w-xs" title="${inf.archivo}">${inf.archivo}</span>
          <span class="text-[10px] text-slate-400 font-mono">(${inf.peso || '1.2 MB'})</span>
        </div>
        ${inf.resumen ? `<div class="text-[11px] text-slate-400 italic mt-0.5 truncate max-w-sm" title="${inf.resumen}">${inf.resumen}</div>` : ''}
      </td>
      <td class="py-3 px-4 whitespace-nowrap">
        ${getFrecuenciaBadge(inf)}
        <div class="text-[10px] text-slate-400 mt-0.5 truncate max-w-[140px]">${inf.tipo}</div>
      </td>
      <td class="py-3 px-4 text-slate-700 text-xs whitespace-nowrap font-medium">${inf.periodo}</td>
      <td class="py-3 px-4 text-xs font-semibold text-slate-700 whitespace-nowrap">
        <span class="px-2 py-0.5 rounded bg-slate-100">${inf.regional || 'Nacional'}</span>
      </td>
      <td class="py-3 px-4 text-slate-600 text-xs whitespace-nowrap">${inf.autor}</td>
      <td class="py-3 px-4 whitespace-nowrap">
        <span class="px-2.5 py-0.5 text-xs rounded-full font-semibold ${
          (inf.estado === 'Aprobado' || inf.estado === 'Vigente') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
        }">${inf.estado}</span>
      </td>
      <td class="py-3 px-4 text-right space-x-1.5 whitespace-nowrap">
        <button onclick="alert('Descargando informe oficial de CIES:\\n\\nArchivo: ' + '${inf.archivo}' + '\\nPeriodo: ' + '${inf.periodo}' + '\\nRegional: ' + '${inf.regional || 'Nacional'}' + '\\nAutor: ' + '${inf.autor}')" class="text-purple-700 hover:text-purple-900 text-xs font-semibold py-1 px-2.5 rounded hover:bg-purple-50 border border-purple-200">Descargar</button>
        <button onclick="deleteInforme(${inf.id})" class="text-rose-600 hover:text-rose-800 text-xs font-semibold py-1 px-2 rounded hover:bg-rose-50">Eliminar</button>
      </td>
    </tr>
  `).join("");
}

function handlePeriodicidadChange() {
  const perSelect = document.getElementById("inf-periodicidad");
  const inputPeriodo = document.getElementById("inf-periodo");
  const selectTipo = document.getElementById("inf-tipo");
  if (!perSelect || !inputPeriodo || !selectTipo) return;

  const per = perSelect.value;
  if (per === "Mensual") {
    inputPeriodo.value = "Septiembre 2026";
    selectTipo.value = "Informe Narrativo Mensual (18 Hojas Técnicas)";
  } else if (per === "Semestral") {
    inputPeriodo.value = "1er Semestre 2026 (Enero - Junio)";
    selectTipo.value = "Informe Semestral Oficial (18 Hojas)";
  } else {
    inputPeriodo.value = "Gestión 2026";
    selectTipo.value = "Planificación de Taller";
  }
}

function openModalInforme() {
  const modal = document.getElementById("modal-informe");
  const form = document.getElementById("form-informe");
  if (form) form.reset();
  const inputAutor = document.getElementById("inf-autor");
  if (inputAutor) inputAutor.value = "Admin";
  const perSelect = document.getElementById("inf-periodicidad");
  if (perSelect) perSelect.value = "Mensual";
  handlePeriodicidadChange();
  if (modal) modal.classList.remove("hidden");
}

function saveInforme(e) {
  e.preventDefault();
  const db = getDB();

  const fileInput = document.getElementById("inf-archivo-input");
  const titulo = document.getElementById("inf-titulo").value.trim();
  const periodicidad = document.getElementById("inf-periodicidad").value;
  const regional = document.getElementById("inf-regional").value;
  const periodo = document.getElementById("inf-periodo").value.trim();
  const tipo = document.getElementById("inf-tipo").value;
  const autor = document.getElementById("inf-autor").value.trim();
  const estado = document.getElementById("inf-estado").value;
  const resumen = document.getElementById("inf-resumen") ? document.getElementById("inf-resumen").value.trim() : "";

  let nombreArchivo = "";
  let pesoArchivo = "1.5 MB";

  if (fileInput && fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    nombreArchivo = file.name;
    if (file.size < 1024 * 1024) {
      pesoArchivo = (file.size / 1024).toFixed(1) + " KB";
    } else {
      pesoArchivo = (file.size / (1024 * 1024)).toFixed(2) + " MB";
    }
  } else {
    const ext = tipo.includes("Planificación") ? ".doc" : ".xlsx";
    const slug = titulo.toLowerCase().replace(/[^a-z0-9]/g, "_").slice(0, 30);
    nombreArchivo = `${slug}_${regional}_${new Date().toISOString().split("T")[0]}${ext}`;
  }

  // Generar código autoincremental por periodicidad
  const año = new Date().getFullYear();
  let codPrefix = "INF-" + año + "-";
  if (periodicidad === "Mensual") {
    const countMensuales = (db.informes || []).filter(i => (i.periodicidad || "").includes("Mensual")).length + 1;
    codPrefix += "M" + countMensuales.toString().padStart(2, '0');
  } else if (periodicidad === "Semestral") {
    const countSemestrales = (db.informes || []).filter(i => (i.periodicidad || "").includes("Semestral")).length + 1;
    codPrefix += "SEM" + countSemestrales;
  } else {
    codPrefix += "DOC" + ((db.informes || []).length + 1).toString().padStart(2, '0');
  }

  const item = {
    id: Date.now(),
    codigo: codPrefix,
    titulo: titulo,
    periodicidad: periodicidad,
    periodo: periodo,
    regional: regional,
    autor: autor,
    tipo: tipo,
    estado: estado,
    archivo: nombreArchivo,
    peso: pesoArchivo,
    resumen: resumen
  };

  db.informes.unshift(item);

  // Vincular automáticamente en el repositorio de digitalización institucional
  if (db.digitalizacion) {
    db.digitalizacion.unshift({
      id: Date.now() + 1,
      nombre: nombreArchivo,
      tipo: "Tablero / Reporte Programático Oficial",
      peso: pesoArchivo,
      subidoPor: autor,
      fecha: new Date().toISOString().split("T")[0],
      modulo: "Informes Narrativos",
      estadoValidacion: estado === "Aprobado" ? "Aprobado Admin" : "Pendiente",
      validadoPor: estado === "Aprobado" ? "Admin" : "-",
      fechaValidacion: estado === "Aprobado" ? new Date().toISOString().split("T")[0] : "-",
      observacionValidacion: `Informe narrativo ${periodicidad.toLowerCase()} oficial cargado`
    });
  }

  saveDB(db);
  closeModal("modal-informe");
  showToast(`Informe "${item.codigo}" subido y registrado con éxito`, "success");
  renderInformes();
}

function deleteInforme(id) {
  if (confirm("¿Deseas eliminar este informe?")) {
    const db = getDB();
    db.informes = db.informes.filter(i => i.id !== id);
    saveDB(db);
    showToast("Informe eliminado", "warning");
  }
}

// -------------------------------------------------------------
// PANEL 7: DIGITALIZACIÓN DE ARCHIVOS
// -------------------------------------------------------------
function renderDigitalizacion() {
  const db = getDB();
  const allDocs = db.digitalizacion || [];

  // Actualizar métricas KPI de validación
  const kpiTotal = document.getElementById("kpi-dig-total");
  const kpiAdmin = document.getElementById("kpi-dig-admin");
  const kpiOri = document.getElementById("kpi-dig-orientador");
  const kpiPend = document.getElementById("kpi-dig-pendientes");

  if (kpiTotal) kpiTotal.innerText = allDocs.length;
  if (kpiAdmin) kpiAdmin.innerText = allDocs.filter(d => d.estadoValidacion === "Aprobado Admin").length;
  if (kpiOri) kpiOri.innerText = allDocs.filter(d => d.estadoValidacion === "Validado Orientador").length;
  if (kpiPend) kpiPend.innerText = allDocs.filter(d => !d.estadoValidacion || d.estadoValidacion === "Pendiente").length;

  const tbody = document.getElementById("table-digitalizacion");
  if (!tbody) return;

  const searchInput = document.getElementById("search-digitalizacion");
  const search = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const filterCat = document.getElementById("filter-categoria-evidencia");
  const categoriaFiltro = filterCat ? filterCat.value : "";
  const filterVal = document.getElementById("filter-validacion-evidencia");
  const validacionFiltro = filterVal ? filterVal.value : "";

  const filtered = allDocs.filter(doc => {
    const matchSearch = (doc.nombre || "").toLowerCase().includes(search) ||
                        (doc.subidoPor || "").toLowerCase().includes(search) ||
                        (doc.modulo || "").toLowerCase().includes(search);
    const matchCategoria = !categoriaFiltro || doc.tipo === categoriaFiltro;
    const matchValidacion = !validacionFiltro || 
      (validacionFiltro === "Pendiente" ? (!doc.estadoValidacion || doc.estadoValidacion === "Pendiente") : doc.estadoValidacion === validacionFiltro);
    return matchSearch && matchCategoria && matchValidacion;
  });

  const getCategoryBadge = (tipo) => {
    if (tipo.includes("Planilla de Asistencia")) {
      return '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200">📋 Planilla Asistencia</span>';
    } else if (tipo.includes("Viáticos")) {
      return '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 border border-amber-200">💰 Viáticos y Pasajes</span>';
    } else if (tipo.includes("Fotográfica")) {
      return '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-purple-50 text-purple-700 border border-purple-200">📸 Evidencia Fotográfica</span>';
    } else if (tipo.includes("Acta") || tipo.includes("Minuta")) {
      return '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">📝 Acta / Minuta</span>';
    } else if (tipo.includes("Tablero") || tipo.includes("Reporte")) {
      return '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">📊 Tablero / Reporte</span>';
    } else if (tipo.includes("Consentimiento") || tipo.includes("Clínica")) {
      return '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-rose-50 text-rose-700 border border-rose-200">🩺 Consentimiento / Ficha</span>';
    } else if (tipo.includes("E-4-ii1") || tipo.includes("Supervisión de Sesión")) {
      return '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-pink-50 text-pink-700 border border-pink-200">🔍 Guía Supervisión E-4-ii1</span>';
    } else if (tipo.includes("Supervisión")) {
      return '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-teal-50 text-teal-700 border border-teal-200">🔍 Supervisión Técnica</span>';
    }
    return `<span class="px-2 py-0.5 text-xs bg-slate-100 text-slate-700 rounded">${tipo}</span>`;
  };

  const getValidationBadge = (doc) => {
    const estado = doc.estadoValidacion || "Pendiente";
    if (estado === "Aprobado Admin") {
      return `
        <div class="flex flex-col items-center">
          <button onclick="openModalValidarDocumento(${doc.id})" title="Aprobado por Admin. Clic para ver o editar dictamen" class="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200 transition-colors shadow-xs">
            <span class="text-emerald-700 font-black">✓✓</span> Aprobado (Admin)
          </button>
          <span class="text-[10px] text-slate-400 mt-0.5">${doc.validadoPor || 'Admin'} • ${doc.fechaValidacion || ''}</span>
        </div>
      `;
    } else if (estado === "Validado Orientador") {
      return `
        <div class="flex flex-col items-center">
          <button onclick="openModalValidarDocumento(${doc.id})" title="Validado por Orientador/a. Clic para ver o editar dictamen" class="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200 transition-colors shadow-xs">
            <span class="text-blue-700 font-black">✓</span> Validado (Orientador)
          </button>
          <span class="text-[10px] text-slate-400 mt-0.5">${doc.validadoPor || 'Orientador'} • ${doc.fechaValidacion || ''}</span>
        </div>
      `;
    } else if (estado === "Observado") {
      return `
        <div class="flex flex-col items-center">
          <button onclick="openModalValidarDocumento(${doc.id})" title="Documento observado. Clic para revisar observaciones" class="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full bg-rose-100 text-rose-800 border border-rose-300 hover:bg-rose-200 transition-colors shadow-xs">
            <span>⚠️</span> Observado
          </button>
          <span class="text-[10px] text-rose-500 font-medium mt-0.5 max-w-[150px] truncate" title="${doc.observacionValidacion || ''}">${doc.observacionValidacion || 'Requiere subsanación'}</span>
        </div>
      `;
    } else {
      return `
        <div class="flex items-center justify-center gap-1.5">
          <button onclick="openModalValidarDocumento(${doc.id})" title="Pendiente de validación. Clic para dictaminar" class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-800 border border-amber-300 hover:bg-amber-200 transition-colors">
            <span>⏳</span> Pendiente
          </button>
          <button onclick="quickValidateAdmin(${doc.id})" title="Dar check rápido de aprobación institucional como Admin" class="px-2 py-0.5 text-[11px] font-bold rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300 shadow-xs flex items-center gap-0.5">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
            <span>Check</span>
          </button>
        </div>
      `;
    }
  };

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="py-8 text-center text-slate-400 text-xs">
          No se encontraron evidencias digitales que coincidan con los filtros seleccionados.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(doc => `
    <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td class="py-3 px-4 font-medium text-slate-800 flex items-center gap-2">
        <svg class="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
        <span class="truncate max-w-xs font-mono text-xs text-slate-900" title="${doc.nombre}">${doc.nombre}</span>
      </td>
      <td class="py-3 px-4 whitespace-nowrap">${getCategoryBadge(doc.tipo)}</td>
      <td class="py-3 px-4 text-slate-600 text-xs whitespace-nowrap">${doc.modulo}</td>
      <td class="py-3 px-4 text-slate-600 text-xs whitespace-nowrap font-mono">${doc.peso}</td>
      <td class="py-3 px-4 text-slate-600 text-xs whitespace-nowrap">${doc.subidoPor}</td>
      <td class="py-3 px-4 text-slate-500 text-xs whitespace-nowrap font-mono">${doc.fecha}</td>
      <td class="py-3 px-4 text-center whitespace-nowrap">${getValidationBadge(doc)}</td>
      <td class="py-3 px-4 text-right space-x-1.5 whitespace-nowrap">
        <button onclick="openModalValidarDocumento(${doc.id})" class="text-emerald-700 hover:text-emerald-900 text-xs font-semibold py-1 px-2 rounded hover:bg-emerald-50" title="Validar o revisar dictamen">Validar</button>
        <button onclick="alert('Abriendo archivo del repositorio institucional CIES: ' + '${doc.nombre}')" class="text-blue-600 hover:text-blue-800 text-xs font-semibold py-1 px-2 rounded hover:bg-blue-50">Ver</button>
        <button onclick="deleteArchivo(${doc.id})" class="text-rose-600 hover:text-rose-800 text-xs font-semibold py-1 px-2 rounded hover:bg-rose-50">Eliminar</button>
      </td>
    </tr>
  `).join("");
}

function handleFileUploadSimulado(e) {
  e.preventDefault();
  const input = document.getElementById("file-upload-input");
  const categoria = document.getElementById("file-tipo-select").value;
  const modulo = document.getElementById("file-modulo-select").value;

  if (!input.files || input.files.length === 0) {
    alert("Por favor selecciona un archivo.");
    return;
  }

  const file = input.files[0];
  const db = getDB();

  let pesoTexto = (file.size / (1024 * 1024)).toFixed(2) + " MB";
  if (file.size < 1024 * 1024) {
    pesoTexto = (file.size / 1024).toFixed(1) + " KB";
  }

  const newDoc = {
    id: Date.now(),
    nombre: file.name,
    tipo: categoria,
    peso: pesoTexto,
    subidoPor: (getCurrentUser() ? getCurrentUser().nombre : "Admin"),
    fecha: new Date().toISOString().split("T")[0],
    modulo: modulo,
    estadoValidacion: "Pendiente",
    validadoPor: "-",
    fechaValidacion: "-",
    observacionValidacion: "Documento en espera de revisión por el miembro superior del formato"
  };

  db.digitalizacion.unshift(newDoc);
  saveDB(db);
  input.value = "";
  showToast(`Evidencia cargada en categoría: "${categoria.split('(')[0].trim()}"`, "success");
}

function deleteArchivo(id) {
  if (confirm("¿Deseas eliminar este archivo del repositorio?")) {
    const db = getDB();
    db.digitalizacion = db.digitalizacion.filter(d => d.id !== id);
    saveDB(db);
    showToast("Archivo eliminado del repositorio", "warning");
  }
}

// -------------------------------------------------------------
// CONTROL Y VALIDACIÓN DE EVIDENCIAS POR MIEMBROS SUPERIORES
// -------------------------------------------------------------
function openModalValidarDocumento(id) {
  const db = getDB();
  const doc = (db.digitalizacion || []).find(d => d.id === id);
  if (!doc) return;

  document.getElementById("val-doc-id").value = doc.id;
  document.getElementById("val-doc-subtitulo").innerText = `Archivo: "${doc.nombre}"`;
  document.getElementById("val-doc-categoria").innerText = doc.tipo;
  document.getElementById("val-doc-subido").innerText = doc.subidoPor;
  document.getElementById("val-doc-fecha").innerText = doc.fecha;

  const selRol = document.getElementById("val-doc-validador-rol");
  const curr = getCurrentUser();
  if (selRol && curr) {
    if (curr.rol.includes("Orientador")) {
      selRol.value = "Lic. Miriam Morales (Orientador/a SSSR)";
      if (!doc.estadoValidacion || doc.estadoValidacion === "Pendiente") {
        document.getElementById("val-doc-estado").value = "Validado Orientador";
      }
    } else {
      selRol.value = "Admin";
      if (!doc.estadoValidacion || doc.estadoValidacion === "Pendiente") {
        document.getElementById("val-doc-estado").value = "Aprobado Admin";
      }
    }
  }

  const selEstado = document.getElementById("val-doc-estado");
  if (selEstado && doc.estadoValidacion && doc.estadoValidacion !== "Pendiente") {
    selEstado.value = doc.estadoValidacion;
  }

  document.getElementById("val-doc-nota").value = doc.observacionValidacion || "";

  const modal = document.getElementById("modal-validar-documento");
  if (modal) modal.classList.remove("hidden");
}

function saveValidacionDocumento(e) {
  e.preventDefault();
  const idVal = document.getElementById("val-doc-id").value;
  if (!idVal) return;

  const id = parseInt(idVal);
  const db = getDB();
  const idx = (db.digitalizacion || []).findIndex(d => d.id === id);
  if (idx === -1) return;

  const rolVal = document.getElementById("val-doc-validador-rol").value;
  const estadoVal = document.getElementById("val-doc-estado").value;
  const notaVal = document.getElementById("val-doc-nota").value.trim();
  const hoy = new Date().toISOString().split("T")[0];

  db.digitalizacion[idx].estadoValidacion = estadoVal;
  db.digitalizacion[idx].validadoPor = (estadoVal === "Pendiente") ? "-" : rolVal;
  db.digitalizacion[idx].fechaValidacion = (estadoVal === "Pendiente") ? "-" : hoy;
  db.digitalizacion[idx].observacionValidacion = notaVal || (estadoVal.includes("Aprobado") ? "Validado conforme a procedimientos SGC" : "Sin observaciones registradas");

  saveDB(db);
  closeModal("modal-validar-documento");
  showToast(`Dictamen registrado: "${estadoVal}" para el archivo`, "success");
  renderDigitalizacion();
}

function quickValidateAdmin(id) {
  const db = getDB();
  const idx = (db.digitalizacion || []).findIndex(d => d.id === id);
  if (idx === -1) return;

  const curr = getCurrentUser();
  const isOrientador = curr && curr.rol.includes("Orientador");
  const estado = isOrientador ? "Validado Orientador" : "Aprobado Admin";
  const validador = curr ? curr.nombre : "Admin";
  const hoy = new Date().toISOString().split("T")[0];

  db.digitalizacion[idx].estadoValidacion = estado;
  db.digitalizacion[idx].validadoPor = validador;
  db.digitalizacion[idx].fechaValidacion = hoy;
  db.digitalizacion[idx].observacionValidacion = `Check de validación otorgado por ${validador} (${estado})`;

  saveDB(db);
  showToast(`✓ Archivo verificado como "${estado}" por ${validador}`, "success");
  renderDigitalizacion();
}

// -------------------------------------------------------------
// PANEL 8: USUARIOS Y ADMINISTRACIÓN
// -------------------------------------------------------------
function renderUsuarios() {
  const db = getDB();
  const tbody = document.getElementById("table-usuarios");
  if (!tbody) return;

  tbody.innerHTML = db.usuarios.map(u => `
    <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td class="py-3 px-4 font-medium text-slate-900">
        <div class="flex items-center gap-2.5">
          <span class="w-8 h-8 rounded-lg ${getRoleColor(u.rol)} flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">${getInitials(u.nombre)}</span>
          <div>
            <div class="font-bold text-slate-900">${u.nombre} ${u.username ? `<span class="text-[11px] font-mono text-slate-400 font-normal">(@${u.username})</span>` : ''}</div>
            <div class="text-[10px] text-slate-500 font-mono mt-0.5">
              ${u.ci ? `<span class="mr-1 text-slate-700 font-bold">CI: ${u.ci}</span> • ` : ''}
              ${u.procedencia ? `<span class="mr-1 text-blue-700 bg-blue-50 px-1 py-0.5 rounded font-medium">📍 ${u.procedencia}</span> • ` : ''}
              Clave: <span class="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-bold">${u.password || 'cies2026'}</span>
            </div>
            ${u.contratoPdf ? `
              <div class="mt-0.5">
                <span class="inline-flex items-center gap-1 text-[10px] font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200" title="Contrato institucional en PDF">
                  <svg class="w-3 h-3 text-rose-600 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  ${u.contratoPdf}
                </span>
              </div>
            ` : ''}
          </div>
        </div>
      </td>
      <td class="py-3 px-4 text-slate-600 font-mono text-xs">${u.email}</td>
      <td class="py-3 px-4 text-xs font-semibold text-slate-700">${u.regional || u.sede || 'Nacional'}</td>
      <td class="py-3 px-4"><span class="px-2 py-0.5 text-xs bg-slate-100 text-slate-800 rounded-md font-semibold border border-slate-200">${u.rol}</span></td>
      <td class="py-3 px-4"><span class="px-2 py-0.5 text-xs bg-emerald-100 text-emerald-800 rounded-full font-medium">${u.estado}</span></td>
      <td class="py-3 px-4 text-right space-x-2">
        <button onclick="editUsuario(${u.id})" class="text-blue-600 hover:text-blue-800 text-xs font-semibold py-1 px-2 rounded hover:bg-blue-50 cursor-pointer">Editar</button>
        <button onclick="deleteUsuario(${u.id})" class="text-rose-600 hover:text-rose-800 text-xs font-semibold py-1 px-2 rounded hover:bg-rose-50 cursor-pointer">Eliminar</button>
      </td>
    </tr>
  `).join("");
}

function openModalUsuario(item = null) {
  const modal = document.getElementById("modal-usuario");
  const form = document.getElementById("form-usuario");
  form.reset();

  if (item) {
    document.getElementById("modal-usr-title").innerText = "Editar Usuario";
    document.getElementById("usr-id").value = item.id;
    document.getElementById("usr-nombre").value = item.nombre;
    const ciInput = document.getElementById("usr-ci");
    if (ciInput) ciInput.value = item.ci || "";
    const procInput = document.getElementById("usr-procedencia");
    if (procInput) procInput.value = item.procedencia || "";
    document.getElementById("usr-email").value = item.email;
    document.getElementById("usr-password").value = item.password || "cies2026";
    document.getElementById("usr-regional").value = item.regional || "LP";
    document.getElementById("usr-estado").value = item.estado;

    const userRoles = extractRolesList(item.roles || item.rol);
    document.querySelectorAll('input[name="usr-roles"]').forEach(cb => {
      cb.checked = userRoles.some(r => r.toLowerCase() === cb.value.toLowerCase() || cb.value.toLowerCase().includes(r.toLowerCase()));
    });
    handleUsrRolesCheckboxChange();
  } else {
    document.getElementById("modal-usr-title").innerText = "Crear Nuevo Usuario";
    document.getElementById("usr-id").value = "";
    const ciInput = document.getElementById("usr-ci");
    if (ciInput) ciInput.value = "";
    const procInput = document.getElementById("usr-procedencia");
    if (procInput) procInput.value = "";
    document.getElementById("usr-password").value = "cies2026";

    document.querySelectorAll('input[name="usr-roles"]').forEach(cb => {
      cb.checked = (cb.value === "Educador");
    });
    handleUsrRolesCheckboxChange();
  }
  modal.classList.remove("hidden");
}

function saveUsuario(e) {
  e.preventDefault();
  const db = getDB();
  const idVal = document.getElementById("usr-id").value;

  const selectedRoles = getSelectedUsrRoles();
  const rolesList = selectedRoles.length > 0 ? selectedRoles : ["Educador"];
  const finalRolStr = rolesList.join(" y ");
  const combinedModules = getCombinedRoleModules(rolesList);
  const combinedPerms = getCombinedRolePermissions(rolesList);

  const item = {
    id: idVal ? parseInt(idVal) : Date.now(),
    nombre: document.getElementById("usr-nombre").value.trim(),
    ci: document.getElementById("usr-ci") ? document.getElementById("usr-ci").value.trim() : "",
    procedencia: document.getElementById("usr-procedencia") ? document.getElementById("usr-procedencia").value.trim() : "",
    email: document.getElementById("usr-email").value.trim(),
    password: document.getElementById("usr-password").value.trim() || "cies2026",
    regional: document.getElementById("usr-regional").value,
    roles: rolesList,
    rol: finalRolStr,
    cargo: finalRolStr,
    modulos: combinedModules,
    permisosAdicionales: combinedPerms,
    estado: document.getElementById("usr-estado").value
  };

  if (idVal) {
    const idx = db.usuarios.findIndex(u => u.id === parseInt(idVal));
    if (idx !== -1) db.usuarios[idx] = Object.assign({}, db.usuarios[idx], item);
    // Si se editó el usuario actualmente autenticado, refrescar sesión
    const curr = getCurrentUser();
    if (curr && curr.id === item.id) {
      setCurrentUser(item);
      updateAuthUI();
    }
    showToast("Usuario institucional actualizado con éxito", "success");
  } else {
    db.usuarios.push(item);
    showToast("Usuario registrado con éxito en el sistema", "success");
  }

  saveDB(db);
  closeModal("modal-usuario");
  renderUsuarios();
}

function editUsuario(id) {
  const db = getDB();
  const item = db.usuarios.find(u => u.id === id);
  if (item) openModalUsuario(item);
}

function deleteUsuario(id) {
  const curr = getCurrentUser();
  if (curr && curr.id === id) {
    showToast("No puedes eliminar al usuario con la sesión activa actual", "warning");
    return;
  }

  if (confirm("¿Deseas deshabilitar/eliminar este usuario?")) {
    const db = getDB();
    db.usuarios = db.usuarios.filter(u => u.id !== id);
    saveDB(db);
    showToast("Usuario eliminado", "warning");
  }
}

// -------------------------------------------------------------
// UTILIDADES: MODALES, TOASTS, EXPORTACIÓN
// -------------------------------------------------------------
function openModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) el.classList.remove("hidden");
}

function closeModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) el.classList.add("hidden");
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const colors = {
    success: "bg-emerald-600 text-white",
    warning: "bg-amber-600 text-white",
    info: "bg-blue-600 text-white"
  };

  const toast = document.createElement("div");
  toast.className = `toast px-4 py-3 rounded-lg shadow-lg text-sm flex items-center gap-2 ${colors[type] || colors.info}`;
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

function exportarDatosJSON() {
  const data = JSON.stringify(getDB(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `CIES_datos_refinados_${new Date().toISOString().split("T")[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Datos descargados en formato JSON", "success");
}

// -------------------------------------------------------------
// FUNCIONES DE CONTROL: GUÍA DE SUPERVISIÓN SGC-Misional-E-4-ii1
// -------------------------------------------------------------
function openModalRubricaSupervision() {
  const modal = document.getElementById("modal-rubrica-supervision");
  if (modal) modal.classList.remove("hidden");
}

function descargarFormatoSupervision() {
  const filename = "1 Guia Supervision Sesion Orientacion.xlsx";
  showToast(`Descargando formato oficial SGC: "${filename}"`, "info");
  
  const link = document.createElement("a");
  link.download = filename;
  link.href = "templates/" + encodeURIComponent(filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function openUploadSupervisionModal() {
  navigateTo("digitalizacion");
  const fileTipo = document.getElementById("file-tipo-select");
  if (fileTipo) fileTipo.value = "Guía de Supervisión de Sesión (SGC-Misional-E-4-ii1)";
  const fileModulo = document.getElementById("file-modulo-select");
  if (fileModulo) fileModulo.value = "Orientación SSSR";
  const fileInput = document.getElementById("file-upload-input");
  if (fileInput) fileInput.focus();
  showToast("Selecciona el archivo diligenciado de la Guía de Supervisión (SGC-Misional-E-4-ii1)", "info");
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  getDB();

  document.querySelectorAll(".nav-link").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.getAttribute("data-panel");
      if (target) navigateTo(target);
    });
  });

  const mobileToggle = document.getElementById("mobile-sidebar-toggle");
  const sidebar = document.getElementById("sidebar");
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener("click", () => sidebar.classList.toggle("-translate-x-full"));
  }

  const searchPart = document.getElementById("search-participantes");
  if (searchPart) searchPart.addEventListener("input", (e) => renderParticipantes(e.target.value));

  const searchAct = document.getElementById("search-actividades");
  if (searchAct) searchAct.addEventListener("input", (e) => renderActividades(e.target.value));

  const searchInc = document.getElementById("search-incidencia");
  if (searchInc) searchInc.addEventListener("input", (e) => renderIncidencia(e.target.value));

  const searchOri = document.getElementById("search-orientadores");
  if (searchOri) searchOri.addEventListener("input", (e) => renderOrientadores(e.target.value));

  const searchInf = document.getElementById("search-informes");
  if (searchInf) searchInf.addEventListener("input", () => renderInformes());

  if (checkAuth()) {
    navigateTo("dashboard");
  }
});
