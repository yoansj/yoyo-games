import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import AddToCartModal from "../../components/AddedToCartModal";
import Cart from "../../utils/Cart";
import MyResponsiveCarousel from "../../components/MyResponsiveCarousel";
import Footer from "../../components/Footer";
import { getConsoleById } from "../../data/consoles";
import MyMetaTags from "../../components/MyMetaTags";

import { GetServerSideProps } from "next";
import IConsole, { IOption } from "../../types/IConsole";
import { Listbox } from "@headlessui/react";
import PageMetaTags from "../../components/PageMetaTags";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { console } = context.query;
  const consoleObject = getConsoleById(console as string);

  if (consoleObject.id === "noconsole") {
    return { notFound: true };
  } else {
    return {
      props: { consoleObject },
    };
  }
};

interface IProps {
  /**
   * Data of the current console
   */
  consoleObject: IConsole;
}

export default function ConsoleInspect({ consoleObject }: IProps) {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [cart, setCart] = useState<Cart>();
  const [consoleOption, setConsoleOption] = useState<IOption | undefined>(undefined);

  useEffect(() => {
    setCart(new Cart());
  }, []);

  const handleAddToCart = () => {
    if (cart && consoleOption !== undefined) {
      cart.addConsoleItem(consoleObject, consoleOption);
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
        <PageMetaTags
          title={`Buy the ${consoleObject.name}`}
          contentTitle={`Buy the ${consoleObject.name}`}
          description={consoleObject.description}
          url={"https://yoyo-games.vercel.app/consoles/" + consoleObject.id}
          image={consoleObject.images[0]}
        />
      </Head>
      <Header />
      <AddToCartModal
        open={addModalOpen}
        image={consoleObject.thumbnail}
        itemName={consoleObject.name + (consoleOption === undefined ? "" : ` : ${consoleOption.name}`)}
        onClose={handleCloseAddModal}
      />
      <div className="mt-20 mb-20 bg-purple-500 p-2 px-4 md:mx-20 md:p-10">
        <h1 className="mb-5 text-3xl font-bold">
          {consoleObject.name} {consoleOption === undefined ? "" : ` : ${consoleOption.name}`}
        </h1>
        <div className="flex flex-col flex-wrap justify-between lg:flex-row">
          <div className="left-div flex flex-1 flex-col">
            <div className="carousel-wrapper-div self-center">
              <MyResponsiveCarousel loop renderButtons images={consoleObject.images} uuid="games-carousel" />
            </div>
            <div className="cart-div mt-10 flex flex-col items-center justify-between rounded-xl border-2 border-black bg-white p-3 text-purple-500 lg:m-10 lg:flex-row lg:p-6">
              <h1 className="text-3xl font-bold">
                {consoleOption === undefined ? `From: $ ${consoleObject.price}` : `$ ${consoleOption.price}`}
              </h1>
              <Listbox value={consoleOption} onChange={setConsoleOption}>
                {({ open }) => (
                  <>
                    <Listbox.Button
                      className={
                        open
                          ? "my-3 hidden rounded-xl bg-purple-500 p-3 text-white shadow-lg shadow-purple-800 hover:bg-purple-700 lg:my-0"
                          : "my-3 rounded-xl bg-purple-500 p-3 text-white shadow-lg shadow-purple-800 hover:bg-purple-700 lg:my-0"
                      }
                    >
                      {consoleOption === undefined ? "Options" : consoleOption.name}
                    </Listbox.Button>
                    <Listbox.Options className="my-3 rounded-xl bg-purple-500 p-3 lg:my-0">
                      {consoleObject.options.map((opt, index) => (
                        <Listbox.Option key={index} value={opt} className="cursor-pointer text-white">
                          {({ active, selected }) => (
                            <li className={selected ? "cursor-pointer text-purple-800" : "cursor-pointer text-white"}>
                              • {opt.name}
                            </li>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </>
                )}
              </Listbox>
              <button
                className="rounded-xl bg-purple-500 p-3 shadow-lg shadow-purple-800 hover:bg-purple-700 disabled:bg-gray-500 disabled:shadow-gray-500"
                disabled={consoleOption === undefined}
                onClick={handleAddToCart}
              >
                <h1 className="font-bold text-white">
                  {consoleOption === undefined ? "Select an option first" : "Add this console to the cart"}
                </h1>
              </button>
            </div>
          </div>
          <div className="right-div flex-1">
            <div className="mt-10 flex flex-col items-center border-2 border-black p-10 lg:mt-0 lg:ml-10">
              <h1 className="mt-6 text-center text-xl font-bold">{consoleObject.description}</h1>
              <h2 className="mt-3 text-left text-lg font-semibold underline decoration-slate-100 underline-offset-4">
                Fabricant
              </h2>
              <p className="mt-3 text-center text-base">{consoleObject.fabricant}</p>
              {consoleOption !== undefined ? (
                <>
                  <h2 className="mt-3 text-left text-lg font-semibold underline decoration-slate-100 underline-offset-4">
                    Description
                  </h2>
                  <p className="mt-3 whitespace-pre-line text-center text-base">{consoleOption.description}</p>
                </>
              ) : (
                []
              )}
              <h2 className="mt-3 text-left text-lg font-semibold underline decoration-slate-100 underline-offset-4">
                Release date
              </h2>
              <p className="mt-3 text-center text-base">{consoleObject.releaseDate}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
