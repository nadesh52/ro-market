"use client";

import React from "react";

const TextInput = ({ ...props }: React.HTMLProps<HTMLInputElement>) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      className="h-[48px] w-full rounded-lg border-2 border-zinc-700 bg-zinc-900 p-2 text-lg font-medium"
      {...props}
    />
  );
};

export default TextInput;
