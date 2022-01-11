import IItem from "../types/IItem";

/**
 * Manages the Cart system
 */
export default class Cart {
  /**
   * Items currently in the cart
   * We store items with quantity
   */
  items: Array<[number, IItem]>;

  /**
   * Last date when the cart was updated
   * ISO Date string
   */
  refreshDateISO: string;

  constructor() {
    this.items = [];
    this.refreshDateISO = "";
    this.getCartData();
  }

  /* Utils functions for the cart */

  /**
   * Gets cart data from local storage
   * If the difference between stored refreshDate and today is more or equal than 24 hours
   * the cart is emptied
   */
  getCartData() {
    const cartDataString = localStorage.getItem("yoyo-games-cart");

    if (cartDataString !== null) {
      const cartDataJson = JSON.parse(cartDataString);
      this.items = cartDataJson.items;

      let todayDate = new Date();
      let oldDate = new Date(cartDataJson.refreshDateAsString);
      let diff = (todayDate.getTime() - oldDate.getTime()) / 3600000;

      if (diff >= 24) {
        this.items = [];
        this.saveCart();
      }
    }
  }

  saveCart() {
    const date = new Date();
    localStorage.setItem(
      "yoyo-games-cart",
      JSON.stringify({
        items: this.items,
        refreshDateAsString: date.toISOString(),
      })
    );
  }

  /* Item management */

  getItems(): Array<[number, IItem]> {
    console.log("got items: ", this.items);
    return this.items;
  }

  addItem(item: IItem) {
    const index = this.items.findIndex(
      ([quantity, oldItem]) => oldItem.id === item.id
    );

    if (index !== -1) {
      this.items[index][0] += 1;
    } else {
      this.items.push([1, item]);
    }
    this.saveCart();
    this.getCartData();
  }

  /**
   * Adds +1 quantity to an existing item in the cart
   * @param index - Index of the item to be incremented
   */
  incrementItem(index: number) {
    if (this.items[index]) {
      this.items[index][0] += 1;
      this.saveCart();
    }
  }

  /**
   * Removes -1 quantity to an existing item in the cart
   * @param index - Index of the item to be decremented
   */
  decrementItem(index: number) {
    if (this.items[index]) {
      this.items[index][0] -= 1;
      this.saveCart();
    }
  }

  /**
   * Deletes an item by Id
   * @param itemId Id of the item
   * @param quantity If quantity is undefined or zero deletes all the items
   */
  deleteItemById(itemId: string, quantity?: number) {
    const index = this.items.findIndex(([q, oldItem]) => oldItem.id === itemId);

    if (index !== -1) {
      if (quantity === 0 || quantity === undefined) {
        this.items.splice(index, 1);
      } else {
        this.items[index][0] -= quantity;
        if (this.items[index][0] <= 0) {
          this.items.splice(index, 1);
        }
      }
      this.saveCart();
      this.getCartData();
    }
  }
}
