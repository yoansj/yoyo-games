import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  TruckIcon,
  GlobeAltIcon,
  DesktopComputerIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import SearchBar from "./SearchBar";

/**
 * Header for the websited
 * Inspired by a Tailwind component
 * @returns React.Component
 */
export default function Header() {
  return (
    <Popover id="header" className="relative z-20 bg-purple-500">
      <div className=" mx-auto flex max-w-7xl flex-col px-4 sm:px-6">
        <div className="flex items-center justify-between space-x-3 py-6 ">
          <div className="menu-button">
            <Popover.Button className="group inline-flex items-center justify-center rounded-md bg-white p-2 text-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600">
              <MenuIcon
                className="h-6 w-6 transition-all duration-150 group-hover:h-8 group-hover:w-8"
                aria-hidden="true"
              />
              <p className="hidden lg:visible">Open menu</p>
            </Popover.Button>
          </div>
          <div className="flex justify-start">
            <a href="/" className="flex items-center justify-center">
              <img
                className="h-14 pt-3 pb-4 duration-500 hover:animate-pulse md:h-20"
                src="/yoyogames-transparent.png"
                alt="Yoyo Games"
              />
              <span className="sr-only">Yoyo Games</span>
            </a>
          </div>
          <div className="web-search-bar hidden flex-1 md:flex">
            <SearchBar />
          </div>
          <a
            href="/cart"
            className="group inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white p-2 text-base font-medium shadow-sm md:px-4"
          >
            <ShoppingCartIcon
              className="h-6 w-6 flex-shrink-0 text-purple-500 transition-all duration-150 group-hover:h-8 group-hover:w-8"
              aria-hidden="true"
            />
          </a>
        </div>
        <div className="mobile-below-search-bar -mt-4 mb-4 md:hidden">
          <SearchBar />
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-20 max-w-md origin-top-right transform p-2 transition"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <a href="/" className="flex items-center justify-center">
                    <img className="h-8 w-auto" src="/yoyogames-transparent.png" alt="Yoyo Games" />

                    <span className="sr-only">Yoyo Games</span>
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="/best-sellers" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    <TrendingUpIcon className="h-6 w-6 flex-shrink-0 text-purple-500" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">Best sellers</span>
                  </a>
                  <a href="/action-games" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    <TruckIcon className="h-6 w-6 flex-shrink-0 text-purple-500" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">Action games</span>
                  </a>
                  <a href="/multiplayer-games" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    <GlobeAltIcon className="h-6 w-6 flex-shrink-0 text-purple-500" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">Multiplayer games</span>
                  </a>
                  <a href="/consoles" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    <DesktopComputerIcon className="h-6 w-6 flex-shrink-0 text-purple-500" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">Consoles</span>
                  </a>
                  <a href="/about" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    <InformationCircleIcon className="h-6 w-6 flex-shrink-0 text-purple-500" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">About us</span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <a
                  href="/cart"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700"
                >
                  Cart
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
