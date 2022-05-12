import React from "react";

export const DisplayCard = (props) => {
  const { picture, tag } = props;
  return (
    <div className="relative  m-3      overflow-hidden border-2">
      <div className="w-full h-full object-cover  block ">
        <div className=" hover:opacity-10 ">
          <img className=" block object-cover" src={picture} alt={tag} />
        </div>
        <div className="bg-black">
          <div className="absolute top-0 left-0  -z-10 bg-black w-full h-full text-white flex flex-col justify-center items-center">
            <div className="">
              <p>{tag}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
