import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404</title>
        <meta property="og:title" content="404" />
        <meta
          property="og:description"
          content="This page doesn't exist you got lost there"
        />
        <meta property="og:image" content="/Facebook-cover.png" />
        <meta
          name="description"
          content="This page doesn't exist you got lost there"
        />
      </Head>
      <Header />
      <main className="flex flex-col my-32 items-center justify-center">
        <h1 className="text-9xl font-black text-purple-500">404</h1>
        <p className="text-5xl font-black text-purple-500 my-10 text-center">
          Like Half-Life 3 this page doesn't exist and will (probably) never
          exist.
        </p>
        <a
          href="/"
          className="text-5xl font-black text-purple-500 underline text-center"
        >
          Thank your for reminding me what's reality, I wanna go back to the
          homepage now.
        </a>
      </main>
      <Footer />
    </div>
  );
}
