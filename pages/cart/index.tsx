import Head from "next/head";
import MyMetaTags from "../../components/MyMetaTags";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import Cart from "../../utils/Cart";
import NoTitem from "../../components/NoItem";
import CartItem from "../../components/CartItem";
import IConsole from "../../types/IConsole";
import PageMetaTags from "../../components/PageMetaTags";
import { useRouter } from "next/router";

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState<Cart>();
  const [refresh, setRefresh] = useState(true);
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    const c = new Cart();
    setCart(c);
  }, []);

  const cartItems = useMemo(() => {
    if (cart) {
      console.log(cart.getItems());
      return cart.getItems();
    }
    return [];
  }, [cart, refresh]);

  const refreshFunction = () => setRefresh((r) => !r);
  const handleGoToCheckout = () => router.push("/checkout");

  /**
   * Calculates the total cost of the cart
   * @returns Total cost of the cart as a string
   */
  const getTotalCost = () => {
    return cartItems
      .map(([q, i]) => {
        if (i.typehint === "console") {
          const consoleData = i as IConsole;
          if (consoleData.selectedOption !== undefined) {
            return consoleData.selectedOption.price * q;
          } else {
            return i.price * q;
          }
        } else {
          return i.price * q;
        }
      })
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  };

  return (
    <div className="w-full">
      <Head>
        <title>Cart</title>
        <MyMetaTags />
        <PageMetaTags
          title="Cart"
          contentTitle="Cart page"
          description="Check the items you're gonna buy on that page !"
          url="https://yoyo-games.vercel.app/cart"
          image="/Facebook-cover.png"
        />
      </Head>
      <Header />
      <main className="relative my-10 mx-4 mb-20 flex flex-col lg:mx-20 lg:mb-36">
        <p ref={ref} className="opacity-0 lg:hidden"></p>
        <h1 className="mb-8 max-w-4xl text-4xl font-bold">Your cart</h1>
        {cartItems.length === 0 ? <NoTitem /> : []}

        {/* Summary displayed on mobile and tablets, verison that is on top of the articles */}
        <div
          className={
            "w-full origin-bottom transition-all duration-500 lg:hidden " +
            (inView && cartItems.length > 0 ? "opacity-100" : "opacity-0")
          }
        >
          <div className="flex flex-col bg-purple-500 p-2 text-white">
            <h1 className=" mb-1 text-center text-2xl font-extrabold">Order summary</h1>
            <div className="flex flex-row justify-between">
              <h2 className=" text-xl font-extrabold">Items: {cartItems.length}</h2>
              <h2 className=" text-xl font-extrabold">Total: ${getTotalCost()} </h2>
            </div>
            <button onClick={handleGoToCheckout} className="mt-1 rounded-lg  bg-white p-1 hover:bg-slate-300">
              <a href="checkout" className="font-bold text-purple-500">
                GO TO CHECKOUT
              </a>
            </button>
          </div>
        </div>
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
          {/* Summary displayed on PC screens */}
          {cartItems.length > 0 ? (
            <div className="full-screen-order-summary ml-10 mt-10 hidden w-[25%] lg:block">
              <div className="flex flex-col bg-purple-500 p-6 text-white">
                <h1 className=" mb-1 text-center text-2xl font-extrabold">Order summary</h1>
                <h2 className=" text-xl font-extrabold">Items: {cartItems.length}</h2>
                <h2 className=" text-xl font-extrabold">Total: ${getTotalCost()} </h2>
                <h2 className=" text-xl font-extrabold">Taxes: At checkout</h2>
                <p className=" mt-5 text-center text-lg">Ready to get your articles ?</p>
                <button onClick={handleGoToCheckout} className="mt-1 rounded-lg  bg-white p-3 hover:bg-slate-300">
                  <a href="checkout" className="font-bold text-purple-500">
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

      {/* Floating summary displayed at the bottom of the screen on tablets / phones */}
      <div
        className={
          "scrolling-order-summary fixed bottom-0 w-full transition-all duration-500 lg:hidden " +
          (!inView && cartItems.length > 0 ? "opacity-100" : "opacity-0")
        }
      >
        <div className="flex flex-col bg-purple-500 p-2 text-white">
          <h1 className=" mb-1 text-center text-2xl font-extrabold">Order summary</h1>
          <div className="flex flex-row justify-between">
            <h2 className=" text-xl font-extrabold">Items: {cartItems.length}</h2>
            <h2 className=" text-xl font-extrabold">Total: ${getTotalCost()} </h2>
          </div>
          <h2 className="hidden text-xl font-extrabold md:block">Taxes: At checkout</h2>
          <p className="mt-5 hidden text-center text-lg md:block">Ready to get your articles ?</p>
          <button onClick={handleGoToCheckout} className="mt-1 rounded-lg  bg-white p-3 hover:bg-slate-300">
            <a href="checkout" className="font-bold text-purple-500">
              GO TO CHECKOUT
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
