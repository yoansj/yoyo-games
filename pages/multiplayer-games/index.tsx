import Head from "next/head";
import MyMetaTags from "../../components/MyMetaTags";
import Footer from "../../components/Footer";
import ItemCard from "../../components/GameCard";
import Header from "../../components/Header";
import { getGameByName } from "../../data/games";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import PageMetaTags from "../../components/PageMetaTags";

export default function MultiplayerGames() {
  const onClickScroll = () => {
    const doc = document.getElementById("header");
    if (doc) doc.scrollIntoView();
  };

  return (
    <>
      <Head>
        <title>Multiplayer games</title>
        <MyMetaTags />
        <PageMetaTags
          title="Multiplayer games"
          contentTitle="Multiplayer games page"
          description="Our games playable online 🌐"
          url="https://yoyo-games.vercel.app/multiplayer-games"
          image="/Facebook-cover.png"
        />
      </Head>
      <Header />
      <main id="main" className="mt-10 flex w-full flex-col items-center justify-center px-4 lg:px-0">
        <div className="banner-div flex flex-col justify-center space-y-2 bg-purple-500 p-6 px-[10%] text-white">
          <h1 className="text-center text-3xl font-extrabold ">Multiplayer games</h1>
          <p className="text-center text-xl font-bold">A special selection by Yoyo Games !</p>
          <p className="text-center text-xl font-bold">Play with the homies or compete against tryharders like you !</p>
        </div>
        <div className="banner-div my-5 flex flex-col justify-center space-y-2 bg-purple-500 p-6 text-white lg:px-[10%]">
          <h1 className="text-center text-3xl font-extrabold">Competitive gaming</h1>
        </div>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ItemCard item={getGameByName("Super smash bros ultimate")} />
          <ItemCard item={getGameByName("mario kart 8 deluxe")} />
          <ItemCard item={getGameByName("Halo Infinite (campaign)")} />
          <ItemCard item={getGameByName("Battlefield 2042")} />
        </div>
        <div className="banner-div my-5 flex flex-col justify-center space-y-2 bg-purple-500 p-6 text-white lg:px-[10%]">
          <h1 className="text-center text-3xl font-extrabold">Fun and casual</h1>
        </div>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ItemCard item={getGameByName("doom eternal")} />
          <ItemCard item={getGameByName("mario kart 8 deluxe")} />
          <ItemCard item={getGameByName("Ghost of Tsushima™ Director's Cut")} />
          <ItemCard item={getGameByName("Super smash bros ultimate")} />
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
