import React from "react";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="font-mono flex flex-row justify-between items-center bg-black text-white px-4 py-2 space-x-2  sticky top-0 z-40">
      <div>
        <p>
          WhackA<div className="inline-block text-red-600">Doodle</div>!
        </p>
        {/* <p>I like to draw!</p>
         */}
      </div>
      <div className="flex flex-row  justify-between self-start">
        <Link className="hover:text-red-600 cursor-pointer" to="/">
          <p>Home</p>
        </Link>

        <Link to="/about">
          <p className="ml-4 hover:text-red-600 cursor-pointer pr-4">About</p>
        </Link>
      </div>
    </div>
  );
};
