import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import React from "react";
import SwitchInput from "./SwitchInput";

const TableFoot = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="flex h-[90px] items-center justify-center bg-zinc-900 px-10 lg:ml-[240px]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-lg font-medium">Sweep</p>
            <div>
              <SwitchInput />
            </div>
            <div className="hidden lg:block">
              Copyright © 2023 Maxion Tech LLC. All rights reserved |{" "}
              <a href="" className="font-bold">
                Agreement
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex">
              <button>
                <div className="rounded-lg p-2 hover:bg-zinc-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="size-6 fill-white"
                  >
                    <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
                  </svg>
                </div>
              </button>
              <button>
                <div className="rounded-lg p-2 hover:bg-zinc-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="size-6 fill-white"
                  >
                    <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
                  </svg>
                </div>
              </button>
              <button>
                <div className="rounded-lg p-2 hover:bg-zinc-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div>
              <button>
                <div className="flex gap-1 rounded-lg bg-zinc-800 px-2 py-3 hover:bg-zinc-700">
                  <div>
                    <GlobeAmericasIcon className="size-6 stroke-1" />
                  </div>
                  <div>English</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableFoot;
