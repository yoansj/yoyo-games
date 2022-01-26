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
  /* ----- PS5 GAMES ----- */
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
      "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-screenshot-05-disclaimer-en-30sept20?$native$",
      "https://techcrunch.com/wp-content/uploads/2020/11/demons-souls-2.jpg",
      "https://www.indiewire.com/wp-content/uploads/2020/11/k5BrowgBk7pAyNZzM2iQ5a.jpg",
      "https://www.lifewire.com/thmb/8SH4M0lFTC0aVLD6ue3YOrO_th8=/1500x1000/filters:fill(auto,1)/Demons_Souls_HeroHoriz-c20445163c3a41d1a3cc903b397f80c0.jpg",
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
      "https://www.nme.com/wp-content/uploads/2020/11/spider-man-miles-morale-credit-insomniac-games@2000x1270-3.jpg",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spiderman-1604616315.jpg",
      "https://static.onecms.io/wp-content/uploads/sites/6/2020/11/12/MSM_MilesMorales_PS5_Spider-Men.jpg",
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
      "https://chocobonplan.com/wp-content/uploads/2021/09/test-ghost-of-tsushima-ps5-visuel-5-paysage-scaled.jpg",
      "https://cdn.mos.cms.futurecdn.net/w3Q8iACu8FeAPKhgBPpmDC.jpg",
      "https://gamingbolt.com/wp-content/uploads/2021/07/ghost-of-tsushima-directors-cut-image-1.jpg",
    ],
    price: 69.99,
    releaseDate: "August 20, 2021",
    stars: 5,
    thumbnail:
      "https://media.direct.playstation.com/is/image/sierialto/ps5-ghostoftsushima-directorscut-game-box-front?$Background_Large$",
    id: "g4me-gho-ps5",
    typehint: "game",
  },
  {
    name: "Gran Turismo 7 – 25th Anniversary Edition",
    avaiableOn: [getConsole("PS5")],
    description: "Gran Turismo® 7 brings together the very best features of the Real Driving Simulator.",
    extendedDescription: `The best of Gran Turismo
      With the return of classic cars, iconic tracks, and fan-favourite modes like GT Simulation* and Sport Mode* – Gran Turismo® 7 is the complete Real Driving Simulator, 25 years in the making.
      Find your line
      Whether you’re a racer, collector, tuner, designer, photographer or arcade fan – immerse yourself in the facets of automotive culture that matter most to you.
      Connect and compete
      Join an international community of drivers to share race strategies, tuning tips, livery designs and photos, before taking to the track to go head-to-head.`,
    images: [
      "https://d1ztkyjcxhkkyv.cloudfront.net/wp-content/uploads/2021/09/Gran-Turismo-7-25th-Anniversary-Edition-and-pre-order-bonuses-detailed-02.jpg",
      "https://asset.vg247.com/gran_turismo%207.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/gran_turismo%207.jpg",
      "https://www.spelochsant.se/uploads/images/product_images/351105_original.jpg",
    ],
    price: 89.99,
    releaseDate: "March 04, 2022",
    stars: 5,
    thumbnail:
      "https://media.direct.playstation.com/is/image/sierialto/gran-turismo-7-ps5-25thanniversary-box-front?$Background_Large$",
    id: "g4me-gran-ps5",
    typehint: "game",
  },
  /* ----- NINTENDO SWITCH GAMES ----- */
  {
    name: "Mario Kart 8 Deluxe",
    avaiableOn: [getConsole("Nintendo Switch")],
    description: "Race and battle your friends in the definitive version of Mario Kart 8.",
    extendedDescription: `The best of Gran Turismo
Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!`,
    images: [
      "https://images.gnwcdn.com/2017/usgamer/Mario-Kart-8-Deluxe-Review-Shot-01.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/18-12-2017-mario-kart-8-deluxe-best-kartcharacter-build-combo.jpg",
      "https://d3isma7snj3lcx.cloudfront.net/images/news/30/3050807621/mario-kart-8-deluxe-roule-a-la-mode-breath-of-the-wild-c37023c2.jpg",
      "https://d3isma7snj3lcx.cloudfront.net/images/gallery/10/108081/mario-kart-8-switch-2df796ab.jpg",
    ],
    price: 39.99,
    releaseDate: "April 27 2017",
    stars: 5,
    thumbnail: "https://www.worldshop.eu/medias/sys_master/h3a/hd8/8906854432798.png",
    id: "g4me-mk8d-ns",
    typehint: "game",
  },
  {
    name: "Super Smash Bros Ultimate",
    avaiableOn: [getConsole("Nintendo Switch")],
    description: "Gaming icons clash in the ultimate brawl you can play anytime, anywhere!",
    extendedDescription: `Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more!

Having trouble choosing a stage? Then select the Stage Morph option to transform one stage into another while battling—a series first! Plus, new echo fighters Dark Samus, Richter Belmont, and Chrom join the battle. Whether you play locally or online, savor the faster combat, new attacks, and new defensive options, like a perfect shield. Jam out to 900 different music compositions and go 1-on-1 with a friend, hold a 4-player free-for-all, kick it up to 8-player battles and more! Feel free to bust out your GameCube controllers—legendary couch competitions await—or play together anytime, anywhere!`,
    images: [
      "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/super-smash-bros-ultimate-switch/screenshot-gallery/screenshot01?v=2021120417",
      "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/super-smash-bros-ultimate-switch/screenshot-gallery/screenshot02?v=2021120417",
      "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/super-smash-bros-ultimate-switch/screenshot-gallery/screenshot03?v=2021120417",
    ],
    price: 39.99,
    releaseDate: "April 27 2017",
    stars: 5,
    thumbnail:
      "https://g-h.sgp1.digitaloceanspaces.com/wp-content/uploads/2018/04/19123851/Super-Smash-Bros.-Ultimate.jpg",
    id: "g4me-ssbu-ns",
    typehint: "game",
  },
  {
    name: "Zelda Breath Of The Wild",
    avaiableOn: [getConsole("Nintendo Switch")],
    description:
      "No kingdom. No memories. After a 100-year slumber, Link wakes up alone in a world he no longer remembers.",
    extendedDescription: `The Legend of Zelda: Breath of the Wild[b] is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is the nineteenth installment of The Legend of Zelda franchise and is set at the end of the Zelda timeline. The player controls Link, who awakens from a hundred-year slumber to defeat Calamity Ganon and restore the kingdom of Hyrule.

Similar to the original 1986 The Legend of Zelda game, players are given little instruction and can explore the world freely. Tasks include collecting various items and gear to aid in objectives such as puzzle-solving or side quests. The world is unstructured and designed to encourage exploration and experimentation, and the main story quest can be completed in a nonlinear fashion.`,
    images: [
      "https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/desktop-1.jpg",
      "https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/desktop-3.jpg",
      "https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/desktop-5.jpg",
    ],
    price: 44.99,
    releaseDate: "April 27 2017",
    stars: 5,
    thumbnail: "https://www.bhphotovideo.com/images/images2500x2500/nintendo_hacpaaaaa_the_legend_of_zelda_1311612.jpg",
    id: "g4me-zbotw-ns",
    typehint: "game",
  },
  {
    name: "Pokemon Shield",
    avaiableOn: [getConsole("Nintendo Switch")],
    description: "Pokémon Sword and Pokémon Shield introduce the Galar region and more Pokémon to discover!",
    extendedDescription: `A new generation of Pokémon is coming to the Nintendo Switch™ system. Begin your adventure as a Pokémon Trainer by choosing one of three new partner Pokémon: Grookey, Scorbunny, or Sobble. Then embark on a journey in the new Galar region, where you’ll challenge the troublemakers of Team Yell, while unraveling the mystery behind the Legendary Pokémon Zacian and Zamazenta! Explore the Wild Area, a vast expanse of land where the player can freely control the camera. Team up with three other players locally or online in the new multiplayer co-op Max Raid Battles* in which players will face off against gigantic and super-strong Pokémon known as Dynamax Pokémon.`,
    images: [
      "https://asset.vg247.com/pokemon_sword_shield_3.png/BROK/thumbnail/1600x900/quality/100/pokemon_sword_shield_3.png",
      "https://www.nme.com/wp-content/uploads/2020/06/pokemon-isle-of-armor-expansion-credit-Ben-sledge-gigantamax@2000x1270-1.jpg",
      "https://d28ipuewd7cdcq.cloudfront.net/assets/article/2020/11/13/pokemon-sword-shield-zarude_feature.png",
      "https://www.nintendoenthusiast.com/wp-content/uploads/2020/01/isleofarmor.jpg",
    ],
    price: 44.99,
    releaseDate: "November 15 2019",
    stars: 3,
    thumbnail: "https://www.pokemoncenter.com/products/images/P5698/716-52781/P5698_716-52781_01.jpg",
    id: "g4me-pkmnsh-ns",
    typehint: "game",
  },
  {
    name: "Pokemon Sword",
    avaiableOn: [getConsole("Nintendo Switch")],
    description: "Pokémon Sword and Pokémon Shield introduce the Galar region and more Pokémon to discover!",
    extendedDescription: `A new generation of Pokémon is coming to the Nintendo Switch™ system. Begin your adventure as a Pokémon Trainer by choosing one of three new partner Pokémon: Grookey, Scorbunny, or Sobble. Then embark on a journey in the new Galar region, where you’ll challenge the troublemakers of Team Yell, while unraveling the mystery behind the Legendary Pokémon Zacian and Zamazenta! Explore the Wild Area, a vast expanse of land where the player can freely control the camera. Team up with three other players locally or online in the new multiplayer co-op Max Raid Battles* in which players will face off against gigantic and super-strong Pokémon known as Dynamax Pokémon.`,
    images: [
      "https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/desktop-1.jpg",
      "https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/desktop-3.jpg",
      "https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/desktop-5.jpg",
    ],
    price: 44.99,
    releaseDate: "November 15 2019",
    stars: 3,
    thumbnail: "https://g-h.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/12/23154640/Pokemon-Sword.jpg",
    id: "g4me-pkmnsw-ns",
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
