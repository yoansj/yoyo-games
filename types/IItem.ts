/**
 * Represents an item sold on the shop
 */
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
  price: string | number;

  /**
   * Release date of the item
   */
  releaseDate: number | string;

  /**
   * Unique ID for the item
   */
  id: string;
}
