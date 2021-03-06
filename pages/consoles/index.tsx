import Head from "next/head";
import MyMetaTags from "../../components/MyMetaTags";
import Footer from "../../components/Footer";
import ItemCard from "../../components/GameCard";
import Header from "../../components/Header";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import consoles from "../../data/consoles";
import PageMetaTags from "../../components/PageMetaTags";

export default function Consoles() {
  const onClickScroll = () => {
    const doc = document.getElementById("header");
    if (doc) doc.scrollIntoView();
  };

  return (
    <>
      <Head>
        <title>Consoles</title>
        <MyMetaTags />
        <PageMetaTags
          title="Consoles"
          contentTitle="Consoles page"
          description="Our page dedicated to hardware"
          url="https://yoyo-games.vercel.app/consoles"
          image="/Facebook-cover.png"
        />
      </Head>
      <Header />
      <main id="main" className="mt-10 flex w-full flex-col items-center justify-center px-4 lg:px-0">
        <div className="banner-div flex flex-col justify-center space-y-2 bg-purple-500 p-6 px-[10%] text-white">
          <h1 className="text-center text-3xl font-extrabold">Our consoles</h1>
          <p className="text-center text-3xl font-semibold">
            Below you can find the finest pieces of hardware sold by Yoyo Games !
          </p>
          <ArrowCircleDownIcon className="h-10 animate-bounce self-center" />
        </div>
        <div className="group relative my-10">
          <img className="lg:h-96" src="https://mp1st.com/wp-content/uploads/2020/12/ms-sony-ninty.jpg" />
          <div className="absolute top-0 flex h-full w-full scale-0 flex-col items-center justify-center bg-purple-500 align-middle transition-all delay-150 duration-500 group-hover:scale-100">
            <h1 className="text-center text-3xl font-black text-white md:text-8xl">The big three</h1>
            <h2 className="text-center text-xl font-semibold text-white md:text-3xl">
              Nintendo, Sony, Microsoft ? <br />
              You get to choose
            </h2>
          </div>
        </div>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-3">
          <ItemCard item={consoles[2]} />
          <ItemCard item={consoles[1]} />
          <ItemCard item={consoles[3]} />
        </div>
        <div className="banner-div my-5 flex flex-col justify-center space-y-2 bg-purple-500 p-6 text-white lg:px-[10%]">
          <h1 className="text-center text-3xl font-extrabold">Retro consoles</h1>
          <h2 className="text-center text-xl font-semibold text-white md:text-3xl">
            Our classics in terms of retro consoles, a special selection by Yoyo Games !
          </h2>
        </div>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ItemCard item={consoles[4]} />
          <ItemCard item={consoles[5]} />
          <ItemCard item={consoles[6]} />
          <ItemCard item={consoles[7]} />
        </div>
        <div className="banner-div my-5 flex flex-col justify-center space-y-2 bg-purple-500 p-6 text-white lg:px-[10%]">
          <h1 className="text-center text-3xl font-extrabold">Alternative consoles</h1>
          <h2 className="text-center text-xl font-semibold text-white md:text-3xl">
            Stadia, Steam Deck and more to come !
          </h2>
        </div>
        <div className="grid grid-rows-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="hidden opacity-0 lg:block">aa</div>
          <ItemCard item={consoles[8]} />
          <ItemCard item={consoles[9]} />
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
