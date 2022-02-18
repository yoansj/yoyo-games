import { PlusIcon } from "@heroicons/react/outline";
import { MinusIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import IItem from "../types/IItem";
import Cart from "../utils/Cart";
import IConsole from "../types/IConsole";
import IGame from "../types/IGame";

/**
 * Props of the component
 */
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

/**
 * Renders an item that's in the cart
 * @param param0 - Props
 * @returns React.Component
 */
export default function CartItem({ item, index, cart, refreshFunction, quantity }: IProps) {
  const consoleData = item as IConsole;
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

  const getPriceString = () => {
    if (item.typehint === "console") {
      return (
        `${(consoleData.selectedOption ? consoleData.selectedOption.price : item.price * quantity).toFixed(2)} ` +
        (quantity > 1 ? " total / $ " + consoleData.price + " unit" : "")
      );
    } else {
      return `${(item.price * quantity).toFixed(2)} ` + (quantity > 1 ? " total / $ " + item.price + " unit" : "");
    }
  };

  return (
    <div key={index} className="my-8 flex flex-row border-y-[1px] border-purple-500 p-1 first:my-10 md:my-20 lg:p-4">
      <div className="image-div mr-4 mt-0 flex w-20 flex-initial justify-center sm:w-40 lg:w-60">
        <img className="self-center object-cover" src={item.thumbnail} />
      </div>
      <div className="info-div flex-auto space-y-1 sm:space-y-3 lg:space-y-6">
        <div className="flex w-full flex-row justify-between">
          <h1 className="text-base font-black md:text-lg">{getPriceString()}</h1>
          <button onClick={() => removeItemFromCart(index)}>
            <XIcon className="h-5 text-gray-600 sm:h-10" />
          </button>
        </div>
        <h1 className="text-xs font-black sm:text-base">
          {item.typehint === "console" ? `${item.name} : ${consoleData.selectedOption?.name}` : item.name}
        </h1>
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
