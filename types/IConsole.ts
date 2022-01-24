import IItem from "./IItem";

/**
 * For PS4
 * PS4 Pro 500gb 500$
 * PS4 Pro 1Tto 700$
 * etc..
 */
interface IOption {
  /**
   * Name of the option
   */
  name: string;

  /**
   * Price of the option
   */
  price: string | number;

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
   * Type of console
   */
  type: "Handheld" | "Stationnary";
}
