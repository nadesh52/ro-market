"use client";
import Image from "next/image";
import React, { useState } from "react";
import SwitchInput from "./SwitchInput";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { BASE_URL } from "@/constants";

const CategoryList = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
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
        <div className="order-3 flex w-full items-center px-6 py-2">
          <SwitchInput onChange={() => setIsFavorite(!isFavorite)} />
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
        <div className="active flex w-full items-center gap-3 rounded-xl p-3 hover:opacity-100">
          <div>
            <Image
              src={`${BASE_URL}/images/icons/category/etc-icon.svg`}
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
        <div className="inactive flex w-full items-center gap-3 rounded-xl p-3 hover:opacity-100">
          <div>
            <Image
              src={`${BASE_URL}/images/icons/category/headgear-icon.svg`}
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
        <div className="inactive flex w-full items-center gap-3 rounded-xl p-3 hover:opacity-100">
          <div>
            <Image
              src={`${BASE_URL}/images/icons/category/weapon-icon.svg`}
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
        <div className="inactive flex w-full items-center gap-3 rounded-xl p-3 hover:opacity-100">
          <div>
            <Image
              src={`${BASE_URL}/images/icons/category/armor-icon.svg`}
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
        <div className="inactive flex w-full items-center gap-3 rounded-xl p-3 hover:opacity-100">
          <div>
            <Image
              src={`${BASE_URL}/images/icons/category/card-icon.svg`}
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
        <div className="inactive flex w-full items-center gap-3 rounded-xl p-3 hover:opacity-100">
          <div>
            <Image
              src={`${BASE_URL}/images/icons/category/shadowgear-icon.svg`}
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
        <div className="inactive flex w-full items-center gap-3 rounded-xl p-3 hover:opacity-100">
          <div>
            <Image
              src={`${BASE_URL}/images/icons/category/costume-icon.svg`}
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
        <div className="inactive flex w-full items-center gap-3 rounded-xl p-3 hover:opacity-100">
          <div>
            <Image
              src={`${BASE_URL}/images/icons/category/land-icon.svg`}
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
        <div className="inactive flex w-full items-center gap-3 rounded-xl p-3 hover:opacity-100">
          <div>
            <Image
              src={`${BASE_URL}/images/icons/category/usable-icon2.svg`}
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
        <div className="inactive flex w-full items-center gap-3 rounded-xl p-3 hover:opacity-100">
          <div>
            <Image
              src={`${BASE_URL}/images/icons/category/usable-icon.svg`}
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
  );
};

export default CategoryList;
