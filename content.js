/* ============================================================
   CONTENU DU PORTFOLIO — modifier ici le texte (FR / EN / IT).
   Chaque texte existe en 3 langues : { fr: "...", en: "...", it: "..." }
   ============================================================ */

const GH = "https://github.com/FerdawesAbdessalem/";

window.CONTENT = {

  /* ---------- Textes fixes de la page ---------- */
  ui: {
    "skip":           { fr: "Aller au contenu", en: "Skip to content", it: "Vai al contenuto" },
    "nav.about":      { fr: "Profil", en: "About", it: "Profilo" },
    "nav.skills":     { fr: "Compétences", en: "Skills", it: "Competenze" },
    "nav.experience": { fr: "Expérience", en: "Experience", it: "Esperienza" },
    "nav.projects":   { fr: "Projets", en: "Projects", it: "Progetti" },
    "nav.contact":    { fr: "Contact", en: "Contact", it: "Contatti" },

    "hero.location": {
      fr: "Ispica, Italie · Ouverte à des postes en France, en Italie et dans l'UE",
      en: "Ispica, Italy · Open to roles in France, Italy and across the EU",
      it: "Ispica, Italia · Disponibile per posizioni in Italia, Francia e nell'UE"
    },
    "hero.role": {
      fr: "Ingénieure logiciel | Backend, Full Stack & QA",
      en: "Software Engineer | Backend, Full Stack & QA",
      it: "Ingegnere del software | Backend, Full Stack e QA"
    },
    /* Texte animé (machine à écrire) sous le titre */
    "hero.typingPrefix": { fr: "Je conçois", en: "I build", it: "Realizzo" },
    "hero.typing": {
      fr: ["des API REST robustes", "des applications full stack", "des tests automatisés fiables", "des pipelines CI/CD", "des solutions pilotées par l'IA"],
      en: ["robust REST APIs", "full-stack applications", "reliable automated tests", "CI/CD pipelines", "AI-powered solutions"],
      it: ["API REST robuste", "applicazioni full stack", "test automatizzati affidabili", "pipeline CI/CD", "soluzioni basate sull'IA"]
    },

    /* Section « pipeline CI/CD » animée */
    "pipe.title": { fr: "Du commit à la production", en: "From commit to production", it: "Dal commit alla produzione" },
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

    "hero.summary": {
      fr: "Ingénieure en développement logiciel, spécialisée dans la conception et le développement de solutions backend et full stack. Expérience en architecture et développement d'API REST, automatisation des tests et intégration continue (CI/CD), avec une maîtrise de plusieurs technologies et frameworks, notamment Symfony, Django et Angular.",
      en: "Software engineer specialised in designing and building backend and full-stack solutions. Experienced in REST API architecture and development, test automation and continuous integration (CI/CD), with hands-on command of several technologies and frameworks, including Symfony, Django and Angular.",
      it: "Ingegnere dello sviluppo software, specializzata nella progettazione e nello sviluppo di soluzioni backend e full stack. Esperienza nell'architettura e nello sviluppo di API REST, nell'automazione dei test e nell'integrazione continua (CI/CD), con padronanza di diverse tecnologie e framework, tra cui Symfony, Django e Angular."
    },
    "hero.cv":      { fr: "Télécharger le CV", en: "Download résumé", it: "Scarica il CV" },
    "hero.contact": { fr: "Me contacter", en: "Get in touch", it: "Contattami" },

    "skills.title": { fr: "Compétences techniques", en: "Technical skills", it: "Competenze tecniche" },
    "exp.title":    { fr: "Expérience professionnelle", en: "Professional experience", it: "Esperienza professionale" },
    "proj.title":   { fr: "Projets", en: "Projects", it: "Progetti" },
    "edu.title":    { fr: "Formation", en: "Education", it: "Formazione" },
    "cert.title":   { fr: "Certifications", en: "Certifications", it: "Certificazioni" },
    "lang.title":   { fr: "Langues", en: "Languages", it: "Lingue" },
    "contact.title":{ fr: "Travaillons ensemble", en: "Let's work together", it: "Lavoriamo insieme" },
    "contact.text": {
      fr: "Je suis disponible pour des postes d'ingénieure logiciel backend, full stack ou QA. N'hésitez pas à me contacter.",
      en: "I'm available for backend, full-stack or QA software engineering roles. Feel free to reach out.",
      it: "Sono disponibile per posizioni di ingegnere del software backend, full stack o QA. Non esitate a contattarmi."
    },
    "link.site":   { fr: "Voir le site", en: "Live site", it: "Sito web" },
    "link.code":   { fr: "Code source", en: "Source code", it: "Codice" },
    "link.cert":   { fr: "Voir", en: "View", it: "Vedi" },
    "badge.pro":   { fr: "Pro", en: "Work", it: "Lavoro" }
  },

  /* ---------- CV à télécharger selon la langue ---------- */
  cv: {
    fr: "cv/Ferdaoues_Abdessalem_CV_FR.pdf",
    en: "cv/Ferdaoues_Abdessalem_Resume.pdf",
    it: "cv/Ferdaoues_Abdessalem_CV_IT.pdf"
  },

  /* ---------- Chiffres clés ---------- */
  facts: [
    { value: "16", label: { fr: "mois comme ingénieure logiciel", en: "months as a software engineer", it: "mesi come ingegnere del software" } },
    { value: "6",  label: { fr: "projets réalisés", en: "projects delivered", it: "progetti realizzati" } },
    { value: "4",  label: { fr: "certifications", en: "certifications", it: "certificazioni" } },
    { value: "4",  label: { fr: "langues parlées", en: "languages spoken", it: "lingue parlate" } }
  ],

  /* ---------- Compétences ---------- */
  skills: [
    { title: { fr: "Langages de programmation", en: "Programming languages", it: "Linguaggi di programmazione" },
      items: ["PHP", "Python", "Java", "JavaScript", "TypeScript", "Kotlin", "C", "SQL"] },
    { title: { fr: "Frameworks & plateformes", en: "Frameworks & platforms", it: "Framework e piattaforme" },
      items: ["Symfony", "Django", "Angular", "Flutter", "Firebase", "Next.js", "REST API"] },
    { title: { fr: "Bases de données", en: "Databases", it: "Database" },
      items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Neo4j"] },
    { title: { fr: "Tests & qualité", en: "Testing & quality", it: "Test e qualità" },
      items: ["PHPUnit", "Playwright", "Unit / Integration / E2E", "Allure Report"] },
    { title: { fr: "DevOps & outils", en: "DevOps & tools", it: "DevOps e strumenti" },
      items: ["GitLab CI/CD", "Git", "Docker", "OpenShift", "Linux"] },
    { title: { fr: "IA & réseaux", en: "AI & networking", it: "IA e reti" },
      items: ["LLM (Claude)", "TensorFlow", "scikit-learn", "XGBoost", "TCP/IP"] }
  ],

  /* ---------- Expérience ---------- */
  experience: [
    { title: { fr: "Ingénieure logiciel", en: "Software Engineer", it: "Ingegnere del software" },
      org: "AZERTY UI", place: { fr: "Malissard, France", en: "Malissard, France", it: "Malissard, Francia" },
      dates: { fr: "Août 2025 – nov. 2026", en: "Aug 2025 – Nov 2026", it: "Ago 2025 – nov 2026" },
      bullets: {
        fr: ["Développement d'API REST avec Symfony et PHP pour l'application web Chalet Montagne.",
             "Modélisation et maintenance des bases de données MySQL au cœur de la logique métier.",
             "Tests automatisés unitaires, d'intégration et end-to-end, avec rapports Allure pour prévenir les régressions."],
        en: ["Designed and developed REST APIs in Symfony and PHP for the Chalet Montagne web application.",
             "Modelled, queried and maintained the MySQL databases behind the core business logic.",
             "Built automated unit, integration and end-to-end tests, publishing results as Allure reports."],
        it: ["Progettazione e sviluppo di API REST Symfony/PHP per l'applicazione web Chalet Montagne.",
             "Modellazione e manutenzione dei database MySQL alla base della logica di business.",
             "Test automatizzati unitari, di integrazione ed end-to-end, con report Allure contro le regressioni."]
      },
      tags: ["Symfony", "PHP", "MySQL", "Playwright", "Allure"] },

    { title: { fr: "Ingénieure logiciel – stage de fin d'études", en: "Software Engineer – Final-Year Internship", it: "Ingegnere del software – tirocinio di tesi" },
      org: "AZERTY UI", place: { fr: "Malissard, France", en: "Malissard, France", it: "Malissard, Francia" },
      dates: { fr: "Févr. 2025 – juil. 2025", en: "Feb 2025 – Jul 2025", it: "Feb 2025 – lug 2025" },
      bullets: {
        fr: ["Backend Django d'une plateforme de location immobilière assistée par IA, exposant des API à une app mobile.",
             "Analyse documentaire automatisée (OCR, classifieur Random Forest) des dossiers locataires.",
             "Gestion d'une base MongoDB et pipelines GitLab CI/CD pour le build et le déploiement."],
        en: ["Built a Django backend for an AI-assisted real-estate rental platform, exposing APIs to a mobile app.",
             "Integrated automated document analysis (OCR, Random Forest classifier) of tenant files.",
             "Managed a MongoDB datastore and set up GitLab CI/CD pipelines for build and deployment."],
        it: ["Backend Django per una piattaforma di locazione immobiliare assistita da IA, con API per un'app mobile.",
             "Analisi documentale automatizzata (OCR, classificatore Random Forest) dei fascicoli degli inquilini.",
             "Gestione di un database MongoDB e pipeline GitLab CI/CD per build e deployment."]
      },
      tags: ["Django", "Python", "MongoDB", "GitLab CI", "OCR"] },

    { title: { fr: "Stage d'ingénieur", en: "Software Engineering Internship", it: "Tirocinio ingegneristico" },
      org: "IT Station", place: { fr: "Sousse, Tunisie", en: "Sousse, Tunisia", it: "Sousse, Tunisia" },
      dates: { fr: "2024", en: "2024", it: "2024" },
      bullets: {
        fr: ["Application mobile Flutter de gestion d'associations éducatives : utilisateurs, rôles, événements, suivi des étudiants.",
             "Intégration de Firebase comme backend : authentification sécurisée et stockage des données dans le cloud."],
        en: ["Developed a cross-platform Flutter app for educational associations: users, roles, events and student tracking.",
             "Integrated Firebase as the backend for secure user authentication and cloud data storage."],
        it: ["App mobile Flutter per associazioni educative: gestione di utenti e ruoli, eventi e monitoraggio degli studenti.",
             "Integrazione di Firebase come backend per l'autenticazione sicura e l'archiviazione dei dati nel cloud."]
      },
      tags: ["Flutter", "Firebase"] },

    { title: { fr: "Stage d'initiation", en: "Introductory Internship", it: "Tirocinio introduttivo" },
      org: "Tunisie Telecom", place: { fr: "Mahdia, Tunisie", en: "Mahdia, Tunisia", it: "Mahdia, Tunisia" },
      dates: { fr: "2023", en: "2023", it: "2023" },
      bullets: {
        fr: ["Étude et mise en œuvre de protocoles et d'architectures réseau (TCP/IP, MSN) ; gestion et optimisation du réseau."],
        en: ["Studied and implemented network protocols and architectures (TCP/IP, MSN); network management and optimisation."],
        it: ["Studio e implementazione di protocolli e architetture di rete (TCP/IP, MSN); gestione e ottimizzazione della rete."]
      },
      tags: ["TCP/IP", "Networking"] }
  ],

  /* ---------- Projets ---------- */
  projects: [
    { name: "Synapsystem", year: "2026",
      kind: { fr: "Gestion des connaissances métier par IA", en: "AI-powered business knowledge management", it: "Gestione della conoscenza aziendale con IA" },
      desc: {
        fr: "Génération automatique d'une cartographie métier à partir du code et des documents avec Claude (LLM) et Neo4j, interrogeable par un assistant IA.",
        en: "Automatically generates a business-domain map from source code and documents using Claude (LLM) and Neo4j, queryable through an AI assistant.",
        it: "Generazione automatica di una mappa del dominio aziendale da codice e documenti con Claude (LLM) e Neo4j, interrogabile tramite un assistente IA."
      },
      tags: ["Claude (LLM)", "Neo4j", "Next.js", "Python", "Docker"],
      site: "https://synapsystem.azertyui.fr/" },

    { name: "Chalet Montagne", year: "2025–2026", pro: true,
      kind: { fr: "Application web de location de chalets", en: "Chalet rental web application", it: "Applicazione web di noleggio chalet" },
      desc: {
        fr: "API REST, modélisation des données et tests automatisés de l'application web, développés chez AZERTY UI.",
        en: "REST APIs, data modelling and automated testing for the web application, built at AZERTY UI.",
        it: "API REST, modellazione dei dati e test automatizzati dell'applicazione web, sviluppati presso AZERTY UI."
      },
      tags: ["Symfony", "PHP", "MySQL", "Playwright", "Allure"],
      site: "https://www.chalet-montagne.com/" },

    { name: "Secure Appart", year: "2025",
      kind: { fr: "Plateforme de location assistée par IA", en: "AI-assisted rental platform", it: "Piattaforma di locazione assistita da IA" },
      desc: {
        fr: "Backend REST Django avec analyse documentaire automatisée (Tesseract OCR, Random Forest) et client mobile Flutter.",
        en: "Django REST backend with automated document analysis (Tesseract OCR, Random Forest) and a Flutter mobile client.",
        it: "Backend REST Django con analisi documentale automatizzata (Tesseract OCR, Random Forest) e client mobile Flutter."
      },
      tags: ["Django", "MongoDB", "GitLab CI", "OCR", "Flutter"] },

    { name: "Eyes Open", year: "2024",
      kind: { fr: "Application d'assistance par reconnaissance d'objets", en: "Assistive object-recognition app", it: "App assistiva di riconoscimento oggetti" },
      desc: {
        fr: "Reconnaissance d'objets en temps réel par deep learning, avec description audio et textuelle pour les personnes malvoyantes.",
        en: "Real-time object recognition with deep learning, giving audio and text descriptions to visually impaired users.",
        it: "Riconoscimento di oggetti in tempo reale con deep learning, con descrizioni audio e testuali per utenti ipovedenti."
      },
      tags: ["Kotlin", "TensorFlow", "Computer vision"],
      code: GH + "EyesOpen" },

    { name: "WirdiApp", year: "2024",
      kind: { fr: "Gestion d'associations éducatives", en: "Educational association management", it: "Gestione di associazioni educative" },
      desc: {
        fr: "Application mobile pour la coordination des étudiants, la planification des révisions et la gestion des examens.",
        en: "Mobile app for student coordination, revision planning and exam management.",
        it: "App mobile per il coordinamento degli studenti, la pianificazione dei ripassi e la gestione degli esami."
      },
      tags: ["Flutter", "Firebase"],
      code: GH + "Education_APP" },

    { name: "M&F Buy", year: "2022",
      kind: { fr: "Application web e-commerce", en: "E-commerce web application", it: "Applicazione web e-commerce" },
      desc: {
        fr: "Boutique en ligne de matériel réseau : catalogue produits, panier et gestion des commandes.",
        en: "Online store for network equipment: product catalogue, cart and order management.",
        it: "Negozio online di apparecchiature di rete: catalogo prodotti, carrello e gestione degli ordini."
      },
      tags: ["PHP", "MySQL"],
      code: GH + "OnlineShope" }
  ],

  /* ---------- Formation ---------- */
  education: [
    { title: { fr: "Diplôme d'ingénieur en télécommunications", en: "Telecommunications Engineer (Engineering Degree)", it: "Laurea in Ingegneria delle Telecomunicazioni" },
      school: { fr: "École Nationale d'Ingénieurs de Sousse (ENISo)", en: "National Engineering School of Sousse (ENISo)", it: "Scuola Nazionale di Ingegneria di Sousse (ENISo)" },
      dates: "2022 – 2025" },
    { title: { fr: "Cycle préparatoire en mathématiques et physique", en: "Preparatory Cycle in Mathematics & Physics", it: "Ciclo preparatorio in Matematica e Fisica" },
      school: { fr: "Faculté des Sciences de Monastir", en: "Faculty of Science, Monastir", it: "Facoltà di Scienze di Monastir" },
      dates: "2020 – 2022" }
  ],

  /* ---------- Certifications ---------- */
  certs: [
    { name: { fr: "Red Hat OpenShift", en: "Red Hat OpenShift", it: "Red Hat OpenShift" }, year: "2025", url: GH + "OpenshiftCertification" },
    { name: { fr: "Microsoft Azure", en: "Microsoft Azure", it: "Microsoft Azure" }, year: "2024", url: GH + "Certificate-AZURE" },
    { name: { fr: "Cybersécurité", en: "Cybersecurity", it: "Cybersecurity" }, year: "2024", url: GH + "Certification_Cyber_Security" },
    { name: { fr: "Python", en: "Python", it: "Python" }, year: "2022", url: GH + "PythonCertificate" }
  ],

  /* ---------- Langues ---------- */
  languages: {
    fr: "Arabe (langue maternelle) · Français (C1) · Anglais (B1) · Italien (A2)",
    en: "Arabic (native) · French (C1) · English (B1) · Italian (A2)",
    it: "Arabo (madrelingua) · Francese (C1) · Inglese (B1) · Italiano (A2)"
  }
};
