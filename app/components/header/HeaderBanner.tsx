import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/constants";

interface HeaderBannerProps {
  isScroll: { mid: boolean };
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ isScroll }) => {
  return (
    <div className='h-[340px] bg-[url("/images/rol-banner.png")] bg-cover bg-custom-pos bg-no-repeat'>
      <div
        className={`absolute z-20 ml-8 pt-[180px] ${isScroll.mid ? "hidden" : ""}`}
      >
        <div className="mb-4 size-20 overflow-hidden rounded-2xl border-2 border-zinc-700">
          <Image
            src={`${BASE_URL}/images/game-icon.webp`}
            height={76}
            width={76}
            alt="icon"
          />
        </div>
        <div className="flex gap-2">
          <p className="text-2xl font-medium">Ragnarok Landverse Thailand</p>
          <Image
            src={`${BASE_URL}/images/verified-icon.svg`}
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
      
      <div
        className={`fixed top-[70px] z-20 h-[70px] w-full border-t border-zinc-700 bg-zinc-800 px-6 ${isScroll.mid ? "hidden lg:block" : "hidden"}`}
      >
        <div className="flex h-full items-center gap-4">
          <div className="size-7 overflow-hidden rounded-md border border-zinc-700">
            <Image
              src={`${BASE_URL}/images/game-icon.webp`}
              height={30}
              width={30}
              alt="icon"
            />
          </div>
          <div className="flex gap-2">
            <p className="text-xl">Ragnarok Landverse Thailand</p>
            <Image
              src={`${BASE_URL}/images/verified-icon.svg`}
              height={24}
              width={24}
              alt="verify-icon"
            />
          </div>
        </div>
      </div>
      <div className="absolute h-[340px] w-full bg-gradient-to-b from-zinc-900/50 to-zinc-900"></div>
    </div>
  );
};

export default HeaderBanner