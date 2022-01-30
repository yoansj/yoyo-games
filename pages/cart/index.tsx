import Head from "next/head";
import MyMetaTags from "../../components/MyMetaTags";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useMemo, useState } from "react";
import Cart from "../../utils/Cart";
import NoTitem from "../../components/NoItem";
import CartItem from "../../components/CartItem";

export default function CartPage() {
  const [cart, setCart] = useState<Cart>();
  const [refresh, setRefresh] = useState(true);
  const [scrollPercent, setScrollPercent] = useState(0);

  const onScroll = () => {
    // Found on https://stackoverflow.com/a/9348993/16405696 👍
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    const yScroll = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    const docHeight = Math.max(
      document.body.scrollHeight || 0,
      document.documentElement.scrollHeight || 0,
      document.body.offsetHeight || 0,
      document.documentElement.offsetHeight || 0,
      document.body.clientHeight || 0,
      document.documentElement.clientHeight || 0
    );
    const percentage = ((yScroll + height) / docHeight) * 100;
    setScrollPercent(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, true);
    return () => {
      document.removeEventListener("scroll", onScroll, true);
    };
  }, []);

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

  const refreshFunction = () => setRefresh((r) => !r);

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
      <main className="relative my-10 mx-4 mb-20 flex flex-col lg:mx-20">
        <h1 className="mb-8 max-w-4xl text-4xl font-bold">Your cart</h1>
        {cartItems.length === 0 ? <NoTitem /> : []}
        {scrollPercent < 36 && cartItems.length > 0 ? (
          <div className="w-full lg:hidden">
            <div className="flex flex-col bg-purple-500 p-2 text-white">
              <h1 className=" mb-1 text-center text-2xl font-extrabold">Order summary</h1>
              <div className="flex flex-row justify-between">
                <h2 className=" text-xl font-extrabold">Items: {cartItems.length}</h2>
                <h2 className=" text-xl font-extrabold">
                  Total: $
                  {cartItems
                    .map(([q, i]) => i.price * q)
                    .reduce((a, b) => a + b, 0)
                    .toFixed(2)}{" "}
                </h2>
              </div>
              <button className="mt-1 rounded-lg  bg-white p-1 hover:bg-slate-300">
                <a href={"games/"} className="font-bold text-purple-500">
                  GO TO CHECKOUT
                </a>
              </button>
            </div>
          </div>
        ) : (
          []
        )}
        <div className="flex flex-row">
          <div className="w-full lg:w-[75%]">
            {cartItems.map(([quantity, item], i) => (
              <CartItem
                key={i}
                index={i}
                quantity={quantity}
                item={item}
                refreshFunction={refreshFunction}
                cart={cart}
              />
            ))}
          </div>
          {cartItems.length > 0 ? (
            <div className="full-screen-order-summary ml-10 mt-10 hidden w-[25%] lg:block">
              <div className="flex flex-col bg-purple-500 p-6 text-white">
                <h1 className=" mb-1 text-center text-2xl font-extrabold">Order summary</h1>
                <h2 className=" text-xl font-extrabold">Items: {cartItems.length}</h2>
                <h2 className=" text-xl font-extrabold">
                  Total: $
                  {cartItems
                    .map(([q, i]) => i.price * q)
                    .reduce((a, b) => a + b, 0)
                    .toFixed(2)}{" "}
                </h2>
                <h2 className=" text-xl font-extrabold">Taxes: At checkout</h2>
                <p className=" mt-5 text-center text-lg">Ready to get your articles ?</p>
                <button className="mt-1 rounded-lg  bg-white p-3 hover:bg-slate-300">
                  <a href={"games/"} className="font-bold text-purple-500">
                    GO TO CHECKOUT
                  </a>
                </button>
              </div>
            </div>
          ) : (
            []
          )}
        </div>
      </main>
      {scrollPercent >= 37 && scrollPercent < 74 && cartItems.length > 0 ? (
        <div className="scrolling-order-summary fixed bottom-0 w-full lg:hidden">
          <div className="flex flex-col bg-purple-500 p-2 text-white">
            <h1 className=" mb-1 text-center text-2xl font-extrabold">Order summary</h1>
            <div className="flex flex-row justify-between">
              <h2 className=" text-xl font-extrabold">Items: {cartItems.length}</h2>
              <h2 className=" text-xl font-extrabold">
                Total: $
                {cartItems
                  .map(([q, i]) => i.price * q)
                  .reduce((a, b) => a + b, 0)
                  .toFixed(2)}{" "}
              </h2>
            </div>
            <button className="mt-1 rounded-lg  bg-white p-3 hover:bg-slate-300">
              <a href={"games/"} className="font-bold text-purple-500">
                GO TO CHECKOUT
              </a>
            </button>
          </div>
        </div>
      ) : (
        []
      )}
      <Footer />
    </div>
  );
}
