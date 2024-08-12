import React, { RefObject } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
        className={`fixed right-0 top-0 z-[910] h-full w-72 transform bg-zinc-900 text-white transition-transform duration-300 ease-in-out ${isOpenMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between px-4">
          <h2 className="p-4 text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpenMenu(false)}>
            <XMarkIcon className="size-6" />
          </button>
        </div>
        <ul>
          <li className="border-b border-gray-700 p-4">
            <button onClick={() => console.log("gg")}>item 1</button>
          </li>
          <li className="border-b border-gray-700 p-4">Item 2</li>
          <li className="border-b border-gray-700 p-4">Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuModal;
