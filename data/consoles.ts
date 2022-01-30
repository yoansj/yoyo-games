import IConsole from "../types/IConsole";

const consoles: Array<IConsole> = [
  {
    fabricant: "Missing game",
    description: "This console does not exist boo",
    images: [],
    name: "No console",
    options: [{ name: "Non existing", price: 450, description: "na" }],
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
      {
        name: "Digital edition",
        price: 399.99,
        description: `Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio**, and an all-new generation of incredible PlayStation® games.
        PS5™ Digital Edition is an all-digital version of the PS5™ console with no disc drive. Sign into your account for PlayStation Network and go to PlayStation®Store to buy and download games.`,
      },
      {
        name: "Classic edition",
        price: 499.99,
        description: `The PS5™ console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio*, and an all-new generation of incredible PlayStation® games.`,
      },
    ],
    price: 399.99,
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
      "https://images.frandroid.com/wp-content/uploads/2021/10/nintendo-switch-oled-a-scaled.jpg",
      "https://media.wired.com/photos/59849154ca110e53e806cef1/16:9/w_2148,h_1208,c_limit/nintendo-switch2_HP.jpg",
      "https://media.wired.com/photos/5d6468905af21f000859fc47/16:9/w_2400,h_1350,c_limit/Gear-NintendoSwitchLite_artwork_02.jpg",
    ],
    name: "Nintendo Switch",
    options: [
      {
        name: "OLED",
        price: 349.99,
        description: `Meet the newest member of the Nintendo Switch family
          The new system features a vibrant 7-inch OLED screen, a wide adjustable stand, a dock with a wired LAN port, 64 GB of internal storage, and enhanced audio.
          7-inch OLED screen
          Feast your eyes on vivid colors and crisp contrast when you play on-the-go.
          See the difference the vibrant screen makes, whether you're racing at top speed or squaring off against enemies.
        `,
      },
      {
        name: "Classic",
        price: 299.99,
        description: `Three modes in one
          Nintendo Switch is designed to fit your life, transforming from home console to portable system in a snap.
          TV Mode
          Dock your Nintendo Switch to enjoy HD gaming on your TV.
          Tabletop Mode
          Flip the stand to share the screen, then share the fun with a multiplayer game.
          Handheld Mode
          Pick it up and play with the Joy‑Con™ controllers attached.
        `,
      },
      {
        name: "Lite",
        price: 199.99,
        description: `Dedicated to handheld play
          The system for gamers on the go.
          The Nintendo Switch Lite is designed specifically for handheld play—so you can jump into your favorite games wherever you happen to be.
          Compact and lightweight
          With its light, sleek design, this system is ready to hit the road whenever you are.
          Built-in controllers
          Controllers are built right into the system for handheld play, and the left side sports a +Control Pad.
          Compatible games
          The Nintendo Switch Lite system plays the library of Nintendo Switch games that work in handheld mode.
        `,
      },
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
