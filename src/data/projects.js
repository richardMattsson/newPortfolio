const projects = [
  // {
  //   title: 'Case Timeline',
  //   eyebrow: 'Fullstack visualisation',
  //   projectLink: 'https://case-timeline.richardmattsson.se',
  //   githubLink: 'https://github.com/richardMattsson/Case-Timeline',
  //   imageSrc: '/images/case-timeline.jpg',
  //   altText: 'image of case-timeline',
  //   description:
  //     'Visualisering av ärenden utifrån ett tidsperspektiv. Grafiskt gränssnitt utvecklat med React, D3 och visx.',
  //   focus:
  //     'Att bygga ett verktyg som gör det enklare att se hur ett ärende utvecklas över tid, istället för att bara läsa det som en lista av händelser.',
  //   build:
  //     'Har fokuserat på att koppla ihop backend, databas och ett tydligt tidslinjegränssnitt så att informationen blir lätt att följa visuellt.',
  //   nextStep:
  //     'Nästa steg är att förbättra filtrering, datamodell och presentation så att timeline-vyn blir starkare som arbetsverktyg.',
  //   tech: 'D3, visx, Node.js, Express, Postgres, Docker',
  // },
  {
    slug: "breadshop",
    align: "vertical",
    title: "Breadshop",
    eyebrow: "E-commerce exercise",
    projectLink: "https://breadshop.richardmattsson.se",
    githubLink: "https://github.com/richardMattsson/lab_typescript_cypress",
    imageSrc: "/images/breadshop.gif",
    altText: "image of a online breadshop",
    description:
      "En fullstack-app byggd med React, Express och Postgres. Testad med Cypress.",
    focus:
      "Målet var att bygga ett mindre e-handelsflöde där frontend, backend och databas faktiskt hänger ihop på ett realistiskt sätt.",
    build:
      "Jag arbetade med produktflöden, API-kommunikation och databaslogik samt testade viktiga användarflöden med Cypress.",
    nextStep:
      "Jag skulle vilja vidareutveckla checkout-flödet och göra administrationsdelen tydligare.",
    tech: "React, TypeScript, Express, Postgres, Cypress",
  },
  {
    slug: "trygghetskollen",
    align: "horizontal",
    title: "Trygghetskollen",
    eyebrow: "Safer web habits",
    projectLink: "https://trygghetskollen.richardmattsson.se",
    githubLink: "https://github.com/richardMattsson/Trygghetskollen",
    imageSrc: "/images/trygghetskollen.gif",
    altText: "image of website Trygghetskollen",
    description:
      "En fullstack-app om tryggare digitala vanor, byggd och publicerad via Microsoft Azure med frontend, backend och databas i Docker Compose.",
    focus:
      "Syftet var att informera om digitala bedrägerier, arbeta med GDPR, personuppgifter och tydlig information till användaren.",
    build:
      "Docker Compose sattes upp för publicering, deployad på egen server och förbättrat prestanda genom att minska storleken på bilder och lazy loading.",
    nextStep:
      "Vidareutveckla konto- och personuppgiftshantering, tydligare integritetspolicy och förbättra prestanda och administration.",
    tech: "React, Node.js, Docker, Azure, GDPR",
  },
  {
    slug: "library",
    align: "horizontal",
    title: "Library",
    eyebrow: "Book account app",
    projectLink: "https://richardmattsson.github.io/library/",
    githubLink: "https://github.com/richardMattsson/Library-code",
    imageSrc: "/images/library.gif",
    altText: "gif image of library app",
    description:
      "Ett bibliotek där du kan skapa konto och spara dina favoritböcker och ge betyg.",
    focus:
      "Tanken var att bygga en app där användaren inte bara ser böcker utan också kan skapa en personlig samling och interagera med innehåll.",
    build:
      "Jag jobbade med kontoflöde, sparade favoriter och ett tydligt grännsnitt för att ge en enkel men personlig upplevelse.",
    nextStep:
      "Nästa steg skulle vara starkare sökning, filtrering och mer utvecklad användarprofil.",
    tech: "React, JavaScript, REST APIs",
  },
  {
    slug: "hesa-fredrik",
    align: "horizontal",
    title: "Hesa Fredrik",
    eyebrow: "Crisis preparedness",
    projectLink: "https://richardmattsson.github.io/hesafredrik/",
    githubLink: "https://github.com/richardMattsson/hesa-fredrik",
    imageSrc: "/images/hesafredrik.gif",
    altText: "image of app about crisis preparedness",
    description:
      "Ett projekt byggt med Vue.js och Vite. En app med övningar och quiz som förberedelse inför en kris.",
    focus:
      "Projektet hade ett tydligt samhällsfokus: att presentera information om krisberedskap på ett sätt som är enkelt att ta till sig.",
    build:
      "Skapat innehåll och grännsnitt som skulle fungera för snabb informationshämtning.",
    nextStep:
      "Jag skulle vilja utveckla det vidare med mer situationsbaserat innehåll och tydligare navigering mellan olika scenarier.",
    tech: "Vue, Vite",
  },
  {
    slug: "police-events",
    align: "horizontal",
    title: "Police Events",
    eyebrow: "Public data interface",
    projectLink: "https://richardmattsson.github.io/police-events/",
    githubLink: "https://github.com/richardMattsson/Code-for-police-events",
    imageSrc: "/images/polisen.jpg",
    altText: "logo for swedish police",
    description:
      "Ett Vue.js projekt där det går att hämta information från polisens databas.",
    focus:
      "Jag ville göra offentlig data mer användbar genom att presentera polisens händelser i ett enklare och mer tillgängligt grännsnitt.",
    build:
      "Tyngdpunkten låg på API-hämtning, datatransformering och en frontend som snabbt visar relevant information.",
    nextStep:
      "Nästa steg hade varit att lägga till filtrering och geografisk uppdelning för att göra datan mer användbar.",
    tech: "CSS, Vue, APIs",
  },
  {
    slug: "blackjack",
    align: "horizontal",
    title: "Blackjack",
    eyebrow: "Game logic",
    projectLink: "https://richardmattsson.github.io/blackjack2/",
    githubLink: "https://github.com/richardMattsson/blackjack2",
    imageSrc: "/images/blackjack.gif",
    altText: "image of blackjack-project",
    description: "Ett blackjack-spel gjord med Native JavaScript.",
    focus:
      "Detta projekt var ett bra sätt att öva på spelregler, tillstånd och logik utan att luta sig mot ett ramverk.",
    build:
      "Jag byggde spelets flöde med fokus på kortlogik, användarinteraktion och tydlig feedback i grännsnittet.",
    nextStep:
      "Jag skulle vilja vidareutveckla det med bättre animationer och tydligare state-hantering.",
    tech: "JavaScript, DOM manipulation",
  },
  {
    slug: "weather-app",
    align: "horizontal",
    title: "Weather App",
    eyebrow: "Forecast UI",
    projectLink: "https://richardmattsson.github.io/weatherApp/",
    githubLink: "https://github.com/richardMattsson/weatherApp",
    imageSrc: "/images/weather.png",
    altText: "image of a weather-app",
    description: "En väderapp med data hämtad från Open Weather API.",
    focus:
      "Målet var att bygga en enkel men tydlig app som visar hur extern data kan bli till ett lättläst grannsnitt.",
    build:
      "Jag arbetade med API-integration, visning av väderdata och en struktur som gjorde informationen snabb att skanna.",
    nextStep:
      "Jag hade fortsatt med prognoser över flera dagar och fler visuella indikatorer för väderläge.",
    tech: "JavaScript, API integration",
  },
];

export default projects;
