import IGame from "../types/IGame";
import IItem from "../types/IItem";
import consoles, { getConsole } from "./consoles";

/**
 * Contains all the games 'sold' on the website
 */
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
    name: "Spider-Man Miles Morales Ultimate",
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
      "https://asset.vg247.com/pokemon_sword_shield_3.png/BROK/thumbnail/1600x900/quality/100/pokemon_sword_shield_3.png",
      "https://www.nme.com/wp-content/uploads/2020/06/pokemon-isle-of-armor-expansion-credit-Ben-sledge-gigantamax@2000x1270-1.jpg",
      "https://d28ipuewd7cdcq.cloudfront.net/assets/article/2020/11/13/pokemon-sword-shield-zarude_feature.png",
      "https://www.nintendoenthusiast.com/wp-content/uploads/2020/01/isleofarmor.jpg",
    ],
    price: 44.99,
    releaseDate: "November 15 2019",
    stars: 3,
    thumbnail: "https://g-h.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/12/23154640/Pokemon-Sword.jpg",
    id: "g4me-pkmnsw-ns",
    typehint: "game",
  },
  {
    name: "Metroid Dread",
    avaiableOn: [getConsole("Nintendo Switch")],
    description:
      "Join bounty hunter Samus Aran as she tries to escape a deadly alien world plagued by a mechanical menace",
    extendedDescription: `Upon investigating a mysterious transmission on Planet ZDR, Samus faces a mysterious foe that traps her in this dangerous world. The remote planet has been overrun by vicious alien lifeforms and murderous robots called E.M.M.I. Hunt or be hunted as you make your way through a labyrinth of enemies in Samus’ most intense side-scrolling adventure yet.`,
    images: [
      "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/m/metroid-dread-switch/screenshot-gallery/screenshot03?v=2021121623",
      "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/m/metroid-dread-switch/screenshot-gallery/screenshot05?v=2021121623",
      "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/m/metroid-dread-switch/screenshot-gallery/screenshot06?v=2021121623",
    ],
    price: 59.99,
    releaseDate: "October 8 2021",
    stars: 5,
    thumbnail: "https://nintendoeverything.com/wp-content/uploads/Metroid-Dread_boxart.jpg",
    id: "g4me-medr-ns",
    typehint: "game",
  },
  {
    name: "Super Mario Odyssey",
    avaiableOn: [getConsole("Nintendo Switch")],
    description: "Embark on a cap-tivating, globe-trotting adventure",
    extendedDescription: `Explore incredible places far from the Mushroom Kingdom as you join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure. Use amazing new abilities—like the power to capture and control objects, animals, and enemies—to collect Power Moons so you can power up the Odyssey airship and save Princess Peach from Bowser’s wedding plans!`,
    images: [
      "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/super-mario-odyssey-switch/screenshot-gallery/screenshot01?v=2021120301",
      "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/super-mario-odyssey-switch/screenshot-gallery/screenshot03?v=2021120301",
      "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/super-mario-odyssey-switch/screenshot-gallery/screenshot06?v=2021120301",
      "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/super-mario-odyssey-switch/screenshot-gallery/screenshot02?v=2021120301",
    ],
    price: 49.99,
    releaseDate: "October 27 2017",
    stars: 5,
    thumbnail:
      "https://www.bhphotovideo.com/images/images2000x2000/nintendo_hacpaaaca_super_mario_odyssey_nintendo_1352884.jpg",
    id: "g4me-marody-ns",
    typehint: "game",
  },
  {
    name: "Pokémon Legends: Arceus",
    avaiableOn: [getConsole("Nintendo Switch")],
    description: "Discover the Hisui region, Jubilife Village, and the characters of Pokémon Legends: Arceus",
    extendedDescription: `Your adventure is set in the expansive natural majesty of the Hisui region, in an age long ago when it was rare for people and Pokémon to live in close harmony. In time, this land of Hisui will come to be called Sinnoh—a region you may know well.

Mount Coronet rises from the center of the Hisui region, surrounded on all sides by areas with distinct environments. Each area is rich in its own natural features and plays host to different Pokémon ecosystems. One such area is the Obsidian Fieldlands, which is resplendent with gorgeous flowers and verdant vegetation—what’s more, it appears to teem with Pokémon that favor meadows and forests.`,
    images: [
      "https://cdn1.dotesports.com/wp-content/uploads/2021/09/15000638/Pokemon-Legends-Arceus-keyart.jpg",
      "https://cdn.mos.cms.futurecdn.net/PjkfnYZstSpBUqcsYDCAHf.jpg",
      "https://nintendoeverything.com/wp-content/uploads/pokemon-legends-arceus-alpha-pokemon.jpg",
      "https://cdn1.dotesports.com/wp-content/uploads/2021/09/28084310/Legends_Arceus_-_Screenshot_13.jpg",
    ],
    price: 49.99,
    releaseDate: "January 28 2022",
    stars: 4,
    thumbnail: "https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/154/15493/15493203.jpg",
    id: "g4me-pkmnbotw-ns",
    typehint: "game",
  },
  {
    name: "Dying Light 2 Stay Human",
    avaiableOn: [getConsole("Xbox Series")],
    description: "Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again",
    extendedDescription: `
    Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again. The City, one of the last large human settlements, is torn by conflict. Civilization has fallen back into the Dark Ages. And yet, we still have hope.

You are a wanderer with the power to change the fate of The City. But your exceptional abilities come at a price. Haunted by memories you cannot decipher, you set out to learn the truth… and find yourself in a combat zone. Hone your skills, as to defeat your enemies and make allies, you’ll need both fists and wits. Unravel the dark secrets behind the wielders of power, choose sides and decide your destiny. But wherever your actions take you, there's one thing you can never forget—stay human.
    `,
    images: [
      "https://store-images.s-microsoft.com/image/apps.41588.68444863531073822.9d29c0ed-35c9-4a8a-abb5-966ada3e1828.1d24ff02-954d-4cc9-b682-9267e584aaa7",
      "https://store-images.s-microsoft.com/image/apps.36013.68444863531073822.9d29c0ed-35c9-4a8a-abb5-966ada3e1828.2b7ab527-89fa-4566-943b-e1f5603101bb",
      "https://store-images.s-microsoft.com/image/apps.19145.68444863531073822.9d29c0ed-35c9-4a8a-abb5-966ada3e1828.a51ed73f-4967-4142-9c59-24b310ca690b",
      "https://store-images.s-microsoft.com/image/apps.38922.68444863531073822.9d29c0ed-35c9-4a8a-abb5-966ada3e1828.b79cdf05-c4b4-497d-81fc-5d0be2a52e65",
    ],
    price: 59.99,
    releaseDate: "February 4 2022",
    stars: 5,
    thumbnail:
      "https://i5.walmartimages.com/asr/945607c1-6baa-42cc-bcfc-acff014898ae.71c776a74542ea7635caaffed0d2d1a8.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    id: "g4me-dl2-ms",
    typehint: "game",
  },
  {
    name: "Balan Wonderworld",
    avaiableOn: [getConsole("Xbox Series")],
    description: "Welcome to a wondrous all-action show, the likes of which has never been seen before!",
    extendedDescription: `
    BALAN WONDERWORLD is a wondrous action platformer game themed around the Balan Theatre. Led by the enigmatic maestro named Balan, the stars of the show Emma and Leo will use special abilities from a multitude of characterful costumes as they adventure in the bizarre and imaginary land of Wonderworld. Here memories and vistas from the real world mix with the things that people hold dear.
    Twelve different tales await our stars in the Wonderworld, each with their own unique quirks. They will explore all corners of these labyrinthine stages, filled with a myriad of tricks and traps, to get to the heart of each story.

    ■Wonderworld exists in people's hearts and imagination
    The setting for thbis tale is the fantastic, bizarre land of Wonderworld; a place where people's happy and positive memories mix with their restless worries and negativity. Leo and Emma are led into Wonderworld by the mysterious clown Balan and set off on a journey to find what is important to them.
    Before they can return to the real world, they must first restore the lost balance in their hearts...
    (The price is a joke please don't sue me)
    `,
    images: [
      "https://store-images.s-microsoft.com/image/apps.52911.14119634911250293.72264146-7107-4847-ab0c-77654cced41f.98980cad-0505-417e-85bb-b8f9158cfc4a",
      "https://store-images.s-microsoft.com/image/apps.32262.14119634911250293.72264146-7107-4847-ab0c-77654cced41f.a8f26921-c865-42c5-944d-2d43d2de2ae4",
      "https://store-images.s-microsoft.com/image/apps.4436.14119634911250293.72264146-7107-4847-ab0c-77654cced41f.68dfb96c-d08f-41f7-905b-b9cf862bc747",
    ],
    price: 1,
    releaseDate: "March 26 2021",
    stars: 1,
    thumbnail: "https://media.gamestop.com/i/gamestop/11109006/Balan-Wonderworld---Xbox-One?$pdp$",
    id: "g4me-balan-ms",
    typehint: "game",
  },
  {
    name: "Battlefield 2042",
    avaiableOn: [getConsole("Xbox Series")],
    description: "The new entrance of the Battlefield series",
    extendedDescription: `
    Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. In a near-future world transformed by disorder, adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal.

    With support for 128 players on Xbox Series X|S, Battlefield™ 2042 brings unprecedented scale on vast battlegrounds. Players will take on several experiences comprising elevated versions of Conquest and Breakthrough, Battlefield™ Portal; a new community-driven platform where players can create, share and discover unexpected battles from Battlefield’s iconic past, present and future, and Battlefield™ Hazard Zone; a tense, squad-focused survival experience where every bullet, every skirmish, and every decision counts.
    `,
    images: [
      "https://store-images.s-microsoft.com/image/apps.59729.14160631264571868.b44771ae-e872-4041-af62-171876fe1049.bd31a65c-86ae-42a0-ab32-0ba09c975d1a",
      "https://store-images.s-microsoft.com/image/apps.33388.14160631264571868.b44771ae-e872-4041-af62-171876fe1049.251c2af0-4e58-4f7b-84d6-3efcc233986c",
      "https://store-images.s-microsoft.com/image/apps.39002.14160631264571868.b44771ae-e872-4041-af62-171876fe1049.e8048e48-f5b1-4005-b6f0-b1f9f375ffe7",
      "https://store-images.s-microsoft.com/image/apps.21065.14160631264571868.13fd4375-2a10-47a0-bac6-6bd12f673201.5f34328e-f9fb-4102-9acf-111142e02f3a",
    ],
    price: 39.99,
    releaseDate: "June 2 2021",
    stars: 2,
    thumbnail: "https://media.gamestop.com/i/gamestop/11148121/Battlefield-2042---Xbox-Series-X?$pdp$",
    id: "g4me-bf42-ms",
    typehint: "game",
  },
  {
    name: "Borderlands 3",
    avaiableOn: [getConsole("Xbox Series")],
    description:
      "The original shooter-looter returns, packing bazillions of guns and an all-new mayhem-fueled adventure!",
    extendedDescription: `
    A MAYHEM-FUELED THRILL RIDE
    Stop the fanatical Calypso Twins from uniting the bandit clans and claiming the galaxy’s ultimate power. Only you, a thrill-seeking Vault Hunter, have the arsenal and allies to take them down.

    YOUR VAULT HUNTER, YOUR PLAYSTYLE
    Become one of four extraordinary Vault Hunters, each with unique abilities, playstyles, deep skill trees, and tons of personalization options. All Vault Hunters are capable of awesome mayhem alone, but together they are unstoppable.

    LOCK, LOAD, AND LOOT
    With bazillions of guns and gadgets, every fight is an opportunity to score new gear. Firearms with self-propelling bullet shields? Check. Rifles that spawn fire-spewing volcanoes? Obviously. Guns that grow legs and chase down enemies while hurling verbal insults? Yeah, got that too.
    `,
    images: [
      "https://store-images.s-microsoft.com/image/apps.31072.66416288418246547.8db04ed4-6710-424c-b2c7-fc1b8f89e9a2.26f4c524-1448-4f81-b1e4-7f1907e46b77",
      "https://store-images.s-microsoft.com/image/apps.57950.66416288418246547.8db04ed4-6710-424c-b2c7-fc1b8f89e9a2.f8bede91-df22-42a8-b8a2-997749df5a09",
      "https://store-images.s-microsoft.com/image/apps.42230.66416288418246547.8db04ed4-6710-424c-b2c7-fc1b8f89e9a2.893af313-6b18-43ed-9df4-ae3c0097a418",
    ],
    price: 39.99,
    releaseDate: "September 13 2019",
    stars: 3,
    thumbnail: "https://media.auchan.fr/bea76f8c-b10b-43b7-99ec-ca792e435e7e_1200x1200/B2CD/",
    id: "g4me-borderl3-ms",
    typehint: "game",
  },
  {
    name: "Chorus",
    avaiableOn: [getConsole("Xbox Series")],
    description: "Take control of Nara on a quest to destroy the dark cult that created her",
    extendedDescription: `
    Take control of Nara on a quest to destroy the dark cult that created her. Unlock devastating weapons and mind-bending abilities in a true evolution of the space-combat shooter. Along with Forsaken, her sentient starfighter, explore ancient temples, engage in exhilarating zero-g combat, and venture beyond our waking reality.

    A JOURNEY OF REDEMPTION – Follow Nara as she faces her haunted past. Journey across the galaxy and beyond the boundaries of reality to unite resistance forces against the Circle and their leader, the Great Prophet, at all costs.

    VENTURE BEYOND THE VOID – Enter a dark new universe, teeming with mystery and rife with conflict. Explore epic locations such as sprawling space stations and strange planes of existence. Engage in exhilarating zero-g dogfights from epic cosmic vistas to tight crystalline corridors. Chorus balances the scale and spectacle of space exploration with frenetic, fast-paced action.

    ONE PILOT, ONE SHIP, ONE LIVING WEAPON – Attain powerful and distinct weapons and combat upgrades. Master your ship’s unique drift mechanic and deadly mind-bending abilities, including extra-sensory perception, teleportation and telekinesis, to overcome massive hordes of enemies and take down titanic battleships. Chain your powers together to become the ultimate living weapon.
    `,
    images: [
      "https://store-images.s-microsoft.com/image/apps.12772.13751787478651765.747d9b13-75e6-4c34-a196-72624dc19de6.53e80bb4-2a6b-4d6a-b803-ae72ef365e40",
      "https://store-images.s-microsoft.com/image/apps.31242.13751787478651765.747d9b13-75e6-4c34-a196-72624dc19de6.15aa7960-2d59-40e8-8814-888a7acc80ed",
      "https://store-images.s-microsoft.com/image/apps.63368.13751787478651765.747d9b13-75e6-4c34-a196-72624dc19de6.286cc1e2-451a-463e-9eb4-1319eeee0126",
      "https://store-images.s-microsoft.com/image/apps.64044.13751787478651765.747d9b13-75e6-4c34-a196-72624dc19de6.b02d08ee-ac8b-4b8e-b141-55efb620a5b6",
    ],
    price: 39.99,
    releaseDate: "December 2nd 2021",
    stars: 5,
    thumbnail:
      "https://target.scene7.com/is/image/Target/GUEST_2000a853-51b3-4e7f-93f9-dc4982f85d32?wid=488&hei=488&fmt=pjpeg",
    id: "g4me-chorus-ms",
    typehint: "game",
  },
  {
    name: "Crash Bandicoot™ 4: It’s About Time",
    avaiableOn: [getConsole("Xbox Series")],
    description:
      "It’s About Time - for a brand-wumping new Crash Bandicoot™ game! Crash fourward into a time shattered adventure with your favorite marsupials.",
    extendedDescription: `
    It’s About Time - for a brand-wumping new Crash Bandicoot™ game! Crash fourward into a time shattered adventure with your favorite marsupials.

    Neo Cortex and N. Tropy are back at it again and launching an all-out assault on not just this universe, but the entire multiverse! Crash and Coco are here to save the day by reuniting the four Quantum Masks and bending the rules of reality.

    New abilities? Check. More playable characters? Yep. Alternate dimensions? Obviously. Ridonkulous bosses? For sure. Same awesome sauce? You bet your sweet jorts. Wait, are they actually jorts? Not in this universe!
    `,
    images: [
      "https://store-images.s-microsoft.com/image/apps.1193.14289021587791584.d452a7bd-8863-41a9-96ea-d77611bdd52c.d67df380-7309-40d7-9cc0-d90689eaeea9",
      "https://store-images.s-microsoft.com/image/apps.32971.14289021587791584.d452a7bd-8863-41a9-96ea-d77611bdd52c.73fd7648-6ffb-4ca6-afba-48ac0fd9bde3",
      "https://store-images.s-microsoft.com/image/apps.5532.14289021587791584.d452a7bd-8863-41a9-96ea-d77611bdd52c.5be07d4f-76b0-4161-9154-075cde184b9b",
      "https://store-images.s-microsoft.com/image/apps.34690.14289021587791584.d452a7bd-8863-41a9-96ea-d77611bdd52c.773fa3a8-8969-44fc-9d4b-7a4b93696ce7",
    ],
    price: 59.99,
    releaseDate: "November 2nd 2020",
    stars: 4,
    thumbnail:
      "https://target.scene7.com/is/image/Target/GUEST_b587cb40-351b-420f-bd4c-e6a95ec9e655?wid=488&hei=488&fmt=pjpeg",
    id: "g4me-crash4-ms",
    typehint: "game",
  },
  {
    name: "Doom Eternal",
    avaiableOn: [getConsole("Xbox Series")],
    description:
      "Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.",
    extendedDescription: `
    The only thing they fear... is you.

    Experience the ultimate combination of speed and power in DOOM Eternal - the next leap in push-forward, first-person combat.

    SLAYER THREAT LEVEL AT MAXIMUM
    Armed with a shoulder-mounted flamethrower, retractable wrist-mounted blade, upgraded guns and mods, and abilities, you're faster, stronger, and more versatile than ever.

    UNHOLY TRINITY
    Take what you need from your enemies: Glory kill for extra health, incinerate for armor, and chainsaw demons to stock up on ammo to become the ultimate demon-slayer.

    Enter BATTLEMODE
    A new 2 versus 1 multiplayer experience. A fully-armed DOOM Slayer faces off against two player-controlled demons, fighting it out in a best-of-five round match of intense first-person combat.
    `,
    images: [
      "https://store-images.s-microsoft.com/image/apps.40576.14633846388270955.183654ce-6460-48f9-a060-3a7d8d15ff8f.bf4bceb2-709b-475a-9801-06b0d9bc94ec",
      "https://store-images.s-microsoft.com/image/apps.30643.14633846388270955.183654ce-6460-48f9-a060-3a7d8d15ff8f.a88342e5-e212-47ff-a38e-24c3dc51e6ee",
      "https://store-images.s-microsoft.com/image/apps.9864.14633846388270955.183654ce-6460-48f9-a060-3a7d8d15ff8f.9f389ded-f126-4ad4-9378-7b1a6e1a6cab",
      "https://store-images.s-microsoft.com/image/apps.9268.14633846388270955.183654ce-6460-48f9-a060-3a7d8d15ff8f.a57a8d6c-1d15-4d86-b47e-a2e95034ec1e",
    ],
    price: 59.99,
    releaseDate: "March 20 2020",
    stars: 4,
    thumbnail:
      "https://i5.walmartimages.com/asr/c4ef831e-326f-4712-9e61-e17e7760909a_5.ec45ea5f04657307ab7db74b6d01b1a2.jpeg",
    id: "g4me-doomet-ms",
    typehint: "game",
  },
  {
    name: "Halo Infinite (Campaign)",
    avaiableOn: [getConsole("Xbox Series")],
    description: "Master Chief is ready to confront the most ruthless foe he’s ever faced",
    extendedDescription: `
    When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. Step inside the armor of humanity’s greatest hero to experience an epic adventure and explore the massive scale of the Halo ring. To experience the campaign, purchase Halo Infinite (Campaign).
    `,
    images: [
      "https://store-images.s-microsoft.com/image/apps.34937.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.e59bd684-5ebe-4ea4-afb6-aea74350300e",
      "https://store-images.s-microsoft.com/image/apps.44829.13727851868390641.ccc2d91d-118b-47bc-b87a-a5cc449f8e8e.2866c0ef-c210-48f1-b4a4-ca4675ef83c9",
      "https://store-images.s-microsoft.com/image/apps.8046.13727851868390641.ccc2d91d-118b-47bc-b87a-a5cc449f8e8e.4f075bc3-1ee9-4c8f-ae7b-b734523091b5",
      "https://store-images.s-microsoft.com/image/apps.13680.13727851868390641.ccc2d91d-118b-47bc-b87a-a5cc449f8e8e.121ec429-b6db-4cac-a087-29907d6aa52e",
    ],
    price: 59.99,
    releaseDate: "December 9 2021",
    stars: 4,
    thumbnail: "https://m.media-amazon.com/images/I/811QTSH5K6L._SL1500_.jpg",
    id: "g4me-haloinf-ms",
    typehint: "game",
  },
  {
    name: "Halo: The Master Chief Collection",
    avaiableOn: [getConsole("Xbox Series")],
    description: "The series that changed console gaming forever",
    extendedDescription: `
    Campaign: Featuring Halo: Reach, Halo: Combat Evolved Anniversary, Halo 2: Anniversary, Halo 3, Halo 3: ODST Campaign, and Halo 4, The Master Chief Collection offers players their own exciting journey through the epic saga. Starting with the incredible bravery of Noble Six in Halo: Reach and ending with the rise of a new enemy in Halo 4, the Master Chief’s saga totals 67 campaign missions over six critically-acclaimed titles.

    Multiplayer: Each of the six games in The Master Chief Collection brings its own multiplayer maps, modes and game types. With more than 120 multiplayer maps and countless ways to play with community-created Forge content the Collection has the most diverse and expansive Halo multiplayer experience to date.

    Forge: Halo’s iconic map editor is improved, refreshed and better than ever. Build new maps with expanded functionality, increased budget, new objects and create new ways to play with custom game modes.**
    `,
    images: [
      "https://store-images.s-microsoft.com/image/apps.13778.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.9775a5e3-d5a0-4cdc-9d4a-a10ed94b3fc4",
      "https://store-images.s-microsoft.com/image/apps.12698.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.c1bfea92-681c-4b0b-b3d7-18aced1074a5",
      "https://store-images.s-microsoft.com/image/apps.61921.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.f35a4966-4451-4ee6-8626-2efa61270d54",
    ],
    price: 39.99,
    releaseDate: "December 4 2019",
    stars: 4,
    thumbnail:
      "https://external-preview.redd.it/qVL0i7d3UOqDPjGnc2B4S_2e6zeRF8ljOftasarUDQk.png?auto=webp&s=0bff4c38f250dcc225da06123e615aa603a5003c",
    id: "g4me-halocol-ms",
    typehint: "game",
  },
];

export const getGameByName = (name: string) => {
  const index = games.findIndex((g) => g.name.toLowerCase() === name.toLowerCase());

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

const searchableItems: Array<IItem> = [...consoles, ...games].filter(
  (i) => i.name !== "Missing game" && i.id !== "noconsole"
);

export { searchableItems };
export default games;
