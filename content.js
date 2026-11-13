/* ============================================================
   CONTENU DU PORTFOLIO — modifier ici le texte (FR / EN / IT).
   Chaque texte existe en 3 langues : { fr: "...", en: "...", it: "..." }
   Dans les textes, **mot** = mot mis en valeur (gras + soulignement animé).
   ============================================================ */

const GH = "https://github.com/FerdawesAbdessalem/";

window.CONTENT = {

  /* ---------- Textes fixes de la page ---------- */
  ui: {
    "skip":        { fr: "Aller au contenu", en: "Skip to content", it: "Vai al contenuto" },
    "nav.work":    { fr: "Projets", en: "Work", it: "Progetti" },
    "nav.path":    { fr: "Parcours", en: "Path", it: "Percorso" },
    "nav.hire":    { fr: "Me recruter", en: "Hire me", it: "Assumimi" },
    "nav.cv":      { fr: "CV", en: "CV", it: "CV" },
    "nav.contact": { fr: "Contact", en: "Contact", it: "Contatti" },
    "menu":        { fr: "Menu", en: "Menu", it: "Menu" },
    "theme":       { fr: "Changer de thème", en: "Toggle theme", it: "Cambia tema" },

    "hero.kicker": {
      fr: "Ferdaoues Abdessalem — ingénieure logiciel · Palerme, Italie",
      en: "Ferdaoues Abdessalem — software engineer · Palermo, Italy",
      it: "Ferdaoues Abdessalem — ingegnere del software · Palermo, Italia"
    },
    /* Grand titre : chaque mot apparaît l'un après l'autre */
    "hero.title": {
      fr: "Du backend à l'interface",
      en: "From backend to interface",
      it: "Dal backend all'interfaccia"
    },
    "hero.summary": {
      fr: "Ingénieure en développement logiciel, spécialisée dans la conception et le développement de solutions backend et full stack. Expérience en architecture et développement d'API REST, automatisation des tests et intégration continue (CI/CD), avec une maîtrise de plusieurs technologies et frameworks, notamment Symfony, Django et Angular.",
      en: "Software engineer specialised in designing and building backend and full-stack solutions. Experienced in REST API architecture and development, test automation and continuous integration (CI/CD), with hands-on command of several technologies and frameworks, including Symfony, Django and Angular.",
      it: "Ingegnere dello sviluppo software, specializzata nella progettazione e nello sviluppo di soluzioni backend e full stack. Esperienza nell'architettura e nello sviluppo di API REST, nell'automazione dei test e nell'integrazione continua (CI/CD), con padronanza di diverse tecnologie e framework, tra cui Symfony, Django e Angular."
    },
    "hero.lead": {
      fr: "Ingénieure logiciel : API REST avec Symfony et Django, interfaces Angular, tests automatisés et CI/CD.",
      en: "Software engineer: REST APIs with Symfony and Django, Angular interfaces, automated testing and CI/CD.",
      it: "Ingegnere del software: API REST con Symfony e Django, interfacce Angular, test automatizzati e CI/CD."
    },
    "hero.status": {
      fr: "Disponible immédiatement · tous contrats · toute l'UE",
      en: "Available now · any contract · anywhere in the EU",
      it: "Disponibile da subito · qualsiasi contratto · in tutta l'UE"
    },
    "hero.work":   { fr: "Voir mes projets", en: "See the work", it: "Vedi i progetti" },
    "hero.cv":     { fr: "Lire le CV", en: "Read the CV", it: "Leggi il CV" },
    "copy":        { fr: "Copier l'adresse", en: "Copy address", it: "Copia indirizzo" },
    "copied":      { fr: "Copié ✓", en: "Copied ✓", it: "Copiato ✓" },
    /* Texte animé (machine à écrire) sous le titre */
    "hero.typingPrefix": { fr: "Je conçois", en: "I build", it: "Realizzo" },
    "hero.typing": {
      fr: ["des API REST robustes", "des applications full stack", "des tests automatisés fiables", "des pipelines CI/CD", "des solutions pilotées par l'IA"],
      en: ["robust REST APIs", "full-stack applications", "reliable automated tests", "CI/CD pipelines", "AI-powered solutions"],
      it: ["API REST robuste", "applicazioni full stack", "test automatizzati affidabili", "pipeline CI/CD", "soluzioni basate sull'IA"]
    },

    "proof": {
      fr: "Réalisations chez AZERTY UI",
      en: "Work delivered at AZERTY UI",
      it: "Realizzazioni presso AZERTY UI"
    },
    "clients":     { fr: "Réalisé pour", en: "Built for", it: "Realizzato per" },

    "glance.title":{ fr: "En un coup d'œil", en: "At a glance", it: "In breve" },

    "work.title":  { fr: "Projets choisis", en: "Selected work", it: "Progetti scelti" },
    "work.filter": { fr: "Filtrer par techno", en: "Filter by stack", it: "Filtra per tecnologia" },
    "work.all":    { fr: "Tout", en: "All", it: "Tutti" },
    "work.did":    { fr: "Ce que j'ai fait", en: "What I did", it: "Cosa ho fatto" },
    "work.more":   { fr: "Autres projets", en: "More projects", it: "Altri progetti" },
    "film.prev":   { fr: "Écran précédent", en: "Previous screen", it: "Schermata precedente" },
    "film.next":   { fr: "Écran suivant", en: "Next screen", it: "Schermata successiva" },
    "film.go":     { fr: "Aller à l'écran", en: "Go to screen", it: "Vai alla schermata" },
    "film.open":   { fr: "Agrandir", en: "Enlarge", it: "Ingrandisci" },
    "close":       { fr: "Fermer", en: "Close", it: "Chiudi" },
    "link.site":   { fr: "Voir le site", en: "Live site", it: "Sito web" },
    "link.code":   { fr: "Code source", en: "Source code", it: "Codice" },
    "link.cert":   { fr: "Voir", en: "View", it: "Vedi" },

    "pipe.title":  { fr: "Du commit à la production", en: "From commit to production", it: "Dal commit alla produzione" },
    "pipe.text": {
      fr: "Ma façon de livrer : chaque changement passe par un pipeline automatisé — build, tests unitaires, d'intégration et end-to-end, rapport de qualité, puis déploiement.",
      en: "How I ship: every change goes through an automated pipeline — build, unit, integration and end-to-end tests, a quality report, then deployment.",
      it: "Il mio modo di rilasciare: ogni modifica passa da una pipeline automatizzata — build, test unitari, di integrazione ed end-to-end, report di qualità, poi rilascio."
    },
    "pipe.s1": { fr: "Commit", en: "Commit", it: "Commit" },
    "pipe.s2": { fr: "Build", en: "Build", it: "Build" },
    "pipe.s3": { fr: "Tests", en: "Tests", it: "Test" },
    "pipe.s4": { fr: "Rapport QA", en: "QA report", it: "Report QA" },
    "pipe.s5": { fr: "Déploiement", en: "Deploy", it: "Rilascio" },

    "path.title":  { fr: "Mon parcours", en: "The path so far", it: "Il mio percorso" },
    "edu.title":   { fr: "Formation", en: "Education", it: "Formazione" },
    "cert.title":  { fr: "Certifications", en: "Certifications", it: "Certificazioni" },

    "hire.title":  { fr: "Me recruter", en: "Hire me", it: "Assumimi" },
    "hire.kicker": { fr: "Pour les recruteurs", en: "For recruiters and hiring managers", it: "Per recruiter e responsabili" },
    "hire.lead":   { fr: "Une ingénieure prête à rejoindre votre équipe", en: "An engineer ready to join your team", it: "Un'ingegnere pronta a entrare nel tuo team" },
    "hire.cvfr":   { fr: "CV · français", en: "CV · French", it: "CV · francese" },
    "hire.cven":   { fr: "CV · anglais", en: "CV · English", it: "CV · inglese" },
    "hire.cvit":   { fr: "CV · italien", en: "CV · Italian", it: "CV · italiano" },

    "contact.title": { fr: "Travaillons ensemble", en: "Let's work together", it: "Lavoriamo insieme" },
    "contact.text": {
      fr: "Disponible dès maintenant pour des postes d'ingénieure logiciel backend, full stack ou QA, partout dans l'UE. Écrivez-moi, je réponds rapidement.",
      en: "Available now for backend, full-stack or QA software engineering roles anywhere in the EU. Write to me — I reply quickly.",
      it: "Disponibile da subito per posizioni di ingegnere del software backend, full stack o QA in tutta l'UE. Scrivetemi, rispondo rapidamente."
    }
  },

  /* ---------- CV à télécharger selon la langue ---------- */
  cv: {
    fr: "cv/Ferdaoues_Abdessalem_CV_FR.pdf",
    en: "cv/Ferdaoues_Abdessalem_Resume.pdf",
    it: "cv/Ferdaoues_Abdessalem_CV_IT.pdf"
  },

  /* ---------- Réalisations clés (4 cartes sous le hero) ---------- */
  proof: [
    { k: "API", c: "violet",
      t: { fr: "API REST Symfony", en: "Symfony REST APIs", it: "API REST Symfony" },
      d: { fr: "Pour chalet-montagne.com, une plateforme de milliers de chalets.", en: "For chalet-montagne.com, a platform of thousands of chalets.", it: "Per chalet-montagne.com, una piattaforma con migliaia di chalet." } },
    { k: "QA", c: "teal",
      t: { fr: "Tests automatisés", en: "Automated testing", it: "Test automatizzati" },
      d: { fr: "Unitaires, d'intégration et E2E, avec rapports Allure dans la CI.", en: "Unit, integration and E2E, with Allure reports in CI.", it: "Unitari, di integrazione ed E2E, con report Allure in CI." } },
    { k: "OCR", c: "coral",
      t: { fr: "Backend Django + OCR", en: "Django backend + OCR", it: "Backend Django + OCR" },
      d: { fr: "Lecture et scoring automatiques des dossiers locataires.", en: "Automatic reading and scoring of tenant files.", it: "Lettura e punteggio automatici dei fascicoli degli inquilini." } },
    { k: "IA", c: "amber",
      t: { fr: "Cartographie métier par IA", en: "AI business mapping", it: "Mappa aziendale con IA" },
      d: { fr: "Synapsystem : code → Claude (LLM) → graphe Neo4j.", en: "Synapsystem: code → Claude (LLM) → Neo4j graph.", it: "Synapsystem: codice → Claude (LLM) → grafo Neo4j." } }
  ],

  /* ---------- Logos « Réalisé pour » ---------- */
  clients: [
    { name: "AZERTY UI", logo: "assets/logos/azertyui.webp", url: "https://azertyui.fr/", label: "AZERTY UI", dark: true },
    { name: "Chalet Montagne", logo: "assets/logos/chalet-montagne.svg", url: "https://www.chalet-montagne.com/", dark: true },
    { name: "IT Station", label: "IT Station" }
  ],

  /* ---------- Tableau « En un coup d'œil » ---------- */
  glance: [
    { k: { fr: "Rôle", en: "Role", it: "Ruolo" },
      v: { fr: "Ingénieure logiciel — Backend, Full Stack & QA", en: "Software engineer — Backend, Full Stack & QA", it: "Ingegnere del software — Backend, Full Stack e QA" } },
    { k: { fr: "Backend", en: "Backend", it: "Backend" },
      v: { fr: "Symfony · PHP · Django · Python · API REST", en: "Symfony · PHP · Django · Python · REST APIs", it: "Symfony · PHP · Django · Python · API REST" } },
    { k: { fr: "Frontend & mobile", en: "Frontend & mobile", it: "Frontend e mobile" },
      v: { fr: "Angular · TypeScript · Next.js · Flutter", en: "Angular · TypeScript · Next.js · Flutter", it: "Angular · TypeScript · Next.js · Flutter" } },
    { k: { fr: "Données", en: "Data", it: "Dati" },
      v: { fr: "MySQL · PostgreSQL · MongoDB · Neo4j · SQLite", en: "MySQL · PostgreSQL · MongoDB · Neo4j · SQLite", it: "MySQL · PostgreSQL · MongoDB · Neo4j · SQLite" } },
    { k: { fr: "Tests & qualité", en: "Testing & quality", it: "Test e qualità" },
      v: { fr: "Tests unitaires, d'intégration et E2E · Playwright · Allure Report", en: "Unit, integration and E2E tests · Playwright · Allure Report", it: "Test unitari, di integrazione ed E2E · Playwright · Allure Report" } },
    { k: { fr: "DevOps", en: "Ops", it: "DevOps" },
      v: { fr: "GitLab CI/CD · Docker · OpenShift · Git · Linux", en: "GitLab CI/CD · Docker · OpenShift · Git · Linux", it: "GitLab CI/CD · Docker · OpenShift · Git · Linux" } },
    { k: { fr: "IA", en: "AI", it: "IA" },
      v: { fr: "LLM (Claude) · TensorFlow · scikit-learn · OCR", en: "LLM (Claude) · TensorFlow · scikit-learn · OCR", it: "LLM (Claude) · TensorFlow · scikit-learn · OCR" } },
    { k: { fr: "Formation", en: "Education", it: "Formazione" },
      v: { fr: "Diplôme d'ingénieur en télécommunications, ENISo Sousse (2025) · prix du meilleur projet de fin d'études", en: "Telecommunications engineering degree, ENISo Sousse (2025) · Best Final-Year Project award", it: "Laurea in Ingegneria delle Telecomunicazioni, ENISo Sousse (2025) · premio per il miglior progetto di tesi" } }
  ],

  /* ---------- Grands projets (avec « film » d'écrans) ----------
     film.device : "laptop" (captures larges) ou "phone" (captures de téléphone)
     film.frames : [image, légende]  — l'ordre = l'ordre du film          */
  cases: [
    { id: "chalet", name: "chalet-montagne.com", stack: ["symfony", "tests"],
      meta: {
        fr: "Ingénieure logiciel · équipe AZERTY UI · 2025 – 2026",
        en: "Software engineer · AZERTY UI team · 2025 – 2026",
        it: "Ingegnere del software · team AZERTY UI · 2025 – 2026"
      },
      desc: {
        fr: "Plateforme française de location saisonnière à la montagne : des milliers de chalets, appartements et studios loués en direct par leurs propriétaires. Site en production, développé en équipe chez AZERTY UI.",
        en: "A French mountain holiday-rental platform: thousands of chalets, apartments and studios rented directly from their owners. A live production site, built as a team at AZERTY UI.",
        it: "Piattaforma francese di affitti stagionali in montagna: migliaia di chalet, appartamenti e monolocali affittati direttamente dai proprietari. Sito in produzione, sviluppato in team presso AZERTY UI."
      },
      tags: ["Symfony", "PHP", "MySQL", "Doctrine", "Playwright", "Allure", "GitLab CI"],
      site: "https://www.chalet-montagne.com/",
      logo: "assets/logos/chalet-montagne.svg",
      pills: ["Symfony", "MySQL", "Playwright"],
      flow: [["fr:Navigateur|en:Browser|it:Browser", "client"], ["API REST · Symfony", "api"], ["MySQL", "db"], ["Tests · Allure", "qa"]],
      film: { device: "laptop", frames: [
        ["assets/work/chalet/1.webp", { fr: "Accueil — recherche par destination, dates et voyageurs", en: "Home — search by destination, dates and guests", it: "Home — ricerca per destinazione, date e ospiti" }],
        ["assets/work/chalet/2.webp", { fr: "Locations d'exception", en: "Exceptional rentals", it: "Affitti d'eccezione" }],
        ["assets/work/chalet/3.webp", { fr: "Dernières minutes — promotions", en: "Last-minute deals", it: "Last minute — promozioni" }],
        ["assets/work/chalet/4.webp", { fr: "Pourquoi choisir Chalet Montagne", en: "Why choose Chalet Montagne", it: "Perché scegliere Chalet Montagne" }],
        ["assets/work/chalet/5.webp", { fr: "Liste des hébergements avec filtres", en: "Listings with filters", it: "Elenco degli alloggi con filtri" }],
        ["assets/work/chalet/6.webp", { fr: "Recherche sur carte", en: "Map search", it: "Ricerca su mappa" }]
      ], note: { fr: "écrans réels du site en production", en: "real screens of the live site", it: "schermate reali del sito in produzione" } } },

    { id: "secure", name: "Secure Appart", stack: ["django", "ai", "mobile"],
      meta: {
        fr: "Projet de fin d'études · AZERTY UI · 2025",
        en: "Final-year project · AZERTY UI · 2025",
        it: "Progetto di tesi · AZERTY UI · 2025"
      },
      badge: { fr: "🏆 Meilleur projet de fin d'études — ENISo 2025", en: "🏆 Best Final-Year Project — ENISo 2025", it: "🏆 Miglior progetto di tesi — ENISo 2025" },
      desc: {
        fr: "Plateforme de location immobilière assistée par IA : le locataire dépose ses justificatifs depuis l'application mobile, le backend les lit, les vérifie et calcule un score de dossier pour le propriétaire.",
        en: "An AI-assisted rental platform: tenants upload their documents from the mobile app, and the backend reads, checks and scores the application for the landlord.",
        it: "Piattaforma di locazione assistita da IA: l'inquilino carica i documenti dall'app mobile, il backend li legge, li verifica e calcola un punteggio del fascicolo per il proprietario."
      },
      tags: ["Django", "Python", "MongoDB", "Tesseract OCR", "Random Forest", "Flutter", "Docker"],
      repos: [
        [{ fr: "Code API Django", en: "Django API code", it: "Codice API Django" }, GH + "secure-appart-api"],
        [{ fr: "Code app Flutter", en: "Flutter app code", it: "Codice app Flutter" }, GH + "secure-appart-mobile"]
      ],
      pills: ["Django", "OCR", "MongoDB"],
      flow: [["fr:Justificatif|en:Document|it:Documento", "client"], ["OCR · Tesseract", "api"], ["Random Forest", "ai"], ["fr:Score du dossier|en:Application score|it:Punteggio", "qa"]],
      film: { device: "phone", frames: [
        ["assets/work/secure-appart/new-1.webp", { fr: "Connexion", en: "Sign in", it: "Accesso" }],
        ["assets/work/secure-appart/new-2.webp", { fr: "Création de compte", en: "Sign up", it: "Registrazione" }],
        ["assets/work/secure-appart/new-3.webp", { fr: "Vérification de l'e-mail par code", en: "E-mail verification code", it: "Verifica e-mail con codice" }],
        ["assets/work/secure-appart/new-5.webp", { fr: "Choix du profil", en: "Choose a profile", it: "Scelta del profilo" }],
        ["assets/work/secure-appart/new-9.webp", { fr: "Préférences de recherche", en: "Search preferences", it: "Preferenze di ricerca" }],
        ["assets/work/secure-appart/new-6.webp", { fr: "Dépôt de la pièce d'identité", en: "ID document upload", it: "Caricamento documento d'identità" }],
        ["assets/work/secure-appart/new-7.webp", { fr: "Score du dossier calculé par l'IA", en: "AI-computed application score", it: "Punteggio calcolato dall'IA" }],
        ["assets/work/secure-appart/new-8.webp", { fr: "Accueil — dernières annonces", en: "Home — latest listings", it: "Home — ultimi annunci" }],
        ["assets/work/secure-appart/new-10.webp", { fr: "Propositions de locataires pour le propriétaire", en: "Tenant proposals for the owner", it: "Proposte di inquilini per il proprietario" }],
        ["assets/work/secure-appart/new-4.webp", { fr: "Mot de passe oublié", en: "Forgot password", it: "Password dimenticata" }]
      ], note: { fr: "écrans réels de l'application mobile", en: "real screens of the mobile app", it: "schermate reali dell'app mobile" } } },

    { id: "synap", name: "Synapsystem", stack: ["ai", "django"],
      meta: {
        fr: "Ingénieure logiciel · AZERTY UI · 2026",
        en: "Software engineer · AZERTY UI · 2026",
        it: "Ingegnere del software · AZERTY UI · 2026"
      },
      desc: {
        fr: "Gestion des connaissances métier : Synapsystem lit le code et les documents d'une entreprise, en extrait règles de gestion et processus, les fait valider par les équipes, puis répond aux questions avec un assistant IA.",
        en: "Business knowledge management: Synapsystem reads a company's code and documents, extracts business rules and processes, has teams validate them, then answers questions through an AI assistant.",
        it: "Gestione della conoscenza aziendale: Synapsystem legge il codice e i documenti di un'azienda, ne estrae regole di business e processi, li fa validare dai team e risponde alle domande con un assistente IA."
      },
      tags: ["Claude (LLM)", "Neo4j", "Python", "Next.js", "Docker"],
      site: "https://synapsystem.azertyui.fr/",
      logo: "assets/logos/synapsystem.svg",
      pills: ["Claude", "Neo4j", "Next.js"],
      flow: [["fr:Code & docs|en:Code & docs|it:Codice e doc", "client"], ["Claude · LLM", "ai"], ["Neo4j", "db"], ["fr:Assistant IA|en:AI assistant|it:Assistente IA", "qa"]],
      film: { device: "laptop", frames: [
        ["assets/work/synapsystem/1.webp", { fr: "Accueil — accès anticipé", en: "Home — early access", it: "Home — accesso anticipato" }],
        ["assets/work/synapsystem/2.webp", { fr: "Comment ça marche", en: "How it works", it: "Come funziona" }],
        ["assets/work/synapsystem/3.webp", { fr: "Sources prises en charge", en: "Supported sources", it: "Fonti supportate" }],
        ["assets/work/synapsystem/4.webp", { fr: "Ce que vous obtenez", en: "What you get", it: "Cosa ottieni" }],
        ["assets/work/synapsystem/5.webp", { fr: "Connexion", en: "Sign in", it: "Accesso" }]
      ], note: { fr: "écrans réels du site", en: "real screens of the site", it: "schermate reali del sito" } } },

    { id: "mfbuy", name: "M&F Buy", stack: ["symfony", "tests"],
      meta: {
        fr: "Projet personnel · 2022",
        en: "Personal project · 2022",
        it: "Progetto personale · 2022"
      },
      desc: {
        fr: "Boutique en ligne de matériel réseau (routeurs, switches, Wi-Fi, sécurité) : catalogue, panier, commande, espace client et back-office, en PHP 8 sans framework.",
        en: "Online store for network equipment (routers, switches, Wi-Fi, security): catalogue, cart, checkout, customer area and back office, in framework-free PHP 8.",
        it: "Negozio online di apparecchiature di rete (router, switch, Wi-Fi, sicurezza): catalogo, carrello, ordini, area clienti e back office, in PHP 8 senza framework."
      },
      tags: ["PHP 8", "MySQL", "PDO", "PHPUnit", "Docker", "GitHub Actions"],
      repos: [[{ fr: "Code source", en: "Source code", it: "Codice" }, GH + "OnlineShope"]],
      pills: ["PHP 8", "MySQL", "PHPUnit"],
      flow: [["fr:Client|en:Customer|it:Cliente", "client"], ["fr:Contrôleurs PHP|en:PHP controllers|it:Controller PHP", "api"], ["MySQL · PDO", "db"], ["fr:Tests PHPUnit|en:PHPUnit tests|it:Test PHPUnit", "qa"]],
      film: { device: "laptop", frames: [
        ["assets/work/mfbuy/1.webp", { fr: "Accueil — catégories et sélection", en: "Home — categories and featured products", it: "Home — categorie e selezione" }],
        ["assets/work/mfbuy/2.webp", { fr: "Catalogue avec filtres et tri", en: "Catalogue with filters and sorting", it: "Catalogo con filtri e ordinamento" }],
        ["assets/work/mfbuy/3.webp", { fr: "Fiche produit et stock en temps réel", en: "Product page with live stock", it: "Scheda prodotto e stock in tempo reale" }],
        ["assets/work/mfbuy/4.webp", { fr: "Panier", en: "Cart", it: "Carrello" }],
        ["assets/work/mfbuy/5.webp", { fr: "Suivi de commande client", en: "Customer order tracking", it: "Tracciamento ordine" }],
        ["assets/work/mfbuy/6.webp", { fr: "Back-office — tableau de bord", en: "Back office — dashboard", it: "Back office — dashboard" }],
        ["assets/work/mfbuy/7.webp", { fr: "Back-office — gestion des produits", en: "Back office — product management", it: "Back office — gestione prodotti" }],
        ["assets/work/mfbuy/8.webp", { fr: "Back-office — détail et statut d'une commande", en: "Back office — order detail and status", it: "Back office — dettaglio e stato ordine" }]
      ], note: { fr: "écrans réels de l'application", en: "real screens of the application", it: "schermate reali dell'applicazione" } } },

    { id: "wirdi", name: "WirdiApp", stack: ["mobile", "tests"],
      meta: {
        fr: "Projet personnel · 2024",
        en: "Personal project · 2024",
        it: "Progetto personale · 2024"
      },
      desc: {
        fr: "Application de suivi de mémorisation du Coran pour les associations : le superviseur organise les halaqat, les programmes et les examens, chaque élève suit sa progression depuis son téléphone. Interface arabe, de droite à gauche.",
        en: "Qur'an memorisation tracking app for associations: the supervisor organises study circles, programmes and exams, and each student follows their progress from their phone. Arabic, right-to-left interface.",
        it: "App di monitoraggio della memorizzazione del Corano per le associazioni: il supervisore organizza gruppi, programmi ed esami, ogni studente segue i propri progressi dal telefono. Interfaccia araba, da destra a sinistra."
      },
      tags: ["Flutter", "Dart", "Provider", "Material 3", "RTL"],
      repos: [[{ fr: "Code source", en: "Source code", it: "Codice" }, GH + "Education_APP"]],
      pills: ["Flutter", "Dart", "RTL"],
      flow: [["fr:Superviseur|en:Supervisor|it:Supervisore", "client"], ["fr:Programmes & examens|en:Programmes & exams|it:Programmi ed esami", "api"], ["fr:Stockage local|en:Local storage|it:Archiviazione locale", "db"], ["fr:Suivi élève|en:Student tracking|it:Monitoraggio studente", "qa"]],
      film: { device: "phone", frames: [
        ["assets/work/wirdi/1.webp",  { fr: "Accueil — choix de l'espace", en: "Welcome — choose a space", it: "Benvenuto — scelta dell'area" }],
        ["assets/work/wirdi/2.webp",  { fr: "Tableau de bord du superviseur", en: "Supervisor dashboard", it: "Dashboard del supervisore" }],
        ["assets/work/wirdi/3.webp",  { fr: "Élèves et progression", en: "Students and progress", it: "Studenti e avanzamento" }],
        ["assets/work/wirdi/4.webp",  { fr: "Fiche élève — programmes et examens", en: "Student page — programmes and exams", it: "Scheda studente — programmi ed esami" }],
        ["assets/work/wirdi/5.webp",  { fr: "Programmes de mémorisation", en: "Memorisation programmes", it: "Programmi di memorizzazione" }],
        ["assets/work/wirdi/6.webp",  { fr: "Examens et résultats", en: "Exams and results", it: "Esami e risultati" }],
        ["assets/work/wirdi/7.webp",  { fr: "Notifications d'activité", en: "Activity notifications", it: "Notifiche di attività" }],
        ["assets/work/wirdi/8.webp",  { fr: "Connexion élève", en: "Student sign-in", it: "Accesso studente" }],
        ["assets/work/wirdi/9.webp",  { fr: "Accueil élève — mon wird", en: "Student home — my wird", it: "Home studente — il mio wird" }],
        ["assets/work/wirdi/10.webp", { fr: "Mes examens", en: "My exams", it: "I miei esami" }]
      ], note: { fr: "écrans réels de l'application", en: "real screens of the app", it: "schermate reali dell'app" } } }
  ],

  /* Filtres des projets : id → libellé */
  stacks: {
    symfony: "PHP · Symfony",
    django:  "Python · Django",
    ai:      { fr: "IA", en: "AI", it: "IA" },
    mobile:  "Mobile · Flutter",
    tests:   { fr: "Tests & QA", en: "Testing & QA", it: "Test e QA" }
  },

  /* ---------- Autres projets (cartes) ---------- */
  projects: [
    { name: "Eyes Open", year: "2024", stack: ["ai", "mobile"],
      kind: { fr: "Application d'assistance par reconnaissance d'objets", en: "Assistive object-recognition app", it: "App assistiva di riconoscimento oggetti" },
      desc: {
        fr: "Assistant pour personnes malvoyantes : la caméra reconnaît les objets sur le téléphone et les annonce à voix haute, avec leur position (gauche, devant, droite) et leur proximité.",
        en: "Assistant for visually impaired people: the camera recognises objects on the phone and announces them out loud, with their position (left, ahead, right) and proximity.",
        it: "Assistente per persone ipovedenti: la fotocamera riconosce gli oggetti sul telefono e li annuncia a voce, con posizione (sinistra, davanti, destra) e vicinanza."
      },
      tags: ["Kotlin", "CameraX", "TensorFlow Lite", "Text-to-Speech"],
      code: GH + "EyesOpen" }
  ],

  /* ---------- Parcours (frise) ---------- */
  experience: [
    { title: { fr: "Ingénieure logiciel, AZERTY UI", en: "Software Engineer, AZERTY UI", it: "Ingegnere del software, AZERTY UI" },
      place: { fr: "Malissard, France", en: "Malissard, France", it: "Malissard, Francia" },
      dates: { fr: "Août 2025 — nov. 2026", en: "Aug 2025 — Nov 2026", it: "Ago 2025 — nov 2026" },
      text: {
        fr: "API REST Symfony et PHP pour chalet-montagne.com, bases MySQL, tests automatisés unitaires, d'intégration et end-to-end avec rapports Allure. Puis Synapsystem : cartographie métier générée par IA (Claude, Neo4j).",
        en: "Symfony and PHP REST APIs for chalet-montagne.com, MySQL databases, automated unit, integration and end-to-end tests with Allure reports. Then Synapsystem: an AI-generated business map (Claude, Neo4j).",
        it: "API REST Symfony e PHP per chalet-montagne.com, database MySQL, test automatizzati unitari, di integrazione ed end-to-end con report Allure. Poi Synapsystem: mappa aziendale generata dall'IA (Claude, Neo4j)."
      },
      tags: ["Symfony", "PHP", "MySQL", "Playwright", "Allure"] },

    { title: { fr: "Stage de fin d'études, AZERTY UI", en: "Final-year internship, AZERTY UI", it: "Tirocinio di tesi, AZERTY UI" },
      place: { fr: "Malissard, France", en: "Malissard, France", it: "Malissard, Francia" },
      dates: { fr: "Févr. 2025 — juil. 2025", en: "Feb 2025 — Jul 2025", it: "Feb 2025 — lug 2025" },
      text: {
        fr: "Backend Django de Secure Appart, plateforme de location assistée par IA : API pour l'app mobile Flutter, OCR et Random Forest sur les dossiers locataires, MongoDB, GitLab CI/CD.",
        en: "Django backend for Secure Appart, an AI-assisted rental platform: APIs for the Flutter mobile app, OCR and Random Forest on tenant files, MongoDB, GitLab CI/CD.",
        it: "Backend Django di Secure Appart, piattaforma di locazione assistita da IA: API per l'app mobile Flutter, OCR e Random Forest sui fascicoli, MongoDB, GitLab CI/CD."
      },
      tags: ["Django", "Python", "Flutter", "MongoDB", "GitLab CI", "OCR"] },

    { title: { fr: "Diplôme d'ingénieur en télécommunications, ENISo", en: "Telecommunications engineering degree, ENISo", it: "Laurea in Ingegneria delle Telecomunicazioni, ENISo" },
      place: { fr: "Sousse, Tunisie", en: "Sousse, Tunisia", it: "Sousse, Tunisia" },
      dates: { fr: "2022 — 2025", en: "2022 — 2025", it: "2022 — 2025" },
      text: {
        fr: "École Nationale d'Ingénieurs de Sousse (ENISo). Projet de fin d'études : Secure Appart, réalisé chez AZERTY UI.",
        en: "National Engineering School of Sousse (ENISo). Final-year project: Secure Appart, built at AZERTY UI.",
        it: "Scuola Nazionale di Ingegneria di Sousse (ENISo). Progetto di tesi: Secure Appart, realizzato presso AZERTY UI."
      },
      award: {
        title: { fr: "Prix du meilleur projet de fin d'études", en: "Best Final-Year Project award", it: "Premio per il miglior progetto di tesi" },
        sub: { fr: "Forum des PFE ENISo 2025 · filière Télécommunication embarquée", en: "ENISo Final-Year Project Forum 2025 · Embedded Telecommunications track", it: "Forum dei progetti di tesi ENISo 2025 · indirizzo Telecomunicazioni embedded" },
        photos: [
          ["assets/award/remise.webp", { fr: "Remise du prix — Forum des PFE ENISo 2025", en: "Award ceremony — ENISo Final-Year Project Forum 2025", it: "Consegna del premio — Forum ENISo 2025" }],
          ["assets/award/certificat.webp", { fr: "Certificat « Meilleur projet de fin d'études »", en: "“Best Final-Year Project” certificate", it: "Attestato « Miglior progetto di tesi »" }]
        ]
      },
      tags: [] },

    { title: { fr: "Cycle préparatoire en mathématiques et physique", en: "Preparatory cycle in mathematics & physics", it: "Ciclo preparatorio in matematica e fisica" },
      place: { fr: "Faculté des Sciences de Monastir, Tunisie", en: "Faculty of Science, Monastir, Tunisia", it: "Facoltà di Scienze di Monastir, Tunisia" },
      dates: { fr: "2020 — 2022", en: "2020 — 2022", it: "2020 — 2022" },
      text: {
        fr: "Deux ans en cycle préparatoire scientifique en mathématiques et physique, avant le concours d'entrée en école d'ingénieurs.",
        en: "Two years in a scientific preparatory programme in mathematics and physics, before the engineering-school entrance exam.",
        it: "Due anni di ciclo preparatorio scientifico in matematica e fisica, prima del concorso di ammissione alla scuola di ingegneria."
      },
      tags: [] },

    { title: { fr: "Stage d'ingénieur, IT Station", en: "Engineering internship, IT Station", it: "Tirocinio ingegneristico, IT Station" },
      place: { fr: "Sousse, Tunisie", en: "Sousse, Tunisia", it: "Sousse, Tunisia" },
      dates: { fr: "2024", en: "2024", it: "2024" },
      text: {
        fr: "Application mobile Flutter de gestion d'associations éducatives (utilisateurs, rôles, événements, suivi des étudiants), avec Firebase pour l'authentification et le stockage.",
        en: "Flutter mobile app for educational associations (users, roles, events, student tracking), with Firebase for authentication and storage.",
        it: "App mobile Flutter per associazioni educative (utenti, ruoli, eventi, monitoraggio degli studenti), con Firebase per autenticazione e archiviazione."
      },
      tags: ["Flutter", "Firebase"] },

    { title: { fr: "Stage d'initiation, Tunisie Telecom", en: "Introductory internship, Tunisie Telecom", it: "Tirocinio introduttivo, Tunisie Telecom" },
      place: { fr: "Mahdia, Tunisie", en: "Mahdia, Tunisia", it: "Mahdia, Tunisia" },
      dates: { fr: "2023", en: "2023", it: "2023" },
      text: {
        fr: "Protocoles et architectures réseau (TCP/IP, MSN) ; gestion et optimisation du réseau.",
        en: "Network protocols and architectures (TCP/IP, MSN); network management and optimisation.",
        it: "Protocolli e architetture di rete (TCP/IP, MSN); gestione e ottimizzazione della rete."
      },
      tags: ["TCP/IP"] }
  ],

  /* ---------- Certifications ---------- */
  certs: [
    { name: { fr: "Red Hat OpenShift", en: "Red Hat OpenShift", it: "Red Hat OpenShift" }, year: "2025", url: GH + "OpenshiftCertification" },
    { name: { fr: "Microsoft Azure", en: "Microsoft Azure", it: "Microsoft Azure" }, year: "2024", url: GH + "Certificate-AZURE" },
    { name: { fr: "Cybersécurité", en: "Cybersecurity", it: "Cybersecurity" }, year: "2024", url: GH + "Certification_Cyber_Security" },
    { name: { fr: "Python", en: "Python", it: "Python" }, year: "2022", url: GH + "PythonCertificate" }
  ],

  /* ---------- Section « Me recruter » ---------- */
  hire: [
    { k: { fr: "Postes visés", en: "Roles I fit", it: "Ruoli" },
      v: { fr: "Développeuse backend (Symfony/PHP, Django/Python) · full stack (Angular) · QA / automatisation des tests", en: "Backend developer (Symfony/PHP, Django/Python) · full stack (Angular) · QA / test automation", it: "Sviluppatrice backend (Symfony/PHP, Django/Python) · full stack (Angular) · QA / automazione dei test" } },
    { k: { fr: "Disponibilité", en: "Availability", it: "Disponibilità" },
      v: { fr: "Immédiate", en: "Immediately", it: "Immediata" } },
    { k: { fr: "Contrat", en: "Contract", it: "Contratto" },
      v: { fr: "Tous types : CDI, CDD, freelance ou mission", en: "Any type: permanent, fixed-term, freelance or contract", it: "Qualsiasi tipo: tempo indeterminato, determinato, freelance o consulenza" } },
    { k: { fr: "Localisation", en: "Location", it: "Sede" },
      v: { fr: "Basée à Palerme, Italie (UTC+1) · mobile dans toute l'Union européenne", en: "Based in Palermo, Italy (UTC+1) · open to roles anywhere in the European Union", it: "Con sede a Palermo, Italia (UTC+1) · disponibile in tutta l'Unione europea" } },
    { k: { fr: "Langues de travail", en: "Working languages", it: "Lingue di lavoro" },
      v: { fr: "Français (C1) · anglais (B1) · italien (A2) · arabe", en: "French (C1) · English (B1) · Italian (A2) · Arabic", it: "Francese (C1) · inglese (B1) · italiano (A2) · arabo" } },
    { k: { fr: "Points forts", en: "Strengths", it: "Punti di forza" },
      v: { fr: "API REST, tests automatisés de bout en bout, CI/CD, intégration de l'IA dans des produits réels", en: "REST APIs, end-to-end test automation, CI/CD, bringing AI into real products", it: "API REST, test automatizzati end-to-end, CI/CD, integrazione dell'IA in prodotti reali" } }
  ]
};
