import React, { useEffect, useState } from "react";
import Head from "next/head";
import { getGameById } from "../../data/games";
import Header from "../../components/Header";
import StarsDisplayer from "../../components/StarsDisplayer";
import AddToCartModal from "../../components/AddedToCartModal";
import Cart from "../../utils/Cart";
import MyResponsiveCarousel from "../../components/MyResponsiveCarousel";
import Footer from "../../components/Footer";
import MyMetaTags from "../../components/MyMetaTags";
import IGame from "../../types/IGame";

import { GetServerSideProps } from "next";

/**
 * Used to get the id of the game while the page loads
 * ! https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
 * @param context - Big object
 * @returns Props for the page
 */
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

/**
 * Props for the page
 */
interface IProps {
  /**
   * Data of the current game
   */
  gameObject: IGame;
}

export default function GameInspect({ gameObject }: IProps) {
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
      <div className="mt-20 mb-20 bg-purple-500 p-2 px-4 md:mx-20 md:p-10">
        <h1 className="mb-5 text-3xl font-bold">{gameObject.name}</h1>
        <div className="flex flex-col flex-wrap justify-between lg:flex-row">
          <div className="left-div flex flex-1 flex-col">
            <div className="carousel-wrapper-div self-center">
              <MyResponsiveCarousel loop renderButtons images={gameObject.images} uuid="games-carousel" />
            </div>
            <div className="cart-div mt-10 flex flex-col items-center justify-between rounded-xl border-2 border-black bg-white p-3 text-purple-500 lg:m-10 lg:flex-row lg:p-6">
              <h1 className="text-3xl font-bold">{gameObject.price} $</h1>
              <button
                className="rounded-xl bg-purple-500 p-3 shadow-lg shadow-purple-800 hover:bg-purple-700"
                onClick={handleAddToCart}
              >
                <h1 className="font-bold text-white">Add this game to the cart</h1>
              </button>
            </div>
          </div>
          <div className="right-div flex-1">
            <div className="mt-10 flex flex-col items-center border-2 border-black p-10 lg:mt-0 lg:ml-10">
              <img src={gameObject.avaiableOn[0].logo} className="w-96 rounded-xl" />
              <h1 className="mt-6 text-center text-xl font-bold">{gameObject.description}</h1>
              <h2 className="mt-3 text-left text-lg font-semibold underline decoration-slate-100 underline-offset-4">
                Description
              </h2>
              <p className="mt-3 text-center text-base">{gameObject.extendedDescription}</p>
              <h2 className="mt-3 text-left text-lg font-semibold underline decoration-slate-100 underline-offset-4">
                Release date
              </h2>
              <p className="mt-3 text-center text-base">{gameObject.releaseDate}</p>
              <h2 className="mt-3 text-left text-lg font-semibold underline decoration-slate-100 underline-offset-4">
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
