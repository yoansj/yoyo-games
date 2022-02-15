import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface IProps {
  /**
   * Wether the modal is opened or not
   */
  open: boolean;

  /**
   * Called when the modal closes
   */
  onClose: () => void;

  /**
   * Image of the item added (url)
   */
  image: string;

  /**
   * Name of the item added
   */
  itemName: string;
}

/**
 * Modal opened when an item is added to the cart
 * @param param0 - Props
 * @returns React.Component
 */
export default function AddToCartModal({ onClose, open, image, itemName }: IProps) {
  return (
    <Transition appear={open} show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" open={open} onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-800"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="my-8 inline-block w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all">
              <Dialog.Title as="h3" className="text-center text-lg font-bold leading-6 text-gray-900">
                {itemName} has been added to the cart
              </Dialog.Title>
              <div className="mt-2 flex justify-center">
                <img src={image} className="w-40" />
              </div>
              <div className="mt-4 flex flex-col justify-center">
                <p className="text-center text-base">What would you like to do now ?</p>
                <button
                  type="button"
                  className="mt-2 inline-flex justify-center rounded-md border border-transparent bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-900 focus-visible:ring-offset-2"
                  onClick={onClose}
                >
                  Keep shopping
                </button>
                <button
                  type="button"
                  className="mt-2 inline-flex justify-center rounded-md border border-transparent bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-900 focus-visible:ring-offset-2"
                >
                  <a href="/cart">Go to the cart page</a>
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
