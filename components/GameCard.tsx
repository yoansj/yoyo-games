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

  const handleOpenGamePage = () => router.push(`/game/${game.id}`);

  const displayStars = () => {
    let arr = [];
    for (let i = 0; i !== game.stars; i++) arr.push(i);
    return arr.map((r, index) => (
      <StarIcon key={index} className="text-yellow-500 last:mr-3 h-7" />
    ));
  };

  return (
    <div className="flex flex-col border-solid border border-purple-500 rounded-xl text-white">
      <div className="max-w-xs">
        <img src={game.thumbnail} />
      </div>
      <div
        className="group bg-purple-500 h-16 hover:h-20 rounded-b-xl pl-3 cursor-pointer"
        onClick={handleOpenGamePage}
      >
        <h1 className="font-bold text-lg">$ {game.price}</h1>
        <h2 className="font-medium">{game.name}</h2>
        <div className="flex flex-row align-middle justify-between">
          <h3 className="invisible group-hover:visible">
            {game.avaiableOn.map((c) => c.name + " ")}
          </h3>
          <span className="stars-displayer invisible group-hover:visible flex flex-row text-xs">
            {displayStars()}
          </span>
        </div>
      </div>
    </div>
  );
}
