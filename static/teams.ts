type Game = {
  slug: string,
  name: string,
}
type City = {
  slug: string,
  name: string,
}
type Continent = {
  slug: string,
  name: string,
}
type Departement = {
  slug: string,
  name: string,
}
type Region = {
  slug: string,
  name: string,
}
type State = {
  slug: string,
  name: string,
}
type Country = {
  slug: string,
  name: string,
}

type Sponsor = {
  slug: string,
  name: string,
  image: string,
}

const SPONSOR = {
  LMN8: {
    name: "LMN8",
    slug: "lmn8",
    image: "image/sponsor/lmn8.png",
  },
  ESPORT_AGORA: {
    name: "Esport Agora",
    slug: "esport-agora",
    image: "image/sponsor/esport-agora.png",
  },
  PLAYCE_ESPORT: {
    name: "Playce Esport",
    slug: "playce-esport",
    image: "image/sponsor/playce-esport.png",
  },

  DISCORD: {
    name: "Discord",
    slug: "discord",
    image: "image/sponsor/dicord.svg",
  },
  SKEEL_APP: {
    name: "SkeelApp",
    slug: "skeel-app",
    image: "image/sponsor/skeel-app.png",
  },
  MILLENIUM: {
    name: "Millenium",
    slug: "millenium ",
    image: "image/sponsor/millenium.png",
  },
  NEWGO_ESPORT: {
    name: "NewGo Esport",
    slug: "newgo-sport",
    image: "image/sponsor/newgo-sport.png",
  },
  BUFF_ESPORT: {
    name: "Buff Esport",
    slug: "buff-sport",
    image: "image/sponsor/buff-sport.png",
  },
  RTSK3D: {
    name: "RTSK3D ",
    slug: "rtsk3d",
    image: "image/sponsor/rtsk3d.png",
  },
  GAMERS_APPARELS: {
    name: "Gamers Apparels",
    slug: "gamers-apparels",
    image: "image/sponsor/gamers-apparels.png",
  },
  CAPFINACE: {
    name: "CAP Finances",
    slug: "cap-finances",
    image: "image/sponsor/cap-finances.png",
  },
  NOVICKS_STADIUM: {
    name: "Novicks Stadium",
    slug: "novicks-stadium",
    image: "image/sponsor/novicks-stadium.png",
  },
  ROUEN_NORMANDIE_RUBGY: {
    name: "Rouen Normandie Rugby",
    slug: "rouen-normandie-rugby",
    image: "image/sponsor/rouen-normandie-rugby.png",
  }
}

const DEPARTMENT = {
  LANDES: {
    name: "Landes",
    slug: "landes"
  },
  GUADELOUPE: {
    name: "Guadeloupe",
    slug: "guadeloupe"
  }
};
const REGION = {
  LOIRE: {
    name: "Val de Loire",
    slug: "val-de-loire"
  }
};
const COUNTRY = {
  FRANCE: {
    name: "France",
    slug: "france"
  }
};
const CONTINENT = {
  EUROPE: {
    name: "Europe",
    slug: "europe"
  }
};


const GAME = {
  SUPER_SMASH_BROS_ULTIMATE: {
    name: "Super Smash Bros Ultimate",
    slug: "super-smash-bros-ultimate"
  },
  TEAMFIGHT_TACTICS: {
    name: "Teamfight Tactics",
    slug: "teamfight-tactics"
  },
  LEAGUE_OF_LEGEND: {
    name: "League of Legend",
    slug: "league-of-legend"
  },
  FORTNITE: {
    name: "Fortnite",
      slug: "fortnite"
  },
  FIFA: {
    name: 'Fifa',
    slug: 'fifa',
  },
  HEARTHSTONE: {
    slug: 'hearthstone',
    name: 'Hearthstone',
  },
  APEX: {
    name: "Apex Legend",
    slug: "apex-legend"
  },
  OVERWATCH: {
    name: "Overwatch",
    slug: "overwatch"
  },
  VALORANT: {
    name: "Valorant",
    slug: "valorant"
  },
  STAR_WARS: {
    name: "Star Wars",
    slug: "star-wars"
  },
  TRACKMANIA: {
    name: "Trackmania",
    slug: "trackmania",
  },
  ROCKET_LEAGUE: {
    name: "Rocket League",
    slug: "rocket-league",
  }
};

export type Team = {
  image: {
    team: string,
    logo: string
  },
  created_at: Date,
  slug: string,
  name: string,
  description: string,
  like: number,
  player: number,
  games: Game[],
  country?: Country,
  state?: State,
  region?: Region,
  department?: Departement,
  continent?: Country,
  sponsors: Sponsor[],
};

const Teams: Team[] = [
  {
    image: {
      team: "/image/team/mkdf-entertainment.jpg",
      logo: "/image/logo/mkdf-entertainment.png"
    },
    created_at: new Date(2017,6,3),
    slug: "mkdf-entertainment",
    name: "MKDF Entertainment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    like: 39261,
    player: 178,
    games: [
      GAME.APEX,
      GAME.OVERWATCH,
      GAME.STAR_WARS,
      GAME.VALORANT,
    ],
    country: COUNTRY.FRANCE,
    department: DEPARTMENT.LANDES,
    continent: CONTINENT.EUROPE,
    sponsors: [
      SPONSOR.DISCORD,
      SPONSOR.SKEEL_APP,
      SPONSOR.MILLENIUM,
    ],
  },
  {
    image: {
      team: "/image/team/be-esport.png",
      logo: "/image/logo/be-esport.png"
    },
    created_at: new Date(2018,6),
    slug: "be-esport",
    name: "BE ESPORT",
    description: "C'est en Juillet 2018 qu'un amateur passionné de jeux-vidéo et de gestion Kalann AVRIL, créa et développa l'entité esport et devient jusqu'à ce jour le président-fondateur & responsable des projets de la BE E-SPORT.\n" +
      "\n" +
      "La BE E-SPORT est une association régie par la loi du 1er juillet 1901 et le décret du 16 août 1901 sous le numéro W9G1004206.\n" +
      "\n" +
      "Cette association multigaming a pour objet le développement de projets sous le thème du sport électronique (e-sport).\n" +
      "\n" +
      "Les projets en cours de traitement sont les suivants :\n" +
      "\n" +
      "• Développement d’un club compétitif (Multigaming)\n" +
      "• Organisation d’évènements compétitifs (Multigaming)\n" +
      "• Organisation d’évènements communautaires (Animations multigaming & Concours)\n" +
      "• Gestion d’un média d’actualité esports (Multigaming)\n" +
      "• Développement d’une Web TV et de contenus vidéos de divertissement\n" +
      "\n" +
      "L'association inscrit ses projets dans une dimension d’intérêt général en préservant à ses activités un caractère non lucratif, laïque et apolitique préservant le caractère désintéressé de sa gestion.",
    like: 28,
    player: 50,
    country: COUNTRY.FRANCE,
    department: DEPARTMENT.GUADELOUPE,
    continent: CONTINENT.EUROPE,
    games: [
      GAME.LEAGUE_OF_LEGEND,
      GAME.VALORANT,
      GAME.TEAMFIGHT_TACTICS,
      GAME.FORTNITE,
      GAME.FIFA,
    ],
    sponsors: [
      SPONSOR.GAMERS_APPARELS,
      SPONSOR.NEWGO_ESPORT,
      SPONSOR.RTSK3D,
      SPONSOR.BUFF_ESPORT,
    ],
  },
  {
    image: {
      team: "/image/team/astro-esport.jpg",
      logo: "/image/logo/astro-esport.png"
    },
    created_at: new Date(2018,11,21),
    slug: "astro-esport",
    name: "Astro Esport",
    description: "Astro Esport une structure souhaitant se développer sur l'esport en espérant offrir le meilleur confort à la scène esportive d'évoluer. De même notre objectif serait de réussir à avoir un partenaire spatial afin de travailler sur l'ère technologique spatiale.",
    like: 780,
    player: 70,
    games: [
      GAME.ROCKET_LEAGUE,
      GAME.TRACKMANIA,
      GAME.LEAGUE_OF_LEGEND,
      GAME.FORTNITE
    ],
    region: REGION.LOIRE,
    country: COUNTRY.FRANCE,
    continent: CONTINENT.EUROPE,
    sponsors: [
      SPONSOR.NEWGO_ESPORT,
      SPONSOR.PLAYCE_ESPORT,
      SPONSOR.ESPORT_AGORA,
      SPONSOR.LMN8,
    ],
  },
  {
    image: {
      team: "/image/team/asptt-rouen-e-sport.png",
      logo: "/image/logo/asptt-rouen-e-sport.png"
    },
    created_at: new Date(2020,0),
    slug: "asptt-rouen-e-sport",
    name: "ASPTT Rouen E-Sport",
    description: "Bonjour,\n" +
      "\n" +
      "Forte de ses 3000 licenciés à travers plus de 30 activités, de ses nombreux bénévoles et de ses nombreux projets, l’ASPTT Rouen s’inscrit pleinement dans les orientations actuelles : sport santé, accès à la pratique au plus grand nombre, accueil de publics spécifiques, sport féminin…\n" +
      "\n" +
      "Dans une logique d'accessibilité au sport pour tous, l’ASPTT Rouen a ouvert la première section E-Sport by ASPTT sur le plan national en février 2020\n" +
      "\n" +
      "Notre structure possède son local en plein cœur de Rouen.\n" +
      "\n" +
      "Notre premier objectif sera de permettre à tout joueur isolé d'accéder à une communauté par le lien social en offrant deux offres : la pratique de l'E-Sport loisir et/ou compétitif.\n" +
      "\n" +
      "Nous offrons trois ambiances différentes pour nos  joueurs dans un même lieu :\n" +
      "\n" +
      "- Une ambiance familiale offrant détente, convivialité et partage autour de la gamme NINTENDO et ses jeux Mario.\n" +
      "\n" +
      "- Une ambiance plus sportive sur PS4 où les joueurs s'affrontent sur des jeux comme Fifa, NBA 2K…\n" +
      "\n" +
      "- Un coin PC (LAN) offrant la possibilité de jouer à 5 contre 5 et de faire du streaming.\n" +
      "\n" +
      "Avec ces trois ambiances, notre section a à disposition un cadre idéal pour s'entraîner et se perfectionner : coachs, analyses vidéo, entraînements. Nous souhaitons offrir les meilleures conditions à nos futurs joueurs.\n" +
      "\n" +
      "Notre offre orientée loisir et compétition possède également une vocation pédagogique ou des temps seront dédiés à l’E-ducation (aides aux devoirs), au Gam’in English (terminologie, vocabulaire du jeux vidéo en anglais). Des temps d'échanges seront également organisés sous forme de débats et conférences sur différentes thématiques liées à l'activité.\n" +
      "\n" +
      "Viendront s'ajouter des Events, challenges avec notamment comme premier axe une compétition e-sportive inter-écoles mais également le recrutement d'équipes compétitives sur des jeux comme Fortnite, FIFA ou Rocket League.\n" +
      "\n" +
      "Pour ce projet, nous recherchons des partenaires qui, plus que par leur image, pourraient nous accompagner dans ce projet innovant et ambitieux sur nos différents axes de travaux.\n" +
      "\n" +
      "Notre Twitter, principal réseau de communication avec plus de 7700 abonnés : @ASPTT_RouenGG\n" +
      "\n" +
      "Nous vous remercions pour votre temps et votre lecture. Nous espérons pouvoir échanger rapidement de vive voix avec vous autour de ce projet.",
    like: 780,
    player: 70,
    games: [
      GAME.SUPER_SMASH_BROS_ULTIMATE,
      GAME.LEAGUE_OF_LEGEND,
      GAME.FORTNITE
    ],
    sponsors: [
      SPONSOR.CAPFINACE,
      SPONSOR.NOVICKS_STADIUM,
      SPONSOR.ROUEN_NORMANDIE_RUBGY,
    ],
  }
];

export default Teams;
