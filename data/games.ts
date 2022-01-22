import IGame from "../types/IGame";
import consoles, { getConsole } from "./consoles";

const games: Array<IGame> = [
  {
    name: "Missing game",
    avaiableOn: [getConsole("PS5")],
    description: "Like MissingNo but it's missing game",
    extendedDescription: "There is no game.",
    images: [
      "https://sm.ign.com/ign_me/gallery/r/ratchet-cl/ratchet-clank-rift-apart-key-art-box-art-pre-order-bonuses-d_dz8f.jpg",
    ],
    price: 42.69,
    releaseDate: "Never released",
    stars: 5,
    thumbnail: "https://culturedvultures.com/wp-content/uploads/2021/02/Rift-Apart-Box-Art.jpg",
    id: "nogame",
    typehint: "game",
  },
  {
    name: "Ratchet & Clank: Rift Apart",
    avaiableOn: [getConsole("PS5")],
    description: "Blast your way through an interdimensional adventure.",
    extendedDescription:
      "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality. Jump between action-packed worlds, and beyond at mind-blowing speeds – complete with dazzling visuals and an insane arsenal – as the intergalactic adventurers blast onto the PS5™ console.",
    images: [
      "https://sm.ign.com/ign_me/gallery/r/ratchet-cl/ratchet-clank-rift-apart-key-art-box-art-pre-order-bonuses-d_dz8f.jpg",
      "https://cdn.arstechnica.net/wp-content/uploads/2021/06/Ratchet-_-Clank_-Rift-Apart_20210526113947.jpg",
      "https://s.yimg.com/uu/api/res/1.2/lG.phnLVe1DNmhRNCbaLog--~B/aD0xMTI1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-06/976a6e51-cded-11eb-afbe-8677d96619ae.cf.jpg",
      "https://cdn.mos.cms.futurecdn.net/Gfq3B4WT8gwNyJRQPw3nW4.jpg",
    ],
    price: 69.99,
    releaseDate: "June 11, 2021",
    stars: 5,
    thumbnail:
      "https://media.direct.playstation.com/is/image/sierialto/ps5-ratchet-clank-rift-apart-game-box-front?$Background_Large$",
    id: "g4me-rat-ps5",
    typehint: "game",
  },
  {
    name: "Returnal",
    avaiableOn: [getConsole("PS5")],
    description: "Break the cycle of chaos on an always-changing alien planet.",
    extendedDescription:
      "After crash-landing on this shape-shifting world, Selene must search through the barren landscape of an ancient civilization for her escape. Isolated and alone, she finds herself fighting tooth and nail for survival. Again and again, she’s defeated – forced to restart her journey every time she dies.",
    images: [
      "https://gmedia.playstation.com/is/image/SIEPDC/returnal-screen-03-ps5-15jun20-en?$native--t$",
      "https://cdn.mos.cms.futurecdn.net/77TyTqqSCMtcWqFoaAFMjk.jpg",
      "https://static.actugaming.net/media/2021/04/returnal-test-screenshot-5.jpg",
      "https://techcrunch.com/wp-content/uploads/2021/04/returnal-ps5-4.jpg",
      "https://img.game-news24.com/2021/10/The-new-PlayStation5-Update-on-the-Returnal-PS5-appears-to-be-coming-quickly.jpeg",
    ],
    price: 49.99,
    releaseDate: "April 30, 2021",
    stars: 4,
    thumbnail: "https://media.direct.playstation.com/is/image/sierialto/returnal-ps5-game-box-front?$Background_Large$",
    id: "g4me-ret-ps5",
    typehint: "game",
  },
  {
    name: "Demon's Souls",
    avaiableOn: [getConsole("PS5")],
    description:
      "From PlayStation Studios and Bluepoint Games comes a remake of the PlayStation classic, Demon’s Souls™",
    extendedDescription:
      "Experience the original brutal challenge, completely remade from the ground up. All presented in stunning visual quality with enhanced performance, this is the world of Boletaria as you have never seen it before.",
    images: [
      "https://media.direct.playstation.com/is/image/sierialto/ps5-demons-souls-game-castle?$Background_Large$",
      "https://media.direct.playstation.com/is/image/sierialto/ps5-demons-souls-game-vanguard?$Background_Large$",
      "https://media.direct.playstation.com/is/image/sierialto/ps5-demons-souls-game-old-hero?$Background_Large$",
      "https://media.direct.playstation.com/is/image/sierialto/ps5-demons-souls-game-altar?$Background_Large$",
    ],
    price: 59.99,
    releaseDate: "November 12, 2020",
    stars: 4,
    thumbnail:
      "https://media.direct.playstation.com/is/image/sierialto/ps5-demons-souls-game-box-front?$Background_Large$",
    id: "g4me-dem-ps5",
    typehint: "game",
  },
  {
    name: "Marvel's Spider-Man: Miles Morales Ultimate",
    avaiableOn: [getConsole("PS5")],
    description:
      "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    extendedDescription:
      "In the latest adventure in the Marvel’s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel’s New York, Miles must take up the mantle of Spider-Man and own it.",
    images: [
      "https://media.direct.playstation.com/is/image/sierialto/ps5-spider-man-miles-morales-ult-game-web-strike-2021?$Background_Large$",
      "https://media.direct.playstation.com/is/image/sierialto/ps5-spider-man-miles-morales-ult-game-watch-out-2021?$Background_Large$",
      "https://media.direct.playstation.com/is/image/sierialto/ps5-spider-man-miles-morales-ult-game-miles-ganke-2021?$Background_Large$",
      "https://media.direct.playstation.com/is/image/sierialto/ps5-spider-man-miles-morales-ult-game-tinkerer-2021?$Background_Large$",
    ],
    price: 69.99,
    releaseDate: "November 12, 2020",
    stars: 5,
    thumbnail:
      "https://media.direct.playstation.com/is/image/sierialto/ps5-spider-man-miles-morales-ultimate-edition-box-front?$Background_Large$",
    id: "g4me-mar-ps5",
    typehint: "game",
  },
  {
    name: "Ghost of Tsushima™ Director's Cut",
    avaiableOn: [getConsole("PS5")],
    description:
      "Forge a new path and wage an unconventional war for the freedom of Tsushima and explore a new story on Iki Island",
    extendedDescription:
      "Roam vast countryside and expansive terrain to encounter rich characters, discover ancient landmarks and uncover the hidden beauty of Tsushima in this open-world action adventure. Seek support from old friends and new unlikely allies to reclaim Tsushima. Break away from tradition, become a new kind of warrior, and protect what’s left of your home and people at all costs.",
    images: [
      "https://media.direct.playstation.com/is/image/sierialto/ghostoftsushima-directorscut-game-young-jin?$Background_Large$",
      "https://media.direct.playstation.com/is/image/sierialto/ghostoftsushima-directorscut-game-jin-flute?$Background_Large$",
      "https://media.direct.playstation.com/is/image/sierialto/ghostoftsushima-directorscut-game-jin-on-bridge?$Background_Large$",
    ],
    price: 69.99,
    releaseDate: "August 20, 2021",
    stars: 5,
    thumbnail:
      "https://media.direct.playstation.com/is/image/sierialto/ps5-ghostoftsushima-directorscut-game-box-front?$Background_Large$",
    id: "g4me-gho-ps5",
    typehint: "game",
  },
];

export const getGameByName = (name: string) => {
  const index = games.findIndex((g) => g.name === name);

  if (index !== -1) {
    return games[index];
  } else {
    return games[0];
  }
};

export const getGameById = (id: string) => {
  const index = games.findIndex((g) => g.id === id);

  if (index !== -1) {
    return games[index];
  } else {
    return games[0];
  }
};

export default games;
