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
      <main className="flex flex-col my-10 mx-20 mb-96">
        <h1 className="text-4xl font-bold max-w-4xl mb-8">Your cart</h1>
        <div className="flex flex-row">
          {cartItems.length === 0 ? <NoTitem /> : []}
          <div className="w-[75%]">
            {cartItems.map(([quantity, item], i) => (
              <CartItem
                index={i}
                quantity={quantity}
                item={item}
                refreshFunction={refreshFunction}
                cart={cart}
              />
            ))}
          </div>
          <div className="ml-10 w-[25%] mt-10">
            <div className="bg-purple-500 p-6 flex flex-col text-white">
              <h1 className=" text-2xl font-extrabold mb-1 text-center">
                Order summary
              </h1>
              <h2 className=" text-xl font-extrabold">
                Items: {cartItems.length}
              </h2>
              <h2 className=" text-xl font-extrabold">
                Total: $
                {cartItems
                  .map(([q, i]) => i.price * q)
                  .reduce((a, b) => a + b, 0)
                  .toFixed(2)}{" "}
              </h2>
              <h2 className=" text-xl font-extrabold">Taxes: At checkout</h2>
              <p className=" text-lg text-center mt-5">
                Ready to get your articles ?
              </p>
              <button className="bg-white rounded-lg  hover:bg-slate-300 mt-1 p-3">
                <a href={"games/"} className="text-purple-500 font-bold">
                  GO TO CHECKOUT
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
