import Head from "next/head";
import MyMetaTags from "../../components/MyMetaTags";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useMemo, useState } from "react";
import Cart from "../../utils/Cart";
import IGame from "../../types/IGame";
import IConsole from "../../types/IConsole";

export default function CartPage() {
  const [cart, setCart] = useState<Cart>();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    const c = new Cart();
    setCart(c);
  }, []);

  const cartItems = useMemo(() => {
    if (cart) {
      return cart.getItems();
    }
    return [];
  }, [cart, refresh]);

  const incrementItem = (index: number) => {
    if (cart) {
      cart.incrementItem(index);
      setRefresh((r) => !r);
    }
  };

  const decrementItem = (index: number) => {
    if (cart) {
      cart.decrementItem(index);
      setRefresh((r) => !r);
    }
  };

  return (
    <div className="w-full">
      <Head>
        <MyMetaTags />
        <title>Cart</title>
        <meta property="og:title" content="Cart" />
        <meta
          property="og:description"
          content="This is the cart page where you can see all the items you're about to buy :)"
        />
        <meta property="og:image" content="/Facebook-cover.png" />
        <meta
          name="description"
          content="This is the cart page where you can see all the items you're about to buy :)"
        />
      </Head>
      <Header />
      <main className="flex flex-col my-10 mx-20 mb-96">
        <h1 className="text-4xl font-bold max-w-4xl mb-8">Your cart</h1>
        <div>
          {cartItems.map(([quantity, item], i) => {
            const game = item as IGame;
            const console = item as IConsole;
            if (item.typehint === "game") {
              return (
                <div key={i} className="border border-purple-500 flex flex-row">
                  <a className="max-w-xs lg:h-80" href={"games/" + item.id}>
                    <img src={item.thumbnail} />
                  </a>
                  <div className="flex flex-col w-full justify-around">
                    <div id="name-description">
                      <h1 className="text-3xl font-bold">{item.name}</h1>
                      <p className="text-xl">{game.description}</p>
                    </div>
                    <div id="stats">
                      <h2 className="text-xl">
                        For:{" "}
                        {game.avaiableOn.map((console) => console.name + " ")}
                      </h2>
                      <h2 className="text-xl">
                        Release date: {game.releaseDate}
                      </h2>
                      <h2 className="text-xl">Price: {game.price} $</h2>
                    </div>
                    <div id="actions">
                      <div className="flex justify-between">
                        <div className="flex flex-row justify-around">
                          <button
                            disabled={quantity <= 1}
                            onClick={() => decrementItem(i)}
                            className="bg-white p-3 rounded-xl border-2 border-red-500 hover:bg-red-600 disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-white text-red-500"
                          >
                            <h1 className="font-bold">-</h1>
                          </button>
                          <div className="border-2 border-black rounded-xl p-3 mx-4 text-center">
                            <h1 className="font-bold inline-block m-2">
                              Quantity: {quantity}
                            </h1>
                          </div>
                          <button
                            onClick={() => incrementItem(i)}
                            className="bg-white p-3 rounded-xl border-2 border-green-500 hover:bg-green-600"
                          >
                            <h1 className="text-green-500 font-bold">+</h1>
                          </button>
                        </div>
                        <div className="flex flex-row justify-around">
                          <button className="bg-purple-500 p-3 rounded-xl shadow-lg shadow-purple-800 hover:bg-purple-700 mr-4">
                            <h1 className="text-white font-bold">
                              Remove item
                            </h1>
                          </button>
                          <button className="bg-purple-500 p-3 rounded-xl shadow-lg shadow-purple-800 hover:bg-purple-700">
                            <h1 className="text-white font-bold">Item page</h1>
                          </button>
                        </div>
                        <div className="mr-4">
                          <h1 className="font-bold text-xl">Total price</h1>
                          <h1 className="font-bold text-3xl text-purple-500">
                            {(quantity * item.price).toFixed(2)} $
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={i} className="border border-purple-500 flex flex-row">
                  <a className="max-w-xs h-80" href={"games/" + item.id}>
                    <img src={item.thumbnail} />
                  </a>
                  <div className="flex flex-col">
                    <h1 className="text-3xl font-bold mt-4">{item.name}</h1>
                    <h2 className="text-xl mt-4">For: {}</h2>
                  </div>
                </div>
              );
            }
          })}
          {cartItems.length === 0 ? <div>No item booo</div> : []}
        </div>
      </main>
      <Footer />
    </div>
  );
}
