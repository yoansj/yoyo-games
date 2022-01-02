import { StarIcon } from "@heroicons/react/solid";
import React from "react";

interface IProps {
  stars: 1 | 2 | 3 | 4 | 5;
}

/**
 * Displays the star rating on a GameCard component
 * @param param0 Props
 * @returns Magic
 */
export default function StarsDisplayer({ stars }: IProps) {
  const Stars = () => {
    let arr = [];

    const color = (l: number) => {
      if (l === 5) return "text-yellow-500";
      if (l === 4) return "text-orange-500";
      if (l === 3) return "text-orange-700";
      if (l === 2) return "text-red-800";
      if (l === 1) return "text-red-900";
    };

    for (let i = 0; i !== stars; i++) arr.push(i);
    return arr.map((r, index) => (
      <StarIcon key={index} className={"last:mr-3 h-6 " + color(arr.length)} />
    ));
  };
  return (
    <span className="stars-displayer flex flex-row text-xs">{Stars()}</span>
  );
}
