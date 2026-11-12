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
    "theme":       { fr: "Changer de thème", en: "Toggle theme", it: "Cambia tema" },

    "hero.kicker": {
      fr: "Ferdaoues Abdessalem — ingénieure logiciel · Ispica, Italie",
      en: "Ferdaoues Abdessalem — software engineer · Ispica, Italy",
      it: "Ferdaoues Abdessalem — ingegnere del software · Ispica, Italia"
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
    "hero.status": {
      fr: "Ouverte à des postes en France, en Italie et dans l'UE",
      en: "Open to roles in France, Italy and across the EU",
      it: "Disponibile per posizioni in Italia, Francia e nell'UE"
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
      fr: "En production chez AZERTY UI",
      en: "Shipped to production at AZERTY UI",
      it: "In produzione presso AZERTY UI"
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
      fr: "Je suis disponible pour des postes d'ingénieure logiciel backend, full stack ou QA. Écrivez-moi, je réponds rapidement.",
      en: "I'm available for backend, full-stack or QA software engineering roles. Write to me — I reply quickly.",
      it: "Sono disponibile per posizioni di ingegnere del software backend, full stack o QA. Scrivetemi, rispondo rapidamente."
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
    { name: "Synapsystem", logo: "assets/logos/synapsystem.svg", url: "https://synapsystem.azertyui.fr/", label: "Synapsystem" },
    { name: "IT Station", label: "IT Station" },
    { name: "Tunisie Telecom", label: "Tunisie Telecom" }
  ],

  /* ---------- Tableau « En un coup d'œil » ---------- */
  glance: [
    { k: { fr: "Rôle", en: "Role", it: "Ruolo" },
      v: { fr: "Ingénieure logiciel — Backend, Full Stack & QA", en: "Software engineer — Backend, Full Stack & QA", it: "Ingegnere del software — Backend, Full Stack e QA" } },
    { k: { fr: "Expérience", en: "Experience", it: "Esperienza" },
      v: { fr: "AZERTY UI (France), févr. 2025 – nov. 2026 · stages IT Station et Tunisie Telecom", en: "AZERTY UI (France), Feb 2025 – Nov 2026 · internships at IT Station and Tunisie Telecom", it: "AZERTY UI (Francia), feb 2025 – nov 2026 · tirocini presso IT Station e Tunisie Telecom" } },
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
      v: { fr: "Diplôme d'ingénieur en télécommunications, ENISo Sousse (2025)", en: "Telecommunications engineering degree, ENISo Sousse (2025)", it: "Laurea in Ingegneria delle Telecomunicazioni, ENISo Sousse (2025)" } },
    { k: { fr: "Langues", en: "Languages", it: "Lingue" },
      v: { fr: "Arabe (maternelle) · Français (C1) · Anglais (B1) · Italien (A2)", en: "Arabic (native) · French (C1) · English (B1) · Italian (A2)", it: "Arabo (madrelingua) · Francese (C1) · Inglese (B1) · Italiano (A2)" } },
    { k: { fr: "Basée", en: "Based", it: "Sede" },
      v: { fr: "Ispica, Italie (CET / UTC+1)", en: "Ispica, Italy (CET / UTC+1)", it: "Ispica, Italia (CET / UTC+1)" } },
    { k: { fr: "Mobilité", en: "Open to", it: "Disponibilità" },
      v: { fr: "France, Italie et Union européenne", en: "France, Italy and the European Union", it: "Italia, Francia e Unione europea" } }
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
      did: {
        fr: ["Conception et développement d'**API REST Symfony / PHP** pour la recherche et la réservation.",
             "Modélisation et maintenance des **bases de données MySQL** au cœur de la logique métier.",
             "Tests automatisés **unitaires, d'intégration et end-to-end** (Playwright), rapports **Allure** dans la CI."],
        en: ["Designed and built **Symfony / PHP REST APIs** for search and booking.",
             "Modelled and maintained the **MySQL databases** behind the core business logic.",
             "Automated **unit, integration and end-to-end** tests (Playwright), with **Allure** reports in CI."],
        it: ["Progettazione e sviluppo di **API REST Symfony / PHP** per ricerca e prenotazione.",
             "Modellazione e manutenzione dei **database MySQL** alla base della logica di business.",
             "Test automatizzati **unitari, di integrazione ed end-to-end** (Playwright), report **Allure** in CI."]
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
      desc: {
        fr: "Plateforme de location immobilière assistée par IA : le locataire dépose ses justificatifs depuis l'application mobile, le backend les lit, les vérifie et calcule un score de dossier pour le propriétaire.",
        en: "An AI-assisted rental platform: tenants upload their documents from the mobile app, and the backend reads, checks and scores the application for the landlord.",
        it: "Piattaforma di locazione assistita da IA: l'inquilino carica i documenti dall'app mobile, il backend li legge, li verifica e calcola un punteggio del fascicolo per il proprietario."
      },
      did: {
        fr: ["Backend **Django REST** exposant les API de l'application mobile.",
             "Analyse documentaire automatisée : **OCR Tesseract** + classifieur **Random Forest** (pièce d'identité, fiches de paie, relevés).",
             "Base **MongoDB** et pipelines **GitLab CI/CD** pour le build et le déploiement."],
        en: ["**Django REST** backend serving the mobile app's APIs.",
             "Automated document analysis: **Tesseract OCR** + a **Random Forest** classifier (ID, payslips, bank statements).",
             "**MongoDB** datastore and **GitLab CI/CD** pipelines for build and deployment."],
        it: ["Backend **Django REST** che espone le API dell'app mobile.",
             "Analisi documentale automatizzata: **OCR Tesseract** + classificatore **Random Forest** (documento d'identità, buste paga, estratti conto).",
             "Database **MongoDB** e pipeline **GitLab CI/CD** per build e deployment."]
      },
      tags: ["Django", "Python", "MongoDB", "Tesseract OCR", "Random Forest", "Flutter", "GitLab CI"],
      pills: ["Django", "OCR", "MongoDB"],
      flow: [["fr:Justificatif|en:Document|it:Documento", "client"], ["OCR · Tesseract", "api"], ["Random Forest", "ai"], ["fr:Score du dossier|en:Application score|it:Punteggio", "qa"]],
      film: { device: "phone", frames: [
        ["assets/work/secure-appart/1.webp",  { fr: "Bienvenue — choix du profil", en: "Welcome — choose a profile", it: "Benvenuto — scelta del profilo" }],
        ["assets/work/secure-appart/2.webp",  { fr: "Préférences de recherche", en: "Search preferences", it: "Preferenze di ricerca" }],
        ["assets/work/secure-appart/3.webp",  { fr: "Pièce d'identité", en: "ID document", it: "Documento d'identità" }],
        ["assets/work/secure-appart/4.webp",  { fr: "Contrat de travail", en: "Employment contract", it: "Contratto di lavoro" }],
        ["assets/work/secure-appart/5.webp",  { fr: "Fiches de paie", en: "Payslips", it: "Buste paga" }],
        ["assets/work/secure-appart/6.webp",  { fr: "Extraits bancaires", en: "Bank statements", it: "Estratti conto" }],
        ["assets/work/secure-appart/7.webp",  { fr: "Score du dossier", en: "Application score", it: "Punteggio del fascicolo" }],
        ["assets/work/secure-appart/8.webp",  { fr: "Accueil — dernières annonces", en: "Home — latest listings", it: "Home — ultimi annunci" }],
        ["assets/work/secure-appart/9.webp",  { fr: "Mes documents", en: "My documents", it: "I miei documenti" }],
        ["assets/work/secure-appart/10.webp", { fr: "Profil locataire", en: "Tenant profile", it: "Profilo inquilino" }],
        ["assets/work/secure-appart/11.webp", { fr: "Espace propriétaire", en: "Landlord space", it: "Area proprietario" }],
        ["assets/work/secure-appart/12.webp", { fr: "Propositions de locataires", en: "Tenant proposals", it: "Proposte degli inquilini" }]
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
      did: {
        fr: ["Génération automatique d'une **cartographie métier** à partir du code avec **Claude (LLM)**.",
             "Graphe de connaissance **Neo4j** reliant code, domaines, règles et processus, avec la preuve d'origine.",
             "Services **Python** et interface **Next.js**, déployés avec **Docker**."],
        en: ["Automatic generation of a **business map** from source code using **Claude (LLM)**.",
             "**Neo4j** knowledge graph linking code, domains, rules and processes, with the source as proof.",
             "**Python** services and a **Next.js** interface, deployed with **Docker**."],
        it: ["Generazione automatica di una **mappa aziendale** dal codice con **Claude (LLM)**.",
             "Grafo della conoscenza **Neo4j** che collega codice, domini, regole e processi, con la fonte come prova.",
             "Servizi **Python** e interfaccia **Next.js**, distribuiti con **Docker**."]
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
      ], note: { fr: "écrans réels du site", en: "real screens of the site", it: "schermate reali del sito" } } }
  ],

  /* Filtres des projets : id → libellé */
  stacks: {
    symfony: "Symfony · PHP",
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
        fr: "Reconnaissance d'objets en temps réel par deep learning, avec description audio et textuelle pour les personnes malvoyantes.",
        en: "Real-time object recognition with deep learning, giving audio and text descriptions to visually impaired users.",
        it: "Riconoscimento di oggetti in tempo reale con deep learning, con descrizioni audio e testuali per utenti ipovedenti."
      },
      tags: ["Kotlin", "TensorFlow", "Computer vision"],
      code: GH + "EyesOpen" },

    { name: "WirdiApp", year: "2024", stack: ["mobile"],
      kind: { fr: "Gestion d'associations éducatives", en: "Educational association management", it: "Gestione di associazioni educative" },
      desc: {
        fr: "Application mobile pour la coordination des étudiants, la planification des révisions et la gestion des examens.",
        en: "Mobile app for student coordination, revision planning and exam management.",
        it: "App mobile per il coordinamento degli studenti, la pianificazione dei ripassi e la gestione degli esami."
      },
      tags: ["Flutter", "Firebase"],
      code: GH + "Education_APP" },

    { name: "M&F Buy", year: "2022", stack: ["symfony"],
      kind: { fr: "Application web e-commerce", en: "E-commerce web application", it: "Applicazione web e-commerce" },
      desc: {
        fr: "Boutique en ligne de matériel réseau : catalogue produits, panier et gestion des commandes.",
        en: "Online store for network equipment: product catalogue, cart and order management.",
        it: "Negozio online di apparecchiature di rete: catalogo prodotti, carrello e gestione degli ordini."
      },
      tags: ["PHP", "MySQL"],
      code: GH + "OnlineShope" }
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
        fr: "Backend Django de Secure Appart, plateforme de location assistée par IA : API pour l'app mobile, OCR et Random Forest sur les dossiers locataires, MongoDB, GitLab CI/CD.",
        en: "Django backend for Secure Appart, an AI-assisted rental platform: APIs for the mobile app, OCR and Random Forest on tenant files, MongoDB, GitLab CI/CD.",
        it: "Backend Django di Secure Appart, piattaforma di locazione assistita da IA: API per l'app mobile, OCR e Random Forest sui fascicoli, MongoDB, GitLab CI/CD."
      },
      tags: ["Django", "Python", "MongoDB", "GitLab CI", "OCR"] },

    { title: { fr: "Diplôme d'ingénieur en télécommunications, ENISo", en: "Telecommunications engineering degree, ENISo", it: "Laurea in Ingegneria delle Telecomunicazioni, ENISo" },
      place: { fr: "Sousse, Tunisie", en: "Sousse, Tunisia", it: "Sousse, Tunisia" },
      dates: { fr: "2022 — 2025", en: "2022 — 2025", it: "2022 — 2025" },
      text: {
        fr: "École Nationale d'Ingénieurs de Sousse. Après un cycle préparatoire en mathématiques et physique à la Faculté des Sciences de Monastir (2020 – 2022).",
        en: "National Engineering School of Sousse. After a preparatory cycle in mathematics and physics at the Faculty of Science, Monastir (2020 – 2022).",
        it: "Scuola Nazionale di Ingegneria di Sousse. Dopo un ciclo preparatorio in matematica e fisica alla Facoltà di Scienze di Monastir (2020 – 2022)."
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
    { k: { fr: "Localisation", en: "Location", it: "Sede" },
      v: { fr: "Basée à Ispica, Italie (UTC+1) · ouverte à la France, l'Italie et l'UE", en: "Based in Ispica, Italy (UTC+1) · open to France, Italy and the EU", it: "Con sede a Ispica, Italia (UTC+1) · disponibile per Italia, Francia e UE" } },
    { k: { fr: "Langues de travail", en: "Working languages", it: "Lingue di lavoro" },
      v: { fr: "Français (C1) · anglais (B1) · italien (A2) · arabe", en: "French (C1) · English (B1) · Italian (A2) · Arabic", it: "Francese (C1) · inglese (B1) · italiano (A2) · arabo" } },
    { k: { fr: "Points forts", en: "Strengths", it: "Punti di forza" },
      v: { fr: "API REST, tests automatisés de bout en bout, CI/CD, intégration de l'IA dans des produits réels", en: "REST APIs, end-to-end test automation, CI/CD, bringing AI into real products", it: "API REST, test automatizzati end-to-end, CI/CD, integrazione dell'IA in prodotti reali" } }
  ]
};
