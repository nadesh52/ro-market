"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Bars3Icon,
  ChevronDownIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useMenu } from "@/hooks/useMenu";
import MenuModal from "./MenuModal";

const HeaderMenu = () => {
  const [isScroll, setIsScroll] = useState<any>({});
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setIsScroll((prev: any) => ({ ...prev, top: true }));
      } else {
        setIsScroll((prev: any) => ({ ...prev, top: false }));
      }

      if (window.scrollY >= 200) {
        setIsScroll((prev: any) => ({ ...prev, mid: true }));
      } else {
        setIsScroll((prev: any) => ({ ...prev, mid: false }));
      }
    });

    if (isOpenMenu === true) {
      window.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          setIsOpenMenu(false);
        }
      });

      window.addEventListener("click", (e) => {
        if (e.target === menuRef.current) {
          setIsOpenMenu(false);
        }
      });
    }
  }, [isOpenMenu]);

  return (
    <div>
      {/* menu modal */}
      <MenuModal
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={() => setIsOpenMenu(false)}
        menuRef={menuRef}
      />

      <div
        className={`fixed z-50 h-[70px] w-full p-4 ${isScroll.top ? "bg-zinc-900" : "bg-transparent"}`}
      >
        <nav className="flex justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="px-4">
              <div>
                <Image
                  src="/images/logo.svg"
                  height={22}
                  width={104}
                  alt="logo"
                />
              </div>
            </a>

            <div className="flex items-center gap-4">
              <button className="justify-betwee flex items-center gap-4">
                <div>
                  <Image
                    src="/images/game-icon.webp"
                    height={20}
                    width={20}
                    alt="game-select"
                  />
                </div>
                <div className="font-medium">ROL THAILAND</div>
                <div>
                  <ChevronDownIcon
                    className={`size-6 rounded-lg hover:p-1 ${isScroll.top ? "hover:bg-zinc-800" : "hover:bg-zinc-900"}`}
                  />
                </div>
              </button>

              <div className="h-[35px] w-[2px] bg-white/50"></div>
              <button
                className={`px-4 py-2 hover:rounded-md ${isScroll.top ? "hover:bg-zinc-800" : "hover:bg-zinc-900"}`}
              >
                SELL NFTs
              </button>
            </div>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <div>
              <button className="px-4 py-2">
                <div className="flex gap-2">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="wallet"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="size-6"
                  >
                    <path
                      fill="currentColor"
                      d="M456 32C469.3 32 480 42.75 480 56C480 69.25 469.3 80 456 80H88C65.91 80 48 97.91 48 120V392C48 414.1 65.91 432 88 432H424C446.1 432 464 414.1 464 392V216C464 193.9 446.1 176 424 176H120C106.7 176 96 165.3 96 152C96 138.7 106.7 128 120 128H424C472.6 128 512 167.4 512 216V392C512 440.6 472.6 480 424 480H88C39.4 480 0 440.6 0 392V120C0 71.4 39.4 32 88 32H456zM352 304C352 286.3 366.3 272 384 272C401.7 272 416 286.3 416 304C416 321.7 401.7 336 384 336C366.3 336 352 321.7 352 304z"
                    ></path>
                  </svg>
                  <p>Connect Wallet</p>
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={() => setIsOpenMenu(true)}
                className={`rounded-lg ${isScroll.top ? "border border-zinc-800 bg-zinc-900 hover:bg-zinc-800" : "bg-[rgba(63,63,70,0.5)] hover:bg-zinc-900"} px-4 py-2 backdrop-blur-sm`}
              >
                <div className="flex items-center gap-2">
                  <Squares2X2Icon className="size-6 stroke-2" />
                  <p>Launch App</p>
                </div>
              </button>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center lg:hidden">
            <button ref={btnRef} onClick={() => setIsOpenMenu(true)}>
              <Bars3Icon className="size-8" />
            </button>
          </div>
          {/*  */}
        </nav>
      </div>

      <div className='h-[340px] bg-[url("/images/rol-banner.png")] bg-cover bg-custom-pos bg-no-repeat'>
        <div
          className={`absolute z-20 ml-8 pt-[190px] ${isScroll.mid ? "hidden" : ""}`}
        >
          <div className="mb-4 size-20 overflow-hidden rounded-2xl border-2 border-zinc-700">
            <Image
              src="/images/game-icon.webp"
              height={76}
              width={76}
              alt="icon"
            />
          </div>
          <div className="flex gap-2">
            <p className="text-2xl font-medium">Ragnarok Landverse Thailand</p>
            <Image
              src="/images/verified-icon.svg"
              height={24}
              width={24}
              alt="verify-icon"
            />
          </div>
          <div>
            <p className="text-lg tracking-wider text-slate-500">
              Gravity Game Tech
            </p>
          </div>
        </div>
        {/* scroll down > 300 */}
        <div
          className={`fixed top-[70px] z-20 h-[70px] w-full border-t border-zinc-700 bg-zinc-800 px-6 ${isScroll.mid ? "hidden lg:block" : "hidden"}`}
        >
          <div className="flex h-full items-center gap-4">
            <div className="size-7 overflow-hidden rounded-md border border-zinc-700">
              <Image
                src="/images/game-icon.webp"
                height={30}
                width={30}
                alt="icon"
              />
            </div>
            <div className="flex gap-2">
              <p className="text-xl">Ragnarok Landverse Thailand</p>
              <Image
                src="/images/verified-icon.svg"
                height={24}
                width={24}
                alt="verify-icon"
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[340px] w-full bg-gradient-to-b from-zinc-900/50 to-zinc-900"></div>
      </div>

      <div className="hidden items-center justify-between px-8 lg:flex">
        <div>
          <p className="text-lg font-medium">
            Bring the memories to the new era! An exciting new addition to the
            world of nosta...
          </p>
          <div className="flex gap-4 text-lg">
            Items 5757 · Created Aug 2023 · Tax fee 10% · Chain
            <Image
              src="/images/maxi.svg"
              height={22}
              width={22}
              alt="maxi-icon"
            />
            <p>Maxi Network</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-10 rounded-lg border border-zinc-500 p-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </a>
          </div>

          <div>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-10 rounded-lg border border-zinc-500 p-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </a>
          </div>

          <div>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-10 rounded-lg border border-zinc-500 p-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </a>
          </div>

          <button className="flex h-10 items-center gap-2 rounded-lg border border-zinc-500 px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
            <p className="font-medium">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
