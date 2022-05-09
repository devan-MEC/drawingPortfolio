import React from "react";

export const Banner = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-black text-white px-4 py-2 space-x-2  sticky top-0 z-40">
      <div>
        <p>Deb</p>
        {/* <p>I like to draw!</p>
         */}
      </div>
      <div className="flex flex-row  justify-between items-start">
        <p>Contact</p>
        <p className="ml-4">About</p>
      </div>
    </div>
  );
};
