import React, { RefObject } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { BASE_URL } from "@/constants";

interface MenuModalProps {
  isOpenMenu: boolean;
  setIsOpenMenu: (open: boolean) => void;
  menuRef: RefObject<HTMLDivElement>;
}

const MenuModal = ({ isOpenMenu, setIsOpenMenu, menuRef }: MenuModalProps) => {
  return (
    <div
      ref={menuRef}
      className={`fixed right-0 top-0 z-[900] h-full w-full bg-zinc-800/80 backdrop-blur-sm transition-opacity ${isOpenMenu ? "visible" : "invisible"}`}
    >
      <div
        className={`fixed right-0 top-0 z-[910] h-full w-80 transform bg-zinc-900 text-white transition-transform duration-300 ease-in-out ${isOpenMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between px-4">
          <h2 className="py-4 text-lg font-bold">Maxion Apps</h2>
          <button onClick={() => setIsOpenMenu(false)}>
            <XMarkIcon className="size-6" />
          </button>
        </div>

          <ul>
            <li className="flex gap-4 items-center hover:bg-zinc-700 cursor-pointer px-4 py-2">
                <div>
                  <Image
                    src={`${BASE_URL}/images/icons/menu/marketplace-icon.svg`}
                    height={55}
                    width={55}
                    alt="menu-icon"
                  />
                </div>
                <div>
                  <p className="text-lg font-medium">Marketplace</p>
                  <p className="text-sm">The Primary Market for Merchandise</p>
                </div>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default MenuModal;
