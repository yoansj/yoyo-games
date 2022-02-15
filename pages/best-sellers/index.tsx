import Head from "next/head";
import MyMetaTags from "../../components/MyMetaTags";
import Footer from "../../components/Footer";
import ItemCard from "../../components/GameCard";
import Header from "../../components/Header";
import { getGameByName } from "../../data/games";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import consoles from "../../data/consoles";

export default function BestSellers() {
  return (
    <>
      <Head>
        <MyMetaTags />
        <title>Yoyo Games</title>
        <meta property="og:title" content="Yoyo Games" />
        <meta property="og:description" content="Here at Yoyo Games we provide the best games for the best players" />
        <meta property="og:image" content="/Facebook-cover.png" />
        <meta name="description" content="Here at Yoyo Games we provide the best games for the best players" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main id="main" className="mt-10 flex w-full flex-col items-center justify-center px-4 lg:px-0">
        <div className="banner-div flex flex-col justify-center space-y-2 bg-purple-500 p-6 px-[10%] text-white">
          <h1 className="text-center text-3xl font-extrabold text-yellow-300">Wanna see our B.O.A.T ?</h1>
          <p className="text-center text-lg italic">Its not actually a boat, it means Best-sellers Of All Time</p>
          <p className="text-center text-sm italic">(sorry for the disappointment...)</p>
          <p className="text-center text-xl font-bold">Anyways, wanna see them ? Scroll down below !</p>
          <ArrowCircleDownIcon className="h-10 animate-bounce self-center" />
        </div>
        <div className="banner-div my-5 flex flex-col justify-center space-y-2 bg-purple-500 p-6 text-white lg:px-[10%]">
          <h1 className="text-center text-3xl font-extrabold">Our best games</h1>
        </div>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ItemCard item={getGameByName("Mario Kart 8 Deluxe")} />
          <ItemCard item={getGameByName("Ratchet & Clank: Rift Apart")} />
          <ItemCard item={getGameByName("Zelda Breath Of The Wild")} />
          <ItemCard item={getGameByName("Crash Bandicoot™ 4: It’s About Time")} />
        </div>
        <div className="banner-div my-5 flex flex-col justify-center space-y-2 bg-purple-500 p-6 text-white lg:px-[10%]">
          <h1 className="text-center text-3xl font-extrabold">Our best consoles</h1>
        </div>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ItemCard item={consoles[1]} />
          <ItemCard item={consoles[2]} />
          <ItemCard item={consoles[1]} />
          <ItemCard item={consoles[2]} />
        </div>
        <div className="banner-div my-5 flex flex-col justify-center space-y-2 bg-purple-500 p-6 text-white lg:px-[10%]">
          <h1 className="text-center text-3xl font-extrabold">Honorable mentions</h1>
        </div>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ItemCard item={getGameByName("Pokemon Shield")} />
          <ItemCard item={getGameByName("Pokémon Legends: Arceus")} />
          <ItemCard item={getGameByName("marvel's spider-man: miles morales ultimate")} />
          <ItemCard item={getGameByName("Pokemon Sword")} />
        </div>
        <div
          className="banner-div my-5 flex cursor-pointer flex-col justify-center space-y-2 bg-purple-500 p-6 text-yellow-300 lg:px-[10%]"
          onClick={() => {
            const doc = document.getElementById("header");
            if (doc) doc.scrollIntoView();
          }}
        >
          <h1 className="text-center text-3xl font-extrabold">Seen enough ? Click me to scroll back up</h1>
          <ArrowCircleDownIcon className="h-10 rotate-180 self-center" />
        </div>
      </main>
      <Footer />
    </>
  );
}
