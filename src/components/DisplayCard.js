import React from "react";

export const DisplayCard = (props) => {
  const { picture, tag } = props;
  return (
    <div className="bg-black flex flex-col justify-center items-center mx-4 my-2 p-4  w-1/5 text-white rounded-lg ">
      <div>
        <img
          className=" hover:scale-125 transition ease-in-out delay-150"
          src={picture}
        />
      </div>
      <div>
        <p className="">{tag}</p>
      </div>
    </div>
  );
};
