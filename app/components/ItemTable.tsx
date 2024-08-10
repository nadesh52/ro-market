"use client";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const ItemTable = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 300){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])

  return (
    <div className="mt-14">
      
      <div className={`${isScroll ? 'fixed h-full mt-[-300px]' : 'absolute h-[720px]'} hidden lg:block w-[240px] border-r border-r-zinc-800`}>
        <div className="mb-4 flex justify-center">
          <div className="border-b-2 border-b-yellow-400 px-6 py-3 font-medium">
            NFTs
          </div>
          <div className="border-b-2 border-zinc-800 px-6 py-3 font-medium">
            Activity
          </div>
        </div>

        <div>
          <div className="my-4 ml-6 flex items-center gap-4">
            <div className="order-1">
              {isFavorite ? (
                <HeartIconSolid
                  className="size-4 text-yellow-400"
                  strokeWidth={1}
                />
              ) : (
                <HeartIcon className="size-4" strokeWidth={1} />
              )}
            </div>
            {isFavorite ? (
              <span className="order-2 text-lg font-medium text-white">
                Favorites
              </span>
            ) : (
              <span className="order-2 text-lg font-medium text-slate-500">
                Favorites
              </span>
            )}
            <div className="order-3 flex w-full items-center">
              <div className="px-6 py-2">
                <label className="relative">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    onChange={() => setIsFavorite(!isFavorite)}
                  />
                  <div className="h-[25px] w-[50px] rounded-full bg-slate-400 peer-checked:bg-yellow-400"></div>
                  <span className="absolute left-1 top-1/2 size-5 -translate-y-1/2 rounded-full bg-white transition-all duration-500 ease-in-out peer-checked:translate-x-7 peer-checked:bg-black"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="my-4 ml-6 flex items-center gap-4">
            <div className="size-4 rounded-full border border-yellow-400 bg-zinc-900"></div>
            <span className="order-2 text-lg font-medium text-slate-500">
              Explore Market
            </span>
          </div>

          <div className="mr-8 flex cursor-pointer">
            <div className="line"></div>
            <div className="active flex w-full items-center gap-3 p-3 hover:opacity-100">
              <div>
                <Image
                  src="/images/icons/category/etc-icon.svg"
                  height={24}
                  width={24}
                  alt="category"
                />
              </div>
              <p className="text-lg font-medium">All</p>
            </div>
          </div>
          {/*  */}
          <div className="mr-8 flex cursor-pointer items-center">
            <div className="line"></div>
            <div className="inactive flex w-full items-center gap-3 p-3 hover:opacity-100">
              <div>
                <Image
                  src="/images/icons/category/headgear-icon.svg"
                  height={24}
                  width={24}
                  alt="category"
                />
              </div>
              <p className="text-lg font-medium">Headgear</p>
            </div>
          </div>
          {/*  */}
          <div className="mr-8 flex cursor-pointer items-center">
            <div className="line"></div>
            <div className="inactive flex w-full items-center gap-3 p-3 hover:opacity-100">
              <div>
                <Image
                  src="/images/icons/category/weapon-icon.svg"
                  height={24}
                  width={24}
                  alt="category"
                />
              </div>
              <p className="text-lg font-medium">Weapon</p>
            </div>
          </div>
          {/*  */}
          <div className="mr-8 flex cursor-pointer items-center">
            <div className="line"></div>
            <div className="inactive flex w-full items-center gap-3 p-3 hover:opacity-100">
              <div>
                <Image
                  src="/images/icons/category/armor-icon.svg"
                  height={24}
                  width={24}
                  alt="category"
                />
              </div>
              <p className="text-lg font-medium">Armors</p>
            </div>
          </div>
          {/*  */}
          <div className="mr-8 flex cursor-pointer items-center">
            <div className="line"></div>
            <div className="inactive flex w-full items-center gap-3 p-3 hover:opacity-100">
              <div>
                <Image
                  src="/images/icons/category/card-icon.svg"
                  height={24}
                  width={24}
                  alt="category"
                />
              </div>
              <p className="text-lg font-medium">Cards</p>
            </div>
          </div>
          {/*  */}
          <div className="mr-8 flex cursor-pointer items-center">
            <div className="line"></div>
            <div className="inactive flex w-full items-center gap-3 p-3 hover:opacity-100">
              <div>
                <Image
                  src="/images/icons/category/shadowgear-icon.svg"
                  height={24}
                  width={24}
                  alt="category"
                />
              </div>
              <p className="text-lg font-medium">Shadow Gears</p>
            </div>
          </div>
          {/*  */}
          <div className="mr-8 flex cursor-pointer items-center">
            <div className="line-last"></div>
            <div className="inactive flex w-full items-center gap-3 p-3 hover:opacity-100">
              <div>
                <Image
                  src="/images/icons/category/costume-icon.svg"
                  height={24}
                  width={24}
                  alt="category"
                />
              </div>
              <p className="text-lg font-medium">Costumes</p>
            </div>
          </div>
          {/*  */}
          <div className="my-4 ml-6 flex items-center gap-4">
            <div className="size-4 rounded-full border border-zinc-500 bg-zinc-900"></div>
            <span className="order-2 text-lg font-medium text-slate-500">
              Other Item
            </span>
          </div>
          {/*  */}
          <div className="mr-8 flex cursor-pointer items-center">
            <div className="line"></div>
            <div className="inactive flex w-full items-center gap-3 p-3 hover:opacity-100">
              <div>
                <Image
                  src="/images/icons/category/land-icon.svg"
                  height={24}
                  width={24}
                  alt="category"
                />
              </div>
              <p className="text-lg font-medium">Land NFTs</p>
            </div>
          </div>
          {/*  */}
          <div className="mr-8 flex cursor-pointer items-center">
            <div className="line"></div>
            <div className="inactive flex w-full items-center gap-3 p-3 hover:opacity-100">
              <div>
                <Image
                  src="/images/icons/category/usable-icon2.svg"
                  height={24}
                  width={24}
                  alt="category"
                />
              </div>
              <p className="text-lg font-medium">Usable Item</p>
            </div>
          </div>
          {/*  */}
          <div className="mr-8 flex cursor-pointer items-center">
            <div className="line-last"></div>
            <div className="inactive flex w-full items-center gap-3 p-3 hover:opacity-100">
              <div>
                <Image
                  src="/images/icons/category/usable-icon.svg"
                  height={24}
                  width={24}
                  alt="category"
                />
              </div>
              <p className="text-lg font-medium">ETC.</p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>

      <div className="lg:ml-[240px]">
        <div className="mt-[-30px] lg:mt-0">
          <div className="p-8 mb-[140px]">
            <div className="flex gap-4">
              <div className="w-[320px]">
                <input
                  type="text"
                  placeholder="Search by name"
                  className="h-[48px] w-full rounded-lg border-2 border-zinc-700 bg-zinc-900 p-2 text-lg font-medium"
                />
              </div>

              <div className="relative">
                <button className="flex h-[48px] min-w-[100px] items-center justify-between gap-3 rounded-lg border-2 border-zinc-700 bg-zinc-900 py-2 pl-3 pr-2 text-left">
                  <div>All</div>
                  <div className="rounded-full border-2 border-zinc-700 p-1">
                    <ChevronDownIcon className="size-6" />
                  </div>
                </button>
              </div>

              <div className="relative">
                <button className="flex h-[48px] min-w-[180px] items-center justify-between gap-3 rounded-lg border-2 border-zinc-700 bg-zinc-900 py-2 pl-3 pr-2 text-left">
                  <div>Newest</div>
                  <div className="rounded-full border-2 border-zinc-700 p-1">
                    <ChevronDownIcon className="size-6" />
                  </div>
                </button>
              </div>
            </div>
            <div className="pt-8">
              <div className="flex justify-center lg:justify-start flex-wrap gap-6">
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
              <div className="flex w-full lg:w-[calc(100%-240px)] items-center justify-center gap-8">
                <div className="hidden lg:block">1 - 50 of 6356</div>
                <ul className="flex gap-4">
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
                      <div className="flex items-center gap-2 rounded bg-zinc-900 border border-zinc-800 px-4 py-1 text-lg text-zinc-300 hover:bg-zinc-700">
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
                      <div className="flex items-center gap-2 rounded bg-zinc-900 border border-zinc-800 px-4 py-1 text-lg text-zinc-300 hover:bg-zinc-700">
                        <p>119</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="flex items-center gap-2 rounded bg-zinc-900 border border-zinc-800 px-4 py-1 text-lg text-zinc-300 hover:bg-zinc-700">
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

                <div className="hidden lg:flex gap-4 items-center ">
                  <div>Result per page</div>
                  <div>
                    <button>
                      <div className="flex gap-1 py-1 px-2 bg-zinc-800 border border-zinc-700 items-center rounded">
                        <div>50</div>
                        <div>
                          <ChevronDownIcon className="size-4" />
                        </div>
                      </div>
                    </button>
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
