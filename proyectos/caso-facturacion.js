/* ============================================================
   Textos y lógica de la página de caso de estudio.
   Reutiliza el diccionario general de js/i18n.js para la
   cabecera y el pie, y añade encima las claves de esta página.
   El idioma y el tema se comparten con el resto del sitio a
   través de las mismas claves de localStorage.
   ============================================================ */

(function () {
  "use strict";

  var LANG_KEY = "portfolio-lang";
  var THEME_KEY = "portfolio-theme";

  var PAGINA = {
    es: {
      "volver": "Volver a proyectos",

      "c.eyebrow": "Caso de estudio · Costa Rica",
      "c.titulo": "Un punto de venta que no se detiene cuando se cae el internet",
      "c.lead": "Facturación electrónica ante Hacienda para restaurantes. La decisión que define todo el sistema es dónde vive el servidor — y la respuesta no es la nube.",
      "c.meta.rol": "Rol",
      "c.meta.rolV": "Diseño y desarrollo",
      "c.meta.stack": "Stack",
      "c.meta.estado": "Estado",
      "c.meta.estadoV": "Completo y probado",

      "c.problema.t": "El problema",
      "c.problema.p1": "Un restaurante en Costa Rica está obligado a emitir comprobantes electrónicos y transmitirlos a Hacienda. La tentación es poner todo en la nube: un servidor, unas tablets conectadas, listo.",
      "c.problema.p2": "El problema aparece el día que se cae la fibra. Con el servidor en la nube, las tablets dejan de verse entre sí, los saloneros no pueden tomar pedidos, la caja no puede cobrar y la cocina no recibe comandas. Un corte de internet apaga el negocio entero — y no porque Hacienda esté inalcanzable, sino porque el restaurante perdió la capacidad de hablar consigo mismo.",

      "c.decision.t": "La decisión: el servidor va en el local",
      "c.decision.clave": "Con el servidor dentro del restaurante, perder internet solo corta a Hacienda. Los dispositivos se siguen viendo por el WiFi del local: se toman pedidos, se cobra y se imprime igual.",
      "c.decision.p1": "Lo único que se acumula es la transmisión al fisco, que se encola y se drena sola cuando vuelve la conexión. Eso reduce el problema del trabajo sin conexión de «reescribir la aplicación con service workers y almacenamiento en el dispositivo» a «una cola con reintentos» — una fracción del trabajo, y muchísima menos superficie donde equivocarse.",

      "c.diag.alt": "El servidor vive en el restaurante; la nube solo recibe copia y el envío a Hacienda sale del local",
      "c.diag.local": "EL RESTAURANTE",
      "c.diag.tablet": "Tablets",
      "c.diag.caja": "Caja",
      "c.diag.cocina": "Cocina",
      "c.diag.servidor": "Servidor local",
      "c.diag.escritor": "único que escribe",
      "c.diag.wifi": "WiFi del local",
      "c.diag.cola": "cola con reintentos",
      "c.diag.nube": "Nube",
      "c.diag.respaldo": "respaldo y reportes",
      "c.diag.directo": "directo",
      "c.diag.unaVia": "copia, una vía",
      "c.diag.nunca": "la nube nunca transmite",
      "c.diag.pie": "El local es el único que escribe. La nube recibe copia en una sola dirección y nunca aparece en el camino hacia Hacienda.",

      "c.estados.t": "Tres estados de red, no dos",
      "c.estados.p1": "«Con internet» y «sin internet» no alcanzan. Hay un tercer caso: hay internet pero la API de Hacienda no responde. Para el usuario los dos últimos se ven igual, pero se distinguen en el dígito de situación de la clave numérica del comprobante.",
      "c.estados.h1": "Estado",
      "c.estados.h2": "Qué pasa",
      "c.estados.h3": "Situación",
      "c.estados.r1a": "En línea",
      "c.estados.r1b": "Todo normal",
      "c.estados.r2a": "Hacienda caído",
      "c.estados.r2b": "Hay internet, el fisco no responde",
      "c.estados.r3a": "Sin internet",
      "c.estados.r3b": "Los dispositivos se ven entre sí; Hacienda inalcanzable",
      "c.estados.clave": "Confundir esos dos dígitos no es un detalle cosmético: es un error fiscal. El comprobante queda mal emitido aunque el cliente reciba su tiquete.",
      "c.estados.p2": "La venta nunca se bloquea. El comprobante se emite, se imprime y se entrega aunque Hacienda esté fuera de alcance — es válido, lleva su clave con la situación marcada. Y la cola es visible en la barra: cuántos comprobantes se emitieron y todavía no llegaron. Si ese contador se esconde, el negocio se entera cuando ya acumuló días.",

      "c.escritor.t": "Un solo escritor, y por qué",
      "c.escritor.p1": "La nube no es un servidor primario con el local de respaldo. Ese esquema obliga a sincronización bidireccional con resolución de conflictos, que es de lo más caro y frágil que se puede construir: dos lados escribiendo el mismo dato, y alguien teniendo que decidir quién gana.",
      "c.escritor.clave": "Regla: un solo escritor por tipo de dato. Con todo escribiendo en el local, la sincronización va en una dirección y no hay nada que fusionar.",
      "c.escritor.p2": "Si algún día hace falta editar el menú desde fuera del restaurante, la evolución natural es mover la configuración a la nube — repartir la autoridad por tipo de dato, nunca por dirección, de modo que cada registro conserve un único dueño.",
      "c.escritor.h": "Lo que la nube sí aporta",
      "c.escritor.l1": "Respaldo de comprobantes: conservarlos cinco años es obligación legal. Si el equipo del local se pierde y no hay respaldo, el problema pasa de técnico a legal.",
      "c.escritor.l2": "Reportes remotos para el dueño, sin tener que estar en el restaurante.",
      "c.escritor.l3": "Base para varios locales, si el negocio crece.",

      "c.inmutable.t": "Los comprobantes no se editan",
      "c.inmutable.p1": "Un comprobante emitido es un documento fiscal. Corregir un error editándolo no es una mala práctica: es falsear un registro. La forma correcta es anularlo con una nota de crédito, que deja rastro de qué pasó y cuándo.",
      "c.inmutable.p2": "Eso no se dejó como norma de equipo, que se olvida. Está impuesto por cuatro triggers en la base de datos: intentar borrar un comprobante o alterar su monto o sus líneas falla, venga la petición de donde venga. Lo que sí se puede mover es su estado ante Hacienda, que es lo único que legítimamente cambia después de emitido.",

      "c.pruebas.t": "Cómo sé que funciona",
      "c.pruebas.p1": "El proyecto trae tres suites. La tercera, qa.js, está escrita para buscar problemas y no para confirmar que las pruebas pasan: prueba precisión del dinero, concurrencia y entradas hostiles.",
      "c.pruebas.p2": "Ese aviso final está a propósito. Es una consulta que escala mal y todavía no importa — el sistema es para un restaurante con diez mesas, no doscientas. Dejarlo anotado vale más que arreglarlo hoy: cuando el problema llegue, ya está identificado.",

      "c.detalles.t": "Dos detalles que me gustaron",
      "c.detalles.h1": "No fingir que se transmitió",
      "c.detalles.p1": "Sin credenciales de Hacienda cargadas, el sistema no intenta transmitir ni marca nada como aceptado. Encola, registra el intento y dice exactamente por qué no envió. Un sistema que da por bueno lo que nunca salió es peor que uno que falla ruidosamente.",
      "c.detalles.h2": "HTTPS sin comprar un dominio",
      "c.detalles.p2": "Las tablets necesitan contexto seguro. Let's Encrypt no sirve: emite para dominios públicos, y este servidor a propósito no está en internet. La salida fue una autoridad certificadora propia, instalada una vez por tablet. Coste: cero.",

      "c.estado.t": "Estado actual",
      "c.estado.l1": "Cobro, firma XAdES, impresión térmica y cola de transmisión, probados de punta a punta.",
      "c.estado.l2": "Administración: menú, caja con arqueo, notas de crédito, usuarios y permisos por rol.",
      "c.estado.l3": "Respaldos comprimidos que se verifican abriéndolos y detectan corrupción antes de restaurar.",
      "c.estado.l4": "Falta la llave criptográfica de TRIBU-CR para transmitir en producción. Es un trámite ante Hacienda, no código pendiente.",

      "c.fin.p": "El código es de un cliente y no está publicado. Si querés ver más a fondo cualquier parte, escribime.",
      "c.fin.cta": "Escribime"
    },

    en: {
      "volver": "Back to projects",

      "c.eyebrow": "Case study · Costa Rica",
      "c.titulo": "A point of sale that doesn't stop when the internet does",
      "c.lead": "Electronic tax invoicing for restaurants in Costa Rica. The decision that shapes the whole system is where the server lives — and the answer isn't the cloud.",
      "c.meta.rol": "Role",
      "c.meta.rolV": "Design and development",
      "c.meta.stack": "Stack",
      "c.meta.estado": "Status",
      "c.meta.estadoV": "Complete and tested",

      "c.problema.t": "The problem",
      "c.problema.p1": "A restaurant in Costa Rica is required to issue electronic invoices and transmit them to the tax authority. The tempting answer is to put everything in the cloud: one server, a few connected tablets, done.",
      "c.problema.p2": "The trouble shows up the day the fiber goes down. With the server in the cloud, the tablets can no longer see each other, waiters can't take orders, the register can't charge, and the kitchen gets no tickets. An internet outage shuts down the entire business — not because the tax authority is unreachable, but because the restaurant lost the ability to talk to itself.",

      "c.decision.t": "The decision: the server lives on site",
      "c.decision.clave": "With the server inside the restaurant, losing internet only cuts off the tax authority. Devices still reach each other over the local WiFi: orders are taken, payments are charged, tickets print.",
      "c.decision.p1": "The only thing that piles up is transmission to the tax authority, which queues and drains itself once the connection returns. That reduces the offline problem from \"rewrite the app with service workers and on-device storage\" to \"a queue with retries\" — a fraction of the work, and far less surface to get wrong.",

      "c.diag.alt": "The server lives in the restaurant; the cloud only receives a copy and transmission to the tax authority leaves from the local server",
      "c.diag.local": "THE RESTAURANT",
      "c.diag.tablet": "Tablets",
      "c.diag.caja": "Register",
      "c.diag.cocina": "Kitchen",
      "c.diag.servidor": "Local server",
      "c.diag.escritor": "the only writer",
      "c.diag.wifi": "local WiFi",
      "c.diag.cola": "queue with retries",
      "c.diag.nube": "Cloud",
      "c.diag.respaldo": "backup and reports",
      "c.diag.directo": "direct",
      "c.diag.unaVia": "copy, one way",
      "c.diag.nunca": "the cloud never transmits",
      "c.diag.pie": "The local server is the only writer. The cloud receives a one-way copy and never appears on the path to the tax authority.",

      "c.estados.t": "Three network states, not two",
      "c.estados.p1": "\"Online\" and \"offline\" aren't enough. There's a third case: the internet works but the tax authority's API doesn't answer. To the user the last two look identical, but they differ in the situation digit of the invoice's numeric key.",
      "c.estados.h1": "State",
      "c.estados.h2": "What happens",
      "c.estados.h3": "Situation",
      "c.estados.r1a": "Online",
      "c.estados.r1b": "Business as usual",
      "c.estados.r2a": "Tax authority down",
      "c.estados.r2b": "Internet works, the authority doesn't answer",
      "c.estados.r3a": "Offline",
      "c.estados.r3b": "Devices reach each other; the authority is unreachable",
      "c.estados.clave": "Mixing up those two digits isn't cosmetic: it's a tax error. The invoice is issued incorrectly even though the customer gets their receipt.",
      "c.estados.p2": "A sale is never blocked. The invoice is issued, printed and handed over even when the tax authority is out of reach — it's valid, carrying its key with the situation marked. And the queue is visible in the status bar: how many invoices were issued and haven't arrived yet. Hide that counter and the business finds out only after days have piled up.",

      "c.escritor.t": "One writer, and why",
      "c.escritor.p1": "The cloud is not a primary server with the local one as backup. That arrangement forces two-way sync with conflict resolution, which is among the most expensive and fragile things you can build: two sides writing the same record, and someone having to decide who wins.",
      "c.escritor.clave": "Rule: one writer per kind of data. With everything writing locally, sync runs in one direction and there is nothing to merge.",
      "c.escritor.p2": "If editing the menu from outside the restaurant ever becomes necessary, the natural evolution is to move configuration to the cloud — splitting authority by kind of data, never by direction, so every record keeps a single owner.",
      "c.escritor.h": "What the cloud does contribute",
      "c.escritor.l1": "Invoice archive: keeping them for five years is a legal obligation. If the on-site machine is lost and there's no backup, the problem stops being technical and becomes legal.",
      "c.escritor.l2": "Remote reports for the owner, without having to be at the restaurant.",
      "c.escritor.l3": "A foundation for multiple locations, if the business grows.",

      "c.inmutable.t": "Invoices are not edited",
      "c.inmutable.p1": "An issued invoice is a tax document. Fixing a mistake by editing it isn't bad practice: it's falsifying a record. The correct way is to void it with a credit note, which leaves a trail of what happened and when.",
      "c.inmutable.p2": "That wasn't left as a team convention, which gets forgotten. It's enforced by four database triggers: attempting to delete an invoice or alter its amount or line items fails, no matter where the request comes from. What can move is its status with the tax authority — the one thing that legitimately changes after issuing.",

      "c.pruebas.t": "How I know it works",
      "c.pruebas.p1": "The project ships three suites. The third, qa.js, is written to hunt for problems rather than confirm that tests pass: it exercises money precision, concurrency and hostile input.",
      "c.pruebas.p2": "That final warning is deliberate. It's a query that scales poorly and doesn't matter yet — the system is for a restaurant with ten tables, not two hundred. Writing it down is worth more than fixing it today: when the problem arrives, it's already identified.",

      "c.detalles.t": "Two details I liked",
      "c.detalles.h1": "Never pretend it was transmitted",
      "c.detalles.p1": "With no tax-authority credentials loaded, the system doesn't attempt to transmit and doesn't mark anything as accepted. It queues, logs the attempt, and states exactly why it didn't send. A system that assumes success for something that never left is worse than one that fails loudly.",
      "c.detalles.h2": "HTTPS without buying a domain",
      "c.detalles.p2": "The tablets need a secure context. Let's Encrypt is no help: it issues for public domains, and this server is deliberately off the internet. The answer was a self-issued certificate authority, installed once per tablet. Cost: zero.",

      "c.estado.t": "Where it stands",
      "c.estado.l1": "Charging, XAdES signing, thermal printing and the transmission queue, tested end to end.",
      "c.estado.l2": "Administration: menu, register with cash reconciliation, credit notes, users and role permissions.",
      "c.estado.l3": "Compressed backups that verify themselves by opening and catch corruption before restoring.",
      "c.estado.l4": "Awaiting the TRIBU-CR cryptographic key to transmit in production. That's paperwork with the tax authority, not pending code.",

      "c.fin.p": "The code belongs to a client and isn't published. If you'd like to go deeper on any part of it, get in touch.",
      "c.fin.cta": "Get in touch"
    }
  };

  function detectarIdioma() {
    var guardado = localStorage.getItem(LANG_KEY);
    if (guardado === "es" || guardado === "en") return guardado;
    return (navigator.language || "es").toLowerCase().indexOf("en") === 0 ? "en" : "es";
  }

  function detectarTema() {
    var guardado = localStorage.getItem(THEME_KEY);
    if (guardado === "dark" || guardado === "light") return guardado;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function aplicarIdioma(lang) {
    // El diccionario de la página se apila sobre el general, que trae
    // las claves de la cabecera y el pie.
    var general = (window.I18N && window.I18N[lang]) || {};
    var propio = PAGINA[lang] || {};

    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (nodo) {
      var clave = nodo.getAttribute("data-i18n");
      var texto = propio[clave] !== undefined ? propio[clave] : general[clave];
      if (texto !== undefined) nodo.textContent = texto;
    });

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.lang === lang);
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });

    document.title = lang === "en"
      ? "Costa Rica E-Invoicing — Case study"
      : "Facturación Electrónica CR — Caso de estudio";
  }

  function aplicarTema(tema) {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem(THEME_KEY, tema);
  }

  function iniciar() {
    aplicarTema(detectarTema());
    aplicarIdioma(detectarIdioma());
    document.getElementById("year").textContent = new Date().getFullYear();

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () { aplicarIdioma(b.dataset.lang); });
    });

    document.getElementById("theme-toggle").addEventListener("click", function () {
      var actual = document.documentElement.getAttribute("data-theme");
      aplicarTema(actual === "dark" ? "light" : "dark");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
