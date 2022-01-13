import React from "react";
import IConsole from "../types/IConsole";
import IGame from "../types/IGame";
import IItem from "../types/IItem";
import Cart from "../utils/Cart";

interface IProps {
  /**
   * Item in the cart
   */
  item: IItem;

  /**
   * Map index number
   */
  index: number;

  /**
   * Quantity of said item
   */
  quantity: number;

  /**
   * Reference to the cart
   */
  cart: Cart | undefined;

  /**
   * Function called to refresh the cart
   */
  refreshFunction: () => any | void | undefined;
}

export default function CartItem({
  item,
  index,
  cart,
  refreshFunction,
  quantity,
}: IProps) {
  const game = item as IGame;
  const console = item as IConsole;

  const incrementItem = (index: number) => {
    if (cart) {
      cart.incrementItem(index);
      refreshFunction();
    }
  };

  const decrementItem = (index: number) => {
    if (cart) {
      cart.decrementItem(index);
      refreshFunction();
    }
  };

  const removeItemFromCart = (index: number) => {
    if (cart) {
      cart.deleteItemByIndex(index);
      refreshFunction();
    }
  };

  if (item.typehint === "game") {
    return (
      <div key={index} className="border border-purple-500 flex flex-row my-10">
        <a className="max-w-xs lg:h-80" href={"games/" + item.id}>
          <img src={item.thumbnail} />
        </a>
        <div className="flex flex-col w-full justify-around">
          <div id="name-description">
            <h1 className="text-3xl font-bold">{item.name}</h1>
            <p className="text-xl">{game.description}</p>
          </div>
          <div id="stats">
            <h2 className="text-xl">
              For: {game.avaiableOn.map((console) => console.name + " ")}
            </h2>
            <h2 className="text-xl">Release date: {game.releaseDate}</h2>
            <h2 className="text-xl">Price: {game.price} $</h2>
          </div>
          <div id="actions">
            <div className="flex justify-between">
              <div className="flex flex-row justify-around">
                <button
                  disabled={quantity <= 1}
                  onClick={() => decrementItem(index)}
                  className="bg-white p-3 rounded-xl border-2 border-red-500 hover:bg-red-600 disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-white text-red-500"
                >
                  <h1 className="font-bold">-</h1>
                </button>
                <div className="border-2 border-black rounded-xl p-3 mx-4 text-center">
                  <h1 className="font-bold inline-block m-2">
                    Quantity: {quantity}
                  </h1>
                </div>
                <button
                  onClick={() => incrementItem(index)}
                  className="bg-white p-3 rounded-xl border-2 border-green-500 hover:bg-green-600"
                >
                  <h1 className="text-green-500 font-bold">+</h1>
                </button>
              </div>
              <div className="flex flex-row justify-around">
                <button
                  className="bg-purple-500 p-3 rounded-xl  hover:bg-purple-700 mr-4"
                  onClick={() => removeItemFromCart(index)}
                >
                  <h1 className="text-white font-bold">Remove item</h1>
                </button>
                <button className="bg-purple-500 p-3 rounded-xl  hover:bg-purple-700">
                  <a href={"games/" + item.id} className="text-white font-bold">
                    Item page
                  </a>
                </button>
              </div>
              <div className="mr-4">
                <h1 className="font-bold text-xl">Total price</h1>
                <h1 className="font-bold text-3xl text-purple-500">
                  ${(quantity * item.price).toFixed(2)}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div key={index} className="border border-purple-500 flex flex-row">
        <a className="max-w-xs h-80" href={"games/" + item.id}>
          <img src={item.thumbnail} />
        </a>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mt-4">{item.name}</h1>
          <h2 className="text-xl mt-4">For: {}</h2>
        </div>
      </div>
    );
  }
}
