import { BASE_URL } from "@/constants";
import {
  DocumentMagnifyingGlassIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const str =
  "มนตร์ที่สลักไว้บนถุงมือนี้สามารถให้พลังอันเหลือเชื่อแก่พระที่สวมถุงมือ";

const Card = () => {
  return (
    <div className="w-[200px] rounded-lg border border-zinc-700 bg-zinc-900">
      <div className="h-[220px] bg-transparent">
        <div className="group h-full w-full p-3 perspective-1000">
          <div className="relative h-full w-full rounded text-center transition-all duration-300 preserve-3d group-hover:rotate-y-180">
            {/* font */}
            <div className="absolute flex h-full w-full flex-col items-center rounded bg-white [backface-visibility:hidden]">
              <div className="flex items-center justify-center overflow-hidden">
                <Image
                  src={`${BASE_URL}/images/items/1822.webp`}
                  height={140}
                  width={140}
                  alt="item-card"
                  className="bg-coverr h-[140px] w-auto bg-center"
                />
              </div>

              <div className="flex w-full flex-col gap-1 rounded-b bg-slate-300 px-2 py-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="card-slot slotted"></div>
                    <div className="card-slot empty"></div>
                    <div className="card-slot empty"></div>
                    <div className="card-slot empty"></div>
                  </div>
                  <div>
                    <Image
                      src={`${BASE_URL}/images/icons/enchant.webp`}
                      width={18}
                      height={18}
                      alt="enchant"
                    />
                  </div>
                </div>
                <div className="flex h-[35px] items-center gap-3 rounded bg-zinc-900 px-2">
                  <div>
                    <Image
                      src={`${BASE_URL}/images/icons/items/1822.webp`}
                      width={17}
                      height={17}
                      alt="item-icon"
                    />
                  </div>
                  <div className="text-sm text-white">Combo Battle Glove</div>
                </div>
              </div>
            </div>

            {/* back */}
            <div className="absolute z-[2] flex h-full w-full items-center rounded-md bg-zinc-800 rotate-y-180 [backface-visibility:hidden]">
              <div className="h-full w-full">
                <div className="flex w-full items-center justify-between p-2">
                  <div>Detail</div>
                  <div className="flex items-center gap-1">
                    <button className="rounded-md bg-zinc-900 p-1 hover:text-red-400">
                      <HeartIcon className="size-5" />
                    </button>
                    <button className="rounded-md bg-zinc-900 p-1 hover:text-yellow-400">
                      <MagnifyingGlassIcon className="size-5" />
                    </button>
                    <button className="rounded-md bg-zinc-900 p-1 hover:text-yellow-400">
                      <DocumentMagnifyingGlassIcon className="size-5" />
                    </button>
                  </div>
                </div>

                <div className="h-[160px] overflow-y-scroll p-2 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700">
                  <div className="flex flex-col gap-2 px-2 text-left text-xs">
                    <div className="border-b-2 border-b-zinc-600 pb-2">
                      <div>{str}</div>
                    </div>
                    <div>
                      เพิ่มความเสียหายของสกิล Triple Attack, Chain Combo และ
                      Combo Finish ขึ้น 15%
                    </div>

                    <div>
                      <div className="flex gap-1">
                        <div>ประเภท</div>
                        <div> สนับมือ</div>
                      </div>
                      <div className="flex gap-1">
                        <div className="text-teal-300">พลังโจมตี</div>
                        <div> 30</div>
                      </div>
                      <div className="flex gap-1">
                        <div className="text-teal-300">น้ำหนัก</div>
                        <div> 50</div>
                      </div>
                      <div className="flex gap-1">
                        <div className="text-teal-300">ระดับอาวุธ</div>
                        <div> 3</div>
                      </div>
                      <div className="flex gap-1">
                        <div>ความต้องการ</div>
                      </div>
                      <div className="flex gap-1">
                        <div>Base Level 60</div>
                      </div>
                      <div className="flex gap-1">
                        <div>Priest and Monk classes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-zinc-700">
        <div className="flex items-center justify-between px-2 pb-2">
          <div className="flex items-center gap-2">
            <div>
              <Image
                src={`${BASE_URL}/images/game-icon.webp`}
                height={16}
                width={16}
                alt="banner"
              />
            </div>

            <div className="flex items-center gap-1">
              <div className="text-xs">ROL TH:</div>
              <div className="rounded-md bg-gradient-to-r from-lime-600 to-emerald-400 px-1 py-0.5 text-xs">
                Lunatic
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer items-center gap-1 rounded-md bg-zinc-800 p-1">
            <div>
              <Image
                src={`${BASE_URL}/images/icons/nft-icon.svg`}
                width={16}
                height={16}
                alt="nft-icon"
              />
            </div>
            <span className="text-xs tracking-widest">12345</span>
          </div>
        </div>
      </div>

      <div className="group/buy relative flex cursor-pointer justify-end">
        <div className="absolute hidden w-full items-center justify-center rounded-b-lg bg-green-400 p-3 text-lg font-medium group-hover/buy:flex">
          Buy Now
        </div>
        <div className="flex items-center gap-1 p-3">
          <div>
            <Image
              src={`${BASE_URL}/images/icons/ion.svg`}
              height={18}
              width={18}
              alt="ion"
            />
          </div>
          <span className="font-medium">7</span>
          <span className="text-sm">ION</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
