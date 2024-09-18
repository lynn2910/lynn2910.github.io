import type { ProjectDeclaration } from '@/assets/scripts/projects'

export const personnal_projects: ProjectDeclaration[] = [
  {
    properties: {
      name: "Kady",
      description: "Un bot Discord gratuit pour aider les utilisateurs au quotidien.",
      links: [
        { type: "discord",  url: "https://discord.gg/tncuQH86EM" },
        { type: "github",   url: "https://github.com/lynn2910/Kady-OpalEngine" }
      ],
      skills: [
        "Rust",
        "Websockets",
        "Serveur web complet",
        "Multi-threading",
        "MariaDB",
        "Concurrence des données",
        "Gestion de la mémoire"
      ]
    },
    url: "/project/personnel/kady",
    content_path: "KadyProject",
    score: 700,
    dates: {
      start: new Date(2024, 1, 23),
      end: null,
      ended: false
    }
  },
  {
    properties: {
      name: "Calco",
      description: "Un outil en ligne de commande pour calculer des expressions mathématiques.",
      links: [
        { type: "github", url: "https://github.com/lynn2910/Calco" }
      ],
      skills: [
        "Rust",
        "Tokenizer & Parsing",
        "Arbre de syntaxe abstraite (AST)"
      ]
    },
    url: "/project/personnel/calco",
    content_path: "CalcoProject",
    score: 800,
    dates: {
      start: new Date(2023, 3, 31),
      end: null,
      ended: true
    }
  },
  {
    properties: {
      name: "Aegis",
      description: "Un jeu de stratégie multijoueur en temps réel programmé de zéro",
      links: [
        { type: "github", url: "https://github.com/chamallow-team/Aegis-server" }
      ],
      skills: ["TCP", "Rust", "Graphes", "Respect du cahier des charges", "Open Source"]
    },
    url: "/project/personnel/aegis",
    content_path: "AegisProject",
    score: 1000
  }
]


export const iut_projects: ProjectDeclaration[] = [
  {
    properties: {
      name: "Galadrim Chartreuse",
      description: "Un site web informatif développé en équipe de 5 sur une entreprise française du numérique",
      links: [
        { type: "github", url: "https://github.com/lynn2910/galadrim_chartreuse" },
        { type: "website", url: "https://cedriccolin.github.io/galadrim_chartreuse" },
        { type: "gitlab", url: "https://galadrim-chartreuse-cedriccolin-533234ebad0ef47fce28e194b3b878b.gitlab.io/" }
      ],
      skills: ["HTML5", "CSS3", "Javascript", "3D (three.js)"]
    },
    url: "/project/universite/galadrim-chartreuse",
    content_path: "GaladrimChartreuse",
    score: 600,
    dates: {
      start: new Date(2023, 3, 31),
      end: new Date(2023, 5, 31),
      ended: true
    }
  },
  {
    properties: {
      name: "Hydrobus Belfortain",
      description: "Un site web avec une API flask qui permet de gérer une flotte de bus à hydrogène",
      links: [
        { type: "github", url: "https://github.com/Team-Chartreuse/Hydro-Bus-Belfortain" }
      ],
      skills: ["HTML5", "CSS3", "Python", "Flask", "Javascript"]
    },
    url: "/project/universite/hydrobus-belfortain",
    content_path: "HydroBusBelfortain",
    score: 500,
    dates: {
      start: new Date(2023, 3, 31),
      end: new Date(2023, 5, 31),
      ended: true
    }
  },
  {
    properties: {
      name: "DosOok",
      description: "Un algorithme qui transforme un message en audio et retranscris l'audio en message.",
      links: [
        { type: "github", url: "https://github.com/lynn2910/DosOok" },
        { type: "sound",  url: "https://github.com/marvynlevin/DosOok-audio" }
      ],
      skills: ["Java", "Filtre passe-bas", "Respect du cahier des charges", "Réaliser un rapport"]
    },
    url: "/project/universite/dosook",
    content_path: "DosOokProject",
    score: 400,
    dates: {
      start: new Date(2023, 12, 0),
      end: new Date(2024, 1, 15),
      ended: true
    }
  },
  {
    properties: {
      name: "Éclat de toile",
      description: "Un site de e-commerce développé en groupe de 5.",
      links: [
        { type: "github", url: "https://github.com/Team-Chartreuse/site-E-commerce" }
      ],
      skills: ["Python", "Flask", "MariaDB", "SQL", "Respect du cahier des charges"]
    },
    url: "/project/universite/eclat-de-toile",
    content_path: "EclatDeToileProject",
    score: 300
  },
  {
    properties: {
      name: "Trifle - Kamisado",
      description: "Un jeu de plateau développé en Java, avec développement de l'interface homme-machine et développement d'algorithmes visant à jouer contre le joueur.",
      links: [],
      skills: ["Java", "Bots", "Respect d'un cahier des charges", "Organisation de l'équipe", "Répartition des tâches"]
    },
    url: "/project/universite/trifle-kamisado",
    content_path: "TrifleProject",
    score: 1800
  }
];

export const projects = [...personnal_projects, ...iut_projects];
