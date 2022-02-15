import React from "react";

/**
 * Displayed when the user has no items in its cart
 * @returns React.Component
 */
export default function NoTitem() {
  return (
    <div className="flex w-full flex-col items-center bg-purple-500 p-6 text-white">
      <h1 className=" mb-6 text-center text-6xl font-extrabold">You currently have no items in your cart</h1>
      <a
        href="/best-sellers"
        className="text-center text-2xl underline decoration-purple-900 decoration-2 underline-offset-2"
      >
        Hesitant about what to buy ? Click here to go to our bestsellers
      </a>
    </div>
  );
}
