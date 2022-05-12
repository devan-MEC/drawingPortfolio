import React from "react";
import { Banner } from "../components/Banner";

export const Sudo = () => {
  return (
    <div className="font-mono">
      <Banner />
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="flex flex-row justify-center items-center bg-black object-contain h-fit w-fit p-3 rounded-md">
            <input className="border-2 p-1 rounded-md" placeholder="password" />
            <button className="bg-white text-black p-1 rounded-md ml-3">
              sudo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
