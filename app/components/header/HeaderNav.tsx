import React, { RefObject } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  Squares2X2Icon,
  WalletIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

interface HeaderNavProps {
  isScroll: { top: boolean };
  setIsOpenMenu: (open: boolean) => void;
  btnRef: RefObject<HTMLButtonElement>;
}

const HeaderNav = ({
  isScroll,
  setIsOpenMenu,
  btnRef,
}: HeaderNavProps) => {
  return (
    <div
      className={`fixed z-50 h-[70px] w-full p-4 ${isScroll.top ? "bg-zinc-900" : "bg-transparent"}`}
    >
      <nav className="flex justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="px-4">
            <Image src="/images/logo.svg" height={0} width={0} alt="logo" className="w-[104px] h-[22px]" />
          </a>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-between gap-4">
              <Image
                src="/images/game-icon.webp"
                height={20}
                width={20}
                alt="game-select"
              />
              <div className="font-medium">ROL THAILAND</div>
              <ChevronDownIcon
                className={`size-6 rounded-lg hover:p-1 ${isScroll.top ? "hover:bg-zinc-800" : "hover:bg-zinc-900"}`}
              />
            </button>
            <div className="h-[35px] w-[2px] bg-white/50"></div>
            <button
              className={`px-4 py-2 hidden xs:block hover:rounded-md ${isScroll.top ? "hover:bg-zinc-800" : "hover:bg-zinc-900"}`}
            >
              SELL NFTs
            </button>
          </div>
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <button className="px-4 py-2">
            <div className="flex gap-2">
              <WalletIcon className="size-6" />
              <p>Connect Wallet</p>
            </div>
          </button>
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
        <div className="flex items-center lg:hidden">
          <button ref={btnRef} onClick={() => setIsOpenMenu(true)}>
            <Bars3Icon className="size-8" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav