import React, { useMemo, useState } from "react";
import consoles from "../data/consoles";
import games from "../data/games";
import IItem from "../types/IItem";
import ClickAwayListener from "react-click-away-listener";

const searchableItems: Array<IItem> = [...games, ...consoles].filter((i) => i.name !== "Missing game");

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchResults = useMemo(() => {
    if (search === "**" || search.toLocaleLowerCase().includes("all")) return searchableItems;
    if (search.toLocaleLowerCase().includes("consoles") || search.toLocaleLowerCase().includes("console"))
      return consoles;
    if (search.toLocaleLowerCase().includes("games") || search.toLocaleLowerCase().includes("game"))
      return games.filter((g) => g.name !== "Missing game");
    if (search.length >= 2) {
      return searchableItems.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      return [];
    }
  }, [search]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value.length >= 2) setIsOpen(true);
  };

  return (
    <form className="search-bar flex-1 group" onSubmit={(e) => e.preventDefault()}>
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-purple-500" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="sr-only">Search</span>
        <input
          type="search"
          name="search"
          className="block bg-white w-full border-2 py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-purple-700 focus:ring-purple-700 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          onChange={onSearchChange}
          autoComplete="off"
          autoCorrect="off"
        />
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <div
            className={
              search.length >= 2 && isOpen
                ? "search-results bg-white absolute w-full flex flex-col visible rounded-b-md p-2 border-2 border-t-0 border-purple-700 z-30"
                : "search-results bg-white absolute w-full flex flex-col invisible rounded-b-md p-2 border-2 border-t-0 border-purple-700 z-30"
            }
          >
            {searchResults.map((item, index) => (
              <a key={index} href={item.typehint === "game" ? "/games/" + item.id : "/consoles/" + item.id}>
                {item.typehint === "game" ? "Game: " : "Console: "} {item.name}
              </a>
            ))}
            {searchResults.length === 0 && search.length >= 2 ? <p>No result found for "{search}"</p> : []}
          </div>
        </ClickAwayListener>
      </label>
    </form>
  );
}
