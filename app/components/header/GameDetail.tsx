import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/constants";

const GameDetail = () => {
  return (
    <div>
      <p className="text-lg font-medium">
        Bring the memories to the new era! An exciting new addition to the world
        of nosta...
      </p>
      <div className="flex gap-4 text-lg">
        Items 5757 · Created Aug 2023 · Tax fee 10% · Chain
        <Image src={`${BASE_URL}/images/maxi.svg`} height={22} width={22} alt="maxi-icon" />
        <p>Maxi Network</p>
      </div>
    </div>
  );
};

export default GameDetail;
