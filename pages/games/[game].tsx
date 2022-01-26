import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { getGameById } from "../../data/games";
import Header from "../../components/Header";
import ConsoleRenderer from "../../components/ConsoleRenderer";
import StarsDisplayer from "../../components/StarsDisplayer";
import AddToCartModal from "../../components/AddedToCartModal";
import Cart from "../../utils/Cart";
import MyResponsiveCarousel from "../../components/MyResponsiveCarousel";
import Footer from "../../components/Footer";
import MyMetaTags from "../../components/MyMetaTags";
import IGame from "../../types/IGame";

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { game } = context.query;
  const gameObject = getGameById(game as string);

  if (gameObject.id === "nogame") {
    return { notFound: true };
  } else {
    return {
      props: { gameObject },
    };
  }
};

interface IProps {
  /**
   * Data of the current game
   */
  gameObject: IGame;
}

export default function GameInspect({ gameObject }: IProps) {
  const router = useRouter();

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [cart, setCart] = useState<Cart>();

  useEffect(() => {
    setCart(new Cart());
  });

  const handleAddToCart = () => {
    if (cart && gameObject) {
      cart.addItem(gameObject);
      setAddModalOpen(true);
    }
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  return (
    <div>
      <Head>
        <MyMetaTags />
        {/* <!-- Primary Meta Tags --> */}
        <title>Buy {gameObject.name}</title>
        <meta name="title" content={"Buy " + gameObject.name} />
        <meta name="description" content={gameObject.description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://yoyo-games.vercel.app/games/" + gameObject.id} />
        <meta property="og:title" content={"Buy " + gameObject.name} />
        <meta property="og:description" content={gameObject.description} />
        <meta property="og:image" content={gameObject.images[0]} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={"https://yoyo-games.vercel.app/games/" + gameObject.id} />
        <meta property="twitter:title" content={"Buy " + gameObject.name} />
        <meta property="twitter:description" content={gameObject.description} />
        <meta property="twitter:image" content={gameObject.images[0]} />
      </Head>
      <Header />
      <AddToCartModal
        open={addModalOpen}
        image={gameObject.thumbnail}
        itemName={gameObject.name}
        onClose={handleCloseAddModal}
      />
      <div className="px-4 p-2 mt-20 mb-20 md:mx-20 md:p-10 bg-purple-500">
        <h1 className="text-3xl font-bold mb-5">{gameObject.name}</h1>
        <div className="flex flex-col lg:flex-row justify-between flex-wrap">
          <div className="left-div flex-1 flex flex-col">
            <div className="carousel-wrapper-div self-center">
              <MyResponsiveCarousel loop renderButtons images={gameObject.images} uuid="games-carousel" />
            </div>
            <div className="cart-div p-3 lg:p-6 lg:m-10 mt-10 bg-white flex flex-col lg:flex-row justify-between items-center text-purple-500 rounded-xl border-2 border-black">
              <h1 className="font-bold text-3xl">{gameObject.price} $</h1>
              <button
                className="bg-purple-500 p-3 rounded-xl shadow-lg shadow-purple-800 hover:bg-purple-700"
                onClick={handleAddToCart}
              >
                <h1 className="text-white font-bold">Add this game to the cart</h1>
              </button>
            </div>
          </div>
          <div className="right-div flex-1">
            <div className="flex flex-col mt-10 lg:mt-0 lg:ml-10 items-center border-2 border-black p-10">
              {gameObject.avaiableOn.length === 1 ? <ConsoleRenderer console={gameObject.avaiableOn[0].name} /> : []}
              <h1 className="mt-6 text-xl font-bold text-center">{gameObject.description}</h1>
              <h2 className="mt-3 text-lg font-semibold text-left underline underline-offset-4 decoration-slate-100">
                Description
              </h2>
              <p className="mt-3 text-base text-center">{gameObject.extendedDescription}</p>
              <h2 className="mt-3 text-lg font-semibold text-left underline underline-offset-4 decoration-slate-100">
                Release date
              </h2>
              <p className="mt-3 text-base text-center">{gameObject.releaseDate}</p>
              <h2 className="mt-3 text-lg font-semibold text-left underline underline-offset-4 decoration-slate-100">
                Yoyo Games Gamers Note
              </h2>
              <div className="mt-3">
                <StarsDisplayer stars={gameObject.stars} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
