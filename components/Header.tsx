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
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <Popover className="relative bg-purple-500">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center justify-center">
              <img
                className="h-20 pt-3"
                src="/yoyogames-transparent.png"
                alt="Yoyo Games"
              />
              <span className="sr-only">Yoyo Games</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              <>
                <Popover.Button className="group inline-flex items-center text-lg text-white font-medium">
                  <span className="text-white hover:text-slate-100">Games</span>
                  <ChevronDownIcon
                    className={"text-white ml-2 h-5 w-5"}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="/best-sellers"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <TrendingUpIcon
                            className="flex-shrink-0 h-6 w-6 text-purple-500"
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Best sellers
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Yoyo Games best sellers, the hall of fame as they
                              say
                            </p>
                          </div>
                        </a>
                        <a
                          href="/action-games"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <TruckIcon
                            className="flex-shrink-0 h-6 w-6 text-purple-500"
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Action games
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Action games made for the real GAMERS
                            </p>
                          </div>
                        </a>
                        <a
                          href="/multiplayer-games"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <GlobeAltIcon
                            className="flex-shrink-0 h-6 w-6 text-purple-500"
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Multiplayer games
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Games that are played online
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            </Popover>

            <a
              href="#"
              className="text-lg font-medium text-white hover:text-slate-100"
            >
              Consoles
            </a>
            <a
              href="#"
              className="text-lg font-medium text-white hover:text-slate-100"
            >
              Search
            </a>
            <a
              href="/about"
              className="text-lg font-medium text-white hover:text-slate-100"
            >
              About us
            </a>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="/cart"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-white hover:bg-slate-100"
            >
              <ShoppingCartIcon
                className="flex-shrink-0 h-6 w-6 text-purple-500"
                aria-hidden="true"
              />
            </a>
          </div>
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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          {/* Mobile popover */}
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/yoyogames.png"
                    alt="Yoyo Games"
                  />
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
                  <a
                    href="/best-sellers"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <TrendingUpIcon
                      className="flex-shrink-0 h-6 w-6 text-purple-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Best sellers
                    </span>
                  </a>
                  <a
                    href="/action-games"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <TruckIcon
                      className="flex-shrink-0 h-6 w-6 text-purple-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Action games
                    </span>
                  </a>
                  <a
                    href="/multiplayer-games"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <GlobeAltIcon
                      className="flex-shrink-0 h-6 w-6 text-purple-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Multiplayer games
                    </span>
                  </a>
                  <a
                    href="/consoles"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <DesktopComputerIcon
                      className="flex-shrink-0 h-6 w-6 text-purple-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Consoles
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-500 hover:bg-purple-700"
                >
                  Basket
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
