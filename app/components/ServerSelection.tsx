import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const ServerSelection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const handleSelected = (event: any, value: any) => {
    event.preventDefault();
    setSelected(value);
    setIsMenuOpen(false)
  };

  return (
    <div className="relative hidden lg:block">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex h-[48px] min-w-[100px] items-center justify-between gap-3 rounded-lg border-2 border-zinc-700 bg-zinc-900 py-2 pl-3 pr-2 text-left hover:border-zinc-400 hover:bg-zinc-800"
      >
        <p>{selected}</p>
        <div className="rounded-full border-2 border-zinc-700 p-1">
          <ChevronDownIcon className="size-6" />
        </div>
      </button>
      <div
        className={`absolute z-50 w-full rounded-lg bg-zinc-950 py-1 shadow-md shadow-zinc-500 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <ul>
          <li>
            <button
              onClick={(e) => handleSelected(e, "All")}
              className="flex w-full select-none items-center gap-2 p-2 hover:bg-zinc-800"
            >
              <div className="size-6 rounded-md bg-green-400"></div>
              <p className="text-sm">All</p>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleSelected(e, "Lunatic")}
              className="flex w-full select-none items-center gap-2 p-2 hover:bg-zinc-800"
            >
              <div className="size-6 rounded-md bg-gradient-to-r from-lime-600 to-emerald-400"></div>
              <p className="text-sm">Lunatic</p>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleSelected(e, "Picky")}
              className="flex w-full select-none items-center gap-2 p-2 hover:bg-zinc-800"
            >
              <div className="size-6 rounded-md bg-gradient-to-r from-rose-500 to-orange-400"></div>
              <p className="text-sm">Picky</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServerSelection;
