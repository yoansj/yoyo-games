import { Listbox } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
import { MinusIcon, TrashIcon, XIcon } from "@heroicons/react/solid";
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

export default function CartItem({ item, index, cart, refreshFunction, quantity }: IProps) {
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

  return (
    <div key={index} className="my-20 flex flex-row border-y-[1px] border-purple-500 p-1 first:my-10 lg:p-4">
      <div className="image-div mr-4 mt-0 flex w-20 flex-initial justify-center sm:w-40 lg:w-60">
        <img className="self-center object-cover" src={item.thumbnail} />
      </div>
      <div className="info-div flex-auto space-y-1 sm:space-y-3 lg:space-y-6">
        <div className="flex w-full flex-row justify-between">
          <h1 className="text-base font-black sm:text-lg">$ {(item.price * quantity).toFixed(2)}</h1>
          <button onClick={() => removeItemFromCart(index)}>
            <XIcon className="h-5 text-gray-600 sm:h-10" />
          </button>
        </div>
        <h1 className="text-xs font-black sm:text-base">{item.name}</h1>
        <p className="text-xs sm:text-base">{item.description}</p>
        <div className="flex flex-row space-x-4 self-end sm:space-x-6">
          <p className="text-xs sm:text-lg">Quantity: {quantity}</p>
          <button onClick={() => incrementItem(index)}>
            <PlusIcon className="h-4 text-gray-600 sm:h-8" />
          </button>
          <button onClick={() => decrementItem(index)}>
            <MinusIcon className="h-4 text-gray-600 sm:h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
