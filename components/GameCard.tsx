import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import games, { getGameById } from "../data/games";
import IGame from "../types/IGame";

interface IProps {
  /**
   * Uses the game object to fill the card content
   */
  game: IGame;
}

export default function GameCard({ game }: IProps) {
  const router = useRouter();

  const handleOpenGamePage = () => router.push(`/games/${game.id}`);

  const displayStars = () => {
    let arr = [];

    const color = (l: number) => {
      if (l === 5) return "text-yellow-500";
      if (l === 4) return "text-orange-500";
      if (l === 3) return "text-orange-700";
      if (l === 2) return "text-red-800";
      if (l === 1) return "text-red-900";
    };

    for (let i = 0; i !== game.stars; i++) arr.push(i);
    return arr.map((r, index) => (
      <StarIcon key={index} className={"last:mr-3 h-6 " + color(arr.length)} />
    ));
  };

  // Position relative
  // https://www.youtube.com/watch?v=jx5jmI0UlXU
  return (
    <div
      onClick={handleOpenGamePage}
      className="group flex flex-col border-solid border border-purple-500 hover:border-purple-800 text-white max-w-xs cursor-pointer relative"
    >
      <div className="max-w-xs lg:h-80">
        <img src={game.thumbnail} />
      </div>
      <div
        className="bg-purple-500 h-16 group-hover:invisible pl-3 cursor-pointer"
        onClick={handleOpenGamePage}
      >
        <h1 className="font-bold text-lg">$ {game.price}</h1>
        <h2 className="font-medium">{game.name}</h2>
      </div>
      <div className="invisible pl-3 group-hover:visible bg-purple-800 absolute bottom-0 w-80">
        <h1 className="font-bold text-lg">$ {game.price}</h1>
        <h2 className="font-medium">{game.name}</h2>
        <div className="flex flex-row align-middle justify-between">
          <h3 className="invisible group-hover:visible">
            For: {game.avaiableOn.map((c) => c.name + " ")}
          </h3>
          <span className="stars-displayer invisible group-hover:visible flex flex-row text-xs">
            {displayStars()}
          </span>
        </div>
        <p>{game.description}</p>
      </div>
    </div>
  );
}
