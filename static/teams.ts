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

const GAME = {
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
};

type Team = {
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
  country?: string,
  state?: string,
  region?: string,
  department?: string,
  continent?: string,
};

const Teams: Team[] = [
  {
    image: {
      team: "/image/team/team-1.png",
      logo: "/image/logo/team-1.png"
    },
    created_at: new Date(2018,1),
    slug: "team-1",
    name: "Team 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    like: 20000,
    player: 27,
    games: [
      GAME.LEAGUE_OF_LEGEND,
      GAME.FORTNITE
    ]
  },
  {
    image: {
      team: "/image/team/team-2.png",
      logo: "/image/logo/team-2.png"
    },
    created_at: new Date(2018,1),
    slug: "team-2",
    name: "Team 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    like: 20000,
    player: 27,
    games: [
      GAME.FORTNITE
    ]
  },
  {
    image: {
      team: "/image/team/team-3.png",
      logo: "/image/logo/team-3.png"
    },
    created_at: new Date(2018,1),
    slug: "team-3",
    name: "Team 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    like: 20000,
    player: 27,
    games: [
      GAME.HEARTHSTONE
    ]
  },
  {
    image: {
      // URL l'image de l'équipe
      team: "/image/team/team-4.png",

      // URL de l'image du logo
      logo: "/image/logo/team-4.png"
    },

    // Date de création de l'équipe (voir la doc: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date)
    created_at: new Date(2018,1),

    // Slug de l'équipe (doit être unique)
    slug: "team-4",

    // Nom de l'équipe
    name: "Team 4",

    // Description de l'équipe
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",

    // Nombre de like de l'équipe
    like: 20000,

    // Nombre de joueurs dans la structure
    player: 27,

    // Jeux de la structure
    games: [
      GAME.LEAGUE_OF_LEGEND,
      GAME.FORTNITE,
      GAME.FIFA,
    ]
  },
];

export default Teams;
