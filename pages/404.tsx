import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyMetaTags from "../components/MyMetaTags";
import PageMetaTags from "../components/PageMetaTags";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404</title>
        <MyMetaTags />
        <PageMetaTags
          title="404"
          contentTitle="404"
          description="This page doesn't exist :("
          url="https://yoyo-games.vercel.app/404"
          image="/Facebook-cover.png"
        />
      </Head>
      <Header />
      <main className="my-32 flex flex-col items-center justify-center">
        <h1 className="text-9xl font-black text-purple-500">404</h1>
        <p className="my-10 text-center text-5xl font-black text-purple-500">
          Like Half-Life 3 this page doesn't exist and will (probably) never exist.
        </p>
        <a href="/" className="text-center text-5xl font-black text-purple-500 underline">
          Thank your for reminding me what's reality, I wanna go back to the homepage now.
        </a>
      </main>
      <Footer />
    </div>
  );
}
