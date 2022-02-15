import IConsole from "./IConsole";
import IItem from "./IItem";

/**
 * Represents a Game
 */
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
