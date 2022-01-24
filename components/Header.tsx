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
import { ChevronDownIcon } from "@heroicons/react/solid";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <Popover className="relative bg-purple-500">
      <div className=" flex flex-col max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-1">
          <div className="menu-button">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
              <p className="hidden lg:visible">Open menu</p>
            </Popover.Button>
          </div>
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center justify-center">
              <img className="h-14 md:h-20 pt-3 pb-4" src="/yoyogames-transparent.png" alt="Yoyo Games" />
              <span className="sr-only">Yoyo Games</span>
            </a>
          </div>
          <div className="web-search-bar hidden md:flex flex-1">
            <SearchBar />
          </div>
          <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="/cart"
              className="whitespace-nowrap inline-flex items-center justify-center p-2 md:px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-white hover:bg-slate-100"
            >
              <ShoppingCartIcon className="flex-shrink-0 h-6 w-6 text-purple-500" aria-hidden="true" />
            </a>
          </div>
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
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right max-w-md">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/yoyogames-transparent.png" alt="Yoyo Games" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="/best-sellers" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <TrendingUpIcon className="flex-shrink-0 h-6 w-6 text-purple-500" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">Best sellers</span>
                  </a>
                  <a href="/action-games" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <TruckIcon className="flex-shrink-0 h-6 w-6 text-purple-500" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">Action games</span>
                  </a>
                  <a href="/multiplayer-games" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <GlobeAltIcon className="flex-shrink-0 h-6 w-6 text-purple-500" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">Multiplayer games</span>
                  </a>
                  <a href="/consoles" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <DesktopComputerIcon className="flex-shrink-0 h-6 w-6 text-purple-500" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">Consoles</span>
                  </a>
                  <a href="/about" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <InformationCircleIcon className="flex-shrink-0 h-6 w-6 text-purple-500" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">About us</span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="/cart"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-500 hover:bg-purple-700"
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
