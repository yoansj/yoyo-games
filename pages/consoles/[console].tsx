import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import GameNotFoundModal from "../../components/GameNotFoundModal";
import AddToCartModal from "../../components/AddedToCartModal";
import Cart from "../../utils/Cart";
import MyResponsiveCarousel from "../../components/MyResponsiveCarousel";
import Footer from "../../components/Footer";
import { getConsoleById } from "../../data/consoles";
import MyMetaTags from "../../components/MyMetaTags";

export default function ConsoleInspect() {
  const router = useRouter();
  const { console } = router.query;
  const consoleId: string = console as string;
  const consoleObject = getConsoleById(consoleId || "nothin");

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [cart, setCart] = useState<Cart>();

  useEffect(() => {
    setCart(new Cart());
  }, []);

  const redirectToRoot = () => {
    router.push("/");
  };

  const handleAddToCart = () => {
    if (cart) {
      cart.addItem(consoleObject);
      setAddModalOpen(true);
    }
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  if (consoleObject.id === "nogame") {
    return (
      <div>
        <Head>
          <title>No such game</title>
          <meta name="description" content="No such game" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <GameNotFoundModal onClose={redirectToRoot} />
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <MyMetaTags />
          <title>Buy the {consoleObject.name}</title>
          <meta property="og:title" content={"Buy the " + consoleObject.name} />
          <meta property="og:description" content={consoleObject.description} />
          <meta name="description" content={consoleObject.description} />
          <meta property="og:image" content={consoleObject.images[0]} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Header />
        <AddToCartModal
          open={addModalOpen}
          image={consoleObject.thumbnail}
          itemName={consoleObject.name}
          onClose={handleCloseAddModal}
        />
        <div className="px-4 p-2 mt-20 mb-20 md:mx-20 md:p-10 bg-purple-500">
          <h1 className="text-3xl font-bold mb-5">{consoleObject.name}</h1>
          <div className="flex flex-col lg:flex-row justify-between flex-wrap">
            <div className="left-div flex-1 flex flex-col">
              <div className="carousel-wrapper-div self-center">
                <MyResponsiveCarousel loop renderButtons images={consoleObject.images} uuid="games-carousel" />
              </div>
              <div className="cart-div p-3 lg:p-6 lg:m-10 mt-10 bg-white flex flex-col lg:flex-row justify-between items-center text-purple-500 rounded-xl border-2 border-black">
                <h1 className="font-bold text-3xl">From: {consoleObject.price} $</h1>
                <button
                  className="bg-purple-500 p-3 rounded-xl shadow-lg shadow-purple-800 hover:bg-purple-700"
                  onClick={handleAddToCart}
                >
                  <h1 className="text-white font-bold">Add this console to the cart</h1>
                </button>
              </div>
            </div>
            <div className="right-div flex-1">
              <div className="flex flex-col mt-10 lg:mt-0 lg:ml-10 items-center border-2 border-black p-10">
                <h1 className="mt-6 text-xl font-bold text-center">{consoleObject.description}</h1>
                <h2 className="mt-3 text-lg font-semibold text-left underline underline-offset-4 decoration-slate-100">
                  Fabricant
                </h2>
                <p className="mt-3 text-base text-center">{consoleObject.fabricant}</p>
                <h2 className="mt-3 text-lg font-semibold text-left underline underline-offset-4 decoration-slate-100">
                  Description
                </h2>
                <h2 className="mt-3 text-lg font-semibold text-left underline underline-offset-4 decoration-slate-100">
                  Release date
                </h2>
                <p className="mt-3 text-base text-center">{consoleObject.releaseDate}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
