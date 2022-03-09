import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyMetaTags from "../../components/MyMetaTags";
import PageMetaTags from "../../components/PageMetaTags";

export default function Checkout() {
  return (
    <div>
      <Head>
        <title>Checkout</title>
        <MyMetaTags />
        <PageMetaTags
          title="Checkout"
          contentTitle="Checkout page"
          description="Ready to buy your items ? Do that on the checkout page !"
          url="https://yoyo-games.vercel.app/checkout"
          image="/Facebook-cover.png"
        />
      </Head>
      <Header />
      <main className="my-32 flex flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-black text-purple-500 md:text-9xl">
          This isn't really a checkout page
        </h1>
        <p className="my-10 text-center text-2xl font-black text-purple-500 md:text-5xl">
          This site is a fake video game boutique I made to improve my skills in web dev
        </p>
        <p className="text-center text-2xl font-black text-purple-500 md:text-5xl">
          If you want to hav more infos about me and why I did this please click the link below :)
        </p>
        <a href="/about" className="my-10 text-center text-2xl font-black text-purple-500 underline md:text-5xl">
          I am the link below
        </a>
      </main>
      <Footer />
    </div>
  );
}
