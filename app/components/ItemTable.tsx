"use client";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchInput from "./Searchnput";
import SortFilter from "./SortFilter";
import ServerSelection from "./ServerSelection";
import CategoryList from "./CategoryList";

const ItemTable = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <div className="mt-14">
      <div
        className={`${isScroll ? "fixed mt-[-300px] h-full pt-5" : "absolute h-[720px]"} hidden w-[240px] border-r border-r-zinc-800 lg:block`}
      >
        <div className="mb-4 flex justify-center">
          <div className="border-b-2 border-b-yellow-400 px-6 py-3 font-medium">
            NFTs
          </div>
          <div className="border-b-2 border-zinc-800 px-6 py-3 font-medium">
            Activity
          </div>
        </div>

        <CategoryList />
      </div>

      <div className="lg:ml-[240px]">
        <div className="mt-[-30px] lg:mt-0">
          <div className="mb-[140px] px-8">
            <div className="flex gap-4 justify-center md:justify-start">
              <SearchInput />
              <ServerSelection />
              <SortFilter />
            </div>

            <div className="pt-8">
              <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="fixed bottom-[90px] h-[50px] w-full border-b border-zinc-800 bg-zinc-900">
            <div className="flex h-full w-full items-center">
              <div className="flex w-full items-center justify-center gap-8 lg:w-[calc(100%-240px)]">
                <div className="hidden lg:block">1 - 50 of 6356</div>

                <ul className="flex md:gap-4 gap-2">
                  <li>
                    <a href="">
                      <div className="flex items-center gap-2 rounded bg-zinc-800 px-4 py-1 text-lg text-zinc-300">
                        <ChevronLeftIcon className="size-4" />
                        <p>Back</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="flex items-center gap-2 rounded bg-yellow-400 px-4 py-1 text-lg text-zinc-900">
                        <p>1</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900 px-4 py-1 text-lg text-zinc-300 hover:bg-zinc-700">
                        <p>2</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="flex items-center gap-2 rounded px-4 py-1 text-lg text-zinc-300">
                        <p>...</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900 px-4 py-1 text-lg text-zinc-300 hover:bg-zinc-700">
                        <p>119</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900 px-4 py-1 text-lg text-zinc-300 hover:bg-zinc-700">
                        <p>120</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="flex items-center gap-2 rounded bg-zinc-800 px-4 py-1 text-lg text-zinc-300">
                        <p>Next</p>
                        <ChevronRightIcon className="size-4" />
                      </div>
                    </a>
                  </li>
                </ul>

                <div className="hidden items-center gap-4 lg:flex">
                  <div>Result per page</div>
                  <div className="relative">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="flex items-center gap-1 rounded border border-zinc-700 bg-zinc-800 px-2 py-1"
                    >
                      <p>50</p>
                      <div>
                        <ChevronDownIcon className="size-4" />
                      </div>
                    </button>
                    <div
                      className={`${isMenuOpen ? "block" : "hidden"} absolute top-0 mt-[-110px] w-full rounded bg-zinc-950 shadow-md shadow-zinc-500`}
                    >
                      <ul className="flex flex-col-reverse">
                        <li>
                          <button className="w-full py-1 hover:bg-zinc-800">
                            50
                          </button>
                        </li>
                        <li>
                          <button className="w-full py-1 hover:bg-zinc-800">
                            100
                          </button>
                        </li>
                        <li>
                          <button className="w-full py-1 hover:bg-zinc-800">
                            150
                          </button>
                        </li>
                        <li>
                          <button className="w-full py-1 hover:bg-zinc-800">
                            200
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTable;
