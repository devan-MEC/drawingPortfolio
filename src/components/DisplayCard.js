import React from "react";

export const DisplayCard = (props) => {
  const { picture, tag } = props;
  return (
    <div className="relative  m-3    border-2  overflow-hidden">
      <div className="w-full h-full object-cover  block ">
        <div className="transition-opacity ease-in-out delay-150 hover:opacity-10 ">
          <img className=" block object-cover" src={picture} alt={tag} />
        </div>
        <div className="bg-black">
          <div className="absolute top-0 left-0 hover:block -z-10 bg-black w-full h-full text-white flex flex-col justify-center items-center">
            <div className="">
              <p>{tag}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
