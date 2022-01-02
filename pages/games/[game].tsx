import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { Dialog, Transition } from "@headlessui/react";
import { getGameById } from "../../data/games";
import Header from "../../components/Header";
import MyCarousel from "../../components/MyCarousel";
import ConsoleRenderer from "../../components/ConsoleRenderer";
import StarsDisplayer from "../../components/StarsDisplayer";

export default function GameInspect() {
  const router = useRouter();
  const { game } = router.query;
  const gameId: string = game as string;
  const gameObject = getGameById(gameId || "nothin");

  const [picIndex, setPicIndex] = useState(0);

  const closeModal = () => router.push("/");

  const handlePreviousPic = () => {
    if (picIndex === 0) {
      setPicIndex(0);
    } else {
      setPicIndex((p) => p - 1);
    }
  };

  const handleNextPic = () => {
    if (picIndex === 0) {
      setPicIndex(0);
    } else {
      setPicIndex((p) => p - 1);
    }
  };

  useEffect(() => {
    console.log(router.query);
    console.log(router.route);
  }, []);

  if (gameObject.id === "nogame") {
    return (
      <div>
        <Head>
          <title>No such game</title>
          <meta name="description" content="No such game" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Transition appear show as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-800"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    This game doesn't exist
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      I'm not exactly sure how you got in this page, you seem to
                      be an explorer, have you played Captain Toad lately ?
                      Anyways if you click on the button below you should find
                      your way back to the homepage so yeah you can just click
                      it.
                      <br />
                      Thank you bye bye.
                      <br />
                      Please don't stay on this page.
                      <br />
                      Please leave.
                      <br />
                      God dammit click that button.
                      <br />
                      You could also click away to leave that page but yeah
                      that's it for me leave me alone.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                      title="Yes this one"
                    >
                      This button ?
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>{gameObject.name}</title>
          <meta name="description" content="Get your favorite video games" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="my-20 mx-20 p-10 bg-purple-500">
          <h1 className="text-3xl font-bold mb-5">{gameObject.name}</h1>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="left-div">
              <div className="carousel-wrapper-div">
                <MyCarousel
                  loop
                  renderButtons
                  images={gameObject.images}
                  uuid="games-carousel"
                />
              </div>
              <div className="cart-div p-6 m-10 mt-10 bg-white flex justify-between items-center text-purple-500 rounded-xl border-2 border-black">
                <h1 className="font-bold text-3xl">{gameObject.price} $</h1>
                <button className="bg-purple-500 p-3 rounded-xl shadow-lg shadow-purple-800">
                  <h1 className="text-white font-bold">
                    Add this game to cart
                  </h1>
                </button>
              </div>
            </div>
            <div className="right-div">
              <div className="flex flex-col ml-10 items-center border border-white p-10">
                {gameObject.avaiableOn.length === 1 ? (
                  <ConsoleRenderer console={gameObject.avaiableOn[0].name} />
                ) : (
                  []
                )}
                <h1 className="mt-6 text-xl font-bold">
                  {gameObject.description}
                </h1>
                <h2 className="mt-3 text-lg font-semibold text-left underline underline-offset-4 decoration-slate-100">
                  Description
                </h2>
                <p className="mt-3 text-base text-center">
                  {gameObject.extendedDescription}
                </p>
                <h2 className="mt-3 text-lg font-semibold text-left underline underline-offset-4 decoration-slate-100">
                  Release date
                </h2>
                <p className="mt-3 text-base text-center">
                  {gameObject.releaseDate}
                </p>
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
      </div>
    );
  }
}
