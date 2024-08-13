import {
  ChartBarIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const ButtonGroup = () => {
  return (
    <div className="flex gap-2">
      <div>
        <a href="/">
          <ChartBarIcon className="size-10 rounded-lg border border-zinc-700 p-2 hover:border-zinc-400 hover:bg-zinc-700" />
        </a>
      </div>

      <div>
        <a href="/">
          <GlobeAltIcon className="size-10 rounded-lg border border-zinc-700 p-2 hover:border-zinc-400 hover:bg-zinc-700" />
        </a>
      </div>

      <div>
        <a href="/">
          <PuzzlePieceIcon className="size-10 rounded-lg border border-zinc-700 p-2 hover:border-zinc-400 hover:bg-zinc-700" />
        </a>
      </div>

      <div className="flex cursor-pointer select-none items-center gap-2 rounded-lg border border-zinc-700 px-2 hover:border-zinc-400 hover:bg-zinc-700">
        <ShareIcon className="size-5" />
        <p className="font-medium">Share</p>
      </div>
    </div>
  );
};

export default ButtonGroup;
