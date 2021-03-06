import IItem from "./IItem";

/**
 * For PS4
 * PS4 Pro 500gb 500$
 * PS4 Pro 1Tto 700$
 * etc..
 */
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
