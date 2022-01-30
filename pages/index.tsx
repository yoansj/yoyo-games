import Head from "next/head";
import MyMetaTags from "../components/MyMetaTags";
import Footer from "../components/Footer";
import ItemCard from "../components/GameCard";
import Header from "../components/Header";
import UserReview from "../components/UserReview";
import games, { searchableItems } from "../data/games";
import consoles from "../data/consoles";
import { GetServerSideProps } from "next";
import seedrandom from "seedrandom";
import IItem from "../types/IItem";
import getRandomInt from "../utils/getRandomInt";

export const getServerSideProps: GetServerSideProps = async (context) => {
  /**
   * Set random seed to todays date
   */
  seedrandom(new Date().toLocaleDateString(), { global: true });

  const firstItemLine: IItem[] = [];
  const secondItemLine: IItem[] = [];

  // TODO: Remove dupmicates
  for (let i = 0; i !== 4; i++) firstItemLine.push(searchableItems[getRandomInt(0, searchableItems.length - 1)]);
  for (let i = 0; i !== 4; i++) secondItemLine.push(searchableItems[getRandomInt(0, searchableItems.length - 1)]);

  return {
    props: { firstItemLine, secondItemLine },
  };
};

interface IProps {
  /**
   * Randomly generated best sellers
   */
  firstItemLine: IItem[];

  /**
   * Randomly generated best sellers (second line)
   */
  secondItemLine: IItem[];
}

export default function Home({ firstItemLine, secondItemLine }: IProps) {
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
      <main className="flex flex-col justify-center items-center mt-10 w-full px-4 lg:px-0">
        <h1 className="text-lg lg:text-xl xl:text-3xl text-center whitespace-pre-line font-mono">
          Here at Yoyo Games we provide the best games for the best players. <br />
          Want the lastest best selling game ? <br />
          Check below or use our buttons on top ! <br />
          Need that hardware to play ? We sell it too ! <br />
          At Yoyo Games you're the{" "}
          <span className="text-red-600 uppercase hover:animate-pulse cursor-crosshair">boss</span>.
        </h1>
        <div className="bg-purple-500 mt-10 flex flex-col justify-center p-4 lg:p-7 lg:px-[10%]">
          <h1 className="text-white font-bold text-2xl lg:text-4xl text-center lg:pt-3">
            Still not convinced ? Check our daily bestsellers below
          </h1>
          <h2 className="text-white text-base text-center italic">(Dont worry they will convince you)</h2>
          <h2 className="text-yellow-400 text-sm text-center italic mt-5">
            Pro-tip: Hover or long press the games to see more infos about them :)
          </h2>
        </div>
        <div className="mt-10 grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {firstItemLine.map((item, i) => (
            <ItemCard item={item} key={i} />
          ))}
        </div>
        <div className="mt-10 grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondItemLine.map((item, i) => (
            <ItemCard item={item} key={i} />
          ))}
        </div>
        <div className="bg-purple-500 mt-10 flex flex-col justify-center p-4 lg:p-7 lg:px-[10%]">
          <h1 className="text-white font-bold text-lg lg:text-xl xl:text-3xl text-center lg:pt-3">
            Not convinced again ? you're hard{" "}
            <span className="text-red-600 uppercase hover:animate-pulse cursor-crosshair">boss</span> check our reviews
            below
          </h1>
          <h2 className="text-white text-base text-center italic">(They should convince yout this time)</h2>
        </div>
        <div>
          <ul className="mt-8 lg:mt-10 flex flex-col lg:flex-row justify-center align-middle">
            <UserReview
              imageUrl="https://i.kym-cdn.com/entries/icons/facebook/000/017/539/captain_falcon.jpg"
              name="Captain Falcon"
              quote="10/10 would wo again they showed me their moves. (They also sell F-Zero games)"
              title="Super Smash Bros character"
            />
            <UserReview
              imageUrl="data:image/jpeg;base64,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"
              name="Kai'Sa FTW"
              quote="Yoyo Games is great, they don't sell Kai'Sa merch yet nor Riot Points card but they sell cool games it's already a great start i'd say."
              title="Kai'Sa main and LoL player"
            />
            <UserReview
              imageUrl="https://thumbs.dreamstime.com/b/portrait-ecstatic-gamer-guy-headphones-screaming-rejoi-portrait-ecstatic-gamer-guy-headphones-screaming-127296321.jpg"
              name="Gamer guy"
              quote="I love games ! I am also deeply into E-sports ! #KCORP FTW !"
              title="E-Sports pro gamer"
            />
            <UserReview
              imageUrl="https://i.pinimg.com/originals/f5/06/ab/f506ab054c29a532edbcb61ebcc7601f.png"
              name="Hatsune Miku"
              quote="彼らはすぐにそのウェブサイトで私のゲームを売るはずなので、ええ、私は間違いなくニャをお勧めします！"
              title="VOCALOID"
            />
          </ul>
          <ul className="lg:mt-9 mb-20 flex flex-col lg:flex-row justify-center align-middle">
            <UserReview
              imageUrl="https://avatars.githubusercontent.com/u/48960798?v=4"
              name="Yoan Saint Juste"
              quote="I spent quite some time on this website, I like it, I wonder who made this, he his talented 😉"
              title="Epitech Paris Student"
            />
            <UserReview
              imageUrl="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/cj1iw7dviovzt4rppewp/playboi-carti-getty-timothy-norris"
              name="Playboi Carti"
              quote="+* ok ! 🖤
              this website ! is +:) lit  ! ! they🖤& * plugged * ! +:) me  . with 💔 my *^ ! ps5 ^ 🦋*  !+  they ! not ** !++ opps ++**  ! ^ 🦋*  !+  real 💔 +** vamps :( 💕 
              *+ _ slatt !"
              title="Rapper, PS5 enthusiast"
            />
            <UserReview
              imageUrl="https://cutewallpaper.org/22/fortnite-pfp-wallpapers/301332073.jpg"
              name="B3tt3rTh4nNinja"
              quote="good site."
              title="Fortnite"
            />
            <UserReview
              imageUrl="https://c.tenor.com/04X22QyF7_UAAAAC/taiko-no-tatsujin-don-chan.gif"
              name="taikofan99"
              quote="What a great site ! Yoyo Games really out did themselves !"
              title="Taiko No Tatsujin fan"
            />
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
