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
    return arr.map((r, index) => <StarIcon key={index} className={"h-6 last:mr-3 " + color(arr.length)} />);
  };

  // Relative position thingy
  // https://www.youtube.com/watch?v=jx5jmI0UlXU
  return (
    <div
      onClick={handleOpenGamePage}
      className="group relative flex max-w-xs cursor-pointer flex-col border border-solid border-purple-500 text-white hover:border-purple-800"
    >
      <div className="max-w-xs lg:h-80">
        <img src={item.thumbnail} />
      </div>
      <div className="h-full cursor-pointer bg-purple-500 pl-3 group-hover:invisible" onClick={handleOpenGamePage}>
        <h1 className="text-lg font-bold">$ {item.price}</h1>
        <h2 className="font-medium">{item.name}</h2>
      </div>
      <div className="invisible absolute bottom-0 w-full bg-purple-800 pl-3 group-hover:visible">
        <h1 className="text-lg font-bold">
          {item.typehint === "console" ? "From: " : ""}$ {item.price}
        </h1>
        <h2 className="font-medium">{item.name}</h2>
        {item.typehint === "game" ? (
          <div className="flex flex-row justify-between align-middle">
            <h3 className="invisible transition group-hover:visible">
              For: {gameData.avaiableOn.map((c) => c.name + " ")}
            </h3>
            <span className="stars-displayer invisible flex flex-row text-xs group-hover:visible">
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
