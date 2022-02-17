import Head from "next/head";
import MyMetaTags from "../../components/MyMetaTags";
import Footer from "../../components/Footer";
import ItemCard from "../../components/GameCard";
import Header from "../../components/Header";
import { getGameByName } from "../../data/games";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";

export default function ActionGames() {
  const onClickScroll = () => {
    const doc = document.getElementById("header");
    if (doc) doc.scrollIntoView();
  };

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
          <h1 className="text-center text-3xl font-extrabold ">Action games</h1>
          <p className="text-center text-xl font-bold">A special selection by Yoyo Games !</p>
        </div>
        <div className="banner-div my-5 flex flex-col justify-center space-y-2 bg-purple-500 p-6 text-white lg:px-[10%]">
          <h1 className="text-center text-3xl font-extrabold">The ones you play after work</h1>
        </div>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ItemCard item={getGameByName("Super smash bros ultimate")} />
          <ItemCard item={getGameByName("Ratchet & Clank: Rift Apart")} />
          <ItemCard item={getGameByName("Doom Eternal")} />
          <ItemCard item={getGameByName("Halo: The Master Chief Collection")} />
        </div>
        <div className="banner-div my-5 flex flex-col justify-center space-y-2 bg-purple-500 p-6 text-white lg:px-[10%]">
          <h1 className="text-center text-3xl font-extrabold">The ones you play with the homies</h1>
        </div>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ItemCard item={getGameByName("mario kart 8 deluxe")} />
          <ItemCard item={getGameByName("Gran Turismo 7 – 25th Anniversary Edition")} />
          <ItemCard item={getGameByName("Borderlands 3")} />
          <ItemCard item={getGameByName("Battlefield 2042")} />
        </div>
        <div className="banner-div my-5 flex flex-col justify-center space-y-2 bg-purple-500 p-6 text-white lg:px-[10%]">
          <h1 className="text-center text-3xl font-extrabold">The great adventures</h1>
        </div>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ItemCard item={getGameByName("Zelda Breath Of The Wild")} />
          <ItemCard item={getGameByName("Metroid dread")} />
          <ItemCard item={getGameByName("Halo infinite (campaign)")} />
          <ItemCard item={getGameByName("super mario odyssey")} />
        </div>
        <div
          className="banner-div my-5 flex cursor-pointer flex-col justify-center space-y-2 bg-purple-500 p-6 text-yellow-300 lg:px-[10%]"
          onClick={onClickScroll}
        >
          <h1 className="text-center text-3xl font-extrabold">Seen enough ? Click me to scroll back up</h1>
          <ArrowCircleDownIcon className="h-10 rotate-180 self-center" />
        </div>
      </main>
      <Footer />
    </>
  );
}
