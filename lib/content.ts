export type Lang = "es" | "en"

export const content = {
  es: {
    nav: {
      links: [
        { href: "#servicios", label: "Servicios" },
        { href: "#casos", label: "Casos" },
        { href: "#stack", label: "Stack" },
        { href: "#sobre-mi", label: "Sobre mí" },
        { href: "#contacto", label: "Contacto" },
      ],
      cta: "Agendar llamada",
    },
    hero: {
      status: "Disponible",
      titlePre: "Convierto sistemas de datos desprolijos en información en la que tu negocio puede ",
      titleHighlight: "confiar",
      titlePost: ".",
      chips: ["4 años", "Inglés B2", "Respuesta 24h"],
      cta: "Iniciar Diagnóstico",
      terminalResult: "> 100% SUCCESS",
    },
    metrics: [
      { value: "+10", label: "Empresas" },
      { value: "0", label: "Downtime" },
      { value: "100%", label: "Entrega a tiempo" },
      { value: "5+", label: "Terabytes" },
      { value: "24/7", label: "Monitoreo" },
    ],
    services: {
      title: "Soluciones de Ingeniería de Datos",
      subtitle: "Arquitectura robusta y escalable para que tus datos trabajen por vos, no al revés.",
      cards: [
        {
          icon: "database",
          title: "Modelado de Datos",
          description: "Diseño de esquemas optimizados para rendimiento analítico e integridad referencial.",
          features: ["Esquemas Estrella/Copo de Nieve", "Normalización 3NF"],
          core: false,
        },
        {
          icon: "tree",
          title: "Pipelines ETL y Automatización",
          description:
            "Extracción, transformación y carga de datos desde múltiples orígenes hacia tu Data Warehouse con tolerancia a fallos.",
          features: ["Integración de APIs REST/SOAP", "Limpieza y validación automática", "Orquestación con Airflow/Prefect"],
          core: true,
          footer: "Entregas desde 2 semanas",
        },
        {
          icon: "monitoring",
          title: "Migración y Cloud",
          description: "Transición segura de sistemas on-premise a infraestructuras en la nube modernas.",
          features: ["AWS / Azure / GCP", "Optimización de costos"],
          core: false,
        },
      ],
      coreBadge: "CORE",
    },
    cases: {
      title: "Casos de Estudio",
      items: [
        {
          icon: "hub",
          tags: ["SQL Server", "T-SQL"],
          title: "Optimización de ERP Core",
          description:
            "Rediseño completo de la arquitectura de base de datos para un ERP de manufactura, reduciendo los tiempos de consulta en un 67% y eliminando bloqueos concurrentes durante cierres contables.",
        },
        {
          icon: "cloud",
          tags: ["Forsta", "Enterprise"],
          title: "Migración Enterprise Zero Downtime",
          description:
            "Ejecución de una migración crítica de datos históricos hacia la plataforma Forsta sin interrupción del servicio, garantizando 100% de integridad de datos para operaciones globales.",
        },
      ],
    },
    stack: {
      title: "Stack Tecnológico",
      columns: [
        { title: "Lenguajes", items: ["Python", "SQL (T-SQL, PL/pgSQL)", "Bash/Shell"] },
        { title: "Bases de Datos", items: ["SQL Server", "PostgreSQL", "MongoDB"] },
        { title: "Cloud & Infra", items: ["AWS (S3, EC2, RDS)", "Docker", "Git/GitHub Actions"] },
        { title: "Automatización", items: ["Apache Airflow", "n8n / Make", "Playwright"] },
      ],
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy un Data Engineer apasionado por construir cimientos sólidos. Mi enfoque técnico se basa en la premisa de que los datos son inútiles si la infraestructura que los soporta es frágil.",
        "Con 4 años de experiencia diseñando y optimizando bases de datos, pipelines ETL y flujos de automatización, me especializo en transformar el caos de datos inconexos en activos estratégicos fiables.",
        "Fuera de la terminal, me dedico a explorar nuevas herramientas del ecosistema de datos y a documentar procesos para asegurar que cada solución construida sea mantenible a largo plazo.",
      ],
      cv: "Descargar CV",
    },
    contact: {
      title: "Contame qué proceso querés arreglar",
      subtitle:
        "Completá el formulario o agendá directamente una llamada para evaluar si soy el perfil técnico adecuado para tu desafío.",
      name: "Nombre",
      email: "Email",
      challenge: "Desafío principal",
      submit: "Enviar mensaje",
      sent: "Mensaje enviado",
      scheduleTitle: "Agenda directa",
      scheduleText:
        "Revisá mi disponibilidad y seleccioná un horario para una videollamada de 30 minutos.",
      scheduleCta: "Abrir Calendario",
    },
    footer: {
      tagline: "Data Engineering Architect.",
      cols: [
        [
          { href: "#servicios", label: "Servicios" },
          { href: "#casos", label: "Casos" },
          { href: "#stack", label: "Stack" },
        ],
        [
          { href: "#sobre-mi", label: "Sobre mí" },
          { href: "#contacto", label: "Contacto" },
        ],
      ],
      copyright: "© 2024 Iván Gabriel. Data Engineering Architect.",
    },
  },
  en: {
    nav: {
      links: [
        { href: "#servicios", label: "Services" },
        { href: "#casos", label: "Cases" },
        { href: "#stack", label: "Stack" },
        { href: "#sobre-mi", label: "About" },
        { href: "#contacto", label: "Contact" },
      ],
      cta: "Book a call",
    },
    hero: {
      status: "Available",
      titlePre: "I turn messy data systems into information your business can ",
      titleHighlight: "trust",
      titlePost: ".",
      chips: ["4 years", "English B2", "24h response"],
      cta: "Start Diagnosis",
      terminalResult: "> 100% SUCCESS",
    },
    metrics: [
      { value: "+10", label: "Companies" },
      { value: "0", label: "Downtime" },
      { value: "100%", label: "On-time delivery" },
      { value: "5+", label: "Terabytes" },
      { value: "24/7", label: "Monitoring" },
    ],
    services: {
      title: "Data Engineering Solutions",
      subtitle: "Robust, scalable architecture so your data works for you, not the other way around.",
      cards: [
        {
          icon: "database",
          title: "Data Modeling",
          description: "Design of schemas optimized for analytical performance and referential integrity.",
          features: ["Star / Snowflake schemas", "3NF Normalization"],
          core: false,
        },
        {
          icon: "tree",
          title: "ETL Pipelines & Automation",
          description:
            "Extraction, transformation and loading of data from multiple sources into your Data Warehouse with fault tolerance.",
          features: ["REST/SOAP API integration", "Automatic cleaning & validation", "Orchestration with Airflow/Prefect"],
          core: true,
          footer: "Delivery from 2 weeks",
        },
        {
          icon: "monitoring",
          title: "Migration & Cloud",
          description: "Safe transition from on-premise systems to modern cloud infrastructures.",
          features: ["AWS / Azure / GCP", "Cost optimization"],
          core: false,
        },
      ],
      coreBadge: "CORE",
    },
    cases: {
      title: "Case Studies",
      items: [
        {
          icon: "hub",
          tags: ["SQL Server", "T-SQL"],
          title: "ERP Core Optimization",
          description:
            "Complete redesign of the database architecture for a manufacturing ERP, reducing query times by 67% and eliminating concurrent locks during accounting closes.",
        },
        {
          icon: "cloud",
          tags: ["Forsta", "Enterprise"],
          title: "Enterprise Zero Downtime Migration",
          description:
            "Execution of a critical historical data migration to the Forsta platform without service interruption, guaranteeing 100% data integrity for global operations.",
        },
      ],
    },
    stack: {
      title: "Tech Stack",
      columns: [
        { title: "Languages", items: ["Python", "SQL (T-SQL, PL/pgSQL)", "Bash/Shell"] },
        { title: "Databases", items: ["SQL Server", "PostgreSQL", "MongoDB"] },
        { title: "Cloud & Infra", items: ["AWS (S3, EC2, RDS)", "Docker", "Git/GitHub Actions"] },
        { title: "Automation", items: ["Apache Airflow", "n8n / Make", "Playwright"] },
      ],
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm a Data Engineer passionate about building solid foundations. My technical approach is based on the premise that data is useless if the infrastructure supporting it is fragile.",
        "With 4 years of experience designing and optimizing databases, ETL pipelines and automation flows, I specialize in transforming the chaos of disconnected data into reliable strategic assets.",
        "Away from the terminal, I explore new tools in the data ecosystem and document processes to ensure every solution I build stays maintainable in the long run.",
      ],
      cv: "Download CV",
    },
    contact: {
      title: "Tell me which process you want to fix",
      subtitle:
        "Fill out the form or book a call directly to evaluate whether I'm the right technical profile for your challenge.",
      name: "Name",
      email: "Email",
      challenge: "Main challenge",
      submit: "Send message",
      sent: "Message sent",
      scheduleTitle: "Direct scheduling",
      scheduleText: "Check my availability and pick a slot for a 30-minute video call.",
      scheduleCta: "Open Calendar",
    },
    footer: {
      tagline: "Data Engineering Architect.",
      cols: [
        [
          { href: "#servicios", label: "Services" },
          { href: "#casos", label: "Cases" },
          { href: "#stack", label: "Stack" },
        ],
        [
          { href: "#sobre-mi", label: "About" },
          { href: "#contacto", label: "Contact" },
        ],
      ],
      copyright: "© 2024 Iván Gabriel. Data Engineering Architect.",
    },
  },
} as const
