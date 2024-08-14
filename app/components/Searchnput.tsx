"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import FilterButton from "./FilterButton";

const SearchInput = ({ ...props }: React.HTMLProps<HTMLInputElement>) => {
  const [input, setInput] = useState("");

  const inputRef = useRef<any>(null);

  return (
    <div className="relative">
      <label>
        <input
          ref={inputRef}
          type="text"
          value={input || ""}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search by name"
          required
          className="peer h-[48px] w-[260px] lg:w-[350px] rounded-lg border-2 border-zinc-700 bg-zinc-900 py-2 pl-12 pr-28 text-lg font-medium outline-none transition-all valid:w-[370px]"
          {...props}
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <MagnifyingGlassIcon className="size-6 stroke-zinc-500 stroke-2" />
        </div>
        <button
          onClick={() => {
            setInput("");
            inputRef?.current?.focus();
          }}
          className="invisible absolute right-20 top-1/2 -translate-y-1/2 peer-valid:visible"
        >
          <XCircleIcon className="size-6 text-zinc-700 hover:text-zinc-500" />
        </button>
      </label>

      <FilterButton />
    </div>
  );
};

export default SearchInput;
