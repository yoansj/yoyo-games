import React, { useMemo, useState } from "react";
import consoles from "../data/consoles";
import games, { searchableItems } from "../data/games";
import ClickAwayListener from "react-click-away-listener";
import CartItem from "./CartItem";
import SearchItem from "./SearchItem";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchResults = useMemo(() => {
    if (search === "**" || search.toLocaleLowerCase().includes("all")) return searchableItems;
    if (search.toLocaleLowerCase().includes("consoles") || search.toLocaleLowerCase().includes("console"))
      return consoles.filter((c) => c.id !== "noconsole");
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
    <form className="search-bar group w-full flex-1" onSubmit={(e) => e.preventDefault()}>
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 hover:animate-bounce">
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
          className="block w-full border-2 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:text-slate-400 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 focus:placeholder:text-purple-500 sm:text-sm"
          placeholder="Search for anything: try with 'games', 'game', 'consoles' or even '**' 😉"
          onChange={onSearchChange}
          autoComplete="off"
          autoCorrect="off"
        />
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <div
            className={
              search.length >= 2 && isOpen
                ? "search-results visible absolute z-30 flex max-h-60 w-full flex-col overflow-y-scroll rounded-b-md border-2 border-t-0 border-purple-700 bg-white p-2 lg:max-h-96"
                : "search-results invisible absolute z-30 flex max-h-60 w-full flex-col overflow-y-scroll rounded-b-md border-2 border-t-0 border-purple-700 bg-white p-2 lg:max-h-96"
            }
          >
            {searchResults.map((item, index) => (
              <>
                <a
                  key={index}
                  className="lg:hidden"
                  href={item.typehint === "game" ? "/games/" + item.id : "/consoles/" + item.id}
                >
                  {item.typehint === "game" ? "Game: " : "Console: "} {item.name}
                </a>
                <SearchItem item={item} />
              </>
            ))}
            {searchResults.length === 0 && search.length >= 2 ? <p>No result found for "{search}"</p> : []}
          </div>
        </ClickAwayListener>
      </label>
    </form>
  );
}
