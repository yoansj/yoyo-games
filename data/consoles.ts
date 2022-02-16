import IConsole from "../types/IConsole";

/**
 * Contains all of the consoles 'sold' on the website
 */
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
    logo: "N/A",
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
    logo: "https://cdn.mos.cms.futurecdn.net/cLf6g4KQr4FyX9ufAmxuW6.jpg",
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
    thumbnail: "https://www.techinn.com/f/13734/137343676_2/nintendo-%EC%BD%98%EC%86%94-switch.jpg",
    type: "Stationnary",
    id: "cons-nintendo-switch",
    typehint: "console",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Nintendo_Switch_Logo.png",
  },
  {
    fabricant: "Microsoft",
    description: "The next generation Xbox",
    images: [
      "https://i.pcmag.com/imagery/reviews/02IVfjGisnI2rBYfxu9hDve-12..v1605193197.png",
      "https://compass-ssl.xbox.com/assets/c1/22/c1224771-693d-48a3-8333-e3d6cf8dd153.jpg?n=Xbox-Series-X-and-S-Cross-Sell_Page-Hero-1084_1440x720.jpg",
      "https://s.yimg.com/os/creatr-uploaded-images/2021-10/22b11f90-2aa0-11ec-b5dd-35997a253538",
    ],
    name: "Xbox Series",
    options: [
      {
        name: "X",
        price: 469.99,
        description: `
        Introducing Xbox Series X, the fastest, most powerful Xbox ever.
        Play thousands of titles from four generations of consoles—all games look and play best on Xbox Series X.
        At the heart of Series X is the Xbox Velocity Architecture, which pairs a custom SSD with integrated software for faster, streamlined gameplay with significantly reduced load times.
        Seamlessly move between multiple games in a flash with Quick Resume.
        Explore rich new worlds and enjoy the action like never before with the unmatched 12 teraflops of raw graphic processing power.
        Enjoy 4K gaming at up to 120 frames per second, advanced 3D spatial sound, and more.
        `,
      },
      {
        name: "S",
        price: 299.99,
        description: `
          Introducing the Xbox Series S, the smallest, sleekest Xbox console ever.
          Experience the speed and performance of a next-gen all-digital console at an accessible price point.
          Get started with an instant library of 100+ high quality games, including all new Xbox Game Studios titles like Halo Infinite the day they release, when you add Xbox Game Pass Ultimate (membership sold separately).
          Seamlessly move between multiple games in a flash with Quick Resume.
          At the heart of Series S is the Xbox Velocity Architecture, which pairs a custom-SSD with integrated software for faster, streamlined gameplay with significantly reduced load times.
        `,
      },
    ],
    price: 299.99,
    releaseDate: "November 10 2020",
    thumbnail: "https://images.frandroid.com/wp-content/uploads/2019/12/microsoft-xbox-series-x-frandroid.png",
    type: "Stationnary",
    id: "cons-xbox-x",
    typehint: "console",
    logo: "https://www.somagnews.com/wp-content/uploads/2020/04/39-2-e1587582488565.png",
  },
  {
    fabricant: "Nintendo",
    description: "The most emblematic Nintendo console",
    images: [
      "https://i.ytimg.com/vi/wuyxrgbpThU/maxresdefault.jpg",
      "https://www.geekgeneration.fr/wp-content/uploads/2017/02/Wii-U.jpg",
      "https://i.ytimg.com/vi/rq5n0my-cZw/maxresdefault.jpg",
    ],
    name: "Nintendo Wii",
    options: [
      {
        name: "Classic",
        price: 199.99,
        description: `
        Wii is a home console from Nintendo. Launched in 2006, it introduced motion controlled gaming to a wide audience of Nintendo fans and people who didn't traditionally play video games. A value model of Wii, Wii mini, was launched in 2013, allowing a new audience to enjoy Wii software. Wii mini does not connect to the Internet and does not support online features.
        `,
      },
      {
        name: "U",
        price: 299.99,
        description: `
        Wii U is Nintendo’s first high definition home console, a powerful system with a controller that changes the way you can play games and connect together. There are several hardware packs available – take a look at the available hardware options on our Wii U website.

        A key part of Wii U is the Wii U GamePad, a controller with an in-built display that opens up new gameplay possibilities. You can experience multiplayer gameplay by using both the Wii U GamePad and the television, giving each player their own screen, and even completely different viewpoints and objectives in certain games. In supported software, if the television is in use, players can continue to enjoy games on the Wii U GamePad display thanks to off-TV play.

        Wii U offers plenty of great multiplayer experiences, presenting perfect opportunities to gather and play together with everybody in the family. The system can also be used to communicate and play with other gamers via the internet. Take a look around to find out more about Wii U's features.
        `,
      },
      {
        name: "Mini",
        price: 149.99,
        description: `
        The Wii Mini (also called the RVL-201 and stylized as Wii mini) is a slightly smaller revision of the Wii as well as the third and final model in the Wii family. Multiple features have been removed in order to reduce the price. It was announced by Nintendo of Canada, though it was heavily rumored before the announcement. Announced first on November 27, 2012, it was first released in Canada on December 7, 2012, in Europe and Canada in March 2013, and in North America on November 17, 2013. It comes with a red Wii Remote Plus, Mario Kart Wii, and matching Nunchuk controller. The Wii Mini was discontinued worldwide on November 13, 2017.
        `,
      },
    ],
    price: 149.99,
    releaseDate: "November 19 2006",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/8/83/Wii_console.png",
    type: "Stationnary",
    id: "cons-nintendo-wii",
    typehint: "console",
    logo: "https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/systems_12/wii_26/SQ_Wii.jpg",
  },
  {
    fabricant: "Sony",
    description: "The original PlayStation, in mini format",
    images: [
      "https://i.insider.com/5ba273501982d88b308b5437?width=1136&format=jpeg",
      "https://i.insider.com/5ba246d189c8a124618b5897?width=1000&format=jpeg&auto=webp",
    ],
    name: "PlayStation 1",
    options: [
      {
        name: "Mini",
        price: 99.99,
        description: `
        What is PlayStation Classic?

        PlayStation Classic is a new mini-console, built to celebrate the rich heritage of the original PlayStation. It has been designed to closely resemble the design of the original console in a much smaller form factor, and is preloaded with 20 games from a wide variety of genres. It includes two wired controllers, and will be available December 3, 2018 for $99.99 ($129.99 CAD).

        How big is PlayStation Classic? How much does it weigh?

        PlayStation Classic measures 5.8″ x 1.3″ x 4.1″, which is a 45% reduction in size from the original console. The footprint of the mini-console is smaller than a PS4 game case. PlayStation Classic weighs approximately 6.0 ounces, and each controller weighs approximately 4.9 ounces.

        Which games are pre-loaded on PlayStation Classic?

        Battle Arena Toshinden*
        Cool Boarders 2*
        Destruction Derby*
        Final Fantasy VII
        Grand Theft Auto*
        Intelligent Qube
        Jumping Flash!*
        Metal Gear Solid
        Mr. Driller
        Oddworld: Abe’s Oddysee*
        Rayman
        Resident Evil Director’s Cut*
        Revelations: Persona
        R4 Ridge Racer Type 4
        Super Puzzle Fighter II Turbo
        Syphon Filter
        Tekken 3*
        Tom Clancy’s Rainbow Six*
        Twisted Metal
        Wild Arms​
        `,
      },
    ],
    price: 99.99,
    releaseDate: "December 3 2018",
    thumbnail:
      "https://www.mytrendyphone.nl/images/Sony-PlayStation-Classic-Retro-Gaming-Console-20-Games-0711719999492-05122019-01-p.jpg",
    type: "Stationnary",
    id: "cons-sony-ps1mini",
    typehint: "console",
    logo: "https://www.seekpng.com/png/detail/89-893528_playstation-1-logo-play-station-1-png.png",
  },
  {
    fabricant: "Nintendo",
    description: "An iconic portable console from Nintendo",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/f27352101923919.5f2a907faf346.jpg",
      "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/support_9/H2x1_GameBoyAdvanceSP_support_no_logo.jpg",
    ],
    name: "Game Boy Advance",
    options: [
      {
        name: "SP",
        price: 199.99,
        description: `
        The Game Boy Advance SP(GBA SP), released in Japan on February 14, 2003, is a sixth-generation handheld game console developed, released, and marketed by Nintendo that served as an upgraded version of the original Game Boy Advance. The "SP" in the name stands for "Special". It is the penultimate console in the Game Boy Advance family before the Game Boy Micro, which was released in September 2005. The Game Boy Advance line was followed by the Nintendo DS family, starting with the release of the original Nintendo DS in November 2004.
        `,
      },
    ],
    price: 199.99,
    releaseDate: "February 14 2003",
    thumbnail: "https://d1eh9yux7w8iql.cloudfront.net/product_images/222977_6aefe595-ec12-40b4-8b9b-53f8d962aba2.jpg",
    type: "Handheld",
    id: "cons-nintendo-gba",
    typehint: "console",
    logo: "http://videogame-generation.com/images/gba/177-1778359_gameboy-advance-logo-png-transparent-png.png",
  },
  {
    fabricant: "Sony",
    description: "Play PlayStation games on the go",
    images: [
      "https://images.frandroid.com/wp-content/uploads/2021/10/playstation-vita.jpg",
      "https://www.gamespot.com/a/uploads/original/1601/16018044/3884282-ps-vita-6.jpg",
    ],
    name: "PS Vita",
    options: [
      {
        name: "Classic",
        price: 119.99,
        description: `
        The PlayStation Vita (PS Vita, or Vita) is a handheld video game console developed and marketed by Sony Interactive Entertainment. It was first released in Japan on December 17, 2011, and in North America, Europe, and other international territories beginning on February 22, 2012. The console is the successor to the PlayStation Portable, and a part of the PlayStation brand of gaming devices; as part of the eighth generation of video game consoles, it primarily competed with the Nintendo 3DS.

        The original model of the handheld includes a 5-inch (130 mm) OLED multi-touch capacitive touchscreen, two analog joysticks, and front and shoulder push-button input, and supports Bluetooth, Wi-Fi, and optional 3G. The Vita features a quad-core ARM Cortex-A9 MPCore CPU and a quad-core SGX543MP GPU. The PS Vita 2000 series, a revised version of the system, was released across 2013 and 2014. It has all of the same features with a slightly smaller size, extended battery life, and an LCD screen instead of OLED. Sony released the PlayStation TV, a short-lived, re-purposed version of the Vita that uses a television screen like a home video game console, discontinued at the end of 2015.
        `,
      },
    ],
    price: 119.99,
    releaseDate: "December 17 2011",
    thumbnail: "https://d1eh9yux7w8iql.cloudfront.net/product_images/247747_0a8fc8e1-de85-4fc6-b223-46c2c9e9d917.jpg",
    type: "Handheld",
    id: "cons-sony-psvita",
    typehint: "console",
    logo: "https://d1eh9yux7w8iql.cloudfront.net/product_images/247747_0a8fc8e1-de85-4fc6-b223-46c2c9e9d917.jpg",
  },
  {
    fabricant: "Google",
    description: "Stadia Premiere Edition lets you bring Stadia to the biggest screen in your home your TV",
    images: [
      "https://androidcommunity.com/wp-content/uploads/2020/06/Stadia-Premiere-Edition-starter-pack_170620_img1.jpg",
      "https://cdn.mos.cms.futurecdn.net/jqwJeqqrcF6UBjNtVrEniV-1200-80.jpg",
    ],
    name: "Stadia",
    options: [
      {
        name: "Premiere Edition",
        price: 9.99,
        description: `
        Everything you need to know about Stadia.
        Instantly play high-quality video games with Stadia. Stream your favorites on your laptop, desktop, compatible smart devices and more. Watch the video to find out more about Stadia.

        Introducing the Stadia controller.
        Purposefully designed, you can take control of your games on TVs, laptops, desktops and compatible tablets. Plus, you can record and save your favorite gaming clips and screenshots with the Capture button.

        Google Chromecast Ultra.
        Invite Stadia into your living room and stream games on your TV with the included Google Chromecast Ultra. This device works seamlessly with the Stadia controller.

        Choose your favorite screens.
        You pick the screens where you play — laptops, desktops, compatible phones and tablets. With Stadia Premiere Edition, you can also play on your TV with the Chromecast Ultra.

        (Price is a joke please don't sue me oh mighty Google staff)
        `,
      },
    ],
    price: 9.99,
    releaseDate: "November 19 2019",
    thumbnail:
      "https://lh3.googleusercontent.com/otS4E2kEltanpwYzVoTVz9xpGEuLRapSgw2WF1BFMuXN1tlblOiX7fHoDCadI5x8uQ=w1400-rwa",
    type: "Stationnary",
    id: "cons-google-stadia",
    typehint: "console",
    logo: "https://lh3.googleusercontent.com/otS4E2kEltanpwYzVoTVz9xpGEuLRapSgw2WF1BFMuXN1tlblOiX7fHoDCadI5x8uQ=w1400-rwa",
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
