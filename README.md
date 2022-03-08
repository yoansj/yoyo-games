<img src="https://github.com/yoansj/yoyo-games/blob/main/.github/images/yoyogames-transparent.png?raw=true" style="width: 50%;" />

Demo | Responsive demo using Responsively
---  | --- |
<img src="https://github.com/yoansj/yoyo-games/blob/main/.github/images/demo.gif?raw=true" /> | <img src="https://github.com/yoansj/yoyo-games/blob/main/.github/images/responsive.gif?raw=true" />


# What is Yoyo Games ?
Yoyo Games is a fictive video game boutique I made to practice my front end skills.
The website is hosted at Vercel on this address, please take a look 😄 [https://yoyo-games.vercel.app](https://yoyo-games.vercel.app)

## Features
* Daily refreshed front page 📅
* Working cart system 🛒
* Diaporama on product pages 🖼
* SEO on all pages 🌐
* Fully responsive 📱
* A cool searchbar 🔎

## Tech Stack
* Typescript
* React
* Next JS
* Tailwind CSS
* Headless UI
* Heroicons
* react-click-away-listener
* react-intersection-observer

## Installation
Clone the repository and then run 

```bash
npm install && npm run dev
# or
yarn install && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can also go to [https://yoyo-games.vercel.app](https://yoyo-games.vercel.app) to see the hosted version.

## Code architeture

### Pages
All of the pages for the website are stored in the `pages` directory.

### Components
All of the components used across the different pages are stored in the `components` directory.

### Games and consoles
I decided to not use an API and to choose the games and the consoles I wanted to put on the website myself.
Games and consoles are stored in the `data` directory with the files `consoles.ts` and `games.ts`.

### Types
Types are stored in the `types` directory
Games and consoles derive from a common interfae that describes an item sold on the website.

#### IItem
```typescript
export default interface IItem {
  /**
   * Name of the item
   */
  name: string;

  /**
   * Short description for the item
   */
  description: string;

  /**
   * Valid URL to the thumbnail of an item
   */
  thumbnail: string;

  /**
   * More images for the item
   */
  images: Array<string>;

  /**
   * Price of the item
   */
  price: number;

  /**
   * Release date of the item
   */
  releaseDate: number | string;

  /**
   * Unique ID for the item
   */
  id: string;

  typehint: "game" | "console";
}
```

#### IGame
```typescript
export default interface IGame extends IItem {
  /**
   * Rating of the game
   */
  stars: 1 | 2 | 3 | 4 | 5;

  /**
   * On where can you play the game
   */
  avaiableOn: [IConsole];

  /**
   * Extended description for the game
   */
  extendedDescription: string;
}
```
#### IConsole
```typescript
export interface IOption {
  /**
   * Name of the option
   */
  name: string;

  /**
   * Price of the option
   */
  price: number;

  /**
   * Description of the option
   */
  description: string;
}

/**
 * Represents a console
 * PS4, XBOX, GameCube...
 */
export default interface IConsole extends IItem {
  /**
   * Sony, Nintendo, Microsoft...
   */
  fabricant: string;

  /**
   * For PS4
   * PS4 Pro 500gb
   * PS4 Pro 1Tto
   * etc..
   */
  options: Array<IOption>;

  /**
   * Index of the option that has been selected by the user
   */
  selectedOption?: IOption;

  /**
   * Type of console
   */
  type: "Handheld" | "Stationnary";

  /**
   * Logo of the console displayed on the console page
   */
  logo: string;
}
 ```

## Thanks
Thanks for reading this far !
If you're interested at what I do you can follow me on Twitter [https://twitter.com/yoansj](https://twitter.com/yoansj)
I'm currently looking for a part-time job 💼
Want to work with me ? Email me at 📧 yoansjpro@gmail.com 📧
