import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import IConsole from "../types/IConsole";
import IGame from "../types/IGame";
import IItem from "../types/IItem";

interface IProps {
  /**
   * Uses the item object to fill the card content
   */
  item: IItem;
}

/**
 * Item card that allows shows an item from the store
 * @param param0 Item data
 * @returns React.Component
 */
export default function ItemCard({ item }: IProps) {
  const router = useRouter();

  const gameData = item as IGame;
  const consoleData = item as IConsole;

  const handleOpenGamePage = () =>
    item.typehint === "game" ? router.push(`/games/${item.id}`) : router.push(`/consoles/${item.id}`);

  const displayStars = () => {
    let arr = [];

    const color = (l: number) => {
      if (l === 5) return "text-yellow-500";
      if (l === 4) return "text-orange-500";
      if (l === 3) return "text-orange-700";
      if (l === 2) return "text-red-800";
      if (l === 1) return "text-red-900";
    };

    for (let i = 0; i !== gameData.stars; i++) arr.push(i);
    return arr.map((r, index) => <StarIcon key={index} className={"last:mr-3 h-6 " + color(arr.length)} />);
  };

  // Relative position thingy
  // https://www.youtube.com/watch?v=jx5jmI0UlXU
  return (
    <div
      onClick={handleOpenGamePage}
      className="group flex flex-col border-solid border border-purple-500 hover:border-purple-800 text-white max-w-xs cursor-pointer relative"
    >
      <div className="max-w-xs lg:h-80">
        <img src={item.thumbnail} />
      </div>
      <div className="bg-purple-500 h-full group-hover:invisible pl-3 cursor-pointer" onClick={handleOpenGamePage}>
        <h1 className="font-bold text-lg">$ {item.price}</h1>
        <h2 className="font-medium">{item.name}</h2>
      </div>
      <div className="invisible pl-3 group-hover:visible bg-purple-800 absolute bottom-0 w-full">
        <h1 className="font-bold text-lg">
          {item.typehint === "console" ? "From: " : ""}$ {item.price}
        </h1>
        <h2 className="font-medium">{item.name}</h2>
        {item.typehint === "game" ? (
          <div className="flex flex-row align-middle justify-between">
            <h3 className="invisible group-hover:visible">For: {gameData.avaiableOn.map((c) => c.name + " ")}</h3>
            <span className="stars-displayer invisible group-hover:visible flex flex-row text-xs">
              {displayStars()}
            </span>
          </div>
        ) : (
          <div>{consoleData.options.length} options</div>
        )}
        <p>{item.description}</p>
      </div>
    </div>
  );
}
