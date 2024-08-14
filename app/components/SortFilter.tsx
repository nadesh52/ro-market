"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SortFilter = () => {
  const [selected, setSelected] = useState("Newest");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleSelected = (event: any, value: any) => {
    event.preventDefault();
    setSelected(value);
    setIsMenuOpen(false);
  };
  return (
    <div className="relative hidden lg:block">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex h-[48px] min-w-[180px] items-center justify-between gap-3 rounded-lg border-2 border-zinc-700 bg-zinc-900 py-2 pl-3 pr-2 text-left  hover:border-zinc-400 hover:bg-zinc-800"
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
              onClick={(e) => handleSelected(e, "Newest")}
              className="w-full select-none px-4 py-2 hover:bg-zinc-800"
            >
              <p className="text-left text-sm">Newest</p>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleSelected(e, "Oldest")}
              className="w-full select-none px-4 py-2 hover:bg-zinc-800"
            >
              <p className="text-left text-sm">Oldest</p>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleSelected(e, "Low To High")}
              className="w-full select-none px-4 py-2 hover:bg-zinc-800"
            >
              <p className="text-left text-sm">Price: Low to High</p>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleSelected(e, "High To Low")}
              className="w-full select-none px-4 py-2 hover:bg-zinc-800"
            >
              <p className="text-left text-sm">Price: High to Low</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortFilter;
