import React from "react";
import { Link } from "react-router-dom";

export const Banner = ({ isAuth }) => {
  return (
    <div className="font-mono flex flex-row justify-between items-center bg-black text-white px-4 py-2 space-x-2  sticky top-0 z-40">
      <div>
        <div>
          WhackA<p className="inline-block text-red-600">Doodle</p>!
        </div>
        {/* <p>I like to draw!</p>
         */}
      </div>
      <div className="flex flex-row  justify-between self-start">
        {isAuth && (
          <Link className="hover:text-red-600 cursor-pointer" to="/addimage">
            Add Image
          </Link>
        )}
        <Link className="ml-4 hover:text-red-600 cursor-pointer" to="/">
          <p>Home</p>
        </Link>

        <Link to="/about">
          <p className="ml-4 hover:text-red-600 cursor-pointer pr-4">About</p>
        </Link>
      </div>
    </div>
  );
};
