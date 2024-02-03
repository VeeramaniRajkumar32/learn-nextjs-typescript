"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="z-30 flex items-center w-full h-24 sm:h-20 bg-gradient-to-r from-neutral-300 to-stone-400 dark:bg-gray-800 sticky top-0">
      <div className="container flex items-center justify-between px-6 mx-auto">
        <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
          <Link
            href={`/`}
            className="bg-blue-900 bg-clip-text text-transparent"
          >
            Veera
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="items-center hidden text-sm text-gray-800 uppercase font-sen dark:text-white lg:flex">
            <Link
              href={`/`}
              className={`flex px-6 py-2 hover:border-b-2 border-indigo-500 ${
                pathname === `/` ? "text-indigo-500" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href={`/about`}
              className={`flex px-6 py-2 hover:text-indigo-500 hover:border-b-2 hover:border-indigo-500 ${
                pathname === "/about" ? "text-indigo-500" : ""
              }`}
            >
              About Us
            </Link>
            {/* <Link
							href={`/resources`}
							className={`flex px-6 py-2 hover:text-indigo-500 hover:border-b-2 hover:border-indigo-500 ${
								pathname === "/resources" ? "text-indigo-500" : ""
							}`}
						>
							Resources
						</Link> */}

            <div className="group inline-block">
              <button className="outline-none focus:outline-none px-6 py-2 rounded-sm flex items-center min-w-32">
                <span className="pr-1 flex-1">RESOURCES</span>
              </button>
              <ul className="bg-gradient-to-r from-neutral-300 to-stone-400 dark:bg-gray-800 rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                <Link href={`/resources/requirement`}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Requirement
                  </li>
                </Link>
              </ul>
            </div>

            <div className="group inline-block">
              <button className="outline-none focus:outline-none px-6 py-2 rounded-sm flex items-center min-w-32">
                <span className="pr-1 flex-1">ARTICLE</span>
              </button>
              <ul className="bg-gradient-to-r from-neutral-300 to-stone-400 dark:bg-gray-800 rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                <Link href={`/article/country`}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Country
                  </li>
                </Link>
                <Link href={`/article/general`}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    General
                  </li>
                </Link>
                <Link href={`/article/university`}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    University
                  </li>
                </Link>
              </ul>
            </div>

            <Link
              href={`/careers`}
              className={`flex px-6 py-2 hover:text-indigo-500 hover:border-b-2 hover:border-indigo-500 ${
                pathname === "/careers" ? "text-indigo-500" : ""
              }`}
            >
              Careers
            </Link>
            <Link
              href={`/contactus`}
              className={`flex px-6 py-2 hover:text-indigo-500 hover:border-b-2 hover:border-indigo-500 ${
                pathname === "/contactus" ? "text-indigo-500" : ""
              }`}
            >
              Contact Us
            </Link>
          </ul>
          <button className="flex flex-col ml-4 lg:hidden">
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
