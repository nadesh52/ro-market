"use client";
import React from "react";

const SwitchInput = ({ ...props }: React.HTMLProps<HTMLInputElement>) => {
  return (
    <label className="relative cursor-pointer">
      <input type="checkbox" className="peer sr-only" {...props} />
      <div className="h-[25px] w-[50px] rounded-full bg-slate-400 peer-checked:bg-yellow-400"></div>
      <span className="absolute left-1 top-1/2 size-5 -translate-y-1/2 rounded-full bg-white transition-all duration-200 ease-in-out peer-checked:translate-x-7 peer-checked:bg-black"></span>
    </label>
  );
};

export default SwitchInput;
