import IConsole from "../types/IConsole";

const consoles: Array<IConsole> = [
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
      "https://img-4.linternaute.com/tVw3haBudzmX4ULtRq_afj5-rNk=/1500x/smart/b9b47fd4897e434892d4e576e9196f44/ccmcms-linternaute/30328908.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNQQQ1ozR75y2TJFUhH1e4bn2BBfe9S9diTV0dMe7PZdCe3TqjVQRcAI330YPk9VymGU&usqp=CAU",
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
