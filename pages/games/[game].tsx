import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Head from "next/head";
import { Dialog, Transition } from "@headlessui/react";
import { getGameById } from "../../data/games";
import Header from "../../components/Header";

export default function GameInspect() {
  const router = useRouter();
  const { game } = router.query;
  const gameId: string = game as string;
  const gameObject = getGameById(gameId || "nothin");

  const closeModal = () => router.push("/");

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
          <title>Yoyo Games</title>
          <meta name="description" content="Get your favorite video games" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="mt-20 mx-20 max-w-8xl bg-purple-500">
          <div>
            <h1 className="text-3xl font-bold">{gameObject.name}</h1>
            <h1>{gameObject.avaiableOn[0].name}</h1>
          </div>
          <div className="relative max-w-xl flex gap-6 snap-x overflow-x-auto border border-red-700">
            {gameObject.images.map((url) => (
              <div className="snap-center shrink-0">
                <img
                  className="shrink-0 w-[576px] rounded-lg shadow-xl bg-white"
                  src={url}
                />
              </div>
            ))}
          </div>
          {/* <div className="slider-root max-w-[300px] bg-white border border-red-600">
            <div className="slider-slides flex overflow-x-auto snap-mandatory scroll-smooth">
              <div className="slide snap-start flex-shrink-0 w-[300px] h-[300px] mr-12 bg-blue-500 relative scale-[1] origin-center">
                1
              </div>
              <div className="slide snap-start flex-shrink-0 w-[300px] h-[300px] mr-12 bg-blue-900">
                2
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
