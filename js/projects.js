/* ============================================================
   TUS PROYECTOS
   ------------------------------------------------------------
   Este es el único archivo que necesitas tocar para agregar,
   quitar o editar un proyecto. Copia un bloque completo, pégalo
   y cambia los valores.

   Campos:
     id        texto único, sin espacios (se usa internamente)
     year      año
     status    "active"  = en desarrollo (punto amarillo)
               "shipped" = terminado (punto verde)
               "paused"  = en pausa (punto gris)
     category  "web" | "game" | "tools"   (crea los filtros)
     featured  true = aparece primero en la lista
     cover     ruta a la imagen de portada (16:9 se ve mejor)
     tags      tecnologías, aparecen como etiquetas
     badge     opcional: "course" = práctica de curso
                          "team"   = desarrollado en equipo
                          "client" = trabajo para cliente
               Bórralo si el proyecto es original y solo tuyo.
     entorno   opcional: por qué el proyecto no se puede probar en el
               navegador. Solo se muestra si no hay demo ni prototipo.
                 "servidor"   = necesita servidor y base de datos
                 "escritorio" = es una aplicación de escritorio
                 "camara"     = necesita cámara web
                 "desarrollo" = todavía sin build público
     links     opcional, en este orden de importancia:
                 demo      corriendo de verdad
                 prototipo interfaz navegable, sin sistema detrás
                 caso      página de caso de estudio del propio sitio
                 repo      código fuente
                 docs      documentación
               Borra los que no tengas: un enlace roto es peor que
               ninguno.
     es / en   los textos en cada idioma
   ============================================================ */

window.PROJECTS = [

  {
    id: "facturacion-cr",
    year: 2026,
    status: "active",
    category: "web",
    featured: true,
    cover: "assets/img/facturacion-cr.svg",
    tags: ["Node.js", "SQLite", "XAdES", "ESC/POS", "TLS"],
    links: {
      prototipo: "https://fofiuxx.github.io/facturacion-cr/mockups/pos.html",
      caso: "proyectos/facturacion-cr.html",
      repo: "https://github.com/Fofiuxx/facturacion-cr",
    },
    es: {
      title: "Facturación Electrónica CR",
      tagline: "Punto de venta y facturación para Hacienda, pensado para restaurantes que no pueden parar.",
      description:
        "Punto de venta con facturación electrónica conforme a la normativa de Hacienda de Costa Rica, " +
        "para restaurantes. La decisión que define la arquitectura es que el servidor corre dentro del " +
        "local, no en la nube: si se cae el internet, las tablets lo siguen viendo por el WiFi del " +
        "restaurante y el negocio no se detiene. Lo único que se corta es el envío a Hacienda, que se " +
        "encola y se reintenta. El sistema está completo y probado de punta a punta; queda pendiente la " +
        "llave de TRIBU-CR para transmitir en producción.",
      highlights: [
        "Los comprobantes son inmutables por diseño y la base lo impone: cuatro triggers impiden borrarlos o alterarlos. Un error se corrige con nota de crédito, como manda la ley, no editando el pasado.",
        "Sin credenciales de Hacienda el sistema encola y explica por qué no envió, en vez de dar por aceptado lo que nunca se transmitió.",
        "Reintentos con espera exponencial, para no quemar intentos contra un servicio que no responde.",
        "Los respaldos se verifican abriéndolos, no comprobando que el archivo exista; un archivo corrupto se detecta antes de restaurar, no después.",
        "HTTPS en la red del local con autoridad certificadora propia — Let's Encrypt no sirve para un servidor que a propósito no está en internet.",
        "Firma XAdES resuelta en Node, sin el microservicio en Java que suele acompañar a este requisito.",
        "Permisos por rol y arqueo de caja que detecta faltantes, con tres suites de pruebas que cubren precisión del dinero, concurrencia y entradas hostiles."
      ]
    },
    en: {
      title: "Costa Rica E-Invoicing",
      tagline: "Point of sale and tax invoicing built for restaurants that can't afford downtime.",
      description:
        "A restaurant point-of-sale with electronic invoicing compliant with Costa Rica's tax authority " +
        "(Hacienda). The defining architectural decision is that the server runs on-site, not in the " +
        "cloud: when the internet drops, tablets still reach it over the restaurant's WiFi and service " +
        "continues. The only thing that stops is transmission to Hacienda, which queues and retries. " +
        "The system is complete and tested end to end; it awaits the TRIBU-CR key to transmit in production.",
      highlights: [
        "Invoices are immutable by design and the database enforces it: four triggers make them impossible to delete or alter. A mistake is corrected with a credit note, as the law requires, not by editing the past.",
        "Without tax-authority credentials the system queues and reports why it didn't send, rather than marking as accepted something that was never transmitted.",
        "Retries with exponential backoff, so it doesn't burn attempts against a service that isn't answering.",
        "Backups are verified by opening them, not by checking the file exists; a corrupted archive is caught before restoring, not after.",
        "HTTPS on the local network via a self-issued certificate authority — Let's Encrypt is useless for a server deliberately kept off the internet.",
        "XAdES signing solved in Node, without the Java microservice this requirement usually drags along.",
        "Role-based permissions and cash reconciliation that catches shortfalls, with three test suites covering money precision, concurrency and hostile input."
      ]
    }
  },

  {
    id: "black-beacon",
    year: 2026,
    status: "active",
    category: "game",
    featured: true,
    cover: "assets/img/black-beacon.svg",
    tags: ["Unity", "C#", "URP", "Shaders", "Diseño de audio"],
    entorno: "desarrollo",
    links: {
      // repo: "https://github.com/TU-USUARIO/black-beacon",
      // demo: "https://tuusuario.itch.io/black-beacon"
    },
    es: {
      title: "Black Beacon",
      tagline: "Terror en primera persona con estética PS1: una linterna que se agota y seis cosas que no deberías mirar.",
      description:
        "Juego de terror y exploración en primera persona hecho en Unity. La estética imita el hardware de PS1 " +
        "— vértices temblorosos, texturas sin corregir y cuantización de color — y toda la tensión descansa en " +
        "la linterna: tiene batería limitada y el mapa está diseñado alrededor de cuándo decides gastarla.",
      highlights: [
        "Bestiario de seis entidades, cada una con su propia lógica de aparición y comportamiento.",
        "Shader PS1 propio con cuantización de color y deformación de vértices.",
        "Audio modelado desde la física de cada fuente en vez de ondas sintéticas genéricas.",
        "Batería de 17 comprobaciones automáticas que ejecutan el build y verifican la cadena completa del juego."
      ]
    },
    en: {
      title: "Black Beacon",
      tagline: "First-person horror with a PS1 look: a flashlight that runs out and six things you shouldn't look at.",
      description:
        "A first-person horror exploration game built in Unity. The visuals imitate PS1 hardware — jittering " +
        "vertices, uncorrected textures, quantized color — and the tension rests entirely on the flashlight: " +
        "its battery is finite, and the map is designed around when you choose to spend it.",
      highlights: [
        "A bestiary of six entities, each with its own spawn logic and behavior.",
        "Custom PS1 shader with color quantization and vertex snapping.",
        "Audio modeled from the physics of each source rather than generic synthesized waveforms.",
        "A 17-check automated suite that runs the compiled build and verifies the full game loop."
      ]
    }
  },

  {
    id: "frutos-terraba",
    year: 2025,
    status: "shipped",
    category: "web",
    featured: true,
    badge: "team",
    cover: "assets/img/frutos-terraba.svg",
    tags: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "QuestPDF"],
    entorno: "servidor",
    links: {
      repo: "https://github.com/Fofiuxx/Proyecto-C-NetCore",
    },
    es: {
      title: "Frutos del Terrabá",
      tagline: "Sistema de gestión agrícola: inventario, pedidos, proveedores, distribución y reportes en PDF.",
      description:
        "Sistema de gestión para una distribuidora de productos agrícolas, desarrollado en equipo " +
        "sobre ASP.NET Core. Son dos aplicaciones separadas: una API REST que es la única que habla " +
        "con la base de datos, y una aplicación web MVC que la consume por HTTP. Cubre el ciclo " +
        "completo — catálogo de productos y categorías, proveedores, control de inventario, pedidos " +
        "con sus líneas de detalle, distribución, y un panel con indicadores.",
      highlights: [
        "La web no toca la base de datos: consume su propia API por HTTP, así que el día que haya una app móvil consume la misma.",
        "Capa de servicios detrás de interfaces e inyectada por el contenedor, lo que permite sustituirla en pruebas sin levantar la base de datos.",
        "DTOs en la frontera de la API y ViewModels en la capa web: cada capa expone solo lo que necesita, sin filtrar las entidades de la base.",
        "Autenticación por cookie en la web y JWT en la API, con página de acceso denegado y recuperación de contraseña.",
        "Reportes generados en PDF con QuestPDF y documentación de la API con Swagger."
      ]
    },
    en: {
      title: "Frutos del Terrabá",
      tagline: "Agricultural management system: inventory, orders, suppliers, distribution and PDF reports.",
      description:
        "A management system for an agricultural produce distributor, built by a team on ASP.NET Core. " +
        "It is two separate applications: a REST API that is the only thing talking to the database, " +
        "and an MVC web app that consumes it over HTTP. It covers the full cycle — product and category " +
        "catalog, suppliers, inventory control, orders with their line items, distribution, and a " +
        "metrics dashboard.",
      highlights: [
        "The web app never touches the database: it consumes its own API over HTTP, so a future mobile app would consume the very same one.",
        "A service layer behind interfaces, injected by the container, which makes it swappable in tests without standing up a database.",
        "DTOs at the API boundary and ViewModels in the web layer: each layer exposes only what it needs, never leaking database entities.",
        "Cookie authentication on the web and JWT on the API, with an access-denied page and password recovery.",
        "PDF reports generated with QuestPDF and API documentation via Swagger."
      ]
    }
  },

  {
    id: "ofertas-vuelos",
    year: 2025,
    status: "shipped",
    category: "web",
    featured: false,
    badge: "course",
    cover: "assets/img/ofertas-vuelos.svg",
    tags: ["Node.js", "Express", "MySQL", "JWT", "bcrypt"],
    entorno: "servidor",
    links: {
      repo: "https://github.com/Fofiuxx/ofertas-vuelos",
    },
    es: {
      title: "TripExpress",
      tagline: "Sitio de ofertas de vuelos con API propia — y la vulnerabilidad que encontré y corregí en él.",
      description:
        "Catálogo de ofertas de vuelos con API en Express y MySQL: registro, inicio de sesión y " +
        "un panel de administración restringido. Lo más útil de este proyecto no fue construirlo " +
        "sino auditarlo después: al releer el código encontré que el login era vulnerable a " +
        "inyección SQL y que las contraseñas se guardaban en texto plano. Reescribí la capa de " +
        "seguridad entera y documenté cada fallo en el README.",
      highlights: [
        "El login original armaba la consulta pegando texto: con un email como \" OR \"1\"=\"1 se entraba a cualquier cuenta. Ahora todo va con parámetros preparados.",
        "Las contraseñas pasaron de texto plano a bcrypt con 12 rondas — el código traía genSaltSync(0), que es no proteger nada.",
        "Sesiones reales con JWT que caduca en una hora, y dos middlewares que separan «tener sesión» de «ser administrador».",
        "El email inexistente y la contraseña incorrecta devuelven el mismo error, para que no se pueda averiguar qué correos están registrados.",
        "Verificado con una batería de 20 pruebas que ataca la API con seis cargas de inyección distintas."
      ]
    },
    en: {
      title: "TripExpress",
      tagline: "A flight-deals site with its own API — and the vulnerability I found and fixed in it.",
      description:
        "A flight-deals catalog with an Express + MySQL API: sign-up, login, and a restricted admin " +
        "panel. The most useful part of this project wasn't building it but auditing it afterward: " +
        "rereading the code I found the login was open to SQL injection and passwords were stored " +
        "in plaintext. I rewrote the whole security layer and documented every flaw in the README.",
      highlights: [
        "The original login built its query by concatenation: an email like \" OR \"1\"=\"1 got you into any account. Everything now uses prepared statements.",
        "Passwords went from plaintext to bcrypt with 12 rounds — the code shipped genSaltSync(0), which protects nothing.",
        "Real sessions with a one-hour JWT, and two middlewares that separate \"has a session\" from \"is an admin\".",
        "A nonexistent email and a wrong password return the identical error, so nobody can enumerate registered accounts.",
        "Verified with a 20-check suite that attacks the API with six different injection payloads."
      ]
    }
  },

  {
    id: "panel-personal",
    year: 2025,
    status: "shipped",
    category: "web",
    featured: false,
    badge: "course",
    cover: "assets/img/panel-personal.svg",
    tags: ["JavaScript", "Fetch API", "Webpack", "CSS Grid"],
    links: {
      demo: "https://fofiuxx.github.io/panel-personal/src/page.html",
      repo: "https://github.com/Fofiuxx/panel-personal",
    },
    es: {
      title: "Panel de Noticias",
      tagline: "Clima en vivo, cuatro husos horarios, la noticia del día y una canción, en una sola pantalla.",
      description:
        "Portal de inicio que reúne en una pantalla el pronóstico del tiempo traído de una API " +
        "externa, la hora actual en Nueva York, Londres, Sídney y Buenos Aires, la última noticia " +
        "y un reproductor de audio. Empaquetado con Webpack.",
      highlights: [
        "Consume la API de Weatherbit y, si falla o no hay clave configurada, muestra valores por defecto en vez de una pantalla rota.",
        "Las horas de las cuatro ciudades salen de Intl con zonas horarias reales, así que el horario de verano se ajusta solo.",
        "La clave de la API se movió a un archivo de configuración fuera del repositorio — en la versión original estaba escrita en el código.",
        "Módulos ES empaquetados con Webpack."
      ]
    },
    en: {
      title: "News Dashboard",
      tagline: "Live weather, four time zones, the day's headline and a song, all on one screen.",
      description:
        "A start page that gathers on a single screen the weather forecast pulled from an external " +
        "API, the current time in New York, London, Sydney and Buenos Aires, the latest headline, " +
        "and an audio player. Bundled with Webpack.",
      highlights: [
        "Consumes the Weatherbit API and, if it fails or no key is configured, falls back to default values instead of a broken screen.",
        "The four city clocks come from Intl with real time zones, so daylight saving adjusts itself.",
        "The API key moved to a config file kept out of the repository — in the original version it was hardcoded in the source.",
        "ES modules bundled with Webpack."
      ]
    }
  },

  {
    id: "gestor-tareas",
    year: 2025,
    status: "shipped",
    category: "web",
    featured: false,
    badge: "course",
    cover: "assets/img/gestor-tareas.svg",
    tags: ["Django", "Python", "SQLite", "Auth"],
    entorno: "servidor",
    links: {
      repo: "https://github.com/Fofiuxx/Proyectos-Python/tree/main/Python/App%20Web%20de%20Tareas%20Pendientes",
    },
    es: {
      title: "Gestor de Tareas",
      tagline: "Aplicación web con cuentas de usuario donde cada quien ve solo sus propias tareas.",
      description:
        "Aplicación web completa en Django: registro, inicio de sesión, y las cuatro operaciones " +
        "sobre tareas — crear, ver, editar y borrar. Cada usuario queda aislado del resto: las " +
        "vistas filtran por el usuario de la sesión, así que nadie ve ni puede tocar lo ajeno.",
      highlights: [
        "Autenticación completa con registro propio, sesión iniciada automáticamente al registrarse.",
        "Vistas basadas en clases de Django (ListView, CreateView, UpdateView, DeleteView) en vez de funciones sueltas.",
        "Buscador que filtra las tareas por título mientras escribís.",
        "Contador de pendientes y protección de rutas con LoginRequiredMixin."
      ]
    },
    en: {
      title: "Task Manager",
      tagline: "A web app with user accounts where everyone sees only their own tasks.",
      description:
        "A full Django web application: sign-up, login, and the four operations on tasks — " +
        "create, read, update, delete. Each user is isolated from the rest: the views filter by " +
        "the session's user, so nobody can see or touch anyone else's data.",
      highlights: [
        "Full authentication with custom sign-up that logs the user in automatically.",
        "Django class-based views (ListView, CreateView, UpdateView, DeleteView) rather than loose functions.",
        "Search box that filters tasks by title as you type.",
        "Pending-task counter and route protection via LoginRequiredMixin."
      ]
    }
  },

  {
    id: "asistencia-facial",
    year: 2025,
    status: "shipped",
    category: "tools",
    featured: false,
    badge: "course",
    cover: "assets/img/reconocimiento-facial.svg",
    tags: ["Python", "OpenCV", "face_recognition", "NumPy"],
    entorno: "camara",
    links: {
      repo: "https://github.com/Fofiuxx/Proyectos-Python/tree/main/Python/Controlador%20de%20Asistencia",
    },
    es: {
      title: "Control de Asistencia Facial",
      tagline: "Reconoce al empleado por la cámara web y le marca la hora de entrada solo.",
      description:
        "Sistema de marca de asistencia por reconocimiento facial. Codifica las fotos de los " +
        "empleados en vectores de 128 dimensiones, toma una captura de la cámara web y busca " +
        "la coincidencia más cercana. Si la encuentra, escribe el nombre y la hora en el registro; " +
        "si la distancia supera el umbral, rechaza a la persona en vez de adivinar.",
      highlights: [
        "Compara por distancia euclídea entre codificaciones y se queda con el mínimo, no con el primer parecido.",
        "Umbral de 0.6: por encima de eso prefiere decir «no coincide» antes que marcar a quien no es.",
        "Evita marcas duplicadas — si la persona ya fichó hoy, no vuelve a escribir la línea.",
        "Dibuja el recuadro y el nombre sobre el rostro detectado para dar retroalimentación visual."
      ]
    },
    en: {
      title: "Facial Attendance System",
      tagline: "Recognizes an employee through the webcam and clocks them in on its own.",
      description:
        "A facial-recognition attendance system. It encodes employee photos into 128-dimension " +
        "vectors, grabs a frame from the webcam, and looks for the closest match. On a hit it " +
        "writes the name and timestamp to the log; if the distance exceeds the threshold, it " +
        "rejects the person instead of guessing.",
      highlights: [
        "Matches by euclidean distance between encodings and takes the minimum, not the first rough match.",
        "A 0.6 threshold: past that it would rather say \"no match\" than clock in the wrong person.",
        "Prevents duplicate entries — if someone already clocked in today, it won't write the line again.",
        "Draws the bounding box and name over the detected face for visual feedback."
      ]
    }
  },

  {
    id: "pedidos-restaurante",
    year: 2025,
    status: "shipped",
    category: "tools",
    featured: false,
    badge: "course",
    cover: "assets/img/pedidos-restaurante.svg",
    tags: ["Python", "Tkinter", "GUI"],
    entorno: "escritorio",
    links: {
      repo: "https://github.com/Fofiuxx/Proyectos-Python/tree/main/Python/Gestor%20de%20Restaurantes",
    },
    es: {
      title: "Sistema de Pedidos",
      tagline: "Toma la orden, calcula impuestos e imprime el recibo. El abuelo de mi POS actual.",
      description:
        "Aplicación de escritorio para tomar pedidos en un restaurante: menú de comidas, bebidas " +
        "y postres con casilla y cantidad por producto, cálculo de subtotales por categoría, " +
        "impuesto del 7 % y total. Genera el recibo con número y fecha, y lo guarda en disco. " +
        "Trae además una calculadora integrada para cuentas rápidas.",
      highlights: [
        "Las casillas de cantidad se activan y desactivan solas según lo que esté marcado, para que no se cuele un producto sin pedir.",
        "Recibo con numeración aleatoria, fecha, desglose por categoría, impuestos y total.",
        "Exporta el recibo a un archivo de texto con el diálogo de guardado del sistema.",
        "Fue mi primer contacto con la lógica de un punto de venta — el mismo problema que hoy resuelvo en producción para restaurantes reales."
      ]
    },
    en: {
      title: "Restaurant Ordering System",
      tagline: "Takes the order, computes tax, prints the receipt. The grandfather of my current POS.",
      description:
        "A desktop app for taking restaurant orders: a menu of food, drinks, and desserts with a " +
        "checkbox and quantity per item, per-category subtotals, 7% tax, and a grand total. " +
        "It generates a numbered, dated receipt and saves it to disk. It also bundles a small " +
        "calculator for quick arithmetic.",
      highlights: [
        "Quantity fields enable and disable themselves based on what's checked, so no item slips into the order unordered.",
        "Receipt with random numbering, date, per-category breakdown, tax, and total.",
        "Exports the receipt to a text file through the system save dialog.",
        "This was my first contact with point-of-sale logic — the same problem I now solve in production for real restaurants."
      ]
    }
  },

  {
    id: "invasion-espacial",
    year: 2025,
    status: "shipped",
    category: "game",
    featured: false,
    badge: "course",
    cover: "assets/img/invasion-espacial.svg",
    tags: ["Python", "Pygame", "Colisiones"],
    entorno: "escritorio",
    links: {
      repo: "https://github.com/Fofiuxx/Proyectos-Python/tree/main/Python/Juego%20Invasion%20Espacial",
    },
    es: {
      title: "Invasión Espacial",
      tagline: "Arcade clásico: ocho enemigos que bajan, una nave, y un puntaje que subir.",
      description:
        "Juego arcade al estilo Space Invaders hecho con Pygame. Ocho enemigos se mueven en " +
        "horizontal y descienden un escalón cada vez que tocan el borde; el jugador dispara desde " +
        "abajo. La detección de impactos usa la distancia entre la bala y el enemigo, y el juego " +
        "termina cuando alguno llega a la altura de la nave.",
      highlights: [
        "Detección de colisiones por distancia euclídea entre bala y enemigo.",
        "Los enemigos reaparecen arriba en posición aleatoria al ser destruidos.",
        "Puntaje en pantalla, música de fondo en bucle y pantalla de fin de juego.",
        "Fue mi primer bucle de juego completo — entrada, actualización, dibujado — el mismo esqueleto que uso hoy en Unity."
      ]
    },
    en: {
      title: "Space Invasion",
      tagline: "Classic arcade: eight enemies descending, one ship, and a score to push up.",
      description:
        "A Space Invaders-style arcade game built with Pygame. Eight enemies move horizontally and " +
        "drop a step each time they hit an edge; the player shoots from below. Hit detection uses " +
        "the distance between bullet and enemy, and the game ends when any enemy reaches the " +
        "ship's altitude.",
      highlights: [
        "Collision detection via euclidean distance between bullet and enemy.",
        "Destroyed enemies respawn at the top in a random position.",
        "On-screen score, looping background music, and a game-over screen.",
        "This was my first complete game loop — input, update, draw — the same skeleton I use in Unity today."
      ]
    }
  },

  /* --------------------------------------------------------
     PLANTILLA — copia esto para agregar un proyecto nuevo.
     Quita los // del inicio de cada línea para activarlo.
     --------------------------------------------------------
  {
    id: "mi-proyecto",
    year: 2026,
    status: "shipped",
    category: "tools",
    featured: false,
    cover: "assets/img/placeholder.svg",
    tags: ["Python", "CLI"],
    links: { repo: "https://github.com/TU-USUARIO/mi-proyecto" },
    es: {
      title: "Mi Proyecto",
      tagline: "Una línea que explique qué hace.",
      description: "Dos o tres frases sobre el problema que resuelve y cómo.",
      highlights: ["Cosa interesante uno.", "Cosa interesante dos."]
    },
    en: {
      title: "My Project",
      tagline: "One line explaining what it does.",
      description: "Two or three sentences about the problem it solves and how.",
      highlights: ["Interesting thing one.", "Interesting thing two."]
    }
  },
  */

];

/* Herramientas que aparecen en la sección "Sobre mí". */
window.STACK = [
  "C#", "ASP.NET Core", "TypeScript", "Node.js", "Express", "Unity",
  "Python", "Django", "OpenCV", "SQL Server", "MySQL", "SQLite",
  "PostgreSQL", "React", "Git", "Docker"
];
