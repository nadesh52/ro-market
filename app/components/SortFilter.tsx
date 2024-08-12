"use client";

import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SortFilter = ({ ...props }: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      className="flex h-[48px] w-full items-center justify-between gap-3 rounded-lg border-2 border-zinc-700 bg-zinc-900 py-2 pl-3 pr-2 text-left"
      {...props}
    >
      <p>Newest</p>
      <div className="rounded-full border-2 border-zinc-700 p-1">
        <ChevronDownIcon className="size-6" />
      </div>
    </button>
  );
};

export default SortFilter;
