import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface IProps {
  onClose: () => void;
}

export default function GameNotFoundModal({ onClose }: IProps) {
  return (
    <Transition appear show as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
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
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
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
            <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                This game doesn't exist
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  I'm not exactly sure how you got in this page, you seem to be
                  an explorer, have you played Captain Toad lately ? Anyways if
                  you click on the button below you should find your way back to
                  the homepage so yeah you can just click it.
                  <br />
                  Thank you bye bye.
                  <br />
                  Please don't stay on this page.
                  <br />
                  Please leave.
                  <br />
                  God dammit click that button.
                  <br />
                  You could also click away to leave that page but yeah that's
                  it for me leave me alone.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={onClose}
                  title="Yes this one"
                >
                  This button ?
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
