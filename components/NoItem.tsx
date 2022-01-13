import React from "react";

export default function NoTitem() {
  return (
    <div className="bg-purple-500 p-6 flex items-center flex-col text-white">
      <h1 className=" text-6xl font-extrabold text-center mb-6">
        You currently have no items in your cart
      </h1>
      <a
        href="/best-sellers"
        className="text-2xl underline underline-offset-2 decoration-purple-900 decoration-2"
      >
        Hesitant about what to buy ? Click here to go to our bestsellers
      </a>
    </div>
  );
}
