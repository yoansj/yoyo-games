import Head from "next/head";
import Image from "next/image";
import GameCard from "../components/GameCard";
import Header from "../components/Header";
import games from "../data/games";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoyo Games</title>
        <meta name="description" content="Get your favorite video games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl text-center whitespace-pre-line max-w-4xl font-mono">
          Here at Yoyo Games we provide the best games for the best players.{" "}
          <br />
          Want the lastest best selling game ? <br />
          Check below or use our buttons on top ! <br />
          Need that hardware to play ? We sell it too ! <br />
          At Yoyo Games you're the{" "}
          <span className="text-red-600 uppercase hover:animate-pulse cursor-crosshair">
            boss
          </span>
          .
        </h1>
        <div className="w-4/5 lg:h-24 mt-10 h-28">
          <div className="bg-purple-500 w-full h-full">
            <h1 className="text-white font-bold text-4xl text-center lg:pt-3">
              Still not convinced ? Check our bestsellers below
            </h1>
            <h2 className="text-white text-base text-center italic">
              (Dont worry they will convince you)
            </h2>
          </div>
        </div>
        <div>
          <p>Best sellers here</p>
          <GameCard game={games[0]} />
        </div>
        <div>
          <p>User reviews here</p>
        </div>
      </main>

      <footer>Footer to come</footer>
    </div>
  );
}
