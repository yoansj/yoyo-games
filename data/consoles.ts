import IConsole from "../types/IConsole";

const consoles: Array<IConsole> = [
  {
    fabricant: "Missing game",
    description: "This console does not exist boo",
    images: [],
    name: "PS5",
    options: [
      { name: "Non existing", price: 450, description: "na" },
      { name: "Non existing", price: 500, description: "na" },
    ],
    price: 469.42,
    releaseDate: "--",
    thumbnail: "https://media.direct.playstation.com/is/image/psdglobal/PS5-console-front",
    type: "Stationnary",
    id: "noconsole",
    typehint: "console",
  },
  {
    fabricant: "Sony",
    description: "The new hard to get console from Sony here at Yoyo Games",
    images: [
      "https://i5.walmartimages.ca/images/Enlarge/283/923/6000202283923.jpg",
      "https://cdn.vox-cdn.com/thumbor/dYpu2C4OGi8r6IQKtjCG0mWYEIM=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/70350466/acastro_210511_1777_psRestock_0005.0.jpg",
    ],
    name: "PS5",
    options: [
      { name: "Digital edition", price: 450, description: "na" },
      { name: "Classic edition", price: 500, description: "na" },
    ],
    price: 450,
    releaseDate: "November 12 2020",
    thumbnail: "https://media.direct.playstation.com/is/image/psdglobal/PS5-console-front",
    type: "Stationnary",
    id: "cons-sony-ps5",
    typehint: "console",
  },
  {
    fabricant: "Nintendo",
    description: "The hybrid portable stationnary console from the big N",
    images: [
      "https://i.ytimg.com/vi/0qjGn_AunuA/maxresdefault.jpg",
      "https://mynintendostore.nintendo.fr/media/catalog/product/cache/b4cb1f58b4f6fb6dd00a79cd43d6b8db/1/0/10002207-1-nswitchhwneonbluered-h2x1.jpg",
      "https://www.cnet.com/a/img/lEZLLPtpD6-J39WGSQUfgqd7sVE=/2021/10/05/1fe02b0e-2baa-49f2-93c6-72acb0c47a70/switch-oled-solo.jpg",
    ],
    name: "Nintendo Switch",
    options: [
      { name: "OLED", price: 349.99, description: "na" },
      { name: "Classic", price: 299.99, description: "na" },
      { name: "Lite", price: 199.99, description: "na" },
    ],
    price: 199.99,
    releaseDate: "March 3 2017",
    thumbnail: "https://www.nintendo.co.kr/hardware/img/01-hero/local-hero__pic_oled.png",
    type: "Stationnary",
    id: "cons-nintendo-switch",
    typehint: "console",
  },
];

/**
 * Gets a console by name
 * @param name - Name of the console you want to get
 * @returns A found console or PS5
 */
export const getConsole = (name: string) => {
  const index = consoles.findIndex((c) => c.name === name);

  if (index !== -1) {
    return consoles[index];
  } else {
    return consoles[0];
  }
};

/**
 * Gets a console by id
 * @param id - Id of the console
 * @returns Found console or ps5
 */
export const getConsoleById = (id: string) => {
  const index = consoles.findIndex((g) => g.id === id);

  if (index !== -1) {
    return consoles[index];
  } else {
    return consoles[0];
  }
};

export default consoles;
