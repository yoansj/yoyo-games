import IConsole from "../types/IConsole";

const consoles: Array<IConsole> = [
  {
    fabricant: "Sony",
    description: "The new hard to get console from Sony here at Yoyo Games",
    images: [
      "https://img-4.linternaute.com/tVw3haBudzmX4ULtRq_afj5-rNk=/1500x/smart/b9b47fd4897e434892d4e576e9196f44/ccmcms-linternaute/30328908.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNQQQ1ozR75y2TJFUhH1e4bn2BBfe9S9diTV0dMe7PZdCe3TqjVQRcAI330YPk9VymGU&usqp=CAU",
    ],
    name: "PS5",
    options: [
      { name: "Digital edition", price: 450 },
      { name: "Classic edition", price: 500 },
    ],
    price: 500,
    releaseDate: "Already released",
    technicalDescription: "Coming soon",
    thumbnail:
      "https://media.direct.playstation.com/is/image/psdglobal/PS5-console-front",
    type: "Stationnary",
    id: "cons-sony-ps5",
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

export default consoles;
