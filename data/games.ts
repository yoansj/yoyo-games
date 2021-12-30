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
    thumbnail:
      "https://culturedvultures.com/wp-content/uploads/2021/02/Rift-Apart-Box-Art.jpg",
    id: "nogame",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgugMBLHOMpD-UxPzGdJtupEX_dlamppcgMw&usqp=CAU",
      "https://cdn.mos.cms.futurecdn.net/Gfq3B4WT8gwNyJRQPw3nW4.jpg",
    ],
    price: 69.99,
    releaseDate: "Already released",
    stars: 5,
    thumbnail:
      "https://culturedvultures.com/wp-content/uploads/2021/02/Rift-Apart-Box-Art.jpg",
    id: "g4me-rat-ps5",
  },
  {
    name: "Returnal",
    avaiableOn: [getConsole("PS5")],
    description: "Break the cycle of chaos on an always-changing alien planet.",
    extendedDescription:
      "After crash-landing on this shape-shifting world, Selene must search through the barren landscape of an ancient civilization for her escape. Isolated and alone, she finds herself fighting tooth and nail for survival. Again and again, she’s defeated – forced to restart her journey every time she dies.",
    images: [
      "https://sm.ign.com/ign_me/gallery/r/ratchet-cl/ratchet-clank-rift-apart-key-art-box-art-pre-order-bonuses-d_dz8f.jpg",
      "https://cdn.arstechnica.net/wp-content/uploads/2021/06/Ratchet-_-Clank_-Rift-Apart_20210526113947.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgugMBLHOMpD-UxPzGdJtupEX_dlamppcgMw&usqp=CAU",
      "https://cdn.mos.cms.futurecdn.net/Gfq3B4WT8gwNyJRQPw3nW4.jpg",
    ],
    price: 49.99,
    releaseDate: "Already released",
    stars: 4,
    thumbnail:
      "https://media.direct.playstation.com/is/image/sierialto/returnal-ps5-game-box-front",
    id: "g4me-ret-ps5",
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
